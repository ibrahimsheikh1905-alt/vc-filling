import axios from "axios";

interface FormData {
  entityType: string;
  stateOfFormation: string;
  companyName: string;
  designator: string;
  dateOfFormation: string;
  einFirstName: string;
  einLastName: string;
  isForeign: string;
  idType: string;
  ein: string;
  memberCount: string;
  physicalStreetAddress: string;
  physicalAddressLine2: string;
  physicalCity: string;
  physicalState: string;
  physicalZipCode: string;
  mobilePhone: string;
  email: string;
  lastName: string;
  firstName: string;
  streetAddress: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
}

export async function submitEINFormData(paymentData: any, captureId: any, captureStatus: any): Promise<any> {
  const formData: FormData = {
    entityType:
      JSON.parse(localStorage.getItem("/ein-form/step-1") || "{}")
        ?.entityType || "",

    state:
      JSON.parse(localStorage.getItem("/ein-form/step-1") || "{}")?.state || "",
    companyName:
      JSON.parse(localStorage.getItem("/ein-form/step-1") || "{}")
        ?.companyName || "",
    designator:
      JSON.parse(localStorage.getItem("/ein-form/step-1") || "{}")
        ?.designator || "",
    email:
      JSON.parse(localStorage.getItem("/ein-form/step-1") || "{}")?.email || "",
    firstName:
      JSON.parse(localStorage.getItem("/ein-form/step-1") || "{}")?.firstName ||
      "",
    lastName:
      JSON.parse(localStorage.getItem("/ein-form/step-1") || "{}")?.lastName ||
      "",
    mobilePhone:
      JSON.parse(localStorage.getItem("/ein-form/step-1") || "{}")
        ?.mobilePhone || "",
    addressLine2:
      JSON.parse(localStorage.getItem("/ein-form/step-1") || "{}")
        ?.addressLine2 || "",

    streetAddress:
      JSON.parse(localStorage.getItem("/ein-form/step-1") || "{}")
        ?.streetAddress || "",

    city:
      JSON.parse(localStorage.getItem("/ein-form/step-1") || "{}")?.city || "",

    zipCode:
      JSON.parse(localStorage.getItem("/ein-form/step-1") || "{}")?.zipCode ||
      "",
    stateOfFormation:
      JSON.parse(localStorage.getItem("/ein-form/step-1") || "{}")
        ?.stateOfFormation || "",
    dateOfFormation:
      JSON.parse(localStorage.getItem("/ein-form/step-1") || "{}")
        ?.dateOfFormation || "",
    einFirstName:
      JSON.parse(localStorage.getItem("/ein-form/step-1") || "{}")
        ?.einFirstName || "",
    einLastName:
      JSON.parse(localStorage.getItem("/ein-form/step-1") || "{}")
        ?.einLastName || "",
    isForeign:
      JSON.parse(localStorage.getItem("/ein-form/step-1") || "{}")?.isForeign ||
      "",
    idType:
      JSON.parse(localStorage.getItem("/ein-form/step-1") || "{}")?.idType ||
      "",
    ein:
      JSON.parse(localStorage.getItem("/ein-form/step-1") || "{}")?.ein || "",
    memberCount:
      JSON.parse(localStorage.getItem("/ein-form/step-1") || "{}")
        ?.memberCount || "",
    physicalStreetAddress:
      JSON.parse(localStorage.getItem("/ein-form/step-1") || "{}")
        ?.physicalStreetAddress || "",
    physicalAddressLine2:
      JSON.parse(localStorage.getItem("/ein-form/step-1") || "{}")
        ?.physicalAddressLine2 || "",
    physicalCity:
      JSON.parse(localStorage.getItem("/ein-form/step-1") || "{}")
        ?.physicalCity || "",
    physicalState:
      JSON.parse(localStorage.getItem("/ein-form/step-1") || "{}")
        ?.physicalState || "",
    physicalZipCode:
      JSON.parse(localStorage.getItem("/ein-form/step-1") || "{}")
        ?.physicalZipCode || "",
  };

  try {
    const response = await axios.post("/api/mysql/ein-form", formData, {
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
    localStorage.removeItem("/ein-form/step-1");

    return response;
  } catch (error) {
    console.error("Error submitting form data:", error);
    throw error;
  }
}
