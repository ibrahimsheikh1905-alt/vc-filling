"use client";
import React, { useEffect, useState } from "react";
import {
  LightBulbIcon,
  UserCircleIcon as User,
  BuildingOfficeIcon as Building,
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
  agentType: string;
  agentFirstName: string;
  agentLastName: string;
  agentCompanyName: string;
  agentZipCode: string;
  agentState: string;
  agentCity: string;
  agentAddressLine2: string;
  agentStreetAddress: string;
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
    setValue,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: { agentType: "individual" } });
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
    agentType: "individual",
    agentFirstName: "",
    agentLastName: "",
    agentCompanyName: "",
    agentZipCode: "",
    agentState: "",
    agentCity: "",
    agentAddressLine2: "",
    agentStreetAddress: "",
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

  useEffect(() => {
    setIsMounted(true);
    const setServiceType = () => {
      localStorage.setItem("serviceType", "change-agent");
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
              <h1 className="text-3xl font-bold">Change of Registered Agent</h1>

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
                          <span className="text-red-500 text-xs mt-1">
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
                          <span className="text-red-500 text-xs mt-1">
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
                                placeholder="Enter your email"
                                value={formData.email}
                                {...register("email", {
                                  required: true,
                                  onChange: (e) => {
                                    updateFormData({ email: e.target.value });
                                  },
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
                          {errors.email && (
                            <span className="text-red-500 text-xs mt-1">
                              Email is required
                            </span>
                          )}
                          <p>{verificationStatus}</p>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Mobile Phone *
                        </label>
                        <input
                          type="text"
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
                          <span className="text-red-500 text-xs mt-1">
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
                    <span className="text-red-500 text-xs mt-1">
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
                      <span className="text-red-500 text-xs mt-1">
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
                      <span className="text-red-500 text-xs mt-1">
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
                      <span className="text-red-500 text-xs mt-1">
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
                      <span className="text-red-500 text-xs mt-1">
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
                      <p className="text-3xl font-bold capitalize">{`${formData.companyName} ${formData.designator}`}</p>
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
                        value={formData.streetAddress}
                        {...register("streetAddress", {
                          required: true,
                          onChange: (e) => {
                            updateFormData({ streetAddress: e.target.value });
                          },
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.streetAddress && (
                        <span className="text-red-500 text-xs mt-1">
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
                        value={formData.addressLine2}
                        {...register("addressLine2", {
                          required: true,
                          onChange: (e) => {
                            updateFormData({ addressLine2: e.target.value });
                          },
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.addressLine2 && (
                        <span className="text-red-500 text-xs mt-1">
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
                      value={formData.city}
                      {...register("city", {
                        required: true,
                        onChange: (e) => {
                          updateFormData({ city: e.target.value });
                        },
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.city && (
                      <span className="text-red-500 text-xs mt-1">
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
                        <span className="text-red-500 text-xs mt-1">
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
                        maxLength={10}
                        value={formData.zipCode}
                        {...register("zipCode", {
                          required: true,
                          onChange: (e) => {
                            updateFormData({ zipCode: e.target.value });
                          },
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.zipCode && (
                        <span className="text-red-500 text-xs mt-1">
                          Zip Code is required
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* Agent Name & Address Section */}
              <div className="my-8 rounded-3xl mx-auto max-w-4xl shadow-lg p-8 space-y-8">
                <h2 className="text-2xl font-bold mb-4">
                  Provide name & address of newly appointed Registered Agent
                </h2>

                <div className="flex space-x-4 mb-6">
                  <label
                    className={`flex cursor-pointer items-center px-4 py-2 rounded-lg ${
                      formData.agentType === "individual"
                        ? "bg-green-100 border-2 border-primary text-green-700"
                        : "bg-gray-100 border border-gray-300 text-gray-700"
                    }`}
                  >
                    <input
                      type="radio"
                      className="hidden"
                      value="individual"
                      {...register("agentType", {
                        required: true,
                        onChange: (e) => {
                          updateFormData({
                            agentType: e.target.value,
                            agentCompanyName: "",
                          });
                          setValue("agentCompanyName", "");
                        },
                      })}
                    />
                    <User className="w-5 h-5 mr-2" />
                    Individual
                  </label>
                  <label
                    className={`flex cursor-pointer items-center px-4 py-2 rounded-lg ${
                      formData.agentType === "company"
                        ? "bg-green-100 border-2 border-primary text-green-700"
                        : "bg-gray-100 border border-gray-300 text-gray-700"
                    }`}
                    onClick={() =>
                      updateFormData({
                        agentType: "company",
                        agentFirstName: "",
                        agentLastName: "",
                      })
                    }
                  >
                    <input
                      type="radio"
                      className="hidden"
                      value="company"
                      {...register("agentType", {
                        required: true,
                        onChange: (e) => {
                          updateFormData({
                            agentType: e.target.value,
                            agentFirstName: "",
                            agentLastName: "",
                          });
                          setValue("agentFirstName", "");
                          setValue("agentLastName", "");
                        },
                      })}
                    />
                    <Building className="w-5 h-5 mr-2" />
                    Company
                  </label>
                </div>
                {/* {formData.agentType === "individual" && (
                  <>
                    <div className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id="useOwnName"
                        className="mr-2"
                        checked={useName}
                        onChange={() => setUseName(!useName)}
                      />
                      <label htmlFor="useOwnName" className="flex items-center">
                        <User className="w-5 h-5 mr-2 text-gray-600" />
                        <span>Althea Wise</span>
                      </label>
                    </div>
                  </>
                )} */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {formData.agentType === "individual" ? (
                    <>
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block mb-1 text-sm font-medium text-gray-700"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          // disabled={useName}
                          // value={useName ? "Althea" : getFirstName}
                          value={formData.agentFirstName} //TODO: use getFirstName
                          {...register("agentFirstName", {
                            required: formData.agentType === "individual",
                            onChange: (e) => {
                              updateFormData({
                                agentFirstName: e.target.value,
                              });
                            },
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                        {errors.agentFirstName && (
                          <span className="text-red-500 text-xs mt-1">
                            First Name is required
                          </span>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block mb-1 text-sm font-medium text-gray-700"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          // disabled={useName}
                          // value={useName ? "Wise" : getLastName}
                          value={formData.agentLastName}
                          {...register("agentLastName", {
                            required: formData.agentType === "individual",
                            onChange: (e) => {
                              updateFormData({ agentLastName: e.target.value });
                            },
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                        {errors.agentLastName && (
                          <span className="text-red-500 text-xs mt-1">
                            Last Name is required
                          </span>
                        )}
                      </div>
                    </>
                  ) : (
                    <div className="col-span-2">
                      <label
                        htmlFor="companyName"
                        className="block mb-1 text-sm font-medium text-gray-700"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        value={formData.agentCompanyName}
                        {...register("agentCompanyName", {
                          required: formData.agentType === "company",
                          onChange: (e) => {
                            updateFormData({
                              agentCompanyName: e.target.value,
                            });
                          },
                        })}
                        className="w-full  px-3 py-2 border border-gray-300 rounded-md"
                      />
                      {errors.agentCompanyName && (
                        <span className="text-red-500 text-xs mt-1">
                          Company Name is required
                        </span>
                      )}
                    </div>
                  )}
                </div>
                <div>
                  <div className="md:flex">
                    <div className="md:w-1/2 mr-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Street Address
                      </label>
                      <div className="my-3">
                        <input
                          type="text"
                          value={formData.agentStreetAddress}
                          {...register("agentStreetAddress", {
                            required: true,
                            onChange: (e) => {
                              updateFormData({
                                agentStreetAddress: e.target.value,
                              });
                            },
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.agentStreetAddress && (
                          <span className="text-red-500 text-xs mt-1">
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
                          value={formData.agentAddressLine2}
                          {...register("agentAddressLine2", {
                            required: true,
                            onChange: (e) => {
                              updateFormData({
                                agentAddressLine2: e.target.value,
                              });
                            },
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.agentAddressLine2 && (
                          <span className="text-red-500 text-xs mt-1">
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
                        value={formData.agentCity}
                        {...register("agentCity", {
                          required: true,
                          onChange: (e) => {
                            updateFormData({ agentCity: e.target.value });
                          },
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.agentCity && (
                        <span className="text-red-500 text-xs mt-1">
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
                          value={formData.agentState}
                          {...register("agentState", {
                            required: true,
                            onChange: (e) => {
                              updateFormData({ agentState: e.target.value });
                            },
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option hidden value={""}>
                            Select a State
                          </option>
                          {statesInUS.map((state) => (
                            <option key={state}>{state}</option>
                          ))}
                        </select>
                        {errors.agentState && (
                          <span className="text-red-500 text-xs mt-1">
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
                          maxLength={10}
                          value={formData.agentZipCode}
                          {...register("agentZipCode", {
                            required: true,
                            onChange: (e) => {
                              updateFormData({ agentZipCode: e.target.value });
                            },
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.agentZipCode && (
                          <span className="text-red-500 text-xs mt-1">
                            Zip Code is required
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* navigation */}
              <div className="flex justify-between mt-12">
                <Link
                  href="/change-agent"
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
