"use client";
import OrderSummary from "@/components/OrderSummary";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  CheckIcon,
  LightBulbIcon,
  MapPinIcon,
  HomeModernIcon,
} from "@heroicons/react/24/solid";
import useLocalStorageForm from "@/hooks/useLocalStorage";
import { countries } from "@/data";
import NavigationWrapper from "@/components/NavigationWrapper";
import { usePathname, useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
interface AddressOption {
  title: string;
  price?: number;
  address?: string;
  icon?: React.ReactNode;
  isRecommended?: boolean;
  features?: string[];
}

type Inputs = {
  country: string;
  streetAddress: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  addressOption: string;
};

const StepFive = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    updateFormData({ ...data, state: formData.state });
    router.push(pathname.replace(/step-\d+.*/, "step-6"));
  };
  const [formData, updateFormData] = useLocalStorageForm({
    country: "",
    streetAddress: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    addressOption: "",
  });

  const options: Record<"recommended" | "own", AddressOption> = {
    recommended: {
      title: "Professional Business Address & Virtual Mail Service",
      price: 29,
      address: `898 South State St, Ste 310,Orem, ${formData.stateFromStepOne} 84097 (Suite # will be assigned after the order completion)`,
      isRecommended: true,
      features: [
        " Maintain privacy by using a commercial address",
        "Unlimited scanned incoming mail",
        "A physical address for your business (not PO Box)",
        "Instant alerts with 24/7 access to your mail online",
      ],
      icon: <MapPinIcon height={80} width={80} className="text-primary" />,
    },
    own: {
      title: "Use My Own Address",
      price: 0,
      icon: <HomeModernIcon height={80} width={80} className="text-primary" />,
    },
  };
  useEffect(() => {
    updateFormData({
      stateFromStepOne: JSON.parse(
        localStorage.getItem(pathname.replace(/step-\d+.*/, "step-1")) as string
      )?.stateName,
    });
    if (formData.addressOption === "own") {
      updateFormData({
        state: formData.stateFromStepOne,
      });
    }
  }, [formData.addressOption]);
  useEffect(() => {
    setIsMounted(true);
    const setServiceType = () => {
      localStorage.setItem("serviceType", "form-nonprofit");
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
                Company Address Information
              </h2>
              <p className="mb-4">
                We recommend using our Virtual Address service if maintaining
                your personal privacy is of importance. The State of Utah
                formation documents collect and make publicly available both the
                business address of the entity as well as the personal addresses
                of the owners.
              </p>
              <p className="mb-4 font-medium">
                Benefits of Using a Private Virtual Mail Address
              </p>
              <ul>
                <li className="mb-2 flex items-center ">
                  <CheckIcon
                    height={20}
                    width={20}
                    className="mr-2 text-primary"
                  />{" "}
                  Keeping your personal address confidential
                </li>
                <li className="mb-2 flex items-center ">
                  <CheckIcon
                    height={20}
                    width={20}
                    className="mr-2 text-primary"
                  />{" "}
                  Real-time text and email notification of any incoming mail
                </li>
                <li className="mb-2 flex items-center ">
                  <CheckIcon
                    height={20}
                    width={20}
                    className="mr-2 text-primary"
                  />{" "}
                  Maintaining a physical presence, even if you&apos;re not
                  physically there
                </li>
                <li className="mb-4 flex items-center ">
                  <CheckIcon
                    height={20}
                    width={20}
                    className="mr-2 text-primary"
                  />{" "}
                  Permanent digital access to your mail anywhere in the world
                </li>
              </ul>
              <div className="space-x-4 flex">
                {Object.entries(options).map(([key, option]) => (
                  <label
                    key={key}
                    className={`p-4 border rounded-lg cursor-pointer w-1/2 ${
                      formData.addressOption === key
                        ? "border-primary"
                        : "border-gray-200"
                    }`}
                  >
                    <input
                      type="radio"
                      value={key}
                      hidden
                      className="hidden"
                      {...register("addressOption", {
                        required: true,
                        onChange: (e) => {
                          updateFormData({
                            addressOption: e.target.value as
                              | "recommended"
                              | "own",
                            country: "",
                            streetAddress: "",
                            addressLine2: "",
                            city: "",
                            state: "",
                            zipCode: "",
                          });
                          setValue("country", "");
                          setValue("streetAddress", "");
                          setValue("addressLine2", "");
                          setValue("city", "");
                          setValue("state", "");
                          setValue("zipCode", "");
                        },
                      })}
                    />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`min-w-4 max-w-4 h-4 rounded-full border-2 ${
                            formData.addressOption === key
                              ? "border-primary bg-primary"
                              : "border-gray-300"
                          }`}
                        >
                          {formData.addressOption === key && (
                            <div className="w-2 h-2 rounded-full bg-white mx-auto mt-0.5" />
                          )}
                        </div>
                        <span className="font-medium">{option.title}</span>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-center py-10">
                      {option.icon}
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      {option.address && (
                        <p>This will be your principal company address: </p>
                      )}
                      <p className={option.isRecommended ? "text-primary" : ""}>
                        {option.address}
                      </p>
                      {option.features && (
                        <ul className="mt-2">
                          {option.features.map((feature, index) => (
                            <li
                              key={index}
                              className="flex items-center space-x-2"
                            >
                              <CheckIcon
                                height={20}
                                width={20}
                                className="text-primary"
                              />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    {option.isRecommended && (
                      <span className="inline-block mt-2 px-2 py-1 text-xs font-semibold text-primary border border-primary rounded">
                        Recommended
                      </span>
                    )}

                    {!option.isRecommended && (
                      <div className="flex flex-col mt-2 text-center">
                        <p className="text-lg text-gray-600 mb-2">
                          I will provide my own {formData.stateFromStepOne}{" "}
                          business address and will personally keep up with the
                          incoming mail.
                        </p>{" "}
                        <p className="text-lg text-gray-600">
                          {" "}
                          {formData.stateFromStepOne} requires a physical street
                          address (P.O Boxes are not accepted).
                        </p>{" "}
                        <p className="text-lg text-gray-600">
                          Any residential address provided to the state will be
                          listed publicly.
                        </p>
                      </div>
                    )}
                    <p className="font-medium flex justify-end pt-5 bottom-0">
                      ${option.price}/month
                    </p>
                  </label>
                ))}
              </div>
              {formData.addressOption === "own" && (
                <div className="mt-4">
                  <h2 className="text-2xl font-bold mb-4">Company Address</h2>
                  <div className="md:flex">
                    <div className="md:w-1/2 mr-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Street Address
                      </label>
                      <div className="my-3">
                        <input
                          type="text"
                          value={formData.streetAddress}
                          {...register("streetAddress", {
                            required: formData.addressOption === "own",
                            onChange: (e) =>
                              updateFormData({ streetAddress: e.target.value }),
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.streetAddress && (
                          <span className="text-red-500">
                            Street Address is required
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <label className="block text-sm font-medium text-gray-700">
                        Address(Line 2)
                      </label>
                      <div className="my-3">
                        <input
                          type="text"
                          value={formData.addressLine2}
                          {...register("addressLine2", {
                            required: formData.addressOption === "own",
                            onChange: (e) =>
                              updateFormData({ addressLine2: e.target.value }),
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.addressLine2 && (
                          <span className="text-red-500">
                            Address(Line 2) is required
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <div className="my-3">
                      <input
                        type="text"
                        value={formData.city}
                        {...register("city", {
                          required: formData.addressOption === "own",
                          onChange: (e) =>
                            updateFormData({ city: e.target.value }),
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.city && (
                        <span className="text-red-500">City is required</span>
                      )}
                    </div>
                  </div>
                  <div className="md:flex">
                    <div className="md:w-1/2 mr-4">
                      <label className="block text-sm font-medium text-gray-700">
                        State
                      </label>
                      <div className="my-3">
                        <select
                          value={formData.state}
                          {...register("state", {
                            required: formData.addressOption === "own",
                            disabled: true,
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value={formData.state}>
                            {formData.state}
                          </option>
                        </select>
                        {errors.state && (
                          <span className="text-red-500">
                            State is required
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <label className="block text-sm font-medium text-gray-700">
                        Zip Code
                      </label>
                      <div className="my-3">
                        <input
                          type="number"
                          maxLength={10}
                          value={formData.zipCode}
                          {...register("zipCode", {
                            required: formData.addressOption === "own",
                            onChange: (e) =>
                              updateFormData({ zipCode: e.target.value }),
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.zipCode && (
                          <span className="text-red-500">
                            Zip Code is required
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {formData.addressOption === "recommended" && (
                <div className="mt-4">
                  <h2 className="text-2xl font-bold mb-4">Contact Address</h2>
                  <div className="">
                    <label className="block text-sm font-medium text-gray-700">
                      Country
                    </label>
                    <div className="my-3">
                      <select
                        value={formData.country}
                        {...register("country", {
                          required: formData.addressOption === "recommended",
                          onChange: (e) => {
                            updateFormData({ country: e.target.value });
                          },
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option hidden value="">
                          Select Country
                        </option>
                        {countries.map((country: string) => (
                          <option key={country}>{country}</option>
                        ))}
                      </select>
                      {errors.country && (
                        <span className="text-red-500">
                          Country is required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="md:flex">
                    <div className="md:w-1/2 mr-4">
                      <label className="block text-sm font-medium text-gray-700">
                        Street Address
                      </label>
                      <div className="my-3">
                        <input
                          type="text"
                          value={formData.streetAddress}
                          {...register("streetAddress", {
                            required: formData.addressOption === "recommended",
                            onChange: (e) => {
                              updateFormData({
                                streetAddress: e.target.value,
                              });
                            },
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.streetAddress && (
                          <span className="text-red-500">
                            Street Address is required
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <label className="block text-sm font-medium text-gray-700">
                        Address(Line 2)
                      </label>
                      <div className="my-3">
                        <input
                          type="text"
                          value={formData.addressLine2}
                          {...register("addressLine2", {
                            required: formData.addressOption === "recommended",
                            onChange: (e) => {
                              updateFormData({
                                addressLine2: e.target.value,
                              });
                            },
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.addressLine2 && (
                          <span className="text-red-500">
                            Address(Line 2) is required
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <div className="my-3">
                      <input
                        type="text"
                        value={formData.city}
                        {...register("city", {
                          required: formData.addressOption === "recommended",
                          onChange: (e) => {
                            updateFormData({ city: e.target.value });
                          },
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.city && (
                        <span className="text-red-500">City is required</span>
                      )}
                    </div>
                  </div>
                  <div className="md:flex">
                    <div className="md:w-1/2 mr-4">
                      <label className="block text-sm font-medium text-gray-700">
                        State
                      </label>
                      <div className="my-3">
                        <input
                          type="text"
                          value={formData.state}
                          {...register("state", {
                            required: formData.addressOption === "recommended",
                            onChange: (e) => {
                              updateFormData({ state: e.target.value });
                            },
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.state && (
                          <span className="text-red-500">
                            State is required
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <label className="block text-sm font-medium text-gray-700">
                        Zip Code
                      </label>
                      <div className="my-3">
                        <input
                          type="number"
                          maxLength={10}
                          value={formData.zipCode}
                          {...register("zipCode", {
                            required: formData.addressOption === "recommended",
                            onChange: (e) => {
                              updateFormData({ zipCode: e.target.value });
                            },
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                        {errors.zipCode && (
                          <span className="text-red-500">
                            Zip Code is required
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-1/12 flex items-center justify-center">
                      <LightBulbIcon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="w-10/12">
                      <p className="mt-4 text-gray-500 text-lg">
                        How will this address be used?
                      </p>{" "}
                      <p className="text-gray-500 text-sm">
                        The contact address is the primary address used for the
                        delivery of any documents or products related to your
                        order. This address is used for internal purposes only
                        and will not be shared with any third parties or other
                        outside agencies unless provided in any subsequent pages
                        of the order process which require the intake of an
                        address.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-between mt-12">
              <Link
                href="/start-a-nonprofit/step-4"
                className="px-8 py-2 bg-primary text-white border border-primary rounded-[30px] "
              >
                Back
              </Link>
              <button
                type="submit"
                className="px-8 py-2 bg-primary text-white border border-primary rounded-[30px]"
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

export default StepFive;
