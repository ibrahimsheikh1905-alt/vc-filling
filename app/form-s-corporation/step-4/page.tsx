"use client";
import NavigationWrapper from "@/components/NavigationWrapper";
import OrderSummary from "@/components/OrderSummary";
import useLocalStorageForm from "@/hooks/useLocalStorage";
import { CheckIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  clientFirstName: string;
  clientLastName: string;
  clientEmail: string;
  clientPhoneNumber: string;
  contactConsent: boolean;
};

const StepFour = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [verificationStatus, setVerificationStatus] = useState("");

  const router = useRouter();
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: { contactConsent: false } });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    updateFormData(data);
    router.push(pathname.replace(/step-\d+.*/, "step-5"));
  };

  const sendOtp = async () => {
    try {
      // Make API call to send OTP to the user's email
      await axios.post("/api/send-otp", { email: formData.clientEmail });
      setIsOtpSent(true);
      setVerificationStatus("OTP sent to your email!");
    } catch (error) {
      setVerificationStatus("Failed to send OTP.");
    }
  };

  const verifyOtp = async () => {
    try {
      // Make API call to verify the OTP
      const response = await axios.post("/api/verify-otp", {
        email: formData.clientEmail,
        otp: Number(otp),
      });
      if (response.data.success) {
        setVerificationStatus("Email verified successfully!");
        updateFormData({ emailVerified: true });
        // onEmailVerified(true); // Move to the next step
      } else {
        setVerificationStatus("Incorrect OTP.");
      }
    } catch (error) {
      setVerificationStatus("Verification failed.");
    }
  };
  const [formData, updateFormData] = useLocalStorageForm({
    clientFirstName: "",
    clientLastName: "",
    clientEmail: "",
    clientPhoneNumber: "",
    contactConsent: false,
    emailVerified: false,
  });

  useEffect(() => {
    setIsMounted(true);
    const setServiceType = () => {
      localStorage.setItem("serviceType", "form-s-corporation");
    };
    setServiceType();
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <NavigationWrapper>
      <form onSubmit={handleSubmit(onSubmit)} className="container my-10">
        <div className="md:flex gap-10">
          <div className="max-w-4xl mx-auto">
            <div className="max-w-4xl px-16 py-12 bg-white rounded-3xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Contact Person</h2>
              <p className="mb-4">
                Please provide the name of the person responsible for this order
                whom we may contact if additional information is needed.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={formData.clientFirstName}
                      {...register("clientFirstName", {
                        required: true,
                        onChange: (e) =>
                          updateFormData({ clientFirstName: e.target.value }),
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.clientFirstName && (
                      <span className="text-red-500 text-sm">
                        Please enter your first name.
                      </span>
                    )}
                  </div>
                  <div className="w-1/2">
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={formData.clientLastName}
                      {...register("clientLastName", {
                        required: true,
                        onChange: (e) =>
                          updateFormData({ clientLastName: e.target.value }),
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.clientLastName && (
                      <span className="text-red-500 text-sm">
                        Please enter your last name.
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex gap-4">
                  <div>
                    {formData.emailVerified || !isOtpSent ? (
                      <label
                        id="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email *
                      </label>
                    ) : (
                      <label
                        id="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        OTP *
                      </label>
                    )}
                    <div>
                      {formData.emailVerified || !isOtpSent ? (
                        <>
                          <input
                            type="email"
                            placeholder="Enter your email"
                            value={formData.clientEmail}
                            {...register("clientEmail", {
                              required: true,
                              onChange: (e) =>
                                updateFormData({ clientEmail: e.target.value }),
                            })}
                            readOnly={formData.emailVerified}
                            className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 ${
                              formData.emailVerified ? "bg-gray-100" : ""
                            }`}
                          />
                          {!formData.emailVerified && (
                            <button
                              type="button"
                              onClick={sendOtp}
                              className="mt-3 rounded-xl border border-primary px-2 py-1"
                            >
                              Verify Email
                            </button>
                          )}
                        </>
                      ) : (
                        <div className="">
                          <input
                            type="number"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                          <button
                            type="button"
                            onClick={verifyOtp}
                            className="mt-3 rounded-xl border border-primary px-2 py-1"
                          >
                            Verify OTP
                          </button>
                        </div>
                      )}
                      <p>{verificationStatus}</p>
                      {errors.clientEmail && (
                        <span className="text-red-500 text-sm">
                          Please enter & verify your email.
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-1/2">
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      value={formData.clientPhoneNumber}
                      {...register("clientPhoneNumber", {
                        required: true,
                        onChange: (e) =>
                          updateFormData({
                            clientPhoneNumber: e.target.value,
                          }),
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.clientPhoneNumber && (
                      <span className="text-red-500 text-sm">
                        Please enter your phone number.
                      </span>
                    )}
                  </div>
                </div>
                <label className="flex gap-2 justify-end">
                  <div className="min-h-4 max-h-4 min-w-4 max-w-4 border">
                    <input
                      hidden
                      className="hidden"
                      type="checkbox"
                      {...register("contactConsent", {
                        onChange: (e) =>
                          updateFormData({ contactConsent: e.target.checked }),
                      })}
                    />
                    {formData.contactConsent && (
                      <CheckIcon className="text-primary" />
                    )}
                  </div>
                  <p className="flex items-center text-sm font-medium text-gray-500 mb-1">
                    I consent to receiving SMS text messages and phone calls
                    from VCFilling.
                  </p>
                </label>
              </div>
            </div>
            <div className="flex justify-between mt-12">
              <Link
                href="/form-s-corporation/step-3"
                className="px-8 py-2 bg-primary text-white border border-primary rounded-[30px] "
              >
                Back
              </Link>
              <button
                className={`px-8 py-2 bg-primary text-white border border-primary rounded-[30px] ${formData.emailVerified ? "" : "cursor-not-allowed opacity-50"}`}
                type="submit"
                disabled={!formData.emailVerified}
              >
                {formData.emailVerified ? "Next" : "Verify Email Above."}
              </button>
            </div>
          </div>
          <div>
            <OrderSummary />
          </div>
        </div>
      </form>
    </NavigationWrapper>
  );
};

export default StepFour;
