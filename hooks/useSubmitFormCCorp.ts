import { PaymentData } from "@/types";
import axios from "axios";

interface FormData {
  entityType: string;
  packageType: string;
  stateName: string;
  selectedFeatures: string;
  companyAddressOption: string;
  companyName: string;
  designator: string;
  businessPurpose: string;
  industryKeyword: string;
  stateFillingTime: string;
  clientEmail: string;
  clientFirstName: string;
  clientLastName: string;
  clientPhoneNumber: string;
  contactConsent: number;
  companyAddress: string;
  premiumServicePackage: number;
  memberNumber: number;
  members: string;
  president: string;
  secretary: string;
  treasurer: string;
  vicePresident: string;
  agentOption: string;
  agentInfo: string;
  isForeign: number;
  einFirstName: string;
  einLastName: string;
  idType: string;
  idTypeNumber: string;
  physicalStrtAddress: string;
  useBank: number;
  taxConsultationOption: string;
  licenseType: string;
  license_permit_address: string;
  shareNumber: number;
  sharePrice: number;
  shareholderNumber: number;
  shareholderMembers: string;
}

export async function submitFormCCorpData(paymentData: PaymentData, captureId: string, captureStatus: string) {
  const companyAddressData = JSON.parse(
    localStorage.getItem("/form-c-corporation/step-5") || "{}"
  );
  const agentInfoData = JSON.parse(
    localStorage.getItem("/form-c-corporation/step-8") || "{}"
  );
  const physicalStrtAddressData = JSON.parse(
    localStorage.getItem("/form-c-corporation/step-9") || "{}"
  );
  const licensePermitAddressData = JSON.parse(
    localStorage.getItem("/form-c-corporation/step-12") || "{}"
  );

  const formData: FormData = {
    entityType:
      JSON.parse(localStorage.getItem("/form-c-corporation/step-1") || "{}")
        ?.entityType || "",
    packageType:
      JSON.parse(localStorage.getItem("/form-c-corporation/step-1") || "{}")
        ?.packageType || "",
    stateName:
      JSON.parse(localStorage.getItem("/form-c-corporation/step-1") || "{}")
        ?.stateName || "",
    selectedFeatures: JSON.stringify(
      JSON.parse(localStorage.getItem("/form-c-corporation/step-1") || "{}")
        ?.selectedFeatures || ""
    ),
    companyName:
      JSON.parse(localStorage.getItem("/form-c-corporation/step-2") || "{}")
        ?.companyName || "",
    designator:
      JSON.parse(localStorage.getItem("/form-c-corporation/step-2") || "{}")
        ?.designator || "",
    businessPurpose:
      JSON.parse(localStorage.getItem("/form-c-corporation/step-2") || "{}")
        ?.businessPurpose || "",
    industryKeyword:
      JSON.parse(localStorage.getItem("/form-c-corporation/step-2") || "{}")
        ?.industryKeyword || "",
    stateFillingTime:
      JSON.parse(localStorage.getItem("/form-c-corporation/step-3") || "{}")
        ?.stateFillingTime || "",
    clientEmail:
      JSON.parse(localStorage.getItem("/form-c-corporation/step-4") || "{}")
        ?.clientEmail || "",
    clientFirstName:
      JSON.parse(localStorage.getItem("/form-c-corporation/step-4") || "{}")
        ?.clientFirstName || "",
    clientLastName:
      JSON.parse(localStorage.getItem("/form-c-corporation/step-4") || "{}")
        ?.clientLastName || "",
    clientPhoneNumber:
      JSON.parse(localStorage.getItem("/form-c-corporation/step-4") || "{}")
        ?.clientPhoneNumber || "",
    contactConsent:
      JSON.parse(localStorage.getItem("/form-c-corporation/step-4") || "{}")
        ?.contactConsent === true
        ? 1
        : 0,
    companyAddressOption:
      JSON.parse(localStorage.getItem("/form-c-corporation/step-5") || "{}")
        ?.addressOption || "",
    companyAddress: JSON.stringify({
      streetAddress: companyAddressData?.streetAddress || "",
      addressLine2: companyAddressData?.addressLine2 || "",
      city: companyAddressData?.city || "",
      country: companyAddressData?.country || "",
      state: companyAddressData?.state || "",
      zipCode: companyAddressData?.zipCode || "",
    }),
    premiumServicePackage:
      JSON.parse(localStorage.getItem("/form-c-corporation/step-6") || "{}")
        ?.premiumServicePackage === true
        ? 1
        : 0,
    memberNumber:
      JSON.parse(localStorage.getItem("/form-c-corporation/step-7") || "{}")
        ?.memberNumber || 0,
    members: JSON.stringify(
      JSON.parse(localStorage.getItem("/form-c-corporation/step-7") || "{}")?.members ||
        ""
    ),
    president:
      JSON.parse(localStorage.getItem("/form-c-corporation/step-7") || "{}")
        ?.president || "",
    secretary:
      JSON.parse(localStorage.getItem("/form-c-corporation/step-7") || "{}")
        ?.secretary || "",
    treasurer:
      JSON.parse(localStorage.getItem("/form-c-corporation/step-7") || "{}")
        ?.treasurer || "",
    vicePresident:
      JSON.parse(localStorage.getItem("/form-c-corporation/step-7") || "{}")
        ?.vicePresident || "",
    agentOption:
      JSON.parse(localStorage.getItem("/form-c-corporation/step-8") || "{}")
        ?.agentOption || "",
    agentInfo: JSON.stringify({
      memberType: agentInfoData?.memberType || "",
      firstName: agentInfoData?.firstName || "",
      lastName: agentInfoData?.lastName || "",
      companyName: agentInfoData?.companyName || "",
      streetAddress: agentInfoData?.streetAddress || "",
      addressLine2: agentInfoData?.addressLine2 || "",
      city: agentInfoData?.city || "",
      state: agentInfoData?.state || "",
      zipCode: agentInfoData?.zipCode || "",
    }),
    isForeign:
      JSON.parse(localStorage.getItem("/form-c-corporation/step-9") || "{}")
        ?.isForeign === true
        ? 1
        : 0,
    einFirstName:
      JSON.parse(localStorage.getItem("/form-c-corporation/step-9") || "{}")
        ?.getFirstName || "",
    einLastName:
      JSON.parse(localStorage.getItem("/form-c-corporation/step-9") || "{}")
        ?.getLastName || "",
    idType:
      JSON.parse(localStorage.getItem("/form-c-corporation/step-9") || "{}")?.idType ||
      "",
    idTypeNumber:
      JSON.parse(localStorage.getItem("/form-c-corporation/step-9") || "{}")?.ein || "",
    physicalStrtAddress: JSON.stringify({
      streetAddress: physicalStrtAddressData?.getStreetAddress || "",
      addressLine2: physicalStrtAddressData?.getAddressLine2 || "",
      city: physicalStrtAddressData?.getCity || "",
      state: physicalStrtAddressData?.getState || "",
      zipCode: physicalStrtAddressData?.getZipCode || "",
    }),
    useBank:
      JSON.parse(localStorage.getItem("/form-c-corporation/step-10") || "{}")
        ?.useBank === true
        ? 1
        : 0,
    taxConsultationOption:
      JSON.parse(localStorage.getItem("/form-c-corporation/step-11") || "{}")
        ?.taxConsultationOption || "",
    licenseType:
      JSON.parse(localStorage.getItem("/form-c-corporation/step-12") || "{}")
        ?.licenseType || "",
    license_permit_address: JSON.stringify({
      streetAddress: licensePermitAddressData?.getStreetAddress || "",
      addressLine2: licensePermitAddressData?.getAddressLine2 || "",
      city: licensePermitAddressData?.getCity || "",
      state: licensePermitAddressData?.getState || "",
      zipCode: licensePermitAddressData?.getZipCode || "",
    }),
    sharePrice: JSON.parse(localStorage.getItem("/form-c-corporation/step-7-1") || "{}")
      ?.sharePrice || 0,
    shareNumber: JSON.parse(
      localStorage.getItem("/form-c-corporation/step-7-1") || "{}"
    )?.shareNumber || 0,
    shareholderNumber: JSON.parse(
      localStorage.getItem("/form-c-corporation/step-7-1") || "{}"
    ).memberNumber || 0,
    shareholderMembers: JSON.stringify(
      JSON.parse(localStorage.getItem("/form-c-corporation/step-7-1") || "{}")?.members ||
        ""
    ),
  };

  // Get userId from localStorage - auth context stores it directly as "userId"
  // Fallback to userData for backwards compatibility
  const userIdFromStorage = localStorage.getItem("userId");
  const userData = JSON.parse(localStorage.getItem("userData") || "null");
  const userId = userIdFromStorage || (userData?.id) || null;

  // Include userId in the form data sent to MySQL.
  // If userId is missing, omit it so the server/DB default can apply.
  const formDataWithUserId = {
    ...formData,
    ...(userId ? { userId } : {}),
  };

  try {
    // Get form data from localStorage for order
    const step1Data = JSON.parse(localStorage.getItem("/form-c-corporation/step-1") || "{}");
    const step2Data = JSON.parse(localStorage.getItem("/form-c-corporation/step-2") || "{}");

    console.log("C-Corp submit: starting core submit", { hasUserId: !!formDataWithUserId.userId });

    // 1) Always submit the core form first
    const formSubmitResponse = await axios.post(
      "/api/mysql/form-c-corp",
      formDataWithUserId,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const userIdFromStorage2 = localStorage.getItem("userId");
    const userData2 = JSON.parse(localStorage.getItem("userData") || "null");
    const userId2 = userIdFromStorage2 || (userData2?.id) || null;

    // Get company name and state for order
    const companyName = step2Data?.companyName || formData?.companyName || "New Company";
    const stateName = step1Data?.stateName || formData?.stateName || "Unknown";

    // 2) Only continue with payments/orders/applications if the core insert succeeded.
    if (!formSubmitResponse || (formSubmitResponse.status && formSubmitResponse.status >= 400) || formSubmitResponse?.data?.success === false) {
      console.error("C-Corp core submit failed; skipping payments/orders/applications:", formSubmitResponse);
      return formSubmitResponse;
    }

    // Fire-and-log the rest. Don't block success if these fail.
    try {
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
    } catch (paymentError: any) {
      console.error("Payments API error:", paymentError?.message || paymentError);
    }

    try {
      await axios.post("/api/orders", {
        userId: userId2,
        type: "C Corporation Formation",
        company: companyName,
        customer: paymentData.name || "",
        state: stateName,
        amount: paymentData.amount,
        status: "Completed",
      });
    } catch (orderError: any) {
      console.error("Orders API error:", orderError?.message || orderError);
    }

    try {
      await axios.post("/api/applications", {
        userId: userId2,
        type: "C Corporation Formation",
        company: companyName,
        state: stateName,
        status: "submitted",
        details: JSON.stringify({
          companyName: companyName,
          packageType: formData?.packageType,
          entityType: formData?.entityType,
          stateName: stateName,
          amount: paymentData.amount,
          orderId: paymentData.orderID,
          email: formData?.clientEmail,
          phone: formData?.clientPhoneNumber,
          address: companyAddressData?.streetAddress,
          zipCode: companyAddressData?.zipCode,
          owners: formData?.members,
          members: formData?.members,
          memberDetails: formData?.members,
          memberData: formData?.members,
          president: formData?.president,
          secretary: formData?.secretary,
          treasurer: formData?.treasurer,
          vicePresident: formData?.vicePresident,
          submittedAt: new Date().toISOString(),
        }),
      });
    } catch (appError: any) {
      console.error("Applications API error:", appError?.message || appError);
    }

    try {
      await axios.post("http://localhost:3001/api/applications", {
        userId: userId2,
        type: "C Corporation Formation",
        company: companyName,
        state: stateName,
        status: "submitted",
        details: JSON.stringify({
          companyName: companyName,
          packageType: formData?.packageType,
          entityType: formData?.entityType,
          stateName: stateName,
          amount: paymentData.amount,
          orderId: paymentData.orderID,
          email: formData?.clientEmail,
          phone: formData?.clientPhoneNumber,
          submittedAt: new Date().toISOString(),
        }),
      });
    } catch (adminAppError: any) {
      console.error(
        "Admin Application API error:",
        adminAppError?.message || adminAppError
      );
    }

    // 3) Clear localStorage after core success
    localStorage.removeItem("/forms/step-final");

    console.log("C-Corp submit: clearing storage and returning success");
    localStorage.removeItem("/form-c-corporation/step-1");
    localStorage.removeItem("/form-c-corporation/step-2");
    localStorage.removeItem("/form-c-corporation/step-3");
    localStorage.removeItem("/form-c-corporation/step-4");
    localStorage.removeItem("/form-c-corporation/step-5");
    localStorage.removeItem("/form-c-corporation/step-6");
    localStorage.removeItem("/form-c-corporation/step-7");
    localStorage.removeItem("/form-c-corporation/step-7-1");
    localStorage.removeItem("/form-c-corporation/step-8");
    localStorage.removeItem("/form-c-corporation/step-9");
    localStorage.removeItem("/form-c-corporation/step-10");
    localStorage.removeItem("/form-c-corporation/step-11");
    localStorage.removeItem("/form-c-corporation/step-12");

    return formSubmitResponse;
  } catch (error: any) {
    console.error("Error submitting form data:", error);

    const status = error?.response?.status ?? 500;
    const message =
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      error?.message ||
      "Failed to submit";

    // Return a response-like object so FinalStep.tsx doesn't see undefined.
    return {
      status,
      data: {
        success: false,
        message,
      },
    };
  }
}
