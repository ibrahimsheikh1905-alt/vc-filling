"use client";
import NavigationWrapper from "@/components/NavigationWrapper";
import OrderSummary from "@/components/OrderSummary";
import useLocalStorageForm from "@/hooks/useLocalStorage";
import getDate from "@/lib/futureDate";
import { register } from "module";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
interface FilingOption {
  duration: string;
  price: number;
  estimatedDate: string;
  isFast?: boolean;
}

type Inputs = {
  stateFillingTime: "fast" | "standard";
};

const StepThree = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: { stateFillingTime: "fast" } });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    updateFormData(data);
    router.push(pathname.replace(/step-\d+.*/, "step-4"));
  };
  // console.log(watch("nameChangeOption"));
  const [formData, updateFormData] = useLocalStorageForm({
    stateFillingTime: "fast",
  });

  const options: Record<"standard" | "fast", FilingOption> = {
    standard: {
      duration: "3 weeks filing time.",
      price: 0,
      estimatedDate: `${getDate(21)}`,
    },
    fast: {
      duration: "1 business day filing time.",
      price: 50,
      estimatedDate:
        //current date + 1 business day
        `${getDate(1)}`,
      isFast: true,
    },
  };

  useEffect(() => {
    setIsMounted(true);
    updateFormData({
      stateFromStepOne: JSON.parse(
        localStorage.getItem(pathname.replace(/step-\d+.*/, "step-1")) as string
      )?.stateName,
    });
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
            <div className="max-w-4xl px-16 py-12 bg-white rounded-3xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">State Filing Time</h2>
              <p className="mb-4">
                The typical state filing time for {formData.stateFromStepOne} is
                3 weeks. In a hurry? {formData.stateFromStepOne} offers an
                expedited filing option as well. Select the filing time that
                best meets your needs.
              </p>
              <div className="gap-4 flex md: flex-col">
                {Object.entries(options).map(([key, option]) => (
                  <label key={key}>
                    <div
                      className={`p-4 border rounded-lg cursor-pointer ${
                        formData.stateFillingTime === key
                          ? "border-primary"
                          : "border-gray-200"
                      }`}
                      // onClick={() =>
                      //   updateFormData({
                      //     stateFillingTime: key as "standard" | "fast",
                      //   })
                      // }
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-4 h-4 rounded-full border-2 ${
                              formData.stateFillingTime === key
                                ? "border-primary bg-primary"
                                : "border-gray-300"
                            }`}
                          >
                            <input
                              type="radio"
                              className="hidden"
                              value={key}
                              hidden
                              {...register("stateFillingTime", {
                                required: true,
                                onChange: (e) => {
                                  updateFormData({
                                    stateFillingTime: e.target.value,
                                  });
                                },
                              })}
                            />
                            {formData.stateFillingTime === key && (
                              <div className="w-2 h-2 rounded-full bg-white mx-auto mt-0.5" />
                            )}
                          </div>
                          <span className="font-medium">{option.duration}</span>
                        </div>
                        <span className="font-medium">${option.price}</span>
                      </div>
                      <div className="mt-2 text-sm text-gray-600">
                        <p>Estimated Formation Date:</p>
                        <p className={option.isFast ? "text-primary" : ""}>
                          {option.estimatedDate}
                        </p>
                      </div>
                      {option.isFast && (
                        <span className="inline-block mt-2 px-2 py-1 text-xs font-semibold text-primary border border-primary rounded">
                          FAST
                        </span>
                      )}
                    </div>
                  </label>
                ))}
              </div>
              <p className="mt-4 text-xs text-gray-500">
                *These dates are estimations based on current state turnaround
                times and are subject to change based on state processing.
              </p>
            </div>
            <div className="flex justify-between mt-12">
              <Link
                href="/form-s-corporation/step-2"
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

export default StepThree;
