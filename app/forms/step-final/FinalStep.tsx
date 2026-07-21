"use client";
import OrderSummary from "@/components/OrderSummary";
import React, { useEffect, useState } from "react";
import useLocalStorageForm from "@/hooks/useLocalStorage";
import { submitFormData } from "@/hooks/useSubmitFormLlc";
import { submitFormSCorpData } from "@/hooks/useSubmitFormSCorp";
import { submitFormCCorpData } from "@/hooks/useSubmitFormCCorp";
import { submitFormNonprofitData } from "@/hooks/useSubmitFormNonprofit";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import NavigationWrapper from "@/components/NavigationWrapper";
import { submitAmendmentFormData } from "@/hooks/useSubmitAmendment";
import { submitAnnualReportFormData } from "@/hooks/useSubmitAnnualReport";
import { submitBusinessLicenseFormData } from "@/hooks/useSubmitBusinessLicense";
import { submitCertificateOfGoodStandingFormData } from "@/hooks/useSubmitCertificateOfGoodStanding";
import { submitChangeAgentFormData } from "@/hooks/useSubmitChangeAgent";
import { submitDissolutionFormData } from "@/hooks/useSubmitDissolution";
import { submitEINFormData } from "@/hooks/useSubmitEin";
import { submitFakeNameFormData } from "@/hooks/useSubmitFakeName";
import { submitForeignQualificationFormData } from "@/hooks/useSubmitForeignQualification";
import { submitKitInfoFormData } from "@/hooks/useSubmitKitInfo";
import { submitRegisteredAgentFormData } from "@/hooks/useSubmitRegisteredAgent";
import { submitReinstatementFormData } from "@/hooks/useSubmitReinstatement";
import { submitTrademarkFormData } from "@/hooks/useSubmitTrademark";
import { submitVirtualAddressFormData } from "@/hooks/useSubmitVirtualAddress";
import Loader from "@/components/Loader";
import { useAtomValue } from "jotai";
import { totalPriceAtom } from "@/app/atoms";
import { useForm } from "react-hook-form";
import { PaymentData } from "@/types";

const StepFinal = ({ referrer }: { referrer: string }) => {
  const totalPriceValue = useAtomValue(totalPriceAtom);
  const { register, watch, setValue } = useForm();
  const termsCheckbox = watch("termsCheckbox");
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Card form state
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cardName, setCardName] = useState("");
  const [cvv, setCvv] = useState("");

  // Older/alias values that some pages set for serviceType before it was
  // standardized to the "form-*" keys used by pathMap and the submit switch below.
  const serviceTypeAliases: Record<string, string> = {
    "LLC": "form-llc",
    "C-Corporation": "form-c-corporation",
    "S-Corporation": "form-s-corporation",
    "Nonprofit": "form-nonprofit",
  };
  const rawServiceType = localStorage.getItem("serviceType");
  const serviceType = rawServiceType
    ? serviceTypeAliases[rawServiceType] || rawServiceType
    : rawServiceType;

  // Determine the correct form path based on service type
  const getFormPath = () => {
    if (serviceType) {
      const pathMap: Record<string, string> = {
        'form-llc': '/form-a-llc/step-1',
        'form-c-corporation': '/form-c-corporation/step-1',
        'form-s-corporation': '/form-s-corporation/step-1',
        'form-nonprofit': '/start-a-nonprofit/step-1',
        'amendment': '/amendment/step-1',
        'annual-report': '/annual-report/step-1',
        'business-license': '/business-license/step-1',
        'cert-good-standing': '/cert-good-standing/step-1',
        'change-agent': '/change-agent/step-1',
        'dissolution': '/dissolution/step-1',
        'ein-form': '/ein-form/step-1',
        'fake-name': '/fictitious-business-name/step-1',
        'foreign-qualification': '/foreign-qualification/step-1',
        'kit-info': '/kit-info/step-1',
        'registered-agent': '/registered-agent/step-1',
        'reinstatement': '/reinstatement/step-1',
        'trademark': '/trademark/step-1',
        'virtual-address': '/virtual-address/step-1',
      };
      return pathMap[serviceType] || referrer;
    }
    return referrer;
  };
  
  const formPath = getFormPath();

  const [formData, updateFormData] = useLocalStorageForm({
    getFirstName: "",
    getLastName: "",
    getZipCode: "",
    getCity: "",
    getAddressLine2: "",
    getStreetAddress: "",
    selectedOption: "creditCard",
    referer: formPath,
  });

  useEffect(() => {
    if (
      formPath &&
      formPath !== "No referer" &&
      formPath !== formData.referer &&
      formPath !== window.location.pathname
    ) {
      updateFormData({ ...formData, referer: formPath });
    }
  }, [formPath]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Format card number
  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    const chunks = [];
    for (let i = 0; i < cleaned.length; i += 4) {
      chunks.push(cleaned.slice(i, i + 4));
    }
    return chunks.join(" ").slice(0, 19); // Max 16 digits + 3 spaces = 19
  };

  // Format expiry date as MM/YY
  const formatExpiryDate = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length >= 2) {
      return cleaned.slice(0, 2) + "/" + cleaned.slice(2, 4);
    }
    return cleaned;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(formatCardNumber(e.target.value));
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpiryDate(formatExpiryDate(e.target.value));
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleaned = e.target.value.replace(/\D/g, "");
    setCvv(cleaned.slice(0, 4));
  };

  const handleSubmit = async () => {
    if (!termsCheckbox) {
      Swal.fire({
        icon: "warning",
        title: "Please agree to the terms and conditions",
        showConfirmButton: true,
      });
      return;
    }

    if (!cardNumber || !expiryDate || !cardName || !cvv) {
      Swal.fire({
        icon: "warning",
        title: "Please fill all card details",
        showConfirmButton: true,
      });
      return;
    }

    setLoading(true);

    const paymentData: PaymentData = {
      name: cardName,
      email: formData.getFirstName || "",
      amount: totalPriceValue,
      orderID: `CARD-${Date.now()}`,
    };

    let res;
    switch (serviceType) {
      case "form-llc":
        res = await submitFormData(paymentData, paymentData.orderID, "completed");
        break;
      case "form-s-corporation":
        res = await submitFormSCorpData(paymentData, paymentData.orderID, "completed");
        break;
      case "form-c-corporation":
        res = await submitFormCCorpData(paymentData, paymentData.orderID, "completed");
        break;
      case "form-nonprofit":
        res = await submitFormNonprofitData(paymentData, paymentData.orderID, "completed");
        break;
      case "amendment":
        res = await submitAmendmentFormData(paymentData, paymentData.orderID, "completed");
        break;
      case "annual-report":
        res = await submitAnnualReportFormData(paymentData, paymentData.orderID, "completed");
        break;
      case "business-license":
        res = await submitBusinessLicenseFormData(paymentData, paymentData.orderID, "completed");
        break;
      case "cert-good-standing":
        res = await submitCertificateOfGoodStandingFormData(paymentData, paymentData.orderID, "completed");
        break;
      case "change-agent":
        res = await submitChangeAgentFormData(paymentData, paymentData.orderID, "completed");
        break;
      case "dissolution":
        res = await submitDissolutionFormData(paymentData, paymentData.orderID, "completed");
        break;
      case "ein-form":
        res = await submitEINFormData(paymentData, paymentData.orderID, "completed");
        break;
      case "fake-name":
        res = await submitFakeNameFormData(paymentData, paymentData.orderID, "completed");
        break;
      case "foreign-qualification":
        res = await submitForeignQualificationFormData(paymentData, paymentData.orderID, "completed");
        break;
      case "kit-info":
        res = await submitKitInfoFormData(paymentData, paymentData.orderID, "completed");
        break;
      case "registered-agent":
        res = await submitRegisteredAgentFormData(paymentData, paymentData.orderID, "completed");
        break;
      case "reinstatement":
        res = await submitReinstatementFormData(paymentData, paymentData.orderID, "completed");
        break;
      case "trademark":
        res = await submitTrademarkFormData(paymentData, paymentData.orderID, "completed");
        break;
      case "virtual-address":
        res = await submitVirtualAddressFormData(paymentData, paymentData.orderID, "completed");
        break;
      default:
        res = null;
        break;
    }

// Check for successful response - handle various response formats
    const isSuccess = res?.status === 200 || res?.status === 201 || res?.data?.success === true || res?.data?.message?.includes("success");
    
// Debug logging in development
    console.log("Submission result:", { status: res?.status, data: res?.data, isSuccess });
    
    if (isSuccess) {
      localStorage.removeItem("serviceType");
      setLoading(false);
      const response = Swal.fire({
        icon: "success",
        title: "Form Submitted Successfully",
        showConfirmButton: true,
      });
      if (
        (await response).isDismissed ||
        (await response).isConfirmed ||
        (await response).value === "ok"
      ) {
// Stay on current page after success - no redirect
      }
    } else {
      setLoading(false);
      const response = Swal.fire({
        icon: "error",
        title: "Failed to Submit,\n Please try again.",
        showConfirmButton: true,
      });

      ((await response).isDismissed ||
        (await response).isConfirmed ||
        (await response).value === "ok") &&
        router.push("/");
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <NavigationWrapper>
      {loading && <Loader />}
      <div className="container my-10">
        <div className="md:flex gap-10">
          <div className="max-w-4xl grow mx-auto">
            <div className="max-w-4xl px-16 py-12 bg-white rounded-3xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Billing Information</h2>

              {/* Credit Card Form */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Card Number
                  </label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      value={expiryDate}
                      onChange={handleExpiryChange}
                      placeholder="MM/YY"
                      maxLength={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      CVV
                    </label>
                    <input
                      type="text"
                      value={cvv}
                      onChange={handleCvvChange}
                      placeholder="123"
                      maxLength={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Terms */}
              <div className="mt-6 flex gap-3 items-center p-2">
                <input
                  type="checkbox"
                  {...register("termsCheckbox", {
                    required: true,
                  })}
                />
                <p className=" font-medium">
                  I agree to the{" "}
                  <span className="text-primary">Legal Statement</span> and{" "}
                  <span className="text-primary">Cancellation Policy</span>.
                </p>
              </div>
              <p className="text-xs text-gray-500 text-center mt-4">
                By completing this purchase, you agree to our terms and
                conditions.
              </p>
            </div>
            <div className="flex justify-between mt-12">
              <button
                onClick={() => router.back()}
                className="px-8 py-2 bg-primary text-white border border-primary rounded-[30px] "
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                className="px-8 py-2 bg-primary text-white border border-primary rounded-[30px] "
              >
                Complete & Pay
              </button>
            </div>
          </div>
          <div>
            <OrderSummary referer={formData.referer} />
          </div>
        </div>
      </div>
    </NavigationWrapper>
  );
};

export default StepFinal;
