"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CarouselIndicators() {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex space-x-2">
        {[1, 2, 3, 4].map((index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index}`}
            className={`h-3 w-3 rounded-full transition-all ${
              index === 2
                ? "scale-125 bg-cyan-500 shadow-md shadow-cyan-200"
                : "bg-slate-300 hover:bg-cyan-300"
            }`}
          />
        ))}
      </div>

      <div className="flex items-center gap-2">
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 shadow-md transition-all hover:bg-cyan-100 hover:shadow-lg">
          <ChevronLeft className="h-5 w-5 text-slate-600" />
        </button>

        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 shadow-md transition-all hover:bg-cyan-100 hover:shadow-lg">
          <ChevronRight className="h-5 w-5 text-slate-600" />
        </button>
      </div>
    </div>
  );
}
