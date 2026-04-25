"use client";
import React, { useEffect, useState } from "react";
import {
  UserCircleIcon as User,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";
import OrderSummary from "@/components/OrderSummary";
import Link from "next/link";
import useLocalStorageForm from "@/hooks/useLocalStorage";
import { statesInUS } from "@/data";
import NavigationWrapper from "@/components/NavigationWrapper";
import { usePathname, useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  ein: string;
  idType: string;
  isForeign: boolean;
  getZipCode: string;
  getState: string;
  getCity: string;
  getAddressLine2: string;
  getStreetAddress: string;
  getFirstName: string;
  getLastName: string;
};
const StepNine = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    // watch,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: { idType: "SSN", isForeign: false } });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    updateFormData({
      ...data,
      nameChangeOption: data.isForeign === true,
    });
    router.push(pathname.replace(/step-\d+.*/, "step-10"));
  };
  // console.log(watch("isForeign"));

  const [formData, updateFormData] = useLocalStorageForm({
    ein: "",
    idType: "SSN",
    isForeign: false,
    getZipCode: "",
    getState: "",
    getCity: "",
    getAddressLine2: "",
    getStreetAddress: "",
    getFirstName: "",
    getLastName: "",
  });

  // const [useName, setUseName] = useState<boolean>(true);

  useEffect(() => {
    setIsMounted(true);
    const setServiceType = () => {
      localStorage.setItem("serviceType", "form-s-corporation");
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
          <div className="max-w-4xl mx-auto">
            <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">
                EIN / Tax Identification Number Information
              </h2>

              <p className="text-sm text-gray-600 mb-4">
                An Employer Identification Number (EIN) is a nine-digit number
                that is assigned by the IRS and used to identify taxpayers. We
                will apply and obtain your EIN from the IRS electronically. This
                option is the fastest way to obtain the EIN.
              </p>

              <div className="mb-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.isForeign}
                    {...register("isForeign", {
                      onChange: () => {
                        updateFormData({ isForeign: !formData.isForeign });
                        setValue("isForeign", !formData.isForeign);
                      },
                    })}
                    className="form-checkbox"
                  />
                  <span>
                    I am a foreign individual and do not have a social security
                    number
                  </span>
                </label>
              </div>

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
                    // value={useName ? "Althea" : getFirstName}
                    value={formData.getFirstName}
                    {...register("getFirstName", {
                      required: true,
                      onChange: (e) => {
                        updateFormData({ getFirstName: e.target.value });
                      },
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                  {errors.getFirstName && (
                    <span className="text-red-500 text-sm">
                      First name is required
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
                    // value={useName ? "Wise" : getLastName}
                    value={formData.getLastName}
                    {...register("getLastName", {
                      required: true,
                      onChange: (e) => {
                        updateFormData({ getLastName: e.target.value });
                      },
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                  {errors.getLastName && (
                    <span className="text-red-500 text-sm">
                      Last name is required
                    </span>
                  )}
                </div>
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
                            required: !formData.isForeign,
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
                            required: !formData.isForeign,
                            onChange: (e) => {
                              updateFormData({ idType: e.target.value });
                            },
                          })}
                          className="mr-2"
                        />
                        SSN
                      </label>
                      {errors.idType && (
                        <span className="text-red-500 text-sm">
                          ID type is required
                        </span>
                      )}
                    </div>
                    <input
                      type="number"
                      placeholder="000-00-0000"
                      maxLength={9}
                      value={formData.ein}
                      {...register("ein", {
                        required: !formData.isForeign,
                        onChange: (e) => {
                          updateFormData({ ein: e.target.value });
                        },
                      })}
                      inputMode="numeric"
                      className="w-full p-2 border rounded mt-2"
                    />
                    {errors.ein && (
                      <span className="text-red-500 text-sm">
                        EIN is required
                      </span>
                    )}
                  </div>
                </>
              )}

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
                      Once the EIN process is complete, your SSN is permanently
                      deleted from the Bizee database. To further protect your
                      security, all Social Security Numbers are stored on a
                      secure, encrypted server during the EIN process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-4xl mx-auto p-6 my-6 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">
                Physical Street Address
              </h2>

              <p className="text-sm text-gray-600 mb-4">
                The IRS requires a physical address in order to issue an
                Employer Identification Number (EIN / Tax ID Number) to your
                company. Please note the IRS will not allow for the use of a PO
                Box; however, this address will not be public under any
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
                      value={formData.getStreetAddress}
                      {...register("getStreetAddress", {
                        required: true,
                        onChange: (e) => {
                          updateFormData({ getStreetAddress: e.target.value });
                        },
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.getStreetAddress && (
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
                      value={formData.getAddressLine2}
                      {...register("getAddressLine2", {
                        required: true,
                        onChange: (e) => {
                          updateFormData({ getAddressLine2: e.target.value });
                        },
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.getAddressLine2 && (
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
                    value={formData.getCity}
                    {...register("getCity", {
                      required: true,
                      onChange: (e) => {
                        updateFormData({ getCity: e.target.value });
                      },
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                  {errors.getCity && (
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
                      value={formData.getState}
                      {...register("getState", {
                        required: true,
                        onChange: (e) => {
                          updateFormData({ getState: e.target.value });
                        },
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option hidden value="">
                        Select State
                      </option>
                      {statesInUS.map((state) => (
                        <option key={state}>{state}</option>
                      ))}
                    </select>
                    {errors.getState && (
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
                      maxLength={7}
                      value={formData.getZipCode}
                      {...register("getZipCode", {
                        required: true,
                        onChange: (e) => {
                          updateFormData({ getZipCode: e.target.value });
                        },
                        validate: (value) => {
                          if (
                            Number(value) < 10000 ||
                            Number(value) > 999999
                          ) {
                            return "Invalid Zip Code";
                          }
                          if (
                            value.toString().length <= 5 &&
                            value.toString().length >= 6
                          ) {
                            return "Zip Code must be 5 digits";
                          }
                        },
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.getZipCode && (
                      <span className="text-red-500 text-sm">
                        {errors.getZipCode.message || "Zip Code is required"}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-12">
              <Link
                href="/form-s-corporation/step-8"
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

export default StepNine;
