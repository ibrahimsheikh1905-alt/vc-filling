"use client";
import React, { useEffect, useState } from "react";
import {
  ChevronDownIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";
import OrderSummary from "@/components/OrderSummary";
import useLocalStorageForm from "@/hooks/useLocalStorage";
import StepNavigation from "@/components/StepNavigation";
import { statesInUS } from "@/data";
import NavigationWrapper from "@/components/NavigationWrapper";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Inputs = {
  entityType: string;
  stateOfFormation: string;
  companyName: string;
  designator: string;
  dateOfFormation: string;
  einFirstName: string;
  einLastName: string;
  isForeign: boolean;
  idType: string;
  ein: string;
  memberCount: string;
  physicalStreetAddress: string;
  physicalAddressLine2: string;
  physicalCity: string;
  physicalState: string;
  physicalZipCode: string;
  mobilePhone: string;
  email: string;
  lastName: string;
  firstName: string;
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
  } = useForm<Inputs>({ defaultValues: { idType: "SSN" } });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    updateFormData(data);
    router.push("/forms/step-final");
  };
  // console.log(watch("isForeign"));

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
    dateOfFormation: "",
    einFirstName: "",
    einLastName: "",
    isForeign: "",
    idType: "SSN",
    ein: "",
    memberCount: "",
    physicalStreetAddress: "",
    physicalAddressLine2: "",
    physicalCity: "",
    physicalState: "",
    physicalZipCode: "",
    mobilePhone: "",
    email: "",
    lastName: "",
    firstName: "",
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
      localStorage.setItem("serviceType", "ein-form");
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
              <h1 className="text-3xl font-bold">
                Federal Employer Identification Number EIN /Tax ID Number
              </h1>
              <p className="text-gray-600 mt-3">
                The SS4 is the IRS form required to obtain an EIN (Employer
                Identification Number, frequently called a Tax ID number). The
                EIN/Tax ID number can be thought of as a Social Security Number
                for your business. It is usually required to open a bank account
                in the name of the business and to properly pay and account for
                any wage/payroll employees of your company.
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
                            This field is required
                          </span>
                        )}
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
                            This field is required
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
                                // disabled={formData.emailVerified}
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
                              This field is required
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
                            This field is required
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
                        This field is required
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
                        This field is required
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
                        This field is required
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
                        This field is required
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
                <div className="w-1/2 mt-6">
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    Date of Formation *
                  </label>
                  <input
                    type="date"
                    value={formData.dateOfFormation}
                    {...register("dateOfFormation", {
                      required: true,
                      onChange: (e) => {
                        updateFormData({ dateOfFormation: e.target.value });
                      },
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
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

              <div className="max-w-4xl mx-auto p-6 bg-white rounded-3xl shadow-lg px-16 py-12">
                <h2 className="text-xl font-semibold mb-4">SS4 Questions</h2>

                <p className="text-sm text-gray-600 mb-4">
                  Please answer these questions so that we may prepare the SS4
                  Form to obtain an EIN (Employer Identification Number,
                  frequently called a Tax ID number).
                </p>

                {/* <div className="flex items-center mb-2">
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
              </div> */}

                <div className="md:flex mb-4 gap-4">
                  <div className="md:w-1/2">
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
                      // value={useName ? "Althea" : einFirstName}
                      value={formData.einFirstName}
                      {...register("einFirstName", {
                        required: true,
                        onChange: (e) => {
                          updateFormData({ einFirstName: e.target.value });
                        },
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                    {errors.einFirstName && (
                      <span className="text-sm text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="md:w-1/2">
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
                      // value={useName ? "Wise" : einLastName}
                      value={formData.einLastName}
                      {...register("einLastName", {
                        required: true,
                        onChange: (e) => {
                          updateFormData({ einLastName: e.target.value });
                        },
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                    {errors.einLastName && (
                      <span className="text-sm text-red-600">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <QuestionMarkCircleIcon className="w-6 h-6 mr-2 text-blue-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Why am I required to provide my Social Security Number?
                      </h3>
                      <p className="text-sm text-gray-600">
                        In order to issue an EIN, the IRS requires a Principal
                        (typically one of the members or directors of an entity)
                        to provide their Social Security Number. This creates a
                        formal affiliation with the company/entity. The Social
                        Security Number is strictly used for obtaining the EIN.
                        Once the EIN process is complete, your SSN is
                        permanently deleted from the Bizee database. To further
                        protect your security, all Social Security Numbers are
                        stored on a secure, encrypted server during the EIN
                        process.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="my-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.isForeign}
                      {...register("isForeign", {
                        onChange: (e) => {
                          updateFormData({ isForeign: e.target.checked });
                        },
                      })}
                      className="form-checkbox"
                    />
                    <span>
                      I am a foreign individual and do not have a social
                      security number
                    </span>
                  </label>
                </div>
                {!formData.isForeign && (
                  <>
                    <div className="mb-4">
                      <p className="mb-2">
                        Identification number by which I will obtain the EIN*
                      </p>
                      <div className="flex space-x-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            value="ITIN"
                            checked={formData.idType === "ITIN"}
                            {...register("idType", {
                              required: true,
                              onChange: (e) => {
                                updateFormData({ idType: e.target.value });
                              },
                            })}
                            className="mr-2"
                          />
                          ITIN
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            value="SSN"
                            checked={formData.idType === "SSN"}
                            {...register("idType", {
                              required: true,
                              onChange: (e) => {
                                updateFormData({ idType: e.target.value });
                              },
                            })}
                            className="mr-2"
                          />
                          SSN
                        </label>
                      </div>
                      <input
                        type="number"
                        placeholder="000-00-0000"
                        maxLength={9}
                        value={formData.ein}
                        {...register("ein", {
                          required: true,
                          onChange: (e) => {
                            updateFormData({ ein: e.target.value });
                          },
                        })}
                        inputMode="numeric"
                        className="w-full p-2 border rounded mt-2"
                      />
                      {errors.ein && (
                        <span className="text-sm text-red-600">
                          This field is required
                        </span>
                      )}
                    </div>
                  </>
                )}

                <div className="my-3 w-1/2">
                  <label className="flex items-center space-x-2">
                    Select how many members *
                  </label>
                  <select
                    value={formData.memberCount}
                    {...register("memberCount", {
                      required: true,
                      onChange: (e) => {
                        updateFormData({ memberCount: e.target.value });
                      },
                    })}
                    className="w-full p-2 border rounded mt-2"
                  >
                    <option value="" hidden>
                      Select Number of Members
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3 or more">3 or more</option>
                  </select>
                  {errors.memberCount && (
                    <span className="text-sm text-red-600">
                      This field is required
                    </span>
                  )}
                </div>
              </div>
              <div className="max-w-4xl mx-auto p-6 my-6 bg-white rounded-3xl shadow-lg px-16 py-12">
                <h2 className="text-xl font-semibold mb-4">
                  Physical Street Address
                </h2>

                <p className="text-sm text-gray-600 mb-4">
                  The IRS requires a physical address in order to issue an
                  Employer Identification Number (EIN / Tax ID Number) to your
                  company. Please note the IRS will not allow for the use of a
                  PO Box; however, this address will not be public under any
                  circumstance.
                </p>

                <div className="md:flex">
                  <div className="md:w-1/2 mr-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Street Address
                    </label>
                    <div className="my-3">
                      <input
                        type="text"
                        value={formData.physicalStreetAddress}
                        {...register("physicalStreetAddress", {
                          required: true,
                          onChange: (e) => {
                            updateFormData({
                              physicalStreetAddress: e.target.value,
                            });
                          },
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.physicalStreetAddress && (
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
                        value={formData.physicalAddressLine2}
                        {...register("physicalAddressLine2", {
                          required: true,
                          onChange: (e) => {
                            updateFormData({
                              physicalAddressLine2: e.target.value,
                            });
                          },
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.physicalAddressLine2 && (
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
                      value={formData.physicalCity}
                      {...register("physicalCity", {
                        required: true,
                        onChange: (e) => {
                          updateFormData({ physicalCity: e.target.value });
                        },
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="md:flex">
                  <div className="md:w-1/2 mr-4">
                    <label className="block text-sm font-medium text-gray-700">
                      State
                    </label>
                    <div className="my-3">
                      <select
                        value={formData.physicalState}
                        {...register("physicalState", {
                          required: true,
                          onChange: (e) => {
                            updateFormData({ physicalState: e.target.value });
                          },
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option hidden value="">Select State</option>
                        {statesInUS.map((state) => (
                          <option key={state}>{state}</option>
                        ))}
                      </select>
                      {errors.physicalState && (
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
                        maxLength={7}
                        value={formData.physicalZipCode}
                        {...register("physicalZipCode", {
                          required: true,
                          onChange: (e) => {
                            updateFormData({ physicalZipCode: e.target.value });
                          },
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.physicalZipCode && (
                        <span className="text-sm text-red-600">
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* navigation */}
              <div className="flex justify-between mt-12">
                <Link
                  href="/ein-form/"
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
