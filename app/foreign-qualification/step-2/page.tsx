"use client";
import OrderSummary from "@/components/OrderSummary";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  CheckIcon,
  DocumentCheckIcon,
  CalendarIcon,
  WalletIcon,
  TrashIcon,
  UserCircleIcon as User,
  BuildingOfficeIcon as Building,
  BellAlertIcon as AlertCircle,
} from "@heroicons/react/24/solid";
import useLocalStorageForm from "@/hooks/useLocalStorage";
import { statesInUS } from "@/data";
import NavigationWrapper from "@/components/NavigationWrapper";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
interface AgentOption {
  title: string;
}

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
  agentOption: string;
  memberNumber: string;
  members: Member[];
};

type Member = {
  agentType: string;
  getZipCode: string;
  getCity: string;
  getState: string;
  getAddressLine2: string;
  getStreetAddress: string;
  getFirstName: string;
  getLastName: string;
  getCompanyName: string;
  getOwnership: string;
};

const StepTwo = () => {
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    // watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      agentOption: "recommended",
      agentType: "individual",
    },
  });

const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("Form submitted with data:", data);
    updateFormData(data);
    router.replace("/forms/step-final");
  };
  
// Handle form submission errors - still save data and navigate
  const onError = (errors: any) => {
    console.log("Form validation errors:", errors);
    // Even on validation error, attempt to save current form data before navigating
    // This allows users to proceed with incomplete forms
    const currentFormData = {
      agentType: formData.agentType,
      agentFirstName: formData.agentFirstName,
      agentLastName: formData.agentLastName,
      agentCompanyName: formData.agentCompanyName,
      agentZipCode: formData.agentZipCode,
      agentState: formData.agentState,
      agentCity: formData.agentCity,
      agentAddressLine2: formData.agentAddressLine2,
      agentStreetAddress: formData.agentStreetAddress,
      agentOption: formData.agentOption,
      memberNumber: formData.memberNumber,
      members: formData.members,
    };
    updateFormData(currentFormData);
    router.replace("/forms/step-final");
  };
  // console.log(watch("members"));

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
    agentOption: "recommended",
    memberNumber: "",
    members: [],
  });

  useEffect(() => {
    const memberCount = Number(formData.memberNumber);
    if (memberCount > 0 && formData.members.length !== memberCount) {
      const updatedMembers = [...formData.members];
      while (updatedMembers.length < memberCount) {
        updatedMembers.push({
          agentType: "individual",
          getZipCode: "",
          getCity: "",
          getState: "",
          getAddressLine2: "",
          getStreetAddress: "",
          getFirstName: "",
          getLastName: "",
          getCompanyName: "",
          getOwnership: "",
        });
      }
      updateFormData({ members: updatedMembers.slice(0, memberCount) });
      setValue("members", updatedMembers.slice(0, memberCount) as Member[]);
    }
  }, [formData.memberNumber, formData.members, setValue, updateFormData]);

  const handleMemberUpdate = (index: number, field: string, value: string) => {
    const updatedMembers = [...formData.members];
    updatedMembers[index] = { ...updatedMembers[index], [field]: value };
    updateFormData({ members: updatedMembers });
  };

  const options: Record<"recommended" | "own", AgentOption> = {
    recommended: {
      title: "Assign VCFilling as my Registered Agent FREE For 1 year.",
    },
    own: {
      title: "I would like to act as my own registered agent.",
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
      <form onSubmit={handleSubmit(onSubmit, onError)} className="container my-10">
        <div className="md:flex gap-10">
          <div className="max-w-4xl mx-auto">
            <div className="max-w-4xl px-16 py-12 bg-white rounded-3xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">
                Registered Agent Information
              </h2>
              <p className="mb-4 font-medium">
                Alabama requires an LLC to appoint a Registered Agent:
              </p>
              <div className="mb-4 flex items-center">
                <CheckIcon
                  height={20}
                  width={20}
                  className="mr-2 text-primary"
                />{" "}
                <p className="text-gray-500 ">
                  Only VCFilling offers 1 full year of Registered Agent service
                  FREE with every new business formation order - a $119.00
                  value!
                </p>
              </div>
              <p className="mb-4 font-medium">
                Typical documents received by your Registered Agent can include:
              </p>
              <ul>
                <li className="mb-2 flex items-center ">
                  <CheckIcon
                    height={20}
                    width={20}
                    className="mr-2 text-primary "
                  />{" "}
                  <p className="text-gray-500 ">
                    Service of Process, i.e. notification of a pending lawsuit
                    or court order
                  </p>
                </li>
                <li className="mb-2 flex items-center ">
                  <CheckIcon
                    height={20}
                    width={20}
                    className="mr-2 text-primary"
                  />{" "}
                  <p className="text-gray-500 ">
                    State correspondence, i.e. annual reports or statements
                  </p>
                </li>
              </ul>
              <div className="space-x-4 flex">
                {Object.entries(options).map(([key, option]) => (
                  <label key={key} className="cursor-pointer w-1/2">
                    <div
                      className={`p-4 border rounded-lg  ${
                        formData.agentOption === key
                          ? "border-primary"
                          : "border-gray-200"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`min-w-4 max-w-4 h-4 rounded-full border-2 ${
                              formData.agentOption === key
                                ? "border-primary bg-primary"
                                : "border-gray-300"
                            }`}
                          >
                            <input
                              type="radio"
                              value={key}
                              // checked={formData.agentOption === key}
                              className="hidden"
                              hidden
                              {...register("agentOption", {
                                required: true,
                                onChange: (e) => {
                                  updateFormData({
                                    agentOption: e.target.value,
                                    agentType: "individual",
                                    agentFirstName: "",
                                    agentLastName: "",
                                    agentCompanyName: "",
                                    agentZipCode: "",
                                    agentCity: "",
                                    agentAddressLine2: "",
                                    agentStreetAddress: "",
                                  });
                                  setValue("agentType", "individual");
                                  setValue("agentFirstName", "");
                                  setValue("agentLastName", "");
                                  setValue("agentCompanyName", "");
                                  setValue("agentZipCode", "");
                                  setValue("agentCity", "");
                                  setValue("agentAddressLine2", "");
                                  setValue("agentStreetAddress", "");
                                },
                              })}
                            />
                            {formData.agentOption === key && (
                              <div className="w-2 h-2 rounded-full bg-white mx-auto mt-0.5" />
                            )}
                          </div>
                          <span className="font-medium">{option.title}</span>
                        </div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
              {formData.agentOption === "own" && (
                <div className="mt-4">
                  <h2 className="text-2xl font-bold mb-4">Agent Information</h2>
                  <p className="mb-4 font-base text-gray-500">
                    You may serve as your own Registered Agent as long as you
                    possess a physical street address (PO Box not allowed) in
                    the state of formation.
                  </p>
                  <div className="flex space-x-4 mb-6">
                    <label
                      className={`flex items-center px-4 py-2 cursor-pointer rounded-lg ${
                        formData.agentType === "individual"
                          ? "bg-green-100 border-2 border-primary text-green-700"
                          : "bg-gray-100 border border-gray-300 text-gray-700"
                      }`}
                    >
                      <input
                        type="radio"
                        value="individual"
                        className="hidden"
                        hidden
                        {...register("agentType", {
                          required: true,
                          onChange: (e) => {
                            updateFormData({
                              agentType: e.target.value,
                            });
                            setValue("agentType", e.target.value);
                          },
                        })}
                      />
                      <User className="w-5 h-5 mr-2" />
                      Individual
                    </label>
                    <label
                      className={`flex items-center px-4 cursor-pointer py-2 rounded-lg ${
                        formData.agentType === "company"
                          ? "bg-green-100 border-2 border-primary text-green-700"
                          : "bg-gray-100 border border-gray-300 text-gray-700"
                      }`}
                    >
                      <input
                        type="radio"
                        value="company"
                        className="hidden"
                        hidden
                        {...register("agentType", {
                          required: true,
                          onChange: (e) => {
                            updateFormData({
                              agentType: e.target.value,
                            });
                            setValue("agentType", e.target.value);
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
                            value={formData.agentFirstName}
                            {...register("agentFirstName", {
                              onChange: (e) => {
                                updateFormData({
                                  agentFirstName: e.target.value,
                                });
                              },
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          />
                          {errors.agentFirstName && (
                            <span className="text-red-500 text-sm">
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
                              required:
                                formData.agentType === "individual" &&
                                formData.agentOption === "own",
                              onChange: (e) => {
                                updateFormData({
                                  agentLastName: e.target.value,
                                });
                              },
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          />
                          {errors.agentLastName && (
                            <span className="text-red-500 text-sm">
                              Last Name is required
                            </span>
                          )}
                        </div>
                      </>
                    ) : (
                      <>
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
                              onChange: (e) => {
                                updateFormData({
                                  agentCompanyName: e.target.value,
                                });
                              },
                            })}
                            className="w-full  px-3 py-2 border border-gray-300 rounded-md"
                          />
                          {errors.agentCompanyName && (
                            <span className="text-red-500 text-sm">
                              Company Name is required
                            </span>
                          )}
                        </div>
                      </>
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
                              onChange: (e) => {
                                updateFormData({
                                  agentStreetAddress: e.target.value,
                                });
                              },
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                          {errors.agentStreetAddress && (
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
                            value={formData.agentAddressLine2}
                            {...register("agentAddressLine2", {
                              onChange: (e) => {
                                updateFormData({
                                  agentAddressLine2: e.target.value,
                                });
                              },
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                          {errors.agentAddressLine2 && (
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
                          value={formData.agentCity}
                          {...register("agentCity", {
                            onChange: (e) => {
                              updateFormData({
                                agentCity: e.target.value,
                              });
                            },
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.agentCity && (
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
                            value={formData.agentState}
                            {...register("agentState", {
                              onChange: (e) => {
                                updateFormData({
                                  agentState: e.target.value,
                                });
                              },
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option hidden value="">
                              Select a State
                            </option>
                            {statesInUS.map((state) => (
                              <option key={state}>{state}</option>
                            ))}
                          </select>
                          {errors.agentState && (
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
                            value={formData.agentZipCode}
                            {...register("agentZipCode", {
                              onChange: (e) => {
                                updateFormData({
                                  agentZipCode: e.target.value,
                                });
                              },
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                          {errors.agentZipCode && (
                            <span className="text-red-500 text-sm">
                              Zip Code is required
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {formData.agentOption === "recommended" && (
                <div className="mt-4">
                  <div className="flex">
                    <CalendarIcon className="w-10 h-10 mr-4 text-primary" />
                    <div>
                      <p className="block text-base font-medium text-gray-700">
                        Free First Year
                      </p>
                      <p className="text-sm text-gray-500">
                        Every new order for incorporation service includes 1
                        year of FREE Registered Agent service. Service
                        automatically renews each year, but you may cancel at
                        any time by changing your agent and then contacting us.
                        View Terms
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <DocumentCheckIcon className="w-10 h-10 mr-4 text-primary" />
                    <div>
                      <p className="block text-base font-medium text-gray-700">
                        Guaranteed Rates
                      </p>
                      <p className="text-sm text-gray-500">
                        After the first year your renewal rate will remain $119
                        per year and is guaranteed for the life of the service.
                        When your renewal is due you will be notified and be
                        allowed to decide if renewing the service is in your
                        best interests.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className=" max-w-5">
                      <WalletIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="">
                      <p className="block text-base font-medium text-gray-700">
                        All-Inclusive
                      </p>
                      <p className="text-sm text-gray-500">
                        We never charge a dime in additional fees for postage
                        paid to deliver you your company&apos;s important
                        documents.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <TrashIcon className="w-10 h-10 mr-4 text-primary" />
                    <div>
                      <p className="block text-base font-medium text-gray-700">
                        Reduce Junk Mail
                      </p>
                      <p className="text-sm text-gray-500">
                        Many companies will acquire distribution lists of new
                        companies and use the registered agent address to send
                        annoying solicitation mail. By having a registered agent
                        address you can reduce the amount of junk mail received.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
<div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
              {/* Get company info from step-1 data */}
              {(() => {
                if (typeof window !== 'undefined') {
                  const step1Data = localStorage.getItem("/foreign-qualification/step-1");
                  if (step1Data) {
                    const data = JSON.parse(step1Data);
                    if (data.companyName) {
                      return (
                        <h2 className="text-2xl font-bold mb-2">
                          Please provide Members Information for {data.companyName} {data.designator}
                        </h2>
                      );
                    }
                  }
                }
                return (
                  <h2 className="text-2xl font-bold mb-2">
                    Please provide Members Information
                  </h2>
                );
              })()}
              <label>Number of Members/Owners</label>
              <select
                value={formData.memberNumber}
                {...register("memberNumber", {
                  required: true,
                  onChange: (e) => {
                    updateFormData({
                      memberNumber: e.target.value,
                    });
                  },
                })}
                className="w-full py-3 px-4 border border-gray-300 rounded-lg"
              >
                <option value="" hidden>
                  Select number of members
                </option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
              {errors.memberNumber && (
                <span className="text-red-500 text-sm">
                  Number of members is required
                </span>
              )}
            </div>
            <div className="py-5 my-5">
              {formData.members.map((member: any, index: number) => (
                <div
                  key={index}
                  className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mb-6"
                >
                  <h2 className="text-xl font-semibold mb-4">
                    Member {index + 1}
                  </h2>

                  <div className="flex gap-4 mb-6">
                    <label
                      className={`flex items-center cursor-pointer px-4 py-2 rounded-lg ${
                        member.agentType === "individual"
                          ? "bg-green-100 border-2 border-primary text-green-700"
                          : "bg-gray-100 border border-gray-300 text-gray-700"
                      }`}
                      onClick={() =>
                        handleMemberUpdate(index, "agentType", "individual")
                      }
                    >
                      <input
                        type="radio"
                        value="individual"
                        {...register(`members.${index}.agentType`, {
                          required: true,
                          onChange: (e) => {
                            handleMemberUpdate(
                              index,
                              "agentType",
                              e.target.value
                            );
                          },
                        })}
                        hidden
                        className="hidden"
                      />
                      <User className="w-5 h-5 mr-2" />
                      Individual
                    </label>
                    <label
                      className={`flex cursor-pointer items-center px-4 py-2 rounded-lg ${
                        member.agentType === "company"
                          ? "bg-green-100 border-2 border-primary text-green-700"
                          : "bg-gray-100 border border-gray-300 text-gray-700"
                      }`}
                    >
                      <input
                        type="radio"
                        value="company"
                        {...register(`members.${index}.agentType`, {
                          required: true,
                          onChange: (e) => {
                            handleMemberUpdate(
                              index,
                              "agentType",
                              e.target.value
                            );
                          },
                        })}
                        hidden
                        className="hidden"
                      />
                      <Building className="w-5 h-5 mr-2" />
                      Company
                    </label>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {member.agentType === "individual" ? (
                      <>
                        <div>
                          <label className="block mb-1 text-sm font-medium text-gray-700">
                            First Name
                          </label>
<input
                            type="text"
                            value={member.getFirstName}
                            {...register(`members.${index}.getFirstName`, {
                              onChange: (e) => {
                                handleMemberUpdate(
                                  index,
                                  "getFirstName",
                                  e.target.value
                                );
                              },
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          />
                          {errors?.members?.[index]?.getFirstName && (
                            <span className="text-sm text-red-500">
                              First Name is required
                            </span>
                          )}
                        </div>
                        <div>
                          <label className="block mb-1 text-sm font-medium text-gray-700">
                            Last Name
                          </label>
<input
                            type="text"
                            value={member.getLastName}
                            {...register(`members.${index}.getLastName`, {
                              onChange: (e) => {
                                handleMemberUpdate(
                                  index,
                                  "getLastName",
                                  e.target.value
                                );
                              },
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          />
                          {errors?.members?.[index]?.getLastName && (
                            <span className="text-sm text-red-500">
                              Last Name is required
                            </span>
                          )}
                        </div>
                      </>
                    ) : (
                      <div className="col-span-2">
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                          Company Name
                        </label>
<input
                          type="text"
                          value={member.getCompanyName}
                          {...register(`members.${index}.getCompanyName`, {
                            onChange: (e) => {
                              handleMemberUpdate(
                                index,
                                "getCompanyName",
                                e.target.value
                              );
                            },
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                        {errors?.members?.[index]?.getCompanyName && (
                          <span className="text-sm text-red-500">
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
                            value={member.getStreetAddress}
                            {...register(`members.${index}.getStreetAddress`, {
                              onChange: (e) => {
                                handleMemberUpdate(
                                  index,
                                  "getStreetAddress",
                                  e.target.value
                                );
                              },
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                          {errors?.members?.[index]?.getStreetAddress && (
                            <span className="text-sm text-red-500">
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
                            value={member.getAddressLine2}
                            {...register(`members.${index}.getAddressLine2`, {
                              onChange: (e) => {
                                handleMemberUpdate(
                                  index,
                                  "getAddressLine2",
                                  e.target.value
                                );
                              },
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                          {errors?.members?.[index]?.getAddressLine2 && (
                            <span className="text-sm text-red-500">
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
                          value={member.getCity}
                          {...register(`members.${index}.getCity`, {
                            onChange: (e) => {
                              handleMemberUpdate(
                                index,
                                "getCity",
                                e.target.value
                              );
                            },
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors?.members?.[index]?.getCity && (
                          <span className="text-sm text-red-500">
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
                            value={member.getState}
                            {...register(`members.${index}.getState`, {
                              onChange: (e) => {
                                handleMemberUpdate(
                                  index,
                                  "getState",
                                  e.target.value
                                );
                              },
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
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
                          {errors?.members?.[index]?.getState && (
                            <span className="text-sm text-red-500">
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
                            value={member.getZipCode}
                            {...register(`members.${index}.getZipCode`, {
                              onChange: (e) => {
                                handleMemberUpdate(
                                  index,
                                  "getZipCode",
                                  e.target.value
                                );
                              },
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                          {errors?.members?.[index]?.getZipCode && (
                            <span className="text-sm text-red-500">
                              Zip Code is required
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {formData.members.length > 1 && (
                    <div className="mb-8">
                      <label className="block text-sm font-medium text-gray-700">
                        % of Ownership
                      </label>
<input
                        type="text"
                        value={member.getOwnership}
                        {...register(`members.${index}.getOwnership`, {
                          onChange: (e) => {
                            handleMemberUpdate(
                              index,
                              "getOwnership",
                              e.target.value
                            );
                          },
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  )}

                  <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" />
                      <p className="text-yellow-700">
                        The articles of organization will include the names
                        and/or addresses of the initial members of the LLC.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div></div>
            </div>
{/* navigation */}
            <div className="flex justify-between mt-12">
              <Link
                href="/foreign-qualification/step-1"
                className="px-8 py-2 bg-primary text-white border border-primary rounded-[30px] "
              >
                Back
              </Link>

              <button
                className={`px-8 py-2 bg-primary text-white border border-primary rounded-[30px] hover:bg-blue-700 transition-colors`}
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
      </form>
    </NavigationWrapper>
  );
};

export default StepTwo;
