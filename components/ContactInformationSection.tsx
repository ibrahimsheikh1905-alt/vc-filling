"use client";
import useLocalStorageForm from '@/hooks/useLocalStorage';
import React, { useEffect, useState } from 'react'

const ContactInformationSection = () => {
      const [isMounted, setIsMounted] = useState(false);

  const [formData, updateFormData] = useLocalStorageForm({

    mobilePhone: "",
    email: "",
    lastName: "",
      firstName: "",

  })
    useEffect(() => {
      setIsMounted(true);
    }, []);

    if (!isMounted) {
      return null;
    }
        
  return (
    <div>
      <div className=" my-8 rounded-3xl mx-auto max-w-4xl shadow-lg p-8 space-y-8">
        <div className=" p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={(e) => {
                  updateFormData({ firstName: e.target.value });
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
              {/* {formData.firstName === "" && (
                        <p className="text-red-500 text-xs mt-1">
                          First Name is required
                        </p>
                      )} */}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={(e) => {
                  updateFormData({ lastName: e.target.value });
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => {
                  updateFormData({ email: e.target.value });
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mobile Phone *
              </label>
              <input
                type="text"
                name="mobilePhone"
                value={formData.mobilePhone}
                onChange={(e) => {
                  updateFormData({
                    mobilePhone: e.target.value,
                  });
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInformationSection