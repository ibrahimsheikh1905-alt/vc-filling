"use client";
import OrderSummary from "@/components/OrderSummary";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CheckIcon, LightBulbIcon } from "@heroicons/react/24/solid";
import useLocalStorageForm from "@/hooks/useLocalStorage";
import NavigationWrapper from "@/components/NavigationWrapper";
import { usePathname, useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
interface AgentOption {
  title: string;
}

type Inputs = {
  taxConsultationOption: string;
};

const StepEleven = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: { taxConsultationOption: "recommended" },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    updateFormData(data);
    router.push(pathname.replace(/step-\d+.*/, "step-12"));
  };

  const options: Record<"recommended" | "own", AgentOption> = {
    recommended: {
      title:
        "Yes, I would like to receive the Business Tax Consultation (FREE).",
    },
    own: {
      title: "I'm not interested at this time.",
    },
  };
  const [formData, updateFormData] = useLocalStorageForm({
    taxConsultationOption: "recommended",
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
                Tax Strategy / Free Consultation
              </h2>

              <div className="mb-4 flex items-center">
                <p className="text-gray-500 ">
                  This consultation can help you identify important tax
                  deductions and provide insight into the IRS tax classification
                  of your new business. The offer is completely free of charge
                  and does not obligate you in any way.
                </p>
              </div>
              <p className="mb-4 font-medium">What you&apos;ll learn:</p>
              <div className="md:flex">
                <ul>
                  <li className="mb-2 flex items-center ">
                    <CheckIcon
                      height={20}
                      width={20}
                      className="mr-2 text-primary "
                    />{" "}
                    <p className="text-gray-500 ">How your LLC is taxed</p>
                  </li>
                  <li className="mb-2 flex items-center ">
                    <CheckIcon
                      height={20}
                      width={20}
                      className="mr-2 text-primary"
                    />{" "}
                    <p className="text-gray-500 ">
                      How to choose the proper IRS tax election
                    </p>
                  </li>
                  <li className="mb-2 flex items-center ">
                    <CheckIcon
                      height={20}
                      width={20}
                      className="mr-2 text-primary"
                    />{" "}
                    <p className="text-gray-500 ">
                      Commonly missed tax deductions
                    </p>
                  </li>
                </ul>
                <ul>
                  <li className="mb-2 flex items-center ">
                    <CheckIcon
                      height={20}
                      width={20}
                      className="mr-2 text-primary "
                    />{" "}
                    <p className="text-gray-500 ">
                      Business bookkeeping requirements
                    </p>
                  </li>
                  <li className="mb-2 flex items-center ">
                    <CheckIcon
                      height={20}
                      width={20}
                      className="mr-2 text-primary"
                    />{" "}
                    <p className="text-gray-500 ">
                      How to reduce the chance of an IRS audit
                    </p>
                  </li>
                  <li className="mb-2 flex items-center ">
                    <CheckIcon
                      height={20}
                      width={20}
                      className="mr-2 text-primary"
                    />{" "}
                    <p className="text-gray-500 ">
                      How to reduce self employment taxes
                    </p>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {Object.entries(options).map(([key, option]) => (
                  <label
                    key={key}
                    className=" p-3 border border-gray-200 rounded-md flex gap-2 items-center justify-start"
                  >
                    <input
                      type="radio"
                      hidden
                      value={key}
                      {...register("taxConsultationOption", {
                        required: true,
                        onChange: (e) => (
                          updateFormData({ taxConsultationOption: e.target.value })
                        ),
                      })}
                    />
                    <div
                      className={`min-w-4 h-4 max-w-4 max-h-4 rounded-full ${
                        formData.taxConsultationOption === key
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

              {formData.taxConsultationOption === "own" && (
                <div className="mt-4 flex items-center text-gray-500 border-2 bg-gray-100 rounded-md p-2">
                  <LightBulbIcon className="min-w-10 max-w-10 h-10 mr-2 text-primary" />
                  <p className="mb-4 font-medium">
                    Is a Tax Strategy / Free Consultation something I should
                    consider? <br />
                    Incorporating a new business can burden owners with
                    complicated tax filing. As a client you are entitled to
                    receive a free no obligation consultation with a certified
                    tax professional who can answer questions regarding the tax
                    obligations of your company.
                  </p>
                </div>
              )}
              {formData.taxConsultationOption === "recommended" && (
                <div className="mt-4 flex items-center text-gray-500 border-2 bg-gray-100 rounded-md p-2">
                  <LightBulbIcon className="min-w-10 max-w-10 h-10 mr-2 text-primary" />
                  <p className="mb-4 font-medium">
                    How soon can I schedule my Tax Consultation? <br /> You will
                    be prompted to schedule your appointment after completing
                    your order.
                  </p>
                </div>
              )}
              
            </div>
            <div className="flex justify-between mt-12">
              <Link
                href="/start-a-nonprofit/step-10"
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

export default StepEleven;
