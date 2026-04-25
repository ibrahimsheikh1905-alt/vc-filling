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
} from "@heroicons/react/24/solid";
import useLocalStorageForm from "@/hooks/useLocalStorage";
import { statesInUS } from "@/data";
import NavigationWrapper from "@/components/NavigationWrapper";
import { usePathname, useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
interface AgentOption {
  title: string;
}

type Inputs = {
  memberType: string;
  firstName: string;
  lastName: string;
  companyName: string;
  zipCode: string;
  state: string;
  city: string;
  addressLine2: string;
  streetAddress: string;
  agentOption: string;
  entityType: string;
};

const StepEight = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: { agentOption: "recommended" },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    updateFormData(data);
    router.push(pathname.replace(/step-\d+.*/, "step-9"));
  };
  // console.log(watch("nameChangeOption"));

  const [formData, updateFormData] = useLocalStorageForm({
    memberType: "individual",
    firstName: "",
    lastName: "",
    companyName: "",
    zipCode: "",
    state: "",
    city: "",
    addressLine2: "",
    streetAddress: "",
    agentOption: "recommended",
    entityType: "",
  });

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
      localStorage.setItem("serviceType", "form-s-corporation");
    };
    setServiceType();
    
  }, []);
  useEffect(() => {
    updateFormData({
      entityType: JSON.parse(
        localStorage.getItem("/form-s-corporation/step-1") as string
      ).entityType,
      stateFromStepOne: JSON.parse(
        localStorage.getItem("/form-s-corporation/step-1") as string
      ).stateName,
    });
  }, [updateFormData]);

  if (!isMounted) {
    return null;
  }

  return (
    <NavigationWrapper>
      <form onSubmit={handleSubmit(onSubmit)} className="container my-10">
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
                  <label
                    key={key}
                    className={`p-4 cursor-pointer border rounded-lg w-1/2 ${
                      formData.agentOption === key
                        ? "border-primary"
                        : "border-gray-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name="agentOption"
                      value={key}
                      className="hidden"
                      checked={formData.agentOption === key}
                      onChange={() => {
                        updateFormData({
                          agentOption: key as "recommended" | "own",
                          memberType: "individual",
                          firstName: "",
                          lastName: "",
                          companyName: "",
                          zipCode: "",
                          city: "",
                          addressLine2: "",
                          streetAddress: "",
                        });
                        setValue("memberType", "individual");
                        setValue("firstName", "");
                        setValue("lastName", "");
                        setValue("companyName", "");
                        setValue("zipCode", "");
                        setValue("city", "");
                        setValue("addressLine2", "");
                        setValue("streetAddress", "");
                      }}
                    />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`min-w-4 max-w-4 h-4 rounded-full border-2 ${
                            formData.agentOption === key
                              ? "border-primary bg-primary"
                              : "border-gray-300"
                          }`}
                        >
                          {formData.agentOption === key && (
                            <div className="w-2 h-2 rounded-full bg-white mx-auto mt-0.5" />
                          )}
                        </div>
                        <span className="font-medium">{option.title}</span>
                      </div>
                    </div>
                  </label>
                ))}
                {errors.agentOption && (
                  <span className="text-red-500">This field is required</span>
                )}
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
                      className={`flex cursor-pointer items-center px-4 py-2 rounded-lg ${
                        formData.memberType === "individual"
                          ? "bg-green-100 border-2 border-primary text-green-700"
                          : "bg-gray-100 border border-gray-300 text-gray-700"
                      }`}
                    >
                      <input
                        type="radio"
                        hidden
                        className="hidden"
                        value={"individual"}
                        checked={formData.memberType === "individual"}
                        {...register("memberType", {
                          required: formData.agentOption === "own",
                          onChange: (e) => {
                            updateFormData({
                              memberType: e.target.value,
                              companyName: "",
                            });
                            setValue("companyName", "");
                          },
                        })}
                      />
                      <User className="w-5 h-5 mr-2" />
                      Individual
                    </label>
                    <label
                      className={`flex cursor-pointer items-center px-4 py-2 rounded-lg ${
                        formData.memberType === "company"
                          ? "bg-green-100 border-2 border-primary text-green-700"
                          : "bg-gray-100 border border-gray-300 text-gray-700"
                      }`}
                    >
                      <input
                        type="radio"
                        hidden
                        className="hidden"
                        value={"company"}
                        checked={formData.memberType === "company"}
                        {...register("memberType", {
                          required: formData.agentOption === "own",
                          onChange: (e) => {
                            updateFormData({
                              memberType: e.target.value,
                              companyName: "",
                            });
                            setValue("firstName", "");
                            setValue("lastName", "");
                          },
                        })}
                      />
                      <Building className="w-5 h-5 mr-2" />
                      Company
                    </label>
                  </div>
                  {/* {formData.memberType === "individual" && (
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
                    {formData.memberType === "individual" ? (
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
                            value={formData.firstName} //TODO: use getFirstName
                            {...register("firstName", {
                              required:
                                formData.agentOption === "own" &&
                                formData.memberType === "individual",
                              onChange: (e) => {
                                updateFormData({ firstName: e.target.value });
                              },
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          />
                          {errors.firstName && (
                            <span className="text-red-500">
                              This field is required
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
                            {...register("lastName", {
                              required:
                                formData.agentOption === "own" &&
                                formData.memberType === "individual",
                              onChange: (e) => {
                                updateFormData({ lastName: e.target.value });
                              },
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          />
                          {errors.lastName && (
                            <span className="text-red-500">
                              This field is required
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
                            value={formData.companyName}
                            {...register("companyName", {
                              required:
                                formData.agentOption === "own" &&
                                formData.memberType === "company",
                              onChange: (e) => {
                                updateFormData({ companyName: e.target.value });
                              },
                            })}
                            className="w-full  px-3 py-2 border border-gray-300 rounded-md"
                          />
                          {errors.companyName && (
                            <span className="text-red-500">
                              This field is required
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
                            value={formData.streetAddress}
                            {...register("streetAddress", {
                              required: formData.agentOption === "own",
                              onChange: (e) => {
                                updateFormData({
                                  streetAddress: e.target.value,
                                });
                              },
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                          {errors.streetAddress && (
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
                            value={formData.addressLine2}
                            {...register("addressLine2", {
                              required: formData.agentOption === "own",
                              onChange: (e) => {
                                updateFormData({
                                  addressLine2: e.target.value,
                                });
                              },
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                          {errors.addressLine2 && (
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
                          value={formData.city}
                          {...register("city", {
                            required: formData.agentOption === "own",
                            onChange: (e) => {
                              updateFormData({ city: e.target.value });
                            },
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.city && (
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
                            value={formData.state}
                            {...register("state", {
                              required: formData.agentOption === "own",
                              onChange: (e) => {
                                updateFormData({ state: e.target.value });
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
                          {errors.state && (
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
                            value={formData.zipCode}
                            {...register("zipCode", {
                              required: formData.agentOption === "own",
                              onChange: (e) => {
                                updateFormData({ zipCode: e.target.value });
                              },
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                          {errors.zipCode && (
                            <span className="text-red-500">
                              This field is required
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
            <div className="flex justify-between mt-12">
              <Link
                href={
                  formData.entityType === "S-Corporation"
                    ? "/form-s-corporation/step-7-1"
                    : "/form-s-corporation/step-7"
                }
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

export default StepEight;
