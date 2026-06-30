import axios from "axios";

interface FormData {
  entityType: string;
  stateOfFormation: string;
  companyName: string;
  designator: string;
  dateOfFormation: string;
  mobilePhone: string;
  email: string;
  lastName: string;
  firstName: string;
  streetAddress: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;

  memberNumber: string;
  members: string;
  sameAsCompanyAddress: boolean;
  mailStreetAddress: string;
  mailAddressLine2: string;
  mailCity: string;
  mailState: string;
  mailZipCode: string;
  agentType: string;
  agentFirstName: string;
  agentLastName: string;
  agentCompanyName: string;
  agentZipCode: string;
  agentState: string;
  agentCity: string;
  agentAddressLine2: string;
  agentStreetAddress: string;
  amount: number;
}

export async function submitAnnualReportFormData(paymentData: any, captureId: any, captureStatus: any): Promise<any> {
  // Get data from localStorage for both steps
  const step1Data = JSON.parse(localStorage.getItem("/annual-report/step-1") || "{}");
  const step2Data = JSON.parse(localStorage.getItem("/annual-report/step-2") || "{}");
  
  // Get amount from paymentData - this is the total price calculated by OrderSummary
  const paymentAmount = paymentData?.amount || 0;
  
  // Debug log to help troubleshoot
  console.log("=== Annual Report Submission ===");
  console.log("Step 1 data:", step1Data);
  console.log("Step 2 data:", step2Data);
  console.log("Payment amount:", paymentAmount);
  
  // Validate required fields are present before sending
  if (!step1Data.companyName || !step1Data.entityType) {
    console.error("Missing required fields:", { 
      companyName: step1Data.companyName, 
      entityType: step1Data.entityType 
    });
    throw new Error("Missing required fields: companyName or entityType");
  }
  
  const formData: FormData = {
    agentType: step2Data?.agentType || "",
    agentFirstName: step2Data?.agentFirstName || "",
    agentLastName: step2Data?.agentLastName || "",
    agentCompanyName: step2Data?.agentCompanyName || "",
    agentZipCode: step2Data?.agentZipCode || "",
    agentState: step2Data?.agentState || "",
    agentCity: step2Data?.agentCity || "",
    agentAddressLine2: step2Data?.agentAddressLine2 || "",
    agentStreetAddress: step2Data?.agentStreetAddress || "",

    entityType: step1Data?.entityType || "",
    state: step1Data?.state || "",
    companyName: step1Data?.companyName || "",
    designator: step1Data?.designator || "",
    email: step1Data?.email || "",
    firstName: step1Data?.firstName || "",
    lastName: step1Data?.lastName || "",
    mobilePhone: step1Data?.mobilePhone || "",
    addressLine2: step1Data?.addressLine2 || "",
    streetAddress: step1Data?.streetAddress || "",
    city: step1Data?.city || "",
    zipCode: step1Data?.zipCode || "",
    stateOfFormation: step1Data?.stateOfFormation || "",
    dateOfFormation: step1Data?.dateOfFormation || "",

    sameAsCompanyAddress: step2Data?.sameAsCompanyAddress || false,
    mailStreetAddress: step2Data?.mailStreetAddress || "",
    mailAddressLine2: step2Data?.mailAddressLine2 || "",
    mailCity: step2Data?.mailCity || "",
    mailState: step2Data?.mailState || "",
    mailZipCode: step2Data?.mailZipCode || "",
    memberNumber: step2Data?.memberNumber || "",
    members: JSON.stringify(step2Data?.members || []),
    
    // Include the payment amount so it can be stored in the Application details
    amount: paymentAmount,
  };

  console.log("Sending form data:", formData);

  try {
// Get userId from localStorage - this is set when user logs in
    const userId = localStorage.getItem("userId") || null;
    
    const response = await axios.post("/api/mysql/annual-report", formData, {
      headers: {
        "Content-Type": "application/json",
        "userId": userId,
      },
    });
    
    await axios.post(
      "/api/payments",
      {
        paymentMethod:
          JSON.parse(localStorage.getItem("/forms/step-final") || "{}")
            .selectedOption || "",
        name: paymentData.name,
        email: paymentData.email,
        amount: paymentData.amount,
        orderId: paymentData.orderID,
        transactionId: captureId, 
        paymentStatus: captureStatus,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    
    localStorage.removeItem("/forms/step-final");
    // Clear localStorage after successful submission
    localStorage.removeItem("/annual-report/step-1");
    localStorage.removeItem("/annual-report/step-2");
    
    return response;
  } catch (error) {
    console.error("Error submitting form data:", error);
    throw error;
  }
}
