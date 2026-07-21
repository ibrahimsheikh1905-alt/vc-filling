"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown, ShieldCheck } from "lucide-react";

const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";
const LOGO_GRADIENT_TEXT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent";

interface TabItem {
  label: string;
  value: string;
  statusType?: "success" | "warning" | "info";
}

interface TabContentData {
  "Company Info": TabItem[];
  "Contact Info": TabItem[];
  "Agent Info": TabItem[];
}

const InteractiveDashboard = () => {
  const [activeTab, setActiveTab] = useState<keyof TabContentData>("Company Info");
  const [isOpen, setIsOpen] = useState(true);

  const tabContent: TabContentData = {
    "Company Info": [
      { label: "STATE STATUS", value: "Pending", statusType: "warning" },
      { label: "EIN STATUS", value: "Approved", statusType: "success" },
      { label: "REGISTERED AGENT", value: "Active", statusType: "success" },
      { label: "ANNUAL REPORT", value: "Due Soon", statusType: "warning" },
    ],
    "Contact Info": [
      { label: "PRIMARY EMAIL", value: "noraiz@example.com" },
      { label: "PHONE NUMBER", value: "(555) 123-4567" },
      { label: "MAILING ADDRESS", value: "312 SW Greenwich Dr" },
    ],
    "Agent Info": [
      { label: "AGENT NAME", value: "Noraiz Husnain" },
      { label: "AGENT STATE", value: "Missouri" },
      { label: "EXPIRATION DATE", value: "N/A" },
    ],
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans antialiased">
      <main className="flex-1 overflow-y-auto p-8 lg:p-12">
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <div className="mb-8">
            <p className={`mb-2 text-[11px] font-bold uppercase tracking-[0.28em] ${LOGO_GRADIENT_TEXT}`}>
              Incorp Bay Dashboard
            </p>

            <h2 className="mb-2 text-2xl font-bold tracking-tight text-slate-900">
              {activeTab} Details
            </h2>

            <p className="text-[15px] font-medium text-slate-500">
              Review and manage your company&apos;s core information.
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                {/* Accordion Header */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex w-full items-center justify-between border-b border-slate-100 p-6 transition-colors hover:bg-cyan-50"
                >
                  <div className="flex items-center gap-4">
                    <div className={`${LOGO_GRADIENT} rounded-xl p-2.5`}>
                      <ShieldCheck className="h-5 w-5 text-white" />
                    </div>

                    <div className="text-left">
                      <h3 className="text-lg font-bold text-slate-900">
                        System Verification
                      </h3>

                      <p className="mt-0.5 text-xs font-bold uppercase tracking-widest text-slate-400">
                        Live Status Check
                      </p>
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-5 w-5 text-slate-400" />
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-8">
                    <div className="grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">
                      {tabContent[activeTab].map((item, idx) => (
                        <div
                          key={idx}
                          className="group border-b border-slate-100 pb-4 last:border-0 sm:even:border-b-0 sm:even:border-l sm:even:border-slate-100 sm:even:pl-12 sm:odd:border-b-0"
                        >
                          <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                            {item.label}
                          </p>

                          <div className="flex items-center justify-between">
                            <span className="text-base font-semibold text-slate-900">
                              {item.value}
                            </span>

                            {(item.value === "Approved" || item.value === "Active") && (
                              <CheckCircle2 className="h-5 w-5 text-cyan-500" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-10 flex justify-end border-t border-slate-100 pt-6">
                      <button className={`${LOGO_GRADIENT} group relative overflow-hidden rounded-full px-8 py-2.5 text-sm font-bold text-white shadow-sm shadow-cyan-100 transition-all duration-300 hover:scale-[1.03] hover:brightness-110`}>
                        <span className="absolute inset-x-0 top-0 h-1/2 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
                        <span className="absolute -left-20 top-0 h-full w-12 -skew-x-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />
                        <span className="relative z-10">Learn More</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default InteractiveDashboard;
