"use client";

import React from "react";
import ComplianceTasks from "@/components/dashboard/ComplianceTasks";
import { ShieldCheck } from "lucide-react";

const CompliancePage = () => {
  return (
    <main className="flex-1 min-h-screen bg-slate-50 p-6 md:p-12 overflow-y-auto font-sans antialiased">
      {/* Header */}
      <header className="mb-10">
        <div className="flex flex-col gap-3">

          {/* Badge */}
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 shadow-sm">
              <ShieldCheck className="h-7 w-7 text-cyan-600" />
            </div>

            <div>


              <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900">
                Compliance Tasks
              </h1>
            </div>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-500">
            Stay on top of your business compliance requirements. Complete
            pending tasks on time to keep your company in good standing.
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <ComplianceTasks />
      </div>
    </main>
  );
};

export default CompliancePage;