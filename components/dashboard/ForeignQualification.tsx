"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ChevronLeft, Star, Info, Check, ShieldCheck, Zap, DollarSign, MailX 
} from 'lucide-react';

const ForeignQualificationForm = () => {
  const router = useRouter();
  
  // State for Registered Agent Selection
  const [activeAgent, setActiveAgent] = useState('bizee'); 

  // Pricing Logic
  const agentFee = activeAgent === 'bizee' ? 119 : 0;
  const totalPrice = agentFee; // Add other base fees here if needed

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
          <h1 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">Foreign Qualification</h1>
          <div className="space-y-4 text-[15px] leading-relaxed text-gray-500 font-medium italic">
            <p>
              A Foreign Qualification refers to the process by which you register your company to do business in another state. An LLC or corporation is considered "domestic" in the state in which it was formed, and "foreign" in any other state in which it wants to do business. When you file a Foreign Qualification, you get a Certificate of Authority, which gives you legitimate rights to do business in the state.
            </p>
            <p>
              A Foreign Qualification must be completed in each state in which a corporation or LLC intends to conduct business.
            </p>
          </div>
        </div>

        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 items-start">
          
          {/* LEFT SIDE: FORM SECTIONS */}
          <div className="space-y-8 pb-20">
            
            {/* 1. Company Information Selection */}
            <div className="bg-white rounded-[20px] p-8 md:p-10 border border-gray-100 shadow-sm">
              <h3 className="text-[18px] font-bold text-gray-900 mb-6 tracking-tight">Company Information</h3>
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

            {/* 2. Entity Details */}
            <div className="bg-white rounded-[20px] p-8 md:p-10 border border-gray-100 shadow-sm">
              <h3 className="text-[18px] font-bold text-gray-900 mb-8 border-b border-gray-50 pb-4">Company Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="col-span-full">
                   <label className="block text-[13px] font-bold text-gray-700 mb-2 italic">Entity Type</label>
                   <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] bg-white outline-none focus:border-orange-500 italic">
                     <option>Select Entity Type</option>
                   </select>
                   <p className="text-red-500 text-[11px] mt-1 italic font-bold">✘ Entity Type is required</p>
                </div>
                <div>
                   <label className="block text-[13px] font-bold text-gray-700 mb-2 italic">State of Formation <Info className="w-3 h-3 inline text-gray-400"/></label>
                   <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] bg-white italic"><option>Select State</option></select>
                </div>
                <div>
                   <label className="block text-[13px] font-bold text-gray-700 mb-2 italic">State of Qualification</label>
                   <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] bg-white italic"><option>Select State</option></select>
                </div>
                <div>
                   <label className="block text-[13px] font-bold text-gray-700 mb-2 italic">Company Name</label>
                   <input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px]" placeholder="Company Name" />
                </div>
                <div>
                   <label className="block text-[13px] font-bold text-gray-700 mb-2 italic">Designator</label>
                   <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] bg-white italic"><option>Select Designator</option></select>
                </div>
              </div>
            </div>

            {/* 3. Registered Agent Section */}
            <div className="bg-white rounded-[20px] p-8 md:p-10 border border-gray-100 shadow-sm">
              <h3 className="text-[18px] font-bold text-gray-900 mb-6 border-b border-gray-50 pb-4">Registered Agent Information</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2 text-[13px] text-gray-500 font-medium italic"><Check className="w-4 h-4 text-orange-500 flex-shrink-0"/> Every state requires all business entities to designate a registered agent.</li>
                <li className="flex gap-2 text-[13px] text-gray-500 font-medium italic"><Check className="w-4 h-4 text-orange-500 flex-shrink-0"/> The appointed registered agent is required to be located in the state of qualification.</li>
              </ul>

              <div className="bg-gray-50 rounded-xl p-5 flex gap-4 mb-8 border border-gray-100">
                <ShieldCheck className="w-6 h-6 text-gray-400 flex-shrink-0" />
                <p className="text-[12px] text-gray-600 leading-relaxed font-medium italic">A registered agent receives and forwards important legal and tax correspondence on behalf of the company.</p>
              </div>

              <div className="space-y-6">
                <p className="text-[13px] font-bold text-gray-800 tracking-tight">Typical documents received by your Registered Agent can include:</p>
                <ul className="space-y-3 text-[13px] text-gray-500 italic ml-2">
                  <li className="flex gap-2"><Check className="w-4 h-4 text-orange-500 flex-shrink-0"/> Service of Process, i.e. notification of a pending lawsuit or court order</li>
                  <li className="flex gap-2"><Check className="w-4 h-4 text-orange-500 flex-shrink-0"/> State correspondence, i.e. annual reports or statements</li>
                </ul>
              </div>

              {/* Radio Selection Tabs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div 
                  onClick={() => setActiveAgent('bizee')}
                  className={`rounded-xl p-5 flex items-center gap-3 bg-white cursor-pointer transition-all border-2 ${
                    activeAgent === 'bizee' ? 'border-orange-500 shadow-md ring-1 ring-orange-50' : 'border-gray-100 opacity-60'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${activeAgent === 'bizee' ? 'border-orange-500' : 'border-gray-300'}`}>
                    {activeAgent === 'bizee' && <div className="w-2.5 h-2.5 rounded-full bg-orange-500"/>}
                  </div>
                  <span className="text-[12px] font-bold text-gray-900 italic">I would like Bizee to act as my registered agent.</span>
                </div>

                <div 
                  onClick={() => setActiveAgent('own')}
                  className={`rounded-xl p-5 flex items-center gap-3 bg-white cursor-pointer transition-all border-2 ${
                    activeAgent === 'own' ? 'border-orange-500 shadow-md ring-1 ring-orange-50' : 'border-gray-100 opacity-60'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${activeAgent === 'own' ? 'border-orange-500' : 'border-gray-300'}`}>
                    {activeAgent === 'own' && <div className="w-2.5 h-2.5 rounded-full bg-orange-500"/>}
                  </div>
                  <span className="text-[12px] font-bold text-gray-900 italic">I will provide my own registered agent.</span>
                </div>
              </div>

              {/* WHY USE US SECTION */}
              <div className="mt-12 pt-8 border-t border-gray-50 space-y-8">
                <h4 className="text-[16px] font-black text-gray-900 tracking-tight">Why use us as your registered agent?</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                  <div className="flex gap-4">
                    <Zap className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <div>
                      <h5 className="text-[14px] font-bold text-gray-900 mb-1">Worry Free Compliance</h5>
                      <p className="text-[12px] text-gray-500 leading-relaxed font-medium italic">
                        Use our service to guarantee your companies state compliance requirements are met. The service renews automatically each year for $119. <span className="text-orange-500 cursor-pointer underline">View Terms</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <DollarSign className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <div>
                      <h5 className="text-[14px] font-bold text-gray-900 mb-1">Guaranteed Rates</h5>
                      <p className="text-[12px] text-gray-500 leading-relaxed font-medium italic">
                        Your first year is only $119 per year and is guaranteed for the life of the service.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <ShieldCheck className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <div>
                      <h5 className="text-[14px] font-bold text-gray-900 mb-1">All-Inclusive</h5>
                      <p className="text-[12px] text-gray-500 leading-relaxed font-medium italic">
                        We never charge a dime in additional fees for postage paid to deliver your company's important documents.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <MailX className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <div>
                      <h5 className="text-[14px] font-bold text-gray-900 mb-1">Reduce Junk Mail</h5>
                      <p className="text-[12px] text-gray-500 leading-relaxed font-medium italic">
                        By having a registered agent address you can reduce the amount of junk mail received.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: ORDER SUMMARY */}
          <aside className="lg:sticky lg:top-8 z-30">
            <div className="bg-white rounded-[24px] border border-gray-100 shadow-2xl p-8">
              <h3 className="text-[20px] font-black text-gray-900 mb-8 tracking-tighter">Order Summary</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-[13px] font-bold text-gray-400 uppercase tracking-tighter">
                  <span>State Fee</span>
                  <span>TBD</span>
                </div>
                <div className="flex justify-between text-[13px] font-bold text-gray-400 uppercase tracking-tighter">
                  <span>Registered Agent Fee</span>
                  <span className={activeAgent === 'own' ? 'text-gray-300 line-through font-medium' : 'text-gray-400'}>
                    {activeAgent === 'own' ? '$0' : '$119'}
                  </span>
                </div>
                <div className="flex justify-between text-[13px] font-bold text-gray-400 uppercase tracking-tighter border-b border-gray-50 pb-6">
                  <span>Processing Fee</span>
                  <span>TBD</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-[20px] font-black text-gray-900 tracking-tighter">Total</span>
                  <span className="text-4xl font-black text-gray-900">${totalPrice}</span>
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
                <div className="flex gap-4 mt-3 opacity-40 grayscale font-black text-[10px] uppercase tracking-widest">
                   <span>Trustpilot</span>
                   <span>Shopper Approved</span>
                </div>
              </div>

              <div className="bg-[#f0fdfc] border border-teal-50 rounded-xl p-5 flex gap-3">
                <Info className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <p className="text-[11px] leading-relaxed text-teal-800 font-medium italic">
                  After clicking on "Complete & Pay" button, please wait for your order to be processed and do not hit the browser "Back" button.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ForeignQualificationForm;