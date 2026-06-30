"use client";

import React, { useState, useEffect, useRef, RefCallback } from "react";
import { Star, ChevronDown, ChevronRight, CheckCircle, AlertTriangle, Shield } from "lucide-react";
import Link from "next/link";
import NavigationWrapper from "@/components/NavigationWrapper";

// ─── Data ─────────────────────────────────────────────────────────────────────

const entityTypes = [
  "LLC",
  "S-Corporation",
  "C-Corporation",
  "Nonprofit",
  "Sole Proprietorship",
];

const states = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado",
  "Connecticut","Delaware","Florida","Georgia","Idaho","Illinois",
  "Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland",
  "Massachusetts","Michigan","Minnesota","Mississippi","Missouri",
  "Montana","Nebraska","Nevada","New Hampshire","New Jersey",
  "New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina",
  "South Dakota","Tennessee","Texas","Utah","Vermont","Virginia",
  "Washington","West Virginia","Wisconsin","Wyoming",
];

const tocItems = [
  {
    id: 0,
    short: "What Happens If You Don't File an Annual Report (All Business Entities Covered)",
  },
  { id: 1, short: "Are Annual Reports Mandatory?" },
  { id: 2, short: "Learn If You Need to File an Annual Report" },
  { id: 3, short: "What Happens to Businesses That Don't File Annual Reports?" },
  { id: 4, short: "What Other Issues May Come from Not Filing an Annual Report?" },
  { id: 5, short: "Avoid Issues from Filing Annual Reports Late" },
  {
    id: 6,
    short: "Don't Lose Liability Protection, Pay Penalties, and be Vulnerable to Lawsuits.",
  },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-16 md:py-20">
      {/* Left */}
      <div>
        {/* Trustpilot badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
          <span>Excellent 4.7 out of 5</span>
          <Star className="h-4 w-4 fill-[#00B67A] text-[#00B67A]" />
          <span className="font-bold text-[#00B67A]">Trustpilot</span>
        </div>

        <h1 className="mt-5 text-5xl font-black leading-[1.08] tracking-tight text-[#1a1a1a] md:text-6xl">
          File My Annual<br />
          Report – Fast,<br />
          Easy &amp; 100%<br />
          State-Compliant
        </h1>

        <p className="mt-5 text-base text-slate-500">
          Avoid late fees and protect your business standing — we'll<br />
          file your Annual Report in just minutes.
        </p>

<div className="mt-8 flex flex-wrap gap-4">
          <Link href="/annual-report/step-1" className="flex flex-col rounded-2xl bg-[#06B6D4] px-7 py-4 text-left text-white transition hover:bg-[#0891b2]">
            <span className="text-xs font-semibold opacity-90">File Your Annual Report</span>
            <div className="mt-1 flex items-center gap-2 text-base font-bold">
              Get Started
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9h12M11 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>

          <Link href="/annual-report/step-1" className="flex flex-col rounded-2xl bg-[#1E293B] px-7 py-4 text-left text-white transition hover:bg-slate-700">
            <span className="text-xs font-semibold opacity-70">When is my due date?</span>
            <div className="mt-1 flex items-center gap-2 text-base font-bold">
              Check Now
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9h12M11 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </Link>
        </div>
      </div>

      {/* Right — Phone mockup */}
      <div className="flex justify-center md:justify-end">
        <div className="relative">
          <div className="absolute inset-0 -z-10 scale-110 rounded-[3rem] bg-slate-100/70" />
          <div className="relative w-[260px] rounded-[2.5rem] border-[10px] border-[#1a1a1a] bg-white shadow-2xl">
            <div className="absolute left-1/2 top-2.5 h-3 w-20 -translate-x-1/2 rounded-full bg-[#1a1a1a]" />
            <div className="flex items-center justify-between px-5 pt-8 text-[10px] font-semibold text-[#1a1a1a]">
              <span>9:41</span>
              <div className="flex gap-1">
                <span>▌▌▌</span>
                <span>WiFi</span>
              </div>
            </div>
            <div className="px-5 pb-8 pt-3 text-center">
              <p className="text-xs font-bold text-[#1a1a1a]">Annual Report</p>
              <p className="text-[10px] text-slate-400">Final Confirmation</p>
              <div className="mx-auto mt-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#06B6D4] shadow-lg shadow-[#06B6D4]/30">
                <CheckCircle className="h-9 w-9 text-white" strokeWidth={2.5} />
              </div>
              <p className="mt-4 text-sm font-bold text-[#1a1a1a]">Annual Report Has Been Filed!</p>
              <p className="mt-1 text-[9px] text-slate-400">
                We'll send you email notifications about<br />your Annual Report's progress.
              </p>
              <div className="mt-4 flex items-center gap-2 rounded-xl border border-slate-100 bg-white px-3 py-2.5 text-left shadow-sm">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#06B6D4]/15">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1.5a4 4 0 014 4v2.5l1 1.5H2L3 8V5.5a4 4 0 014-4zM5.5 11.5a1.5 1.5 0 003 0" stroke="#06B6D4" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[9px] font-bold text-[#1a1a1a]">Report Submitted</p>
                  <p className="text-[8px] text-slate-400">Yearly Statements Filed</p>
                </div>
                <span className="ml-auto text-[8px] text-slate-400">05/31/2024</span>
              </div>
              <div className="mt-3 space-y-1.5 rounded-xl bg-slate-50 px-3 py-2.5 text-left">
                {[
                  ["Jurisdiction", "United States, Texas"],
                  ["Processing Duration", "21 days"],
                  ["Date of Filing", "May 31, 2024"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between">
                    <span className="text-[8px] text-slate-400">{k}</span>
                    <span className="text-[8px] font-semibold text-slate-600">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Trust Bar ────────────────────────────────────────────────────────────────

function TrustBar() {
  return (
    <div className="border-y border-slate-100 bg-[#F8FAFC] py-5 text-center text-sm font-semibold text-slate-600 md:text-base">
      Bootstrapped, Founder Led, Independently Owned{" "}
      <span className="font-extrabold text-[#06B6D4]">Since 2004</span> With{" "}
      <span className="font-extrabold text-[#06B6D4]">Over 1,000,000 Entrepreneurs</span> Served!
    </div>
  );
}

// ─── Why File Section ─────────────────────────────────────────────────────────

function WhyFileSection() {
  const items = [
    { num: 1, text: "100% State-Compliant – File in Minutes" },
    { num: 2, text: "Transparent Flat Fee – No Surprises" },
    { num: 3, text: "Real Human Support (Chat, Phone, Email)" },
    { num: 4, text: "Automated Deadline Reminders" },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-16">
      <h2 className="text-center text-4xl font-black text-[#1a1a1a] md:text-5xl">
        Why File With <span className="text-[#06B6D4]">Incorp Bay?</span>
      </h2>
      <div className="mt-14 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="flex justify-center">
          <div className="h-[340px] w-[320px] overflow-hidden rounded-[2rem] bg-slate-100 shadow-sm">
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <div className="mx-auto h-20 w-20 rounded-full bg-slate-200" />
                <p className="mt-3 text-sm text-slate-400">Business Owner</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.num}
              className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#06B6D4] text-sm font-bold text-white shadow shadow-[#06B6D4]/30">
                {item.num}
              </div>
              <span className="text-base font-semibold text-[#1a1a1a]">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Entity Selector ──────────────────────────────────────────────────────────

function EntitySelector() {
  const [entityType, setEntityType] = useState("S-Corporation");
  const [state, setState] = useState("Kentucky");

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-16">
      <h2 className="text-center text-4xl font-black text-[#1a1a1a] md:text-5xl">
        Choose your Entity Type and State
      </h2>
      <div className="mt-12 flex flex-wrap justify-center gap-6">
        {/* Entity Type Card */}
        <div className="w-72 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <p className="mb-4 text-center text-sm font-bold text-[#06B6D4]">Entity Type</p>
          <div className="flex h-36 items-center justify-center rounded-xl bg-slate-50">
            <div className="relative">
              <div className="absolute -right-3 -top-2 h-20 w-16 rotate-6 rounded-lg border-2 border-[#06B6D4] bg-white shadow" />
              <div className="relative h-20 w-16 rounded-lg border border-slate-200 bg-white shadow-md">
                <div className="absolute -bottom-1 -right-1 flex h-7 w-14 items-center justify-center rounded-md bg-[#1E293B] text-[9px] font-bold text-white">
                  Entity
                </div>
                <div className="mt-3 space-y-1.5 px-2">
                  <div className="h-1 rounded bg-slate-200" />
                  <div className="h-1 rounded bg-slate-200" />
                  <div className="h-1 w-2/3 rounded bg-slate-200" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-5">
            <select
              value={entityType}
              onChange={(e) => setEntityType(e.target.value)}
              className="w-full appearance-none rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm focus:border-[#06B6D4] focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/20"
            >
              {entityTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          </div>
        </div>

        {/* State Card */}
        <div className="w-72 rounded-2xl border border-[#06B6D4] bg-white p-6 shadow-sm">
          <p className="mb-4 text-center text-sm font-bold text-[#06B6D4]">State Of Formation</p>
          <div className="flex h-36 items-center justify-center rounded-xl bg-slate-50">
            <svg width="130" height="110" viewBox="0 0 130 110" fill="none">
              <path
                d="M20 15 L95 15 L95 18 L100 18 L100 45 L98 45 L98 55 L90 55 L90 65 L80 75 L75 90 L65 95 L55 88 L48 92 L40 85 L38 75 L30 70 L22 60 L18 48 L15 35 Z"
                fill="#06B6D4"
                opacity="0.85"
                stroke="white"
                strokeWidth="1.5"
              />
              <path d="M0 0 L20 15 L15 35 L10 65 L0 80Z" fill="#e2e8f0" opacity="0.5"/>
              <path d="M95 15 L130 10 L130 50 L100 45 L98 45Z" fill="#e2e8f0" opacity="0.5"/>
            </svg>
          </div>
          <div className="relative mt-5">
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full appearance-none rounded-full border border-[#06B6D4] bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/20"
            >
              {states.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Article + TOC ────────────────────────────────────────────────────────────

function ArticleSection() {
  const [activeItem, setActiveItem] = useState(0);
  const [orderEntity, setOrderEntity] = useState("");
  const [orderState, setOrderState] = useState("");

// eslint-disable-next-line no-unused-vars
const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

// Helper function for section refs - properly typed as RefCallback
const createSectionRef = (index: number) => (el: HTMLDivElement | null) => {
  sectionRefs.current[index] = el;
};

  // Scroll to section when TOC item clicked
  const handleTocClick = (id: number) => {
    setActiveItem(id);
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Highlight TOC item on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) setActiveItem(index);
          }
        });
      },
      { threshold: 0.3 }
    );
    sectionRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-10 md:px-16">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[260px_1fr] md:items-start">

        {/* ── TOC sidebar — LEFT ── */}
        <aside className="md:sticky md:top-8">
          <p className="mb-4 text-base font-black text-[#1a1a1a]">Table of Contents</p>
          <ul className="space-y-1">
            {tocItems.map((item) => {
              const isActive = activeItem === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleTocClick(item.id)}
className={`flex w-full items-start gap-2 rounded-xl px-3 py-3 text-left text-sm transition-all duration-150 ${
                      isActive
                        ? "border border-slate-200 bg-white font-bold text-[#06B6D4] shadow-sm"
                        : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    <ChevronRight
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                        isActive ? "text-[#06B6D4]" : "text-slate-300"
                      }`}
                    />
                    <span className="leading-snug">{item.short}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* ── Article content — RIGHT ── */}
        <article className="min-w-0 space-y-16">

{/* ─ Section 0 ─ */}
          <div ref={createSectionRef(0)}>
            <h1 className="text-4xl font-black leading-tight text-[#1a1a1a] md:text-5xl">
              What Happens If You Don't File an Annual Report (All Business Entities Covered)
            </h1>
            <p className="mt-4 text-sm font-medium text-slate-400">
              The must-know details about who files one, and the risks of failing to.
            </p>
            <p className="mt-5 leading-relaxed text-slate-600">
              There's a lot of paperwork you need to complete and file when you're running a business, and one of the most common is the annual report. While requirements for completing and returning these reports do vary between states, if you're legally required to file one, you should always do so. Failing to file an annual report can cause serious problems for your business.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              We'll explain the penalties for not filing your annual report, let you know how to avoid them and ensure your business stays in good standing.
            </p>

            {/* Status card */}
            <div className="mt-8 rounded-2xl bg-slate-50 p-6">
              <div className="rounded-xl bg-white p-5 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#06B6D4] shadow shadow-[#06B6D4]/30">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10h12M10 6l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Annual Report Status ✓</p>
                    <p className="text-lg font-black text-[#1a1a1a]">Yearly Statements Filed</p>
                  </div>
                </div>
                <div className="mt-5 space-y-3 border-t border-slate-100 pt-4">
                  {[
                    ["Filing Date", ""],
                    ["Jurisdiction", "United States, Texas"],
                    ["Period of Duration", "Perpetual"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between">
                      <span className="text-sm text-slate-400">{k}</span>
                      <span className="text-sm font-semibold text-[#1a1a1a]">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ─ Section 1 ─ */}
<div ref={createSectionRef(1)}>
            <h2 className="text-3xl font-black text-[#1a1a1a] md:text-4xl">
              Are Annual Reports Mandatory?
            </h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              In most cases, yes. If you're in a state that requires an annual report for your business type, then you{" "}
              <span className="font-semibold text-[#06B6D4]">must file the report</span>, on time, with the right state agency. But, it's worth breaking this down a little further.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              The following business types must file a report if required by the state:
            </p>
            <ul className="mt-3 ml-6 space-y-1 list-disc text-slate-600">
              {["Single-member and multi-member LLCs","S Corporations","C Corporations","Nonprofits"].map((i) => (
                <li key={i} className="text-sm leading-relaxed">{i}</li>
              ))}
            </ul>

            <h3 className="mt-8 text-xl font-black text-[#1a1a1a]">Exemptions for Filing an Annual Report</h3>
            <p className="mt-3 leading-relaxed text-slate-600">
              You do not need to file an annual report if either of the following are true:
            </p>
            <ul className="mt-3 ml-6 space-y-1 list-disc text-slate-600">
              <li className="text-sm leading-relaxed">You run a type of business that does not require an annual report.</li>
              <li className="text-sm leading-relaxed">Your state does not require businesses to file annual reports.</li>
            </ul>

            <h3 className="mt-8 text-xl font-black text-[#1a1a1a]">Types of Businesses That Do Not Need to File an Annual Report</h3>
            <p className="mt-3 leading-relaxed text-slate-600">
              Sole proprietorships and partnerships are two business types that don't need to file an annual report. If you haven't created a separate legal entity for your business, then you don't need to file an annual report. This means sole proprietors and general partnerships are generally not required to complete and file a report.
            </p>

            <h3 className="mt-8 text-xl font-black text-[#1a1a1a]">Some States Don't Require Annual Reports</h3>
            <p className="mt-3 leading-relaxed text-slate-600">
              Your state may not require businesses to file annual reports. Some states, like New Mexico and Ohio, don't require you to file an annual report for LLCs. Other states, like New York or Indiana, require you to file biennially (every two years).
            </p>
          </div>

          {/* ─ Section 2 ─ */}
<div ref={createSectionRef(2)}>
            <h2 className="text-3xl font-black text-[#1a1a1a] md:text-4xl">
              Learn If You Need to File an Annual Report
            </h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              We{" "}
              <span className="font-semibold text-[#06B6D4]">have an ongoing filing compliance tool</span>{" "}
              that tells you exactly what reports you{" "}
              <span className="font-semibold text-[#06B6D4]">need to file and when</span>. Just enter your business type and state, and we'll share important information about your annual reporting needs:
            </p>
            <ul className="mt-4 ml-6 space-y-1 list-disc text-slate-600">
              {[
                "How often your report is due",
                "When the report is due",
                "The filing fee",
                "Other important reporting information",
              ].map((i) => (
                <li key={i} className="text-sm leading-relaxed">{i}</li>
              ))}
            </ul>
          </div>

          {/* ─ Section 3 ─ */}
<div ref={createSectionRef(3)}>
            <h2 className="text-3xl font-black text-[#1a1a1a] md:text-4xl">
              What Happens to Businesses That Don't File Annual Reports?
            </h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              The penalties for not filing an annual report, or filing one late, can range from paying fines to having your business dissolved. To avoid that, you can{" "}
              <span className="font-semibold text-[#06B6D4]">file your annual report</span>{" "}
              with Incorp Bay. Let's break down what that means to each type of business.
            </p>

            {/* Penalty issued card */}
            <div className="mt-6 rounded-2xl bg-slate-50 p-6">
              <div className="rounded-xl bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-full bg-slate-200">
                      <div className="flex h-full items-center justify-center text-xs font-bold text-slate-400">JD</div>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#1a1a1a]">Jonathan D</p>
                      <p className="text-xs text-slate-400">ACME Design</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-orange-50 px-3 py-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#06B6D4]">
                      <AlertTriangle className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1a1a1a]">Penalty Issued</p>
                      <p className="text-[10px] font-semibold text-[#06B6D4]">Check Details ›</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="mt-8 text-xl font-black text-[#1a1a1a]">Do Single-Member LLCs Need to File an Annual Report?</h3>
            <p className="mt-3 leading-relaxed text-slate-600">
              If you have formed your LLC in a state that does not require annual reports, then you do not need to file. Otherwise, single-member LLCs do need to file a regular report. The penalties for not filing an annual report are typically as follows:
            </p>
            <ol className="mt-4 space-y-4">
              {[
                "After failing to file your LLC annual report on time, the state will write to you and may impose a late filing penalty that you must pay in addition to your regular annual report filing cost. The state will tell you when you must file, to avoid further action.",
                "If you still do not file, your LLC will lose its \"good standing,\" which may make it more difficult to run certain business operations.",
                "If you still do not file, your state agency will dissolve your LLC and strike it off the register. At this point, you will lose your liability protection and won't be able to continue as an LLC.",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#06B6D4]/10 text-xs font-black text-[#06B6D4]">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-slate-600">{text}</p>
                </li>
              ))}
            </ol>

            <h3 className="mt-8 text-xl font-black text-[#1a1a1a]">Do Multi-Member LLCs Need to File an Annual Report?</h3>
            <p className="mt-3 leading-relaxed text-slate-600">
              Yes, multi-member LLCs do need to file a regular report. The penalties for not filing an annual report are typically the same as for a single-member LLC.
            </p>

            <h3 className="mt-8 text-xl font-black text-[#1a1a1a]">Do Corporations Have to File an Annual Report?</h3>
            <p className="mt-3 leading-relaxed text-slate-600">
              If you have formed your corporation in a state that does not require annual reports, then you do not need to file. Otherwise, Corporations do need to file a regular report, and in some cases, this may be more rigorous than for smaller businesses.
            </p>
          </div>

          {/* ─ Section 4 ─ */}
<div ref={createSectionRef(4)}>
            <h2 className="text-3xl font-black text-[#1a1a1a] md:text-4xl">
              What Other Issues May Come from Not Filing an Annual Report?
            </h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              If your corporation or LLC is dissolved, this will cause issues with:
            </p>
            <ul className="mt-3 ml-6 space-y-1 list-disc text-slate-600">
              {[
                "Not being able to do business under that business name",
                "Making it more difficult to attract suppliers, partners and customers",
                "Causing issues with business ownership and shareholder interests",
              ].map((i) => (
                <li key={i} className="text-sm leading-relaxed">{i}</li>
              ))}
            </ul>

            {/* Dissolution date card */}
            <div className="mt-6 rounded-2xl bg-slate-50 p-6">
              <div className="rounded-xl bg-white p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Dissolution Date</p>
                <p className="mt-1 text-3xl font-black text-[#1a1a1a]">Dec 16 2024</p>
                <div className="mt-4 flex flex-wrap gap-4">
                  {[
                    { dot: "bg-[#06B6D4]", label: "Penalty Issued", date: "12/16/2024" },
                    { dot: "bg-slate-300", label: "Company Dissolved", date: "Completed" },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center gap-2">
                      <div className={`h-2.5 w-2.5 rounded-full ${s.dot}`} />
                      <span className="text-xs text-slate-600">{s.label}</span>
                      <span className="text-xs text-slate-400">{s.date}</span>
                    </div>
                  ))}
                </div>
<Link href="/annual-report/step-1" className="mt-4 inline-block rounded-full bg-[#06B6D4] px-5 py-2 text-xs font-bold text-white">
                  Check Details
                </Link>
              </div>
            </div>
          </div>

          {/* ─ Section 5 ─ */}
<div ref={createSectionRef(5)}>
            <h2 className="text-3xl font-black text-[#1a1a1a] md:text-4xl">
              Avoid Issues from Filing Annual Reports Late
            </h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              Fortunately, it's easy to avoid all of these late report filing problems by having Incorp Bay handle your annual report on your behalf. We provide a complete annual report filing service that takes care of your legal requirements. Even better, if you form your business with us, we'll send you reminders and file on your behalf, for your complete peace of mind.
            </p>
          </div>

        </article>
      </div>

{/* ─ Section 6: CTA + Order Widget — FULL WIDTH outside TOC/article grid ─ */}
      <div
        ref={createSectionRef(6)}
        className="mt-20 grid grid-cols-1 items-center gap-10 md:grid-cols-2"
      >
        {/* Left text */}
        <div>
          <p className="text-sm font-bold text-[#06B6D4]">Annual Report</p>
          <h2 className="mt-2 text-4xl font-black leading-tight text-[#1a1a1a] md:text-5xl">
            File Your Annual<br />Report Now
          </h2>
<p className="mt-4 text-sm font-medium text-slate-500">
            Don't Lose Liability Protection, Pay Penalties, and be Vulnerable to Lawsuits.
          </p>
          <Link href="/annual-report/step-1" className="mt-6 inline-block rounded-full bg-[#06B6D4] px-8 py-3.5 text-sm font-bold text-white shadow shadow-[#06B6D4]/30 transition hover:bg-[#0891b2]">
            GET STARTED
          </Link>
        </div>

        {/* Right: Order widget */}
        <div className="rounded-3xl border border-slate-100 bg-white shadow-xl">
          <div className="flex items-center justify-end rounded-t-3xl border-b border-slate-100 px-5 py-3">
            <span className="font-black italic text-[#1a1a1a]">
              <span className="text-[#06B6D4]">incorp</span>bay
            </span>
          </div>
          <div className="px-6 py-6">
            <p className="text-center text-base font-bold text-[#1a1a1a]">Annual Report</p>

            {/* Entity Type */}
            <div className="mt-5">
              <label className="mb-2 block text-xs font-semibold text-slate-500">Entity Type</label>
              <div className="relative">
                <select
                  value={orderEntity}
                  onChange={(e) => setOrderEntity(e.target.value)}
                  className="w-full appearance-none rounded-full border border-slate-200 bg-white px-5 py-3 text-sm text-slate-600 focus:border-[#06B6D4] focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/20"
                >
                  <option value="">Select Entity Type</option>
                  {entityTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              </div>
            </div>

            {/* Entity State */}
            <div className="mt-4">
              <label className="mb-2 block text-xs font-semibold text-slate-500">Entity State</label>
              <div className="relative">
                <select
                  value={orderState}
                  onChange={(e) => setOrderState(e.target.value)}
                  className="w-full appearance-none rounded-full border border-slate-200 bg-white px-5 py-3 text-sm text-slate-600 focus:border-[#06B6D4] focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/20"
                >
                  <option value="">Select State</option>
                  {states.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              </div>
            </div>

            {/* Price box */}
            <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-center">
              <p className="text-4xl font-black text-[#1a1a1a]">$0</p>
              <p className="text-xs text-slate-400">Plus $0 State Fee</p>
            </div>

{/* CTA button */}
            <Link href="/annual-report/step-1" className="mt-5 w-full inline-block rounded-full bg-[#06B6D4] py-4 text-sm font-black uppercase tracking-wider text-white shadow-md shadow-[#06B6D4]/30 transition hover:bg-[#0891b2] text-center">
              ORDER NOW
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-[#F8FAFC] px-6 py-6 text-center text-sm text-slate-400">
      © 2024 Incorp Bay Inc. All Rights Reserved.
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AnnualReportPage() {
  return (
    <NavigationWrapper>
      <div className="min-h-screen bg-white text-[#1a1a1a]">
        <Hero />
        <TrustBar />
        <WhyFileSection />
        <EntitySelector />
        <ArticleSection />
      </div>
    </NavigationWrapper>
  );
}
