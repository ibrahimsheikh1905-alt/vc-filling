import axios from "axios";

interface FormData {
  addressLine2: string;
  amendInfo: string;
  city: string;
  companyName: string;
  designator: string;
  email: string;
  entityType: string;
  firstName: string;
  lastName: string;
  mobilePhone: string;
  nameChangeOption: boolean;
  newCompanyName: string;
  newDesignator: string;
  state: string;
  stateFillingTime: string;
  stateOfFormation: string;
  stateOfService: string;
  streetAddress: string;
  zipCode: string;
}

export async function submitAmendmentFormData(
  paymentData: any,
  captureId: any,
  captureStatus: any
): Promise<any> {
  const formData: FormData = {
    entityType:
      JSON.parse(localStorage.getItem("/amendment/step-1") || "{}")
        ?.entityType || "",

    state:
      JSON.parse(localStorage.getItem("/amendment/step-1") || "{}")?.state ||
      "",
    companyName:
      JSON.parse(localStorage.getItem("/amendment/step-1") || "{}")
        ?.companyName || "",
    designator:
      JSON.parse(localStorage.getItem("/amendment/step-1") || "{}")
        ?.designator || "",

    stateFillingTime:
      JSON.parse(localStorage.getItem("/amendment/step-1") || "{}")
        ?.stateFillingTime || "",
    email:
      JSON.parse(localStorage.getItem("/amendment/step-1") || "{}")?.email ||
      "",
    firstName:
      JSON.parse(localStorage.getItem("/amendment/step-1") || "{}")
        ?.firstName || "",
    lastName:
      JSON.parse(localStorage.getItem("/amendment/step-1") || "{}")?.lastName ||
      "",
    mobilePhone:
      JSON.parse(localStorage.getItem("/amendment/step-1") || "{}")
        ?.mobilePhone || "",
    addressLine2:
      JSON.parse(localStorage.getItem("/amendment/step-1") || "{}")
        ?.addressLine2 || "",

    streetAddress:
      JSON.parse(localStorage.getItem("/amendment/step-1") || "{}")
        ?.streetAddress || "",

    city:
      JSON.parse(localStorage.getItem("/amendment/step-1") || "{}")?.city || "",

    zipCode:
      JSON.parse(localStorage.getItem("/amendment/step-1") || "{}")?.zipCode ||
      "",

    nameChangeOption:
      JSON.parse(localStorage.getItem("/amendment/step-1") || "{}")
        .nameChangeOption || false,
    newCompanyName:
      JSON.parse(localStorage.getItem("/amendment/step-1") || "{}")
        .newCompanyName || "",

    newDesignator:
      JSON.parse(localStorage.getItem("/amendment/step-1") || "{}")
        .newDesignator || "",

    stateOfService:
      JSON.parse(localStorage.getItem("/amendment/step-1") || "{}")
        .stateOfService || "",

    stateOfFormation:
      JSON.parse(localStorage.getItem("/amendment/step-1") || "{}")
        .stateOfFormation || "",
    amendInfo:
      JSON.parse(localStorage.getItem("/amendment/step-1") || "{}").amendInfo ||
      "",
  };

  try {
    const response = await axios.post("/api/mysql/amendment", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("response is >>>", response);

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
        usableId: response.data.usableId,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    localStorage.removeItem("/forms/step-final");
    // Clear localStorage after successful submission
    localStorage.removeItem("/amendment/step-1");
    return response;
  } catch (error) {
    console.error("Error submitting form data:", error);
    throw error;
  }
}
