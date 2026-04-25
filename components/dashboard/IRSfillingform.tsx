"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, Star, Info, Phone } from 'lucide-react';

const IRSfillingform = () => {
  const router = useRouter();
  
  // Functional States
  const [hasEIN, setHasEIN] = useState<boolean | null>(null);
  const [isRepSelected, setIsRepSelected] = useState(false);
  const [repInfo, setRepInfo] = useState({ fullName: "", phone: "" });

  // Auto-fill logic for Representative
  const handleRepSelect = () => {
    if (!isRepSelected) {
      setRepInfo({ fullName: "Noraiz Husnain", phone: "315-764-8283" });
      setIsRepSelected(true);
    } else {
      setRepInfo({ fullName: "", phone: "" });
      setIsRepSelected(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] p-4 md:p-10 font-sans text-left">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Button */}
        <button 
          onClick={() => router.back()}
          className="flex items-center text-[13px] font-bold text-[#FF6B35] mb-6 hover:opacity-80 transition-all group"
        >
          <ChevronLeft className="w-4 h-4 mr-1 transition-transform group-hover:-translate-x-1" /> 
          Back
        </button>

        <div className="mb-10">
          <h1 className="text-xl font-bold text-gray-900">S Corporation Tax Election with Form 2553</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
          
          <div className="space-y-6 pb-20">
            
            {/* 1. New Company Selection */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-[16px] font-bold text-gray-800 mb-6 italic">Company Information</h3>
              <div className="border-2 border-[#FF6B35] rounded-lg p-5 bg-white flex items-center gap-4">
                <div className="w-5 h-5 rounded-full border-2 border-[#FF6B35] flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B35]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-[12px] uppercase">NEW COMPANY</h4>
                  <p className="text-gray-400 text-[11px] italic">A company previously incorporated outside of Bizee</p>
                </div>
              </div>
            </div>

            {/* 2. Company Details & EIN */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-[16px] font-bold text-gray-800 mb-8 border-b border-gray-50 pb-4 italic">Company Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="col-span-full md:col-span-1">
                   <label className="block text-[12px] font-bold text-gray-700 mb-2 italic">Entity Type</label>
                   <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] bg-white text-gray-400 italic outline-none">
                     <option>Select Entity Type</option>
                   </select>
                </div>
                <div className="col-span-full md:col-span-1">
                   <label className="block text-[12px] font-bold text-gray-700 mb-2 italic">State of Formation <Info className="w-3 h-3 inline text-gray-400"/></label>
                   <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] bg-white text-gray-400 italic">
                     <option>Select State</option>
                   </select>
                </div>
                <div className="col-span-full">
                   <label className="block text-[12px] font-bold text-gray-700 mb-2 italic">Company Name</label>
                   <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] outline-none" />
                </div>
                <div>
                   <label className="block text-[12px] font-bold text-gray-700 mb-2 italic">Designator</label>
                   <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] bg-white text-gray-400 italic">
                     <option>Select Designator</option>
                   </select>
                </div>
                <div>
                   <label className="block text-[12px] font-bold text-gray-700 mb-2 italic">Date of Formation</label>
                   <input type="text" placeholder="mm/dd/yyyy" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] outline-none italic" />
                </div>
              </div>

              <div className="mt-8">
                <label className="block text-[12px] font-bold text-gray-700 mb-4 italic">Has the IRS issued and EIN for this entity?</label>
                <div className="grid grid-cols-2 gap-4">
                  <button onClick={() => setHasEIN(true)} className={`border-2 rounded-lg p-4 flex items-center gap-3 ${hasEIN === true ? 'border-[#FF6B35]' : 'border-gray-200'}`}>
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${hasEIN === true ? 'border-[#FF6B35]' : 'border-gray-300'}`}>
                      {hasEIN === true && <div className="w-2 h-2 rounded-full bg-[#FF6B35]" />}
                    </div>
                    <span className="text-[13px] font-bold">Yes</span>
                  </button>
                  <button onClick={() => setHasEIN(false)} className={`border-2 rounded-lg p-4 flex items-center gap-3 ${hasEIN === false ? 'border-[#FF6B35]' : 'border-gray-200'}`}>
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${hasEIN === false ? 'border-[#FF6B35]' : 'border-gray-300'}`}>
                      {hasEIN === false && <div className="w-2 h-2 rounded-full bg-[#FF6B35]" />}
                    </div>
                    <span className="text-[13px] font-bold">No</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 3. Company Address */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-[16px] font-bold text-gray-800 mb-8 border-b border-gray-50 pb-4 italic">Company Address</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-full md:col-span-1">
                  <label className="block text-[12px] font-bold text-gray-700 mb-2 italic">Street Address</label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none" />
                </div>
                <div className="col-span-full md:col-span-1">
                  <label className="block text-[12px] font-bold text-gray-700 mb-2 italic">Address (Cont) <span className="text-gray-400 font-normal">(Optional)</span></label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none" />
                </div>
                <div className="grid grid-cols-3 col-span-full gap-4">
                   <div className="col-span-1">
                     <label className="block text-[12px] font-bold text-gray-700 mb-2 italic">City</label>
                     <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none" />
                   </div>
                   <div className="col-span-1">
                     <label className="block text-[12px] font-bold text-gray-700 mb-2 italic">State</label>
                     <select className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-white text-gray-400 italic"><option>Select State</option></select>
                   </div>
                   <div className="col-span-1">
                     <label className="block text-[12px] font-bold text-gray-700 mb-2 italic">Zip Code</label>
                     <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none" />
                   </div>
                </div>
              </div>
            </div>

            {/* 4. Representative Information */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-[16px] font-bold text-gray-800 mb-4 italic">Representative Information</h3>
              <p className="text-[11px] text-gray-500 mb-8 italic">Please provide the contact information of a company officer or legal representative.</p>
              
              <div 
                onClick={handleRepSelect}
                className={`border-2 rounded-lg p-5 flex justify-between items-center mb-8 cursor-pointer transition-all ${isRepSelected ? 'border-[#FF6B35] bg-[#FFF8F5]' : 'border-gray-200 bg-gray-50'}`}
              >
                <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${isRepSelected ? 'border-[#FF6B35]' : 'border-gray-300'}`}>
                        {isRepSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B35]" />}
                    </div>
                    <span className="text-[13px] font-bold text-gray-800 italic">Noraiz Husnain</span>
                </div>
                <div className="text-[13px] text-gray-600 font-bold">315-764-8283</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                   <label className="block text-[12px] font-bold text-gray-700 mb-2 italic">Full Name</label>
                   <input type="text" value={repInfo.fullName} readOnly className="w-full border border-gray-100 bg-gray-50 rounded-lg px-4 py-3 text-[14px]" />
                </div>
                <div>
                   <label className="block text-[12px] font-bold text-gray-700 mb-2 italic">Phone</label>
                   <input type="text" value={repInfo.phone} readOnly className="w-full border border-gray-100 bg-gray-50 rounded-lg px-4 py-3 text-[14px]" />
                </div>
              </div>
            </div>

            <button onClick={() => router.back()} className="bg-white border border-gray-200 rounded-lg px-12 py-3.5 text-[13px] font-bold shadow-sm hover:bg-gray-50">Back</button>
          </div>

          {/* RIGHT SIDEBAR: ORDER SUMMARY (FIXED) */}
          <aside className="lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-2xl p-8">
              <h3 className="text-[17px] font-bold text-gray-900 mb-8 italic">Order Summary</h3>
              
              <div className="space-y-5">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">State Fee</span>
                  <span className="text-[13px] font-bold text-gray-900">TBD</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Processing Fee</span>
                  <span className="text-[13px] font-bold text-gray-900">TBD</span>
                </div>

                <div className="pt-6 border-t border-gray-100 flex justify-between items-end mt-6">
                  <span className="text-[18px] font-bold text-gray-900 italic">Total</span>
                  <span className="text-[32px] font-black text-gray-900 leading-none">$0</span>
                </div>
              </div>

             {/* Submit Order Button with Original Shade & Shadow */}
              <button className="w-full bg-[#FF6B35] hover:bg-[#E85A24] text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-100 transition-all text-[14px] mt-8 mb-6 uppercase tracking-[2px] active:scale-95">
                Submit Order
              </button>
              <div className="flex flex-col items-center">
                <div className="flex gap-0.5 mb-1.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-[10px] text-gray-400 font-bold italic mb-6">4.75 based on 60,000+ reviews</p>
                
                <div className="bg-[#f0fdfc] border border-teal-50 rounded-2xl p-5 flex gap-3 w-full">
                  <Info className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <p className="text-[10px] leading-relaxed text-teal-800 font-medium italic">
                    After clicking on "Submit Order" button, please wait for your order to be processed.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default IRSfillingform;