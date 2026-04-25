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
  const formData: FormData = {
    businessPurpose:
      JSON.parse(localStorage.getItem("/business-license/step-1") || "{}")
        .businessPurpose || false,
    businessType:
      JSON.parse(localStorage.getItem("/business-license/step-1") || "{}")
        .businessType || false,
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

  try {
    const response = await axios.post("/api/mysql/business-license", formData, {
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
    localStorage.removeItem("/business-license/step-1");
    return response;
  } catch (error) {
    console.error("Error submitting form data:", error);
    throw error;
  }
}
