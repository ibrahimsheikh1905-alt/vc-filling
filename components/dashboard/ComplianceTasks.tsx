"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import { 
  AlertCircle, 
  ChevronDown, 
  ChevronUp, 
  History, 
  ArrowRight,
  CheckCircle2,
  Calendar,
  Shield,
  FileText,
  X 
} from "lucide-react";

export default function ComplianceTasks() {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-8 font-sans antialiased text-left relative p-8 bg-gray-50 min-h-screen">
      
      {/* 1. Active Task Card */}
      <div className="bg-white border border-gray-100 rounded-[20px] p-7 shadow-sm max-w-[340px]">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <span>State Requirement</span>
              <span className="opacity-40">•</span>
              <span>Missouri</span>
            </div>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="text-orange-500 bg-orange-50 p-0.5 rounded-full hover:bg-orange-100 transition-colors"
            >
              <AlertCircle className="w-3.5 h-3.5" />
            </button>
          </div>
          
          <div className="space-y-0.5">
            <h2 className="text-[20px] font-bold text-gray-900 tracking-tight">Annual Report</h2>
            <p className="text-[14px] text-gray-500 font-medium pt-2">Total fee: $109</p>
            <p className="text-[14px] text-gray-500 font-medium">Due: August 31, 2026</p>
          </div>

          <div className="pt-2">
            <button 
              onClick={() => router.push('/dashboard/annual-report')} 
              className="w-full bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-orange-100"
            >
              Start Filing <ArrowRight className="w-4 h-4 stroke-[3px]" />
            </button>
          </div>
        </div>
      </div>

      {/* --- INFO MODAL (POPUP) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg rounded-[32px] p-10 shadow-2xl relative animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-8 right-8 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-8">
              <div className="flex items-center gap-2 text-[13px] font-bold text-gray-400 uppercase tracking-wider">
                <span>State Requirement</span>
                <span className="opacity-40">•</span>
                <span>Missouri</span>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-800">Annual Report</h2>
                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-2 text-[19px]">
                    <span className="font-bold text-gray-500">Frequency:</span>
                    <span className="text-gray-400 font-medium">Annually</span>
                  </div>
                  <div className="flex items-center gap-2 text-[19px]">
                    <span className="font-bold text-gray-500">Due Date:</span>
                    <span className="text-gray-400 font-medium">August 31st</span>
                  </div>
                  <div className="flex items-center gap-2 text-[19px]">
                    <span className="font-bold text-gray-500">State Fee:</span>
                    <span className="text-gray-400 font-medium">$10</span>
                  </div>
                  <div className="flex items-center gap-2 text-[19px]">
                    <span className="font-bold text-gray-500">Filing Fee:</span>
                    <span className="text-gray-400 font-medium">$99</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-full py-4 mt-4 bg-[#FFF5F2] text-[#FF5722] font-bold rounded-2xl hover:bg-orange-100 transition-colors text-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Expandable Info */}
      <div className="bg-white border border-gray-100 rounded-[20px] shadow-sm overflow-hidden max-w-5xl">
        <div 
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-8 flex items-center justify-between cursor-pointer hover:bg-gray-50/20 transition-colors"
        >
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center border border-orange-100">
              <CheckCircle2 className="w-6 h-6 text-[#FF5722]" />
            </div>
            <div>
              <h3 className="font-bold text-[17px] text-gray-900 tracking-tight">Missouri: Annual Report</h3>
              <p className="text-gray-500 text-sm font-medium mt-0.5">Frequency: <span className="text-gray-700">Annually</span></p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400">
              {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
        </div>
        
        {isExpanded && (
          <div className="px-8 pb-10 pt-4 border-t border-gray-50 ml-16 animate-in fade-in slide-in-from-top-2 duration-300">
            <ul className="space-y-4">
              <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <Calendar className="w-5 h-5 text-[#FF5722]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">Due Date</p>
                  <p className="text-xl font-bold text-gray-900">August 31st</p>
                </div>
              </li>
              <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <span className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <Shield className="w-5 h-5 text-[#FF5722]" />
                </span>
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">State Fee</p>
                  <p className="text-xl font-bold text-gray-900">$10</p>
                </div>
              </li>
              <li className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <FileText className="w-5 h-5 text-[#FF5722]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">Filing Fee</p>
                  <p className="text-xl font-bold text-gray-900">$99</p>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* 3. Upgrade Banner */}
      <div className="relative bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-[24px] p-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm px-6 py-1 rounded-full border border-orange-200 text-orange-600 font-black text-sm uppercase tracking-wider">
          BEST DEAL
        </div>
        <div className="flex flex-col lg:flex-row gap-12 items-start lg:items-center pt-8">
          <div className="flex-1 space-y-4">
            <h3 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
              Upgrade to Unlimited State Filings
            </h3>
            <p className="text-lg text-gray-600 font-medium leading-relaxed max-w-lg">
              Receive full year of unlimited access to all state filing services and save hundreds every year.
            </p>
          </div>
          
          <div className="flex-1 grid grid-cols-2 gap-4 min-w-0">
            {[
              "Annual Report", "Articles of Amendment", "DBA", "Certificate of Good Standing",
              "Foreign Qualification", "Dissolution", "Reinstatement", "Change of Registered Agent"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="w-5 h-5 bg-[#FF5722] rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-3 h-3 text-white stroke-[3px]" />
                </div>
                <span className="font-semibold text-gray-800 text-sm whitespace-nowrap">{item}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center pt-8">
            <button onClick={() => router.push('/dashboard/annual-report')} className="bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold py-4 px-12 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 text-lg">
            Buy Now <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* 4. Filing History Footer */}
      <div className="bg-white border border-gray-100 rounded-[24px] p-8 flex items-center justify-between max-w-4xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-md">
            <History className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-900 mb-1">Filing History</h4>
            <p className="text-gray-600 font-medium">To see the documents you have already filed, visit your Order History</p>
          </div>
        </div>
        <button onClick={() => router.push('/dashboard/226041533405')} className="bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold py-3 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
          Go to Order History
        </button>
      </div>
    </div>
  );
}
