"use client";
import React, { useEffect, useState } from "react";
import {
  DocumentIcon as FileText,
  GlobeAmericasIcon as Globe,
} from "@heroicons/react/24/solid";
import OrderSummary from "@/components/OrderSummary";
import Link from "next/link";
import useLocalStorageForm from "@/hooks/useLocalStorage";
import NavigationWrapper from "@/components/NavigationWrapper";

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  price: number;
  description: string;
  details: string;
  whyYouNeedIt: string;
}

const StepSix: React.FC = () => {
  const [formData, updateFormData] = useLocalStorageForm({
    premiumServicePackage: false,
  });
  const [isMounted, setIsMounted] = useState(false);
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
  const services: ServiceItem[] = [
    {
      icon: <FileText className="w-6 h-6 text-gray-600" />,
      title: "Business Contract Templates",
      price: 150,
      description:
        "Your search for the right legal template stops here. Get access to 25+ high-quality legal documents written by a business attorney to help keep your business contractually protected.",
      details: "",
      whyYouNeedIt:
        "It's important to keep your business contractually protected, but it's hard to know where to go to get an agreement or legal form and paying an attorney to draft them can be expensive.",
    },
    {
      icon: <Globe className="w-6 h-6 text-gray-600" />,
      title: "Domain Name + Business Email Address",
      price: 40,
      description:
        "Increase your credibility with a professional email address. 65% of consumers believe a company branded email is more credible than a business using a free email account.",
      details:
        "Get 1 full year of FREE domain name & email service. At the end of the year, you will have the option to renew or cancel service.",
      whyYouNeedIt:
        "Every website needs its own domain, so this will save you a necessary expense and help your business appear more official by using a matching domain email versus an email address from an automated service like Gmail or Hotmail.",
    },
  ];

  return (
    <NavigationWrapper>
      <div className="container my-10">
        <div className="md:flex gap-10">
          <div className="max-w-4xl mx-auto">
            <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-2">
                Premium Service Package
              </h2>
              <p className="text-lg mb-6">
                Upgrade for only <span className="font-semibold">$99</span> to
                receive these 2 premium services —{" "}
                <span className="font-semibold">up to $190 value!</span>
              </p>
              <h3 className="text-xl font-semibold mb-4">
                Premium Service Package
              </h3>
              <div className="space-y-6">
                {services.map((service, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0 mt-1">{service.icon}</div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold">
                          {service.title}
                        </h4>
                        <span className="text-lg font-semibold">
                          ${service.price}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">
                        {service.description}
                      </p>
                      {service.details && (
                        <p className="text-gray-600 mb-2">{service.details}</p>
                      )}
                      <div className="mt-2">
                        <h5 className="font-semibold mb-1">Why You Need It:</h5>
                        <p className="text-gray-600">{service.whyYouNeedIt}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between mt-12">
              <Link
                href="/form-s-corporation/step-5"
                className="px-8 py-2 bg-primary text-white border border-primary rounded-[30px] "
              >
                Back
              </Link>
              <Link
                href="/form-s-corporation/step-7"
                onClick={() => updateFormData({ premiumServicePackage: true })}
                className="px-8 py-2 bg-primary text-white border border-primary rounded-[30px] "
              >
                GET UPGRADE & BONUS
              </Link>
            </div>
            <div className="flex justify-end cursor-pointer">
              <Link href="/form-s-corporation/step-7">
                <p
                  onClick={() =>
                    updateFormData({ premiumServicePackage: false })
                  }
                >
                  No thanks, I will pass on this opportunity.
                </p>
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

export default StepSix;
