"use client";
import { statesInUS } from "@/data";
import useLocalStorageForm from "@/hooks/useLocalStorage";
import {
  ChevronDownIcon,
  InformationCircleIcon,
  LightBulbIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";

interface CompanyInformationSectionProps {
  hasFakeName?: boolean;
  hasBusinessPurpose?: boolean;
}

const CompanyInformationSection: React.FC<CompanyInformationSectionProps> = (
  {hasFakeName=false ,
  hasBusinessPurpose=false,}
) => {
  const [isMounted, setIsMounted] = useState(false);
  const [formData, updateFormData] = useLocalStorageForm({
    companyName: "",
    designator: "",
    stateOfService: "",
    entityType: "",
    stateOfFormation: "",
    fakeCompanyName: "",
  });
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className=" bg-white rounded-3xl mx-auto max-w-4xl shadow-lg px-16 py-12 my-8">
      <h2 className="text-2xl font-bold mb-6">Company Information</h2>
      <div className="my-6 bg-gray-100 p-6 rounded-lg flex items-center">
        <LightBulbIcon className="h-8 w-8 mr-8 text-primary" />
        <p>
          The state of formation is where the company was formed, while the
          state of service is where you are seeking to obtain authority to
          transact business.
        </p>
      </div>
      <div>
        <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
          Entity Type
        </label>
        <div className="relative">
          <select
            title="Select an option"
            value={formData.entityType}
            name="entityType"
            disabled={false}
            onChange={(e) => updateFormData({ entityType: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg appearance-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option hidden>Entity Type</option>
            <option value="LLC">LLC</option>
            <option value="S-Corporation">S-Corporation</option>
            <option value="C-Corporation">C-Corporation</option>
            <option value="Nonprofit">Nonprofit</option>
          </select>
          <ChevronDownIcon className="absolute h-5 w-5 right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      <div className="flex gap-4 mt-6">
        <div className="flex-grow">
          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
            State of Formation
            <InformationCircleIcon className="w-4 h-4 text-blue-500 ml-1 cursor-help" />
          </label>
          <div className="relative">
            <select
              value={formData.stateOfFormation}
              onChange={(e) =>
                updateFormData({ stateOfFormation: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg appearance-none focus:ring-blue-500 focus:border-blue-500"
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
            <ChevronDownIcon className="absolute h-5 w-5 right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="w-1/2">
          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
            State of Service
            <InformationCircleIcon className="w-4 h-4 text-blue-500 ml-1 cursor-help" />
          </label>
          <div className="relative">
            <select
              value={formData.stateOfService}
              onChange={(e) =>
                updateFormData({ stateOfService: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg appearance-none focus:ring-blue-500 focus:border-blue-500"
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
            <ChevronDownIcon className="absolute h-5 w-5 right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-6">
        <div className="flex-grow">
          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
            Company Name
            <InformationCircleIcon className="w-4 h-4 text-blue-500 ml-1 cursor-help" />
          </label>
          <input
            type="text"
            value={formData.companyName}
            onChange={(e) => updateFormData({ companyName: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="w-1/3">
          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
            Designator
            <InformationCircleIcon className="w-4 h-4 text-blue-500 ml-1 cursor-help" />
          </label>
          <div className="relative">
            <select
              value={formData.designator}
              onChange={(e) => updateFormData({ designator: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg appearance-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option hidden value="">
                Select Designator
              </option>
              <option value="LLC">LLC</option>
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
        </div>
      </div>
      {formData.companyName !== "" &&
        formData.designator !== "" &&
        formData.companyName !== undefined &&
        formData.designator !== undefined && (
          <div>
            <p>Your official company name will display as</p>
            <p className="text-3xl font-bold">{`${formData.companyName} ${formData.designator}`}</p>
          </div>
        )}
      {hasFakeName && (
        <div className="mt-6">
          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
            Please enter the name exactly as you would like it filed
          </label>
          <input
            type="text"
            value={formData.fakeCompanyName}
            onChange={(e) =>
              updateFormData({ fakeCompanyName: e.target.value })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      )}
      {hasBusinessPurpose && (
        <div className="mt-6">
          <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
            Business Purpose
          </label>
          <input
            type="text"
            value={formData.fakeCompanyName}
            height={"100px"}
            onChange={(e) =>
              updateFormData({ fakeCompanyName: e.target.value })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      )}
    </div>
  );
};

export default CompanyInformationSection;
