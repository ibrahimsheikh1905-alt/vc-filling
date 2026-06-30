"use client";
import React, { useEffect, useState } from "react";
import {
  LightBulbIcon,
  CheckIcon,
  MapPinIcon,
  HomeModernIcon,
  ChevronDownIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import OrderSummary from "@/components/OrderSummary";
import useLocalStorageForm from "@/hooks/useLocalStorage";
import StepNavigation from "@/components/StepNavigation";

import { countries, statesInUS, entityTypes } from "@/data";
import NavigationWrapper from "@/components/NavigationWrapper";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
interface AddressOption {
  title: string;
  price?: string;
  address?: string;
  icon?: React.ReactNode;
  isRecommended?: boolean;
  features?: string[];
}

type Inputs = {
  country: string;
  streetAddress: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  addressOption: string;
  mobilePhone: string;
  email: string;
  lastName: string;
  firstName: string;
  companyName: string;
  designator: string;
  stateOfService: string;
  entityType: string;
  stateOfFormation: string;
};

const StepOne = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [userData, setUserData] = useState<{ name: string; email: string; phone: string } | null>(null);

const router = useRouter();

  const [formData, updateFormData] = useLocalStorageForm({
    country: "",
    streetAddress: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    addressOption: "recommended",
    mobilePhone: "",
    email: "",
    lastName: "",
    firstName: "",
    companyName: "",
    designator: "",
    stateOfService: "",
    entityType: "",
    stateOfFormation: "",
  });

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
    setValue,
  } = useForm<Inputs>({defaultValues:{
    addressOption: "recommended",}});
  
  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem("userId");
      if (userId) {
        try {
          const response = await axios.get(`/api/user-data?userId=${userId}`);
          if (response.data.success && response.data.user) {
            const { name, email, phone } = response.data.user;
            setUserData({ name: name || "", email: email || "", phone: phone || "" });
            
            // Split name into firstName and lastName
            const nameParts = (name || "").split(" ");
            const firstName = nameParts[0] || "";
            const lastName = nameParts.slice(1).join(" ") || "";
            
            // Update form values
            setValue("firstName", firstName);
            setValue("lastName", lastName);
            setValue("email", email || "");
            setValue("mobilePhone", phone || "");
            
            // Also update localStorage form data
            updateFormData({
              firstName,
              lastName,
              email: email || "",
              mobilePhone: phone || "",
            });
          }
        } catch (error) {
          console.error("Failed to fetch user data:", error);
        }
      }
    };
    
    fetchUserData();
  }, [setValue, updateFormData]);

const onSubmit: SubmitHandler<Inputs> = (data) => {
    updateFormData(data);
    router.push("/foreign-qualification/step-2");
  };
  // console.log(watch("addressOption"));

const options: Record<"recommended" | "own", AddressOption> = {
    recommended: {
      title: "Professional Business Address & Virtual Mail Service",
      price: "29/month",
      address:
        "898 South State St, Ste 310,Orem, UT 84097 (Suite # will be assigned after the order completion)",
      isRecommended: true,
      features: [
        " Maintain privacy by using a commercial address",
        "Unlimited scanned incoming mail",
        "A physical address for your business (not PO Box)",
        "Instant alerts with 24/7 access to your mail online",
      ],
      icon: <MapPinIcon height={80} width={80} className="text-primary" />,
    },
    own: {
      title: "Use My Own Address",
      price: "0/month",
      icon: <HomeModernIcon height={80} width={80} className="text-primary" />,
    },
  };

  useEffect(() => {
    setIsMounted(true);
    const setServiceType = () => {
      localStorage.setItem("serviceType", "foreign-qualification");
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
                Foreign Qualification / Certificate of Authority
              </h1>
              <p className="text-gray-600 mb-3">
                A Foreign Qualification refers to the process by which you
                register your company to do business in another state. An LLC or
                corporation is considered “domestic” in the state in which is
                was formed, and “foreign” in any other state in which it wants
                to do business. When you file a Foreign Qualification, you get a
                Certificate of Authority, which gives you legitimate rights to
                do business in the state.
              </p>
              <p className="text-gray-600">
                A Foreign Qualification must be completed in each state in which
                a corporation or LLC intends to conduct business.
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
                            This field is required
                          </span>
                        )}
                      </div>
<div>
                          <label
                            id="email"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email *
                          </label>
                          <div>
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
                              className={`email-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 `}
                            />
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
                      value={formData.entityType || ""}
                      onChange={(e) => {
                        updateFormData({ entityType: e.target.value });
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg appearance-none focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="" disabled>Select Entity Type</option>
                      {entityTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    <ChevronDownIcon className="absolute h-5 w-5 right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                  {!formData.entityType && (
                    <span className="text-sm text-red-600">
                      This field is required
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
                        This field is required
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
              </div>
              {/* Company Address Information Section */}
              <div className="max-w-4xl px-16 py-12 bg-white rounded-3xl shadow-lg">
                <h2 className="text-2xl font-bold mb-4">
                  Company Address Information
                </h2>
                <p className="mb-4">
                  We recommend using our Virtual Address service if maintaining
                  your personal privacy is of importance. The State of Utah
                  formation documents collect and make publicly available both
                  the business address of the entity as well as the personal
                  addresses of the owners.
                </p>
                <p className="mb-4 font-medium">
                  Benefits of Using a Private Virtual Mail Address
                </p>
                <ul>
                  <li className="mb-2 flex items-center ">
                    <CheckIcon
                      height={20}
                      width={20}
                      className="mr-2 text-primary"
                    />{" "}
                    Keeping your personal address confidential
                  </li>
                  <li className="mb-2 flex items-center ">
                    <CheckIcon
                      height={20}
                      width={20}
                      className="mr-2 text-primary"
                    />{" "}
                    Real-time text and email notification of any incoming mail
                  </li>
                  <li className="mb-2 flex items-center ">
                    <CheckIcon
                      height={20}
                      width={20}
                      className="mr-2 text-primary"
                    />{" "}
                    Maintaining a physical presence, even if you&apos;re not
                    physically there
                  </li>
                  <li className="mb-4 flex items-center ">
                    <CheckIcon
                      height={20}
                      width={20}
                      className="mr-2 text-primary"
                    />{" "}
                    Permanent digital access to your mail anywhere in the world
                  </li>
                </ul>
                <div className="gap-4 flex">
                  {Object.entries(options).map(([key, option]) => (
                    <label key={key} className="w-1/2 cursor-pointer">
                      <div
                        className={`p-4 border rounded-lg ${
                          formData.addressOption === key
                            ? "border-primary"
                            : "border-gray-200"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`min-w-4 max-w-4 h-4 rounded-full border-2 ${
                                formData.addressOption === key
                                  ? "border-primary bg-primary"
                                  : "border-gray-300"
                              }`}
                            >
                              {formData.addressOption === key && (
                                <div className="w-2 h-2 rounded-full bg-white mx-auto mt-0.5" />
                              )}
                              <input
                                type="radio"
                                id="addressOption"
                                value={key}
                                {...register("addressOption", {
                                  required: true,
                                  onChange: (e) => {
                                    updateFormData({
                                      addressOption: e.target.value,
                                      country: "",
                                      streetAddress: "",
                                      addressLine2: "",
                                      city: "",
                                      state: "",
                                      zipCode: "",
                                    });
                                    setValue("country", "");
                                    setValue("streetAddress", "");
                                    setValue("addressLine2", "");
                                    setValue("city", "");
                                    setValue("state", "");
                                    setValue("zipCode", "");
                                  },
                                })}
                                hidden
                                className="hidden"
                              />
                            </div>
                            <span className="font-medium">{option.title}</span>
                          </div>
                        </div>
                        <div className="mt-2 flex items-center justify-center py-10">
                          {option.icon}
                        </div>
                        <div className="mt-2 text-sm text-gray-600">
                          {option.address && (
                            <p>This will be your principal company address: </p>
                          )}
                          <p
                            className={
                              option.isRecommended ? "text-primary" : ""
                            }
                          >
                            {option.address}
                          </p>
                          {option.features && (
                            <ul className="mt-2">
                              {option.features.map((feature, index) => (
                                <li
                                  key={index}
                                  className="flex items-center space-x-2"
                                >
                                  <CheckIcon
                                    height={20}
                                    width={20}
                                    className="text-primary"
                                  />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                        {option.isRecommended && (
                          <span className="inline-block mt-2 px-2 py-1 text-xs font-semibold text-primary border border-primary rounded">
                            Recommended
                          </span>
                        )}

                        {!option.isRecommended && (
                          <div className="flex flex-col mt-2 text-center">
                            <p className="text-lg text-gray-600 mb-2">
                              I will provide my own Utah business address and
                              will personally keep up with the incoming mail.
                            </p>{" "}
                            <p className="text-lg text-gray-600">
                              {" "}
                              Utah requires a physical street address (P.O Boxes
                              are not accepted).
                            </p>{" "}
                            <p className="text-lg text-gray-600">
                              Any residential address provided to the state will
                              be listed publicly.
                            </p>
                          </div>
                        )}
                        <p className="font-medium flex justify-end pt-5 bottom-0">
                          ${option.price}
                        </p>
                      </div>
                    </label>
                  ))}
                </div>
                {formData.addressOption === "own" && (
                  <div className="mt-4">
                    <h2 className="text-2xl font-bold mb-4">Company Address</h2>
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
                              required: formData.addressOption === "own",
                              onChange: (e) => {
                                updateFormData({
                                  streetAddress: e.target.value,
                                });
                              },
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                          {errors.streetAddress && (
                            <span className="text-red-500 text-sm">
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
                              onChange: (e) => {
                                updateFormData({
                                  addressLine2: e.target.value,
                                });
                              },
                              required: formData.addressOption === "own",
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                          {errors.addressLine2 && (
                            <span className="text-red-500 text-sm">
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
                            required: formData.addressOption === "own",
                            onChange: (e) => {
                              updateFormData({ city: e.target.value });
                            },
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.city && (
                          <span className="text-red-500 text-sm">
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
                              required: formData.addressOption === "own",
                              onChange: (e) => {
                                updateFormData({ state: e.target.value });
                              },
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option hidden value="">
                              Select State
                            </option>
                            {statesInUS.map((state: string) => (
                              <option key={state}>{state}</option>
                            ))}
                          </select>
                          {errors.state && (
                            <span className="text-red-500 text-sm">
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
                              required: formData.addressOption === "own",
                              onChange: (e) => {
                                updateFormData({ zipCode: e.target.value });
                              },
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                          {errors.zipCode && (
                            <span className="text-red-500 text-sm">
                              Zip Code is required
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {formData.addressOption === "recommended" && (
                  <div className="mt-4">
                    <h2 className="text-2xl font-bold mb-4">Contact Address</h2>
                    <div className="">
                      <label className="block text-sm font-medium text-gray-700">
                        Country
                      </label>
                      <div className="my-3">
                        <select
                          value={formData.country}
                          {...register("country", {
                            required: formData.addressOption === "recommended",
                            onChange: (e) => {
                              updateFormData({ country: e.target.value });
                            },
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option hidden value="">
                            Select Country
                          </option>
                          {countries.map((country: string) => (
                            <option key={country}>{country}</option>
                          ))}
                        </select>
                        {errors.country && (
                          <span className="text-red-500 text-sm">
                            Country is required
                          </span>
                        )}
                      </div>
                    </div>
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
                              required:
                                formData.addressOption === "recommended",
                              onChange: (e) => {
                                updateFormData({
                                  streetAddress: e.target.value,
                                });
                              },
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                          {errors.streetAddress && (
                            <span className="text-red-500 text-sm">
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
                              onChange: (e) => {
                                updateFormData({
                                  addressLine2: e.target.value,
                                });
                              },
                              required:
                                formData.addressOption === "recommended",
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                          {errors.addressLine2 && (
                            <span className="text-red-500 text-sm">
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
                            required: formData.addressOption === "recommended",
                            onChange: (e) => {
                              updateFormData({ city: e.target.value });
                            },
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.city && (
                          <span className="text-red-500 text-sm">
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
                          <input
                            type="text"
                            value={formData.state}
                            {...register("state", {
                              required:
                                formData.addressOption === "recommended",
                              onChange: (e) => {
                                updateFormData({ state: e.target.value });
                              },
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                          {errors.state && (
                            <span className="text-red-500 text-sm">
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
                              required:
                                formData.addressOption === "recommended",
                              onChange: (e) => {
                                updateFormData({ zipCode: e.target.value });
                              },
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                          {errors.zipCode && (
                            <span className="text-red-500 text-sm">
                              Zip Code is required
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-1/12 flex items-center justify-center">
                        <LightBulbIcon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="w-10/12">
                        <p className="mt-4 text-gray-500 text-lg">
                          How will this address be used?
                        </p>{" "}
                        <p className="text-gray-500 text-sm">
                          The contact address is the primary address used for
                          the delivery of any documents or products related to
                          your order. This address is used for internal purposes
                          only and will not be shared with any third parties or
                          other outside agencies unless provided in any
                          subsequent pages of the order process which require
                          the intake of an address.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* Step Navigation */}
{/* navigation */}
              <div className="flex justify-between mt-12">
                <Link
                  href="/foreign-qualification/"
                  className="px-8 py-2 bg-primary text-white border border-primary rounded-[30px] "
                >
                  Back
                </Link>

                <button
                  className="px-8 py-2 bg-primary text-white border border-primary rounded-[30px]"
                  type="submit"
                >
                  Next
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
