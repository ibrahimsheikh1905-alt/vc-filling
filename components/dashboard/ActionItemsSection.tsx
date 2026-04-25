"use client";

import { AlertCircle, ArrowRight, Clock } from "lucide-react";

export default function ActionItemsSection() {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
<h2 className="text-2xl font-black tracking-tight text-gray-900">Action Items</h2>
        <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
          1
        </span>
      </div>
      <div className="bg-white shadow-lg rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-shadow">
        <div className="flex items-start gap-4">
          <AlertCircle className="w-8 h-8 text-orange-500 mt-1 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Identity Confirmation Issue</h3>
            <p className="text-gray-900 font-semibold text-lg mb-4">SOLVEXNEST INC.</p>
            <div className="space-y-2 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <span className="font-mono bg-gray-100 px-2 py-1 rounded-md text-xs font-medium">Order No:</span>
                <span># 226041533405</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono bg-gray-100 px-2 py-1 rounded-md text-xs font-medium">Created:</span>
                <span>Apr 20, 2026</span>
              </div>
            </div>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-xl shadow-lg flex items-center gap-2 font-medium transition-all group ml-auto">
            Take Action
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
