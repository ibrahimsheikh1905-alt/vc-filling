"use client";

import React, { useState } from 'react';
import { Check, ChevronDown, Pencil } from "lucide-react";

// 1. Line 6 fix: Props ki interface define ki hai taake TypeScript error na de
interface AccordionItemProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const AccordionItem = ({ title, isOpen, onToggle, children }: AccordionItemProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-[22px] shadow-lg overflow-hidden mb-8 transition-all duration-300">
      <div 
        onClick={onToggle}
        className="flex items-center justify-between px-10 py-10 cursor-pointer hover:bg-gray-50/80 transition-colors"
      >
        <div className="flex items-center gap-5">
          <div className="w-8 h-8 rounded-full bg-[#10B981] flex items-center justify-center shrink-0 shadow-sm">
            <Check className="w-5 h-5 text-white" strokeWidth={4} />
          </div>
          <h3 className="text-[18px] font-bold text-[#111827] tracking-tight">
            {title}
          </h3>
        </div>
        <div className={`w-12 h-12 rounded-full bg-white flex items-center justify-center border border-gray-100 shadow-sm transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <ChevronDown className="w-6 h-6 text-gray-500" />
        </div>
      </div>

      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-12 pb-16 pt-6 border-t border-gray-50">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function CompanyInfo() {
  // 2. Line 37 fix: State ko string type di hai aur grid arbitrary values ko handle kiya hai
  const [openSection, setOpenSection] = useState<string>("Company Info");
  
  const toggle = (section: string) => setOpenSection(openSection === section ? "" : section);

  return (
    <div className="max-w-7xl mx-auto p-16 bg-[#F9FAFB] min-h-screen font-sans">
      
      {/* 1. Company Info */}
      <AccordionItem title="Company Info" isOpen={openSection === "Company Info"} onToggle={() => toggle("Company Info")}>
        <div className="space-y-10">
          <div className="text-[20px] font-black text-[#111827] mb-8 uppercase tracking-widest">
            SOLVEXNEST INC.
          </div>
          {/* Grid arbitrary value line 37 fix */}
          <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-y-7">
            <span className="text-[16px] font-bold text-[#111827]">Company Address</span>
            <span className="text-[16px] text-[#4B5563] font-semibold">312 Sw Greenwich Dr, Lees Summit, Missouri 64082 Us</span>
            
            <span className="text-[16px] font-bold text-[#111827]">State Status</span>
            <span className="text-[16px] text-[#4B5563] font-bold bg-green-50 px-4 py-1.5 rounded-full w-fit">Pending</span>
            
            <span className="text-[16px] font-bold text-[#111827]">Naics Code</span>
            <span className="text-[16px] text-[#4B5563] font-semibold">Educational Services (61)</span>

            <span className="text-[16px] font-bold text-[#111827]">Naics Subcode</span>
            <span className="text-[16px] text-[#4B5563] font-semibold">Educational Support Services (611710)</span>

            <span className="text-[16px] font-bold text-[#111827]">Formation State</span>
            <span className="text-[16px] text-[#4B5563] font-semibold">Missouri</span>

            <span className="text-[16px] font-bold text-[#111827]">Entity Type</span>
            <span className="text-[16px] text-[#4B5563] font-semibold">NONPROFIT</span>

            <span className="text-[16px] font-bold text-[#111827]">Formation Date</span>
            <span className="text-[16px] text-[#4B5563] font-semibold">N/A</span>

            <span className="text-[16px] font-bold text-[#111827]">Entity ID</span>
            <span className="text-[16px] text-[#4B5563] font-semibold">N/A</span>

            <span className="text-[16px] font-bold text-[#111827]">EIN (Tax ID Number)</span>
            <span className="text-[16px] text-[#4B5563] font-medium">N/A</span>
          </div>
        </div>
      </AccordionItem>

      {/* 2. Contact Info */}
      <AccordionItem title="Contact Info" isOpen={openSection === "Contact Info"} onToggle={() => toggle("Contact Info")}>
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-y-7 border-b border-gray-50 pb-12">
            <span className="text-[16px] font-bold text-[#111827]">Name</span>
            <span className="text-[16px] text-[#4B5563] font-semibold">Noraiz Husnain</span>

            <span className="text-[16px] font-bold text-[#111827]">Mailing Address</span>
            <span className="text-[16px] text-[#4B5563] font-semibold">312 Sw Greenwich Dr, Lees Summit MO 64082 US</span>
            
            <span className="text-[16px] font-bold text-[#111827]">Email Address</span>
            <span className="text-[16px] text-[#4B5563] font-semibold">frndzitme@gmail.com</span>
            
            <span className="text-[16px] font-bold text-[#111827]">Mobile Phone</span>
            <span className="text-[16px] text-[#4B5563] font-semibold">+92 3157 648283</span>
          </div>
          <button className="mt-8 flex items-center gap-4 bg-[#FFF5F2] text-[#FF5722] px-10 py-5 rounded-2xl text-[16px] font-black shadow-md hover:scale-105 transition-all">
            <Pencil className="w-5 h-5" /> Edit Contact Info
          </button>
        </div>
      </AccordionItem>

      {/* 3. Agent Info */}
      <AccordionItem title="Agent Info" isOpen={openSection === "Agent Info"} onToggle={() => toggle("Agent Info")}>
        <div className="space-y-3">
          <div className="text-[18px] text-[#111827] font-black uppercase">Noraiz Husnain</div>
          <div className="text-[16px] text-[#4B5563] font-semibold">312 Sw Greenwich Dr, Lees Summit MO 64082</div>
        </div>
      </AccordionItem>

      {/* 4. Director Info */}
      <AccordionItem title="Director Info" isOpen={openSection === "Director Info"} onToggle={() => toggle("Director Info")}>
        <div className="space-y-12">
          {[
            { id: 1, name: "Noraiz Husnain" },
            { id: 2, name: "Haris Raza" },
            { id: 3, name: "Haider Iqbal" }
          ].map((item) => (
            <div key={item.id} className="flex items-start gap-8 group">
              <div className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-[18px] font-black shrink-0 text-gray-400 group-hover:border-[#10B981] group-hover:text-[#10B981] transition-colors shadow-sm">
                {item.id}
              </div>
              <div className="text-[17px] font-bold">
                <div className="text-[#111827] font-black text-[18px]">{item.name}</div>
                <div className="text-[#4B5563] mt-2 leading-relaxed">312 Sw Greenwich Dr, Lees Summit MO 64082, US</div>
              </div>
            </div>
          ))}
        </div>
      </AccordionItem>

      {/* 5. Officers Info */}
      <AccordionItem title="Officers Info" isOpen={openSection === "Officers Info"} onToggle={() => toggle("Officers Info")}>
        <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-y-8 text-[16px]">
          <span className="font-bold text-[#111827]">President</span>
          <span className="text-[#4B5563] font-semibold">Noraiz Husnain</span>
          
          <span className="font-bold text-[#111827]">Secretary</span>
          <span className="text-[#4B5563] font-semibold">Noraiz Husnain</span>

          <span className="font-bold text-[#111827]">Treasurer</span>
          <span className="text-[#4B5563] font-semibold">Noraiz Husnain</span>
          
          <span className="font-bold text-[#111827]">Vice President</span>
          <span className="text-[#4B5563] font-bold">Haris Raza</span>
        </div>
      </AccordionItem>

    </div>
  );
}