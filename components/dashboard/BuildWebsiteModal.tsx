"use client";

import React from 'react';
import { X, CheckCircle2, Globe } from 'lucide-react';

interface BuildWebsiteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BuildWebsiteModal({ 
  isOpen, 
  onClose 
}: BuildWebsiteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Width fixed: max-w-xl (576px) perfectly fits the design and centers it */}
      <div className="relative bg-white w-full max-w-xl mx-auto rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        <button
          onClick={onClose}
          className="absolute z-20 top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors p-1"
        >
          <X className="w-6 h-6" />
        </button>

        {/* --- MAIN CENTERING CONTAINER --- */}
        {/* Isme main 'flex-col items-center' lagaya hai taaki sab perfect center mein ho */}
        <div className="flex flex-col items-center justify-center p-8 lg:p-10 w-full">
          
          {/* Top Left Decorative Visual: Chota aur symmetry ke saath */}
          {/* Isko static position kiya hai taaki form centered rahe */}
          <div className="w-full flex justify-center mb-8 relative">
            {/* Background Light Blue Box */}
            <div className="absolute top-0 left-0 bg-[#F3F7FF] w-[180px] h-[180px] rounded-bl-[200px] z-0 -translate-x-12 -translate-y-10" />

            {/* Float-able icon box - matching image symmetry */}
            <div className="relative z-10 bg-white/95 w-[160px] py-7 px-4 rounded-[20px] shadow-md border border-gray-50 flex flex-col items-center justify-center -translate-x-14">
              <Globe className="w-16 h-16 text-blue-500 mb-3 shrink-0 stroke-[1.5px]" />
              <h3 className="text-sm font-bold text-gray-900 text-center leading-tight">
                Build Your <br /> Website
              </h3>
            </div>
          </div>

          {/* --- CENTERING THE CONTENT BLOCK --- */}
          {/* Poore content block ko center-aligned karne ke liye */}
          <div className="w-full flex flex-col items-center text-center max-w-[400px]">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full text-[10px] font-bold text-emerald-700 mb-4 uppercase tracking-wider">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
              Free With Your Package
            </div>

            {/* Main Text */}
            <h2 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">
              Get Online Today
            </h2>
            <p className="text-gray-600 text-sm font-medium mb-8 leading-relaxed max-w-[320px]">
              Launch a professional website in minutes.
            </p>

            {/* Benefits List - Tightening spacing and keeping left-aligned benefits content, but list overall is centered */}
            <div className="space-y-4 mb-10 w-full flex flex-col items-center">
              {[
                { title: "Mobile Responsive", desc: "Perfect on all screens" },
                { title: "SEO Optimized", desc: "Rank higher on Google" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 w-full max-w-[280px]">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <div className="text-left flex-1">
                    <h4 className="font-bold text-gray-900 text-[14px] leading-tight">{item.title}</h4>
                    <p className="text-gray-400 text-[11px] mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* --- Buttons perfectly aligned with text padding --- */}
            {/* Buttons ab text ke saath aligned hain aur width 100% hai text constraints ke andar */}
            <div className="flex flex-col gap-2 w-full">
              <button
                className="w-full bg-[#FF4500] hover:bg-[#E53E00] text-white font-bold py-3.5 px-6 rounded-2xl text-[15px] transition-all active:scale-95 shadow-md shadow-orange-100 hover:shadow-orange-200"
              >
                Start Building
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