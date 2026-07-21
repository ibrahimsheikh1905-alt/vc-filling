"use client";

import React from "react";
import { X, CheckCircle2, Mail } from "lucide-react";

const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";
const LOGO_GRADIENT_TEXT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent";
const LOGO_GRADIENT_SOFT =
  "bg-[linear-gradient(90deg,rgba(36,78,182,0.10)_0%,rgba(43,147,201,0.10)_50%,rgba(51,209,204,0.10)_100%)]";

interface DomainEmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DomainEmailModal({
  isOpen,
  onClose,
}: DomainEmailModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Super Compact Container */}
      <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[32px] bg-white shadow-2xl animate-in zoom-in-95 duration-300">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-20 rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
        >
          <X className="h-6 w-6" />
        </button>

        {/* MAIN CENTERING CONTAINER */}
        <div className="flex w-full flex-col items-center justify-center p-8 lg:p-10">
          {/* Top Left Decorative Visual */}
          <div className="relative mb-8 flex w-full justify-center">
            <div className="absolute left-0 top-0 z-0 h-[160px] w-[160px] -translate-x-10 -translate-y-8 rounded-bl-[150px] bg-cyan-50" />

            <div className="relative z-10 flex w-[150px] -translate-x-10 flex-col items-center justify-center rounded-[20px] border border-cyan-100 bg-white/95 px-4 py-6 shadow-md">
              <Mail className="mb-3 h-14 w-14 shrink-0 text-cyan-500 stroke-[1.5px]" />

              <h3 className="text-center text-xs font-bold leading-tight text-slate-900">
                Domain & <br /> Email
              </h3>
            </div>
          </div>

          {/* CONTENT BLOCK */}
          <div className="flex w-full max-w-[380px] flex-col items-center text-center">
            {/* Badge */}
            <div className={`${LOGO_GRADIENT_SOFT} ${LOGO_GRADIENT_TEXT} mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#2B93C9]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider`}>
              <div className={`${LOGO_GRADIENT} h-1.5 w-1.5 rounded-full`} />
              Free With Your Package
            </div>

            <h2 className="mb-2 text-2xl font-bold tracking-tight text-slate-900">
              Professional Presence
            </h2>

            <p className="mb-8 text-sm font-medium leading-relaxed text-slate-600">
              Get your custom domain and professional email setup instantly.
            </p>

            <div className="mb-10 flex w-full flex-col items-center space-y-4">
              {[
                { title: "Custom Domain", desc: "yourcompany.com ready to use" },
                { title: "Professional Email", desc: "info@yourcompany.com included" },
              ].map((item, i) => (
                <div key={i} className="flex w-full max-w-[270px] items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-500" />

                  <div className="flex-1 text-left">
                    <h4 className="text-[14px] font-bold leading-tight text-slate-900">
                      {item.title}
                    </h4>
                    <p className="mt-0.5 text-[11px] text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex w-full flex-col gap-2.5">
              <button
                onClick={onClose}
                className={`${LOGO_GRADIENT} w-full rounded-2xl px-6 py-3.5 text-[15px] font-bold text-white shadow-md shadow-[#2B93C9]/20 transition-all hover:brightness-110 active:scale-95`}
              >
                Get Started
              </button>

              <button
                onClick={onClose}
                className="w-full rounded-2xl border border-slate-200 px-6 py-3.5 text-[15px] font-bold text-slate-400 transition-all hover:bg-cyan-50 hover:text-cyan-600"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
