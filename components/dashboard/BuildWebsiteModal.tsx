"use client";

import React from "react";
import { X, CheckCircle2, Globe } from "lucide-react";

interface BuildWebsiteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BuildWebsiteModal({
  isOpen,
  onClose,
}: BuildWebsiteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[32px] bg-white shadow-2xl animate-in zoom-in-95 duration-300">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-20 rounded-full p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="flex w-full flex-col items-center justify-center p-8 lg:p-10">
          {/* Top Visual */}
          <div className="relative mb-8 flex w-full justify-center">
            <div className="absolute left-0 top-0 z-0 h-[180px] w-[180px] -translate-x-12 -translate-y-10 rounded-bl-[200px] bg-cyan-50" />

            <div className="relative z-10 flex w-[160px] -translate-x-14 flex-col items-center justify-center rounded-[20px] border border-cyan-100 bg-white/95 px-4 py-7 shadow-md">
              <Globe className="mb-3 h-16 w-16 shrink-0 text-cyan-500 stroke-[1.5px]" />

              <h3 className="text-center text-sm font-bold leading-tight text-slate-900">
                Build Your <br /> Website
              </h3>
            </div>
          </div>

          <div className="flex w-full max-w-[400px] flex-col items-center text-center">
            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-700">
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              Free With Your Package
            </div>

            <h2 className="mb-2 text-3xl font-black tracking-tight text-slate-900">
              Get Online Today
            </h2>

            <p className="mb-8 max-w-[320px] text-sm font-medium leading-relaxed text-slate-600">
              Launch a professional website in minutes.
            </p>

            <div className="mb-10 flex w-full flex-col items-center space-y-4">
              {[
                { title: "Mobile Responsive", desc: "Perfect on all screens" },
                { title: "SEO Optimized", desc: "Rank higher on Google" },
              ].map((item, i) => (
                <div key={i} className="flex w-full max-w-[280px] items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-500" />

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

            <div className="flex w-full flex-col gap-2">
              <button className="w-full rounded-2xl bg-[#06B6D4] px-6 py-3.5 text-[15px] font-bold text-white shadow-md shadow-cyan-100 transition-all hover:bg-[#0891B2] hover:shadow-cyan-200 active:scale-95">
                Start Building
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
