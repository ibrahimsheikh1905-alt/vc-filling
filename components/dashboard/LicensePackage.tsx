"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ChevronLeft, Star, Info 
} from 'lucide-react';

const LicensePackageForm = () => {
  const router = useRouter();
  const [charCount, setCharCount] = useState(200);

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const length = e.target.value.length;
    setCharCount(200 - length);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] p-4 md:p-10 font-sans text-left">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Button */}
        <button 
          onClick={() => router.back()}
          className="flex items-center text-[13px] font-bold text-gray-900 mb-8 hover:text-orange-600 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 text-orange-500 mr-1" /> Back
        </button>

        {/* Header Section */}
        <div className="mb-10 max-w-4xl">
          <h1 className="text-3xl font-black text-gray-900 mb-4 tracking-tight">Business License Research Package</h1>
          <p className="text-[14px] leading-relaxed text-gray-500 font-medium italic">
            A business license authorizes a company to &quot;do business&quot; in a certain geographical jurisdiction. It is a certificate that authenticates your company is properly registered with the particular county or city in which your office(s) are located.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 items-start">
          
          {/* LEFT SIDE: FORM SECTIONS */}
          <div className="space-y-8 pb-20">
            
            {/* 1. Company Selection */}
            <div className="bg-white rounded-[20px] p-8 border border-gray-100 shadow-sm">
              <h3 className="text-[18px] font-bold text-gray-900 mb-6 italic">Company Information</h3>
              <div className="border-2 border-orange-500 rounded-xl p-6 bg-white flex items-center gap-4">
                <div className="w-5 h-5 rounded-full border-2 border-orange-500 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 text-[14px] uppercase tracking-wider">NEW COMPANY</h4>
                  <p className="text-gray-400 text-[12px]">A company previously incorporated outside of Bizee</p>
                </div>
              </div>
            </div>

            {/* 2. Company Details */}
            <div className="bg-white rounded-[20px] p-8 border border-gray-100 shadow-sm">
              <h3 className="text-[18px] font-bold text-gray-900 mb-8 border-b border-gray-50 pb-4 italic">Company Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="col-span-full">
                   <label className="block text-[13px] font-bold text-gray-700 mb-2 italic">Entity Type</label>
                   <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] bg-white italic outline-none focus:border-orange-500">
                     <option>Select Entity Type</option>
                   </select>
                </div>
                <div>
                   <label className="block text-[13px] font-bold text-gray-700 mb-2 italic">State of Formation <Info className="w-3 h-3 inline text-gray-400"/></label>
                   <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] bg-white italic"><option>Select State</option></select>
                </div>
                <div>
                   <label className="block text-[13px] font-bold text-gray-700 mb-2 italic">Company Name</label>
                   <input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px]" />
                </div>
                <div className="col-span-full">
                   <label className="block text-[13px] font-bold text-gray-700 mb-2 italic">Designator</label>
                   <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] bg-white italic"><option>Select Designator</option></select>
                </div>
              </div>
            </div>

            {/* 3. Company Address */}
            <div className="bg-white rounded-[20px] p-8 border border-gray-100 shadow-sm">
              <h3 className="text-[18px] font-bold text-gray-900 mb-8 border-b border-gray-50 pb-4 italic">Company Address</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[13px] font-bold text-gray-700 mb-2 italic">Street Address</label>
                  <input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-3" />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-gray-700 mb-2 italic">Address (Cont) <span className="text-gray-400 font-normal">(Optional)</span></label>
                  <input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-3" />
                </div>
                <div className="grid grid-cols-3 col-span-full gap-4">
                   <div>
                     <label className="block text-[13px] font-bold text-gray-700 mb-2 italic">City</label>
                     <input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-3" />
                   </div>
                   <div>
                     <label className="block text-[13px] font-bold text-gray-700 mb-2 italic">State</label>
                     <select className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white italic"><option>Select State</option></select>
                   </div>
                   <div>
                     <label className="block text-[13px] font-bold text-gray-700 mb-2 italic">Zip Code</label>
                     <input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-3" />
                   </div>
                </div>
              </div>
            </div>

            {/* 4. Business Type & Purpose (Specific for License) */}
            <div className="space-y-6">
              <div className="bg-white rounded-[20px] p-8 border border-gray-100 shadow-sm">
                <label className="block text-[13px] font-bold text-gray-700 mb-4 italic">Business Type / Industry</label>
                <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] bg-white italic outline-none">
                  <option>Select Business Type</option>
                </select>
              </div>

              <div className="bg-white rounded-[20px] p-8 border border-gray-100 shadow-sm">
                <label className="block text-[13px] font-bold text-gray-700 mb-2 italic">
                  Business Purpose <span className="text-gray-400 font-medium">(You have {charCount} characters left!)</span>
                </label>
                <textarea 
                  onChange={handleTextareaChange}
                  maxLength={200}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] min-h-[120px] outline-none focus:border-orange-500"
                  placeholder="Please provide brief description of Business Purpose"
                ></textarea>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: ORDER SUMMARY */}
          <aside className="lg:sticky lg:top-8">
            <div className="bg-white rounded-[24px] border border-gray-100 shadow-2xl p-8">
              <h3 className="text-[20px] font-black text-gray-900 mb-8 tracking-tighter italic">Order Summary</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-[13px] font-bold text-gray-400 uppercase tracking-tighter">
                  <span>Business License Package</span>
                  <span className="text-gray-900 font-black">$99</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-gray-50 mt-4">
                  <span className="text-[20px] font-black text-gray-900 tracking-tighter italic">Total</span>
                  <span className="text-4xl font-black text-gray-900 tracking-tighter">$99</span>
                </div>
              </div>

              <button className="w-full bg-[#fcae91] hover:bg-orange-400 text-white font-black py-5 rounded-xl shadow-sm transition-all text-[16px] mb-6 uppercase tracking-wider">
                Complete & Pay
              </button>

              <div className="flex flex-col items-center mb-6">
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-[11px] text-gray-400 font-bold italic text-center">4.75 based on 60,000+ reviews on</p>
                <div className="flex gap-4 mt-2 opacity-50 font-black text-[10px] grayscale uppercase tracking-widest">
                  <span>Trustpilot</span>
                  <span>Shopper Approved</span>
                </div>
              </div>

              <div className="bg-[#f0fdfc] border border-teal-50 rounded-xl p-5 flex gap-3">
                <Info className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <p className="text-[11px] leading-relaxed text-teal-800 font-medium italic">
                  After clicking on &quot;Complete &amp; Pay&quot; button, please wait for your order to be processed and do not hit the browser &quot;Back&quot; button.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default LicensePackageForm;