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
  trademarkType: string;
  usingMark: string;
  acknowledgement: string;
  productOrService: string;
  trademarkNameOrSlogan: string;
}

export async function submitTrademarkFormData(paymentData: any, captureId: any, captureStatus: any): Promise<any> {
  const formData: FormData = {
    entityType:
      JSON.parse(localStorage.getItem("/trademark/step-1") || "{}")
        ?.entityType || "",
    state:
      JSON.parse(localStorage.getItem("/trademark/step-1") || "{}")?.state || "",
    companyName:
      JSON.parse(localStorage.getItem("/trademark/step-1") || "{}")
        ?.companyName || "",
    designator:
      JSON.parse(localStorage.getItem("/trademark/step-1") || "{}")
        ?.designator || "",
    email:
      JSON.parse(localStorage.getItem("/trademark/step-1") || "{}")?.email || "",
    firstName:
      JSON.parse(localStorage.getItem("/trademark/step-1") || "{}")?.firstName ||
      "",
    lastName:
      JSON.parse(localStorage.getItem("/trademark/step-1") || "{}")?.lastName ||
      "",
    mobilePhone:
      JSON.parse(localStorage.getItem("/trademark/step-1") || "{}")
        ?.mobilePhone || "",
    addressLine2:
      JSON.parse(localStorage.getItem("/trademark/step-1") || "{}")
        ?.addressLine2 || "",

    streetAddress:
      JSON.parse(localStorage.getItem("/trademark/step-1") || "{}")
        ?.streetAddress || "",

    city:
      JSON.parse(localStorage.getItem("/trademark/step-1") || "{}")?.city || "",

    zipCode:
      JSON.parse(localStorage.getItem("/trademark/step-1") || "{}")?.zipCode ||
      "",
    stateOfFormation:
      JSON.parse(localStorage.getItem("/trademark/step-1") || "{}")
        ?.stateOfFormation || "",
    trademarkType:
      JSON.parse(localStorage.getItem("/trademark/step-1") || "{}")
        ?.trademarkType || "",
    usingMark:
      JSON.parse(localStorage.getItem("/trademark/step-1") || "{}")?.usingMark ||
      "",
    acknowledgement:
      JSON.parse(localStorage.getItem("/trademark/step-1") || "{}")
        ?.acknowledgement || "",
    productOrService:
      JSON.parse(localStorage.getItem("/trademark/step-1") || "{}")
        ?.productOrService || "",
    trademarkNameOrSlogan:
      JSON.parse(localStorage.getItem("/trademark/step-1") || "{}")
        ?.trademarkNameOrSlogan || "",
  };

  try {
    const response = await axios.post(
      "/api/mysql/trademark",
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
    localStorage.removeItem("/trademark/step-1");
    return response;
  } catch (error) {
    console.error("Error submitting form data:", error);
    throw error;
  }
}
