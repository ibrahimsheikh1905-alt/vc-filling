"use client";

import { CheckCircle, ShoppingBag } from 'lucide-react';

const checklistItems = [
  "Annual Report",
  "Articles of Amendment", 
  "DBA",
  "Certificate of Good Standing",
  "Foreign Qualification",
  "Dissolution",
  "Reinstatement",
  "Change of Registered Agent"
];

export default function UpgradeBanner() {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-3xl p-8 shadow-xl mb-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8 mb-8">
          <div className="flex-1">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Upgrade to Unlimited State Filings
            </h3>
            <p className="text-xl lg:text-2xl font-medium opacity-95 mb-8 leading-relaxed">
              Receive full year of unlimited access to all state filing services and save hundreds every year.
            </p>
          </div>
          
          {/* Buy Now Button */}
          <button className="bg-white text-orange-600 hover:bg-orange-50 px-10 py-5 rounded-3xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all flex items-center gap-3 whitespace-nowrap order-first lg:order-last lg:self-start mt-6 lg:mt-0">
            <ShoppingBag className="w-6 h-6" />
            Buy Now →
          </button>
        </div>

        {/* 2-Column Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
              <CheckCircle className="w-6 h-6 flex-shrink-0 opacity-90" />
              <span className="font-semibold text-lg">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

