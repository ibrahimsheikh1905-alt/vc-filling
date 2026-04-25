"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ContractProps {
  title: string;
  description: string;
  expandedTip?: string;
}

const BusinessContractTemplatesAccordion: React.FC<ContractProps> = ({ 
  title, 
  description, 
  expandedTip = "Get access to this document along with 25+ high quality legal documents to assist with running your business." 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={`bg-white rounded-xl border transition-all duration-200 ${isOpen ? 'border-orange-200 ring-1 ring-orange-50' : 'border-gray-200 hover:border-gray-300'} mb-4 max-w-4xl`}>
      {/* Header Section */}
      <div 
        className="flex items-start justify-between p-6 cursor-pointer group" 
        onClick={toggleOpen}
      >
        <div className="flex-1 pr-4">
          {/* Title - Normal Bold & Clean */}
          <h2 className={`text-lg font-semibold transition-colors duration-200 ${isOpen ? 'text-orange-600' : 'text-gray-900'}`}>
            {title}
          </h2>
          
          {/* Description - Subtle & Professional */}
          <p className="text-gray-500 text-sm mt-2 leading-relaxed font-normal">
            {description}
          </p>
        </div>

        {/* Chevron - Minimal */}
        <ChevronDown 
          className={`w-5 h-5 mt-1 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-orange-500' : 'group-hover:text-gray-600'}`} 
        />
      </div>

      {/* Expanded Content */}
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 pt-2 border-t border-gray-50">
          <p className="text-sm text-gray-600 font-normal mb-5 leading-relaxed italic">
            {expandedTip}
          </p>
          
          <button className="bg-orange-500 hover:bg-orange-600 text-white text-[13px] font-medium px-6 py-2.5 rounded-lg transition-all active:scale-95 shadow-sm">
            Access All Documents — $150
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessContractTemplatesAccordion;