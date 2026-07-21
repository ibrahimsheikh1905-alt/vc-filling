"use client";

import React, { useState } from "react";
import CompanyProfileTab from "@/components/dashboard/CompanyProfileTab";
import PaymentMethodsTab from "@/components/dashboard/PaymentMethodsTab";
import { Settings } from "lucide-react";

const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState<"company" | "payment">("company");

  return (
    <main className="flex-1 min-h-screen overflow-y-auto bg-slate-50 p-6 font-sans antialiased md:p-10">
      <div className="mx-auto max-w-6xl">

        <header className="mb-10">
          <div className="flex items-center gap-4">
            <div className={`${LOGO_GRADIENT} flex h-14 w-14 items-center justify-center rounded-2xl shadow-md shadow-[#2B93C9]/25`}>
              <Settings className="h-7 w-7 text-white" />
            </div>

            <div>

              <h1 className="mt-2 text-4xl font-bold uppercase tracking-tight text-slate-900">
                Settings
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                Manage your company profile and payment methods.
              </p>
            </div>
          </div>
        </header>

        <div className="mb-10 flex max-w-md rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">
          <button
            onClick={() => setActiveTab("company")}
            className={`flex-1 rounded-xl px-6 py-3 text-sm font-bold transition-all ${
              activeTab === "company"
                ? `${LOGO_GRADIENT} text-white shadow-md`
                : "text-slate-500 hover:bg-cyan-50 hover:text-cyan-600"
            }`}
          >
            Company Profile
          </button>

          <button
            onClick={() => setActiveTab("payment")}
            className={`flex-1 rounded-xl px-6 py-3 text-sm font-bold transition-all ${
              activeTab === "payment"
                ? `${LOGO_GRADIENT} text-white shadow-md`
                : "text-slate-500 hover:bg-cyan-50 hover:text-cyan-600"
            }`}
          >
            Payment Methods
          </button>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-300">
          {activeTab === "company" ? <CompanyProfileTab /> : <PaymentMethodsTab />}
        </div>
      </div>
    </main>
  );
};

export default SettingsPage;
