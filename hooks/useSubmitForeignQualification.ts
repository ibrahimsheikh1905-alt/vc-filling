import axios from "axios";

interface FormData {
  country: string;
  streetAddress: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  addressOption: string;
  mobilePhone: string;
  email: string;
  lastName: string;
  firstName: string;
  companyName: string;
  designator: string;
  stateOfService: string;
  entityType: string;
  stateOfFormation: string;
  agentType: string;
  agentFirstName: string;
  agentLastName: string;
  agentCompanyName: string;
  agentZipCode: string;
  agentState: string;
  agentCity: string;
  agentAddressLine2: string;
  agentStreetAddress: string;
  agentOption: string;
  memberNumber: string;
  members: string;
}

export async function submitForeignQualificationFormData(paymentData: any, captureId: any, captureStatus: any): Promise<any> {
  const formData: FormData = {
    entityType:
      JSON.parse(localStorage.getItem("/foreign-qualification/step-1") || "{}")
        ?.entityType || "",

    state:
      JSON.parse(localStorage.getItem("/foreign-qualification/step-1") || "{}")
        ?.state || "",
    companyName:
      JSON.parse(localStorage.getItem("/foreign-qualification/step-1") || "{}")
        ?.companyName || "",
    designator:
      JSON.parse(localStorage.getItem("/foreign-qualification/step-1") || "{}")
        ?.designator || "",
    email:
      JSON.parse(localStorage.getItem("/foreign-qualification/step-1") || "{}")
        ?.email || "",
    firstName:
      JSON.parse(localStorage.getItem("/foreign-qualification/step-1") || "{}")
        ?.firstName || "",
    lastName:
      JSON.parse(localStorage.getItem("/foreign-qualification/step-1") || "{}")
        ?.lastName || "",
    mobilePhone:
      JSON.parse(localStorage.getItem("/foreign-qualification/step-1") || "{}")
        ?.mobilePhone || "",
    addressLine2:
      JSON.parse(localStorage.getItem("/foreign-qualification/step-1") || "{}")
        ?.addressLine2 || "",

    streetAddress:
      JSON.parse(localStorage.getItem("/foreign-qualification/step-1") || "{}")
        ?.streetAddress || "",

    city:
      JSON.parse(localStorage.getItem("/foreign-qualification/step-1") || "{}")
        ?.city || "",

    zipCode:
      JSON.parse(localStorage.getItem("/foreign-qualification/step-1") || "{}")
        ?.zipCode || "",
    stateOfFormation:
      JSON.parse(localStorage.getItem("/foreign-qualification/step-1") || "{}")
        ?.stateOfFormation || "",
    stateOfService:
      JSON.parse(localStorage.getItem("/foreign-qualification/step-1") || "{}")
        ?.stateOfService || "",
    country:
      JSON.parse(localStorage.getItem("/foreign-qualification/step-1") || "{}")
        ?.country || "",
    addressOption:
      JSON.parse(localStorage.getItem("/foreign-qualification/step-1") || "{}")
        ?.addressOption || "",

    agentType:
      JSON.parse(localStorage.getItem("/foreign-qualification/step-2") || "{}")
        ?.agentType || "",
    agentFirstName:
      JSON.parse(localStorage.getItem("/foreign-qualification/step-2") || "{}")
        ?.agentFirstName || "",
    agentLastName:  
      JSON.parse(localStorage.getItem("/foreign-qualification/step-2") || "{}")
        ?.agentLastName || "",
    agentCompanyName:
      JSON.parse(localStorage.getItem("/foreign-qualification/step-2") || "{}")
        ?.agentCompanyName || "",
    agentZipCode:
      JSON.parse(localStorage.getItem("/foreign-qualification/step-2") || "{}")
        ?.agentZipCode || "",
    agentState:
      JSON.parse(localStorage.getItem("/foreign-qualification/step-2") || "{}")
        ?.agentState || "",
    agentCity:
      JSON.parse(localStorage.getItem("/foreign-qualification/step-2") || "{}")
        ?.agentCity || "",
    agentAddressLine2:
      JSON.parse(localStorage.getItem("/foreign-qualification/step-2") || "{}") 
        ?.agentAddressLine2 || "",
    agentStreetAddress:
      JSON.parse(localStorage.getItem("/foreign-qualification/step-2") || "{}")
        ?.agentStreetAddress || "",
    agentOption:
      JSON.parse(localStorage.getItem("/foreign-qualification/step-2") || "{}")
        ?.agentOption || "",
    memberNumber:
      JSON.parse(localStorage.getItem("/foreign-qualification/step-2") || "{}")
        ?.memberNumber || "",
    members:
      JSON.stringify(JSON.parse(localStorage.getItem("/foreign-qualification/step-2") || "{}")
        ?.members) || "",
  };

  try {
    const response = await axios.post(
      "/api/mysql/foreign-qualification",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
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
    localStorage.removeItem("/foreign-qualification/step-1");
    localStorage.removeItem("/foreign-qualification/step-2");
    
    return response;
  } catch (error) {
    console.error("Error submitting form data:", error);
    throw error;
  }
}
