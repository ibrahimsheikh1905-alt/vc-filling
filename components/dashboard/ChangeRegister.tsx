"use client";

import React from 'react';
import { ChevronLeft, Star, Info } from 'lucide-react';

const ChangeRegister = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-10 font-sans text-left">
      <div className="max-w-7xl mx-auto">
        
         {/* Back Button */}
                <button 
                  onClick={() => window.history.back()}
                  className="flex items-center text-[13px] font-bold text-slate-900 mb-8 hover:text-cyan-600 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 text-cyan-500 mr-1" /> Back
                  </button>

        {/* Header Section */}
        <div className="mb-10 max-w-4xl">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Change of Registered Agent</h1>
          <p className="text-[12px] leading-relaxed text-slate-500 font-medium">
            Update your Registered Agent to keep your business compliant and communication with the state seamless. It's a simple way to ensure the right person or entity has your back when it matters most. Stay covered, stay focused.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
          
          <div className="space-y-6 pb-20">
            
            {/* Section 1: NEW COMPANY Toggle */}
            <div className="bg-white rounded-xl p-8 border border-slate-100 shadow-sm">
              <h3 className="text-[16px] font-bold text-slate-800 mb-6">Company Information</h3>
              <div className="border-2 border-cyan-500 rounded-lg p-5 bg-white flex items-center gap-4">
                <div className="w-5 h-5 rounded-full border-2 border-cyan-500 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#06B6D4]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-[12px] uppercase">NEW COMPANY</h4>
                  <p className="text-slate-400 text-[11px]">A company previously incorporated outside of Incorp Bay</p>
                </div>
              </div>
            </div>

            {/* Section 2: Company Details */}
            <div className="bg-white rounded-xl p-8 border border-slate-100 shadow-sm">
              <h3 className="text-[16px] font-bold text-slate-800 mb-8 border-b border-gray-50 pb-4">Company Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-full">
                   <label className="block text-[12px] font-bold text-slate-700 mb-2">Entity Type</label>
                   <select className="w-full border border-slate-200 rounded-lg px-4 py-3 text-[14px] bg-white text-slate-400 outline-none">
                     <option>Select Entity Type</option>
                   </select>
                </div>
                <div>
                   <label className="block text-[12px] font-bold text-slate-700 mb-2">State of Formation <Info className="w-3 h-3 inline text-slate-400"/></label>
                   <select className="w-full border border-slate-200 rounded-lg px-4 py-3 text-[14px] bg-white text-slate-400"><option>Select State</option></select>
                </div>
                <div>
                   <label className="block text-[12px] font-bold text-slate-700 mb-2">State of Service</label>
                   <select className="w-full border border-slate-200 rounded-lg px-4 py-3 text-[14px] bg-white text-slate-400"><option>Select State</option></select>
                </div>
                <div>
                   <label className="block text-[12px] font-bold text-slate-700 mb-2">Company Name</label>
                   <input type="text" className="w-full border border-slate-200 rounded-lg px-4 py-3 text-[14px]" />
                </div>
                <div>
                   <label className="block text-[12px] font-bold text-slate-700 mb-2">Designator</label>
                   <select className="w-full border border-slate-200 rounded-lg px-4 py-3 text-[14px] bg-white text-slate-400"><option>Select Designator</option></select>
                </div>
              </div>
            </div>

            {/* Section 3: Company Address */}
            <div className="bg-white rounded-xl p-8 border border-slate-100 shadow-sm">
              <h3 className="text-[16px] font-bold text-slate-800 mb-8 border-b border-gray-50 pb-4">Company Address</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[12px] font-bold text-slate-700 mb-2">Street Address</label>
                  <input type="text" className="w-full border border-slate-200 rounded-lg px-4 py-3" />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-slate-700 mb-2">Address (Cont) <span className="text-slate-400 font-normal">(Optional)</span></label>
                  <input type="text" className="w-full border border-slate-200 rounded-lg px-4 py-3" />
                </div>
                <div className="grid grid-cols-3 col-span-full gap-4">
                   <div className="col-span-1">
                     <label className="block text-[12px] font-bold text-slate-700 mb-2">City</label>
                     <input type="text" className="w-full border border-slate-200 rounded-lg px-4 py-3" />
                   </div>
                   <div className="col-span-1">
                     <label className="block text-[12px] font-bold text-slate-700 mb-2">State</label>
                     <select className="w-full border border-slate-200 rounded-lg px-4 py-3 bg-white text-slate-400"><option>Select State</option></select>
                   </div>
                   <div className="col-span-1">
                     <label className="block text-[12px] font-bold text-slate-700 mb-2">Zip Code</label>
                     <input type="text" className="w-full border border-slate-200 rounded-lg px-4 py-3" />
                   </div>
                </div>
              </div>
            </div>

            {/* Section 4: Newly Appointed Registered Agent */}
            <div className="bg-white rounded-xl p-8 border border-slate-100 shadow-sm">
              <h3 className="text-[16px] font-bold text-slate-800 mb-8 border-b border-gray-50 pb-4">Provide Name & Address of Newly Appointed Registered Agent</h3>
              
              <div className="border-2 border-cyan-500 rounded-lg p-5 bg-white flex items-center gap-4 mb-8">
                <div className="w-5 h-5 rounded-full border-2 border-cyan-500 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#06B6D4]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-[12px]">Individual</h4>
                  <p className="text-slate-400 text-[11px]">The registered agent will be an individual.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                   <label className="block text-[12px] font-bold text-slate-700 mb-2">Agent First Name</label>
                   <input type="text" className="w-full border border-slate-200 rounded-lg px-4 py-3 text-[14px]" />
                </div>
                <div>
                   <label className="block text-[12px] font-bold text-slate-700 mb-2">Agent Last Name</label>
                   <input type="text" className="w-full border border-slate-200 rounded-lg px-4 py-3 text-[14px]" />
                </div>
                <div>
                   <label className="block text-[12px] font-bold text-slate-700 mb-2">Street Address</label>
                   <input type="text" className="w-full border border-slate-200 rounded-lg px-4 py-3 text-[14px]" />
                </div>
                <div>
                   <label className="block text-[12px] font-bold text-slate-700 mb-2">Address (Cont) <span className="text-slate-400 font-normal">(Optional)</span></label>
                   <input type="text" className="w-full border border-slate-200 rounded-lg px-4 py-3 text-[14px]" />
                </div>
                <div className="grid grid-cols-3 col-span-full gap-4">
                   <div className="col-span-1">
                     <label className="block text-[12px] font-bold text-slate-700 mb-2">City</label>
                     <input type="text" className="w-full border border-slate-200 rounded-lg px-4 py-3" />
                   </div>
                   <div className="col-span-1">
                     <label className="block text-[12px] font-bold text-slate-700 mb-2">State</label>
                     <select className="w-full border border-slate-200 rounded-lg px-4 py-3 bg-white text-slate-400"><option>Select State</option></select>
                   </div>
                   <div className="col-span-1">
                     <label className="block text-[12px] font-bold text-slate-700 mb-2">Zip Code</label>
                     <input type="text" className="w-full border border-slate-200 rounded-lg px-4 py-3" />
                   </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Sidebar: Order Summary */}
          <aside className="lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl border border-gray-50 shadow-lg p-8">
              <h3 className="text-[16px] font-bold text-slate-900 mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  <span>State Fee</span>
                  <span className="text-slate-900 uppercase">TBD</span>
                </div>
                <div className="flex justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  <span>Processing Fee</span>
                  <span className="text-slate-900 uppercase">TBD</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-slate-100 mt-4">
                  <span className="text-[18px] font-bold text-slate-900">Total</span>
                  <span className="text-[24px] font-bold text-slate-900">$0</span>
                </div>
              </div>

              <button className="w-full bg-[#06B6D4] hover:bg-[#06B6D4] text-white font-bold py-4 rounded-xl shadow-sm transition-all text-[14px] mb-6">
                Submit
              </button>

              <div className="flex flex-col items-center mb-6">
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-[10px] text-slate-400 font-medium text-center">4.75 based on 60,000+ reviews on</p>
                <div className="flex gap-3 mt-2 grayscale opacity-60">
                   <span className="text-[10px] font-bold">Trustpilot</span>
                   <span className="text-[10px] font-bold">Shopper Approved</span>
                </div>
              </div>

              <div className="bg-cyan-50 border border-cyan-100 rounded-xl p-4 flex gap-3">
                <Info className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                <p className="text-[10px] leading-relaxed text-cyan-800 font-medium italic">
                  After clicking on &quot;Submit&quot; button, please wait for your order to be processed and do not hit the browser &quot;Back&quot; button. Processing may take a minute.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ChangeRegister;