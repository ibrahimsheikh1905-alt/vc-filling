"use client";

import { MoreVertical, Trash2 } from "lucide-react";
import { useState } from 'react';

interface UnclaimedServiceRowProps {
  title: string;
  description: string;
  serviceId: number;
  type?: 'website' | 'domain' | 'safeguard';
  onRemove: (id: number) => void;
  onClaim?: (serviceId: number) => void;
}



export default function UnclaimedServiceRow({ 
  title, 
  description, 
  serviceId, 
  type,
  onRemove,
  onClaim 
}: UnclaimedServiceRowProps) {

  const [showDropdown, setShowDropdown] = useState(false);
  
  const handleClaim = () => {
    if (type && onClaim) {
      onClaim(serviceId);
    }
  };


  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 p-4 rounded-lg transition-colors relative">
      <div className="w-8 h-8 border-4 border-dashed border-gray-300 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-gray-900 text-lg mb-1 truncate">{title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="flex items-center gap-3 flex-shrink-0 relative">
        <button 
          onClick={() => onClaim?.(serviceId)}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors whitespace-nowrap"
        >
          Claim Now
        </button>


        <div className="relative">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setShowDropdown(!showDropdown);
            }}
            className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
          >
            <MoreVertical className="w-4 h-4" />
          </button>
          
          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg py-1 w-32 z-50">
              <button 
                onClick={() => {
                  onRemove(serviceId);
                  setShowDropdown(false);
                }}
                className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors rounded-md"
              >
                <Trash2 className="w-4 h-4 text-red-500" />
                <span>Remove</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

