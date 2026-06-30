import axios from "axios";

interface FormData {
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

export async function submitCertificateOfGoodStandingFormData(paymentData: any, captureId: any, captureStatus: any): Promise<any> {
  const formData: FormData = {
    stateOfService:
      JSON.parse(localStorage.getItem("/cert-good-standing/step-1") || "{}")
        ?.stateOfService || "",
    entityType:
      JSON.parse(localStorage.getItem("/cert-good-standing/step-1") || "{}")
        ?.entityType || "",

    state:
      JSON.parse(localStorage.getItem("/cert-good-standing/step-1") || "{}")
        ?.state || "",
    companyName:
      JSON.parse(localStorage.getItem("/cert-good-standing/step-1") || "{}")
        ?.companyName || "",
    designator:
      JSON.parse(localStorage.getItem("/cert-good-standing/step-1") || "{}")
        ?.designator || "",
    email:
      JSON.parse(localStorage.getItem("/cert-good-standing/step-1") || "{}")
        ?.email || "",
    firstName:
      JSON.parse(localStorage.getItem("/cert-good-standing/step-1") || "{}")
        ?.firstName || "",
    lastName:
      JSON.parse(localStorage.getItem("/cert-good-standing/step-1") || "{}")
        ?.lastName || "",
    mobilePhone:
      JSON.parse(localStorage.getItem("/cert-good-standing/step-1") || "{}")
        ?.mobilePhone || "",
    addressLine2:
      JSON.parse(localStorage.getItem("/cert-good-standing/step-1") || "{}")
        ?.addressLine2 || "",

    streetAddress:
      JSON.parse(localStorage.getItem("/cert-good-standing/step-1") || "{}")
        ?.streetAddress || "",

    city:
      JSON.parse(localStorage.getItem("/cert-good-standing/step-1") || "{}")
        ?.city || "",

    zipCode:
      JSON.parse(localStorage.getItem("/cert-good-standing/step-1") || "{}")
        ?.zipCode || "",
stateOfFormation:
      JSON.parse(localStorage.getItem("/cert-good-standing/step-1") || "{}")
        ?.stateOfFormation || "",
  };

  // Get userId from localStorage
  const userId = localStorage.getItem("userId");
  const userIdNum = userId ? parseInt(userId) : null;

  // Add userId to form data
  const formDataWithUserId = {
    ...formData,
    userId: userIdNum,
  };

  try {
    const response = await axios.post(
      "/api/mysql/cert-good-standing",
      formDataWithUserId,
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
    
// Also save to Application table for Admin panel Submissions
    try {
      await axios.post("/api/applications", {
        userId: userIdNum,
        type: "cert-good-standing",
        company: formData.companyName || null,
        state: formData.stateOfService || "Unknown",
        status: "submitted",
        details: JSON.stringify({
          entityType: formData.entityType,
          stateOfFormation: formData.stateOfFormation,
          designator: formData.designator,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          mobilePhone: formData.mobilePhone,
          address: `${formData.streetAddress}${formData.addressLine2 ? ', ' + formData.addressLine2 : ''}, ${formData.city}, ${formData.state} ${formData.zipCode}`.trim(),
          amount: paymentData.amount,
          submittedAt: new Date().toISOString(),
          // Include ownership/members data with multiple field names for compatibility with admin submissions view
          owners: formData.firstName && formData.lastName ? `${formData.firstName} ${formData.lastName}` : "",
          members: formData.firstName && formData.lastName ? `${formData.firstName} ${formData.lastName}` : "",
          memberDetails: formData.firstName && formData.lastName ? `${formData.firstName} ${formData.lastName}` : "",
        })
      });
    } catch (appError) {
      console.error("Application API error:", appError);
    }
    
// Also save to Orders table for Admin panel Orders page (post to admin port 3001)
    try {
      await axios.post("http://localhost:3001/api/orders", {
        userId: userIdNum,
        type: "Certificate of Good Standing",
        company: formData.companyName || "Unknown Company",
        customer: `${formData.firstName} ${formData.lastName}`.trim() || paymentData.name || "",
        state: formData.stateOfService || "Unknown",
        amount: paymentData.amount,
        status: "Completed",
      });
    } catch (orderError) {
      console.error("Order API error:", orderError);
    }
    
    localStorage.removeItem("/forms/step-final");
    // Clear localStorage after successful submission
    localStorage.removeItem("/cert-good-standing/step-1");

    return response;
  } catch (error) {
    console.error("Error submitting form data:", error);
    throw error;
  }
}
