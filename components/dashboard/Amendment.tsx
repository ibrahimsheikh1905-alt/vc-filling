"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, Star, Info } from 'lucide-react';

const Amendment = () => {
  const router = useRouter();
  const [isChangingName, setIsChangingName] = useState<boolean | null>(null);

  return (
    <div className="min-h-screen bg-[#F9FAFB] p-4 md:p-10 font-sans text-left">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation */}
        <button 
          onClick={() => router.back()}
          className="flex items-center text-[13px] font-bold text-[#FF6B35] mb-6 hover:opacity-80 transition-all group"
        >
          <ChevronLeft className="w-4 h-4 mr-1 transition-transform group-hover:-translate-x-1" /> 
          Back
        </button>

        <div className="mb-10">
          <h1 className="text-xl font-bold text-gray-900">Articles of Amendment</h1>
          <p className="text-[12px] text-gray-500 mt-2 max-w-3xl leading-relaxed">
            As time passes and businesses evolve, you may find that you are in a situation where your business name no longer fits the services you provide... 
            Any major event that alters the information on your Articles of Incorporation needs to be reported.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
          <div className="space-y-6 pb-20">
            
            {/* 1. Company Selection */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-[16px] font-bold text-gray-800 mb-6">Company Information</h3>
              <div className="border-2 border-[#FF6B35] rounded-lg p-5 bg-white flex items-center gap-4">
                <div className="w-5 h-5 rounded-full border-2 border-[#FF6B35] flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B35]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-[12px] uppercase">NEW COMPANY</h4>
                  <p className="text-gray-400 text-[11px]">A company previously incorporated outside of Bizee</p>
                </div>
              </div>
            </div>

            {/* 2. Detailed Company Info */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-[16px] font-bold text-gray-800 mb-8 border-b border-gray-50 pb-4">Company Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-full">
                   <label className="block text-[12px] font-bold text-gray-700 mb-2 uppercase">Entity Type</label>
                   <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] bg-white text-gray-400 outline-none">
                     <option>Select Entity Type</option>
                   </select>
                </div>
                <div>
                   <label className="block text-[12px] font-bold text-gray-700 mb-2 uppercase">State of Formation <Info className="w-3 h-3 inline text-gray-300"/></label>
                   <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] bg-white text-gray-400 outline-none">
                     <option>Select State</option>
                   </select>
                </div>
                <div>
                   <label className="block text-[12px] font-bold text-gray-700 mb-2 uppercase">State of Service</label>
                   <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] bg-white text-gray-400 outline-none">
                     <option>Select State</option>
                   </select>
                </div>
                <div>
                   <label className="block text-[12px] font-bold text-gray-700 mb-2 uppercase">Company Name</label>
                   <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none" />
                </div>
                <div>
                   <label className="block text-[12px] font-bold text-gray-700 mb-2 uppercase">Designator</label>
                   <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] bg-white text-gray-400 outline-none">
                     <option>Select Designator</option>
                   </select>
                </div>
              </div>
            </div>

            {/* 3. Company Address */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-[16px] font-bold text-gray-800 mb-6 border-b border-gray-50 pb-4">Company Address</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-full">
                  <label className="block text-[12px] font-bold text-gray-700 mb-2 uppercase">Street Address</label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none" />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-gray-700 mb-2 uppercase">City</label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[12px] font-bold text-gray-700 mb-2 uppercase">State</label>
                    <select className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-white text-gray-400 outline-none">
                      <option>Select State</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[12px] font-bold text-gray-700 mb-2 uppercase">Zip Code</label>
                    <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Amendment Information (Added here) */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-[16px] font-bold text-gray-800 mb-6 border-b border-gray-50 pb-4">Amendment Information</h3>
              
              <div className="mb-8">
                <label className="block text-[13px] font-bold text-gray-700 mb-4">Are you changing the name of the LLC / Corporation?</label>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => setIsChangingName(true)}
                    className={`flex items-center gap-3 p-4 border rounded-lg transition-all ${isChangingName === true ? 'border-[#FF6B35] ring-1 ring-[#FF6B35]' : 'border-gray-200'}`}
                  >
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isChangingName === true ? 'border-[#FF6B35]' : 'border-gray-300'}`}>
                      {isChangingName === true && <div className="w-2 h-2 rounded-full bg-[#FF6B35]" />}
                    </div>
                    <span className="text-[14px]">Yes</span>
                  </button>
                  <button 
                    onClick={() => setIsChangingName(false)}
                    className={`flex items-center gap-3 p-4 border rounded-lg transition-all ${isChangingName === false ? 'border-[#FF6B35] ring-1 ring-[#FF6B35]' : 'border-gray-200'}`}
                  >
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isChangingName === false ? 'border-[#FF6B35]' : 'border-gray-300'}`}>
                      {isChangingName === false && <div className="w-2 h-2 rounded-full bg-[#FF6B35]" />}
                    </div>
                    <span className="text-[14px]">No</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-bold text-gray-700 mb-3 tracking-tight leading-tight">
                  Please provide detailed information regarding the information you would like to amend
                </label>
                <textarea 
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none min-h-[150px] resize-none"
                  placeholder=""
                ></textarea>
                <p className="text-[11px] text-gray-400 mt-2">You have 300 characters left!</p>
              </div>
            </div>

            <button onClick={() => router.back()} className="bg-white border border-gray-200 rounded-lg px-12 py-3.5 text-[13px] font-bold shadow-sm hover:bg-gray-50 transition-all">Back</button>
          </div>

          {/* Sidebar Order Summary */}
          <aside className="lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-8">
              <h3 className="text-[17px] font-bold text-gray-900 mb-8 tracking-tight">Order Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                  <span>State Fee</span>
                  <span>TBD</span>
                </div>
                <div className="flex justify-between items-center text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                  <span>Processing Fee</span>
                  <span>TBD</span>
                </div>
                <div className="pt-6 border-t border-gray-100 flex justify-between items-end mt-6">
                  <span className="text-[18px] font-bold text-gray-900">Total</span>
                  <span className="text-[30px] font-black text-gray-900 leading-none">$0</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center">
                <div className="flex gap-0.5 mb-1.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-[10px] text-gray-400 font-bold mb-6">4.75 based on 60,000+ reviews on</p>
                
                <div className="bg-[#f0fdfc] border border-teal-50 rounded-xl p-4 flex gap-3 w-full">
                  <Info className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <p className="text-[10px] leading-relaxed text-teal-800 font-medium">
                    After clicking on "Submit" button, please wait for your order to be processed and do not hit the browser "Back" button.
                  </p>
                </div>
              </div>

              <button className="w-full bg-[#FF6B35] hover:bg-[#E85A24] text-white font-bold py-4 rounded-xl shadow-lg transition-all text-[14px] mt-8 uppercase tracking-[2px]">
                Submit
              </button>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default Amendment;