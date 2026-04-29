"use client";

import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";

const BusinessFilings = () => {
  const stateFilings = [
    { title: "Amendment", desc: "Filed if a company requires changes to membership, addresses or company name.", link: "/dashboard/Amendment" },
{ title: "File Annual Report", desc: "The majority of states require that companies file periodic reports that affirm the current information of the companies members, directors, and business address.", link: "/dashboard/compliance" },
    { title: "Assumed Business Name", desc: "Filed if a company requires assumed business/fictitious name.", link: "/dashboard/Registrationoffictitious" },
    { title: "Certificate of Good Standing", desc: "Required by governmental and private agencies to validate a companies status in order to facilitate specified transactions.", link: "/dashboard/certificateofgood" },
    { title: "Dissolution", desc: "This is a required submission detailing the dissolution of your company with the state.", link: "/dashboard/Dissolution" },
    { title: "Foreign Qualification", desc: "Filed when you need to expand your entity to new states.", link: "/dashboard/ForeignQualification" },
    { title: "Change Registered Agent", desc: "Use to update the registered agent on file with the state of formation.", link: "/dashboard/ChangeRegister" },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] py-12 px-4 font-sans">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* --- HEADER SECTION --- */}
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-center w-full gap-8">
          <div className="text-left space-y-3 flex-1">
            <div className="flex items-center gap-2 text-gray-400 text-[11px] font-bold uppercase tracking-widest">
              <span className="text-orange-500 text-lg">💼</span> State & IRS Filings
            </div>
            <h1 className="text-3xl font-bold text-[#1a1a1a] tracking-tight leading-tight">
              Simplify Your Business Filings
            </h1>
            <p className="text-[14px] text-gray-500 max-w-lg leading-relaxed">
              As your business evolves, Bizee ensures you have the tools and support to manage your ongoing requirements with ease and confidence.
            </p>
          </div>
          
          <div className="shrink-0">
             <div className="bg-gradient-to-br from-[#FF4500] to-[#E63E00] p-6 rounded-2xl text-white text-center shadow-lg shadow-orange-100 flex flex-col items-center min-w-[150px]">
                <div className="bg-white/20 p-2 rounded-full mb-2">
                  <Check className="w-6 h-6 stroke-[3px]" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[2px]">Compliance</span>
                <div className="flex gap-1 mt-2 text-orange-100">
                  ★ ★ ★
                </div>
             </div>
          </div>
        </div>

        {/* --- STATE FILINGS SECTION --- */}
        <div className="space-y-4 pt-4">
          <h2 className="text-xl font-bold text-gray-900 text-left pl-1">State Filings</h2>

          <div className="space-y-3">
            {stateFilings.map((filing, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-row items-center justify-between gap-6 hover:border-orange-100 transition-all group">
                <div className="flex items-start gap-5 text-left flex-1">
                  <div className="mt-1 w-6 h-6 rounded-lg border-2 border-orange-100 flex items-center justify-center shrink-0 group-hover:bg-orange-50 transition-colors">
                    <Check className="w-3.5 h-3.5 text-orange-500 stroke-[3px]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-[15px] text-gray-900 leading-none">{filing.title}</h3>
                    <p className="text-[12px] text-gray-400 max-w-2xl leading-relaxed">{filing.desc}</p>
                  </div>
                </div>
                
                {/* File Now Link Button */}
                <Link 
                  href={filing.link} 
                  className="w-44 bg-[#FF4500] text-white py-2.5 rounded-lg text-[13px] font-bold shadow-md shadow-orange-50 hover:bg-[#E63E00] transition-all shrink-0 text-center flex items-center justify-center no-underline"
                >
                  File Now
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* --- FEDERAL & IRS FILINGS SECTION --- */}
        <div className="space-y-6 pt-10 text-left">
          <div className="space-y-2 pl-1">
            <h2 className="text-xl font-bold text-gray-900">Federal & IRS Filings</h2>
            <p className="text-[11px] text-gray-400 font-medium italic">
              Please note that Federal & IRS Filings are not included in the Bizee State Filings Bundle.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-5 text-left flex-1">
              <div className="mt-1 w-6 h-6 rounded-lg border-2 border-orange-100 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 text-orange-500 stroke-[3px]" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-[15px] text-gray-900 leading-none">EIN / Tax ID Number</h3>
                <p className="text-[12px] text-gray-400 max-w-2xl leading-relaxed">
                  An EIN is required to open a bank account, file taxes and submit payroll taxes.
                </p>
              </div>
            </div>
            
            {/* EIN Link Button */}
            <Link 
              href="/dashboard/EINTAXIDNumber" 
              className="w-44 bg-[#FF4500] text-white py-2.5 rounded-lg text-[13px] font-bold shadow-md shadow-orange-50 hover:bg-[#E63E00] transition-all shrink-0 text-center flex items-center justify-center no-underline"
            >
              File Now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BusinessFilings;