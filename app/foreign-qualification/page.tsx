"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  FileEdit,
  FileText,
  User,
  Lock,
  ChevronDown,
  CheckCircle2,
  BarChart2,
  Bell,
  Phone,
  Briefcase,
  ChevronRight,
  Shield,
  CheckCircle,
} from "lucide-react";
import NavigationWrapper from "@/components/NavigationWrapper";

// ─── Shared Data ─────────────────────────────────────────────────────────────

const stepsList = [
  {
    id: 1,
    icon: FileEdit,
    title: "Business Name Search",
    desc: "We check your business name against the new state's registry to ensure it's available. If there's a conflict, we assist you in filing a fictitious or assumed name to move forward.",
  },
  {
    id: 2,
    icon: User,
    title: "Registered Agent Selection",
    desc: "A Registered Agent is required in every state where you operate. We provide reliable Registered Agent services nationwide to handle legal notices and maintain compliance.",
  },
  {
    id: 3,
    icon: FileText,
    title: "Filing for a Certificate of Authority",
    desc: "We file the necessary state documents, pay the state fees, and obtain your Certificate of Good Standing to secure your Certificate of Authority.",
  },
  {
    id: 4,
    icon: Lock,
    title: "Compliance",
    desc: "Lifetime alerts for your business across all states and mandatory Federal BOIR filing.",
  },
];

const whyItems = [
  {
    id: 1,
    title: "Compliance Made Simple",
    desc: "We handle all state filings, paperwork, and compliance requirements so you never miss a deadline or pay a penalty.",
    dashboardIndex: 1, // Highlights "Lifetime Compliance Alerts"
  },
  {
    id: 2,
    title: "All-In-One Tools For Growth",
    desc: "Access our full dashboard with lifetime compliance alerts, business recommendations, and multi-state management tools.",
    dashboardIndex: 0, // Highlights "Access to the Dashboard"
  },
  {
    id: 3,
    title: "Stay Organized And Efficient",
    desc: "Digital document storage, 24/7 customer service, and a powerful dashboard keep your multi-state business running smoothly.",
    dashboardIndex: 2, // Highlights "24/7 Customer Service"
  },
];

const dashboardItems = [
  { icon: BarChart2, label: "Access to the Dashboard", active: false },
  { icon: Bell, label: "Lifetime Compliance Alerts", active: true },
  { icon: Phone, label: "24/7 Customer Service", active: false },
  { icon: Briefcase, label: "Business Recommendations", active: false },
];

const faqs = [
  {
    q: "What is Foreign Qualification?",
    a: "Foreign Qualification is the legal process of registering your business to operate in a state other than where it was formed. Your business is considered 'domestic' in its home state and 'foreign' in any other state.",
  },
  {
    q: "When do I need Foreign Qualification?",
    a: "You need it when your business maintains a physical presence, pays taxes, or conducts significant operations in a state other than where it was incorporated.",
  },
  {
    q: "What is a Certificate of Authority?",
    a: "A Certificate of Authority is a legal document granting your business the right to operate in a state outside of its incorporation. Without it, your business could face penalties and restrictions.",
  },
];

const tocItems = [
  "Do Business in Other States After You're Foreign Qualified",
  "When Do You Need to Be Foreign Qualified?",
  "What to Do After Receiving Your Foreign Qualification",
  "Best Practices for Operating a Multi-State Business",
];

const whenQualify = [
  "You conduct the majority of your transactions in another state.",
  "You have a business presence and operations, like a warehouse or office, and employees in another state.",
  "You're paying taxes (employer payroll taxes or sales tax) in another state.",
  "Your business partner lives and conducts business in another state.",
];

// ─── Shared UI ────────────────────────────────────────────────────────────────

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
      {children}
    </div>
  );
}

function PrimaryButton({ children, href }: { children: React.ReactNode; href?: string }) {
  if (href) {
    return (
      <Link href={href} className="rounded-full bg-[#06B6D4] px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-[#06B6D4]/25 transition-all hover:bg-[#0891b2] hover:shadow-[0_8px_30px_rgba(6,182,212,0.4)]">
        {children}
      </Link>
    );
  }
  return (
    <button className="rounded-full bg-[#06B6D4] px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-[#06B6D4]/25 transition-all hover:bg-[#0891b2] hover:shadow-[0_8px_30px_rgba(6,182,212,0.4)]">
      {children}
    </button>
  );
}

function GhostButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="rounded-full border-2 border-[#06B6D4] px-8 py-3.5 text-sm font-bold text-[#06B6D4] transition-colors hover:bg-[#06B6D4]/5">
      {children}
    </button>
  );
}

// ─── Animated Timeline Hook ───────────────────────────────────────────────────

function useAnimatedTimeline(totalSteps: number, duration = 12000) {
  const [progressPercent, setProgressPercent] = useState(0);

  useEffect(() => {
    let animationFrameId: number | null = null;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % duration) / duration;
      setProgressPercent(progress * 100);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [duration]);

  const currentActiveStep = Math.min(
    Math.floor(progressPercent / (100 / totalSteps)) + 1,
    totalSteps
  );

  return { progressPercent, currentActiveStep };
}

// ─── Section 1: Hero ──────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative grid grid-cols-1 items-center gap-12 overflow-hidden px-6 py-16 md:grid-cols-2 md:px-16 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#06B6D4 1px, transparent 1px), linear-gradient(90deg, #06B6D4 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-[#06B6D4]/10 blur-[90px]" />

      <div className="relative z-10">
        <Badge>
          <span>Excellent 4.7 out of 5</span>
          <Star className="h-4 w-4 fill-[#06B6D4] text-[#06B6D4]" />
          <span>Trustpilot</span>
        </Badge>

        <h1 className="mt-6 text-5xl font-bold leading-tight text-[#1E293B] md:text-6xl">
          Foreign Qualification{" "}
          <span className="text-[#06B6D4]">Made Simple</span>
        </h1>

        <p className="mt-6 max-w-md text-xl leading-relaxed text-gray-500">
Expand your business across state lines with ease. Incorp Bay handles
          the entire Foreign Qualification process — compliance, paperwork,
          and Registered Agent services — so you can stay focused on growing.
        </p>

<div className="mt-8 flex flex-wrap items-center gap-4">
          <PrimaryButton href="/foreign-qualification/step-1">START NOW</PrimaryButton>
          <GhostButton>LEARN MORE</GhostButton>
        </div>
      </div>

      <div className="relative z-10">
        <div className="absolute inset-0 -z-10 scale-95 rounded-3xl bg-gradient-to-br from-[#06B6D4]/8 to-[#06B6D4]/4" />
        <div className="mx-auto max-w-md -rotate-2 rounded-xl border-[14px] border-[#1E293B] bg-white p-8 shadow-2xl">
          <div className="border-l-4 border-[#06B6D4] pl-4">
            <h2 className="text-2xl font-bold uppercase leading-tight text-[#1E293B]">
              Foreign <br />
              <span className="text-[#06B6D4]">Qualification</span>
            </h2>
          </div>
          <p className="mt-4 text-[11px] font-semibold uppercase leading-relaxed text-slate-700">
            Foreign Qualification is the process of registering your business
            to operate legally in a state other than the one where it was
            originally formed.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-[9px] leading-relaxed text-slate-400">
            <p>
              If your business is incorporated in the home state but plans to
              conduct business in another state, you will need this filing.
              This is especially important if you intend to hire employees,
              own physical locations, or regularly transact business in the
              new state.
            </p>
            <p>
              Filing for foreign qualification involves obtaining a Certificate
              of Good Standing from your home state and submitting the necessary
              paperwork to the new state. Without it, your business could face
              penalties or restrictions on its operations.
            </p>
          </div>
          <div className="mt-6 flex items-center justify-between border-t border-dashed border-slate-200 pt-4">
            <div className="h-10 w-10 rounded-full border border-slate-300" />
            <div className="text-right">
              <p className="font-serif text-lg italic text-slate-700">J. Doe</p>
              <p className="text-[10px] text-slate-400">Secretary of State</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 2: Trust Bar ─────────────────────────────────────────────────────

function TrustBar() {
  return (
    <section className="bg-[#F8FAFC] px-6 py-8 md:px-16">
      <p className="mx-auto max-w-4xl text-center text-base font-bold leading-relaxed text-slate-700 md:text-xl">
        Bootstrapped, Founder Led, Independently Owned{" "}
        <span className="whitespace-nowrap rounded-lg bg-cyan-50 px-2 py-0.5 font-extrabold text-[#06B6D4] shadow-sm">
          Since 2004
        </span>{" "}
        With{" "}
        <span className="rounded-lg bg-cyan-50 px-2 py-0.5 font-extrabold text-[#06B6D4] shadow-sm">
          Over 1,000,000 Entrepreneurs
        </span>{" "}
        Served!
      </p>
    </section>
  );
}

// ─── Section 3: What Is ───────────────────────────────────────────────────────

function WhatIsSection() {
  return (
    <section className="bg-[#F8FAFC] px-6 py-16 md:px-16">
      <div className="mx-auto max-w-6xl rounded-3xl bg-[#ECEFF1]/50 p-8 md:p-12">
        {/* Left column ko bada karne ke liye grid alignment md:grid-cols-[1.1fr_0.9fr] kiya hai */}
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">
          
          {/* Left Column: Bada Mockup Display (Pehle se zyada spacious aur bold width) */}
          <div className="flex w-full justify-center rounded-2xl bg-white p-6 shadow-sm md:p-10">
            <div className="relative w-full max-w-[280px] rounded-[3rem] border-[12px] border-[#1E293B] bg-white shadow-2xl">
              <div className="absolute left-1/2 top-3 h-3.5 w-20 -translate-x-1/2 rounded-full bg-[#1E293B]" />
              <div className="px-5 pb-8 pt-10">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-[#06B6D4]" />
                  <p className="text-xs font-bold text-slate-700">
                    Foreign Qualification
                  </p>
                </div>
                
                <p className="mt-6 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Business is Operating In
                </p>
                <p className="text-3xl font-black text-[#1E293B] mt-1">2 States</p>
                
                <div className="mt-6 flex h-24 items-center justify-center gap-4 rounded-xl bg-slate-50 p-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#06B6D4] text-sm font-bold text-white shadow-md">
                    TX
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#06B6D4]/20 text-sm font-bold text-[#06B6D4]">
                    CA
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col justify-center">
            {/* Main Title */}
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 leading-tight md:text-[42px]">
              What Is Foreign Qualification?
            </h2>
            
            {/* Inline Sub-heading directly above the paragraphs */}
            <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-[#06B6D4] leading-relaxed">
              The legal process of registering your business to operate in a state other than where it was originally formed
            </h3>

            {/* Paragraphs */}
            <p className="mt-5 leading-relaxed text-slate-600">
              Foreign Qualification is the legal process of registering your
              business to operate in a state other than where it was formed.
              Your business is considered{" "}
              <strong className="text-[#1E293B]">"domestic"</strong> in its
              home state and{" "}
              <strong className="text-[#1E293B]">"foreign"</strong> in any
              other state.
            </p>
            
            <p className="mt-4 leading-relaxed text-slate-600">
              When you file for Foreign Qualification, you receive a{" "}
              <strong className="text-[#1E293B]">Certificate of Authority</strong>{" "}
              from the new state, granting you legal permission to do business
              there. Businesses must complete this process in every state where
              they have significant operations, such as offices, employees, or
              major contracts.
            </p>

            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-slate-200/60 bg-white px-5 py-4 shadow-sm">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-100">
                <CheckCircle2 className="h-5 w-5 text-[#06B6D4]" />
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
You can file the necessary forms yourself or let{" "}
                <span className="font-bold text-[#1E293B]">Incorp Bay</span> handle
                the paperwork for you efficiently and cost-effectively.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
// ─── Section 4: Requirements (Fixed: Smooth, Slow & 100% Constant Fluid Loop) ───

function RequirementsSection() {
  const requirementSteps = [
    {
      id: 1,
      icon: FileEdit,
      title: "1. File the Required State Documents",
      desc: "Submit the appropriate paperwork to the state where you intend to do business and pay the associated state fees.",
    },
    {
      id: 2,
      icon: FileText,
      title: "2. Provide a Certificate of Good Standing",
      desc: "Obtain this document from your state of formation to verify your business is in good legal standing.",
    },
  ];

const iconRefs = React.useRef<HTMLDivElement[]>([]);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const fillRef = React.useRef<HTMLDivElement>(null);
  const [fluidProgress, setFluidProgress] = React.useState(0);

  React.useEffect(() => {
    let animFrame: number | null = null;
    let startTime: number | null = null;
    const duration = 7000;

    const runFluid = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % duration) / duration;
      setFluidProgress(progress);
      animFrame = requestAnimationFrame(runFluid);
    };

    animFrame = requestAnimationFrame(runFluid);
    return () => {
      if (animFrame) {
        cancelAnimationFrame(animFrame);
      }
    };
}, []);

React.useEffect(() => {
    const icons = iconRefs.current.filter((el): el is HTMLDivElement => el !== null);
    const track = trackRef.current;
    const fill = fillRef.current;
    if (!track || !fill || icons.length < 2) return;

    // Get positions relative to the parent container
    const firstIcon = icons[0];
    const lastIcon = icons[icons.length - 1];
    
    // Calculate positions relative to first icon
    const firstIconTop = firstIcon.offsetTop + firstIcon.offsetHeight / 2;
    const lastIconTop = lastIcon.offsetTop + lastIcon.offsetHeight / 2;
    const trackHeight = lastIconTop - firstIconTop;

    // Position the track line at the first icon's center
    track.style.top = `${firstIconTop}px`;
    track.style.height = `${trackHeight}px`;

    // Animate the fill
    const fillPx = Math.min(fluidProgress * trackHeight, trackHeight);
    fill.style.height = `${fillPx}px`;
  }, [fluidProgress]);

  return (
    <section className="bg-white px-6 py-16 md:px-16">
      <h2 className="text-center text-3xl font-light tracking-normal text-slate-900 leading-snug md:text-[44px]">
        Requirements for Foreign Qualification
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-sm font-medium text-slate-500">
        To obtain a{" "}
        <strong className="text-[#1E293B]">Certificate of Authority</strong>,
        your business must:
      </p>

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 items-center gap-10 md:grid-cols-2">

        <div className="w-full">
          <div className="relative flex w-full flex-col justify-between py-6">

            {/* Background static line — hidden, track controls it */}
            <div
              ref={trackRef}
              className="absolute left-6 w-1 rounded-full bg-slate-100 z-0"
              style={{ top: 0, height: 0 }}
            >
              <div
                ref={fillRef}
                className="w-full rounded-full bg-[#06B6D4] origin-top"
                style={{ height: 0 }}
              />
            </div>

            {requirementSteps.map((step, idx) => {
              const StepIcon = step.icon;
              const stepSize = 1 / requirementSteps.length;
              const isPassed = fluidProgress >= idx * stepSize;
              const isCurrent = fluidProgress >= idx * stepSize && fluidProgress < (idx + 1) * stepSize;

              return (
<div
                  key={step.title}
                  ref={(el: HTMLDivElement | null) => {
                    if (el) iconRefs.current[idx] = el;
                  }}
                  className="relative z-10 mb-16 last:mb-0 flex min-h-[90px] w-full flex-row items-start select-none"
                >
                  <div
                    className={`absolute left-0 top-0 z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300 ease-out ${
                      isPassed
                        ? "scale-105 border-[#06B6D4] bg-cyan-50 text-[#06B6D4] shadow-md"
                        : "border-slate-300 bg-white text-slate-400"
                    } ${isCurrent ? "ring-4 ring-cyan-100/70" : ""}`}
                  >
                    <StepIcon className="h-5 w-5" strokeWidth={2.5} />
                  </div>

                  <div className="w-full pl-16 text-left">
                    <h4
                      className={`text-lg font-bold transition-colors duration-300 md:text-xl ${
                        isCurrent
                          ? "text-[#06B6D4]"
                          : isPassed
                          ? "text-[#06B6D4]/70"
                          : "text-slate-400"
                      }`}
                    >
                      {step.title}
                    </h4>
                    <p
                      className={`mt-1 text-sm leading-relaxed transition-all duration-300 ${
                        isCurrent
                          ? "text-slate-700 opacity-100"
                          : "text-slate-400/70 opacity-60"
                      }`}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Cert Mockup — unchanged */}
        <div className="flex justify-center">
          <div className="mx-auto max-w-xs -rotate-1 rounded-xl border-[12px] border-[#1E293B] bg-white p-6 shadow-2xl">
            <div className="border-l-4 border-[#06B6D4] pl-3">
              <h3 className="text-xl font-bold uppercase leading-tight text-[#1E293B]">
                Certificate <br /> of{" "}
                <span className="text-[#06B6D4]">Good Standing</span>
              </h3>
            </div>
            <p className="mt-3 text-[9px] font-semibold uppercase leading-relaxed text-slate-600">
              An official document issued by a state agency certifying your
              business is in good legal standing with all necessary obligations.
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2 text-[8px] leading-relaxed text-slate-400">
              <p>Required for foreign qualification filings, loan applications, and proving compliance to state regulators.</p>
              <p>Issued by your home state's Secretary of State, this document verifies your business is current on all filings.</p>
            </div>
            <div className="mt-4 flex items-end justify-between border-t border-dashed border-slate-200 pt-3">
              <div className="h-8 w-8 rounded-full border border-slate-200" />
              <div className="text-right">
                <p className="font-serif text-base italic text-slate-700">J. Doe</p>
                <p className="text-[8px] text-slate-400">Secretary of State</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── Section 5: How To Get (Animated) ────────────────────────────────────────

function HowToSection() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    let animFrame: number | null = null;
    let startTime: number | null = null;
    const duration = 12000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const elapsed = timestamp - startTime;
      setProgress((elapsed % duration) / duration);

      animFrame = requestAnimationFrame(animate);
    };

    animFrame = requestAnimationFrame(animate);

    return () => {
      if (animFrame) cancelAnimationFrame(animFrame);
    };
  }, []);

  const currentActiveStep = Math.min(
    Math.floor(progress * stepsList.length) + 1,
    stepsList.length
  );

  return (
    <section className="bg-white py-16">
      <div className="px-4 text-center mb-16">
        <h2 className="mx-auto max-w-4xl text-3xl font-light tracking-normal text-slate-900 leading-snug md:text-[44px]">
          How to Get Foreign Qualified
        </h2>
      </div>

      <div className="md:flex gap-10 items-center mx-5 max-w-6xl lg:mx-auto">
        <div className="w-full md:w-1/2 md:px-16">
          <div className="relative w-full py-6">
            {/* Background Line */}
            <div className="absolute left-6 top-12 bottom-[84px] z-0 w-1 -translate-x-1/2 rounded-full bg-slate-100 overflow-hidden">
              {/* Smooth Active Tracking Line */}
              <div
                className="w-full rounded-full bg-[#06B6D4]"
                style={{ height: `${progress * 100}%` }}
              />
            </div>

            {stepsList.map((step, idx) => {
              const StepIcon = step.icon;
              const stepSize = 1 / stepsList.length;
              const isPassed = progress >= idx * stepSize;
              const isCurrent = currentActiveStep === idx + 1;

              return (
                <div
                  key={step.id}
                  className={`relative z-10 flex min-h-[120px] w-full flex-row items-start select-none ${
                    idx === stepsList.length - 1 ? "mb-0" : "mb-12"
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                      isPassed
                        ? "scale-105 border-[#06B6D4] bg-cyan-50 text-[#06B6D4] shadow-md"
                        : "border-slate-300 bg-white text-slate-400"
                    } ${isCurrent ? "ring-4 ring-cyan-100/70" : ""}`}
                  >
                    <StepIcon className="h-5 w-5" strokeWidth={2.5} />
                  </div>

                  <div className="w-full pl-4 text-left">
                    <h4
                      className={`text-lg font-bold transition-colors duration-300 md:text-xl ${
                        isCurrent
                          ? "text-[#06B6D4]"
                          : isPassed
                          ? "text-[#06B6D4]/70"
                          : "text-slate-400"
                      }`}
                    >
                      {step.title}
                    </h4>

                    <p
                      className={`mt-1 text-sm leading-relaxed transition-all duration-300 md:text-base ${
                        isCurrent
                          ? "text-slate-700 opacity-100"
                          : "text-slate-400/70 opacity-60"
                      }`}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center pt-5 md:pt-0">
          <div className="relative w-60">
            <div className="rounded-[2.5rem] border-[10px] border-[#1E293B] bg-white shadow-2xl">
              <div className="absolute left-1/2 top-3 h-3 w-16 -translate-x-1/2 rounded-full bg-[#1E293B]" />

              <div className="px-4 pb-8 pt-10">
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-full bg-[#06B6D4]" />

                  <div className="ml-auto flex gap-0.5">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="h-1 w-1 rounded-full bg-slate-400"
                      />
                    ))}
                  </div>
                </div>

                <p className="mt-3 text-sm font-semibold text-[#1E293B]">
                  Business Name Search
                </p>

                <p className="mt-2 text-[9px] font-bold uppercase tracking-wide text-slate-400">
                  Search Name
                </p>

                <div className="mt-1 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-300">
                  Type Name
                </div>

                <p className="mt-3 text-[9px] font-bold uppercase tracking-wide text-slate-400">
                  Entity Type
                </p>

                <div className="mt-1 flex gap-2">
                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700">
                    LLC
                  </span>

                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700">
                    Corporation
                  </span>
                </div>

                <p className="mt-3 text-[9px] font-bold uppercase tracking-wide text-slate-400">
                  Entity State
                </p>

                <div className="mt-1 flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-700">
                  Texas <ChevronDown className="h-3 w-3" />
                </div>

                <button className="mt-4 w-full rounded-full bg-[#06B6D4] py-2.5 text-xs font-bold text-white shadow-md shadow-[#06B6D4]/25 transition hover:bg-[#0891b2]">
                  Search
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
  );
}

// ─── Section 6: Certificate of Authority ─────────────────────────────────────

function CertOfAuthoritySection() {
  return (
    <section className="bg-[#F8FAFC] px-6 py-16 md:px-16">
      <div className="mx-auto max-w-6xl rounded-3xl bg-[#ECEFF1]/50 p-8 md:p-12">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="flex justify-center rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
            <div className="relative w-52 rounded-[2.5rem] border-[10px] border-[#1E293B] bg-white shadow-2xl">
              <div className="absolute left-1/2 top-2.5 h-3 w-16 -translate-x-1/2 rounded-full bg-[#1E293B]" />
              <div className="px-4 pb-6 pt-8">
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-full bg-[#06B6D4]" />
                  <div className="ml-auto grid grid-cols-2 gap-0.5">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="h-1 w-1 rounded-full bg-slate-400" />
                    ))}
                  </div>
                </div>
                <p className="mt-3 text-sm font-semibold text-[#1E293B]">
                  Certificate of Authority
                </p>
                <p className="mt-2 text-[8px] font-bold uppercase tracking-wide text-slate-400">
                  Status
                </p>
                <div className="flex items-center gap-1">
                  <p className="text-xs font-semibold text-slate-700">Statements Filed</p>
                  <CheckCircle className="h-3 w-3 text-emerald-500" />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <p className="text-lg font-bold text-[#1E293B]">FILED</p>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#06B6D4] text-white shadow-md shadow-[#06B6D4]/25">
                    <Shield className="h-4 w-4" />
                  </div>
                </div>
                <p className="mt-3 text-[8px] font-bold uppercase tracking-wide text-slate-400">
                  Commission File
                </p>
                <p className="text-sm font-bold text-[#1E293B]">001-912742</p>
                <p className="mt-1 text-[8px] text-slate-400">California Jurisdiction</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-[#1E293B] md:text-4xl">
              What Is a Certificate of Authority?
            </h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              A{" "}
              <strong className="text-[#1E293B]">Certificate of Authority</strong>{" "}
              is a legal document granting your business the right to operate in
              a state outside of its incorporation. Without it, your business
              could face penalties, restrictions, or loss of its Certificate of
              Good Standing.
            </p>
            <p className="mt-4 font-semibold text-[#06B6D4]">
              Filing for a Certificate of Authority is crucial to:
            </p>
            <ul className="mt-3 space-y-2">
              {[
                "Maintain legal operations in other states.",
                "Protect your business's ability to secure loans and renew licenses.",
                "Avoid compliance risks and penalties.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#06B6D4]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 7: Why Choose ───────────────────────────────────────────────────

function WhyChooseSection() {
  const [activeAccordion, setActiveAccordion] = useState<number>(1);

  // Determine which dashboard UI item should be dark highlighted based on the active accordion
  const currentHighlightedDashboardIndex = 
    whyItems.find((item) => item.id === activeAccordion)?.dashboardIndex ?? 1;

  return (
    <section className="bg-white px-6 py-20 md:px-16">
      <h2 className="text-center text-3xl font-bold text-[#1E293B] md:text-4xl tracking-tight">
Why Choose Incorp Bay for Foreign Qualification?
      </h2>

      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
        {/* Left Column: Dashboard Preview Card Module */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-sm rounded-[2rem] bg-slate-50/70 p-8 border border-slate-100 shadow-inner relative overflow-hidden">
            <ul className="space-y-3 relative z-10">
              {dashboardItems.map(({ icon: Icon, label }, index) => {
                const isItemHighlighted = index === currentHighlightedDashboardIndex;
                return (
                  <li
                    key={label}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-semibold tracking-wide border transition-all duration-300 relative ${
                      isItemHighlighted
                        ? "bg-[#1E293B] text-white border-[#1E293B] shadow-xl scale-[1.02]"
                        : "bg-white text-slate-600 border-slate-200/60 shadow-sm"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 transition-colors ${
                        isItemHighlighted ? "text-[#06B6D4]" : "text-slate-400"
                      }`}
                    />
                    <span>{label}</span>

                    {/* Subtle click indicator arrow */}
                    {isItemHighlighted && (
                      <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-[#06B6D4] rotate-45 rounded-sm animate-pulse hidden md:block" />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Right Column: Clean Interactive Dropdown Accordions */}
        <div className="lg:col-span-7 space-y-4">
          {whyItems.map((item) => {
            const isOpen = activeAccordion === item.id;
            return (
              <div
                key={item.id}
                className="border-b border-slate-100 pb-4 transition-all"
              >
                <button
                  onClick={() => setActiveAccordion(item.id)}
                  className="w-full flex items-center justify-between py-3 text-left focus:outline-none group"
                >
                  <span
                    className={`text-lg md:text-xl font-bold transition-colors duration-200 ${
                      isOpen ? "text-[#1E293B]" : "text-slate-800 group-hover:text-[#06B6D4]"
                    }`}
                  >
                    {item.id}. {item.title}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#06B6D4]" : ""
                    }`}
                  />
                </button>

                {/* Smooth Heights for Collapse */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed pl-6 border-l-2 border-[#06B6D4]/30">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Section 8: Do You Need Foreign Qualification (Cyan/Slate Theme applied) ───

function DoYouNeedSection() {
  return (
    <section className="bg-white px-6 py-20 md:px-16">
      <div className="mx-auto max-w-6xl grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        
        {/* Left Column: Text Content */}
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold tracking-tight text-[#1E293B] md:text-5xl">
            Do You Need Foreign Qualification?
          </h2>
          
          <p className="mt-6 text-lg text-slate-600">
            You may need a Foreign Qualification if your business:
          </p>
          
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3 text-base text-slate-600 leading-relaxed">
              <span className="mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#1E293B]" />
              <span>
                Maintains a physical presence (office, warehouse, or employees) in another state.
              </span>
            </li>
            <li className="flex items-start gap-3 text-base text-slate-600 leading-relaxed">
              <span className="mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#1E293B]" />
              <span>
                Pays taxes or has significant contracts in the new state.
              </span>
            </li>
            <li className="flex items-start gap-3 text-base text-slate-600 leading-relaxed">
              <span className="mt-2.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#1E293B]" />
              <span>
                Regularly conducts business that goes beyond occasional transactions.
              </span>
            </li>
          </ul>
          
          <p className="mt-8 text-base font-medium text-slate-700 leading-relaxed">
            If your business meets any of these criteria, filing for Foreign Qualification ensures you stay compliant and operate legally.
          </p>
        </div>

        {/* Right Column: Visual Mockup Framed Certificate (With matching page theme) */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-md rounded-3xl bg-[#F8FAFC] p-8 border border-slate-100 shadow-sm flex justify-center items-center">
            <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-xl border-[12px] border-[#1E293B] bg-white p-6 shadow-2xl overflow-hidden">
              {/* Cyan side badge accent matching main theme */}
              <div className="absolute left-0 top-12 h-16 w-2 rounded-r-md bg-[#06B6D4]" />
              
              <div className="border-l-4 border-[#1E293B] pl-3 mt-4">
                <h3 className="text-xl font-black tracking-tight text-[#1E293B] uppercase leading-none">
                  Foreign <br />
                  <span className="text-[#06B6D4]">Qualification</span>
                </h3>
              </div>
              
              <p className="mt-4 text-[9px] font-bold uppercase tracking-wide text-slate-800 leading-tight">
                FOREIGN QUALIFICATION IS THE PROCESS OF REGISTERING YOUR BUSINESS TO OPERATE LEGALLY IN A STATE OTHER THAN THE ONE WHERE IT WAS ORIGINALLY FORMED.
              </p>
              
              <div className="mt-4 grid grid-cols-2 gap-2 text-[6px] leading-relaxed text-slate-400">
                <p>If your business is incorporated or formed as an LLC in one state but plans to conduct business in another, you'll need to file the Foreign Qualification.</p>
                <p>Filing for Foreign Qualification involves obtaining a Certificate of Good Standing from your home state and submitting the necessary paperwork to the new state.</p>
              </div>
              
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between border-t border-slate-100 pt-3">
                <div className="h-6 w-6 rounded-full border border-slate-200" />
                <div className="text-right">
                  <p className="font-serif text-sm italic text-slate-800">John Smith</p>
                  <p className="text-[6px] uppercase tracking-wider text-slate-400">Secretary of State</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── Section 9: Article + TOC ─────────────────────────────────────────────────

function ArticleSection() {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <section className="bg-[#F8FAFC] px-6 py-16 md:px-16">
      <div className="mx-auto max-w-6xl rounded-3xl bg-[#ECEFF1]/50 p-8 md:p-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[280px_1fr]">
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#06B6D4]">
              Table of Contents
            </p>
            <ul className="space-y-2">
              {tocItems.map((item, i) => (
                <li key={item}>
                  <button
                    onClick={() => setActiveItem(i)}
                    className={`flex w-full items-start gap-2 rounded-xl px-3 py-2 text-left text-sm transition ${
                      activeItem === i
                        ? "border border-[#06B6D4]/30 bg-cyan-50 font-semibold text-[#1E293B]"
                        : "text-slate-500 hover:text-[#1E293B]"
                    }`}
                  >
                    <ChevronRight
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                        activeItem === i ? "text-[#06B6D4]" : "text-slate-300"
                      }`}
                    />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <article className="max-w-2xl space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-[#1E293B]">
                Do Business in Other States After You&apos;re Foreign Qualified
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                So you&apos;re ready to do business in another state. Often
                confused with conducting business outside of the U.S., foreign
                qualification refers to doing business in another state —
                outside of the one you originally incorporated in.
              </p>
              <p className="mt-3 leading-relaxed text-slate-600">
                When you file a foreign qualification, you receive a Certificate
                of Authority that gives you legal authority to operate your
                business in that state.
              </p>
              <p className="mt-3 text-sm text-slate-500">
                Haven&apos;t filed yet?{" "}
<a href="#" className="font-semibold text-[#06B6D4] hover:underline">
                  Incorp Bay&apos;s Foreign Qualification service
                </a>{" "}
                can help.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#1E293B]">
                When Do You Need to Be Foreign Qualified?
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Each U.S. state maintains different criteria for businesses
                operating within its borders. Here are some common scenarios
                when you may need to foreign qualify:
              </p>
              <ul className="mt-4 space-y-2">
                {whenQualify.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-slate-600">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

// ─── Section 10: FAQ ───────────────────────────────────────────────────────────

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white px-6 py-16 md:px-16">
      <div className="mx-auto max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4]">
          Key Considerations
        </p>
        <h2 className="mt-2 text-4xl font-bold text-[#1E293B]">
          Common Questions About Foreign Qualification
        </h2>

        <div className="mt-8 divide-y divide-slate-200">
          {faqs.map(({ q, a }, i) => (
            <div key={q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left text-sm font-semibold text-gray-600 transition-colors hover:text-[#1E293B]"
              >
                {q}
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 transition-transform ${
                    open === i ? "rotate-180 text-[#06B6D4]" : "text-slate-400"
                  }`}
                />
              </button>
              {open === i && (
                <p className="pb-5 text-sm leading-relaxed text-gray-500">{a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 11: CTA ──────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section className="px-6 py-16 md:px-16">
      <div
        className="relative mx-auto max-w-4xl overflow-hidden rounded-[40px] border border-white/5 px-8 py-14 shadow-2xl sm:px-12"
        style={{ background: "linear-gradient(135deg, #1E293B 0%, #06B6D4 100%)" }}
      >
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#06B6D4]/20 to-transparent" />
        <div className="pointer-events-none absolute right-1/4 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#06B6D4]/30 blur-[80px]" />

        <div className="relative grid grid-cols-1 items-center gap-6 p-2 md:grid-cols-[1.2fr_0.8fr] md:p-6">
          {/* Left */}
          <div className="relative z-10 flex w-full flex-col items-start space-y-4 pt-2 text-left">
            <span className="rounded-full bg-[#06B6D4] px-3 py-1 text-xs font-semibold text-white shadow-sm">
              Incorporate Now
            </span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
              Expand Your Business <br /> With Confidence
            </h2>
<p className="text-sm leading-relaxed text-slate-300/90">
              Get started on your Foreign Qualification today <br /> and let
              Incorp Bay handle the details.
            </p>
<Link href="/foreign-qualification/step-1" className="group relative rounded-xl bg-[#06B6D4] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#06B6D4]/20 transition-all hover:scale-[1.02] hover:bg-[#0891b2] active:scale-[0.98]">
              START FOREIGN QUALIFICATION
            </Link>
          </div>

          {/* Right: Phone */}
          <div className="relative z-10 flex min-h-[340px] w-full select-none items-center justify-center overflow-visible">
            <div className="relative flex h-[340px] w-[180px] items-center justify-center">
              <div className="absolute inset-0 overflow-hidden rounded-[36px] border-[3.5px] border-slate-700/70 bg-[#0F1318] shadow-2xl">
                <div className="absolute left-1/2 top-2.5 z-30 flex h-4 w-20 -translate-x-1/2 items-center justify-center rounded-full bg-black">
                  <div className="ml-auto mr-3 h-1.5 w-1.5 rounded-full bg-slate-900" />
                </div>
                <div className="relative flex h-full w-full flex-col p-4 pt-9 text-left text-[10px] text-slate-400">
                  <p className="text-xs font-bold text-slate-200">Business Formation</p>
                  <div className="my-2 h-px w-full bg-slate-800/60" />
                  <p className="text-[7px] font-bold uppercase tracking-wider text-slate-500">Status</p>
                  <p className="mt-0.5 flex items-center gap-1 text-[9px] font-medium text-slate-300">
                    Business Officially Registered
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </p>
                  <div className="my-2 h-px w-full bg-slate-800/60" />
                  <p className="text-[7px] font-bold uppercase tracking-wider text-slate-500">Registered</p>
                  <p className="mt-0.5 text-base font-bold text-slate-200">Apr 19</p>
                  <p className="mt-1 text-[7px] leading-snug text-slate-500">
                    In the office of the secretary <br /> of state of the state of <br /> california
                  </p>
                  <div className="my-2 h-px w-full bg-slate-800/60" />
                  <p className="text-[7px] font-bold uppercase tracking-wider text-slate-500">Company</p>
                  <p className="mt-0.5 text-sm font-bold text-slate-200">BizFiz Co</p>
                </div>
              </div>

              {/* Float 1 */}
              <div className="absolute left-[-24px] top-[38%] z-20 flex -rotate-6 scale-95 transform items-center gap-1.5 rounded-lg border border-slate-100 bg-white/95 p-2 shadow-xl backdrop-blur">
                <span className="text-[10px] font-extrabold tracking-tight text-slate-800">BIZFIZ CO</span>
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#06B6D4] text-[8px] font-bold text-white shadow">
                  ✓
                </div>
              </div>

              {/* Float 2 */}
              <div className="absolute bottom-[22%] right-[-20px] z-20 flex min-w-[110px] rotate-3 transform flex-col items-start rounded-xl border border-slate-100 bg-white/95 p-2.5 shadow-xl backdrop-blur">
                <span className="flex items-center gap-1 text-[8px] font-bold uppercase tracking-wider text-[#06B6D4]">
                  📝 Official Registered
                </span>
                <span className="mt-1 text-sm font-black tracking-tight text-slate-800">BizFiz Co</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ForeignQualificationPage() {
  return (
    <NavigationWrapper>
      <div className="min-h-screen bg-white text-[#1E293B]">
        <Hero />
        <TrustBar />
        <WhatIsSection />
        <RequirementsSection />
        <WhyChooseSection />
        <HowToSection />
        <CertOfAuthoritySection />
        
        {/* Rendered directly above the TOC/Article Section */}
        <DoYouNeedSection /> 
        
        <ArticleSection />
        <FAQSection />
        <CTASection />
      </div>
    </NavigationWrapper>
  );
}