import React, { useEffect, useState } from "react";
import {
  UserCircleIcon as User,
  BuildingOfficeIcon as Building,
  MapPinIcon as MapPin,
  BellAlertIcon as AlertCircle,
} from "@heroicons/react/24/solid";
import useLocalStorageForm from "@/hooks/useLocalStorage";
import { statesInUS } from "@/data";

const MemberInfoForm = ({
  id,
  memberNumber,
}: {
  id: number;
  memberNumber: number;
    }) => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);
    
    
    const [formData, updateFormData] = useLocalStorageForm({
        memberNumber: null,
        member: [
            {
                memberType: "individual",
                getZipCode: "",
                getCity: "",
                getState: "",
                getAddressLine2: "",
                getStreetAddress: "",
                getFirstName: "",
                getLastName: "",
                getCompanyName: "",
                getOwnership: "",
            },
        ],
    });

    if (!isMounted) {
      return null;
    }
  //   const [useCompanyAddress, setUseCompanyAddress] = useState<boolean>(true);
  //   const [useName, setUseName] = useState<boolean>(true);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Member {id + 1}</h2>

      <div className="flex space-x-4 mb-6">
        <button
          className={`flex items-center px-4 py-2 rounded-lg ${
            formData.memberType === "individual"
              ? "bg-green-100 border-2 border-primary text-green-700"
              : "bg-gray-100 border border-gray-300 text-gray-700"
          }`}
          onClick={() => updateFormData({ memberType: "individual" })}
        >
          <User className="w-5 h-5 mr-2" />
          Individual
        </button>
        <button
          className={`flex items-center px-4 py-2 rounded-lg ${
            formData.memberType === "company"
              ? "bg-green-100 border-2 border-primary text-green-700"
              : "bg-gray-100 border border-gray-300 text-gray-700"
          }`}
          onClick={() => updateFormData({ memberType: "company" })}
        >
          <Building className="w-5 h-5 mr-2" />
          Company
        </button>
      </div>

      <div className="mb-4">
        {/* {memberType === "individual" && (
          <>
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                id="useOwnName"
                className="mr-2"
                checked={useName}
                onChange={() => setUseName(!useName)}
              />
              <label htmlFor="useOwnName" className="flex items-center">
                <User className="w-5 h-5 mr-2 text-gray-600" />
                <span>Althea Wise</span>
              </label>
            </div>
          </>
        )} */}
        {/* <div className="flex items-center">
          <input
            type="checkbox"
            id="useCompanyAddress"
            className="mr-2"
            checked={useCompanyAddress}
            onChange={() => setUseCompanyAddress(!useCompanyAddress)}
          />
          <label htmlFor="useCompanyAddress" className="flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-gray-600" />
            <span>Use the assigned company address provided by VCFilling</span>
          </label>
        </div> */}
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {formData.memberType === "individual" ? (
          <>
            <div>
              <label
                htmlFor="firstName"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                // disabled={useName}
                // value={useName ? "Althea" : getFirstName}
                value={formData.getFirstName} //TODO: useName
                onChange={(e) =>
                  updateFormData({ getFirstName: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                // disabled={useName}
                // value={useName ? "Wise" : getLastName}
                value={formData.getLastName} //TODO: useName
                onChange={(e) =>
                  updateFormData({ getLastName: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </>
        ) : (
          <>
            <div className="col-span-2">
              <label
                htmlFor="companyName"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                value={formData.getCompanyName}
                onChange={(e) =>
                  updateFormData({ getCompanyName: e.target.value })
                }
                className="w-full  px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </>
        )}
      </div>

      {/* {!useCompanyAddress && ( */}
      <>
        <div>
          <div className="md:flex">
            <div className="md:w-1/2 mr-4">
              <label className="block text-sm font-medium text-gray-700">
                Street Address
              </label>
              <div className="my-3">
                <input
                  type="text"
                  value={formData.getStreetAddress}
                  onChange={(e) =>
                    updateFormData({ getStreetAddress: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Address(Line 2)
              </label>
              <div className="my-3">
                <input
                  type="text"
                  value={formData.getAddressLine2}
                  onChange={(e) =>
                    updateFormData({ getAddressLine2: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
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
                value={formData.getCity}
                onChange={(e) => updateFormData({ getCity: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div className="md:flex">
            <div className="md:w-1/2 mr-4">
              <label className="block text-sm font-medium text-gray-700">
                State
              </label>
              <div className="my-3">
                <select
                  value={formData.getState}
                  onChange={(e) => updateFormData({ getState: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                >
                  {" "}
                  <option hidden value="">Select State</option>
                  {statesInUS.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
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
                  value={formData.getZipCode}
                  onChange={(e) =>
                    updateFormData({ getZipCode: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-4">
          <div className="flex items-start">
            <AlertCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
            <div>
              <p className="text-blue-700 font-medium">
                You have selected for VCFiling to provide you with a company
                address.
              </p>
              <p className="text-blue-600 mt-1">
                We will use the company address for the member information in
                order to shield your personal information from being publicly
                available.
              </p>
            </div>
          </div>
        </div>
      </>
      {/* )} */}
      {memberNumber > 1 && (
        <>
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700">
              % of Ownership
            </label>
            <input
              type="text"
              value={formData.getOwnership}
              onChange={(e) => updateFormData({ getOwnership: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </>
      )}
      <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
        <div className="flex items-start">
          <AlertCircle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" />
          <p className="text-yellow-700">
            The articles of organization will include the names and or addresses
            of the initial members of the LLC.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MemberInfoForm;
