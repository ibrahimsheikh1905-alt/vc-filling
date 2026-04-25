"use client";
import OrderSummary from "@/components/OrderSummary";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import useLocalStorageForm from "@/hooks/useLocalStorage";
import { submitFormData } from "@/hooks/useSubmitFormLlc";
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
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useAtomValue } from "jotai";
import { totalPriceAtom } from "@/app/atoms";
import { useForm } from "react-hook-form";
import { PaymentData } from "@/types";

const StepFinal = ({ referrer }: { referrer: string }) => {
  const totalPriceValue = useAtomValue(totalPriceAtom);
  const { register, watch } = useForm();
  const paypalCheckbox = watch("paypalCheckbox");
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paypalError, setPaypalError] = useState("");
  const [paypalSuccess, setPaypalSuccess] = useState("");

  const [formData, updateFormData] = useLocalStorageForm({
    getFirstName: "",
    getLastName: "",
    getZipCode: "",
    getCity: "",
    getAddressLine2: "",
    getStreetAddress: "",
    selectedOption: "Paypal",
    referer: referrer,
  });

  useEffect(() => {
    if (
      referrer &&
      referrer !== "No referer" &&
      referrer !== formData.referer &&
      referrer !== window.location.pathname
    ) {
      updateFormData({ ...formData, referer: referrer });
    }
  }, [referrer]);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const serviceType = localStorage.getItem("serviceType");
  const handleSubmit = async (paymentData: PaymentData, captureId: string, captureStatus: string) => {
    setLoading(true);
    let res;
    switch (serviceType) {
      case "form-llc":
        res = await submitFormData(paymentData, captureId, captureStatus);
        break;
      case "amendment":
        res = await submitAmendmentFormData(paymentData, captureId, captureStatus);
        break;
      case "annual-report":
        res = await submitAnnualReportFormData(paymentData, captureId, captureStatus);
        break;
      case "business-license":
        res = await submitBusinessLicenseFormData(paymentData, captureId, captureStatus);
        break;
      case "cert-good-standing":
        res = await submitCertificateOfGoodStandingFormData(paymentData, captureId, captureStatus);
        break;
      case "change-agent":
        res = await submitChangeAgentFormData(paymentData, captureId, captureStatus);
        break;
      case "dissolution":
        res = await submitDissolutionFormData(paymentData, captureId, captureStatus);
        break;
      case "ein-form":
        res = await submitEINFormData(paymentData, captureId, captureStatus);
        break;
      case "fake-name":
        res = await submitFakeNameFormData(paymentData, captureId, captureStatus);
        break;
      case "foreign-qualification":
        res = await submitForeignQualificationFormData(paymentData, captureId, captureStatus);
        break;
      case "kit-info":
        res = await submitKitInfoFormData(paymentData, captureId, captureStatus);
        break;
      case "registered-agent":
        res = await submitRegisteredAgentFormData(paymentData, captureId, captureStatus);
        break;
      case "reinstatement":
        res = await submitReinstatementFormData(paymentData, captureId, captureStatus);
        break;
      case "trademark":
        res = await submitTrademarkFormData(paymentData, captureId, captureStatus);
        break;
      case "virtual-address":
        res = await submitVirtualAddressFormData(paymentData, captureId, captureStatus);
        break;
      default:
        res = null;
        break;
    }

    if (res?.status === 200) {
      localStorage.removeItem("serviceType");
      res = null;
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
        router.push("/dashboard");
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

  // Paypal payment
  const createOrder = (data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: totalPriceValue,
            currency_code: "USD",
          },
          description: `Farm Market Order`,
        },
      ],
    });
  };
  const onApprove = async (data: any, actions: any) => {
    setIsProcessing(true);
    try {
      const order = await actions.order.get();
      console.log("Payment successful", order);

      // Extract payer information from PayPal response
      const payerName = order.payer?.name?.given_name || "";
      const payerEmail = order.payer?.email_address || "";

      const paymentData = {
        name: payerName,
        email: payerEmail,
        amount: totalPriceValue,
        orderID: data.orderID,
      };

      console.log("Sending to API:", paymentData);

      // Send payment data to our API
      const response = await fetch("/api/vc-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      });
      if (!response.ok) {
        const errorText = await response.text();
        console.error("API error response:", errorText);
        throw new Error("Payment processing failed");
      }
      const result = await response.json();
      console.log("API response:", result);
      console.log("Payment processed successfully!");
      if (result.success) {
        setPaypalSuccess(result.message);
        handleSubmit(paymentData, result.data.captureID, result.data.captureStatus);
      }
    } catch (error) {
      console.error("Payment failed:", error);
      setPaypalError("Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };
  const onError = (err: any) => {
    console.error("PayPal error:", err);
    setPaypalError("An error occurred with PayPal. Please try again.");
  };

  return (
    <NavigationWrapper>
      {loading && <Loader />}
      <div className="container my-10">
        <div className="md:flex gap-10">
          <div className="max-w-4xl grow mx-auto">
            <div className="max-w-4xl px-16 py-12 bg-white rounded-3xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Billing Information</h2>

              <div className="mt-4 flex gap-3 items-center p-2">
                <input
                  type="checkbox"
                  {...register("paypalCheckbox", {
                    required: true,
                  })}
                />
                <p className=" font-medium">
                  I agree to the{" "}
                  <span className="text-primary">Legal Statement</span> and{" "}
                  <span className="text-primary">Cancellation Policy</span>.
                </p>
              </div>

              {/* Paypal Buttons */}
              <div>
                {/* Processing State */}
                {isProcessing && (
                  <div className="mb-4 text-center">
                    <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-gray-900 mr-2"></div>
                    <span>Processing your payment...</span>
                  </div>
                )}
                {/* Error Message */}
                {paypalError && (
                  <div className="mb-4 p-3 bg-red-100 text-red-700 rounded text-sm">
                    {paypalError}
                  </div>
                )}
                {paypalSuccess && (
                  <div className="mb-4 p-3 bg-green-100 text-green-700 rounded text-sm">
                    {paypalSuccess}
                  </div>
                )}
                {/* PayPal Button */}
                <PayPalScriptProvider
                  options={{
                    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "",
                    currency: "USD",
                    intent: "capture",
                  }}
                >
                  <PayPalButtons
                    createOrder={createOrder}
                    onApprove={onApprove}
                    onError={onError}
                    style={{ layout: "vertical" }}
                    disabled={isProcessing || !paypalCheckbox}
                  />
                </PayPalScriptProvider>
                <p className="text-xs text-gray-500 text-center mt-4">
                  By completing this purchase, you agree to our terms and
                  conditions.
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-12">
              <button
                onClick={() => router.back()}
                className="px-8 py-2 bg-primary text-white border border-primary rounded-[30px] "
              >
                Back
              </button>
              {/* {formData.selectedOption === "Credit Card" && (
                <Link
                  href="#"
                  onClick={() => handleSubmit()}
                  className="px-8 py-2 bg-primary text-white border border-primary rounded-[30px] "
                >
                  Complete & Pay
                </Link>
              )}  */}
              {/* {formData.selectedOption === "Paypal" && (
                <div className="flex gap-1 items-center">
                  <p className="">Continue with Paypal -&gt;</p>
                  <Link
                    href="#"
                    onClick={() => handleSubmit()}
                    className="px-8 py-2 flex justify-center bg-yellow-500 border border-yellow-500 rounded-[30px] "
                  >
                    <Image
                      src="/paypal.png"
                      alt="Paypal"
                      width={70}
                      height={30}
                    />
                  </Link>
                </div>
              )} */}
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
