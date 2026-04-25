"use client";
import { totalPriceAtom } from "@/app/atoms";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import { useAtom } from "jotai";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const OrderSummary = ({ referer }: { referer?: string }) => {
  const pathname = usePathname();
  const orderSummaryReferer = referer?.replace(/\/step-.*$/, "");
  const [totalPrice, setTotalPrice] = useAtom<number>(totalPriceAtom);
  const [stateFee, setStateFee] = useState<number>(0);
  const [packagePrice, setPackagePrice] = useState<number>(0);

  const currentFullPath = window.location.pathname;
  const currentBasePath = currentFullPath.split("/")[1];

  const conditionalPathOneThree =
    window.location.pathname.split("/")[2] === "step-1" ? "step-1" : "step-3";

  const conditionalPathOneFive =
    window.location.pathname.split("/")[2] === "step-1" ? "step-1" : "step-5";

  const packageType = JSON.parse(
    localStorage.getItem(
      pathname === "/forms/step-final"
        ? orderSummaryReferer + "/step-1"
        : pathname.replace(/step-\d+.*/, "step-1")
    ) as string
  )?.packageType;
  const serviceType = localStorage.getItem("serviceType");

  const stateName = JSON.parse(
    localStorage.getItem(
      pathname === "/forms/step-final"
        ? orderSummaryReferer + "/step-1"
        : pathname.replace(/step-\d+.*/, "step-1")
    ) as string
  )?.stateName;

  const isFastFillingTime = JSON.parse(
    localStorage.getItem(
      pathname === "/forms/step-final"
        ? orderSummaryReferer + `/${conditionalPathOneThree}`
        : pathname.replace(/step-\d+.*/, `${conditionalPathOneThree}`)
    ) as string
  )?.stateFillingTime;

  const addressOption = JSON.parse(
    localStorage.getItem(
      pathname === "/forms/step-final"
        ? orderSummaryReferer + `/${conditionalPathOneFive}`
        : `/${currentBasePath}/${conditionalPathOneFive}`
    ) as string
  )?.addressOption;

  const premiumServicePackage = JSON.parse(
    localStorage.getItem(
      pathname === "/forms/step-final"
        ? orderSummaryReferer + "/step-6"
        : `/${currentBasePath}/step-6`
    ) as string
  )?.premiumServicePackage;

  const licenseType = JSON.parse(
    localStorage.getItem(
      pathname === "/forms/step-final"
        ? orderSummaryReferer + "/step-12"
        : `/${currentBasePath}/step-12`
    ) as string
  )?.licenseType;

  // const addressOption = JSON.parse(
  //   localStorage.getItem(`/${currentBasePath}/step-5`) as string
  // )?.addressOption;

  // const premiumServicePackage = JSON.parse(
  //   localStorage.getItem(`/${currentBasePath}/step-6`) as string
  // )?.premiumServicePackage;

  // const licenseType = JSON.parse(
  //   localStorage.getItem(`/${currentBasePath}/step-12`) as string
  // )?.licenseType;

  const entityType = JSON.parse(
    localStorage.getItem("/form-a-llc/step-1") as string
  );

  useEffect(() => {
    console.log("licenseType", currentBasePath);
  }, [currentBasePath]);

  // useEffect(() => {
  //   console.log("currentBasePath>>>>", currentBasePath);
  //   console.log("addressOption", addressOption);
  // }, []);

  useEffect(() => {
    // Fetch state fee based on selected state
    const fetchStateFee = async () => {
      try {
        const response = await fetch(`/api/states?stateName=${stateName}`);
        const data = await response.json();

        entityType === "LLC"
          ? setStateFee(data.llc_price)
          : entityType === "C-Corporation"
            ? setStateFee(data.c_corp_price)
            : entityType === "S-Corporation"
              ? setStateFee(data.s_corp_price)
              : setStateFee(data.nonprofit_price);
      } catch (error) {
        console.error("Failed to fetch state fee:", error);
      }
    };

    // Fetch package prices
    const fetchPackagePrices = async () => {
      try {
        const response = await fetch(`/api/package-prices`);
        const data = await response.json();
        // console.log("data", data)
        switch (packageType) {
          case "Basic":
            setPackagePrice(data[0].price);
            break;
          case "Standard":
            setPackagePrice(data[1].price);
            break;
          case "Premium":
            setPackagePrice(data[2].price);
            break;
          default:
            switch (serviceType) {
              case "amendment":
                setPackagePrice(data[3].price);
                break;
              case "registered-agent":
                setPackagePrice(data[4].price);
                break;
              case "virtual-address":
                setPackagePrice(data[5].price);
                break;
              case "cert-good-standing":
                setPackagePrice(data[6].price);
                break;
              case "fake-name":
                setPackagePrice(data[7].price);
                break;
              case "foreign-qualification":
                setPackagePrice(data[8].price);
                break;
              case "change-agent":
                setPackagePrice(data[9].price);
                break;
              case "business-license":
                setPackagePrice(data[10].price);
                break;
              case "annual-report":
                setPackagePrice(data[11].price);
                break;
              case "trademark":
                setPackagePrice(data[12].price);
                break;
              case "kit-info":
                setPackagePrice(data[13].price);
                break;
              case "dissolution":
                setPackagePrice(data[14].price);
                break;
              default:
                setPackagePrice(0);
                break;
            }
            break;
        }
        // console.log("service type in fetchPackagePrices", serviceType)

        // setPackagePrice(
        //   data[packageType === "Basic" ? 0 : packageType === "Standard" ? 1 : 2]
        //     .price
        // );
      } catch (error) {
        console.error("Failed to fetch package prices:", error);
      }
    };

    fetchStateFee();
    fetchPackagePrices();
  }, [stateName, packageType, entityType, serviceType]);

  useEffect(() => {
    console.log("packagePrice> hello> ", packagePrice);
  }, [packagePrice]);

  // const packagePrice =
  // packageType === "Premium" ? 299 : packageType === "Standard" ? 199 : 0;
  // const stateFee = 236;
  const isFastFillingTimePrice = isFastFillingTime === "fast" ? 50 : 0;
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

  useEffect(() => {
    let newTotalPrice = 0;
    newTotalPrice = safeAdd(newTotalPrice, Number(stateFee));
    newTotalPrice = safeAdd(newTotalPrice, Number(packagePrice));
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
  ]);

  return (
    <div className="mt-8 bg-gray-50 p-6 rounded-lg sticky top-0 max-w-[400px]">
      <h3 className="text-xl font-bold mb-4">Order Summary</h3>
      <div className="space-y-2 mb-4">
        {packageType === "" ? (
          <div className="flex justify-evenly">
            <ArrowLeftCircleIcon className="w-6 h-6 text-gray-500" />
            <span>Please Select a package type</span>
          </div>
        ) : (
          <div className="flex justify-between">
            <span>{packageType} Package:</span>
            <span>${packagePrice}</span>
          </div>
        )}
        <div className="flex justify-between">
          <span>{stateName} State Fee:</span>
          <span>${stateFee ? stateFee : 0}</span>
        </div>
        {isFastFillingTime === "fast" && (
          <div className="flex justify-between">
            <span>Fast Filling Time:</span>
            <span>${isFastFillingTimePrice}</span>
          </div>
        )}
        {addressOption === "recommended" && (
          <div className="flex justify-between items-center">
            <span className=" text-wrap max-w-56">
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
