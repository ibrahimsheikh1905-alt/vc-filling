"use client";

import { ChevronDown, Calendar, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import DetailItem from './DetailItem';

export default function ActiveTaskCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white border border-gray-100 rounded-[20px] shadow-sm overflow-hidden max-w-5xl">
      <div 
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-8 flex items-center justify-between cursor-pointer hover:bg-gray-50/20 transition-colors"
      >
        <div className="flex items-center gap-5">
          <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center border border-orange-100">
            <Calendar className="w-6 h-6 text-[#FF5722]" />
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
        <div className="px-8 pb-10 pt-4 border-t border-gray-50 ml-16">
          <ul className="space-y-3">
            <DetailItem label="Due Date" value="August 31st" />
            <DetailItem label="State Fee" value="$10" />
            <DetailItem label="Filing Fee" value="$99" />
          </ul>
        </div>
      )}
    </div>
  );
}


