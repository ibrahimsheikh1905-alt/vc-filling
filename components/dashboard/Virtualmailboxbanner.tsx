"use client";

import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";

const VirtualMailboxBanner = () => {
  return (
    <div className="w-full bg-white rounded-[32px] border border-gray-100 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm mb-8">

      {/* Left - Icon + Text */}
      <div className="flex items-center gap-6 flex-1">
        <div className={`${LOGO_GRADIENT} w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md shadow-[#2B93C9]/25`}>
          <Mail className="w-8 h-8 text-white" strokeWidth={1.5} />
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
            Virtual Mailbox and Mail Scanning Service
          </h2>
          <p className="text-gray-600 text-sm md:text-base font-medium">
            Get a Fixed Street Address and Access to Your Correspondence Anywhere
          </p>
        </div>
      </div>

      {/* Right - Button */}
      <div className="flex-shrink-0">
        <button onClick={() => window.location.href = '/dashboard/VirtualAddress'} className={`${LOGO_GRADIENT} group relative overflow-hidden text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:scale-[1.03] hover:brightness-110 uppercase text-sm tracking-wide cursor-pointer`}>
          <span className="absolute inset-x-0 top-0 h-1/2 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
          <span className="absolute -left-16 top-0 h-full w-10 -skew-x-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />
          <span className="relative z-10 flex items-center gap-2">
            GET STARTED
            <ArrowRight className="w-4 h-4" />
          </span>
        </button>

      </div>
    </div>
  );
};

export default VirtualMailboxBanner;

