"use client";

import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';


interface ClaimServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
  onClaim: () => void;
}

export default function ClaimServiceModal({ 
  isOpen, 
  onClose, 
  serviceTitle, 
  onClaim 
}: ClaimServiceModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-4xl mx-auto rounded-[32px] shadow-2xl max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute z-10 top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-lg hover:bg-gray-100"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
          {/* Left Column - Visual */}
          <div className="lg:w-1/2 bg-gradient-to-br from-blue-50 to-indigo-50 p-12 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-32 bg-white/30 backdrop-blur-sm rounded-3xl shadow-2xl -translate-x-6 -translate-y-4"></div>
              <div className="w-44 h-28 bg-white/50 backdrop-blur-sm rounded-3xl shadow-2xl translate-x-8 translate-y-8 opacity-70"></div>
            </div>
            
            <div className="relative z-10 bg-white/80 w-72 h-56 rounded-3xl shadow-2xl flex flex-col items-center justify-center p-8 backdrop-blur-sm border border-white/50">
              <svg className="w-24 h-24 text-blue-500 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-8 3h1m1 0h1m-1 0v1m0-1v-1"></path>
              </svg>
              <h3 className="text-2xl font-bold text-gray-900 text-center">{serviceTitle}</h3>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-1/2 p-12 flex flex-col justify-between">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full w-fit text-sm font-semibold text-emerald-800 mb-8">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              Free With Your Package
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <h2 className="text-3xl font-black text-gray-900 mb-4 leading-tight">
                Claim Your Service
              </h2>
              
              <p className="text-lg text-gray-600 font-medium mb-8 max-w-lg leading-relaxed">
                Activate this service included in your package. No additional cost.
              </p>

              {/* Benefits */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-1">Instant Activation</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Available immediately after claiming</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-1">No Extra Cost</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Completely free with your current package</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-1">Full Support</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Complete setup assistance included</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={onClaim}
                className="flex-1 bg-[#FF4500] hover:bg-[#E53E00] text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center gap-3"
              >
                Claim Service
              </button>
              <button
                onClick={onClose}
                className="flex-1 border-2 border-gray-200 hover:bg-gray-50 text-gray-800 font-bold py-4 px-8 rounded-2xl text-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                Skip for Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

