"use client";
import React, { useEffect, useState } from "react";
import {
  InformationCircleIcon,
  ChevronDownIcon,
  LightBulbIcon,
} from "@heroicons/react/24/solid";
import OrderSummary from "@/components/OrderSummary";
import useLocalStorageForm from "@/hooks/useLocalStorage";
import { statesInUS } from "@/data";
import axios from "axios";
import NavigationWrapper from "@/components/NavigationWrapper";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface FilingOption {
  duration: string;
  price: number;
  estimatedDate: string;
  isFast?: boolean;
}

type Inputs = {
  nameChangeOption: string;
  amendInfo: string;
  stateFillingTime: string;
  newCompanyName: string;
  newDesignator: string;
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
    // watch,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: { stateFillingTime: "fast" } });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    updateFormData({
      ...data,
      nameChangeOption: data.nameChangeOption === "true",
    });
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
      } else {
        setVerificationStatus("Incorrect OTP.");
      }
    } catch (error) {
      setVerificationStatus("Verification failed.");
    }
  };
  const [formData, updateFormData] = useLocalStorageForm({
    nameChangeOption: null,
    amendInfo: "",
    stateFillingTime: "fast",
    newCompanyName: "",
    newDesignator: "",
    mobilePhone: "",
    email: "",
    lastName: "",
    firstName: "",
    companyName: "",
    designator: "",
    stateOfService: "",
    entityType: "",
    stateOfFormation: "",
    streetAddress: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    emailVerified: false,
  });

  const options: Record<"standard" | "fast", FilingOption> = {
    standard: {
      duration: "3 weeks filing time.",
      price: 0,
      estimatedDate: "Tuesday, September 03",
    },
    fast: {
      duration: "1 business day filing time.",
      price: 50,
      estimatedDate: "Tuesday, August 06",
      isFast: true,
    },
  };
  useEffect(() => {
    setIsMounted(true);
    const setServiceType = () => {
      localStorage.setItem("serviceType", "amendment");
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
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold">Articles of Amendment</h1>
              <p className="text-gray-600">
                As time passes and businesses evolve, you may find that you are
                in a situation where your business name no longer fits the
                services you provide or perhaps the leadership team of your
                company is undergoing changes. Any major event that alters the
                information on your Articles of Incorporation or Articles of
                Organization needs to be reported to your secretary of state by
                filing an Articles of Amendment form.
              </p>

              {/* Contact Information Section */}
              <div>
                <div className=" my-8 rounded-3xl mx-auto max-w-4xl shadow-lg p-8 space-y-8">
                  <div className=" p-6 rounded-xl">
                    <h2
                      id="contact-information"
                      className="text-xl font-semibold mb-4"
                    >
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
                                name="otp"
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
                <h2 className="text-2xl font-bold mb-6">Company Information</h2>
                <div className="my-6 bg-gray-100 p-6 rounded-lg flex items-center">
                  <LightBulbIcon className="h-8 w-8 mr-8 text-primary" />
                  <p>
                    The state of formation is where the company was formed,
                    while the state of service is where you are seeking to
                    obtain authority to transact business.
                  </p>
                </div>
                <div>
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
                <div className="flex gap-4 mt-6">
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
                  <div className="w-1/2">
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                      State of Service
                      <InformationCircleIcon className="w-4 h-4 text-blue-500 ml-1 cursor-help" />
                    </label>
                    <div className="relative">
                      <select
                        title="Select an option"
                        value={formData.stateOfService}
                        {...register("stateOfService", {
                          required: true,
                          onChange: (e) => {
                            updateFormData({ stateOfService: e.target.value });
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
                    {errors.stateOfService && (
                      <span className="text-sm text-red-600">
                        State of Service is required
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
                      <p className="text-3xl font-bold uppercase">{`${formData.companyName} ${formData.designator}`}</p>
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
                          Street Address is required
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
                          Address(Line 2) is required
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
                        City is required
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
                          State is required
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
                          Zip Code is required
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Amendment Information Section */}
              <div className="rounded-3xl mx-auto max-w-4xl shadow-lg px-16 py-12 my-8">
                <h2 className="text-2xl font-bold mb-6">
                  Amendment Information
                </h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Are you changing the name of the LLC / Corporation? *
                  </label>
                  <div className="my-3 flex gap-8 items-center">
                    <div className="flex gap-4 items-center">
                      <label className="flex cursor-pointer items-center gap-2 text-sm font-medium text-gray-700">
                        <input
                          value="true"
                          {...register("nameChangeOption", {
                            onChange: (e) => {
                              updateFormData({
                                nameChangeOption: e.target.value === "true",
                              });
                            },
                            required: true,
                          })}
                          className="min-w-4 max-w-4 h-4 accent-primary"
                          type="radio"
                          name="nameChangeOption"
                        />
                        Yes
                      </label>
                      <label className="flex cursor-pointer items-center gap-2 text-sm font-medium text-gray-700">
                        <input
                          value="false"
                          {...register("nameChangeOption", {
                            onChange: (e) => {
                              updateFormData({
                                nameChangeOption: e.target.value === "true",
                              });
                            },
                            required: true,
                          })}
                          className="min-w-4 max-w-4 h-4 accent-primary"
                          type="radio"
                          name="nameChangeOption"
                        />
                        No
                      </label>
                    </div>
                    {errors.nameChangeOption && (
                      <span className="text-sm text-red-600">
                        Please select an option
                      </span>
                    )}
                  </div>
                  {formData.nameChangeOption === true && (
                    <>
                      <div className="flex gap-4 mt-6">
                        <div className="flex-grow">
                          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                            New Company Name
                            <InformationCircleIcon className="w-4 h-4 text-blue-500 ml-1 cursor-help" />
                          </label>
                          <input
                            type="text"
                            placeholder="Company Name"
                            autoComplete="company-name"
                            value={formData.newCompanyName}
                            {...register("newCompanyName", {
                              required: formData.nameChangeOption,
                              onChange: (e) => {
                                updateFormData({
                                  newCompanyName: e.target.value,
                                });
                              },
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                          {errors.newCompanyName && (
                            <span className="text-sm text-red-600">
                              New Company Name is required
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
                              value={formData.newDesignator}
                              {...register("newDesignator", {
                                required: formData.nameChangeOption,
                                onChange: (e) => {
                                  updateFormData({
                                    newDesignator: e.target.value,
                                  });
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
                          {errors.newDesignator && (
                            <span className="text-sm text-red-600">
                              New Designator is required
                            </span>
                          )}
                        </div>
                      </div>
                      {formData.newCompanyName !== "" &&
                        formData.newDesignator !== "" && (
                          <div>
                            <p>Your official company name will display as</p>
                            <p className="text-3xl font-bold">{`${formData.newCompanyName} ${formData.newDesignator}`}</p>
                          </div>
                        )}
                    </>
                  )}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 my-3">
                      Please provide detailed information regarding the
                      information you would like to amend *
                    </label>
                    <textarea
                      value={formData.amendInfo}
                      {...register("amendInfo", {
                        required: true,
                        onChange: (e) => {
                          updateFormData({
                            amendInfo: e.target.value,
                          });
                        },
                      })}
                      placeholder="Please provide brief description of Business Purpose"
                      className="w-full px-3 my-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 h-24"
                    />
                    {errors.amendInfo && (
                      <span className="text-sm text-red-600">
                        Amend Information is required
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* State Filing Time Section */}
              <div className="max-w-4xl px-16 py-12 rounded-3xl shadow-lg">
                <h2 className="text-2xl font-bold mb-4">State Filing Time</h2>
                <p className="mb-4">
                  The typical state filing time for Alaska is 3 weeks. In a
                  hurry? Alaska offers an expedited filing option as well.
                  Select the filing time that best meets your needs.
                </p>
                <div className="gap-4 flex flex-col">
                  {Object.entries(options).map(([key, option]) => (
                    <label key={key}>
                      <div
                        className={`p-4 border rounded-lg cursor-pointer ${
                          formData.stateFillingTime === key
                            ? "border-primary"
                            : "border-gray-200"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              value={key}
                              {...register("stateFillingTime", {
                                required: true,
                                onChange: (e) => {
                                  updateFormData({
                                    stateFillingTime: e.target.value,
                                  });
                                },
                              })}
                            />
                            <span className="font-medium">
                              {option.duration}
                            </span>
                          </div>
                          <span className="font-medium">${option.price}</span>
                        </div>
                        <div className="mt-2 text-sm text-gray-600">
                          <p>Estimated Formation Date:</p>
                          <p className={option.isFast ? "text-primary" : ""}>
                            {option.estimatedDate}
                          </p>
                        </div>
                        {option.isFast && (
                          <span className="inline-block mt-2 px-2 py-1 text-xs font-semibold text-primary border border-primary rounded">
                            FAST
                          </span>
                        )}
                      </div>
                    </label>
                  ))}
                </div>
                <p className="mt-4 text-xs text-gray-500">
                  *These dates are estimations based on current state turnaround
                  times and are subject to change based on state processing.
                </p>
              </div>
              {/* navigation */}
              <div className="flex justify-between mt-12">
                <Link
                  href="/amendment"
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
