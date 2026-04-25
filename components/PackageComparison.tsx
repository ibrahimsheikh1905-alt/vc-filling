import React, { useEffect, useState } from "react";
import { InformationCircleIcon, CheckIcon } from "@heroicons/react/24/solid";
import OrderSummary from "./OrderSummary";
import useLocalStorageForm from "@/hooks/useLocalStorage";

interface FeatureRowProps {
  feature: string;
  subtext?: string;
  basicIncluded?: boolean;
  standardIncluded?: boolean;
  premiumIncluded: boolean;
  basicPrice?: string;
  standardPrice?: string;
  hasInfo?: boolean;
  onSelectFeature: (feature: string, packageType: string) => void;
  selectedFeatures: Record<string, string[]>;
  selectedPackage: string;
  formData?: any;
}

interface FeatureCellProps {
  included: boolean;
  price?: string;
  packageType: string;
  feature: string;
  onSelect: () => void;
  isSelected: boolean;
  isDisabled: boolean;
}

interface PackageColumnProps {
  title: string;
  price: string;
  stateFee: string;
  isRecommended: boolean;
  isSelected: boolean;
  onClick: () => void;
}

interface PackageComparisonProps {
  stateName: string;
  entityType: string;
}

const PackageComparison = ({
  stateName,
  entityType,
}: PackageComparisonProps) => {
  const [formData, updateFormData] = useLocalStorageForm({
    packageType: "Standard",
  });
  const [stateFee, setStateFee] = useState<string>("");
  const [prices, setPrices] = useState<Record<string, string>>({
    Basic: "$0",
    Standard: "$199",
    Premium: "$299",
  });
  useEffect(() => {
    // Fetch state fee based on selected state
    const fetchStateFee = async () => {
      try {
        const response = await fetch(`/api/states?stateName=${stateName}`);
        const data = await response.json();
        entityType === "LLC"
          ? setStateFee(`+ $${data.llc_price} state fee`)
          : entityType === "C-Corporation"
            ? setStateFee(`+ $${data.c_corp_price} state fee`)
            : entityType === "S-Corporation"
              ? setStateFee(`+ $${data.s_corp_price} state fee`)
              : setStateFee(`+ $${data.nonprofit_price} state fee`);
      } catch (error) {
        console.error("Failed to fetch state fee:", error);
      }
    };

    // Fetch package prices
    const fetchPackagePrices = async () => {
      try {
        const response = await fetch(`/api/package-prices`);
        const data = await response.json();

        setPrices({
          Basic: `$${data[0].price}`,
          Standard: `$${data[1].price}`,
          Premium: `$${data[2].price}`,
        });
      } catch (error) {
        console.error("Failed to fetch package prices:", error);
      }
    };

    fetchStateFee();
    fetchPackagePrices();
  }, [stateName]);

  const handleSelectFeature = (feature: string, packageType: string) => {
    const updatedFeatures = {
      ...formData.selectedFeatures,
      [packageType]: formData.selectedFeatures[packageType].includes(feature)
        ? formData.selectedFeatures[packageType].filter(
            (f: string) => f !== feature
          )
        : [...formData.selectedFeatures[packageType], feature],
    };

    updateFormData({
      selectedFeatures: updatedFeatures,
    });
  };

  useEffect(() => {
    if (formData.packageType === "") {
      updateFormData({ packageType: "Standard" });
    }
  }, [stateName, entityType]);

  const handleSelectPackage = (packageType: string) => {
    updateFormData({
      packageType,
      stateName,
      selectedFeatures: {
        Basic: [],
        Standard: [],
        Premium: [],
      },
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 flex my-7 gap-5">
      <div className="w-full">
        <div className="flex">
          <div className="w-1/3">
            <h2 className="text-2xl font-bold mb-4">
              Business Formation Packages
            </h2>
          </div>

          <div className="w-2/3 flex space-x-4">
            <PackageColumn
              title="Basic"
              price={prices.Basic}
              stateFee={stateFee}
              isRecommended={false}
              isSelected={formData.packageType === "Basic"}
              onClick={() => handleSelectPackage("Basic")}
            />
            <PackageColumn
              title="Standard"
              price={prices.Standard}
              stateFee={stateFee}
              isRecommended={true}
              isSelected={formData.packageType === "Standard"}
              onClick={() => handleSelectPackage("Standard")}
            />
            <PackageColumn
              title="Premium"
              price={prices.Premium}
              stateFee={stateFee}
              isRecommended={false}
              isSelected={formData.packageType === "Premium"}
              onClick={() => handleSelectPackage("Premium")}
            />
          </div>
        </div>
        <div className="mt-6">
          <FeatureRow
            feature="Preparing & Filing the Articles of Organization"
            basicIncluded={true}
            standardIncluded={true}
            premiumIncluded={true}
            hasInfo={true}
            onSelectFeature={handleSelectFeature}
            selectedFeatures={formData.selectedFeatures}
            selectedPackage={formData.packageType}
            formData={formData}
          />
          <FeatureRow
            feature="FREE 1st Year Registered Agent Service!"
            basicIncluded={true}
            standardIncluded={true}
            premiumIncluded={true}
            hasInfo={true}
            onSelectFeature={handleSelectFeature}
            selectedFeatures={formData.selectedFeatures}
            selectedPackage={formData.packageType}
            formData={formData}
          />
          <FeatureRow
            feature="Expedited Filing"
            subtext="1 day filing time (instead of 3 Weeks)"
            basicPrice="+ $50"
            standardPrice="+ $50"
            premiumIncluded={true}
            onSelectFeature={handleSelectFeature}
            selectedFeatures={formData.selectedFeatures}
            selectedPackage={formData.packageType}
            formData={formData}
          />
          <FeatureRow
            feature="EIN Business Tax Number"
            basicPrice="+ $70"
            standardIncluded={true}
            premiumIncluded={true}
            hasInfo={true}
            onSelectFeature={handleSelectFeature}
            selectedFeatures={formData.selectedFeatures}
            selectedPackage={formData.packageType}
            formData={formData}
          />
          <FeatureRow
            feature="Operating Agreement"
            basicPrice="+ $99"
            standardIncluded={true}
            premiumIncluded={true}
            hasInfo={true}
            onSelectFeature={handleSelectFeature}
            selectedFeatures={formData.selectedFeatures}
            selectedPackage={formData.packageType}
            formData={formData}
          />
          <FeatureRow
            feature="Domain Name + Business Email"
            basicIncluded={false}
            standardIncluded={false}
            premiumIncluded={true}
            hasInfo={true}
            onSelectFeature={handleSelectFeature}
            selectedFeatures={formData.selectedFeatures}
            selectedPackage={formData.packageType}
            formData={formData}
          />
          <FeatureRow
            feature="Business Contract Templates"
            basicPrice="+ $150"
            standardPrice="+ $150"
            premiumIncluded={true}
            hasInfo={true}
            onSelectFeature={handleSelectFeature}
            selectedFeatures={formData.selectedFeatures}
            selectedPackage={formData.packageType}
            formData={formData}
          />
          <FeatureRow
            feature="Lifetime Compliance Alerts"
            basicIncluded={true}
            standardIncluded={true}
            premiumIncluded={true}
            hasInfo={true}
            onSelectFeature={handleSelectFeature}
            selectedFeatures={formData.selectedFeatures}
            selectedPackage={formData.packageType}
            formData={formData}
          />

          <FeatureRow
            feature="Unlimited Phone & Email Support"
            basicIncluded={true}
            standardIncluded={true}
            premiumIncluded={true}
            hasInfo={true}
            onSelectFeature={handleSelectFeature}
            selectedFeatures={formData.selectedFeatures}
            selectedPackage={formData.packageType}
            formData={formData}
          />
          <FeatureRow
            feature="Online Access Dashboard"
            basicIncluded={true}
            standardIncluded={true}
            premiumIncluded={true}
            hasInfo={true}
            onSelectFeature={handleSelectFeature}
            selectedFeatures={formData.selectedFeatures}
            selectedPackage={formData.packageType}
            formData={formData}
          />
          <FeatureRow
            feature="Business Banking Account Offer"
            basicIncluded={true}
            standardIncluded={true}
            premiumIncluded={true}
            hasInfo={true}
            onSelectFeature={handleSelectFeature}
            selectedFeatures={formData.selectedFeatures}
            selectedPackage={formData.packageType}
            formData={formData}
          />
          <FeatureRow
            feature="Business Tax Consultation"
            basicIncluded={true}
            standardIncluded={true}
            premiumIncluded={true}
            hasInfo={true}
            onSelectFeature={handleSelectFeature}
            selectedFeatures={formData.selectedFeatures}
            selectedPackage={formData.packageType}
            formData={formData}
          />
          <FeatureRow
            feature="IRS Form 2553"
            basicIncluded={true}
            standardIncluded={true}
            premiumIncluded={true}
            hasInfo={true}
            onSelectFeature={handleSelectFeature}
            selectedFeatures={formData.selectedFeatures}
            selectedPackage={formData.packageType}
            formData={formData}
          />
        </div>
      </div>
      <OrderSummary />
    </div>
  );
};

const PackageColumn = ({
  title,
  price,
  stateFee,
  isRecommended,
  isSelected,
  onClick,
}: PackageColumnProps) => {
  return (
    <label
      className={`flex-1 text-center cursor-pointer transition-all duration-300 ${
        isSelected ? "ring-2 ring-primary rounded ring-offset-2" : ""
      }`}
      // onClick={onClick}
    >
      <input
        value={title}
        hidden
        className="hidden"
        type="radio"
        name="packageType"
        onClick={onClick}
      />
      <div
        className={`border rounded-lg p-4 h-full ${
          isSelected ? "bg-primary bg-opacity-10" : ""
        }`}
      >
        <h3 className="font-semibold">{title}</h3>
        <p className="text-3xl font-bold my-2">{price}</p>
        <p className="text-sm text-gray-500">{stateFee}</p>
      </div>
      {isRecommended && (
        <div className="bg-primary text-white py-1 px-2 rounded-b-lg inline-block text-sm font-semibold">
          Recommended
        </div>
      )}
    </label>
  );
};

const FeatureRow = ({
  feature,
  subtext,
  basicIncluded,
  standardIncluded,
  premiumIncluded,
  basicPrice,
  standardPrice,
  hasInfo,
  onSelectFeature,
  selectedFeatures,
  selectedPackage,
  formData,
}: FeatureRowProps) => (
  <div className="flex items-center py-4 border-b border-gray-200">
    <div className="w-1/3">
      <div className="flex items-center">
        {feature}{" "}
        {hasInfo && (
          <InformationCircleIcon className="w-4 h-4 text-gray-400 ml-1" />
        )}
      </div>
      {subtext && <p className="text-sm text-gray-500 mt-1">{subtext}</p>}
    </div>
    <div className="w-2/3 flex space-x-4">
      <FeatureCell
        included={basicIncluded!}
        price={basicPrice}
        packageType="Basic"
        feature={feature}
        onSelect={() => onSelectFeature(feature, "Basic")}
        isSelected={formData.selectedFeatures.Basic.includes(feature)}
        isDisabled={formData.packageType !== "Basic"}
      />
      <FeatureCell
        included={standardIncluded!}
        price={standardPrice}
        packageType="Standard"
        feature={feature}
        onSelect={() => onSelectFeature(feature, "Standard")}
        isSelected={formData.selectedFeatures.Standard.includes(feature)}
        isDisabled={formData.packageType !== "Standard"}
      />
      <FeatureCell
        included={premiumIncluded}
        packageType="Premium"
        feature={feature}
        onSelect={() => onSelectFeature(feature, "Premium")}
        isSelected={formData.selectedFeatures.Premium.includes(feature)}
        isDisabled={formData.packageType !== "Premium"}
      />
    </div>
  </div>
);

const FeatureCell = ({
  included,
  price,
  packageType,
  feature,
  onSelect,
  isSelected,
  isDisabled,
}: FeatureCellProps) => (
  <div
    className={`flex-1 text-center rounded-full ${
      price && !isDisabled ? "cursor-pointer" : ""
    } ${isSelected ? "bg-primary " : ""} ${isDisabled ? "opacity-50" : ""}`}
    onClick={() => price && !isDisabled && onSelect()}
  >
    {included ? (
      <CheckIcon className="mx-auto text-primary h-8 w-8" />
    ) : price ? (
      <span
        className={`text-sm font-semibold ${isSelected ? "text-white" : ""}`}
      >
        {price}
      </span>
    ) : (
      <span className="text-gray-300">—</span>
    )}
  </div>
);

export default PackageComparison;
