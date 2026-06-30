"use client";
import OrderSummary from "@/components/OrderSummary";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { DocumentCheckIcon, LightBulbIcon } from "@heroicons/react/24/solid";
import useLocalStorageForm from "@/hooks/useLocalStorage";
import { statesInUS } from "@/data";
import NavigationWrapper from "@/components/NavigationWrapper";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
interface BusinessLicenseOption {
  title: string;
}

type Inputs = {
  licenseType: "recommended" | "own";
  getZipCode: string;
  getCity: string;
  getState: string;
  getAddressLine2: string;
  getStreetAddress: string;
};

const StepTwelve = () => {
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: { licenseType: "own" } });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    updateFormData(data);
    router.push("/forms/step-final");
  };
  // console.log(watch("nameChangeOption"));

  const options: Record<"recommended" | "own", BusinessLicenseOption> = {
    recommended: {
      title:
        "Yes, identify all licenses I need and send me the necessary applications. ($99)",
    },
    own: {
      title: "No thanks, I'll do the work myself.",
    },
  };

  const [formData, updateFormData] = useLocalStorageForm({
    licenseType: "own",
    getZipCode: "",
    getCity: "",
    getState: "",
    getAddressLine2: "",
    getStreetAddress: "",
  });

  useEffect(() => {
    setIsMounted(true);
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
          <div className="max-w-4xl mx-auto">
            <div className="max-w-4xl px-16 py-12 bg-white rounded-3xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">
                Business Licenses and Permits
              </h2>
              <div className="flex flex-col justify-center align-middle p-10 text-center">
                <DocumentCheckIcon className="mx-auto h-12 w-12 mb-4 text-gray-400" />
                <p className="text-2xl font-bold mb-4">
                  We&apos;ve identified 2 licenses for your business in
                  Alabama...
                </p>
              </div>
              <div className="mb-4 flex flex-col items-center">
                <p className="text-gray-500 ">
                  As a business owner, you are responsible for making sure your
                  business has the proper federal, state and local licenses and
                  permits to operate legally.
                </p>
                <p className="text-gray-500 pt-3">
                  To make this easier, we&apos;ve assembled a Licensing
                  Specialist team to conduct the research to determine the
                  licenses, permits and tax registration applications required
                  for your business on a federal, state, county, and municipal
                  level.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {Object.entries(options).map(([key, option]) => (
                  <label
                    key={key}
                    className=" p-3 border cursor-pointer border-gray-200 rounded-md flex gap-2 items-center justify-start"
                  >
                    <input
                      type="radio"
                      hidden
                      className="hidden"
                      value={key}
                      checked={formData.licenseType === key}
                      {...register("licenseType", {
                        onChange: (e) => {
                          updateFormData({
                            licenseType: e.target.value as
                              | "recommended"
                              | "own",
                            getZipCode: "",
                            getCity: "",
                            getState: "",
                            getAddressLine2: "",
                            getStreetAddress: "",
                          });
                          setValue("getZipCode", "");
                          setValue("getCity", "");
                          setValue("getState", "");
                          setValue("getAddressLine2", "");
                          setValue("getStreetAddress", "");
                        },
                      })}
                    />
                    <div
                      className={`min-w-4 h-4 max-w-4 max-h-4 rounded-full ${
                        formData.licenseType === key
                          ? "border-primary border-4"
                          : "border-gray-200 border-2"
                      }`}
                    />
                    <div>
                      <span className="font-medium">{option.title}</span>
                    </div>
                  </label>
                ))}
              </div>
              {formData.licenseType === "recommended" && (
                <>
                  <div>
                    <h3 className="text-xl font-semibold my-4 ">
                      Please provide the address below where you would like us
                      to research required licenses and permits:
                    </h3>
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
                              required: formData.licenseType === "recommended",
                              onChange: (e) => {
                                updateFormData({
                                  getStreetAddress: e.target.value,
                                });
                              },
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                          {errors.getStreetAddress && (
                            <span className="text-red-500 text-sm">
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
                            value={formData.getAddressLine2}
                            {...register("getAddressLine2", {
                              required: formData.licenseType === "recommended",
                              onChange: (e) => {
                                updateFormData({
                                  getAddressLine2: e.target.value,
                                });
                              },
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                          {errors.getAddressLine2 && (
                            <span className="text-red-500 text-sm">
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
                          value={formData.getCity}
                          {...register("getCity", {
                            required: formData.licenseType === "recommended",
                            onChange: (e) =>
                              updateFormData({ getCity: e.target.value }),
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.getCity && (
                          <span className="text-red-500 text-sm">
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
                            value={formData.getState}
                            {...register("getState", {
                              required: formData.licenseType === "recommended",
                              onChange: (e) =>
                                updateFormData({ getState: e.target.value }),
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="">Select State</option>
                            {statesInUS.map((state) => (
                              <option key={state} value={state}>
                                {state}
                              </option>
                            ))}
                          </select>
                          {errors.getState && (
                            <span className="text-red-500 text-sm">
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
                            type="text"
                            value={formData.getZipCode}
                            {...register("getZipCode", {
                              required: formData.licenseType === "recommended",
                              onChange: (e) =>
                                updateFormData({ getZipCode: e.target.value }),
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                          {errors.getZipCode && (
                            <span className="text-red-500 text-sm">
                              This field is required
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              <div className="mt-4 flex items-center text-gray-500 border-2 bg-orange-100 rounded-md p-2">
                <LightBulbIcon className="min-w-10 max-w-10 h-10 mr-2 text-primary" />
                <p className="mb-4 font-medium">
                  Join the 18,000+ business owners who have gained peace of mind
                  with this package.
                </p>
              </div>
              <div className="mt-4 flex items-center text-gray-500 border-2 bg-blue-100 rounded-md p-2">
                <LightBulbIcon className="min-w-10 max-w-10 h-10 mr-2 text-primary" />
                <p className="mb-4 font-medium">
                  <span className="font-bold">
                    Is a Business Licenses and Permits something I should
                    consider?
                  </span>{" "}
                  <br />
                  Remember that operating your business without the required
                  licenses can expose you to risks and fines from state and
                  local governments. Don&apos;t let your new business stumble
                  without the proper licenses.
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-12">
              <Link
                href="/start-a-nonprofit/step-11"
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

export default StepTwelve;
