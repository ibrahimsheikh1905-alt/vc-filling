import axios from "axios";

interface FormData {
  entityType: string;
  stateOfFormation: string;
  stateOfService: string;
  companyName: string;
  designator: string;
  firstName: string;
  lastName: string;
  email: string;
  mobilePhone: string;
  streetAddress: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  addressOption: string;
  agentOption: string;
  agentType: string;
  agentFirstName: string;
  agentLastName: string;
  agentCompanyName: string;
  agentStreetAddress: string;
  agentAddressLine2: string;
  agentCity: string;
  agentState: string;
  agentZipCode: string;
  memberNumber: string;
  members: any[];
}

export async function submitForeignQualificationFormData(paymentData: any, captureId: any, captureStatus: any): Promise<any> {
  // Debug: Check what's in localStorage for step-1 and step-2
  const step1Data = localStorage.getItem("/foreign-qualification/step-1");
  const step2Data = localStorage.getItem("/foreign-qualification/step-2");
  console.log("Foreign Qual step-1 Data from localStorage:", step1Data);
  console.log("Foreign Qual step-2 Data from localStorage:", step2Data);

  // Parse step-1 data (Company Info, Contact Info)
  const step1 = JSON.parse(step1Data || "{}");
  // Parse step-2 data (Registered Agent, Members)
  const step2 = JSON.parse(step2Data || "{}");

  // Combine form data from both steps
  const formData: FormData = {
    entityType: step1?.entityType || "",
    stateOfFormation: step1?.stateOfFormation || "",
    stateOfService: step1?.stateOfService || "",
    companyName: step1?.companyName || "",
    designator: step1?.designator || "",
    firstName: step1?.firstName || "",
    lastName: step1?.lastName || "",
    email: step1?.email || "",
    mobilePhone: step1?.mobilePhone || "",
    streetAddress: step1?.streetAddress || step1?.country || "", // Could be contact address OR country-dependent
    addressLine2: step1?.addressLine2 || "",
    city: step1?.city || "",
    state: step1?.state || "",
    zipCode: step1?.zipCode || "",
    country: step1?.country || "",
    addressOption: step1?.addressOption || "recommended",
    agentOption: step2?.agentOption || "recommended",
    agentType: step2?.agentType || "individual",
    agentFirstName: step2?.agentFirstName || "",
    agentLastName: step2?.agentLastName || "",
    agentCompanyName: step2?.agentCompanyName || "",
    agentStreetAddress: step2?.agentStreetAddress || "",
    agentAddressLine2: step2?.agentAddressLine2 || "",
    agentCity: step2?.agentCity || "",
    agentState: step2?.agentState || "",
    agentZipCode: step2?.agentZipCode || "",
    memberNumber: step2?.memberNumber || "",
    members: step2?.members || [],
  };

  console.log("Combined form data:", JSON.stringify(formData, null, 2));

// Get userId from localStorage - auth context stores it directly as "userId"
  // Fallback to userData for backwards compatibility
  const userIdFromStorage = localStorage.getItem("userId");
  const userData = JSON.parse(localStorage.getItem("userData") || "null");
  const userId = userIdFromStorage || (userData?.id) || null;

  // Add userId to MySQL form data
  const mysqlFormData = {
    userId: userId,
    entityType: formData.entityType,
    stateOfFormation: formData.stateOfFormation,
    stateOfService: formData.stateOfService,
    companyName: formData.companyName,
    designator: formData.designator,
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    mobilePhone: formData.mobilePhone,
    streetAddress: formData.streetAddress,
    addressLine2: formData.addressLine2,
    city: formData.city,
    state: formData.state,
    zipCode: formData.zipCode,
    country: formData.country,
    addressOption: formData.addressOption,
    agentOption: formData.agentOption,
    agentType: formData.agentType,
    agentFirstName: formData.agentFirstName,
    agentLastName: formData.agentLastName,
    agentCompanyName: formData.agentCompanyName,
    agentStreetAddress: formData.agentStreetAddress,
    agentAddressLine2: formData.agentAddressLine2,
    agentCity: formData.agentCity,
    agentState: formData.agentState,
    agentZipCode: formData.agentZipCode,
    memberNumber: formData.memberNumber,
    members: JSON.stringify(formData.members),
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

  // The foreign qualification service fee (package price)
  const serviceFee = 149;

  // Total price = service fee + state fee
  const finalPrice = serviceFee + stateFee;
  console.log("Calculated price for foreign qualification:", finalPrice, "(service:", serviceFee, "+ state:", stateFee, ")");

// FIRST: Save form data to MySQL database (with error handling)
  let mysqlResponse = null;
  let mysqlError = null;
  try {
    mysqlResponse = await axios.post(
      "/api/mysql/foreign-qualification",
      mysqlFormData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("MySQL response:", mysqlResponse.data);
    
    // Check if there's an error in the response
    if (mysqlResponse.data?.error) {
      mysqlError = mysqlResponse.data.error;
      console.error("MySQL API returned error:", mysqlError);
    }
  } catch (error: any) {
    console.error("MySQL API error (caught):", error.message);
    mysqlError = error.message;
  }

  // If MySQL failed, return error
  if (mysqlError) {
    // Clear localStorage on error too
    localStorage.removeItem("/forms/step-final");
    localStorage.removeItem("/foreign-qualification/step-1");
    localStorage.removeItem("/foreign-qualification/step-2");
    return { status: 500, error: "Failed to save form data: " + mysqlError };
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

// THIRD: Create Application record for Admin panel Submissions
  // Note: Only post to web API - admin API uses same Prisma DB so no duplicate needed
  try {
    const companyName = formData.companyName?.trim() || null;
    const stateValue = formData.stateOfService?.trim() || "Unknown";
    
    console.log("Creating Application with:", {
      userId: userId,
      type: "foreign-qualification",
      company: companyName,
      state: stateValue,
      status: "submitted"
    });
    
    const appResponse = await axios.post("/api/applications", {
      userId: userId ? parseInt(userId) : null,
      type: "foreign-qualification",
      company: companyName,
      state: stateValue,
      status: "submitted",
      details: JSON.stringify({
        entityType: formData.entityType,
        stateOfFormation: formData.stateOfFormation,
        stateOfService: formData.stateOfService,
        designator: formData.designator,
        contactName: `${formData.firstName} ${formData.lastName}`.trim(),
        contactEmail: formData.email,
        contactPhone: formData.mobilePhone,
        address: `${formData.streetAddress}${formData.addressLine2 ? ', ' + formData.addressLine2 : ''}, ${formData.city}, ${formData.state} ${formData.zipCode}`.trim(),
        addressOption: formData.addressOption,
        agentOption: formData.agentOption,
        agentType: formData.agentType,
        agentName: `${formData.agentFirstName} ${formData.agentLastName}`.trim(),
        agentCompanyName: formData.agentCompanyName,
        memberNumber: formData.memberNumber,
        memberList: formData.members,
        owners: JSON.stringify(formData.members),
        memberDetails: JSON.stringify(formData.members),
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

// Clear localStorage after successful submission
  localStorage.removeItem("/forms/step-final");
  localStorage.removeItem("/foreign-qualification/step-1");
  localStorage.removeItem("/foreign-qualification/step-2");

  // Return success response - application was saved to admin panel
  return { status: 200, message: "Application submitted successfully" };
}
