"use client";
import React, { useEffect, useState } from "react";
import OrderSummary from "@/components/OrderSummary";
import Link from "next/link";
import Image from "next/image";
import useLocalStorageForm from "@/hooks/useLocalStorage";
import NavigationWrapper from "@/components/NavigationWrapper";

const StepTen: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  const [formData, updateFormData] = useLocalStorageForm({
    useBank: false,
  });

  useEffect(() => {
    setIsMounted(true);
    const setServiceType = () => {
      localStorage.setItem("serviceType", "form-llc");
    };
    setServiceType();
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <NavigationWrapper>
      <div className="container my-10">
        <div className="md:flex gap-10">
          <div className="max-w-4xl mx-auto">
            <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">
                Setting up Small Business Banking
              </h2>
              <p className="mt-4 text-green-600">
                No-Fee Business Banking for the Modern Business
              </p>
              <section className="py-8">
                <p className="text-lg">
                  When forming a business, separating your business and personal
                  accounts is a crucial step to protecting your assets.
                </p>
                <p className="mt-4">
                  Relay, is an online business banking, and money management
                  platform that helps small businesses take control of their
                  cash flow and get crystal clear on what they&apos;re earning,
                  spending, and saving.
                </p>
                <p className="mt-4 text-sm">
                  *With Relay, you can apply in a few minutes, once your state
                  formation and EIN are complete.
                </p>
              </section>
              <Image
                className="mx-auto"
                src={"/relay.png"}
                width={80}
                height={40}
                alt="Relay bank"
              />
              <section className="flex relative flex-col items-center py-8">
                <h2 className="text-sm absolute right-0 font-semibold">
                  Disclaimer
                </h2>
                <div className="flex flex-col items-start mt-4 space-y-4">
                  <p className="flex items-center">
                    <span className="text-green-500">✔</span> No account fees
                    or minimums
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-500">✔</span> Up to 20
                    individual checking accounts to help you control projects,
                    budgets, and taxes
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-500">✔</span> Have employees?
                    No problem, issue up to 50 Visa debit cards to keep your
                    business moving
                  </p>
                  <p className="flex items-center">
                    <span className="text-green-500">✔</span> FDIC Insured*
                  </p>
                </div>
              </section>

              <section className="flex flex-col py-8 bg-gray-100">
                <blockquote className="text-center italic">
                  &quot;Relay has been perfect for our small business. We are
                  able to have multiple accounts to separate funds into
                  different categories and they do not charge any fees per
                  account. We are able to get physical cards for each account
                  sent to us easily as well as generate virtual cards instantly
                  for any account.&quot;
                </blockquote>
                <div className="flex justify-end mt-4">
                  <p className="text-lg pr-5 font-semibold">- John</p>
                </div>
                <div className="flex justify-end pr-5">
                  <p className="ml-2 text-lg">4.5 out of 5</p>
                  <span className="ml-2 text-green-500">★</span>
                </div>
              </section>
            </div>
            <div className="flex justify-between mt-12">
              <Link
                href="/form-a-llc/step-9"
                className="px-8 py-2 bg-primary text-white border border-primary rounded-[30px] "
              >
                Back
              </Link>
              <Link
                onClick={() => updateFormData({ useBank: true })}
                href="/form-a-llc/step-11"
                className="px-8 py-2 bg-primary text-white border border-primary rounded-[30px] "
              >
                Yes, I am interested
              </Link>
            </div>
            <div className="flex justify-end cursor-pointer mr-3">
              <Link
                onClick={() => updateFormData({ useBank: false })}
                href="/form-a-llc/step-11"
              >
                <p>Ask me later</p>
              </Link>
            </div>
          </div>
          <div>
            <OrderSummary />
          </div>
        </div>
      </div>
    </NavigationWrapper>
  );
};

export default StepTen;
