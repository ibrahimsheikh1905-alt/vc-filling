"use client";
import OrderSummary from "@/components/OrderSummary";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LightBulbIcon } from "@heroicons/react/24/solid";
import useLocalStorageForm from "@/hooks/useLocalStorage";
import { statesInUS } from "@/data";
import StepNavigation from "@/components/StepNavigation";
import NavigationWrapper from "@/components/NavigationWrapper";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { AlertCircle } from "lucide-react";

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
  getOwnership: string;
};
type Inputs = {
  memberNumber: string;
  members: Member[];
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
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    updateFormData(data);
    router.push("/forms/step-final");
  };
  // console.log(watch("members"));

  const [formData, updateFormData] = useLocalStorageForm({
    memberNumber: "",
    members: [],
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
      localStorage.setItem("serviceType", "virtual-address");
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
          <div className="max-w-4xl grow mx-auto">
            <div className="max-w-4xl mx-auto p-6 bg-white rounded-3xl shadow-lg mt-6">
              <h2 className="text-2xl font-bold mb-2">Directors Information</h2>
              <div className="my-2 py-2 px-3 bg-gray-100 rounded-3xl flex items-center">
                <LightBulbIcon className="min-w-5 min-h-5 max-w-5 max-h-5 mr-5 ml-2 grow text-primary" />
                <div>
                  <p className="font-semibold">What is a Director?</p>
                  <p>
                    The directors of a corporation are responsible for the long
                    term management of the corporation, and are elected or
                    appointed by shareholders. All directors as a collective are
                    commonly referred to as the board of directors.
                  </p>
                </div>
              </div>
              <label>Number of Directors</label>
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
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="py-5 my-5">
              {formData.members.map((member: any, index: number) => (
                <div
                  key={index}
                  className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mb-6"
                >
                  <h2 className="text-xl font-semibold mb-4">
                    Director {index + 1}
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
                          This field is required
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
                              This field is required
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Step Navigation */}
            <div className="flex justify-between mt-12">
              <Link
                href="/virtual-address/step-1"
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
      </form>
    </NavigationWrapper>
  );
};

export default StepTwo;
