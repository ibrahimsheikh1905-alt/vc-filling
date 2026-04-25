"use client";
import OrderSummary from "@/components/OrderSummary";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  UserCircleIcon as User,
  BuildingOfficeIcon as Building,
  BellAlertIcon as AlertCircle,
} from "@heroicons/react/24/solid";
import useLocalStorageForm from "@/hooks/useLocalStorage";
import { statesInUS } from "@/data";
import NavigationWrapper from "@/components/NavigationWrapper";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  memberNumber: string;
  members: Member[];
  sameAsCompanyAddress: string;
  mailStreetAddress: string;
  mailAddressLine2: string;
  mailCity: string;
  mailState: string;
  mailZipCode: string;
  agentType: string;
  agentFirstName: string;
  agentLastName: string;
  agentCompanyName: string;
  agentZipCode: string;
  agentState: string;
  agentCity: string;
  agentAddressLine2: string;
  agentStreetAddress: string;
};
type Member = {
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
      sameAsCompanyAddress: "true",
      agentType: "individual",
   }});

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    updateFormData({
      ...data,
      sameAsCompanyAddress: data.sameAsCompanyAddress === "true",
    });
    router.push("/forms/step-final");
  };
  // console.log(watch("members"));
  const [formData, updateFormData] = useLocalStorageForm({
    memberNumber: "",
    members: [],
    sameAsCompanyAddress: true,
    mailStreetAddress: "",
    mailAddressLine2: "",
    mailCity: "",
    mailState: "",
    mailZipCode: "",
    agentType: "individual",
    agentFirstName: "",
    agentLastName: "",
    agentCompanyName: "",
    agentZipCode: "",
    agentState: "",
    agentCity: "",
    agentAddressLine2: "",
    agentStreetAddress: "",
  });

  useEffect(() => {
    const memberCount = Number(formData.memberNumber);
    if (memberCount > 0 && formData.members.length !== memberCount) {
      const updatedMembers = [...formData.members];
      while (updatedMembers.length < memberCount) {
        updatedMembers.push({
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

  useEffect(() => {
    setIsMounted(true);
    const setServiceType = () => {
      localStorage.setItem("serviceType", "annual-report");
    };
    setServiceType();
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <NavigationWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container my-10">
          <div className="md:flex gap-10">
            <div className="max-w-4xl grow mx-auto">
              <div className="max-w-4xl px-16 py-12 bg-white rounded-3xl shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Mailing Address</h2>
                <p className="mb-4 font-medium">
                  Is the mailing address the same as the company address?
                </p>
                <div className="flex gap-6 pb-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      value={"true"}
                      className="min-w-4 max-w-4 h-4 accent-primary"
                      {...register("sameAsCompanyAddress", {
                        required: true,
                        onChange: (e) => {
                          updateFormData({
                            sameAsCompanyAddress: e.target.value === "true",
                            mailStreetAddress: "",
                            mailAddressLine2: "",
                            mailCity: "",
                            mailState: "",
                            mailZipCode: "",
                          });
                        },
                      })}
                    />
                    Yes
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      value={"false"}
                      className="min-w-4 max-w-4 h-4 accent-primary"
                      {...register("sameAsCompanyAddress", {
                        required: true,
                        onChange: (e) => {
                          updateFormData({
                            sameAsCompanyAddress: e.target.value === "true",
                          });
                        },
                      })}
                    />
                    No
                  </label>
                </div>
                {errors.sameAsCompanyAddress && (
                  <span className="text-red-500">Mailing address is required</span>
                )}
                {!formData.sameAsCompanyAddress && (
                  <div>
                    <div className="md:flex">
                      <div className="md:w-1/2 mr-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Street Address
                        </label>
                        <div className="my-3">
                          <input
                            type="text"
                            value={formData.mailStreetAddress}
                            placeholder="Street Address"
                            {...register("mailStreetAddress", {
                              required: true,
                              onChange: (e) => {
                                updateFormData({
                                  mailStreetAddress: e.target.value,
                                });
                              },
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                          {errors.mailStreetAddress && (
                            <span className="text-red-500">
                              Mailing address is required
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
                            value={formData.mailAddressLine2}
                            placeholder="Address(Line 2)"
                            {...register("mailAddressLine2", {
                              onChange: (e) => {
                                updateFormData({
                                  mailAddressLine2: e.target.value,
                                });
                              },
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                          {errors.mailAddressLine2 && (
                            <span className="text-red-500">
                              Mailing address is required
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
                          value={formData.mailCity}
                          placeholder="City"
                          {...register("mailCity", {
                            required: true,
                            onChange: (e) => {
                              updateFormData({ mailCity: e.target.value });
                            },
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.mailCity && (
                          <span className="text-red-500">
                            Mailing address is required
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
                            value={formData.mailState}
                            {...register("mailState", {
                              required: true,
                              onChange: (e) => {
                                updateFormData({ mailState: e.target.value });
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
                          {errors.mailState && (
                            <span className="text-red-500">
                              Mailing address is required
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
                            value={formData.mailZipCode}
                            placeholder="Zip Code"
                            {...register("mailZipCode", {
                              required: true,
                              onChange: (e) => {
                                updateFormData({ mailZipCode: e.target.value });
                              },
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                          {errors.mailZipCode && (
                            <span className="text-red-500">
                              Mailing address is required
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
                <h2 className="text-2xl font-bold mb-2">
                  Please provide Members Information for ABCD LLC
                </h2>
                <label>Number of Members/Owners</label>
                <select
                  value={formData.memberNumber}
                  {...register("memberNumber", {
                    required: true,
                    onChange: (e) => {
                      updateFormData({ memberNumber: e.target.value });
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
                  <span className="text-red-500">Member number is required</span>
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

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                          First Name
                        </label>
                        <input
                          type="text"
                          value={member.getFirstName}
                          {...register(`members.${index}.getFirstName`, {
                            required: true,
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
                        {errors.members?.[index]?.getFirstName && (
                          <span className="text-red-500">
                            First name is required
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
                            required: true,
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
                        {errors.members?.[index]?.getLastName && (
                          <span className="text-red-500">
                            Last name is required
                          </span>
                        )}
                      </div>
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
                              {...register(
                                `members.${index}.getStreetAddress`,
                                {
                                  required: true,
                                  onChange: (e) => {
                                    handleMemberUpdate(
                                      index,
                                      "getStreetAddress",
                                      e.target.value
                                    );
                                  },
                                }
                              )}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            />
                            {errors.members?.[index]?.getStreetAddress && (
                              <span className="text-red-500">
                                Address is required
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
                                required: true,
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
                            {errors.members?.[index]?.getAddressLine2 && (
                              <span className="text-red-500">
                                Address is required
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
                              required: true,
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
                                required: true,
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
                              <option hidden value={""}>
                                Select State
                              </option>
                              {statesInUS.map((state) => (
                                <option key={state} value={state}>
                                  {state}
                                </option>
                              ))}
                            </select>
                            {errors.members?.[index]?.getState && (
                              <span className="text-red-500">
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
                              {...register(`members.${index}.getZipCode`, {
                                required: true,
                                onChange: (e) => {
                                  handleMemberUpdate(
                                    index,
                                    "getZipCode",
                                    e.target.value
                                  );
                                },
                              })}
                              value={member.getZipCode}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            />
                            {errors.members?.[index]?.getZipCode && (
                              <span className="text-red-500">
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
                          {...register(`members.${index}.getOwnership`, {
                            required: true,
                            onChange: (e) => {
                              handleMemberUpdate(
                                index,
                                "getOwnership",
                                e.target.value
                              );
                            },
                          })}
                          value={member.getOwnership}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.members?.[index]?.getOwnership && (
                          <span className="text-red-500">
                            Ownership is required
                          </span>
                        )}
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
              {/*agent information section*/}
              <div className="my-8 rounded-3xl mx-auto max-w-4xl shadow-lg p-8 space-y-8">
                <h2 className="text-2xl font-bold mb-4">Registered Agent</h2>
                <p className="text-gray-700 mb-4">
                  You may serve as your own Registered Agent as long as you
                  possess a physical street address (PO Box not allowed) in the
                  state of formation.
                </p>

                <div className="flex gap-4 mb-6">
                  <label
                    className={`flex items-center cursor-pointer px-4 py-2 rounded-lg ${
                      formData.agentType === "individual"
                        ? "bg-green-100 border-2 border-primary text-green-700"
                        : "bg-gray-100 border border-gray-300 text-gray-700"
                    }`}
                  >
                    <input
                      type="radio"
                      className="hidden"
                      value={"individual"}
                      {...register("agentType", {
                        required: true,
                        onChange: (e) => {
                          updateFormData({
                            agentType: e.target.value,
                            agentCompanyName: "",
                          });
                          setValue("agentCompanyName", "");
                        }
                      })}
                    />
                    <User className="w-5 h-5 mr-2" />
                    Individual
                  </label>
                  <label
                    className={`flex items-center cursor-pointer px-4 py-2 rounded-lg ${
                      formData.agentType === "company"
                        ? "bg-green-100 border-2 border-primary text-green-700"
                        : "bg-gray-100 border border-gray-300 text-gray-700"
                    }`}
                  >
                    <input
                      type="radio"
                      className="hidden"
                      value={"company"}
                      {...register("agentType", {
                        required: true,
                        onChange: (e) =>{
                          updateFormData({
                            agentType: e.target.value,
                            agentFirstName: "",
                            agentLastName: "",
                          });
                          setValue("agentFirstName", "");
                          setValue("agentLastName", "");
                      }
                      })}
                    />
                    <Building className="w-5 h-5 mr-2" />
                    Company
                  </label>
                  {errors.agentType && (
                    <span className="text-red-500">Agent type is required</span>
                  )}
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
                          <span className="text-red-500">
                            Agent first name is required
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
                          <span className="text-red-500">
                            Agent last name is required
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
                          <span className="text-red-500">
                            Company name is required
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
                          <span className="text-red-500">
                            Address is required
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
                          <span className="text-red-500">
                            Address is required
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
                        <span className="text-red-500">
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
                          <option hidden value="">
                            Select a State
                          </option>
                          {statesInUS.map((state) => (
                            <option key={state}>{state}</option>
                          ))}
                        </select>
                        {errors.agentState && (
                          <span className="text-red-500">
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
                          <span className="text-red-500">
                            Zip code is required
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step Navigation */}
              <div className="flex justify-between mt-12">
                <Link
                  href="/annual-report/step-1"
                  className="px-8 py-2 bg-primary text-white border border-primary rounded-[30px] "
                >
                  Back
                </Link>

                <button
                  className={`px-8 py-2 bg-primary text-white border border-primary rounded-[30px]`}
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

export default StepTwo;
