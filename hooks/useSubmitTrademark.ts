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
  // Get data from localStorage - use the pathname as key
  const storedData = JSON.parse(localStorage.getItem("/trademark/step-1") || "{}");
  
  // Log for debugging
  console.log("Trademark form data from localStorage:", storedData);
  
  const formData: FormData = {
    entityType: storedData?.entityType || "",
    stateOfFormation: storedData?.stateOfFormation || "",
    companyName: storedData?.companyName || "",
    designator: storedData?.designator || "",
    email: storedData?.email || "",
    firstName: storedData?.firstName || "",
    lastName: storedData?.lastName || "",
    mobilePhone: storedData?.mobilePhone || "",
    addressLine2: storedData?.addressLine2 || "",
    streetAddress: storedData?.streetAddress || "",
    city: storedData?.city || "",
    // Map 'state' (Company Address State) to stateOfFormation if needed, but send actual state field
    state: storedData?.state || "",
    zipCode: storedData?.zipCode || "",
    trademarkType: storedData?.trademarkType || "",
    usingMark: storedData?.usingMark || "",
    acknowledgement: storedData?.acknowledgement || "",
    productOrService: storedData?.productOrService || "",
    trademarkNameOrSlogan: storedData?.trademarkNameOrSlogan || "",
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
    localStorage.removeItem("/trademark/step-1");
    return response;
  } catch (error) {
    console.error("Error submitting form data:", error);
    throw error;
  }
}
