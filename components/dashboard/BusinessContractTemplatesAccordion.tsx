"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ContractProps {
  title: string;
  description: string;
  expandedTip?: string;
}

const BusinessContractTemplatesAccordion: React.FC<ContractProps> = ({
  title,
  description,
  expandedTip="Get access to this document along with 25+ high quality legal documents to assist with running your business."
}) => {
  const [isOpen,setIsOpen]=useState(false);

  return (
    <div className={`mb-4 max-w-4xl rounded-2xl border bg-white transition-all duration-200 ${
      isOpen
        ? "border-cyan-200 ring-2 ring-cyan-100"
        : "border-slate-200 hover:border-cyan-200"
    }`}>
      <div
        onClick={()=>setIsOpen(!isOpen)}
        className="group flex cursor-pointer items-start justify-between p-6"
      >
        <div className="flex-1 pr-4">
          <h2 className={`text-lg font-bold transition-colors ${
            isOpen ? "text-cyan-600":"text-slate-900"
          }`}>
            {title}
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            {description}
          </p>
        </div>

        <ChevronDown
          className={`mt-1 h-5 w-5 transition-all duration-300 ${
            isOpen
              ? "rotate-180 text-cyan-500"
              : "text-slate-400 group-hover:text-cyan-500"
          }`}
        />
      </div>

      <div className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-96 opacity-100":"max-h-0 opacity-0"
      }`}>
        <div className="border-t border-slate-100 px-6 pb-6 pt-4">
          <p className="mb-5 text-sm italic leading-relaxed text-slate-600">
            {expandedTip}
          </p>

          <button className="rounded-xl bg-[#06B6D4] px-6 py-3 text-sm font-bold text-white shadow-md shadow-cyan-100 transition-all hover:bg-[#0891B2] hover:shadow-cyan-200 active:scale-95">
            Access All Documents — $150
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessContractTemplatesAccordion;
