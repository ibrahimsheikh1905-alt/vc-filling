"use client";

import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const VirtualMailboxBanner = () => {
  return (
    <div className="w-full bg-white rounded-[32px] border border-gray-100 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm mb-8">
      
      {/* Left - Icon + Text */}
      <div className="flex items-center gap-6 flex-1">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#FFF9F5] flex items-center justify-center flex-shrink-0">
          <Mail className="w-8 h-8 text-[#FF5722]" strokeWidth={1.5} />
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
        <button className="bg-[#FF5722] hover:bg-[#F4511E] text-white font-bold py-3 px-8 rounded-xl flex items-center gap-2 shadow-lg hover:shadow-xl transition-all uppercase text-sm tracking-wide">
          GET STARTED
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default VirtualMailboxBanner;

