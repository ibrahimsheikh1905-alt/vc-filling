"use client";

import React from "react";
import ComplianceTasks from "@/components/dashboard/ComplianceTasks";
import { ShieldCheck } from "lucide-react";

const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";

const LOGO_GRADIENT_TEXT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent";

const LOGO_GRADIENT_SOFT =
  "bg-[linear-gradient(90deg,rgba(36,78,182,0.10)_0%,rgba(43,147,201,0.10)_50%,rgba(51,209,204,0.10)_100%)]";

const CompliancePage = () => {
  return (
    <main className="flex-1 min-h-screen bg-slate-50 p-6 md:p-12 overflow-y-auto font-sans antialiased">
      {/* Header */}
      <header className="mb-10">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4">
            {/* Gradient Icon */}
            <div
              className={`${LOGO_GRADIENT} flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg shadow-[#2B93C9]/25`}
            >
              <ShieldCheck className="h-7 w-7" />
            </div>

            <div>


              {/* Heading */}
              <h1
                className={`TEXT} mt-3 text-4xl font-bold tracking-tight`}
              >
                Compliance Tasks
              </h1>
            </div>
          </div>

          {/* Description */}
          <p className="max-w-2xl text-base font-medium leading-7 text-slate-600">
            Stay on top of your business compliance requirements. Complete
            pending tasks on time to keep your company in good standing.
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="relative max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-[#2B93C9]/10">
        {/* Top Gradient Border */}
        <div
          className={` absolute inset-x-0 top-0 h-1`}
        />

        <div className="p-6">
          <ComplianceTasks />
        </div>
      </div>
    </main>
  );
};

export default CompliancePage;