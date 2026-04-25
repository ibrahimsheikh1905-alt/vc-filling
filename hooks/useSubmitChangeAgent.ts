import axios from "axios";

interface FormData {
  agentType: string;
  agentFirstName: string;
  agentLastName: string;
  agentCompanyName: string;
  agentZipCode: string;
  agentState: string;
  agentCity: string;
  agentAddressLine2: string;
  agentStreetAddress: string;
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

export async function submitChangeAgentFormData(paymentData: any, captureId: any, captureStatus: any): Promise<any> {
  const formData: FormData = {
    agentType:
      JSON.parse(localStorage.getItem("/change-agent/step-1") || "{}")?.agentType || "",
    agentFirstName:
      JSON.parse(localStorage.getItem("/change-agent/step-1") || "{}")
        ?.agentFirstName || "",
    agentLastName:
      JSON.parse(localStorage.getItem("/change-agent/step-1") || "{}")
        ?.agentLastName || "",
    agentCompanyName:
      JSON.parse(localStorage.getItem("/change-agent/step-1") || "{}")
        ?.agentCompanyName || "",
    agentZipCode:
      JSON.parse(localStorage.getItem("/change-agent/step-1") || "{}")
        ?.agentZipCode || "",
    agentState:
      JSON.parse(localStorage.getItem("/change-agent/step-1") || "{}")
        ?.agentState || "",
    agentCity:
      JSON.parse(localStorage.getItem("/change-agent/step-1") || "{}")
        ?.agentCity || "",
    agentAddressLine2:
      JSON.parse(localStorage.getItem("/change-agent/step-1") || "{}")
        ?.agentAddressLine2 || "",
    agentStreetAddress:
      JSON.parse(localStorage.getItem("/change-agent/step-1") || "{}")
        ?.agentStreetAddress || "",
    stateOfService:
      JSON.parse(localStorage.getItem("/change-agent/step-1") || "{}")
    ?. stateOfService || "",
    entityType:
      JSON.parse(localStorage.getItem("/change-agent/step-1") || "{}")
        ?.entityType || "",

    state:
      JSON.parse(localStorage.getItem("/change-agent/step-1") || "{}")
        ?.state || "",
    companyName:
      JSON.parse(localStorage.getItem("/change-agent/step-1") || "{}")
        ?.companyName || "",
    designator:
      JSON.parse(localStorage.getItem("/change-agent/step-1") || "{}")
        ?.designator || "",
    email:
      JSON.parse(localStorage.getItem("/change-agent/step-1") || "{}")
        ?.email || "",
    firstName:
      JSON.parse(localStorage.getItem("/change-agent/step-1") || "{}")
        ?.firstName || "",
    lastName:
      JSON.parse(localStorage.getItem("/change-agent/step-1") || "{}")
        ?.lastName || "",
    mobilePhone:
      JSON.parse(localStorage.getItem("/change-agent/step-1") || "{}")
        ?.mobilePhone || "",
    addressLine2:
      JSON.parse(localStorage.getItem("/change-agent/step-1") || "{}")
        ?.addressLine2 || "",

    streetAddress:
      JSON.parse(localStorage.getItem("/change-agent/step-1") || "{}")
        ?.streetAddress || "",

    city:
      JSON.parse(localStorage.getItem("/change-agent/step-1") || "{}")
        ?.city || "",

    zipCode:
      JSON.parse(localStorage.getItem("/change-agent/step-1") || "{}")
        ?.zipCode || "",
    stateOfFormation:
      JSON.parse(localStorage.getItem("/change-agent/step-1") || "{}")
        .stateOfFormation || "",
  };

  try {
    const response = await axios.post("/api/mysql/change-agent", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    await axios.post(
      "/api/payment/",
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
    localStorage.removeItem("/change-agent/step-1");

    return response;
  } catch (error) {
    console.error("Error submitting form data:", error);
    throw error;
  }
}
