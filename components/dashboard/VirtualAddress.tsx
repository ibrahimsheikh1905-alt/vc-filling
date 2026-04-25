"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, Star, Info } from 'lucide-react';

const VirtualAddress = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#F9FAFB] p-4 md:p-10 font-sans text-left">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation */}
        <div className="mb-8">
          <button 
            onClick={() => router.back()}
            className="flex items-center text-[13px] font-bold text-[#FF6B35] hover:opacity-80 transition-all group uppercase tracking-wider"
          >
            <ChevronLeft className="w-4 h-4 mr-1 transition-transform group-hover:-translate-x-1" /> 
            Back
          </button>
        </div>

        {/* Virtual Address Header */}
        <div className="mb-10">
          <h1 className="text-[22px] font-bold text-gray-900 tracking-tight mb-2">Virtual Address</h1>
          <p className="text-[13px] text-gray-500 max-w-4xl leading-relaxed">
            vc Filling currently provides virtual mailboxes in <span className="font-bold text-gray-800">48 different states</span> across the country, providing you with the flexibility you need to run your business in the location that makes the most sense for you.
          </p>

          {/* Blue Info Alert */}
          <div className="mt-6 bg-[#EBFDFF] border border-[#B6F2F8] rounded-xl p-5 flex gap-4 max-w-5xl">
            <Info className="w-5 h-5 text-[#2DB5C2] flex-shrink-0 mt-0.5" />
            <p className="text-[12px] leading-relaxed text-[#2D7A82]">
              USPS regulations require that we verify your identity and address before we can open and scan your mail. You will be able to complete this process and sign the corresponding USPS Form 1583 from your dashboard.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
          <div className="space-y-6 pb-20">
            
            {/* Section 1: Company Information Box */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-[16px] font-bold text-gray-800 mb-6 tracking-tight">Company Information</h3>
              <div className="border-2 border-[#FF6B35] rounded-lg p-5 bg-white flex items-center gap-4">
                <div className="w-5 h-5 rounded-full border-2 border-[#FF6B35] flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B35]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-[13px] uppercase tracking-wide">NEW COMPANY</h4>
                  <p className="text-gray-400 text-[11px]">A company previously incorporated outside of Bizee</p>
                </div>
              </div>
            </div>

            {/* Section 2: Input Fields */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-[16px] font-bold text-gray-800 mb-8 border-b border-gray-50 pb-4 tracking-tight">Company Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-full">
                   <label className="block text-[12px] font-bold text-gray-700 mb-2 uppercase tracking-tight">Entity Type</label>
                   <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] bg-white text-gray-400 outline-none focus:border-[#FF6B35]">
                     <option>Select Entity Type</option>
                   </select>
                </div>
                <div>
                   <label className="block text-[12px] font-bold text-gray-700 mb-2 uppercase tracking-tight">State of Formation <Info className="w-3 h-3 inline text-gray-300 ml-1"/></label>
                   <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] bg-white text-gray-400 outline-none focus:border-[#FF6B35]">
                     <option>Select State</option>
                   </select>
                </div>
                <div>
                   <label className="block text-[12px] font-bold text-gray-700 mb-2 uppercase tracking-tight">State of Service</label>
                   <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] bg-white text-gray-400 outline-none focus:border-[#FF6B35]">
                     <option>Select State</option>
                   </select>
                </div>
                <div>
                   <label className="block text-[12px] font-bold text-gray-700 mb-2 uppercase tracking-tight">Company Name</label>
                   <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#FF6B35]" />
                </div>
                <div>
                   <label className="block text-[12px] font-bold text-gray-700 mb-2 uppercase tracking-tight">Designator</label>
                   <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] bg-white text-gray-400 outline-none focus:border-[#FF6B35]">
                     <option>Select Designator</option>
                   </select>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar: Order Summary */}
          <aside className="lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-8">
              <h3 className="text-[17px] font-bold text-gray-900 mb-8 tracking-tight">Order Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[12px] text-gray-500">
                  <span>Virtual Address Service <span className="italic">(Monthly)</span></span>
                  <span className="font-bold text-gray-900">$29</span>
                </div>
                <div className="pt-6 border-t border-gray-100 flex justify-between items-end mt-6">
                  <span className="text-[18px] font-bold text-gray-900">Total</span>
                  <span className="text-[28px] font-black text-gray-900 leading-none">$29</span>
                </div>
              </div>

              <button className="w-full bg-[#FFB08E] hover:bg-[#FF6B35] text-white font-bold py-4 rounded-xl shadow-lg transition-all text-[14px] mt-8 uppercase tracking-[1px]">
                Complete & Pay
              </button>

              {/* Reviews */}
              <div className="mt-8 flex flex-col items-center">
                <div className="flex gap-0.5 mb-1.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-[10px] text-gray-400 font-bold mb-4 italic text-center">4.75 based on 60,000+ reviews on</p>
                <div className="flex items-center gap-3 grayscale opacity-60">
                   <span className="font-bold text-[14px] text-gray-700">Trustpilot</span>
                   <span className="font-bold text-[14px] text-gray-700">Shopper Approved</span>
                </div>
              </div>

              {/* Processing Alert */}
              <div className="mt-8 bg-[#F0FDFB] border border-[#E0F2F1] rounded-xl p-5 flex gap-3">
                  <Info className="w-4 h-4 text-[#009688] flex-shrink-0 mt-0.5" />
                  <p className="text-[10.5px] leading-relaxed text-[#00695C] font-medium">
                    After clicking on "Complete & Pay" button, please wait for your order to be processed and do not hit the browser "Back" button. Processing may take a minute.
                  </p>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default VirtualAddress;