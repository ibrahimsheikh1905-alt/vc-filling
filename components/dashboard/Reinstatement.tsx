"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, Star, Info } from 'lucide-react';

const Reinstatement = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#F9FAFB] p-4 md:p-10 font-sans text-left">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation Only */}
        <div className="mb-8">
          <button 
            onClick={() => router.back()}
            className="flex items-center text-[13px] font-bold text-[#FF6B35] hover:opacity-80 transition-all group uppercase tracking-wider"
          >
            <ChevronLeft className="w-4 h-4 mr-1 transition-transform group-hover:-translate-x-1" /> 
            Back
          </button>
        </div>

        {/* Reinstatement Header */}
        <div className="mb-10">
          <h1 className="text-[22px] font-bold text-gray-900 tracking-tight mb-2">Reinstatement</h1>
          <p className="text-[13px] text-gray-500 max-w-3xl leading-relaxed">
            A Reinstatement order restores an inactive, non-compliant, or dissolved company into good standing with the State of Formation as if the company was never deregistered.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
          <div className="space-y-6 pb-20">
            
            {/* Section 1: Company Selection */}
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

            {/* Section 2: Detailed Company Info */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-[16px] font-bold text-gray-800 mb-8 border-b border-gray-50 pb-4 tracking-tight">Company Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-full">
                   <label className="block text-[12px] font-bold text-gray-700 mb-2 uppercase tracking-tight">Entity Type</label>
                   <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] bg-white text-gray-400 outline-none focus:border-[#FF6B35]">
                     <option>Select Entity Type</option>
                   </select>
                   <p className="text-[10px] text-red-500 mt-1">● Entity Type is required</p>
                </div>
                <div>
                   <label className="block text-[12px] font-bold text-gray-700 mb-2 uppercase tracking-tight">State of Formation <Info className="w-3 h-3 inline text-gray-300 ml-1"/></label>
                   <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] bg-white text-gray-400 outline-none focus:border-[#FF6B35]">
                     <option>Select State</option>
                   </select>
                   <p className="text-[10px] text-red-500 mt-1">● State is required</p>
                </div>
                <div>
                   <label className="block text-[12px] font-bold text-gray-700 mb-2 uppercase tracking-tight">Company Name</label>
                   <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#FF6B35]" />
                   <p className="text-[10px] text-red-500 mt-1">● Company Name is required</p>
                </div>
                <div>
                   <label className="block text-[12px] font-bold text-gray-700 mb-2 uppercase tracking-tight">Designator</label>
                   <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] bg-white text-gray-400 outline-none focus:border-[#FF6B35]">
                     <option>Select Designator</option>
                   </select>
                   <p className="text-[10px] text-red-500 mt-1">● Designator is required</p>
                </div>
              </div>
            </div>

            {/* Section 3: Company Address */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-[16px] font-bold text-gray-800 mb-6 border-b border-gray-50 pb-4 tracking-tight">Company Address</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-1">
                  <label className="block text-[12px] font-bold text-gray-700 mb-2 uppercase tracking-tight">Street Address</label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#FF6B35]" />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-gray-700 mb-2 uppercase tracking-tight">Address (Cont) <span className="text-gray-300 normal-case">(Optional)</span></label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#FF6B35]" />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-gray-700 mb-2 uppercase tracking-tight">City</label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#FF6B35]" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-bold text-gray-700 mb-2 uppercase tracking-tight">State</label>
                    <select className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-white text-gray-400 outline-none focus:border-[#FF6B35]">
                      <option>Select State</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold text-gray-700 mb-2 uppercase tracking-tight">Zip Code</label>
                    <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#FF6B35]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar: Order Summary */}
          <aside className="lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-8">
              <h3 className="text-[17px] font-bold text-gray-900 mb-8 tracking-tight">Order Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[11px] font-bold text-gray-400 uppercase tracking-[1.5px]">
                  <span>State Fee</span>
                  <span>TBD</span>
                </div>
                <div className="flex justify-between items-center text-[11px] font-bold text-gray-400 uppercase tracking-[1.5px]">
                  <span>Processing Fee</span>
                  <span>$199</span>
                </div>
                <div className="pt-6 border-t border-gray-100 flex justify-between items-end mt-6">
                  <span className="text-[18px] font-bold text-gray-900">Total</span>
                  <span className="text-[28px] font-black text-gray-900 leading-none">$199</span>
                </div>
              </div>

              <div className="mt-8 bg-[#FFF9F2] border border-[#FFE4C4] rounded-xl p-5 flex gap-3">
                 <Info className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                 <p className="text-[10px] leading-relaxed text-gray-600 font-medium">
                   Please note that the pricing presented is based on the premise that the entity is not more than one year in arrears with its compulsory filing requirements.
                 </p>
              </div>

              <button className="w-full bg-[#FFB08E] hover:bg-[#FF6B35] text-white font-bold py-4 rounded-xl shadow-lg transition-all text-[14px] mt-6 uppercase tracking-[1px]">
                Complete & Pay
              </button>

              <div className="mt-8 flex flex-col items-center">
                <div className="flex gap-0.5 mb-1.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-[10px] text-gray-400 font-bold mb-4 italic text-center">4.75 based on 60,000+ reviews on</p>
                <div className="flex items-center gap-3 grayscale opacity-60">
                   <span className="font-bold text-[13px] text-gray-600">Trustpilot</span>
                   <span className="font-bold text-[13px] text-gray-600">Shopper Approved</span>
                </div>
              </div>

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

export default Reinstatement;