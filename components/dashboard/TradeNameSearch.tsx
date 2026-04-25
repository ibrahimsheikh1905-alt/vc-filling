"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ChevronLeft, Star, Info, Check, ShieldCheck, Zap, DollarSign, MailX 
} from 'lucide-react';

const TradeNameSearchForm = () => {
  const router = useRouter();

  // State Management
  const [trademarkType, setTrademarkType] = useState('Name'); // Name, Slogan, Design / Logo
  const [usingMark, setUsingMark] = useState('');
  const [activeAgent, setActiveAgent] = useState('bizee'); 

  // Pricing logic (Adjust as needed)
  const baseTotal = 749; 

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
          <h1 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">Trade Name Search</h1>
          <p className="text-[14px] leading-relaxed text-gray-500 font-medium italic">
            Protecting your trademark can really pay dividends. Not only is it a valuable property asset, but it's also your brand, your reputation. The reputation you have established is associated with these different brand elements - your name, your logo, and tagline - and the reason why people buy from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 items-start">
          
          {/* LEFT SIDE: FORM SECTIONS */}
          <div className="space-y-8 pb-20">
            
            {/* 1. Company Selection */}
            <div className="bg-white rounded-[20px] p-8 md:p-10 border border-gray-100 shadow-sm">
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

            {/* 2. Company Details Form */}
            <div className="bg-white rounded-[20px] p-8 md:p-10 border border-gray-100 shadow-sm">
              <h3 className="text-[18px] font-bold text-gray-900 mb-8 border-b border-gray-50 pb-4 italic">Company Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="col-span-full">
                   <label className="block text-[13px] font-bold text-gray-700 mb-2 italic">Entity Type</label>
                   <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] bg-white italic">
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
                <div>
                   <label className="block text-[13px] font-bold text-gray-700 mb-2 italic">Designator</label>
                   <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px] bg-white italic"><option>Select Designator</option></select>
                </div>
              </div>
            </div>

            {/* 3. Trademark Information (The Switching Section) */}
            <div className="bg-white rounded-[20px] p-8 md:p-10 border border-gray-100 shadow-sm">
              <h3 className="text-[18px] font-bold text-gray-900 mb-8 border-b border-gray-50 pb-4 italic">Trademark Information</h3>
              
              <label className="block text-[13px] font-bold text-gray-700 mb-4 italic">Please select the appropriate type of trademark</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {['Name', 'Slogan', 'Design / Logo'].map((type) => (
                  <div 
                    key={type}
                    onClick={() => setTrademarkType(type)}
                    className={`border-2 rounded-xl py-4 px-5 flex items-center gap-3 cursor-pointer transition-all ${
                      trademarkType === type ? 'border-orange-500 ring-1 ring-orange-100 shadow-sm' : 'border-gray-100 opacity-60'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${trademarkType === type ? 'border-orange-500' : 'border-gray-300'}`}>
                      {trademarkType === type && <div className="w-2.5 h-2.5 rounded-full bg-orange-500"/>}
                    </div>
                    <span className="text-[13px] font-bold text-gray-900 italic">{type}</span>
                  </div>
                ))}
              </div>

              {/* Conditional Rendering Content */}
              <div className="space-y-6 min-h-[120px]">
                {trademarkType === 'Name' && (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <label className="block text-[13px] font-bold text-gray-700 mb-2 italic">Please write out the NAME EXACTLY as you want it to appear on the application.</label>
                    <input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px]" placeholder='Example: "McDonald&apos;s", "Nike", or "Apple"' />
                  </div>
                )}

                {trademarkType === 'Slogan' && (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <label className="block text-[13px] font-bold text-gray-700 mb-2 italic">Please write out the SLOGAN EXACTLY as you want it to appear on the application.</label>
                    <input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px]" placeholder='Example: "I&apos;m lovin it", "Just do it", or "Think Differently"' />
                  </div>
                )}

                {trademarkType === 'Design / Logo' && (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-4">
                    <p className="text-[13px] text-gray-500 font-medium italic leading-relaxed">
                      You&apos;ve designed a logo to represent your business. Before sending that logo out into the world, you should consider how to protect the design, and the business behind it, through correct use of trademark law.
                    </p>
                    <label className="block text-[13px] font-bold text-gray-700 mb-2 italic">Please list the products or services offered using the mark</label>
                    <input type="text" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[14px]" placeholder="i.e t-shirts, apparel, bags, etc" />
                  </div>
                )}

                {/* Mark Usage */}
                <div className="pt-4">
                  <label className="block text-[13px] font-bold text-gray-700 mb-4 italic">Are you currently using the mark?</label>
                  <div className="grid grid-cols-2 gap-4 max-w-sm">
                    {['Yes', 'No'].map((opt) => (
                      <div 
                        key={opt}
                        onClick={() => setUsingMark(opt)}
                        className={`border-2 rounded-xl py-3 px-6 text-center cursor-pointer font-bold italic text-[13px] transition-all ${
                          usingMark === opt ? 'border-orange-500 text-gray-900' : 'border-gray-100 text-gray-400'
                        }`}
                      >
                        {opt}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-6">
                  <input type="checkbox" className="w-5 h-5 accent-orange-500 rounded border-gray-300" />
                  <p className="text-[12px] font-medium text-gray-600 italic">By clicking this checkbox, I have read <span className="text-orange-500 underline cursor-pointer">the acknowledgement</span>.</p>
                </div>
              </div>
            </div>

            {/* 4. Why Use Us Section */}
            <div className="bg-white rounded-[20px] p-8 md:p-10 border border-gray-100 shadow-sm">
              <h4 className="text-[16px] font-black text-gray-900 tracking-tight mb-8 italic">Why use us as your registered agent?</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
                <div className="flex gap-4">
                  <Zap className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <div>
                    <h5 className="text-[14px] font-bold text-gray-900 mb-1 italic">Worry Free Compliance</h5>
                    <p className="text-[11px] text-gray-500 leading-relaxed font-medium italic">
                      Use our service to guarantee your companies state compliance requirements are met. The service renews automatically each year for $119. <span className="text-orange-500 cursor-pointer underline">View Terms</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <DollarSign className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <div>
                    <h5 className="text-[14px] font-bold text-gray-900 mb-1 italic">Guaranteed Rates</h5>
                    <p className="text-[11px] text-gray-500 leading-relaxed font-medium italic">
                      Your first year is only $119 per year and is guaranteed for the life of the service.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <ShieldCheck className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <div>
                    <h5 className="text-[14px] font-bold text-gray-900 mb-1 italic">All-Inclusive</h5>
                    <p className="text-[11px] text-gray-500 leading-relaxed font-medium italic">
                      We never charge a dime in additional fees for postage paid to deliver your company&apos;s important documents.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MailX className="w-6 h-6 text-orange-500 flex-shrink-0" />
                  <div>
                    <h5 className="text-[14px] font-bold text-gray-900 mb-1 italic">Reduce Junk Mail</h5>
                    <p className="text-[11px] text-gray-500 leading-relaxed font-medium italic">
                      By having a registered agent address you can reduce the amount of junk mail received.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: ORDER SUMMARY */}
          <aside className="lg:sticky lg:top-8 z-30">
            <div className="bg-white rounded-[24px] border border-gray-100 shadow-2xl p-8">
              <h3 className="text-[20px] font-black text-gray-900 mb-8 tracking-tighter italic">Order Summary</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-[13px] font-bold text-gray-400 uppercase tracking-tighter">
                  <span>Package Fee</span>
                  <span className="text-gray-900 font-black text-[15px]">$149</span>
                </div>
                <div className="flex justify-between text-[13px] font-bold text-gray-400 uppercase tracking-tighter">
                  <span>Attorney Fee</span>
                  <span className="text-gray-900 font-black text-[15px]">$250</span>
                </div>
                <div className="flex justify-between text-[13px] font-bold text-gray-400 uppercase tracking-tighter border-b border-gray-50 pb-6">
                  <span>Federal Fee*</span>
                  <span className="text-gray-900 font-black text-[15px]">$350</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-[20px] font-black text-gray-900 tracking-tighter italic">Total</span>
                  <span className="text-4xl font-black text-gray-900 tracking-tighter">${baseTotal}</span>
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

export default TradeNameSearchForm;