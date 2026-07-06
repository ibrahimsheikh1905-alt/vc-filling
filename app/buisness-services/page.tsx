"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type TabKey = "company" | "compliance" | "registered" | "irs";

const tabs: { key: TabKey; label: string }[] = [
  { key: "company", label: "Company Changes" },
  { key: "compliance", label: "Compliance" },
  { key: "registered", label: "Registered Agent" },
  { key: "irs", label: "IRS Filings" },
];

const services = {
  company: {
    eyebrow: "COMPANY CHANGES",
    title: "Manage Your Company Changes",
    desc: "Keep your business details updated with easy filing support from Incorp Bay.",
    items: [
      "Business Formation",
      "Foreign Qualification",
      "Amendment",
      "Dissolution",
      "Get Reinstated",
      "DBA",
      "Virtual Address",
    ],
  },
  compliance: {
    eyebrow: "COMPLIANCE",
    title: "Stay Compliant With State Rules",
    desc: "Avoid missed deadlines and keep your company in good standing.",
    items: [
      "Certificate of Good Standing",
      "Annual Report",
      "Business License Search",
      "Corporate and LLC Kit",
      "Trademark Name Search",
    ],
  },
  registered: {
    eyebrow: "REGISTERED AGENT",
    title: "Reliable Registered Agent Service",
    desc: "Get professional handling of legal notices and official state mail.",
    items: [
      "Order Registered Agent",
      "Change Registered Agent",
      "Renew Registered Agent",
    ],
  },
  irs: {
    eyebrow: "IRS FILINGS",
    title: "Handle IRS Filings With Ease",
    desc: "Get help with key tax filings and federal business documents.",
    items: [
      "Free Tax Consultation",
      "File S Corp Tax Election",
      "EIN / Tax ID #",
      "File Business Taxes",
    ],
  },
};

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

export default function BusinessServicesPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("company");
  const active = services[activeTab];

  return (
    <main className="min-h-screen bg-white font-sans text-slate-950">
      <Header />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-cyan-100 blur-3xl" />
          <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-cyan-50 blur-3xl" />
        </div>

        <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-20 text-center">
          <span className="mb-5 rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-600">
            Business Services
          </span>

          <h1 className="max-w-3xl text-4xl font-black leading-tight text-slate-900 md:text-5xl">
            Everything You Need To
            <span className="block text-cyan-500">Manage Your Business</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
            Incorp Bay provides everything from amendments and compliance
            filings to registered agent services and IRS support — all in one
            place.
          </p>
        </div>
      </section>

      {/* ================= TABS ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-14 flex flex-wrap justify-center gap-4">
          {tabs.map((tab) => {
            const activeItem = activeTab === tab.key;

            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`rounded-full border px-7 py-3 text-sm font-bold transition-all duration-300 ${
                  activeItem
                    ? "border-cyan-500 bg-cyan-500 text-white shadow-lg shadow-cyan-300"
                    : "border-slate-200 bg-white text-slate-700 hover:border-cyan-300 hover:bg-cyan-50"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="grid items-start gap-16 lg:grid-cols-[1fr_420px]">
          {/* LEFT */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-500">
              {active.eyebrow}
            </span>

            <h2 className="mt-3 text-3xl font-black leading-tight text-slate-900 md:text-4xl">
              {active.title}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              {active.desc}
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {active.items.map((item) => (
                <div
                  key={item}
                  className="group flex cursor-pointer items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl"
                  onClick={() => {
                    const normalizedItem = item.trim().toLowerCase();

                    // Registered Agent tab: item-based routes
                    if (activeTab === "registered") {
                      if (normalizedItem.includes("change registered agent")) {
                        window.location.href = "/change-agent";
                        return;
                      }
                      if (normalizedItem.includes("order registered agent")) {
                        window.location.href = "/registered-agent";
                        return;
                      }
                      if (normalizedItem.includes("renew registered agent")) {
                        window.location.href = "/registered-agent";
                        return;
                      }
                      // fallback
                      window.location.href = "/registered-agent";
                      return;
                    }

                    if (activeTab === "company") {
                      const map: Record<string, string> = {
                        "business formation": "/form-a-llc",
                        "foreign qualification": "/foreign-qualification",
                        amendment: "/amendment",
                        dissolution: "/dissolution",
                        "get reinstated": "/reinstatement",
                        dba: "/fictitious-business-name",
                        "virtual address": "/virtual-address",
                      };
                      const href = map[normalizedItem] ?? "/form-a-llc";
                      window.location.href = href;
                      return;
                    }

                    if (activeTab === "compliance") {
                      const map: Record<string, string> = {
                        "certificate of good standing": "/cert-good-standing",
                        "annual report": "/annual-report",
                        "business license search": "/business-license",
                        "corporate and llc kit": "/kit-info",
                        "trademark name search": "/trademark",
                      };
                      const href = map[normalizedItem] ?? "/cert-good-standing";
                      window.location.href = href;
                      return;
                    }

                    // IRS tab
                    if (activeTab === "irs") {
                      const map: Record<string, string> = {
                        "free tax consultation": "/tax-consultation",
                        "file s corp tax election": "/form-s-corporation",
                        "ein / tax id #": "/ein-form",
                        "file business taxes": "/tax-consultation",
                      };
                      const href = map[normalizedItem] ?? "/tax-consultation";
                      window.location.href = href;
                      return;
                    }

                    // Fallback
                    window.location.href = "/business-structure";
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-500">
                      <CheckIcon />
                    </div>

                    <span className="text-sm font-semibold text-slate-900 md:text-base">
                      {item}
                    </span>
                  </div>

                  <div className="text-cyan-500 transition group-hover:translate-x-1">
                    <ArrowIcon />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT DASHBOARD */}
          <div className="relative">
            <div className="absolute -left-10 top-10 h-52 w-52 rounded-full bg-cyan-100 blur-3xl" />

            <div className="relative rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-xl">
              <div className="rounded-3xl bg-white p-5 shadow-lg">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Incorp Bay Dashboard
                    </p>
                    <h3 className="mt-1 text-lg font-black text-slate-900">
                      Business Services
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-white">
                    <CheckIcon />
                  </div>
                </div>

                <div className="space-y-4">
                  {active.items.slice(0, 4).map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-black ${
                            index === 0
                              ? "bg-cyan-500 text-white"
                              : "bg-white text-cyan-500"
                          }`}
                        >
                          {index + 1}
                        </div>

                        <div>
                          <p className="text-sm font-bold text-slate-900">{item}</p>
                          <p className="text-xs text-slate-400">Ready to file</p>
                        </div>
                      </div>

                      <span className="shrink-0 rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-600">
                        Active
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-700 p-5 text-white">
                  <p className="text-sm font-semibold opacity-90">Current Progress</p>

                  <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/25">
                    <div className="h-full w-[72%] rounded-full bg-white" />
                  </div>

                  <div className="mt-3 flex justify-between text-sm font-bold">
                    <span>72% Complete</span>
                    <span>4 Tasks</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white p-4 shadow-md">
                  <p className="text-xs font-bold uppercase text-slate-400">Status</p>
                  <p className="mt-2 text-base font-black text-slate-900">In Progress</p>
                </div>

                <div className="rounded-2xl bg-white p-4 shadow-md">
                  <p className="text-xs font-bold uppercase text-slate-400">Support</p>
                  <p className="mt-2 text-base font-black text-slate-900">24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}