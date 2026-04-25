"use client";

import React from 'react';

export default function RecommendationCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 font-sans antialiased">
      
      {/* Card 1: Registered Agent */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full">
        <div className="mb-6 relative h-32 flex items-center justify-center">
          <div className="w-20 h-20 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <svg className="w-10 h-10 text-gray-400 group-hover:text-orange-500 transition-colors" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="absolute top-0 right-0 bg-red-50 text-red-600 text-[10px] px-2 py-1 rounded-lg font-bold border border-red-100 flex items-center gap-1 shadow-sm">
            Action Required
          </div>
        </div>
        
        <h4 className="text-lg font-bold text-gray-900 mb-2">Registered Agent</h4>
        <p className="text-gray-500 text-[13px] font-medium mb-6 leading-relaxed flex-grow">
          A registered agent is required by law to maintain your business's legal standing with the state.
        </p>
        
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-xl text-sm font-bold transition-all shadow-sm shadow-orange-100 active:scale-[0.98]">
          File Now
        </button>
      </div>

      {/* Card 2: Credit Card */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full">
        <div className="mb-6 h-32 flex items-center justify-center">
          <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl p-4 w-4/5 shadow-lg group-hover:scale-105 transition-transform duration-300">
            <div className="flex justify-between text-[8px] text-white/70 mb-4">
              <span>PLATINUM BUSINESS</span>
              <div className="w-6 h-4 bg-yellow-400/50 rounded-sm"></div>
            </div>
            <div className="text-white font-mono text-[10px] mb-2 tracking-widest">**** **** **** 2345</div>
            <div className="text-white font-bold text-[10px] uppercase truncate">Noraiz Husnain</div>
          </div>
        </div>
        
        <h4 className="text-lg font-bold text-gray-900 mb-2">Credit Card</h4>
        <p className="text-gray-500 text-[13px] font-medium mb-6 leading-relaxed flex-grow">
          Fund operations, invest in new opportunities, or provide needed cash flow for your business.
        </p>
        
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-xl text-sm font-bold transition-all shadow-sm shadow-orange-100 active:scale-[0.98]">
          Learn More
        </button>
      </div>

      {/* Card 3: S-Corp Calculator */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full">
        <div className="mb-6 h-32 flex items-center justify-center">
          <div className="w-full bg-gray-50 rounded-xl p-4 border border-gray-100 group-hover:scale-105 transition-transform duration-300">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[10px] font-bold text-gray-400">CALCULATOR</span>
              <div className="h-1.5 w-8 bg-orange-400 rounded-full"></div>
            </div>
            <div className="text-center">
              <div className="text-xs font-bold text-emerald-600 bg-emerald-50 py-1 rounded-md mb-2">Save $27,650/yr</div>
              <div className="flex gap-1 justify-center">
                {[1, 2, 3, 4].map(i => <div key={i} className="w-4 h-4 bg-gray-200 rounded-sm"></div>)}
              </div>
            </div>
          </div>
        </div>
        
        <h4 className="text-lg font-bold text-gray-900 mb-2">S-Corp Calculator</h4>
        <p className="text-gray-500 text-[13px] font-medium mb-6 leading-relaxed flex-grow">
          Discover how much you can save by electing S-Corp status for your business classification.
        </p>
        
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-xl text-sm font-bold transition-all shadow-sm shadow-orange-100 active:scale-[0.98]">
          Learn More
        </button>
      </div>

      {/* Card 4: S-Corp Election */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full">
        <div className="mb-6 h-32 flex items-center justify-center">
          <div className="w-20 h-24 bg-blue-50 border-2 border-blue-100 rounded-lg relative shadow-sm group-hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center">
            <div className="bg-blue-600 text-white text-[8px] font-bold px-2 py-0.5 rounded absolute top-2">FORM 2553</div>
            <div className="space-y-1 w-full px-3 mt-4">
              <div className="h-1 bg-blue-100 w-full"></div>
              <div className="h-1 bg-blue-100 w-4/5"></div>
              <div className="h-1 bg-blue-100 w-full"></div>
            </div>
          </div>
        </div>
        
        <h4 className="text-lg font-bold text-gray-900 mb-2">S-Corp Election</h4>
        <p className="text-gray-500 text-[13px] font-medium mb-6 leading-relaxed flex-grow">
          The 2553 is the form used to obtain the S-Corp status classification with the IRS.
        </p>
        
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-xl text-sm font-bold transition-all shadow-sm shadow-orange-100 active:scale-[0.98]">
          File Now
        </button>
      </div>

    </div>
  );
}