 "use client";

import React from 'react';
import { Package, Check, FileText } from "lucide-react";

export default function OrderStatus() {
  return (
    <div className="bg-[#F9FAFB] min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="flex items-center gap-3 mb-8">
          <Package className="w-5 h-5 text-[#FF5722]" strokeWidth={2.5} />
          <h1 className="text-s font-black uppercase tracking-widest text-gray-900">
            ORDER STATUS
          </h1>
        </div>

        {/* Top Card - Details (Left) & Progress (Right) */}
        <div className="bg-white border border-gray-100 rounded-[24px] shadow-sm p-10 mb-6">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            
            {/* Left Side: Details Section - Positioned Lower */}
            <div className="w-full lg:flex-1 text-left -pt-4"> 
              <h2 className="text-xl font-bold text-gray-900 mb-6">Basic (MO)</h2>
              <div className="space-y-2 text-[14px]">
                <p className="text-gray-500 font-medium">
                  Order Number: <span className="text-gray-900 font-bold ml-1">226041533405</span>
                </p>
                <p className="text-gray-500 font-medium">
                  Date Ordered: <span className="text-gray-900 font-bold ml-1">Apr. 15, 2026</span>
                </p>
              </div>
            </div>

            {/* Right Side: Progress Bar Section - Positioned Higher */}
            <div className="w-full lg:flex-1 flex flex-col items-end -mt-28"> 
              <div className="flex items-center justify-between relative mb-6 w-full max-w-[350px] lg:max-w-md px-1">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-100 -translate-y-1/2 z-0" />
                
                {/* Darker Dots */}
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="relative z-10 w-5 h-5 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                  </div>
                ))}
                
                {/* Final Node */}
                <div className="relative z-10 w-8 h-8 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center shadow-sm">
                  <Check className="w-4 h-4 text-gray-300" strokeWidth={3} />
                </div>
              </div>
              
              {/* Status Note */}
              <div className="w-full max-w-[350px] lg:max-w-md text-left">
                <p className="text-[13px] text-gray-500 font-medium">
                  <span className="text-gray-900 font-bold">Hold.</span> Your order is currently on hold
                </p>
              </div>
            </div>
          </div>
        </div>

      {/* Bottom Card */}
<div className="bg-white border border-gray-100 rounded-[24px] shadow-sm p-10 mt-6">
  {/* Flex container: items-center vertical alignment ke liye, justify-between horizontal spacing ke liye */}
  <div className="flex flex-row items-center justify-between w-full gap-4">
    
    {/* Left Side: Icon + Text Group */}
    <div className="flex items-center gap-6">
      {/* Icon */}
      <div className="shrink-0">
        <FileText className="w-10 h-10 text-gray-800" strokeWidth={1.5} />
      </div>
      
      {/* Text block */}
      <div className="flex flex-col text-left">
        <h3 className="text-[20px] lg:text-[20px] font-bold text-gray-900 leading-tight">
          Need a physical copy of your filed documents?
        </h3>
        <p className="text-[14px] lg:text-[15px] text-gray-400 font-medium mt-1">
          We will deliver a digital version of your documents, but can also send a copy via Fedex if needed
        </p>
      </div>
    </div>

    {/* Right Side: Button - Isay 'shrink-0' diya hai taake ye line mein hi rahe */}
    <div className="shrink-0">
      <button onClick={() => window.location.href = '/dashboard/mail-documents'} className="whitespace-nowrap bg-[#FF5722] hover:bg-[#F4511E] text-white font-black py-4 px-10 rounded-xl transition-all text-xs tracking-widest shadow-lg shadow-orange-100 uppercase cursor-pointer">
        MAIL MY DOCUMENTS - $25
      </button>

    </div>
    
  </div>
</div>

      </div>
    </div>
  );
}

