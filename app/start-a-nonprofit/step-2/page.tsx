"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  InformationCircleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import OrderSummary from "@/components/OrderSummary";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import useLocalStorageForm from "@/hooks/useLocalStorage";
import NavigationWrapper from "@/components/NavigationWrapper";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Keyword } from "@/types";
import Loader from "@/components/Loader";

const animatedComponents = makeAnimated();

type Inputs = {
  companyName: string;
  designator: string;
  businessPurpose: string;
  industryKeyword: string;
};
const StepTwo = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [keywords, setKeywords] = useState([]);
  const [getLoading, setLoading] = useState(false);
  useLayoutEffect(() => {
    const fetchKeywords = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/industry-keywords");
        const data = await response.json();
        const keywordData = data.map((key: Keyword) => ({
          label: key.keyword,
          value: key.id,
        }));
        setKeywords(keywordData);
        // console.log(keywordData);
      } catch (error) {
        console.error("Failed to fetch industry keywords:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchKeywords();
  }, []);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setLoading(true);
    updateFormData(data);
    setLoading(false);
    router.push(pathname.replace(/step-\d+.*/, "step-3"));
  };

  const [formData, updateFormData] = useLocalStorageForm({
    companyName: "",
    designator: "",
    businessPurpose: "",
    industryKeyword: "",
  });

  useEffect(() => {
    setIsMounted(true);
    const setServiceType = () => {
      localStorage.setItem("serviceType", "form-nonprofit");
    };
    setServiceType();
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <NavigationWrapper>
      {getLoading && <Loader />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container my-10 ">
          <div className="md:flex gap-10 ">
            <div className="max-w-4xl mx-auto">
              <div className=" bg-white rounded-3xl mx-auto max-w-4xl shadow-lg px-16 py-12">
                <h2 className="text-2xl font-bold mb-6">Company Information</h2>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-grow">
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                        {
                          JSON.parse(
                            localStorage.getItem(
                              pathname.replace(/step-\d+.*/, "step-1")
                            ) as string
                          ).entityType
                        }{" "}
                        Name
                        <InformationCircleIcon className="w-4 h-4 text-blue-500 ml-1 cursor-help" />
                      </label>
                      <input
                        type="text"
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
                        <span className="text-red-500 text-xs mt-1">
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
                        <span className="text-red-500 text-xs mt-1">
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>
                  {formData.companyName !== "" &&
                    formData.designator !== "" && (
                      <div>
                        <p>Your official company name will display as</p>
                        <p className="text-3xl font-bold uppercase">{`${formData.companyName} ${formData.designator}`}</p>
                      </div>
                    )}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Business Purpose{" "}
                      <span className="text-gray-500 text-xs">
                        (You have {100 - formData.businessPurpose.length}{" "}
                        characters left)
                      </span>
                    </label>
                    <textarea
                      value={formData.businessPurpose}
                      {...register("businessPurpose", {
                        required: true,
                        onChange: (e) => {
                          updateFormData({ businessPurpose: e.target.value });
                        },
                      })}
                      placeholder="Please provide brief description of Business Purpose"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 h-24"
                    />
                    {errors.businessPurpose && (
                      <span className="text-red-500 text-xs mt-1">
                        This field is required
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                      Tell us what industry your business is in?
                      <InformationCircleIcon className="w-4 h-4 text-blue-500 ml-1 cursor-help" />
                    </label>
                    <p className="text-sm text-gray-500 mb-2">
                      i.e. hair salon, accountant, bar owner, social media...
                      Understanding what industry you&apos;re in can be helpful
                      when filing certain state forms, however it can also help
                      you when applying for financing, competing for government
                      contracts, and can potentially help in identifying tax
                      benefits.
                    </p>

                    <Controller
                      defaultValue={formData.industryKeyword}
                      name={"industryKeyword"}
                      control={control}
                      rules={{ required: true }}
                      render={({ field: { onChange, value } }) => (
                        <Select
                          components={animatedComponents}
                          options={keywords}
                          isMulti
                          value={keywords.filter((item: any) => {
                            return value.includes(item.value);
                          })}
                          onChange={(e) => {
                            onChange(e.map((item: any) => item.value));
                            updateFormData({
                              industryKeyword: e.map((item: any) => item.value),
                            });
                          }}
                          placeholder="Select Industry Keyword"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                      )}
                    />
                    {errors.industryKeyword && (
                      <span className="text-red-500 text-xs mt-1">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
              </div>
              {/* navigation */}
              <div className="flex justify-between mt-12">
                <Link
                  href="/start-a-nonprofit/step-1"
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
