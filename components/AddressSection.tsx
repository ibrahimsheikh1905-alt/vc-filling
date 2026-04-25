"use client";
import { statesInUS } from '@/data';
import useLocalStorageForm from '@/hooks/useLocalStorage';
import React, { useEffect, useState } from 'react'

const AddressSection = ({heading}: {heading?: string}) => {
      const [isMounted, setIsMounted] = useState(false);

    const [formData, updateFormData] = useLocalStorageForm({
    
        streetAddress: "",
        addressLine2: "",
        city: "",
        state: "",
        zipCode: "",
    });
    useEffect(() => {
      setIsMounted(true);
    }, []);

    if (!isMounted) {
      return null;
    }

  return (
    <div className=" bg-white rounded-3xl mx-auto max-w-4xl shadow-lg px-16 py-12 my-8">
      {heading &&<h2 className="text-2xl font-bold mb-6">{heading}</h2>}

      <div className="md:flex">
        <div className="md:w-1/2 mr-4">
          <label className="block text-sm font-medium text-gray-700">
            Street Address
          </label>
          <div className="my-3">
            <input
              type="text"
              value={formData.streetAddress}
              onChange={(e) =>
                updateFormData({ streetAddress: e.target.value })
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
              value={formData.addressLine2}
              onChange={(e) => updateFormData({ addressLine2: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">City</label>
        <div className="my-3">
          <input
            type="text"
            value={formData.city}
            onChange={(e) => updateFormData({ city: e.target.value })}
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
              value={formData.state}
              onChange={(e) => updateFormData({ state: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            >
              <option hidden value="">Select State</option>
              {statesInUS.map((state: string) => (
                <option key={state}>{state}</option>
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
              value={formData.zipCode}
              onChange={(e) => updateFormData({ zipCode: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressSection