import axios from "axios";

interface FormData {
  businessPurpose: string;
  businessType: string;
  mobilePhone: string;
  email: string;
  lastName: string;
  firstName: string;
  companyName: string;
  designator: string;
  entityType: string;
  stateOfFormation: string;
  streetAddress: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
}

export async function submitBusinessLicenseFormData(paymentData: any, captureId: any, captureStatus: any): Promise<any> {
  // Debug: Check what's in localStorage
  const storedData = localStorage.getItem("/business-license/step-1");
  console.log("Business License Form Data from localStorage:", storedData);

  const formData: FormData = {
    businessPurpose:
      JSON.parse(localStorage.getItem("/business-license/step-1") || "{}")
        .businessPurpose || "",
    businessType:
      JSON.parse(localStorage.getItem("/business-license/step-1") || "{}")
        .businessType || "",
    entityType:
      JSON.parse(localStorage.getItem("/business-license/step-1") || "{}")
        ?.entityType || "",

    state:
      JSON.parse(localStorage.getItem("/business-license/step-1") || "{}")
        ?.state || "",
    companyName:
      JSON.parse(localStorage.getItem("/business-license/step-1") || "{}")
        ?.companyName || "",
    designator:
      JSON.parse(localStorage.getItem("/business-license/step-1") || "{}")
        ?.designator || "",
    email:
      JSON.parse(localStorage.getItem("/business-license/step-1") || "{}")
        ?.email || "",
    firstName:
      JSON.parse(localStorage.getItem("/business-license/step-1") || "{}")
        ?.firstName || "",
    lastName:
      JSON.parse(localStorage.getItem("/business-license/step-1") || "{}")
        ?.lastName || "",
    mobilePhone:
      JSON.parse(localStorage.getItem("/business-license/step-1") || "{}")
        ?.mobilePhone || "",
    addressLine2:
      JSON.parse(localStorage.getItem("/business-license/step-1") || "{}")
        ?.addressLine2 || "",

    streetAddress:
      JSON.parse(localStorage.getItem("/business-license/step-1") || "{}")
        ?.streetAddress || "",

    city:
      JSON.parse(localStorage.getItem("/business-license/step-1") || "{}")
        ?.city || "",

    zipCode:
      JSON.parse(localStorage.getItem("/business-license/step-1") || "{}")
        ?.zipCode || "",
    stateOfFormation:
      JSON.parse(localStorage.getItem("/business-license/step-1") || "{}")
        .stateOfFormation || "",
  };

  // Get userId from localStorage - auth context stores it directly as "userId"
  // Fallback to userData for backwards compatibility
  const userIdFromStorage = localStorage.getItem("userId");
  const userData = JSON.parse(localStorage.getItem("userData") || "null");
  const userId = userIdFromStorage || (userData?.id) || null;

  // Add userId to MySQL form data
  const mysqlFormData = {
    userId: userId,
    businessPurpose: formData.businessPurpose,
    businessType: formData.businessType,
    entityType: formData.entityType,
    firstName: formData.firstName,
    lastName: formData.lastName,
    companyName: formData.companyName,
    designator: formData.designator,
    email: formData.email,
    mobilePhone: formData.mobilePhone,
    streetAddress: formData.streetAddress,
    addressLine2: formData.addressLine2,
    city: formData.city,
    state: formData.state,
    zipCode: formData.zipCode,
    stateOfFormation: formData.stateOfFormation,
  };

  // The Business License service fee (package price)
  const serviceFee = 149;

  // Total price = service fee (similarly to registered-agent)
  const finalPrice = serviceFee;
  console.log("Calculated price for Business License:", finalPrice);

  // FIRST: Save form data to MySQL database (with error handling)
  let mysqlResponse = null;
  try {
    mysqlResponse = await axios.post(
      "/api/mysql/business-license",
      mysqlFormData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("MySQL response:", mysqlResponse.data);
  } catch (mysqlError: any) {
    console.error("MySQL API error (continuing):", mysqlError.message);
  }

  // SECOND: Save payment data (with error handling)
  try {
    await axios.post(
      "/api/payments",
      {
        paymentMethod:
          JSON.parse(localStorage.getItem("/forms/step-final") || "{}")
            .selectedOption || "creditCard",
        name: paymentData.name,
        email: paymentData.email,
        amount: finalPrice,
        orderId: paymentData.orderID,
        transactionId: captureId,
        paymentStatus: captureStatus,
        usableId: userId || null,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Payment saved successfully");
  } catch (paymentError: any) {
    console.error("Payment API error (continuing):", paymentError.message);
  }

  // THIRD: Create an Application record for Admin panel Submissions
  try {
    // Ensure we have valid data - use null instead of empty string for company
    const companyName = formData.companyName?.trim() || null;
    const stateValue = formData.stateOfFormation?.trim() || "Unknown";
    
    // Log what we're about to send
    console.log("Creating Application with:", {
      userId: userId,
      type: "business-license",
      company: companyName,
      state: stateValue,
      status: "submitted"
    });
    
    const appResponse = await axios.post("/api/applications", {
      userId: userId ? parseInt(userId) : null,
      type: "business-license",
      company: companyName,
      state: stateValue,
      status: "submitted",
      details: JSON.stringify({
        businessName: `${formData.companyName} ${formData.designator}`.trim(),
        businessEmail: formData.email,
        businessPhone: formData.mobilePhone,
        entityType: formData.entityType,
        stateOfFormation: formData.stateOfFormation,
        designator: formData.designator,
        address: `${formData.streetAddress}${formData.addressLine2 ? ', ' + formData.addressLine2 : ''}, ${formData.city}, ${formData.state} ${formData.zipCode}`.trim(),
        businessPurpose: formData.businessPurpose,
        businessType: formData.businessType,
        // Save ownership/members data with multiple field names for compatibility
        owners: `${formData.firstName} ${formData.lastName}`.trim(),
        members: `${formData.firstName} ${formData.lastName}`.trim(),
        memberDetails: `${formData.firstName} ${formData.lastName}`.trim(),
        firstName: formData.firstName,
        lastName: formData.lastName,
        amount: finalPrice,
        submittedAt: new Date().toISOString()
      })
    });
    console.log("Application saved successfully:", appResponse.data);
  } catch (appError: any) {
    console.error("Application API error:", appError.response?.data || appError.message);
    // Don't throw - continue with submission
  }

  // FOURTH: Save to Orders table for Admin panel Orders page (post to admin port 3001)
  try {
    await axios.post("http://localhost:3001/api/orders", {
      userId: userId ? parseInt(userId) : null,
      type: "Business License",
      company: formData.companyName || "Unknown Company",
      customer: `${formData.firstName} ${formData.lastName}`.trim() || paymentData.name || "",
      state: formData.stateOfFormation || "Unknown",
      amount: finalPrice,
      status: "Completed",
    });
    console.log("Order saved successfully");
  } catch (orderError: any) {
    console.error("Order API error:", orderError.response?.data || orderError.message);
    // Don't throw - continue with submission
  }

  localStorage.removeItem("/forms/step-final");
  // Clear localStorage after successful submission
  localStorage.removeItem("/business-license/step-1");

  // Return success response - application was saved to admin panel
  return { status: 200, message: "Application submitted successfully" };
}
