"use client";

import React from 'react';
import ComplianceTasks from '@/components/dashboard/ComplianceTasks';
import { ShieldAlert } from 'lucide-react';

const CompliancePage = () => {
  return (
    <main className="flex-1 min-h-screen p-6 md:p-12 overflow-y-auto bg-[#F9FAFB] font-sans antialiased">
      <header className="mb-10">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3 mb-2">
            {/* Upper Icon - Now bigger and better padded */}
            <div className="p-2 bg-orange-100 rounded-xl">
               <ShieldAlert className="w-6 h-6 text-[#FF5722]" />
            </div>
            <span className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em]">
              Compliance
            </span>
          </div>
          
          <h1 className="text-3xl font-black tracking-tight text-[#111827]">
            Compliance Tasks
          </h1>
        </div>
      </header>

      <div className="max-w-5xl">
        <ComplianceTasks />
      </div>
    </main>
  );
};

export default CompliancePage;
