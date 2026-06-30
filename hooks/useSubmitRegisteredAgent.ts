import axios from "axios";

interface FormData {
  agentChangeOption: boolean;
  mobilePhone: string;
  email: string;
  lastName: string;
  firstName: string;
  companyName: string;
  designator: string;
  stateOfService: string;
  entityType: string;
  stateOfFormation: string;
  streetAddress: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
}

export async function submitRegisteredAgentFormData(paymentData: any, captureId: any, captureStatus: any): Promise<any> {
  // Debug: Check what's in localStorage
  const storedData = localStorage.getItem("/registered-agent/step-1");
  console.log("Registered Agent Form Data from localStorage:", storedData);

  const formData: FormData = {
    agentChangeOption:
      JSON.parse(localStorage.getItem("/registered-agent/step-1") || "{}")
        .agentChangeOption || false,
    entityType:
      JSON.parse(localStorage.getItem("/registered-agent/step-1") || "{}")
        ?.entityType || "",

    state:
      JSON.parse(localStorage.getItem("/registered-agent/step-1") || "{}")
        ?.state || "",
    companyName:
      JSON.parse(localStorage.getItem("/registered-agent/step-1") || "{}")
        ?.companyName || "",
    designator:
      JSON.parse(localStorage.getItem("/registered-agent/step-1") || "{}")
        ?.designator || "",
    email:
      JSON.parse(localStorage.getItem("/registered-agent/step-1") || "{}")
        ?.email || "",
    firstName:
      JSON.parse(localStorage.getItem("/registered-agent/step-1") || "{}")
        ?.firstName || "",
    lastName:
      JSON.parse(localStorage.getItem("/registered-agent/step-1") || "{}")
        ?.lastName || "",
    mobilePhone:
      JSON.parse(localStorage.getItem("/registered-agent/step-1") || "{}")
        ?.mobilePhone || "",
    addressLine2:
      JSON.parse(localStorage.getItem("/registered-agent/step-1") || "{}")
        ?.addressLine2 || "",

    streetAddress:
      JSON.parse(localStorage.getItem("/registered-agent/step-1") || "{}")
        ?.streetAddress || "",

    city:
      JSON.parse(localStorage.getItem("/registered-agent/step-1") || "{}")
        ?.city || "",

    zipCode:
      JSON.parse(localStorage.getItem("/registered-agent/step-1") || "{}")
        ?.zipCode || "",
    stateOfService:
      JSON.parse(localStorage.getItem("/registered-agent/step-1") || "{}")
        .stateOfService || "",

    stateOfFormation:
      JSON.parse(localStorage.getItem("/registered-agent/step-1") || "{}")
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
    agentChangeOption: formData.agentChangeOption,
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
    stateOfService: formData.stateOfService,
    stateOfFormation: formData.stateOfFormation,
  };

  // Get the state of service to calculate the price
  const stateOfServiceValue = formData.stateOfService;
  let stateFee = 149; // Default state fee

  try {
    // Try to get state fee from stateFees data
    const { getStateFee } = await import("@/data/stateFeeData");
    if (getStateFee && stateOfServiceValue) {
      stateFee = getStateFee(stateOfServiceValue) || 149;
    }
  } catch (feeError) {
    console.log("Using default state fee:", feeError);
  }

  // The registered agent service fee (package price)
  const serviceFee = 149;

  // Total price = service fee + state fee
  const finalPrice = serviceFee + stateFee;
  console.log("Calculated price for registered agent:", finalPrice, "(service:", serviceFee, "+ state:", stateFee, ")");

  // FIRST: Save form data to MySQL database (with error handling)
  let mysqlResponse = null;
  try {
    mysqlResponse = await axios.post(
      "/api/mysql/registered-agent",
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
    const stateValue = formData.stateOfService?.trim() || "Unknown";
    
    // Log what we're about to send
    console.log("Creating Application with:", {
      userId: userId,
      type: "registered-agent",
      company: companyName,
      state: stateValue,
      status: "submitted"
    });
    
const appResponse = await axios.post("/api/applications", {
      userId: userId ? parseInt(userId) : null,
      type: "registered-agent",
      company: companyName,
      state: stateValue,
      status: "submitted",
      details: JSON.stringify({
        agentName: `${formData.firstName} ${formData.lastName}`.trim(),
        agentEmail: formData.email,
        agentPhone: formData.mobilePhone,
        entityType: formData.entityType,
        stateOfFormation: formData.stateOfFormation,
        designator: formData.designator,
        address: `${formData.streetAddress}${formData.addressLine2 ? ', ' + formData.addressLine2 : ''}, ${formData.city}, ${formData.state} ${formData.zipCode}`.trim(),
        agentChangeOption: formData.agentChangeOption,
        agentInfo: `${formData.firstName} ${formData.lastName}`.trim(),
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
      type: "Registered Agent",
      company: formData.companyName || "Unknown Company",
      customer: `${formData.firstName} ${formData.lastName}`.trim() || paymentData.name || "",
      state: formData.stateOfService || "Unknown",
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
  localStorage.removeItem("/registered-agent/step-1");

  // Return success response - application was saved to admin panel
  return { status: 200, message: "Application submitted successfully" };
}
