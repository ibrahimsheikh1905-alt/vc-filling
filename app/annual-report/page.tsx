"use client";

import React, { useState, useEffect, useRef, RefCallback } from "react";
import { Star, ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NavigationWrapper from "@/components/NavigationWrapper";

const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";

const LOGO_GRADIENT_TEXT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent";

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
          <Star className="h-4 w-4 fill-[#2B93C9] text-[#2B93C9]" />
          <span className="font-bold text-slate-700">Trustpilot</span>
        </div>

        <h1 className="mt-5 text-5xl font-bold leading-[1.08] tracking-tight text-[#1E293B] md:text-6xl">
          File My Annual<br />
          Report – Fast,<br />
          Easy &amp; 100%<br />
          <span className={LOGO_GRADIENT_TEXT}>State-Compliant</span>
        </h1>

        <p className="mt-5 text-base font-normal text-slate-500">
          Avoid late fees and protect your business standing — we'll<br />
          file your Annual Report in just minutes.
        </p>

<div className="mt-8 flex flex-wrap gap-4">
          <Link href="/annual-report/step-1" className={`${LOGO_GRADIENT} group relative flex flex-col overflow-hidden rounded-2xl px-5 py-2.5 text-left text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_35px_rgba(43,147,201,0.45)]`}>
            <span className="absolute inset-x-0 top-0 h-1/2 rounded-2xl bg-gradient-to-b from-white/20 to-transparent" />
            <span className="absolute -left-20 top-0 h-full w-12 -skew-x-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />

            <span className="relative z-10 text-xs font-semibold opacity-90">File Your Annual Report</span>
            <div className="relative z-10 mt-1 flex items-center gap-2 text-sm font-bold">
              Get Started
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
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

      {/* Right — Annual Report image */}
      <div className="flex justify-center md:justify-end">
        <div className="relative w-full max-w-md">
          <div className="absolute inset-0 -z-10 scale-95 rounded-3xl bg-gradient-to-br from-[#2B93C9]/8 to-[#2B93C9]/4" />
          <Image
            src="/annual-port/Hero-annual-report.webp"
            alt="Annual Report"
            width={800}
            height={450}
            className="w-full rounded-3xl object-cover shadow-2xl"
            priority
          />
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
      <span className={`font-bold ${LOGO_GRADIENT_TEXT}`}>Since 2004</span> With{" "}
      <span className={`font-bold ${LOGO_GRADIENT_TEXT}`}>Over 1,000,000 Entrepreneurs</span> Served!
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
      <h2 className="text-center text-4xl font-bold text-[#1E293B] md:text-5xl">
        Why File With <span className={LOGO_GRADIENT_TEXT}>Incorp Bay?</span>
      </h2>
      <div className="mt-14 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="flex justify-center">
          <div className="relative aspect-video w-full max-w-md overflow-hidden rounded-[2rem] shadow-sm">
            <Image
              src="/annual-port/vid.webp"
              alt="Annual Report filing"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.num}
              className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-sm transition hover:shadow-md"
            >
              <div className={`${LOGO_GRADIENT} flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white shadow shadow-[#2B93C9]/30`}>
                {item.num}
              </div>
              <span className="text-base font-semibold text-[#1E293B]">{item.text}</span>
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
      <h2 className="text-center text-4xl font-bold text-[#1E293B] md:text-5xl">
        Choose your Entity Type and State
      </h2>
      <div className="mt-12 flex flex-wrap justify-center gap-6">
        {/* Entity Type Card */}
        <div className="w-72 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <p className={`mb-4 text-center text-sm font-bold ${LOGO_GRADIENT_TEXT}`}>Entity Type</p>
          <div className="relative h-36 overflow-hidden rounded-xl bg-slate-50">
            <Image
              src="/annual-port/Annual-report-entity-selector-image.webp"
              alt="Entity Type"
              fill
              className="object-contain p-2"
            />
          </div>
          <div className="relative mt-5">
            <select
              value={entityType}
              onChange={(e) => setEntityType(e.target.value)}
              className="w-full appearance-none rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm focus:border-[#2B93C9] focus:outline-none focus:ring-2 focus:ring-[#2B93C9]/20"
            >
              {entityTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          </div>
        </div>

        {/* State Card */}
        <div className="w-72 rounded-2xl border border-[#2B93C9] bg-white p-6 shadow-sm">
          <p className={`mb-4 text-center text-sm font-bold ${LOGO_GRADIENT_TEXT}`}>State Of Formation</p>
          <div className="relative h-36 overflow-hidden rounded-xl bg-slate-50">
            <Image
              src="/annual-port/Annual-report-state-selector-image.webp"
              alt="State Of Formation"
              fill
              className="object-contain p-2"
            />
          </div>
          <div className="relative mt-5">
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full appearance-none rounded-full border border-[#2B93C9] bg-white px-5 py-3 text-sm font-medium text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2B93C9]/20"
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
          <p className="mb-4 text-base font-bold text-[#1E293B]">Table of Contents</p>
          <ul className="space-y-1">
            {tocItems.map((item) => {
              const isActive = activeItem === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleTocClick(item.id)}
className={`flex w-full items-start gap-2 rounded-xl px-3 py-3 text-left text-sm transition-all duration-150 ${
                      isActive
                        ? `border border-slate-200 bg-white font-bold shadow-sm ${LOGO_GRADIENT_TEXT}`
                        : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    <ChevronRight
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                        isActive ? "text-[#2B93C9]" : "text-slate-300"
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
            <h1 className="text-4xl font-bold leading-tight text-[#1E293B] md:text-5xl">
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
            <div className="relative mt-8 h-[280px] w-full overflow-hidden rounded-2xl sm:h-[340px]">
              <Image
                src="/annual-port/Annual-report-toc-1.webp"
                alt="Annual Report Submitted"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* ─ Section 1 ─ */}
<div ref={createSectionRef(1)}>
            <h2 className="text-3xl font-bold text-[#1E293B] md:text-4xl">
              Are Annual Reports Mandatory?
            </h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              In most cases, yes. If you're in a state that requires an annual report for your business type, then you{" "}
              <span className={`font-semibold ${LOGO_GRADIENT_TEXT}`}>must file the report</span>, on time, with the right state agency. But, it's worth breaking this down a little further.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              The following business types must file a report if required by the state:
            </p>
            <ul className="mt-3 ml-6 space-y-1 list-disc text-slate-600">
              {["Single-member and multi-member LLCs","S Corporations","C Corporations","Nonprofits"].map((i) => (
                <li key={i} className="text-sm leading-relaxed">{i}</li>
              ))}
            </ul>

            <h3 className="mt-8 text-xl font-bold text-[#1E293B]">Exemptions for Filing an Annual Report</h3>
            <p className="mt-3 leading-relaxed text-slate-600">
              You do not need to file an annual report if either of the following are true:
            </p>
            <ul className="mt-3 ml-6 space-y-1 list-disc text-slate-600">
              <li className="text-sm leading-relaxed">You run a type of business that does not require an annual report.</li>
              <li className="text-sm leading-relaxed">Your state does not require businesses to file annual reports.</li>
            </ul>

            <h3 className="mt-8 text-xl font-bold text-[#1E293B]">Types of Businesses That Do Not Need to File an Annual Report</h3>
            <p className="mt-3 leading-relaxed text-slate-600">
              Sole proprietorships and partnerships are two business types that don't need to file an annual report. If you haven't created a separate legal entity for your business, then you don't need to file an annual report. This means sole proprietors and general partnerships are generally not required to complete and file a report.
            </p>

            <h3 className="mt-8 text-xl font-bold text-[#1E293B]">Some States Don't Require Annual Reports</h3>
            <p className="mt-3 leading-relaxed text-slate-600">
              Your state may not require businesses to file annual reports. Some states, like New Mexico and Ohio, don't require you to file an annual report for LLCs. Other states, like New York or Indiana, require you to file biennially (every two years).
            </p>
          </div>

          {/* ─ Section 2 ─ */}
<div ref={createSectionRef(2)}>
            <h2 className="text-3xl font-bold text-[#1E293B] md:text-4xl">
              Learn If You Need to File an Annual Report
            </h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              We{" "}
              <span className={`font-semibold ${LOGO_GRADIENT_TEXT}`}>have an ongoing filing compliance tool</span>{" "}
              that tells you exactly what reports you{" "}
              <span className={`font-semibold ${LOGO_GRADIENT_TEXT}`}>need to file and when</span>. Just enter your business type and state, and we'll share important information about your annual reporting needs:
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
            <h2 className="text-3xl font-bold text-[#1E293B] md:text-4xl">
              What Happens to Businesses That Don't File Annual Reports?
            </h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              The penalties for not filing an annual report, or filing one late, can range from paying fines to having your business dissolved. To avoid that, you can{" "}
              <span className={`font-semibold ${LOGO_GRADIENT_TEXT}`}>file your annual report</span>{" "}
              with Incorp Bay. Let's break down what that means to each type of business.
            </p>

            {/* Penalty issued card */}
            <div className="relative mt-6 h-[300px] w-full overflow-hidden rounded-2xl sm:h-[360px]">
              <Image
                src="/annual-port/Annual-report-toc-2.webp"
                alt="Annual Report penalty notice"
                fill
                className="object-contain"
              />
            </div>

            <h3 className="mt-8 text-xl font-bold text-[#1E293B]">Do Single-Member LLCs Need to File an Annual Report?</h3>
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
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#2B93C9]/10 text-xs font-bold text-[#2B93C9]">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-slate-600">{text}</p>
                </li>
              ))}
            </ol>

            <h3 className="mt-8 text-xl font-bold text-[#1E293B]">Do Multi-Member LLCs Need to File an Annual Report?</h3>
            <p className="mt-3 leading-relaxed text-slate-600">
              Yes, multi-member LLCs do need to file a regular report. The penalties for not filing an annual report are typically the same as for a single-member LLC.
            </p>

            <h3 className="mt-8 text-xl font-bold text-[#1E293B]">Do Corporations Have to File an Annual Report?</h3>
            <p className="mt-3 leading-relaxed text-slate-600">
              If you have formed your corporation in a state that does not require annual reports, then you do not need to file. Otherwise, Corporations do need to file a regular report, and in some cases, this may be more rigorous than for smaller businesses.
            </p>
          </div>

          {/* ─ Section 4 ─ */}
<div ref={createSectionRef(4)}>
            <h2 className="text-3xl font-bold text-[#1E293B] md:text-4xl">
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
            <Link href="/annual-report/step-1" className="relative mt-6 block h-[320px] w-full overflow-hidden rounded-2xl sm:h-[380px]">
              <Image
                src="/annual-port/Annual-report-toc-3.webp"
                alt="Business dissolution timeline"
                fill
                className="object-contain"
              />
            </Link>
          </div>

          {/* ─ Section 5 ─ */}
<div ref={createSectionRef(5)}>
            <h2 className="text-3xl font-bold text-[#1E293B] md:text-4xl">
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
          <p className={`text-sm font-bold ${LOGO_GRADIENT_TEXT}`}>Annual Report</p>
          <h2 className="mt-2 text-4xl font-bold leading-tight text-[#1E293B] md:text-5xl">
            File Your Annual<br />Report Now
          </h2>
<p className="mt-4 text-sm font-medium text-slate-500">
            Don't Lose Liability Protection, Pay Penalties, and be Vulnerable to Lawsuits.
          </p>
          <Link href="/annual-report/step-1" className={`${LOGO_GRADIENT} group relative mt-6 inline-flex overflow-hidden rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_35px_rgba(43,147,201,0.45)]`}>
            <span className="absolute inset-x-0 top-0 h-1/2 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
            <span className="absolute -left-20 top-0 h-full w-12 -skew-x-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />
            <span className="relative z-10">GET STARTED</span>
          </Link>
        </div>

        {/* Right: Order widget */}
        <div className="rounded-3xl border border-slate-100 bg-white shadow-xl">
          <div className="flex items-center justify-end rounded-t-3xl border-b border-slate-100 px-5 py-3">
            <span className="font-bold italic text-[#1E293B]">
              <span className={LOGO_GRADIENT_TEXT}>incorp</span>bay
            </span>
          </div>
          <div className="px-6 py-6">
            <p className="text-center text-base font-bold text-[#1E293B]">Annual Report</p>

            {/* Entity Type */}
            <div className="mt-5">
              <label className="mb-2 block text-xs font-semibold text-slate-500">Entity Type</label>
              <div className="relative">
                <select
                  value={orderEntity}
                  onChange={(e) => setOrderEntity(e.target.value)}
                  className="w-full appearance-none rounded-full border border-slate-200 bg-white px-5 py-3 text-sm text-slate-600 focus:border-[#2B93C9] focus:outline-none focus:ring-2 focus:ring-[#2B93C9]/20"
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
                  className="w-full appearance-none rounded-full border border-slate-200 bg-white px-5 py-3 text-sm text-slate-600 focus:border-[#2B93C9] focus:outline-none focus:ring-2 focus:ring-[#2B93C9]/20"
                >
                  <option value="">Select State</option>
                  {states.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              </div>
            </div>

            {/* Price box */}
            <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 text-center">
              <p className="text-4xl font-bold text-[#1E293B]">$0</p>
              <p className="text-xs text-slate-400">Plus $0 State Fee</p>
            </div>

{/* CTA button */}
            <Link href="/annual-report/step-1" className={`${LOGO_GRADIENT} group relative mt-5 block w-full overflow-hidden rounded-full px-7 py-3.5 text-center text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_35px_rgba(43,147,201,0.45)]`}>
              <span className="absolute inset-x-0 top-0 h-1/2 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
              <span className="absolute -left-20 top-0 h-full w-12 -skew-x-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />
              <span className="relative z-10">ORDER NOW</span>
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
      <div className="min-h-screen bg-white text-[#1E293B]">
        <Hero />
        <TrustBar />
        <WhyFileSection />
        <EntitySelector />
        <ArticleSection />
      </div>
    </NavigationWrapper>
  );
}
