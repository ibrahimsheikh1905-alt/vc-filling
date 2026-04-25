"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import PackageComparison from "@/components/PackageComparison";
import { statesInUS } from "@/data";
import useLocalStorageForm from "@/hooks/useLocalStorage";
import NavigationWrapper from "@/components/NavigationWrapper";
import { useRouter } from "next/navigation";
import { StateData } from "@/types";

interface SelectBoxProps {
  options: string[];
  value: string;
  label: string;
  number: number;
  disabled: boolean;
  name: string;
  onChange: (value: string) => void;
}

type Inputs = {
  entityType: string;
  stateName: string;
};

const OrderForm = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [states, setStates] = useState<string[]>([]);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = (await fetch("/api/states")) as Response;
        const data = await response.json();
        const statesData = data.map((state: StateData) => state.state_name);
        console.log(statesData);
        setStates(statesData);
      } catch (error) {
        console.error("Failed to fetch states:", error);
      }
    };
    const setServiceType = () => {
      localStorage.clear();
      localStorage.setItem("serviceType", "form-s-corporation");
    };
    setServiceType();

    fetchStates();
  }, []);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    router.push("/form-s-corporation/step-2");
  };
  // console.log(watch("nameChangeOption"));

  const [formData, updateFormData] = useLocalStorageForm({
    entityType: "",
    stateName: "",
    packageType: "",
    selectedFeatures: {
      Basic: [],
      Standard: [],
      Premium: [],
    },
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleEntityTypeChange = (value: string) => {
    updateFormData({ entityType: value, stateName: "", packageType: "" });
  };

  const handleStateNameChange = (value: string) => {
    updateFormData({ stateName: value, packageType: "" });
  };

  if (!isMounted) {
    return null;
  }
  return (
    <NavigationWrapper>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center"
      >
        <div className="max-w-4xl mx-auto p-6 my-10 bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl font-black text-center mb-2 leading-tight">
            START YOUR BUSINESS
            <br />
            WITH <span className="text-primary">CONFIDENCE</span>
          </h1>

          <p className="text-center text-lg mb-8">
            Join over 1,000,000 happy business owners. Get started by choosing
            <br />
            your entity type and state of formation.
          </p>

          <div className="md:flex justify-center gap-5 items-center">
            <SelectBox
              number={1}
              label="Entity Type"
              name="entityType"
              disabled={false}
              value={formData.entityType}
              onChange={handleEntityTypeChange}
              options={["LLC", "S-Corporation", "C-Corporation", "Nonprofit"]}
            />

            <SelectBox
              number={2}
              label="State"
              name="stateName"
              disabled={formData.entityType === ""}
              value={formData.stateName}
              onChange={handleStateNameChange}
              options={states}
            />
          </div>
        </div>
        {formData.stateName !== "" && formData.entityType !== "" && (
          <PackageComparison
            key={`${formData.stateName}-${formData.packageType}`}
            stateName={formData.stateName}
            entityType={formData.entityType}
          />
        )}
      </form>
    </NavigationWrapper>
  );
};

export default OrderForm;

const SelectBox = ({
  number,
  label,
  value,
  onChange,
  options,
  disabled,
  name,
}: SelectBoxProps) => {
  const { register } = useForm<Inputs>();
  return (
    <div className="relative flex max-sm:my-5">
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-primary rounded-l-lg flex items-center justify-center text-white font-bold">
        {number}
      </div>
      <select
        title="Select an option"
        value={value}
        {...register(name as "entityType" | "stateName", {
          required: true,
          disabled: disabled,
          onChange: (e) => {
            onChange(e.target.value);
          },
        })}
        className="py-3 md:w-72 w-80 pl-16 pr-10 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <option hidden value="">
          {label}
        </option>
        {options.map((option: string) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {value !== "" && (
        <label className="absolute left-16 top-0 text-xs text-gray-500 -translate-y-1/2 bg-white px-1">
          {label}
        </label>
      )}
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <ChevronDownIcon className="w-5 h-5 text-gray-400" />
      </div>
    </div>
  );
};
