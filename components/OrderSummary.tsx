"use client";
import { totalPriceAtom } from "@/app/atoms";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import { useAtom } from "jotai";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getStateFee } from "@/data/stateFeeData";
import { getEntityFilingInfo, type EntityKind } from "@/data/entityFilingData";

const entityKindByType: Record<string, EntityKind> = {
  LLC: "llc",
  "S-Corporation": "sCorp",
  "C-Corporation": "cCorp",
  Nonprofit: "nonProfit",
};

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
  const step4Data = tryGetFormData("/step-4");
  const step5Data = tryGetFormData("/step-5");
  const step6Data = tryGetFormData("/step-6");
  const step7Data = tryGetFormData("/step-7");
  const step8Data = tryGetFormData("/step-8");
  const step9Data = tryGetFormData("/step-9");
  const step10Data = tryGetFormData("/step-10");
  const step11Data = tryGetFormData("/step-11");
  const step12Data = tryGetFormData("/step-12");



  
  // Extract values from the data
  // C-Corporation flow me step-1 file/folder exist nahi karta, isliye packageType/stateName infer step-6/3 se karna better hai.
const packageType = (() => {
    // C-Corporation: packageType should come from step-1/step-3 saved data,
    // not default to Basic.
    if (serviceType === "form-c-corporation" || pathname.includes("/form-c-corporation")) {
      if (step6Data?.premiumServicePackage) return "Premium";
      // Prefer saved packageType from storage
      return step1Data?.packageType || step3Data?.packageType || "Basic";
    }

    // Other services
    return step1Data?.packageType || "Basic";
  })();


  // For registered-agent, use stateOfService field; for others, use stateName or stateOfFormation
  // For foreign-qualification, use stateOfService as it's the "State of Service" (the state where you want to do business)
  let stateName = step1Data?.stateName || step1Data?.stateOfFormation || step1Data?.stateOfService;

  // C-Corporation: always use a single source of truth first to avoid fee mismatch across renders.
  // Step-2 directly reads `stateFromStepOne` from step-3.
  if (serviceType === "form-c-corporation" || pathname.includes("/form-c-corporation")) {
    stateName =
      step3Data?.stateFromStepOne ??
      step1Data?.stateName ??
      step1Data?.stateOfFormation ??
      step1Data?.stateOfService ??
      "";
  }

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

  // True only when we have a real entityFilingData entry for this
  // entity/state combo and it's explicitly marked unavailable.
  const filingInfo =
    entityType && stateName
      ? getEntityFilingInfo(stateName.trim(), entityKindByType[entityType])
      : null;
  const isNotOffered = !!filingInfo && !filingInfo.offered;

useEffect(() => {
    // Set state fee using the shared helper.
    if (!stateName) {
      setStateFee(0);
      return;
    }

    try {
      // Some step screens store state with different casing.
      // Normalize for the helper to match keys.
      const normalized = stateName.trim();

      // Formation flows (LLC/S-Corp/C-Corp/Nonprofit) have real per-state,
      // per-entity fees in entityFilingData — use that instead of the flat
      // registered-agent fee table whenever it has an entry.
      const entityKind = entityType ? entityKindByType[entityType] : undefined;
      const entityFee = entityKind ? getEntityFilingInfo(normalized, entityKind)?.stateFee : null;

      setStateFee(entityFee ?? getStateFee(normalized));
    } catch {
      setStateFee(0);
    }
  }, [stateName, entityType]);

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
        {isNotOffered ? (
          <div className="text-center py-2">
            <span className="font-bold text-red-600">Not Offered</span>
            <p className="text-xs text-red-500 mt-1">
              {entityType} formation is not offered in {stateName}.
            </p>
          </div>
        ) : packageType && packageType !== "" ? (
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
{!isNotOffered && (
        <>
        {/* Show state fee - for registered-agent show as total (includes service), for others show separately */}
        <div className="flex justify-between">
          <span>{stateName ? stateName + ' State Fee' : 'State Fee'}:</span>
          <span>${stateFee || 0}</span>
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
        </>
        )}
      </div>
      {!isNotOffered && showButtonPaths.includes(pathname) && (
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
