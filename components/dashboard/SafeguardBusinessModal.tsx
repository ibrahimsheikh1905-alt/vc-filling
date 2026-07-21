"use client";

import React from 'react';
import { X, CheckCircle2, Shield } from 'lucide-react';

const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";

interface SafeguardBusinessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SafeguardBusinessModal({ 
  isOpen, 
  onClose 
}: SafeguardBusinessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Super Compact Container: max-w-xl (576px) perfect for dashboard popups */}
      <div className="relative bg-white w-full max-w-xl mx-auto rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        <button
          onClick={onClose}
          className="absolute z-20 top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors p-1"
        >
          <X className="w-6 h-6" />
        </button>

        {/* MAIN CENTERING CONTAINER */}
        <div className="flex flex-col items-center justify-center p-8 lg:p-10 w-full">
          
          {/* Top Left Decorative Visual - Safeguard/Insurance Theme */}
          <div className="w-full flex justify-center mb-8 relative">
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-0 bg-cyan-50 w-[160px] h-[160px] rounded-bl-[150px] z-0 -translate-x-10 -translate-y-8" />

            {/* Float-able icon box */}
            <div className="relative z-10 bg-white/95 w-[150px] py-6 px-4 rounded-[20px] shadow-md border border-gray-50 flex flex-col items-center justify-center -translate-x-10">
              <Shield className="w-14 h-14 text-[#2B93C9] mb-3 shrink-0 stroke-[1.5px]" />
              <h3 className="text-xs font-bold text-gray-900 text-center leading-tight">
                Business <br /> Safeguard
              </h3>
            </div>
          </div>

          {/* CONTENT BLOCK - Centered alignment */}
          <div className="w-full flex flex-col items-center text-center max-w-[380px]">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full text-[10px] font-bold text-emerald-700 mb-4 uppercase tracking-wider">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
              Included With Your Package
            </div>

            {/* Heading Section */}
            <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
              Protect What Matters
            </h2>
            <p className="text-gray-600 text-sm font-medium mb-8 leading-relaxed">
              Business insurance tailored for small businesses like yours.
            </p>

            {/* Benefits List - Perfectly Centered list with left-aligned items */}
            <div className="space-y-4 mb-10 w-full flex flex-col items-center">
              {[
                { title: "General Liability", desc: "Covers accidents and damage" },
                { title: "Fast Claims", desc: "Quick processing & payment" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 w-full max-w-[270px]">
                  <CheckCircle2 className="w-5 h-5 text-[#2B93C9] mt-0.5 flex-shrink-0" />
                  <div className="text-left flex-1">
                    <h4 className="font-bold text-gray-900 text-[14px] leading-tight">{item.title}</h4>
                    <p className="text-gray-400 text-[11px] mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons - Full width within centered block */}
            <div className="flex flex-col gap-2.5 w-full">
              <button
                onClick={onClose}
                className={`${LOGO_GRADIENT} group relative overflow-hidden w-full text-white font-bold py-3.5 px-6 rounded-full text-[15px] transition-all duration-300 hover:scale-[1.03] hover:brightness-110 shadow-md shadow-cyan-100`}
              >
                <span className="absolute inset-x-0 top-0 h-1/2 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
                <span className="absolute -left-16 top-0 h-full w-10 -skew-x-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />
                <span className="relative z-10">Get Protected</span>
              </button>
              <button
                onClick={onClose}
                className="w-full border border-gray-100 hover:bg-gray-50 text-gray-400 font-bold py-3.5 px-6 rounded-2xl text-[15px] transition-all"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}