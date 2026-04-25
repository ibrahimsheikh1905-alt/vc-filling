"use client";
import React, { useEffect, useState } from "react";
import OrderSummary from "@/components/OrderSummary";
import Link from "next/link";
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

type Member = {
  memberType: string;
  getZipCode: string;
  getCity: string;
  getState: string;
  getAddressLine2: string;
  getStreetAddress: string;
  getFirstName: string;
  getLastName: string;
  getCompanyName: string;
  getNumberOfShares: string;
};

type Inputs = {
  memberNumber: string;
  members: Member[];
  shareNumber: string;
  sharePrice: string;
  entityType: string;
};

const StepSevenOne = () => {
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    updateFormData(data);
    router.push("/form-a-llc/step-8");
  };
  const [formData, updateFormData] = useLocalStorageForm({
    memberNumber: "",
    members: [],
    shareNumber: "",
    sharePrice: "",
    entityType: "",
    membersTotalShare: null,
  });

  useEffect(() => {
    const memberCount = Number(formData.memberNumber);
    if (memberCount > 0 && formData.members.length !== memberCount) {
      const updatedMembers = [...formData.members];
      while (updatedMembers.length < memberCount) {
        updatedMembers.push({
          memberType: "individual",
          getZipCode: "",
          getCity: "",
          getState: "",
          getAddressLine2: "",
          getStreetAddress: "",
          getFirstName: "",
          getLastName: "",
          getCompanyName: "",
          getNumberOfShares: "",
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

    if (field === "getNumberOfShares") {
      const totalShares = updatedMembers.reduce(
        (sum, member) => sum + Number(member.getNumberOfShares || 0),
        0
      );
      updateFormData({ membersTotalShare: totalShares });
    }
  };
  useEffect(() => {
    const totalShares = formData.members.reduce(
      (sum: number, member: { getNumberOfShares: any; }) => sum + Number(member.getNumberOfShares || 0),
      0
    );
    updateFormData({ membersTotalShare: totalShares });
  }, [formData.members]);

  useEffect(() => {
    setIsMounted(true);
    const setServiceType = () => {
      localStorage.setItem("serviceType", "form-llc");
    };
    setServiceType();
    updateFormData({
      entityType: JSON.parse(
        localStorage.getItem("/form-a-llc/step-1") as string
      ).entityType,
    });
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <NavigationWrapper>
      <form onSubmit={handleSubmit(onSubmit)} className="container my-10">
        <div className="md:flex gap-10">
          <div className="max-w-4xl mx-auto">
            <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-2">
                Please provide Shareholder Information for ABCD LLC
              </h2>
              <div className="flex gap-10">
                <div>
                  <label>Number of Shares Authorized</label>
                  <input
                    type="number"
                    value={formData.shareNumber}
                    {...register("shareNumber", {
                      required: true,
                      onChange: (e) => {
                        updateFormData({ shareNumber: e.target.value });
                      },
                      validate: (value) => {
                        if (Number(value) <= 0) {
                          return "Number of shares must be greater than 0";
                        }
                        if (Number(value) !== formData.membersTotalShare) {
                          return "Number of shares must be equal to number of members' shares";
                        }
                      },
                    })}
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg"
                  />
                  {errors.shareNumber && (
                    <span className="text-red-500">
                      {errors.shareNumber.message || "This field is required"}
                    </span>
                  )}
                </div>
                <div>
                  <label>Share Per Value</label>
                  <input
                    type="number"
                    value={formData.sharePrice}
                    {...register("sharePrice", {
                      required: true,
                      onChange: (e) => {
                        updateFormData({ sharePrice: e.target.value });
                      },
                      validate: (value) => {
                        if (Number(value) <= 0) {
                          return "Share price must be greater than 0";
                        }
                      },
                    })}
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg"
                  />
                  {errors.sharePrice && (
                    <span className="text-red-500">
                      {errors.sharePrice.message || "Share price is required"}
                    </span>
                  )}
                </div>
                <div>
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
                    <span className="text-red-500">
                      Member number is required
                    </span>
                  )}
                </div>
              </div>
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

                  {formData.entityType === "LLC" && (
                    <div className="flex gap-4 mb-6">
                      <label
                        className={`flex items-center cursor-pointer px-4 py-2 rounded-lg ${
                          member.memberType === "individual"
                            ? "bg-green-100 border-2 border-primary text-green-700"
                            : "bg-gray-100 border border-gray-300 text-gray-700"
                        }`}
                      >
                        <input
                          type="radio"
                          hidden
                          checked={member.memberType === "individual"}
                          className="hidden"
                          value={"individual"}
                          {...register(`members.${index}.memberType`, {
                            required: formData.entityType === "LLC",
                            onChange: (e) => {
                              handleMemberUpdate(
                                index,
                                "memberType",
                                e.target.value
                              );
                              setValue(`members.${index}.getCompanyName`, "");
                            },
                          })}
                        />
                        <User className="w-5 h-5 mr-2" />
                        Individual
                      </label>
                      <label
                        className={`flex cursor-pointer items-center px-4 py-2 rounded-lg ${
                          member.memberType === "company"
                            ? "bg-green-100 border-2 border-primary text-green-700"
                            : "bg-gray-100 border border-gray-300 text-gray-700"
                        }`}
                        onClick={() =>
                          handleMemberUpdate(index, "memberType", "company")
                        }
                      >
                        <input
                          type="radio"
                          hidden
                          checked={member.memberType === "company"}
                          className="hidden"
                          value={"company"}
                          {...register(`members.${index}.memberType`, {
                            required: formData.entityType === "LLC",
                            onChange: (e) => {
                              handleMemberUpdate(
                                index,
                                "memberType",
                                e.target.value
                              );
                              setValue(`members.${index}.getFirstName`, "");
                              setValue(`members.${index}.getLastName`, "");
                            },
                          })}
                        />
                        <Building className="w-5 h-5 mr-2" />
                        Company
                      </label>
                      {errors.members?.[index]?.memberType && (
                        <span className="text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {member.memberType === "individual" ||
                    formData.entityType !== "LLC" ? (
                      <>
                        <div>
                          <label className="block mb-1 text-sm font-medium text-gray-700">
                            First Name
                          </label>
                          <input
                            type="text"
                            value={member.getFirstName}
                            {...register(`members.${index}.getFirstName`, {
                              required:
                                member.memberType === "individual" ||
                                formData.entityType !== "LLC",
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
                              This field is required
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
                              required:
                                member.memberType === "individual" ||
                                formData.entityType !== "LLC",
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
                              This field is required
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
                            required:
                              member.memberType !== "individual" ||
                              formData.entityType === "LLC",
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
                        {errors.members?.[index]?.getCompanyName && (
                          <span className="text-red-500">
                            This field is required.
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
                              required: true,
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
                          {errors.members?.[index]?.getStreetAddress && (
                            <span className="text-red-500">
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
                        {errors.members?.[index]?.getCity && (
                          <span className="text-red-500">
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
                            <option hidden value="">
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
                            maxLength={10}
                            value={member.getZipCode}
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
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                          {errors.members?.[index]?.getZipCode && (
                            <span className="text-red-500">
                              This field is required
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="md:flex">
                      <div className="md:w-1/2 mr-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Number of Shares
                        </label>
                        <div className="my-3">
                          <input
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            type="number"
                            value={member.getNumberOfShares}
                            {...register(`members.${index}.getNumberOfShares`, {
                              required: true,
                              onChange: (e) => {
                                handleMemberUpdate(
                                  index,
                                  "getNumberOfShares",
                                  e.target.value
                                );
                              },
                              validate: (value) => {
                                if (Number(value) <= 0) {
                                  return "Number of shares must be greater than 0";
                                }
                              },
                            })}
                          />
                          {errors.members?.[index]?.getNumberOfShares && (
                            <span className="text-red-500">
                              {errors.members?.[index]?.getNumberOfShares
                                .message || "This field is required"}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

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
            </div>
            <div className="flex justify-between mt-12">
              <Link
                href="/form-a-llc/step-7"
                className="px-8 py-2 bg-primary text-white border border-primary rounded-[30px] "
              >
                Back
              </Link>
              <button 
                type="submit"
                className="px-8 py-2 bg-primary text-white border border-primary rounded-[30px] "
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

export default StepSevenOne;
