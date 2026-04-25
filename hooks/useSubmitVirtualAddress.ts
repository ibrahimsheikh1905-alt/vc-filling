import axios from "axios";

interface FormData {
  entityType: string;
  stateOfFormation: string;
  stateOfService: string;
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
  notifyStateOfService: string;

  memberNumber: string;
  members: string;
}

export async function submitVirtualAddressFormData(paymentData: any, captureId: any, captureStatus: any): Promise<any> {
  const formData: FormData = {
    entityType:
      JSON.parse(localStorage.getItem("/virtual-address/step-1") || "{}")
        ?.entityType || "",
    state:
      JSON.parse(localStorage.getItem("/virtual-address/step-1") || "{}")
        ?.state || "",
    companyName:
      JSON.parse(localStorage.getItem("/virtual-address/step-1") || "{}")
        ?.companyName || "",
    designator:
      JSON.parse(localStorage.getItem("/virtual-address/step-1") || "{}")
        ?.designator || "",
    email:
      JSON.parse(localStorage.getItem("/virtual-address/step-1") || "{}")
        ?.email || "",
    firstName:
      JSON.parse(localStorage.getItem("/virtual-address/step-1") || "{}")
        ?.firstName || "",
    lastName:
      JSON.parse(localStorage.getItem("/virtual-address/step-1") || "{}")
        ?.lastName || "",
    mobilePhone:
      JSON.parse(localStorage.getItem("/virtual-address/step-1") || "{}")
        ?.mobilePhone || "",
    addressLine2:
      JSON.parse(localStorage.getItem("/virtual-address/step-1") || "{}")
        ?.addressLine2 || "",
    streetAddress:
      JSON.parse(localStorage.getItem("/virtual-address/step-1") || "{}")
        ?.streetAddress || "",
    city:
      JSON.parse(localStorage.getItem("/virtual-address/step-1") || "{}")
        ?.city || "",
    zipCode:
      JSON.parse(localStorage.getItem("/virtual-address/step-1") || "{}")
        ?.zipCode || "",
    stateOfFormation:
      JSON.parse(localStorage.getItem("/virtual-address/step-1") || "{}")
        ?.stateOfFormation || "",
    stateOfService:
      JSON.parse(localStorage.getItem("/virtual-address/step-1") || "{}")
        ?.stateOfService || "",
    notifyStateOfService:
      JSON.parse(localStorage.getItem("/virtual-address/step-1") || "{}")
        ?.notifyStateOfService || "",
    dateOfFormation:
      JSON.parse(localStorage.getItem("/virtual-address/step-1") || "{}")
        ?.dateOfFormation || "",
    memberNumber:
      JSON.parse(localStorage.getItem("/virtual-address/step-2") || "{}")
        ?.memberNumber || "",

    members:
      JSON.stringify(
        JSON.parse(localStorage.getItem("/virtual-address/step-2") || "{}")
          ?.members
      ) || "",
  };

  try {
    const response = await axios.post("/api/mysql/virtual-address", formData, {
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
    localStorage.removeItem("/virtual-address/step-1");
    localStorage.removeItem("/virtual-address/step-2");
    
    return response;
  } catch (error) {
    console.error("Error submitting form data:", error);
    throw error;
  }
}
