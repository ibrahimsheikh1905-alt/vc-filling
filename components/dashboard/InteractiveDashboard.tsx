"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronDown, Users, Phone, Building2, ShieldCheck } from 'lucide-react';

// 1. TypeScript Interfaces (Error fix karne ke liye zaroori hain)
interface TabItem {
  label: string;
  value: string;
  statusType?: 'success' | 'warning' | 'info';
}

interface TabContentData {
  'Company Info': TabItem[];
  'Contact Info': TabItem[];
  'Agent Info': TabItem[];
}

const InteractiveDashboard = () => {
  const [activeTab, setActiveTab] = useState<keyof TabContentData>('Company Info');
  const [isOpen, setIsOpen] = useState(true);

  const tabContent: TabContentData = {
    'Company Info': [
      { label: 'STATE STATUS', value: 'Pending', statusType: 'warning' },
      { label: 'EIN STATUS', value: 'Approved', statusType: 'success' },
      { label: 'REGISTERED AGENT', value: 'Active', statusType: 'success' },
      { label: 'ANNUAL REPORT', value: 'Due Soon', statusType: 'warning' },
    ],
    'Contact Info': [
      { label: 'PRIMARY EMAIL', value: 'noraiz@example.com' },
      { label: 'PHONE NUMBER', value: '(555) 123-4567' },
      { label: 'MAILING ADDRESS', value: '312 SW Greenwich Dr' },
    ],
    'Agent Info': [
      { label: 'AGENT NAME', value: 'Noraiz Husnain' },
      { label: 'AGENT STATE', value: 'Missouri' },
      { label: 'EXPIRATION DATE', value: 'N/A' },
    ],
  };

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans antialiased">
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-2">{activeTab} Details</h2>
            <p className="text-[15px] text-gray-500 font-medium">Review and manage your company's core information.</p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
                {/* Accordion Header */}
                <button 
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full flex items-center justify-between p-6 hover:bg-gray-50/50 transition-colors border-b border-gray-50"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-orange-50 rounded-xl">
                      <ShieldCheck className="w-5 h-5 text-orange-600" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-gray-900 text-lg">System Verification</h3>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-0.5">Live Status Check</p>
                    </div>
                  </div>
                  {/* Icon Animation Fix */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </button>

                {/* Content Animation Fix */}
                <motion.div
                  initial={false}
                  animate={{ 
                    height: isOpen ? "auto" : 0, 
                    opacity: isOpen ? 1 : 0 
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                      {tabContent[activeTab].map((item, idx) => (
                        <div key={idx} className="group border-b border-gray-50 pb-4 last:border-0 sm:even:border-l sm:even:pl-12 sm:even:border-b-0 sm:odd:border-b-0">
                          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                            {item.label}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-base font-semibold text-gray-900">{item.value}</span>
                            {(item.value === 'Approved' || item.value === 'Active') && (
                              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-10 pt-6 border-t border-gray-50 flex justify-end">
                      <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm shadow-orange-100 active:scale-[0.98]">
                        Learn More
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