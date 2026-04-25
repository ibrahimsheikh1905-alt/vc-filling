"use client";

import React, { useState } from 'react';
import { 
  FileText, 
  Receipt, 
  ChevronDown, 
  CheckCircle2, 
  Pencil
} from "lucide-react";

interface OpenSections {
  companyInfo: boolean;
  contactInfo: boolean;
  agentInfo: boolean;
  directorInfo: boolean;
  officersInfo: boolean;
}

const ReceiptsDashboard = () => {
  const [openSections, setOpenSections] = useState<OpenSections>({
    companyInfo: true,
    contactInfo: false,
    agentInfo: false,
    directorInfo: false,
    officersInfo: false
  });

  const toggleSection = (section: keyof OpenSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="flex-1 p-8 overflow-y-auto bg-[#F9FAFB] font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* 1. Order History Receipts Table */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100">
              <Receipt className="w-8 h-8 text-gray-800" />
            </div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">Order History Receipts</h1>
          </div>

          <div className="bg-white border border-gray-200 rounded-[28px] shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/50 border-b border-gray-100">
                    <th className="px-8 py-6 text-sm font-black text-gray-400 uppercase tracking-widest">Company Name</th>
                    <th className="px-6 py-6 text-sm font-black text-gray-400 uppercase tracking-widest">Order No.</th>
                    <th className="px-6 py-6 text-sm font-black text-gray-400 uppercase tracking-widest">Order Type</th>
                    <th className="px-6 py-6 text-sm font-black text-gray-400 uppercase tracking-widest">Amount</th>
                    <th className="px-6 py-6 text-center text-sm font-black text-gray-400 uppercase tracking-widest">Receipt</th>
                    <th className="px-6 py-6 text-sm font-black text-gray-400 uppercase tracking-widest">Order Date</th>
                    <th className="px-6 py-6 text-sm font-black text-gray-400 uppercase tracking-widest">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  <tr className="hover:bg-gray-50/50 transition-colors group">
                    <td className="px-8 py-8 font-black text-xl text-[#111827]">SOLVEXNEST INC.</td>
                    <td className="px-6 py-8 text-[16px] font-bold text-gray-500">226041533405</td>
                    <td className="px-6 py-8 text-[16px] font-bold text-gray-600">NONPROFIT FILING (MO)</td>
                    <td className="px-6 py-8 text-xl font-black text-[#111827]">$26.00</td>
                    <td className="px-6 py-8 text-center">
                      <button className="p-3 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
                        <FileText className="w-6 h-6 text-red-500" />
                      </button>
                    </td>
                    <td className="px-6 py-8 text-[16px] font-bold text-gray-600">Apr 15, 2026</td>
                    <td className="px-6 py-8">
                      <span className="inline-flex px-5 py-2 rounded-full text-sm font-black bg-gray-100 text-gray-500 uppercase tracking-wide">
                        Hold
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

      
          
          {/* Company Info */}
          <div className="bg-white border border-gray-200 rounded-[24px] shadow-md overflow-hidden">
            <div 
              onClick={() => toggleSection('companyInfo')}
              className="flex items-center justify-between p-10 cursor-pointer hover:bg-gray-50/50 transition-all"
            >
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 bg-[#10B981] rounded-full flex items-center justify-center shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-black text-[#111827]">Company Info</h3>
              </div>
              <div className={`w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center transition-transform duration-300 ${openSections.companyInfo ? 'rotate-180 bg-gray-50' : 'bg-white'}`}>
                <ChevronDown className="w-6 h-6 text-gray-400" />
              </div>
            </div>
            
            {openSections.companyInfo && (
              <div className="px-12 pb-16 pt-6 border-t border-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                  <InfoBlock label="Company Name" value="SOLVEXNEST INC." isBold />
                  <InfoBlock label="Company Address" value="312 Sw Greenwich Dr, Lees Summit, Missouri 64082 Us" />
                  <InfoBlock label="State Status" isStatus value="Pending" />
                  <InfoBlock label="NAICS Code" value="Educational Services (61)" />
                  <InfoBlock label="Formation State" value="Missouri" />
                  <InfoBlock label="Entity Type" value="NONPROFIT" />
                </div>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="bg-white border border-gray-200 rounded-[24px] shadow-md overflow-hidden">
            <div 
              onClick={() => toggleSection('contactInfo')}
              className="flex items-center justify-between p-10 cursor-pointer hover:bg-gray-50/50 transition-all"
            >
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 bg-[#10B981] rounded-full flex items-center justify-center shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-black text-[#111827]">Contact Info</h3>
              </div>
              <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform ${openSections.contactInfo ? 'rotate-180' : ''}`} />
            </div>
            {openSections.contactInfo && (
              <div className="px-12 pb-16 pt-6 border-t border-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-b border-gray-50 pb-12">
                  <InfoBlock label="Primary Name" value="Noraiz Husnain" />
                  <InfoBlock label="Email Address" value="frndzitme@gmail.com" />
                  <InfoBlock label="Phone Number" value="+92 3157 648283" />
                </div>
                <button className="mt-8 flex items-center gap-3 bg-[#FFF5F2] text-[#FF5722] px-8 py-4 rounded-2xl text-[16px] font-black shadow-sm hover:scale-105 transition-transform">
                  <Pencil className="w-5 h-5" /> Edit Contact Info
                </button>
              </div>
            )}
          </div>

          {/* Agent Info */}
          <div className="bg-white border border-gray-200 rounded-[24px] shadow-md overflow-hidden">
            <div 
              onClick={() => toggleSection('agentInfo')}
              className="flex items-center justify-between p-10 cursor-pointer hover:bg-gray-50/50 transition-all"
            >
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 bg-[#10B981] rounded-full flex items-center justify-center shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-black text-[#111827]">Agent Info</h3>
              </div>
              <div className={`w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center transition-transform duration-300 ${openSections.agentInfo ? 'rotate-180 bg-gray-50' : 'bg-white'}`}>
                <ChevronDown className="w-6 h-6 text-gray-400" />
              </div>
            </div>
            {openSections.agentInfo && (
              <div className="px-12 pb-16 pt-6 border-t border-gray-50">
                <div className="space-y-3">
                  <div className="text-[18px] text-[#111827] font-black uppercase">Noraiz Husnain</div>
                  <div className="text-[16px] text-[#4B5563] font-semibold">312 Sw Greenwich Dr, Lees Summit MO 64082</div>
                </div>
              </div>
            )}
          </div>

          {/* Director Info */}
          <div className="bg-white border border-gray-200 rounded-[24px] shadow-md overflow-hidden">
            <div 
              onClick={() => toggleSection('directorInfo')}
              className="flex items-center justify-between p-10 cursor-pointer hover:bg-gray-50/50 transition-all"
            >
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 bg-[#10B981] rounded-full flex items-center justify-center shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-black text-[#111827]">Director Info</h3>
              </div>
              <div className={`w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center transition-transform duration-300 ${openSections.directorInfo ? 'rotate-180 bg-gray-50' : 'bg-white'}`}>
                <ChevronDown className="w-6 h-6 text-gray-400" />
              </div>
            </div>
            {openSections.directorInfo && (
              <div className="px-12 pb-16 pt-6 border-t border-gray-50 space-y-8">
                {[
                  { id: 1, name: "Noraiz Husnain" },
                  { id: 2, name: "Haris Raza" },
                  { id: 3, name: "Haider Iqbal" }
                ].map((item) => (
                  <div key={item.id} className="flex items-start gap-8 p-6 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all group">
                    <div className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-[18px] font-black shrink-0 text-gray-400 group-hover:border-[#10B981] group-hover:text-[#10B981] transition-colors shadow-sm">
                      {item.id}
                    </div>
                    <div>
                      <p className="text-xl font-black text-[#111827]">{item.name}</p>
                      <p className="text-[16px] text-[#4B5563] font-bold mt-1 leading-relaxed">312 Sw Greenwich Dr, Lees Summit MO 64082, US</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Officers Info */}
          <div className="bg-white border border-gray-200 rounded-[24px] shadow-md overflow-hidden">
            <div 
              onClick={() => toggleSection('officersInfo')}
              className="flex items-center justify-between p-10 cursor-pointer hover:bg-gray-50/50 transition-all"
            >
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 bg-[#10B981] rounded-full flex items-center justify-center shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-black text-[#111827]">Officers Info</h3>
              </div>
              <div className={`w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center transition-transform duration-300 ${openSections.officersInfo ? 'rotate-180 bg-gray-50' : 'bg-white'}`}>
                <ChevronDown className="w-6 h-6 text-gray-400" />
              </div>
            </div>
            {openSections.officersInfo && (
              <div className="px-12 pb-16 pt-6 border-t border-gray-50">
                <div className="grid grid-cols-[350px_1fr] gap-y-8 text-[16px]">
                  <span className="font-bold text-[#111827]">President</span>
                  <span className="text-[#4B5563] font-semibold">Noraiz Husnain</span>
                  
                  <span className="font-bold text-[#111827]">Secretary</span>
                  <span className="text-[#4B5563] font-semibold">Noraiz Husnain</span>

                  <span className="font-bold text-[#111827]">Treasurer</span>
                  <span className="text-[#4B5563] font-semibold">Noraiz Husnain</span>
                  
                  <span className="font-bold text-[#111827]">Vice President</span>
                  <span className="text-[#4B5563] font-bold">Haris Raza</span>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
   
  );
};

function InfoBlock({ label, value, isBold = false, isStatus = false }: {
  label: string;
  value: string;
  isBold?: boolean;
  isStatus?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-[15px] font-black text-gray-400 uppercase tracking-widest">{label}</label>
      {isStatus ? (
        <span className="inline-flex px-4 py-1.5 rounded-full text-sm font-black bg-green-50 text-green-700 border border-green-100">
          {value}
        </span>
      ) : (
        <p className={`text-[17px] ${isBold ? 'font-black text-[#111827]' : 'font-bold text-gray-600'} leading-relaxed`}>
          {value}
        </p>
      )}
    </div>
  )
}

export default ReceiptsDashboard;

