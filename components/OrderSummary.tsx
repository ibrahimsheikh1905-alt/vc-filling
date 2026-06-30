"use client";
import { totalPriceAtom } from "@/app/atoms";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import { useAtom } from "jotai";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getStateFee } from "@/data/stateFeeData";

const OrderSummary = ({ referer }: { referer?: string }) => {
  const pathname = usePathname();
  const orderSummaryReferer = referer?.replace(/\/step-.*$/, "") || "";
  const [totalPrice, setTotalPrice] = useAtom<number>(totalPriceAtom);
  const [stateFee, setStateFee] = useState<number>(0);
  const [packagePrice, setPackagePrice] = useState<number>(0);

const currentFullPath = typeof window !== 'undefined' ? window.location.pathname : "";
  const currentBasePath = currentFullPath.split("/")[1] || "";

  // Get serviceType from localStorage to determine which path to use
  // For foreign-qualification, also try getting from pathname if localStorage doesn't have it
  const getServiceType = () => {
    if (typeof window === 'undefined') return null;
    let type = localStorage.getItem("serviceType");
    // Fallback: try to get from current pathname
    if (!type && currentFullPath.includes("foreign-qualification")) {
      type = "foreign-qualification";
    } else if (!type && currentFullPath.includes("registered-agent")) {
      type = "registered-agent";
    }
    return type;
  };
  const serviceType = getServiceType();
  
  // Map service type to base path
  const getServiceBasePath = () => {
    const pathMap: Record<string, string> = {
      'form-llc': '/form-a-llc',
      'form-c-corporation': '/form-c-corporation',
      'form-s-corporation': '/form-s-corporation',
      'amendment': '/amendment',
      'annual-report': '/annual-report',
      'business-license': '/business-license',
      'cert-good-standing': '/cert-good-standing',
      'change-agent': '/change-agent',
      'dissolution': '/dissolution',
      'ein-form': '/ein-form',
      'fake-name': '/fictitious-business-name',
      'foreign-qualification': '/foreign-qualification',
      'kit-info': '/kit-info',
      'registered-agent': '/registered-agent',
      'reinstatement': '/reinstatement',
      'trademark': '/trademark',
      'virtual-address': '/virtual-address',
    };
    return serviceType ? pathMap[serviceType] || orderSummaryReferer : orderSummaryReferer;
  };
  
  const baseFormPath = getServiceBasePath();
  
// Try multiple paths to find form data
  const tryGetFormData = (key: string) => {
    if (typeof window === 'undefined') return null;
    
    // For registered-agent and foreign-qualification, we need special handling
    let pathsToTry: string[];
    
    if (serviceType === "registered-agent") {
      pathsToTry = [
        "/registered-agent/step-1",
        baseFormPath + key,
        orderSummaryReferer + key,
        pathname.replace(/step-\d+.*/, "step-1") + key,
        "/" + currentBasePath + key,
      ];
    } else if (serviceType === "foreign-qualification") {
      // Explicitly try foreign-qualification paths
      pathsToTry = [
        "/foreign-qualification/step-1",
        "/foreign-qualification" + key,
        baseFormPath + key,
        orderSummaryReferer + key,
        pathname.replace(/step-\d+.*/, "step-1") + key,
        "/" + currentBasePath + key,
      ];
    } else {
      pathsToTry = [
        baseFormPath + key,
        orderSummaryReferer + key,
        pathname.replace(/step-\d+.*/, "step-1") + key,
        "/" + currentBasePath + key,
      ];
    }
    
    // Debug: Log the paths being tried (can be removed later)
    // console.log('Trying paths for', serviceType, pathsToTry);
    
    for (const path of pathsToTry) {
      try {
        const data = localStorage.getItem(path);
        if (data) {
          // console.log('Found data at path:', path);
          return JSON.parse(data);
        }
      } catch (e) {
        // Continue to next path
      }
    }
    return null;
  };
  
  // Get data from localStorage using tryGetFormData
  const step1Data = tryGetFormData("/step-1");
  const step3Data = tryGetFormData("/step-3");
  const step5Data = tryGetFormData("/step-5");
  const step6Data = tryGetFormData("/step-6");
  const step12Data = tryGetFormData("/step-12");
  
// Extract values from the data
  const packageType = step1Data?.packageType;
  // For registered-agent, use stateOfService field; for others, use stateName or stateOfFormation
  // For foreign-qualification, use stateOfService as it's the "State of Service" (the state where you want to do business)
  let stateName = step1Data?.stateName || step1Data?.stateOfFormation || step1Data?.stateOfService;
  // For foreign-qualification, prioritize stateOfService (the state seeking authority)
  if (serviceType === "foreign-qualification") {
    stateName = step1Data?.stateOfService || step1Data?.stateOfFormation || step1Data?.stateName;
  }
  // Get entityType and validate it - don't show state names as entity type
  const rawEntityType = step1Data?.entityType;
  // Valid entity types for foreign-qualification
  const validEntityTypes = ["LLC", "S-Corporation", "C-Corporation", "Nonprofit"];
  // Only show entity type if it's a valid one, otherwise don't show anything
  const entityType = validEntityTypes.includes(rawEntityType) ? rawEntityType : "";
  // Get company info
  const companyName = step1Data?.companyName;
  const designator = step1Data?.designator;
  
// Get filing time from step-1 OR step-3 data (Amendment forms only have step-1)
  const stateFillingTime = step1Data?.stateFillingTime || step3Data?.stateFillingTime;
  
  // Get address option from step-5 data
  const addressOption = step5Data?.addressOption;
  
  // Get premium service package from step-6 data  
  const premiumServicePackage = step6Data?.premiumServicePackage;
  
  // Get license type from step-12 data
  const licenseType = step12Data?.licenseType;

useEffect(() => {
    // Set state fee using hardcoded values (API doesn't have states table)
    const setStateFeeFromFallback = () => {
      if (!stateName) {
        return;
      }
      
      // Comprehensive fallback state fees for all US states
      const fallbackFees: Record<string, number> = {
        "California": 249,
        "Texas": 199,
        "Florida": 199,
        "New York": 200,
        "Delaware": 179,
        "Nevada": 175,
        "Arizona": 149,
        "Colorado": 149,
        "Georgia": 199,
        "Washington": 180,
        "Illinois": 199,
        "Ohio": 199,
        "North Carolina": 199,
        "Michigan": 199,
        "New Jersey": 199,
        "Virginia": 199,
        "Massachusetts": 199,
        "Tennessee": 199,
        "Indiana": 199,
        "Missouri": 199,
        "Maryland": 199,
        "Wisconsin": 199,
        "Minnesota": 199,
        "South Carolina": 199,
        "Alabama": 199,
        "Louisiana": 199,
        "Kentucky": 199,
        "Oregon": 199,
        "Oklahoma": 199,
        "Connecticut": 199,
        "Utah": 199,
        "Iowa": 199,
        "Arkansas": 199,
        "Mississippi": 199,
        "Kansas": 199,
        "New Mexico": 199,
        "Nebraska": 199,
        "West Virginia": 199,
        "Idaho": 199,
        "Hawaii": 199,
        "Maine": 199,
        "Montana": 199,
        "Rhode Island": 199,
        "South Dakota": 199,
        "North Dakota": 199,
        "Alaska": 199,
        "Vermont": 199,
        "Wyoming": 199,
        "District of Columbia": 199,
      };
      
      const fee = fallbackFees[stateName] || 149;
      setStateFee(fee);
    };

    setStateFeeFromFallback();
  }, [stateName]);

useEffect(() => {
    // Set package prices using hardcoded fallback values
    const setPackagePricesFromFallback = () => {
      // Service types have fixed prices
      if (serviceType === "amendment") {
        setPackagePrice(99);
      } else if (serviceType === "registered-agent") {
        setPackagePrice(149);
      } else if (serviceType === "virtual-address") {
        setPackagePrice(99);
      } else if (serviceType === "cert-good-standing") {
        setPackagePrice(50);
      } else if (serviceType === "fake-name") {
        setPackagePrice(50);
      } else if (serviceType === "foreign-qualification") {
        setPackagePrice(149);
      } else if (serviceType === "change-agent") {
        setPackagePrice(99);
      } else if (serviceType === "business-license") {
        setPackagePrice(199);
      } else if (serviceType === "annual-report") {
        setPackagePrice(50);
      } else if (serviceType === "trademark") {
        setPackagePrice(149);
      } else if (serviceType === "kit-info") {
        setPackagePrice(99);
      } else if (serviceType === "dissolution") {
        setPackagePrice(99);
      } else if (serviceType === "ein-form") {
        setPackagePrice(79);
      } else if (serviceType === "reinstatement") {
        setPackagePrice(99);
      } else {
        // LLC package types
        switch (packageType) {
          case "Basic":
            setPackagePrice(0);
            break;
          case "Standard":
            setPackagePrice(199);
            break;
          case "Premium":
            setPackagePrice(299);
            break;
          default:
            setPackagePrice(0);
        }
      }
    };

    setPackagePricesFromFallback();
  }, [serviceType, packageType]);

  // Calculate prices
  const isFastFillingTimePrice = stateFillingTime === "fast" ? 50 : 0;
  const addressOptionPrice = addressOption === "recommended" ? 29 : 0;
  const premiumServicePackagePrice = premiumServicePackage ? 99 : 0;
  const licenseTypePrice = licenseType === "recommended" ? 99 : 0;

  const safeAdd = (total: number, price: number | undefined): number => {
    return total + (price || 0);
  };

  const showButtonPaths = [
    "/form-a-llc/step-1",
    "/form-c-corporation/step-1",
    "/form-s-corporation/step-1",
    "/start-a-nonprofit/step-1",
  ];

// Update total price when any price changes
  useEffect(() => {
    let newTotalPrice = 0;
    
    // For registered-agent, add BOTH packagePrice AND state fee
    // For other services, use regular stateFee + packagePrice
    if (serviceType === "registered-agent" && stateName) {
      // Show both service fee and state fee separately
      newTotalPrice = safeAdd(newTotalPrice, Number(packagePrice));
      newTotalPrice = safeAdd(newTotalPrice, getStateFee(stateName));
    } else if (serviceType !== "registered-agent") {
      newTotalPrice = safeAdd(newTotalPrice, Number(stateFee));
      newTotalPrice = safeAdd(newTotalPrice, Number(packagePrice));
    }
    
    newTotalPrice = safeAdd(newTotalPrice, isFastFillingTimePrice);
    newTotalPrice = safeAdd(newTotalPrice, addressOptionPrice);
    newTotalPrice = safeAdd(newTotalPrice, premiumServicePackagePrice);
    newTotalPrice = safeAdd(newTotalPrice, licenseTypePrice);

    setTotalPrice(newTotalPrice);
  }, [
    stateFee,
    packagePrice,
    isFastFillingTimePrice,
    addressOptionPrice,
    premiumServicePackagePrice,
    licenseTypePrice,
    serviceType,
  ]);

  // Map service types to display names
  const getServiceName = () => {
    switch (serviceType) {
      case "amendment":
        return "Amendment Filing";
      case "registered-agent":
        return "Registered Agent";
      case "virtual-address":
        return "Virtual Address";
      case "cert-good-standing":
        return "Certificate of Good Standing";
      case "fake-name":
        return "Fictitious Business Name";
      case "foreign-qualification":
        return "Foreign Qualification";
      case "change-agent":
        return "Change Registered Agent";
      case "business-license":
        return "Business License";
      case "annual-report":
        return "Annual Report";
      case "trademark":
        return "Trademark";
      case "kit-info":
        return "Business Kit";
      case "dissolution":
        return "Dissolution";
      default:
        return serviceType || "Service";
    }
  };

  return (
    <div className="mt-8 bg-gray-50 p-6 rounded-lg sticky top-0 max-w-[400px]">
      <h3 className="text-xl font-bold mb-4">Order Summary</h3>
<div className="space-y-2 mb-4">
        {/* Show company info - Entity Type and Company Name */}
        {entityType && (
          <div className="flex justify-between">
            <span>Entity Type:</span>
            <span>{entityType}</span>
          </div>
        )}
        {companyName && (
          <div className="flex justify-between">
            <span>Company Name:</span>
            <span>{companyName} {designator}</span>
          </div>
        )}
        {/* Show either package or service depending on what's selected */}
        {packageType && packageType !== "" ? (
          <div className="flex justify-between">
            <span>{packageType} Package:</span>
            <span>${packagePrice}</span>
          </div>
        ) : serviceType === "registered-agent" && stateName ? (
          // For registered-agent, show both service fee and state fee separately
          <div className="flex justify-between">
            <span>Registration Fee:</span>
            <span>${packagePrice}</span>
          </div>
        ) : serviceType ? (
          <div className="flex justify-between">
            <span>{getServiceName()}:</span>
            <span>${packagePrice}</span>
          </div>
        ) : (
          <div className="flex justify-evenly">
            <ArrowLeftCircleIcon className="w-6 h-6 text-gray-500" />
            <span>Please Select a package type</span>
          </div>
        )}
{/* Show state fee - for registered-agent show as total (includes service), for others show separately */}
        <div className="flex justify-between">
          <span>{stateName ? stateName + ' State Fee' : 'State Fee'}:</span>
          <span>${serviceType === "registered-agent" && stateName ? getStateFee(stateName) : (stateFee || 0)}</span>
        </div>
        {serviceType === "registered-agent" && (
          <div className="text-xs text-gray-500 text-center">
            (Includes registered agent service fee)
          </div>
        )}
        {stateFillingTime === "fast" && (
          <div className="flex justify-between">
            <span>Fast Filling Time:</span>
            <span>${isFastFillingTimePrice}</span>
          </div>
        )}
        {addressOption === "recommended" && (
          <div className="flex justify-between items-center">
            <span className="text-wrap max-w-56">
              Professional Business Address & Virtual Mail Service:
            </span>
            <span>${addressOptionPrice}/month</span>
          </div>
        )}
        {premiumServicePackage && (
          <div className="flex justify-between">
            <span>Premium Service Package:</span>
            <span>${premiumServicePackagePrice}</span>
          </div>
        )}
        {licenseType === "recommended" && (
          <div className="flex justify-between">
            <span>Business Licenses and Permits:</span>
            <span>${licenseTypePrice}</span>
          </div>
        )}

        <div className="flex justify-between font-bold">
          <span>Total:</span>
          <span>${totalPrice}</span>
        </div>
      </div>
      {showButtonPaths.includes(pathname) && (
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 px-3 block text-center rounded-lg font-semibold mb-4"
        >
          Get Started
        </button>
      )}
      <div className="flex items-center justify-center text-sm text-gray-500">
        <span className="mr-1">🕒</span> One-time fee
      </div>
      <p className="text-xs text-gray-500 text-center mt-2">
        Unlike companies that charge annual fees, our formation fee is one-time.
      </p>
    </div>
  );
};

export default OrderSummary;
