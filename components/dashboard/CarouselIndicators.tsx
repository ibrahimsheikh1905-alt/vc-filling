"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CarouselIndicators() {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex space-x-2">
        {[1,2,3,4].map((index) => (
          <button 
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${index === 2 ? 'bg-orange-500 scale-125 shadow-md' : 'bg-gray-300 hover:bg-gray-400'}`}
            aria-label={`Go to slide ${index}`}
          />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <button className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-all shadow-md hover:shadow-lg">
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <button className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-all shadow-md hover:shadow-lg">
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
