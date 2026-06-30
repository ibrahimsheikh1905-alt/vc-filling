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
  nameChangeOption: number;
  newCompanyName: string;
  newDesignator: string;
  state: string;
  stateFillingTime: string;
  stateOfFormation: string;
  stateOfService: string;
  streetAddress: string;
  zipCode: string;
  userId: number | null;
}

export async function submitAmendmentFormData(
  paymentData: any,
  captureId: any,
  captureStatus: any
): Promise<any> {
  // Debug: Log what's in localStorage
  const step1Data = JSON.parse(localStorage.getItem("/amendment/step-1") || "{}");
  console.log("Step 1 localStorage data:", step1Data);
  console.log("State Filling Time from localStorage:", step1Data?.stateFillingTime);
  
  const formData: FormData = {
    entityType:
      step1Data?.entityType || "",

    state:
      step1Data?.state || "",
    companyName:
      step1Data?.companyName || "",
    designator:
      step1Data?.designator || "",

    stateFillingTime:
      step1Data?.stateFillingTime || "standard", // Default to standard if not set
    email:
      step1Data?.email || "",
    firstName:
      step1Data?.firstName || "",
    lastName:
      step1Data?.lastName || "",
    mobilePhone:
      step1Data?.mobilePhone || "",
    addressLine2:
      step1Data?.addressLine2 || "",

    streetAddress:
      step1Data?.streetAddress || "",

    city:
      step1Data?.city || "",

    zipCode:
      step1Data?.zipCode || "",

    nameChangeOption:
      step1Data?.nameChangeOption ? 1 : 0,
    newCompanyName:
      step1Data?.newCompanyName || "",
    newDesignator:
      step1Data?.newDesignator || "",
    stateOfService:
      step1Data?.stateOfService || "",
    stateOfFormation:
      step1Data?.stateOfFormation || "",
    amendInfo:
      step1Data?.amendInfo || "",

    // Get userId from localStorage or JWT token
    userId: (() => {
      const storedUserId = localStorage.getItem("userId");
      if (storedUserId) {
        return parseInt(storedUserId, 10);
      }
      // Try to decode from JWT
      const jwtToken = localStorage.getItem("jwtToken");
      if (jwtToken) {
        try {
          const base64Url = jwtToken.split('.')[1];
          const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          const jsonPayload = decodeURIComponent(
            atob(base64)
              .split('')
              .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
              .join('')
          );
          const payload = JSON.parse(jsonPayload);
          return payload.id || payload.userId || null;
        } catch (e) {
          console.error('Error decoding JWT:', e);
          return null;
        }
      }
      return null;
})(),
  };

  // Get the userId that we'll use as fallback (from client-side)
  // More robust extraction - ensure it's a number
  const getClientUserId = (): number | null => {
    // First try localStorage
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      const parsed = parseInt(storedUserId, 10);
      if (!isNaN(parsed) && parsed > 0) {
        console.log("Got userId from localStorage:", parsed);
        return parsed;
      }
    }
    
    // Try JWT token
    const jwtToken = localStorage.getItem("jwtToken");
    if (jwtToken) {
      try {
        const base64Url = jwtToken.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
          atob(base64)
            .split('')
            .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join('')
        );
        const payload = JSON.parse(jsonPayload);
        const jwtUserId = payload.id || payload.userId;
        if (jwtUserId) {
          const parsed = parseInt(String(jwtUserId), 10);
          if (!isNaN(parsed) && parsed > 0) {
            console.log("Got userId from JWT:", parsed);
            return parsed;
          }
        }
      } catch (e) {
        console.error('Error decoding JWT:', e);
      }
    }
    
    return null;
  };
  
  const clientUserId = getClientUserId();
  console.log("Client-side userId (fallback):", clientUserId);

  try {
    const response = await axios.post("/api/mysql/amendment", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

console.log("response is >>>", response);
    console.log("Full response data:", JSON.stringify(response.data));
    
    // Extract userId from the response - this is the crucial fix!
    // The API now returns the userId that was used/created for this submission
    let responseUserId: number | null = null;
    
    // Debug: Log what we receive from API
    console.log("API Response keys:", Object.keys(response.data || {}));
    console.log("API Response userId raw:", response.data?.userId, "type:", typeof response.data?.userId);
    
    // Handle different response formats - be more explicit
    const rawUserId = response.data?.userId;
    if (rawUserId !== undefined && rawUserId !== null) {
      console.log("Processing raw userId:", rawUserId);
      // Handle both string and number formats from API
      if (typeof rawUserId === 'number') {
        responseUserId = rawUserId;
      } else if (typeof rawUserId === 'string') {
        const parsed = parseInt(rawUserId, 10);
        if (!isNaN(parsed)) {
          responseUserId = parsed;
        }
      } else if (typeof rawUserId === 'object') {
        // Handle case where userId is an object
        responseUserId = rawUserId?.id || null;
      }
      console.log("Parsed responseUserId:", responseUserId);
    }
    
    const responseEmail = response.data?.userEmail;
    console.log("User from API response - ID:", responseUserId, "Email:", responseEmail);
    
// Use the userId from the API response if available, otherwise fall back to client-side
    // Prefer API response since it represents the actual user created/found for this form
    const finalUserId = responseUserId || clientUserId;
    console.log("Final userId used for orders:", finalUserId);

    await axios.post(
      "/api/payments",
      {
        paymentMethod:
          JSON.parse(localStorage.getItem("/forms/step-final") || "{}").selectedOption || "",
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

    // CRITICAL FIX: Always use the finalUserId from the amendment API response
    // This is the user that was found/created in the amendment step - that's the correct user!
    // The storedUserData might be null for guest users, but the amendment form creates/finds the user
    console.log("=== Using finalUserId for application ===");
    console.log("responseUserId:", responseUserId);
    console.log("clientUserId:", clientUserId);
    console.log("finalUserId to use:", finalUserId);
    
    // The finalUserId from the amendment API is the authoritative source
    // Use that for the application - this is the user associated with this form submission
    const orderUserId = finalUserId;
    console.log("Order/User ID being used for application:", orderUserId);
    
    // Get company name from stored data
    const companyName = formData?.companyName || 
      JSON.parse(localStorage.getItem("/amendment/step-1") || "{}")?.companyName || 
      "Unknown Company";
    const stateName = formData?.stateOfFormation || 
      JSON.parse(localStorage.getItem("/amendment/step-1") || "{}")?.stateOfFormation || 
      formData?.state || "Unknown";
    
    // Create application record in submissions (not order)
    try {
      console.log("=== Creating Application (Submissions) ===");
const appPayload = {
        userId: orderUserId,
        type: "Amendment",
        company: companyName,
        state: stateName,
        status: "Submitted",
        details: JSON.stringify({
          companyName: companyName,
          stateOfFormation: stateName,
          entityType: formData?.entityType,
          streetAddress: formData?.streetAddress || "",
          city: formData?.city || "",
          zipCode: formData?.zipCode || "",
          email: formData?.email || "",
          phone: formData?.mobilePhone || "",
          // Save ownership/members data with multiple field names for compatibility
          amendments: formData?.amendInfo || "",
          amendInfo: formData?.amendInfo || "",
          owners: formData?.amendInfo || "",
          members: formData?.amendInfo || "",
          memberDetails: formData?.amendInfo || "",
          stateFillingTime: formData?.stateFillingTime || "",
          nameChangeOption: formData?.nameChangeOption || false,
          amount: paymentData.amount,
          orderId: paymentData.orderID,
          submittedAt: new Date().toISOString()
        })
      };
      
const appResponse = await axios.post("/api/applications", appPayload, {
        headers: { "Content-Type": "application/json" }
      });
      console.log("Application created successfully:", appResponse.data);
} catch (orderError: any) {
      console.error("FULL ERROR creating application:", orderError);
      console.error("Response data:", orderError?.response?.data);
      console.error("Status:", orderError?.response?.status);
      // Alert the user
      alert("Error saving application: " + (orderError?.message || "Unknown error"));
    }

    localStorage.removeItem("/forms/step-final");
    // Clear localStorage after successful submission
    localStorage.removeItem("/amendment/step-1");
    return response;
  } catch (error) {
    console.error("Error submitting form data:", error);
    throw error;
  }
}
