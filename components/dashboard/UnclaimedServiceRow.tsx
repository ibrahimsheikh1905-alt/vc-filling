"use client";

import { MoreVertical } from "lucide-react";

interface UnclaimedServiceRowProps {
  title: string;
  description: string;
}

export default function UnclaimedServiceRow({ title, description }: UnclaimedServiceRowProps) {
  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 p-4 rounded-lg transition-colors">
      <div className="w-8 h-8 border-4 border-dashed border-gray-300 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-gray-900 text-lg mb-1 truncate">{title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="flex items-center gap-3 flex-shrink-0">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors whitespace-nowrap">
          Claim 
        </button>
        <button className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
