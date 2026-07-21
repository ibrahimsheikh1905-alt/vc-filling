"use client";

import React from "react";
import { X, CheckCircle2 } from "lucide-react";

const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";
const LOGO_GRADIENT_SOFT =
  "bg-[linear-gradient(90deg,rgba(36,78,182,0.10)_0%,rgba(43,147,201,0.10)_50%,rgba(51,209,204,0.10)_100%)]";

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
  onClaim,
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
      <div className="relative mx-auto max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-[32px] bg-white shadow-2xl animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-10 rounded-lg p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="flex h-full max-h-[90vh] flex-col lg:flex-row">
          {/* Left Column - Visual */}
          <div className={`relative flex items-center justify-center overflow-hidden ${LOGO_GRADIENT_SOFT} p-12 lg:w-1/2`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-32 w-48 -translate-x-6 -translate-y-4 rounded-3xl bg-white/30 shadow-2xl backdrop-blur-sm" />
              <div className="h-28 w-44 translate-x-8 translate-y-8 rounded-3xl bg-white/50 opacity-70 shadow-2xl backdrop-blur-sm" />
            </div>

            <div className="relative z-10 flex h-56 w-72 flex-col items-center justify-center rounded-3xl border border-white/50 bg-white/80 p-8 shadow-2xl backdrop-blur-sm">
              <svg
                className="mb-6 h-24 w-24 text-cyan-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-8 3h1m1 0h1m-1 0v1m0-1v-1"
                />
              </svg>

              <h3 className="text-center text-2xl font-bold text-slate-900">
                {serviceTitle}
              </h3>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-between p-12 lg:w-1/2">
            <div className={`mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-200 ${LOGO_GRADIENT_SOFT} px-4 py-2 text-sm font-semibold text-cyan-700`}>
              <div className={`${LOGO_GRADIENT} h-2 w-2 rounded-full`} />
              Free With Your Package
            </div>

            <div className="flex-1">
              <h2 className="mb-4 text-3xl font-bold leading-tight text-slate-900">
                Claim Your Service
              </h2>

              <p className="mb-8 max-w-lg text-lg font-medium leading-relaxed text-slate-600">
                Activate this service included in your package. No additional cost.
              </p>

              <div className="mb-8 space-y-4">
                {[
                  {
                    title: "Instant Activation",
                    desc: "Available immediately after claiming",
                  },
                  {
                    title: "No Extra Cost",
                    desc: "Completely free with your current package",
                  },
                  {
                    title: "Full Support",
                    desc: "Complete setup assistance included",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-cyan-500" />

                    <div>
                      <h4 className="mb-1 text-lg font-bold text-slate-900">
                        {item.title}
                      </h4>

                      <p className="text-sm leading-relaxed text-slate-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={onClaim}
                className={`${LOGO_GRADIENT} flex flex-1 items-center justify-center gap-3 rounded-2xl px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-cyan-100 transition-all duration-300 hover:brightness-110 hover:shadow-cyan-200`}
              >
                Claim Service
              </button>

              <button
                onClick={onClose}
                className="flex-1 rounded-2xl border-2 border-slate-200 px-8 py-4 text-lg font-bold text-slate-800 shadow-sm transition-all duration-300 hover:bg-cyan-50 hover:text-cyan-600 hover:shadow-md"
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
