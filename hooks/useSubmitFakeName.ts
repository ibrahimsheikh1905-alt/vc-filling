import axios from "axios";

interface FormData {
  entityType: string;
  stateOfFormation: string;
  companyName: string;
  designator: string;
  mobilePhone: string;
  email: string;
  lastName: string;
  firstName: string;
  streetAddress: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  stateOfService: string;
  fakeCompanyName: string;
  businessPurpose: string;
}

export async function submitFakeNameFormData(paymentData: any, captureId: any, captureStatus: any): Promise<any> {
  const step1Data = JSON.parse(localStorage.getItem("/fictitious-business-name/step-1") || "{}");
  
  const formData: FormData = {
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
    stateOfService: step1Data?.stateOfService || "",
    businessPurpose: step1Data?.businessPurpose || "",
    fakeCompanyName: step1Data?.fakeCompanyName || "",
  };

  // Get userId from localStorage
  const userIdFromStorage = localStorage.getItem("userId");
  const userData = JSON.parse(localStorage.getItem("userData") || "null");
  const userId = userIdFromStorage || (userData?.id) || null;

  try {
    const response = await axios.post("/api/mysql/fake-name", formData, {
      headers: {
        "Content-Type": "application/json",
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
    
    // Get company name and state for order and application
    const companyName = formData.companyName || "Fictitious Business Name";
    const stateName = formData.stateOfService || formData.state || "Unknown";
    
// Only save to Application table for admin Submission Manager
    // Note: Order will NOT be created here - admin will create order from Submissions page when processing
    await axios.post("/api/applications", {
      userId: userId,
      type: "Fictitious Business Name",
      company: companyName,
      state: stateName,
      status: "submitted",
      details: JSON.stringify({
        companyName: companyName,
        fakeCompanyName: formData.fakeCompanyName,
        entityType: formData.entityType,
        stateOfService: formData.stateOfService,
        stateOfFormation: formData.stateOfFormation,
        designator: formData.designator,
        email: formData.email,
        phone: formData.mobilePhone,
        address: formData.streetAddress,
        addressLine2: formData.addressLine2,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        businessPurpose: formData.businessPurpose,
        submittedAt: new Date().toISOString()
      })
    });
    
    localStorage.removeItem("/forms/step-final");
    // Clear localStorage after successful submission
    localStorage.removeItem("/fictitious-business-name/step-1");
    return response;
  } catch (error) {
    console.error("Error submitting form data:", error);
    throw error;
  }
}
