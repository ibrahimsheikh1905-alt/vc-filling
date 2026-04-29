"use client";

import React from 'react';
import { X, CheckCircle2, Mail } from 'lucide-react';

interface DomainEmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DomainEmailModal({ 
  isOpen, 
  onClose 
}: DomainEmailModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Super Compact Container: max-w-xl (576px) centers everything perfectly */}
      <div className="relative bg-white w-full max-w-xl mx-auto rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        <button
          onClick={onClose}
          className="absolute z-20 top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors p-1"
        >
          <X className="w-6 h-6" />
        </button>

        {/* MAIN CENTERING CONTAINER */}
        <div className="flex flex-col items-center justify-center p-8 lg:p-10 w-full">
          
          {/* Top Left Decorative Visual - Compact & Balanced */}
          <div className="w-full flex justify-center mb-8 relative">
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-0 bg-[#EBFBF5] w-[160px] h-[160px] rounded-bl-[150px] z-0 -translate-x-10 -translate-y-8" />

            {/* Float-able icon box */}
            <div className="relative z-10 bg-white/95 w-[150px] py-6 px-4 rounded-[20px] shadow-md border border-gray-50 flex flex-col items-center justify-center -translate-x-10">
              <Mail className="w-14 h-14 text-emerald-500 mb-3 shrink-0 stroke-[1.5px]" />
              <h3 className="text-xs font-bold text-gray-900 text-center leading-tight">
                Domain & <br /> Email
              </h3>
            </div>
          </div>

          {/* CONTENT BLOCK - Centered alignment */}
          <div className="w-full flex flex-col items-center text-center max-w-[380px]">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full text-[10px] font-bold text-emerald-700 mb-4 uppercase tracking-wider">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
              Free With Your Package
            </div>

            {/* Heading Section */}
            <h2 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">
              Professional Presence
            </h2>
            <p className="text-gray-600 text-sm font-medium mb-8 leading-relaxed">
              Get your custom domain and professional email setup instantly.
            </p>

            {/* Benefits List - Perfectly Centered list with left-aligned items */}
            <div className="space-y-4 mb-10 w-full flex flex-col items-center">
              {[
                { title: "Custom Domain", desc: "yourcompany.com ready to use" },
                { title: "Professional Email", desc: "info@yourcompany.com included" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 w-full max-w-[270px]">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
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
                className="w-full bg-[#FF4500] hover:bg-[#E53E00] text-white font-bold py-3.5 px-6 rounded-2xl text-[15px] transition-all active:scale-95 shadow-md shadow-orange-100"
              >
                Get Started
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