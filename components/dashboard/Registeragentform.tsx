"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ChevronLeft, Star, Info, ShieldCheck, Zap, DollarSign, MailX 
} from 'lucide-react';

const RegisteredAgentForm = () => {
  const router = useRouter();
  const [transferAgent, setTransferAgent] = useState('No');

  return (
    <div className="min-h-screen bg-[#F9FAFB] p-4 md:p-10 font-sans text-left">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Link */}
        <button 
          onClick={() => router.back()}
          className="flex items-center text-[13px] font-bold text-gray-900 mb-6 hover:text-orange-500 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 text-orange-500 mr-1" /> Back
        </button>

        {/* Header Section */}
        <div className="mb-10 max-w-4xl">
          <h1 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Registered Agent</h1>
          <p className="text-[13px] leading-relaxed text-gray-500 font-medium italic">
            Every state requires a corporation or an LLC to have a Registered Agent (sometimes called a resident agent, statutory agent, or agent for service of process). The Registered Agent address is the address that will be used by the state for any official legal and tax correspondence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
          
          <div className="space-y-6 pb-20">
            
            {/* 1. Company Selection */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-[16px] font-bold text-gray-900 mb-6 italic">Company Information</h3>
              <div className="border-2 border-orange-500 rounded-lg p-5 bg-white flex items-center gap-4">
                <div className="w-5 h-5 rounded-full border-2 border-orange-500 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 text-[12px] uppercase">NEW COMPANY</h4>
                  <p className="text-gray-400 text-[11px]">A company previously incorporated outside of Bizee</p>
                </div>
              </div>
            </div>

            {/* 2. Company Details */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-[16px] font-bold text-gray-900 mb-8 border-b border-gray-50 pb-4 italic">Company Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-full">
                   <label className="block text-[12px] font-bold text-gray-700 mb-2 italic">Entity Type</label>
                   <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] bg-white italic outline-none focus:border-orange-500">
                     <option>Select Entity Type</option>
                   </select>
                </div>
                <div>
                   <label className="block text-[12px] font-bold text-gray-700 mb-2 italic">State of Formation <Info className="w-3 h-3 inline text-gray-400"/></label>
                   <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] bg-white italic"><option>Select State</option></select>
                </div>
                <div>
                   <label className="block text-[12px] font-bold text-gray-700 mb-2 italic">State Requiring RA</label>
                   <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] bg-white italic"><option>Select State</option></select>
                </div>
                <div>
                   <label className="block text-[12px] font-bold text-gray-700 mb-2 italic">Company Name</label>
                   <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px]" />
                </div>
                <div>
                   <label className="block text-[12px] font-bold text-gray-700 mb-2 italic">Designator</label>
                   <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] bg-white italic"><option>Select Designator</option></select>
                </div>
              </div>
            </div>

            {/* 3. Company Address */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-[16px] font-bold text-gray-900 mb-8 border-b border-gray-50 pb-4 italic">Company Address</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Street Address" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px]" />
                <input type="text" placeholder="Address (Cont) (Optional)" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px]" />
                <div className="grid grid-cols-3 col-span-full gap-4">
                  <input type="text" placeholder="City" className="col-span-1 border border-gray-200 rounded-lg px-4 py-3 text-[14px]" />
                  <select className="col-span-1 border border-gray-200 rounded-lg px-4 py-3 text-[14px] bg-white italic"><option>Select State</option></select>
                  <input type="text" placeholder="Zip Code" className="col-span-1 border border-gray-200 rounded-lg px-4 py-3 text-[14px]" />
                </div>
              </div>
            </div>

            {/* 4. Additional Company Info */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-[16px] font-bold text-gray-900 mb-4 italic">Additional Company Information</h3>
              <p className="text-[11px] text-gray-400 mb-6 italic">Please provide the following information about your company. This information is required to complete your annual report filing.</p>
              <div>
                <label className="block text-[12px] font-bold text-gray-700 mb-2 italic">Date of Qualification</label>
                <input type="date" className="w-full md:w-1/2 border border-red-200 rounded-lg px-4 py-3 text-[14px] outline-none" />
                <p className="text-[10px] text-red-500 mt-1 italic">Date of Qualification is required</p>
              </div>
            </div>

            {/* 5. Change Agent / Transfer */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-[16px] font-bold text-gray-900 mb-8 border-b border-gray-50 pb-4 italic">Change Agent</h3>
              <div className="space-y-4">
                <p className="text-[12px] font-bold text-gray-700 italic">
                  Would you like us to facilitate the transfer of Registered Agent service from your current provider to us?
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button 
                    onClick={() => setTransferAgent('Yes')}
                    className={`p-4 border-2 rounded-xl flex items-center gap-3 transition-all ${transferAgent === 'Yes' ? 'border-orange-500 bg-white' : 'border-gray-100 bg-gray-50'}`}
                  >
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${transferAgent === 'Yes' ? 'border-orange-500' : 'border-gray-300'}`}>
                      {transferAgent === 'Yes' && <div className="w-2 h-2 rounded-full bg-orange-500" />}
                    </div>
                    <span className="text-[13px] font-bold italic">Yes</span>
                  </button>
                  <button 
                    onClick={() => setTransferAgent('No')}
                    className={`p-4 border-2 rounded-xl flex items-center gap-3 transition-all ${transferAgent === 'No' ? 'border-orange-500 bg-white' : 'border-gray-100 bg-gray-50'}`}
                  >
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${transferAgent === 'No' ? 'border-orange-500' : 'border-gray-300'}`}>
                      {transferAgent === 'No' && <div className="w-2 h-2 rounded-full bg-orange-500" />}
                    </div>
                    <span className="text-[13px] font-bold italic">No</span>
                  </button>
                </div>
                <p className="text-[10px] text-gray-400 italic mt-4">Select No, if entity has not been filed.</p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: ORDER SUMMARY */}
          <aside className="lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-8">
              <h3 className="text-[18px] font-black text-gray-900 mb-8 italic">Order Summary</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-[11px] font-bold text-gray-400 uppercase tracking-tighter">
                  <span>Registered Agent Fee</span>
                  <span className="text-gray-900">TBD</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-50 mt-4">
                  <span className="text-[18px] font-black text-gray-900 italic">Total</span>
                  <span className="text-3xl font-black text-gray-900 tracking-tighter">$119</span>
                </div>
              </div>

              <button className="w-full bg-[#fcae91] hover:bg-orange-500 text-white font-black py-4 rounded-xl transition-all shadow-md text-[14px] uppercase mb-6 tracking-widest">
                Complete & Pay
              </button>

              <div className="flex flex-col items-center opacity-70 mb-6 scale-90">
                <div className="flex gap-1 mb-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <p className="text-[10px] font-bold italic text-gray-500 text-center">
                  4.75 based on 60,000+ reviews on <br />
                  <span className="text-[#00B67A] font-black uppercase tracking-tighter">Trustpilot</span>
                </p>
              </div>

              <div className="bg-[#f0fdfc] rounded-xl p-4 border border-teal-50 flex gap-3">
                <Info className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <p className="text-[10px] text-teal-800 font-medium italic leading-relaxed">
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

export default RegisteredAgentForm;