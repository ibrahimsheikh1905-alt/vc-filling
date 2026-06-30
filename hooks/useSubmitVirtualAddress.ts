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
  userId: string;
  memberNumber: string;
  members: string;
  amount: string;
}

// Helper function to extract userId from JWT token
function getUserIdFromToken(): string | null {
  try {
    const jwtToken = localStorage.getItem('jwtToken');
    if (!jwtToken) return null;
    
    const parts = jwtToken.split('.');
    if (parts.length >= 2) {
      const base64Url = parts[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      const payload = JSON.parse(jsonPayload);
      return payload.id || payload.userId || null;
    }
    return null;
  } catch (error) {
    console.error("Error extracting userId from token:", error);
    return null;
  }
}

export async function submitVirtualAddressFormData(paymentData: any, captureId: any, captureStatus: any): Promise<any> {
  // Get userId from JWT token
  const userId = getUserIdFromToken();
  
  // Parse members data from step-2
  const step2Data = JSON.parse(localStorage.getItem("/virtual-address/step-2") || "{}");
  const memberNumber = step2Data?.memberNumber || "";
  const members = step2Data?.members || [];
  
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
    userId: userId || "",
    memberNumber:
      JSON.parse(localStorage.getItem("/virtual-address/step-2") || "{}")
        ?.memberNumber || "",

    members:
      JSON.stringify(
        JSON.parse(localStorage.getItem("/virtual-address/step-2") || "{}")
          ?.members
      ) || "",
    // Include payment amount for admin submissions
    amount: paymentData?.amount ? String(paymentData.amount) : "",
  };

  try {
    const response = await axios.post("/api/mysql/virtual-address", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
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
    localStorage.removeItem("/virtual-address/step-1");
    localStorage.removeItem("/virtual-address/step-2");
    
    return response;
  } catch (error) {
    console.error("Error submitting form data:", error);
    throw error;
  }
}
