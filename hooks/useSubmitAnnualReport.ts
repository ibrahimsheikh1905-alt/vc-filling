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
}

export async function submitAnnualReportFormData(paymentData: any, captureId: any, captureStatus: any): Promise<any> {
  const formData: FormData = {
    agentType:
      JSON.parse(localStorage.getItem("/annual-report/step-2") || "{}")
        ?.agentType || "",
    agentFirstName:
      JSON.parse(localStorage.getItem("/annual-report/step-2") || "{}")
        ?.agentFirstName || "",
    agentLastName:
      JSON.parse(localStorage.getItem("/annual-report/step-2") || "{}")
        ?.agentLastName || "",
    agentCompanyName:
      JSON.parse(localStorage.getItem("/annual-report/step-2") || "{}")
        ?.agentCompanyName || "",
    agentZipCode:
      JSON.parse(localStorage.getItem("/annual-report/step-2") || "{}")
        ?.agentZipCode || "",
    agentState:
      JSON.parse(localStorage.getItem("/annual-report/step-2") || "{}")
        ?.agentState || "",
    agentCity:
      JSON.parse(localStorage.getItem("/annual-report/step-2") || "{}")
        ?.agentCity || "",
    agentAddressLine2:
      JSON.parse(localStorage.getItem("/annual-report/step-2") || "{}")
        ?.agentAddressLine2 || "",
    agentStreetAddress:
      JSON.parse(localStorage.getItem("/annual-report/step-2") || "{}")
        ?.agentStreetAddress || "",

    entityType:
      JSON.parse(localStorage.getItem("/annual-report/step-1") || "{}")
        ?.entityType || "",

    state:
      JSON.parse(localStorage.getItem("/annual-report/step-1") || "{}")
        ?.state || "",
    companyName:
      JSON.parse(localStorage.getItem("/annual-report/step-1") || "{}")
        ?.companyName || "",
    designator:
      JSON.parse(localStorage.getItem("/annual-report/step-1") || "{}")
        ?.designator || "",
    email:
      JSON.parse(localStorage.getItem("/annual-report/step-1") || "{}")
        ?.email || "",
    firstName:
      JSON.parse(localStorage.getItem("/annual-report/step-1") || "{}")
        ?.firstName || "",
    lastName:
      JSON.parse(localStorage.getItem("/annual-report/step-1") || "{}")
        ?.lastName || "",
    mobilePhone:
      JSON.parse(localStorage.getItem("/annual-report/step-1") || "{}")
        ?.mobilePhone || "",
    addressLine2:
      JSON.parse(localStorage.getItem("/annual-report/step-1") || "{}")
        ?.addressLine2 || "",

    streetAddress:
      JSON.parse(localStorage.getItem("/annual-report/step-1") || "{}")
        ?.streetAddress || "",

    city:
      JSON.parse(localStorage.getItem("/annual-report/step-1") || "{}")?.city ||
      "",

    zipCode:
      JSON.parse(localStorage.getItem("/annual-report/step-1") || "{}")
        ?.zipCode || "",
    stateOfFormation:
      JSON.parse(localStorage.getItem("/annual-report/step-1") || "{}")
        ?.stateOfFormation || "",
    dateOfFormation:
      JSON.parse(localStorage.getItem("/annual-report/step-1") || "{}")
        ?.dateOfFormation || "",

    sameAsCompanyAddress:
      JSON.parse(localStorage.getItem("/annual-report/step-2") || "{}")
        ?.sameAsCompanyAddress || false,

    mailStreetAddress:
      JSON.parse(localStorage.getItem("/annual-report/step-2") || "{}")
        ?.mailStreetAddress || "",

    mailAddressLine2:
      JSON.parse(localStorage.getItem("/annual-report/step-2") || "{}")
        ?.mailAddressLine2 || "",

    mailCity:
      JSON.parse(localStorage.getItem("/annual-report/step-2") || "{}")
        ?.mailCity || "",

    mailState:
      JSON.parse(localStorage.getItem("/annual-report/step-2") || "{}")
        ?.mailState || "",

    mailZipCode:
      JSON.parse(localStorage.getItem("/annual-report/step-2") || "{}")
        ?.mailZipCode || "",

    memberNumber:
      JSON.parse(localStorage.getItem("/annual-report/step-2") || "{}")
        ?.memberNumber || "",
    members:
      JSON.stringify(
        JSON.parse(localStorage.getItem("/annual-report/step-2") || "{}")
          ?.members
      ) || "",
  };

  try {
    const response = await axios.post("/api/mysql/annual-report", formData, {
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
    localStorage.removeItem("/annual-report/step-1");
    localStorage.removeItem("/annual-report/step-2");
    
    return response;
  } catch (error) {
    console.error("Error submitting form data:", error);
    throw error;
  }
}
