import React from 'react';
import { ArrowRight } from 'lucide-react';

const VirtualMailboxBannerFixed = () => {
  return (
    <div className="w-full bg-white rounded-[32px] border border-gray-100 overflow-hidden flex flex-row items-stretch shadow-sm min-h-[350px]">
      
      {/* LEFT SIDE: Text Content */}
      <div className="w-1/2 p-10 md:p-14 flex flex-col justify-center items-start z-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#111827] mb-4 leading-tight">
          Virtual Mailbox and <br /> 
          Mail Scanning Service
        </h1>
        <p className="text-[#6B7280] text-lg mb-8 max-w-[380px] font-medium leading-relaxed">
          Get a Fixed Street Address and Access to Your Correspondence Anywhere
        </p>
        
        <button onClick={() => window.location.href = '/dashboard/VirtualAddress'} className="bg-[#FF5722] hover:bg-[#F4511E] text-white font-bold py-4 px-10 rounded-2xl flex items-center gap-3 transition-all shadow-lg shadow-orange-100 cursor-pointer">
          GET STARTED 
          <ArrowRight className="w-5 h-5" />
        </button>

      </div>

      {/* RIGHT SIDE: Envelopes (Bilkul Title ke Samne) */}
      <div className="w-1/2 relative bg-[#FF5722] overflow-hidden" 
           style={{ clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)' }}>
        
        {/* Dotted World Map Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotMap" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotMap)" />
        </svg>

        {/* Floating Envelopes Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center scale-110">
            {/* Main Envelope */}
            <div className="relative w-44 h-28 bg-white rounded-lg shadow-2xl transform -rotate-12 -translate-x-8 flex flex-col p-4">
              <div className="w-10 h-1.5 bg-gray-100 rounded mb-2"></div>
              <div className="w-20 h-1.5 bg-gray-50 rounded"></div>
              <div className="mt-auto self-end w-6 h-6 bg-orange-50 rounded-full"></div>
            </div>
            
            {/* Secondary Envelopes (Stacked) */}
            <div className="absolute w-40 h-26 bg-white/95 rounded-lg shadow-xl transform rotate-6 translate-x-12 -translate-y-10 -z-10"></div>
            <div className="absolute w-36 h-24 bg-white/85 rounded-lg shadow-lg transform rotate-[-5deg] translate-x-10 translate-y-12 -z-20"></div>
          </div>
        </div>

        {/* Glossy Finish */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent"></div>
      </div>
      
    </div>
  );
};

export default VirtualMailboxBannerFixed;