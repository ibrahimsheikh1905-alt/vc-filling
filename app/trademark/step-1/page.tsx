"use client";
import React, { useEffect, useState } from "react";
import {
  ChevronDownIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import OrderSummary from "@/components/OrderSummary";
import useLocalStorageForm from "@/hooks/useLocalStorage";
import StepNavigation from "@/components/StepNavigation";
import { statesInUS } from "@/data";
import NavigationWrapper from "@/components/NavigationWrapper";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";

type Inputs = {
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
};

const StepOne = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [verificationStatus, setVerificationStatus] = useState("");

  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: { usingMark: "true" } });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    updateFormData(data);
    router.push("/forms/step-final");
  };
  // console.log(watch("nameChangeOption"));

  const sendOtp = async () => {
    try {
      // Make API call to send OTP to the user's email
      await axios.post("/api/send-otp", { email: formData.email });
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
        email: formData.email,
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
    entityType: "",
    stateOfFormation: "",
    companyName: "",
    designator: "",
    mobilePhone: "",
    email: "",
    lastName: "",
    firstName: "",
    streetAddress: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    trademarkType: "",
    usingMark: "true",
    acknowledgement: "",
    productOrService: "",
    trademarkNameOrSlogan: "",
    emailVerified: false,
  });

  useEffect(() => {
    setIsMounted(true);
    const setServiceType = () => {
      localStorage.setItem("serviceType", "trademark");
    };
    setServiceType();
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <NavigationWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container my-10 ">
          <div className="md:flex gap-10 ">
            <div className="max-w-4xl mx-auto max-sm:mx-5">
              <h1 className="text-3xl font-bold ">Register a Trademark</h1>
              <p className="text-gray-600">
                Protecting your trademark can really pay dividends. Not only is
                it a valuable property asset, but it&apos;s also your brand,
                your reputation. The reputation you have established is
                associated with these different brand elements - your name,
                logo, and tagline - and the reason why people buy from you.
              </p>

              {/* Contact Information Section */}

              <div>
                <div className=" my-8 rounded-3xl mx-auto max-w-4xl shadow-lg p-8 space-y-8">
                  <div className=" p-6 rounded-xl">
                    <h2 className="text-xl font-semibold mb-4">
                      Contact Information
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          First Name *
                        </label>
                        <input
                          type="text"
                          autoComplete="given-name"
                          value={formData.firstName}
                          {...register("firstName", {
                            required: true,
                            onChange: (e) => {
                              updateFormData({ firstName: e.target.value });
                            },
                          })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.firstName && (
                          <span className="text-sm text-red-600">
                            First Name is required
                          </span>
                        )}
                        {/* {formData.firstName === "" && (
                        <p className="text-red-500 text-xs mt-1">
                          First Name is required
                        </p>
                      )} */}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          autoComplete="family-name"
                          value={formData.lastName}
                          {...register("lastName", {
                            required: true,
                            onChange: (e) => {
                              updateFormData({ lastName: e.target.value });
                            },
                          })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.lastName && (
                          <span className="text-sm text-red-600">
                            Last Name is required
                          </span>
                        )}
                      </div>
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
                                autoComplete="email"
                                value={formData.email}
                                placeholder="Enter your email"
                                {...register("email", {
                                  required: true,
                                  onChange: (e) => {
                                    updateFormData({
                                      email: e.target.value,
                                    });
                                  },
                                })}
                                readOnly={formData.emailVerified}
                                className={`email-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 `}
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
                          {errors.email && (
                            <span className="text-sm text-red-600">
                              Email is required
                            </span>
                          )}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Mobile Phone *
                        </label>
                        <input
                          type="text"
                          autoComplete="phone"
                          value={formData.mobilePhone}
                          {...register("mobilePhone", {
                            required: true,
                            onChange: (e) => {
                              updateFormData({ mobilePhone: e.target.value });
                            },
                          })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.mobilePhone && (
                          <span className="text-sm text-red-600">
                            Mobile Phone is required
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Information Section */}

              <div className=" bg-white rounded-3xl mx-auto max-w-4xl shadow-lg px-16 py-12 my-8">
                {" "}
                <h2 className="text-2xl font-bold mb-6">Company Information</h2>
                <div className="md:flex gap-4">
                  <div className="flex-grow">
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                      Entity Type
                    </label>
                    <div className="relative">
                      <select
                        title="Select an option"
                        value={formData.entityType}
                        {...register("entityType", {
                          required: true,
                          onChange: (e) => {
                            updateFormData({ entityType: e.target.value });
                          },
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg appearance-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option hidden>Entity Type</option>
                        <option value="LLC">LLC</option>
                        <option value="S-Corporation">S-Corporation</option>
                        <option value="C-Corporation">C-Corporation</option>
                        <option value="Nonprofit">Nonprofit</option>
                      </select>
                      <ChevronDownIcon className="absolute h-5 w-5 right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    {errors.entityType && (
                      <span className="text-sm text-red-600">
                        Entity Type is required
                      </span>
                    )}
                  </div>
                  <div className="flex-grow">
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                      State of Formation
                      <InformationCircleIcon className="w-4 h-4 text-blue-500 ml-1 cursor-help" />
                    </label>
                    <div className="relative">
                      <select
                        title="Select an option"
                        value={formData.stateOfFormation}
                        {...register("stateOfFormation", {
                          required: true,
                          onChange: (e) => {
                            updateFormData({
                              stateOfFormation: e.target.value,
                            });
                          },
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg appearance-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option hidden value="">
                          Select State
                        </option>
                        {statesInUS.map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                      <ChevronDownIcon className="absolute h-5 w-5 right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    {errors.stateOfFormation && (
                      <span className="text-sm text-red-600">
                        State of Formation is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex gap-4 mt-6">
                  <div className="flex-grow">
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                      Company Name
                      <InformationCircleIcon className="w-4 h-4 text-blue-500 ml-1 cursor-help" />
                    </label>
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={formData.companyName}
                      {...register("companyName", {
                        required: true,
                        onChange: (e) => {
                          updateFormData({ companyName: e.target.value });
                        },
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.companyName && (
                      <span className="text-sm text-red-600">
                        Company Name is required
                      </span>
                    )}
                  </div>
                  <div className="w-1/3">
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                      Designator
                      <InformationCircleIcon className="w-4 h-4 text-blue-500 ml-1 cursor-help" />
                    </label>
                    <div className="relative">
                      <select
                        title="Select an option"
                        value={formData.designator}
                        {...register("designator", {
                          required: true,
                          onChange: (e) => {
                            updateFormData({ designator: e.target.value });
                          },
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg appearance-none focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option hidden value="">
                          Select Designator
                        </option>
                        <option value="LLC">LLC</option>
                        <option value="CO">CO</option>
                        <option value="COMPANY">COMPANY</option>
                        <option value="CORPORATION">CORPORATION</option>
                        <option value="CORP">CORP</option>
                        <option value="LIMITED">LIMITED</option>
                        <option value="LTD">LTD</option>
                        <option value="INCORPORATED">INCORPORATED</option>
                        <option value="INC.">INC.</option>
                      </select>
                      <ChevronDownIcon className="absolute h-5 w-5 right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    {errors.designator && (
                      <span className="text-sm text-red-600">
                        Designator is required
                      </span>
                    )}
                  </div>
                </div>
                {formData.companyName !== "" &&
                  formData.designator !== "" &&
                  formData.companyName !== undefined &&
                  formData.designator !== undefined && (
                    <div>
                      <p>Your official company name will display as</p>
                      <p className="text-3xl font-bold">{`${formData.companyName} ${formData.designator}`}</p>
                    </div>
                  )}
              </div>
              {/* Company Address Section */}
              <div className=" bg-white rounded-3xl mx-auto max-w-4xl shadow-lg px-16 py-12 my-8">
                <h2 className="text-2xl font-bold mb-6">Company Address</h2>
                <div className="md:flex">
                  <div className="md:w-1/2 mr-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Street Address
                    </label>
                    <div className="my-3">
                      <input
                        type="text"
                        placeholder="Street Address"
                        value={formData.streetAddress}
                        autoComplete="street-address"
                        {...register("streetAddress", {
                          required: true,
                          onChange: (e) => {
                            updateFormData({ streetAddress: e.target.value });
                          },
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.streetAddress && (
                        <span className="text-sm text-red-600">
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <label className="block text-sm font-medium text-gray-700">
                      Address(Line 2)
                    </label>
                    <div className="my-3">
                      <input
                        type="text"
                        placeholder="Address(Line 2)"
                        value={formData.addressLine2}
                        autoComplete="address-line2"
                        {...register("addressLine2", {
                          required: true,
                          onChange: (e) => {
                            updateFormData({ addressLine2: e.target.value });
                          },
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.addressLine2 && (
                        <span className="text-sm text-red-600">
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <div className="my-3">
                    <input
                      type="text"
                      placeholder="City"
                      value={formData.city}
                      autoComplete="city"
                      {...register("city", {
                        required: true,
                        onChange: (e) => {
                          updateFormData({ city: e.target.value });
                        },
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.city && (
                      <span className="text-sm text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="md:flex">
                  <div className="md:w-1/2 mr-4">
                    <label className="block text-sm font-medium text-gray-700">
                      State
                    </label>
                    <div className="my-3">
                      <select
                        title="Select an option"
                        value={formData.state}
                        {...register("state", {
                          required: true,
                          onChange: (e) => {
                            updateFormData({ state: e.target.value });
                          },
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option hidden value={""}>
                          Select State
                        </option>
                        {statesInUS.map((state: string) => (
                          <option key={state}>{state}</option>
                        ))}
                      </select>
                      {errors.state && (
                        <span className="text-sm text-red-600">
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <label className="block text-sm font-medium text-gray-700">
                      Zip Code
                    </label>
                    <div className="my-3">
                      <input
                        type="number"
                        inputMode="numeric"
                        placeholder="Zip Code"
                        value={formData.zipCode}
                        autoComplete="postal-code"
                        {...register("zipCode", {
                          required: true,
                          onChange: (e) => {
                            updateFormData({ zipCode: e.target.value });
                          },
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.zipCode && (
                        <span className="text-sm text-red-600">
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Trademark Information Section */}
              <div className=" bg-white rounded-3xl mx-auto max-w-4xl shadow-lg px-16 py-12 my-8">
                <h2 className="text-2xl font-bold mb-6">
                  Trademark Information
                </h2>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Please select the appropriate type of trademark
                </label>
                <div className="flex gap-4">
                  <label
                    className={`flex grow justify-start px-5 items-center rounded-3xl py-4 border cursor-pointer ${
                      formData.trademarkType !== "Name"
                        ? "border-[#e5e5e5e7]"
                        : "border-primary"
                    }`}
                  >
                    <div
                      className={`min-w-5 min-h-5 max-w-5 max-h-5 mr-2 rounded-full ${
                        formData.trademarkType !== "Name"
                          ? "border bg-[#ffffff]  border-[#dcdcdce7]"
                          : "border-4 bg-primary border-[#dcdcdce7]"
                      }`}
                    >
                      <input
                        type="radio"
                        hidden
                        value="Name"
                        className="hidden"
                        {...register("trademarkType", {
                          required: true,
                          onChange: (e) => {
                            updateFormData({
                              trademarkType: e.target.value,
                              trademarkNameOrSlogan: "",
                            });
                            setValue("trademarkNameOrSlogan", "");
                          },
                        })}
                      />
                    </div>
                    <p>Name</p>
                  </label>
                  <label
                    className={`flex grow justify-start px-5 items-center rounded-3xl py-4 border cursor-pointer ${
                      formData.trademarkType !== "Slogan"
                        ? "border-[#e5e5e5e7]"
                        : "border-primary"
                    }`}
                  >
                    <div
                      className={`min-w-5 min-h-5 max-w-5 max-h-5 mr-2 rounded-full ${
                        formData.trademarkType !== "Slogan"
                          ? "border bg-[#ffffff]  border-[#dcdcdce7]"
                          : "border-4 bg-primary border-[#dcdcdce7]"
                      }`}
                    >
                      <input
                        type="radio"
                        hidden
                        value="Slogan"
                        className="hidden"
                        {...register("trademarkType", {
                          required: true,
                          onChange: (e) => {
                            updateFormData({
                              trademarkType: e.target.value,
                              trademarkNameOrSlogan: "",
                            });
                            setValue("trademarkNameOrSlogan", "");
                          },
                        })}
                      />
                    </div>
                    <p>Slogan</p>
                  </label>
                  <label
                    className={`flex grow justify-start px-5 items-center rounded-3xl py-4 border cursor-pointer ${
                      formData.trademarkType !== "Design/Logo"
                        ? "border-[#e5e5e5e7]"
                        : "border-primary"
                    }`}
                  >
                    <div
                      className={`min-w-5 min-h-5 max-w-5 max-h-5 mr-2 rounded-full ${
                        formData.trademarkType !== "Design/Logo"
                          ? "border bg-[#ffffff]  border-[#dcdcdce7]"
                          : "border-4 bg-primary border-[#dcdcdce7]"
                      }`}
                    >
                      <input
                        type="radio"
                        hidden
                        value="Design/Logo"
                        className="hidden"
                        {...register("trademarkType", {
                          required: true,
                          onChange: (e) => {
                            updateFormData({
                              trademarkType: e.target.value,
                              trademarkNameOrSlogan: "",
                            });
                            setValue("trademarkNameOrSlogan", "");
                          },
                        })}
                      />
                    </div>
                    <p>Design/Logo</p>
                  </label>
                </div>
                {errors.trademarkType && (
                  <span className="text-sm text-red-600">
                    Trademark type is required
                  </span>
                )}

                {formData.trademarkType !== "Design/Logo" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mt-6 mb-1">
                      Please write out the{" "}
                      {formData.trademarkType === "Name" ? "NAME" : "SLOGAN"}{" "}
                      EXACTLY as you want it to appear on the application.
                    </label>
                    <input
                      type="text"
                      placeholder={`Enter trademark ${
                        formData.trademarkType === "Name" ? "name" : "slogan"
                      }`}
                      value={formData.trademarkNameOrSlogan}
                      {...register("trademarkNameOrSlogan", {
                        required: formData.trademarkType !== "Design/Logo",
                        onChange: (e) => {
                          updateFormData({
                            trademarkNameOrSlogan: e.target.value,
                          });
                        },
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.trademarkNameOrSlogan && (
                      <span className="text-sm text-red-600">
                        Trademark name/slogan is required
                      </span>
                    )}
                  </div>
                )}
                {formData.trademarkType === "Design/Logo" && (
                  <div>
                    <p className="text-sm font-medium text-gray-700 mt-6 mb-1">
                      You&apos;ve designed a logo to represent your business.
                      Before sending that logo out into the world, you should
                      consider how to protect the design, and the business
                      behind it, through correct use of trademark law.
                    </p>
                  </div>
                )}
                <label className="block text-sm font-medium text-gray-700 mt-6 mb-1">
                  Please list the products or services offered using the mark
                </label>
                <input
                  type="text"
                  placeholder="Enter product or service"
                  value={formData.productOrService}
                  {...register("productOrService", {
                    required: true,
                    onChange: (e) => {
                      updateFormData({
                        productOrService: e.target.value,
                      });
                    },
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />

                {errors.productOrService && (
                  <span className="text-sm text-red-600">
                    Product or service is required
                  </span>
                )}

                <label className="block text-sm font-medium text-gray-700 mt-6 mb-1">
                  Are you currently using the mark?
                </label>
                <div className="flex gap-4">
                  <label className="flex cursor-pointer justify-start px-5 items-center rounded-3xl  py-4">
                    <div
                      className={`min-w-5 min-h-5 max-w-5 max-h-5 mr-2 rounded-full border-[#dcdcdce7] ${
                        formData.usingMark === "true"
                          ? "border-4 bg-primary"
                          : "border bg-[#ffffff]"
                      }`}
                    >
                      <input
                        type="radio"
                        hidden
                        className="hidden"
                        value={"true"}
                        {...register("usingMark", {
                          required: true,
                          onChange: (e) => {
                            updateFormData({
                              usingMark: e.target.value,
                            });
                          },
                        })}
                      />
                    </div>
                    <p>Yes</p>
                  </label>
                  <label className="flex cursor-pointer justify-start px-5 items-center rounded-3xl py-4">
                    <div
                      className={`min-w-5 min-h-5 max-w-5 max-h-5 mr-2 rounded-full border-[#dcdcdce7] ${
                        formData.usingMark !== "false"
                          ? "border bg-[#ffffff]"
                          : "border-4 bg-primary"
                      }`}
                    >
                      {" "}
                      <input
                        type="radio"
                        hidden
                        className="hidden"
                        value={"false"}
                        {...register("usingMark", {
                          required: true,
                          onChange: (e) => {
                            updateFormData({
                              usingMark: e.target.value,
                            });
                          },
                        })}
                      />
                    </div>
                    <p>No</p>
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mt-6 mb-1 h-6 w-6 mr-2"
                    value={formData.acknowledgement}
                    {...register("acknowledgement", {
                      required: true,
                      onChange: (e) => {
                        updateFormData({
                          acknowledgement: e.target.value,
                        });
                      },
                    })}
                  />

                  <span className="text-sm font-medium text-gray-700 mt-6 mb-1">
                    By clicking this checkbox, I have read the acknowledgement.
                  </span>
                </div>

                <p className="mt-6 mb-1 bg-gray-100 rounded-lg p-4 text-xs">
                  *For new trademark applications, VCfilling.com charges a flat
                  “Filing Fee” of $350 per class in addition to other fees.
                  Government filing fees for filing a trademark application
                  range from $250 to $350 per class. The $250 application type
                  requires more precision and effort than the $350 application
                  type, so in situations where your attorney uses the $250
                  application type, the remaining $100 is used to cover the
                  additional labor for that application type.
                </p>
                {errors.acknowledgement && (
                  <span className="text-sm text-red-600">
                    Please acknowledge the terms above to continue.
                  </span>
                )}
              </div>

              {/* navigation */}
              <div className="flex justify-between mt-12">
                <Link
                  href="/trademark"
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
        </div>
      </form>
    </NavigationWrapper>
  );
};

export default StepOne;
