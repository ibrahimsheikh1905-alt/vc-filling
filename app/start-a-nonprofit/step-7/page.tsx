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
import { SubmitHandler, useForm } from "react-hook-form";
import { usePathname, useRouter } from "next/navigation";

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
  president: string;
  vicePresident: string;
  secretary: string;
  treasurer: string;
};

const StepSeven = () => {
  const pathname = usePathname();
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
    router.push(
      formData.entityType === "Nonprofit"
        ? pathname.replace(/step-\d+.*/, "step-7-1")
        : pathname.replace(/step-\d+.*/, "step-8")
    );
  };
  // console.log(watch("members"));

  const [formData, updateFormData] = useLocalStorageForm({
    memberNumber: "",
    members: [],
    president: "",
    vicePresident: "",
    secretary: "",
    treasurer: "",
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

  // const entityType = JSON.parse(localStorage.getItem("/form-a-llc/step-1") as string).entityType;
  useEffect(() => {
    setIsMounted(true);
    updateFormData({
      entityType: JSON.parse(
        localStorage.getItem(pathname.replace(/step-\d+.*/, "step-1")) as string
      ).entityType,
      companyName: JSON.parse(
        localStorage.getItem(pathname.replace(/step-\d+.*/, "step-2")) as string
      ).companyName,
      designator: JSON.parse(
        localStorage.getItem(pathname.replace(/step-\d+.*/, "step-2")) as string
      ).designator,
    });
    const setServiceType = () => {
      localStorage.setItem("serviceType", "Nonprofit");
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
            <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-2">
                Please provide Members Information for{" "}
                <span className="uppercase">
                  {formData.companyName} {formData.designator}
                </span>
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
                          required: formData.members.length > 1,
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
                      {errors.members?.[index]?.getOwnership && (
                        <span className="text-red-500">
                          This field is required
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
              <div>
                {formData.entityType === "Nonprofit" && (
                  <div>
                    <h4 className="text-2xl font-bold my-6 text-center">
                      Officer Information
                    </h4>
                    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mb-6">
                      <h5 className="font-semibold text-xl my-2">
                        President/CEO
                      </h5>
                      <p className="text-wrap text-sm font-light">
                        The President (a.k.a. Chief Executive Officer or CEO)
                        has general supervision, direction, and control of the
                        day-to-day business and affairs of the corporation,
                        subject to the direction and control of the board of
                        directors.
                      </p>
                      <select
                        {...register("president", {
                          required: formData.entityType === "Nonprofit",
                          onChange: (e) => {
                            updateFormData({ president: e.target.value });
                          },
                        })}
                        value={formData.president}
                        className="w-full py-3 px-4 border border-gray-300 rounded-lg"
                      >
                        <option value="" hidden>
                          Select
                        </option>
                        {formData.members.map((member: any, index: number) => (
                          <option
                            key={index}
                            value={
                              member.getFirstName + " " + member.getLastName
                            }
                            hidden={
                              member.getFirstName === "" ||
                              member.getLastName === ""
                            }
                          >
                            {member.getFirstName + " " + member.getLastName}
                          </option>
                        ))}
                      </select>
                      {errors.president && (
                        <span className="text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mb-6">
                      <h5 className="font-semibold text-xl my-2">Secretary</h5>
                      <p className="text-wrap text-sm font-light">
                        The Corporate Secretary (or other corporate officer
                        designated by the board of directors to maintain and
                        keep corporate records) will keep, or cause to be kept,
                        at the principal office of the corporation, a book of
                        minutes of all meetings of directors and shareholders.
                      </p>
                      <select
                        {...register("secretary", {
                          required: formData.entityType === "Nonprofit",
                          onChange: (e) => {
                            updateFormData({ secretary: e.target.value });
                          },
                        })}
                        value={formData.secretary}
                        className="w-full py-3 px-4 border border-gray-300 rounded-lg"
                      >
                        <option value="" hidden>
                          Select
                        </option>
                        {formData.members.map((member: any, index: number) => (
                          <option
                            key={index}
                            value={
                              member.getFirstName + " " + member.getLastName
                            }
                            hidden={
                              member.getFirstName === "" ||
                              member.getLastName === ""
                            }
                          >
                            {member.getFirstName + " " + member.getLastName}
                          </option>
                        ))}
                      </select>
                      {errors.secretary && (
                        <span className="text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mb-6">
                      <h5 className="font-semibold text-xl my-2">Treasurer</h5>
                      <p className="text-wrap text-sm font-light">
                        The Treasurer (a.k.a. Chief Financial Officer or CFO)
                        will keep and maintain, or cause to be kept and
                        maintained, adequate and correct books and records of
                        accounts of the properties and business transactions of
                        the corporation.
                      </p>
                      <select
                        {...register("treasurer", {
                          required: formData.entityType === "Nonprofit",
                          onChange: (e) => {
                            updateFormData({ treasurer: e.target.value });
                          },
                        })}
                        value={formData.treasurer}
                        className="w-full py-3 px-4 border border-gray-300 rounded-lg"
                      >
                        <option value="" hidden>
                          Select
                        </option>
                        {formData.members.map((member: any, index: number) => (
                          <option
                            key={index}
                            value={
                              member.getFirstName + " " + member.getLastName
                            }
                            hidden={
                              member.getFirstName === "" ||
                              member.getLastName === ""
                            }
                          >
                            {member.getFirstName + " " + member.getLastName}
                          </option>
                        ))}
                      </select>
                      {errors.treasurer && (
                        <span className="text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mb-6">
                      <h5 className="font-semibold text-xl my-2">
                        Vice President (Optional)
                      </h5>
                      <p className="text-wrap text-sm font-light">
                        The Officer position of Vice President is optional, but
                        the role of the Vice President is to be able to fill in
                        for the president anytime the President is unavailable,
                        whether it be in corporate meetings or day to day
                        business decisions.
                      </p>
                      <select
                        {...register("vicePresident", {
                          onChange: (e) => {
                            updateFormData({ vicePresident: e.target.value });
                          },
                        })}
                        value={formData.vicePresident}
                        className="w-full py-3 px-4 border border-gray-300 rounded-lg"
                      >
                        <option value="" hidden>
                          Select
                        </option>
                        {formData.members.map((member: any, index: number) => (
                          <option
                            key={index}
                            value={
                              member.getFirstName + " " + member.getLastName
                            }
                            hidden={
                              member.getFirstName === "" ||
                              member.getLastName === ""
                            }
                          >
                            {member.getFirstName + " " + member.getLastName}
                          </option>
                        ))}
                      </select>
                      {errors.vicePresident && (
                        <span className="text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-between mt-12">
              <Link
                href="/start-a-nonprofit/step-6"
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

export default StepSeven;
