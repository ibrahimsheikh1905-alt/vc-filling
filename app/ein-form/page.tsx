"use client";

import React, { useEffect, useRef, useState } from "react";
import NavigationWrapper from "@/components/NavigationWrapper";

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#00b67a" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const ChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 6l6 6-6 6" />
  </svg>
);

const PrimaryButton = ({ children }: { children: React.ReactNode }) => (
  <button className="rounded-full border border-cyan-500 bg-cyan-500 px-7 py-3.5 text-sm font-bold tracking-wide text-white shadow-sm transition-all duration-300 hover:border-cyan-600 hover:bg-cyan-600 hover:shadow-md">
    {children}
  </button>
);

const PhoneMockupEIN = () => (
  <div className="relative w-[220px] rounded-[20px] bg-white p-4 text-xs shadow-xl">
    <div className="mb-3 flex items-center gap-2">
      <div className="h-8 w-8 rounded-full bg-slate-200" />
      <div>
        <div className="text-[13px] font-bold text-slate-900">Jonathan Davis</div>
        <div className="text-[11px] text-slate-500">ACME Design LLC</div>
      </div>
    </div>

    <div className="mb-2.5 text-base font-bold text-slate-900">EIN Details</div>

    <div className="mb-3 rounded-xl bg-cyan-500 px-3.5 py-3 text-white">
      <div className="mb-1 text-[10px] opacity-85">EIN Status ●</div>
      <div className="text-base font-bold">Assigned (US Citizen)</div>
      <div className="mt-1 text-[10px] opacity-75">Date of Notice: May 12, 2024</div>
    </div>

    <div className="absolute right-[-30px] top-[130px] w-[170px] rounded-xl bg-white p-3 text-[10px] shadow-xl">
      <div className="mb-1 flex justify-between">
        <span className="font-bold">Order Completed</span>
        <span className="text-emerald-500">✓</span>
      </div>
      <div className="mb-2 text-slate-400">Date of This Notice: May 12 2023</div>
      <div className="mb-1 h-1 rounded bg-emerald-500" />
      <div className="flex justify-between text-[9px] text-slate-400">
        <span>Processing</span>
        <span>Forwarded</span>
        <span>Shipped</span>
      </div>
    </div>

    <div className="mb-2 mt-[50px] font-semibold text-slate-900">EIN Summary</div>
    <div className="mb-2 text-[11px] text-slate-500">Insights</div>

    {[
      { label: "Service Requested", date: "05/31/2024" },
      { label: "Application Reviewed", date: "06/08/2024" },
    ].map((item) => (
      <div key={item.label} className="flex justify-between border-b border-slate-100 py-1.5 text-slate-700">
        <span className="flex items-center gap-1.5">
          <span className="text-cyan-500">✓</span>
          {item.label}
        </span>
        <span className="text-[11px] text-slate-500">{item.date}</span>
      </div>
    ))}
  </div>
);

const MiniEinCard = () => (
  <div className="w-[220px] rounded-[20px] bg-white p-4 text-xs shadow-xl">
    <div className="mb-3 flex items-center gap-2">
      <div className="h-6.5 w-6.5 rounded-full bg-slate-200" />
      <span className="ml-auto text-sm">⠿</span>
    </div>
    <div className="mb-1 text-[15px] font-bold text-slate-900">EIN Number</div>
    <div className="mb-0.5 text-[10px] text-slate-400">STATUS</div>
    <div className="mb-2.5 text-xs text-emerald-500">EIN Assigned ✓</div>
    <div className="mb-2.5 rounded-xl bg-cyan-500 px-3 py-2.5 text-white">
      <div className="flex justify-between">
        <span className="text-[13px] font-bold">OBTAINED</span>
        <span>📄</span>
      </div>
      <div className="mt-1 text-[10px] opacity-85">EMPLOYER IDENTIFICATION NUMBER</div>
      <div className="text-base font-extrabold">12-3456789</div>
    </div>
    <div className="text-[10px] leading-relaxed text-slate-400">
      Date of This Notice: May 12 2023<br />
      Number of This Notice: CP 575 G<br />
      For Assistance You May Call: 1-800-829-4922
    </div>
  </div>
);

export default function IncorpBayEINPage() {
  const [activeTOC, setActiveTOC] = useState(0);
  const [progress, setProgress] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const createSectionRef = (index: number) => (el: HTMLDivElement | null) => {
    sectionRefs.current[index] = el;
  };

  const handleTocClick = (index: number) => {
    setActiveTOC(index);
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    let animationFrameId: number | null = null;
    let startTime: number | null = null;
    const duration = 9000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      setProgress((elapsed % duration) / duration);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) setActiveTOC(index);
          }
        });
      },
      { threshold: 0.25, rootMargin: "-110px 0px -55% 0px" },
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const tocItems = [
    "Do I Need an EIN for my LLC? (Plus Other Important FAQs)",
    "What Is an EIN? Is It the Same as an LLC?",
    "If I Have an LLC, Do I Need an EIN?",
    "Benefits of Having an EIN",
    "Is an EIN the Same as an SSN for an LLC?",
    "What Do I Need to Get an EIN for My LLC?",
    "How to Apply for an EIN",
    "What to Do After Getting an EIN",
    "Will I Ever Need to Change My EIN?",
    "Frequently Asked Questions",
    "Establish Your Business With an EIN",
  ];

  const taxSteps = [
    {
title: "Obtain SS4 Form",
accent: "Through Incorp Bay",
      body: (
        <div className="rounded-xl bg-slate-50 p-4">
          <div className="mb-2 flex justify-between text-[13px] font-semibold">
            <span>Form SS4 Form</span>
            <span>→</span>
          </div>
          <div className="mb-1 text-[11px] text-slate-500">Process ●</div>
Incorp Bay Order
          <div className="mb-1.5 h-1.5 w-3/4 rounded bg-cyan-500" />
          <div className="flex justify-between text-[11px] text-slate-500">
            <span>Your progress</span>
            <span>75%</span>
          </div>
        </div>
      ),
    },
    {
      title: "Fill Out the SS4 Form Using Our",
      accent: "Quick Application",
      body: <div className="mb-4 flex h-[140px] items-center justify-center rounded-xl bg-slate-50 text-3xl">📝</div>,
    },
    {
      title: "Receive an EIN Number for",
      accent: "Your Business",
      body: (
        <div className="rounded-xl bg-slate-50 p-4">
          <div className="mb-3 flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-slate-200" />
            <span className="ml-auto text-base">⠿</span>
          </div>
          <div className="mb-1 text-xs text-slate-500">EIN Number</div>
          <div className="mb-0.5 text-[11px] text-slate-400">STATUS</div>
          <div className="mb-2.5 text-[13px]">EIN Assigned ✓</div>
          <div className="flex items-center justify-between rounded-lg bg-cyan-500 px-3 py-2 text-[13px] font-bold text-white">OBTAINED 📄</div>
        </div>
      ),
    },
  ];

  const needEinItems = [
    { icon: "📄", title: "Sole Proprietorships with No Employees", desc: "If you're a sole proprietor with no employees, an EIN may not be needed." },
    { icon: "➡️", title: "Single-Member LLCs", desc: "Single-member LLCs may use a Social Security Number." },
    { icon: "🚀", title: "EIN Advantages", desc: "An EIN simplifies taxes and separates finances." },
    { icon: "📋", title: "EIN as Tax ID", desc: "An EIN acts as a tax ID for LLCs and other entities, simplifying tax reporting and establishing legal identity." },
  ];

  const usingEin = [
    { title: "Tax Forms", desc: "Required for filing business tax returns and W9 forms." },
    { title: "Payroll Management", desc: "Use your EIN for forms related to managing employee payroll." },
    { title: "Business Bank Account", desc: "An EIN is necessary to set up a business bank account." },
    { title: "Business Loans", desc: "You'll need an EIN to apply for business loans." },
  ];

  const needList = [
    "You have or are planning to hire employees.",
    "You're operating a multi-member LLC.",
    "You're a single-member LLC and want to be taxed as an S Corp or corporation.",
    "You pay employment, alcohol, excise, tobacco, or firearms taxes.",
    "You have a Keogh plan.",
    "You do business with trusts, nonprofit organizations, estates, real estate mortgage investments, plan administrators, and farmers' cooperatives.",
    "You took ownership of an existing LLC.",
    "You wish to restructure as a corporation.",
  ];

  const benefits = [
    "Create a clear distinction between your business and yourself",
    "Make it easier to secure startup funding",
    "Enable yourself to open a business bank account",
    "Establish business credit",
    "Get assistance with bookkeeping and tracking of business finances",
    "Add an additional layer of security and privacy to your business",
    "Protect yourself from identity theft",
    "Build professional credibility with vendors and customers",
    "Speed up the process of attaining business licenses and permits",
    "Receive tax breaks and credits for business expenses, salaries, and wages",
  ];

  const einRequirements = [
    { b: "Your business's legal name and official address", t: "Enter the legal name used on your formation documents. If you're operating under a Doing Business As DBA, use that name on the application, and add your official business address. Virtual addresses are accepted." },
    { b: "Type of legal entity", t: "Are you a sole proprietor, LLC, nonprofit organization, or corporation?" },
    { b: "Start date", t: "If you have already filed as an LLC, enter the date of formation. Otherwise, enter the date you intend to start your business." },
    { b: "Owner's name and tax ID", t: "For domestic LLCs, you can use your SSN as a tax ID. For international LLCs and business owners who don't have an SSN, use your appointed Individual Taxpayer Identification Number (ITIN)." },
    { b: "Number of LLC members", t: "How many members are in your LLC?" },
    { b: "Reason for applying for EIN", t: "Are you hiring employees, creating a pension plan, or changing entity types?" },
    { b: "The maximum number of employees expected in the next 12 months", t: "Include an accurate prediction of your future hiring needs." },
    { b: "Will you pay employment taxes annually or quarterly?", t: "Once you decide, be sure to tell the IRS immediately." },
  ];

  const currentNeedStep = Math.min(
    Math.floor(progress * needEinItems.length) + 1,
    needEinItems.length,
  );

return (
    <NavigationWrapper>
<main className="min-h-screen bg-white text-[#1a1a1a]">
      <section className="mx-auto flex max-w-7xl flex-wrap items-center gap-14 px-8 py-16">
        <div className="flex-1 basis-[400px]">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 px-3.5 py-1.5 text-[13px] font-medium">
            Excellent 4.7 out of 5 <StarIcon /> Trustpilot
          </div>
          <h1 className="mb-5 max-w-2xl text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl">
Get Your EIN Fast with Incorp Bay: Simple, Quick, and Hassle-Free
          </h1>
          <p className="mb-8 max-w-lg text-base leading-7 text-slate-600">
Secure your business&apos;s Tax ID. Let Incorp Bay handle the paperwork so you can focus on what matters most.
          </p>
          <PrimaryButton>ORDER NOW</PrimaryButton>
        </div>

        <div className="flex flex-1 basis-[300px] justify-center">
          <div className="relative flex min-h-[380px] items-center justify-center overflow-hidden rounded-3xl bg-cyan-50 p-6">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-200/60" />
            <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-cyan-100" />
            <PhoneMockupEIN />
          </div>
        </div>
      </section>

      <div className="border-y border-slate-200 px-8 py-4 text-center text-sm text-slate-700 md:text-[15px]">
        <span className="text-slate-500">●</span>&nbsp; Bootstrapped, Founder Led, Independently Owned &nbsp;
        <span className="rounded-md bg-cyan-100 px-2.5 py-0.5 font-bold text-cyan-800">Since 2004</span>
        &nbsp; With &nbsp;
        <span className="rounded-md bg-cyan-100 px-2.5 py-0.5 font-bold text-cyan-800">Over 1,000,000 Entrepreneurs</span>
        &nbsp; Served! &nbsp;<span className="text-slate-500">●</span>
      </div>

      <section className="mx-auto my-12 max-w-7xl px-8">
        <div className="flex flex-wrap items-center gap-12 rounded-[20px] border border-slate-200 bg-gradient-to-br from-white via-white to-cyan-50 p-8 md:p-12">
          <div className="flex-1 basis-[300px]">
Incorp Bay&apos;s<br />Startup Central
            <p className="mb-6 max-w-lg text-[15px] leading-7 text-slate-500">
              The media center. Guts, grit, and a game plan for launching your business.
            </p>
<PrimaryButton>VISIT INCORP BAY&apos;S STARTUP CENTRAL</PrimaryButton>
          </div>
          <div className="flex flex-1 basis-[240px] justify-end">
            <div className="max-w-[260px] rounded-2xl bg-cyan-50 p-6">
              <div className="mb-2.5 text-[11px] font-bold uppercase tracking-widest text-slate-400">How To</div>
              <div className="mb-3 h-[100px] rounded-lg bg-slate-200" />
              <div className="mb-1 text-sm font-bold">BUSINESS IDEAS</div>
              <p className="text-xs text-slate-500">Understanding Data Privacy Laws and How They Impact Small Businesses</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16 bg-slate-50 px-8 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-center text-4xl font-extrabold">How to Get a Tax ID Number</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-base leading-7 text-slate-500">
Get your EIN (Tax ID) fast with Incorp Bay — easy, convenient, and delivered electronically within one business day.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {taxSteps.map((step) => (
              <div key={step.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 text-base font-bold">
                  {step.title} <span className="text-cyan-500">{step.accent}</span>
                </div>
                {step.body}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mb-12 max-w-7xl px-8">
        <div className="flex items-center gap-3.5 rounded-2xl border border-slate-200 p-4 md:px-5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-700">✓</span>
          <span className="text-sm text-slate-700">
let <strong className="text-cyan-600">Incorp Bay</strong>
          </span>
        </div>
      </section>

      <section className="mx-auto mb-20 max-w-7xl px-6 md:px-16">
        <h2 className="mx-auto mb-14 max-w-4xl text-center text-4xl font-black leading-tight tracking-tight text-[#0f0f1a] md:text-5xl">
          Do You Need a Federal EIN for Your Business Entity?
        </h2>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="relative w-full py-6">
            <div className="absolute bottom-[84px] left-6 top-12 z-0 w-1 -translate-x-1/2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="w-full rounded-full bg-[#06B6D4] transition-[height] duration-100 ease-linear"
                style={{ height: `${progress * 100}%` }}
              />
            </div>

            {needEinItems.map((item, index) => {
              const stepSize = 1 / needEinItems.length;
              const isPassed = progress >= index * stepSize;
              const isCurrent = currentNeedStep === index + 1;

              return (
                <div
                  key={item.title}
                  className={`relative z-10 flex min-h-[120px] w-full select-none items-start ${
                    index === needEinItems.length - 1 ? "mb-0" : "mb-12"
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 text-xl transition-all duration-300 ${
                      isPassed
                        ? "scale-105 border-[#06B6D4] bg-cyan-50 text-[#06B6D4] shadow-md"
                        : "border-slate-300 bg-white text-slate-400"
                    } ${isCurrent ? "ring-4 ring-cyan-100/70" : ""}`}
                  >
                    {item.icon}
                  </div>

                  <div className="w-full pl-4 text-left">
                    <p
                      className={`text-xs font-black uppercase tracking-wider transition-colors duration-300 ${
                        isCurrent
                          ? "text-[#06B6D4]"
                          : isPassed
                            ? "text-[#06B6D4]/70"
                            : "text-slate-400"
                      }`}
                    >
                      Step {index + 1}
                    </p>
                    <h3
                      className={`mt-1 text-lg font-black transition-colors duration-300 md:text-xl ${
                        isCurrent
                          ? "text-[#0f0f1a]"
                          : isPassed
                            ? "text-[#0f0f1a]/80"
                            : "text-slate-400"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`mt-2 text-sm leading-relaxed transition-all duration-300 md:text-base ${
                        isCurrent
                          ? "text-slate-600 opacity-100"
                          : isPassed
                            ? "text-slate-500 opacity-80"
                            : "text-slate-400/70 opacity-60"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-[270px]">
              <div className="rounded-[2.5rem] border-[10px] border-[#1a1a1a] bg-white shadow-2xl">
                <div className="absolute left-1/2 top-3 h-3 w-16 -translate-x-1/2 rounded-full bg-[#1a1a1a]" />
                <div className="px-5 pb-8 pt-10">
                  <div className="flex items-center justify-between">
                    <div className="h-8 w-8 rounded-full bg-[#06B6D4]" />
                    <span className="rounded-full bg-cyan-100 px-3 py-1 text-[10px] font-black text-[#06B6D4]">
                      Active
                    </span>
                  </div>

                  <p className="mt-5 text-base font-black text-[#0f0f1a]">
                    EIN Eligibility
                  </p>

                  <div className="mt-4 rounded-2xl bg-gradient-to-br from-[#06B6D4] to-[#0891b2] p-5 text-white shadow-lg shadow-[#06B6D4]/30">
                    <p className="text-xs font-semibold opacity-90">✓ Federal Tax ID</p>
                    <p className="mt-2 text-2xl font-black leading-tight">
                      Business Entity Check
                    </p>
                    <p className="mt-1 text-xs opacity-90">
                      Track your EIN requirements step by step
                    </p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {needEinItems.map((item, index) => {
                      const stepPoint = index / needEinItems.length;
                      const isActive = progress >= stepPoint;

                      return (
                        <div key={item.title} className="flex items-center gap-3">
                          <span
                            className={`h-3.5 w-3.5 rounded-full border transition-all duration-300 ${
                              isActive
                                ? "border-[#06B6D4] bg-[#06B6D4] shadow-sm shadow-[#06B6D4]/40"
                                : "border-slate-300 bg-white"
                            }`}
                          />
                          <div className="min-w-0 flex-1">
                            <p
                              className={`truncate text-[10px] font-bold transition-colors duration-300 ${
                                isActive ? "text-[#0f0f1a]" : "text-slate-400"
                              }`}
                            >
                              {item.title}
                            </p>
                            <div className="mt-1 h-1.5 w-full rounded bg-slate-100" />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <button className="mt-6 w-full rounded-full bg-[#06B6D4] py-3 text-xs font-black uppercase tracking-wider text-white shadow-md shadow-[#06B6D4]/25 transition hover:bg-[#0891b2]">
                    Check EIN Need
                  </button>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -inset-6 rounded-full border border-[#06B6D4]/20" />
                <div className="absolute -inset-12 rounded-full border border-[#06B6D4]/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mb-16 flex max-w-7xl flex-wrap items-center gap-14 px-8">
        <div className="relative flex min-h-[300px] flex-1 basis-[380px] items-center justify-center">
          <div className="absolute left-0 h-[260px] w-[280px] rounded-[20px] bg-slate-900" />
          <div className="absolute left-[60px] top-0 w-[200px] rounded-2xl bg-white p-4 text-xs shadow-xl">
            <div className="mb-2 flex items-center justify-between"><span className="font-semibold">Your Account</span><span className="rounded-md border border-slate-200 px-1.5 py-0.5 text-[10px]">Monthly ▾</span></div>
            <div className="mb-2.5 text-2xl font-extrabold">$50,000</div>
            <div className="mb-1.5 h-[50px] rounded-md bg-gradient-to-b from-cyan-100 to-transparent" />
            <div className="flex justify-between text-[9px] text-slate-400"><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span></div>
          </div>
          <div className="absolute left-5 top-40 w-[220px] rounded-2xl bg-white p-4 text-xs shadow-xl">
            <div className="mb-2.5 font-bold">Documents</div>
            {[{ name: "Payroll Management", sub: "Business Overview", date: "06/08/2024" }, { name: "Tax Forms", sub: "W9 forms", date: "01/24/2024" }].map((d) => (
              <div key={d.name} className="flex justify-between border-t border-slate-100 py-1.5">
                <div className="flex gap-2"><span>📄</span><div><div className="text-[11px] font-semibold">{d.name}</div><div className="text-[10px] text-slate-400">{d.sub}</div></div></div>
                <span className="text-[10px] text-slate-400">{d.date}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 basis-[380px]">
          <h2 className="mb-7 text-4xl font-extrabold">Using an EIN</h2>
          {usingEin.map((item, index) => (
            <div key={item.title} className="mb-5 flex gap-3.5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-500 text-sm font-bold text-white">{index + 1}</span>
              <div>
                <div className="mb-1 text-base font-bold">{item.title}</div>
                <p className="text-sm leading-6 text-cyan-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-wrap gap-12 px-8">
        <aside className="basis-[260px]">
          <div className="sticky top-24 rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
            <div className="mb-4 text-base font-black text-[#1a1a1a]">Table of Contents</div>
            <ul className="space-y-1">
              {tocItems.map((item, i) => {
                const isActive = activeTOC === i;

                return (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() => handleTocClick(i)}
                      className={`flex w-full items-start gap-2 rounded-xl px-3 py-3 text-left text-sm transition-all duration-150 ${
                        isActive
                          ? "border border-slate-200 bg-white font-bold text-[#06B6D4] shadow-sm"
                          : "text-slate-400 hover:text-slate-600"
                      }`}
                    >
                      <ChevronRight />
                      <span className="leading-snug">{item}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        <article className="min-w-0 flex-1 basis-[600px] space-y-16 pb-16">
          <div ref={createSectionRef(0)} className="scroll-mt-28">
          <h2 className="mb-5 text-3xl font-extrabold">Do I Need an EIN for my LLC? (Plus Other Important FAQs)</h2>
          <p className="mb-5 text-[15px] leading-7 text-slate-700">You&apos;ve done all the legwork to form your business, but you&apos;re still left wondering, &quot;Do I need an Employer Identification Number (EIN) for my LLC?&quot; The short answer is that you might. An EIN is a nine-digit federal tax identification number used by the Internal Revenue Service (IRS) to identify business entities.</p>
          <p className="mb-10 text-[15px] leading-7 text-slate-700">In this guide, you&apos;ll learn whether or not your LLC needs an EIN and why it would be beneficial to secure one, even if it&apos;s not mandated. Got questions? This guide covers all the FAQs so you don&apos;t miss a thing.</p>
          </div>

          <div ref={createSectionRef(1)} className="scroll-mt-28">
          <h2 className="mb-4 text-3xl font-extrabold">What Is an EIN? Is It the Same as an LLC?</h2>
          <p className="mb-4 text-[15px] leading-7 text-slate-700">An EIN is not the same as an LLC (Limited Liability Company).</p>
          <p className="mb-4 text-[15px] leading-7 text-slate-700">An EIN, also known as a federal identification number or business tax ID, is a tax identity. The IRS assigns EINs to distinguish unique business entities, including sole proprietors, LLCs, corporations, partnerships, and nonprofit organizations.</p>
          <p className="mb-4 text-[15px] leading-7 text-slate-700"><span className="font-semibold text-cyan-600">What is an LLC?</span> An LLC is a type of legal business entity created by state statutes. It&apos;s the fastest and easiest legal structure for your business to adopt. An LLC provides legal coverage of assets and liabilities as well as pass-through taxation.</p>
          <p className="mb-10 text-[15px] leading-7 text-slate-700">The IRS doesn&apos;t require most sole proprietorships or single-member LLCs to have EINs. However, there may be some scenarios where your LLC is obligated to secure an EIN, so let&apos;s dig deeper.</p>
          </div>

          <div ref={createSectionRef(2)} className="scroll-mt-28">
          <h2 className="mb-4 text-3xl font-extrabold">If I Have an LLC, Do I Need an EIN?</h2>
          <p className="mb-3.5 text-[15px] leading-7 text-slate-700">If you have an LLC, you might need an EIN. Your LLC will require an EIN if any of the following scenarios apply:</p>
          <ul className="mb-5 list-disc space-y-1.5 pl-5">
            {needList.map((item) => <li key={item} className="text-sm leading-6 text-cyan-700">{item}</li>)}
          </ul>
          <p className="mb-8 text-[15px] leading-7 text-slate-700">For more detailed information, visit the IRS website, or hire a tax or startup business consultant to guide you. Now, let&apos;s take a look at the benefits of having an EIN.</p>

          <div className="mb-10 flex justify-center rounded-2xl bg-slate-50 p-7">
            <div className="w-full max-w-md rounded-xl bg-white p-3 shadow-md">
              {["Add an additional layer of security", "Receive tax breaks and credits", "Establish business credit", "Build professional credibility"].map((item, i) => (
                <div key={item} className={`mb-1 flex items-center justify-between rounded-lg px-3.5 py-2.5 text-[13px] ${i === 1 ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-700"}`}>
                  {item} {i === 1 && <span className="text-cyan-400">➜</span>}
                </div>
              ))}
            </div>
          </div>
          </div>

          <div ref={createSectionRef(3)} className="scroll-mt-28">
          <h2 className="mb-4 text-3xl font-extrabold">Benefits of Having an EIN</h2>
          <p className="mb-4 text-[15px] leading-7 text-cyan-600">There are several business-related benefits of having an EIN for your LLC. Let&apos;s say you&apos;re running a new LLC and have no intention of hiring employees or setting up a retirement plan; therefore, you don&apos;t need an EIN. But should you get one? The answer is a resounding yes. An EIN does much more than just serve as a business tax identifier.</p>
          <p className="mb-3.5 text-[15px] leading-7 text-slate-700">Even if obtaining an EIN is not mandated for you by the IRS, there are many benefits of getting an EIN for your LLC:</p>
          <ul className="mb-5 list-disc space-y-1.5 pl-5">
            {benefits.map((item) => <li key={item} className="text-sm leading-6 text-cyan-700">{item}</li>)}
          </ul>
          <p className="mb-10 text-[15px] leading-7 text-slate-700">To minimize business costs and save time, we suggest getting an EIN sooner rather than later.</p>
          </div>

          <div ref={createSectionRef(4)} className="scroll-mt-28">
          <h2 className="mb-4 text-3xl font-extrabold">Is an EIN the Same as an SSN for an LLC?</h2>
          <p className="mb-4 text-[15px] leading-7 text-slate-700">The main difference between a Social Security number (SSN) and an EIN is that an SSN is for individuals, while an EIN is for businesses. The IRS tracks your business&apos;s filings using an EIN. Many small business owners find it helpful to think of an EIN as an SSN for their business.</p>

          <h3 className="mb-3.5 text-2xl font-bold">Should I Use an SSN or an EIN for Taxes?</h3>
          <p className="mb-4 text-[15px] leading-7 text-slate-700">If you do not have staff, a self-retirement plan, or excise tax payments, and you are a sole proprietor or single-member LLC, your SSN can be used for tax filing.</p>
          <p className="mb-2.5 text-[15px] leading-7 text-slate-700">However, there are some compelling reasons for filing taxes using an EIN as opposed to an SSN. An EIN will do the following:</p>
          <ul className="mb-8 list-disc space-y-1.5 pl-5">
            {["Provide more privacy and security as your SSN number won't be on public documents", "Enable you to file business taxes separately and establish a business history", "Give you the flexibility to hire employees and secure funding without any delay"].map((item) => <li key={item} className="text-sm leading-6 text-cyan-700">{item}</li>)}
          </ul>

          <div className="mb-3 rounded-[18px] bg-slate-900 p-7">
            <div className="mb-1 text-xs font-bold text-cyan-400">YOU SHOULD USE</div>
            <div className="mb-5 text-2xl font-extrabold text-white">AN EIN OVER AN SSN FOR TAX PURPOSES IF YOU…</div>
            <div className="flex flex-wrap gap-3.5">
              <div className="flex flex-1 basis-[250px] flex-col gap-2.5">
                {[{ icon: "👤", text: "prefer filing business taxes separately from personal taxes." }, { icon: "🛡️", text: "seek additional privacy and security." }, { icon: "💼", text: "want to hire employees." }].map((item) => (
                  <div key={item.text} className="flex items-center gap-2.5 rounded-xl bg-slate-800 px-3.5 py-3 text-[13px] text-slate-300"><span>{item.icon}</span>{item.text}</div>
                ))}
              </div>
              <div className="flex min-h-[140px] flex-1 basis-[150px] items-center justify-center rounded-xl bg-slate-700 text-4xl">📱</div>
            </div>
<div className="mt-5 flex items-center justify-between">
              <span className="rounded-full bg-cyan-500 px-3.5 py-1 text-sm font-extrabold text-white">incorp bay</span>
              <span className="text-[11px] uppercase tracking-widest text-slate-400">Easy as Incorp Bay</span>
            </div>
          </div>
          <p className="mb-10 text-[13px] leading-6 text-slate-500">The main difference between a Social Security number (SSN) and an EIN is that an SSN is for individuals, while an EIN is for businesses.</p>
          </div>

          <div ref={createSectionRef(5)} className="scroll-mt-28">
          <h2 className="mb-4 text-3xl font-extrabold">What Do I Need to Get an EIN for My LLC?</h2>
          <p className="mb-4 text-[15px] leading-7 text-slate-700">In order to obtain a new EIN, an SS-4 application form is required. To complete this application without any issues, you must have the following information available:</p>
          <ol className="mb-10 list-decimal space-y-2.5 pl-5">
            {einRequirements.map((item) => <li key={item.b} className="text-sm leading-6 text-slate-700"><strong>{item.b}:</strong> <span className="text-cyan-700">{item.t}</span></li>)}
          </ol>
          </div>

          <div ref={createSectionRef(6)} className="scroll-mt-28">
          <h2 className="mb-4 text-3xl font-extrabold">How to Apply for an EIN</h2>
through Incorp Bay's EIN filing service.
          <p className="mb-7 text-[15px] leading-7 text-slate-700">To file directly with the IRS, complete the <span className="text-cyan-600">online application form</span> between Monday and Friday, 7 a.m. to 10 p.m. EST. The IRS issues the EIN upon submission and verification of the form — this usually just takes a few minutes. However, the online application is only available for LLCs with a domestic, U.S.-based address.</p>

          <div className="mb-7 rounded-[18px] bg-slate-900 p-7">
            <div className="mb-1 text-xs font-bold text-cyan-400">HOW TO APPLY</div>
            <div className="mb-5 text-2xl font-extrabold text-white">FOR AN EIN.</div>
            <p className="mb-5 text-[13px] text-slate-300">Here are some of the main reasons you might have to file a DBA:</p>
            <div className="grid gap-4 md:grid-cols-2">
{["APPLY THROUGH INCORP BAY", "APPLY THROUGH THE IRS"].map((title, i) => (
                <div key={title} className="rounded-xl bg-slate-800 p-5">
                  <div className="mb-3 inline-block rounded-md bg-cyan-500 px-2.5 py-1 text-[11px] font-bold text-white">{title}</div>
                  <ul className="list-disc space-y-1.5 pl-4 text-[13px] leading-6 text-slate-300">
{(i === 0 ? ["Provides instant access to EIN information via Incorp Bay dashboard", "Comes at a small fee, but is included in Incorp Bay's Standard & Premium Packages"] : ["Requires more time and paperwork", "Options to apply via mail, fax, or online", "Provides an EIN for free"]).map((x) => <li key={x}>{x}</li>)}
                  </ul>
                </div>
              ))}
            </div>
<div className="mt-5 flex items-center justify-between">
              <span className="rounded-full bg-cyan-500 px-3.5 py-1 text-sm font-extrabold text-white">incorp bay</span>
              <span className="text-[11px] uppercase tracking-widest text-slate-400">Easy as Incorp Bay</span>
            </div>
          </div>

          <p className="mb-4 text-[15px] leading-7 text-slate-700">To apply by fax, complete the SS-4 form and fax it to 855-641-6935. The fax line is open all seven days of the week, 24/7. Faxed EIN requests have a turnaround time of four business days.</p>
          <p className="mb-2 text-[15px] leading-7 text-slate-700">Domestic LLCs can mail the hard copy of form SS-4 to the following address:</p>
          <p className="mb-4 text-[15px] leading-7 text-slate-700">Internal Revenue Service Attn: EIN Operation Cincinnati, OH 45999</p>
          <p className="mb-4 text-[15px] leading-7 text-cyan-700">The processing time for mailed applications ranges between four to five weeks.</p>
          <p className="mb-10 text-[15px] leading-7 text-slate-700">LLC owners with international addresses and no legal U.S. address or a responsible party that can file on their behalf need to call 267-941-1099 between 6 a.m. and 11 p.m. EST, Monday through Friday, to get their EIN.</p>
          </div>

          <div ref={createSectionRef(7)} className="scroll-mt-28">
          <h2 className="mb-4 text-3xl font-extrabold">What to Do After Getting an EIN</h2>
          <p className="mb-10 text-[15px] leading-7 text-slate-700">Your EIN is active and ready as soon as you receive it from the IRS. Use it to open a dedicated <span className="text-cyan-700">business bank account</span>, secure funding, or hire employees.</p>
          </div>

          <div ref={createSectionRef(8)} className="scroll-mt-28">
          <h2 className="mb-4 text-3xl font-extrabold">Will I Ever Need to Change My EIN?</h2>
          <p className="mb-4 text-[15px] leading-7 text-slate-700">Yes, there might be cases where you&apos;ll need to change your EIN. If you&apos;re changing ownership or the type of business structure you operate, you will need to apply for a new EIN.</p>
          <p className="mb-2.5 text-[15px] leading-7 text-slate-700">Here are a few scenarios that require changing your EIN:</p>
          <ul className="mb-5 list-disc space-y-1.5 pl-5">
            {["You already got an EIN as a sole proprietor and now you are incorporating.", "You are currently registered as a single-member LLC and wish to restructure to a multi-member LLC or corporation.", "You have an LLC EIN and elect to file LLC taxes as an S Corp.", "You add new partners to an existing LLC."].map((item) => <li key={item} className="text-sm leading-6 text-slate-700">{item}</li>)}
          </ul>
          <p className="mb-10 text-[15px] leading-7 text-slate-700">Changing your business name or location does not require changing your EIN. A business formation service can help you understand whether or not your LLC needs a change of EIN.</p>
          </div>

          <div ref={createSectionRef(9)} className="scroll-mt-28">
          <h2 className="mb-6 text-3xl font-extrabold">Frequently Asked Questions</h2>
          <h3 className="mb-2.5 text-xl font-bold">Does EIN Mean You Own a Business?</h3>
          <p className="mb-4 text-[15px] leading-7 text-slate-700">Yes, having an EIN means you own a business, as it&apos;s administered by the IRS to identify business entities for tax purposes. But keep in mind that acquiring an EIN as a sole proprietor does not make your business a legitimate business entity. To form a legal business entity that provides liability and assets protection, like an LLC or corporation, you must register with your state.</p>

          <h3 className="mb-2.5 text-xl font-bold">How Do I Find My EIN?</h3>
          <p className="mb-4 text-[15px] leading-7 text-slate-700">However, you can look up your LLC&apos;s EIN on previous tax forms, bank statements, or your original confirmation notice. If none of these are handy, call the IRS Business and Specialty Tax Line at 1-800-829-4933.</p>
<p className="mb-10 text-[15px] leading-7 text-slate-700">When you incorporate with Incorp Bay, you can easily access your EIN and crucial business documents via your online dashboard.</p>

          <h3 className="mb-2.5 text-xl font-bold">Can I Close or Cancel My EIN?</h3>
          <p className="mb-10 text-[15px] leading-7 text-slate-700">Once assigned, the IRS doesn&apos;t cancel EINs. However, you can write to the IRS and ask them to close the EIN account if you deem it unnecessary. You need to provide the legal entity name, address, and reason for closing the account.</p>
          </div>

          <div ref={createSectionRef(10)} className="scroll-mt-28">
<h2 className="mb-4 text-3xl font-extrabold">Establish Your Business With an EIN</h2>
          <p className="mb-7 text-[15px] leading-7 text-slate-700">Obtaining an EIN is an excellent way to establish and grow your business. To obtain an EIN, you must form a legal business entity, which guarantees the safety of your business and its assets. Incorp Bay offers a standalone EIN service, or our Standard and Premium Packages include this service for free. Join over 1 million thriving business owners who use Incorp Bay as their go-to source.</p>
          <PrimaryButton>GET IN TOUCH TODAY</PrimaryButton>
          </div>
        </article>
      </section>

      <section className="bg-slate-50 px-8 py-14">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-10">
          <div className="flex-1 basis-[280px]">
            <div className="mb-2 text-[13px] font-bold text-cyan-600">EIN Tax ID Number</div>
            <h2 className="mb-3 text-4xl font-extrabold">Obtain An EIN /<br />Tax ID Number</h2>
            <p className="mb-6 text-[15px] leading-7 text-slate-500">Save your time. We&apos;ll handle the paperwork. <strong className="text-slate-900">Only $70.</strong></p>
            <PrimaryButton>ORDER NOW</PrimaryButton>
          </div>
          <div className="flex flex-1 basis-[280px] justify-center">
            <MiniEinCard />
          </div>
        </div>
      </section>
</main>
    </NavigationWrapper>
  );
}
