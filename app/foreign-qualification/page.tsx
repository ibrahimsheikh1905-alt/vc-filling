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
  ChevronRight,
  Shield,
  CheckCircle,
} from "lucide-react";
import NavigationWrapper from "@/components/NavigationWrapper";

// ─── Brand gradient theme ─────────────────────────────────────────────────────

const BRAND_GRADIENT =
  "linear-gradient(90deg,#244EB6 0%,#2B93C9 50%,#33D1CC 100%)";

const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";

const LOGO_GRADIENT_TEXT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent";

const LOGO_GRADIENT_VERTICAL =
  "bg-[linear-gradient(180deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";

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
    dashboardIndex: 1,
  },
  {
    id: 2,
    title: "All-In-One Tools For Growth",
    desc: "Access our full dashboard with lifetime compliance alerts, business recommendations, and multi-state management tools.",
    dashboardIndex: 0,
  },
  {
    id: 3,
    title: "Stay Organized And Efficient",
    desc: "Digital document storage, 24/7 customer service, and a powerful dashboard keep your multi-state business running smoothly.",
    dashboardIndex: 2,
  },
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
      <Link
        href={href}
        className={`${LOGO_GRADIENT} group relative overflow-hidden rounded-full px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:brightness-110 hover:scale-[1.03] hover:shadow-[0_4px_14px_rgba(43,147,201,0.35)]`}
      >
        <span className="absolute inset-x-0 top-0 h-1/2 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
        <span className="absolute -left-20 top-0 h-full w-12 -skew-x-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }
  return (
    <button
      className={`${LOGO_GRADIENT} group relative overflow-hidden rounded-full px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:brightness-110 hover:scale-[1.03] hover:shadow-[0_4px_14px_rgba(43,147,201,0.35)]`}
    >
      <span className="absolute inset-x-0 top-0 h-1/2 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
      <span className="absolute -left-20 top-0 h-full w-12 -skew-x-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />
      <span className="relative z-10">{children}</span>
    </button>
  );
}

function GhostButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      className={`rounded-full border-2 border-[#2B93C9] px-8 py-3.5 text-sm font-bold transition-all duration-300 hover:bg-slate-50 hover:scale-[1.03] ${LOGO_GRADIENT_TEXT}`}
    >
      {children}
    </button>
  );
}

// ─── Section 1: Hero ──────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative grid grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-16 md:py-24">
      <div className="relative z-10">
        <Badge>
          <span>Excellent 4.7 out of 5</span>
          <Star className="h-4 w-4 fill-[#2B93C9] text-[#2B93C9]" />
          <span>Trustpilot</span>
        </Badge>

        <h1 className="mt-6 text-5xl font-bold leading-tight text-[#1E293B] md:text-6xl">
          Foreign Qualification{" "}
          <span className={LOGO_GRADIENT_TEXT}>Made Simple</span>
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

      <div className="relative z-10 flex justify-center">
        <Image
          src="/foreign-qualification/Foreign-qualification-hero.webp"
          alt="Foreign Qualification Certificate"
          width={450}
          height={450}
          className="w-full max-w-[280px] md:max-w-[420px] h-auto"
          priority
        />
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
        <span className={`whitespace-nowrap rounded-lg bg-slate-50 px-2 py-0.5 font-extrabold shadow-sm ${LOGO_GRADIENT_TEXT}`}>
          Since 2004
        </span>{" "}
        With{" "}
        <span className={`rounded-lg bg-slate-50 px-2 py-0.5 font-extrabold shadow-sm ${LOGO_GRADIENT_TEXT}`}>
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
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.1fr_0.9fr]">

          <div className="flex w-full justify-center">
            <Image
              src="/foreign-qualification/Foreign-qualification-info-1.webp"
              alt="Foreign Qualification dashboard showing states of operation"
              width={1373}
              height={1146}
              className="w-full max-w-[540px] h-auto"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 leading-tight md:text-[42px]">
              What Is Foreign Qualification?
            </h2>

            <h3 className={`mt-4 text-sm font-semibold uppercase tracking-wider leading-relaxed ${LOGO_GRADIENT_TEXT}`}>
              The legal process of registering your business to operate in a state other than where it was originally formed
            </h3>

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

          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Section 4: Requirements ──────────────────────────────────────────────────

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
  const containerRef = React.useRef<HTMLDivElement>(null);
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
    const container = containerRef.current;
    const track = trackRef.current;
    const fill = fillRef.current;
    if (!container || !track || !fill || icons.length < 2) return;

    const containerRect = container.getBoundingClientRect();
    const firstRect = icons[0].getBoundingClientRect();
    const lastRect = icons[icons.length - 1].getBoundingClientRect();

    const firstIconTop = firstRect.top - containerRect.top + firstRect.height / 2;
    const lastIconTop = lastRect.top - containerRect.top + lastRect.height / 2;
    const trackHeight = lastIconTop - firstIconTop;

    track.style.top = `${firstIconTop}px`;
    track.style.height = `${trackHeight}px`;

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
          <div ref={containerRef} className="relative flex w-full flex-col justify-between py-6">

            <div
              ref={trackRef}
              className="absolute left-6 w-1 rounded-full bg-slate-100 z-0"
              style={{ top: 0, height: 0 }}
            >
              <div
                ref={fillRef}
                className={`${LOGO_GRADIENT_VERTICAL} w-full rounded-full origin-top`}
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
                  className="relative z-10 mb-16 last:mb-0 flex min-h-[90px] w-full flex-row items-start select-none"
                >
                  <div
                    ref={(el: HTMLDivElement | null) => {
                      if (el) iconRefs.current[idx] = el;
                    }}
                    className={`absolute left-0 top-0 z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300 ease-out ${
                      isPassed
                        ? "scale-105 border-[#2B93C9] bg-[#ECF7FA] text-[#2B93C9] shadow-md"
                        : "border-slate-300 bg-white text-slate-400"
                    } ${isCurrent ? "ring-4 ring-[#2B93C9]/20" : ""}`}
                  >
                    <StepIcon className="h-5 w-5" strokeWidth={2.5} />
                  </div>

                  <div className="w-full pl-16 text-left">
                    <h4 className={`text-lg font-bold md:text-xl ${LOGO_GRADIENT_TEXT}`}>
                      {step.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-slate-700">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/foreign-qualification/File-the-required-state-documents.webp"
            alt="Certificate of Good Standing"
            width={1394}
            height={1128}
            className="w-full max-w-xs h-auto"
          />
        </div>

      </div>
    </section>
  );
}

// ─── Section 5: How To Get (Animated) ────────────────────────────────────────

function HowToSection() {
  const [progress, setProgress] = React.useState(0);
  const iconRefs = React.useRef<HTMLDivElement[]>([]);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const trackRef = React.useRef<HTMLDivElement>(null);
  const fillRef = React.useRef<HTMLDivElement>(null);

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

  // Measure real icon-circle positions (via getBoundingClientRect, not
  // offsetTop/offsetHeight of the whole step block) so the connecting line
  // lines up with the actual icon centers regardless of how much the
  // description text wraps.
  React.useEffect(() => {
    const icons = iconRefs.current.filter((el): el is HTMLDivElement => el !== null);
    const container = containerRef.current;
    const track = trackRef.current;
    const fill = fillRef.current;
    if (!container || !track || !fill || icons.length < 2) return;

    const containerRect = container.getBoundingClientRect();
    const firstRect = icons[0].getBoundingClientRect();
    const lastRect = icons[icons.length - 1].getBoundingClientRect();

    const firstIconTop = firstRect.top - containerRect.top + firstRect.height / 2;
    const lastIconTop = lastRect.top - containerRect.top + lastRect.height / 2;
    const trackHeight = lastIconTop - firstIconTop;

    track.style.top = `${firstIconTop}px`;
    track.style.height = `${trackHeight}px`;

    const fillPx = Math.min(progress * trackHeight, trackHeight);
    fill.style.height = `${fillPx}px`;
  }, [progress]);

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
          <div ref={containerRef} className="relative w-full py-6">
            <div
              ref={trackRef}
              className="absolute left-6 w-1 rounded-full bg-slate-100 overflow-hidden z-0"
              style={{ top: 0, height: 0 }}
            >
              <div
                ref={fillRef}
                className={`${LOGO_GRADIENT_VERTICAL} w-full rounded-full origin-top`}
                style={{ height: 0 }}
              />
            </div>

            {stepsList.map((step, idx) => {
              const StepIcon = step.icon;
              const isCurrent = currentActiveStep === idx + 1;
              const stepSize = 1 / stepsList.length;
              const isPassed = progress >= idx * stepSize;

              return (
                <div
                  key={step.id}
                  className={`relative z-10 flex min-h-[120px] w-full flex-row items-start select-none ${
                    idx === stepsList.length - 1 ? "mb-0" : "mb-12"
                  }`}
                >
                  <div
                    ref={(el: HTMLDivElement | null) => {
                      if (el) iconRefs.current[idx] = el;
                    }}
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                      isPassed
                        ? "scale-105 border-[#2B93C9] bg-[#ECF7FA] text-[#2B93C9] shadow-md"
                        : "border-slate-300 bg-white text-slate-400"
                    } ${isCurrent ? "ring-4 ring-[#2B93C9]/20" : ""}`}
                  >
                    <StepIcon className="h-5 w-5" strokeWidth={2.5} />
                  </div>

                  <div className="w-full pl-4 text-left">
                    <h4 className={`text-lg font-bold md:text-xl ${LOGO_GRADIENT_TEXT}`}>
                      {step.title}
                    </h4>

                    <p className="mt-1 text-sm leading-relaxed text-slate-700 md:text-base">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center pt-5 md:pt-0">
          <Image
            src="/foreign-qualification/How-to-get-foreign-qualified-info-3.webp"
            alt="Business name search screen"
            width={1189}
            height={1323}
            className="w-full max-w-[540px] h-auto"
          />
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
          <div className="flex justify-center">
            <Image
              src="/foreign-qualification/What-is-a-certificate-of-authority.webp"
              alt="Certificate of Authority status screen"
              width={1297}
              height={1213}
              className="w-full max-w-[480px] h-auto"
            />
          </div>

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
            <p className={`mt-4 font-semibold ${LOGO_GRADIENT_TEXT}`}>
              Filing for a Certificate of Authority is crucial to:
            </p>
            <ul className="mt-3 space-y-2">
              {[
                "Maintain legal operations in other states.",
                "Protect your business's ability to secure loans and renew licenses.",
                "Avoid compliance risks and penalties.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                  <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${LOGO_GRADIENT}`} />
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

  return (
    <section className="bg-white px-6 py-20 md:px-16">
      <h2 className="text-center text-3xl font-bold text-[#1E293B] md:text-4xl tracking-tight">
        Why Choose Incorp Bay for Foreign Qualification?
      </h2>

      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5 flex justify-center">
          <Image
            src="/foreign-qualification/Why-choose-bizee-for-forein-q-info-1.webp"
            alt="Incorp Bay compliance dashboard"
            width={1400}
            height={1123}
            className="w-full max-w-sm h-auto"
          />
        </div>

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
                    isOpen ? "text-[#1E293B]" : "text-slate-800 group-hover:text-[#2B93C9]"
                  }`}
                >
                  {item.id}. {item.title}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-[#2B93C9]" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed pl-6 border-l-2 border-[#2B93C9]/30">
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

// ─── Section 8: Do You Need Foreign Qualification ────────────────────────────

function DoYouNeedSection() {
  return (
    <section className="bg-white px-6 py-20 md:px-16">
      <div className="mx-auto max-w-6xl grid grid-cols-1 items-center gap-12 md:grid-cols-2">

        <div className="max-w-xl">
          <h2 className="text-4xl font-bold tracking-tight text-[#1E293B] md:text-5xl">
            Do You Need Foreign Qualification?
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            You may need a Foreign Qualification if your business:
          </p>

          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3 text-base text-slate-600 leading-relaxed">
              <span className={`mt-2.5 h-2 w-2 flex-shrink-0 rounded-full ${LOGO_GRADIENT}`} />
              <span>
                Maintains a physical presence (office, warehouse, or employees) in another state.
              </span>
            </li>
            <li className="flex items-start gap-3 text-base text-slate-600 leading-relaxed">
              <span className={`mt-2.5 h-2 w-2 flex-shrink-0 rounded-full ${LOGO_GRADIENT}`} />
              <span>
                Pays taxes or has significant contracts in the new state.
              </span>
            </li>
            <li className="flex items-start gap-3 text-base text-slate-600 leading-relaxed">
              <span className={`mt-2.5 h-2 w-2 flex-shrink-0 rounded-full ${LOGO_GRADIENT}`} />
              <span>
                Regularly conducts business that goes beyond occasional transactions.
              </span>
            </li>
          </ul>

          <p className="mt-8 text-base font-medium text-slate-700 leading-relaxed">
            If your business meets any of these criteria, filing for Foreign Qualification ensures you stay compliant and operate legally.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src="/foreign-qualification/Foreign-qualification-hero.webp"
            alt="Foreign Qualification certificate"
            width={400}
            height={500}
            className="w-full max-w-[320px] h-auto"
          />
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
            <p className={`mb-4 text-xs font-bold uppercase tracking-widest ${LOGO_GRADIENT_TEXT}`}>
              Table of Contents
            </p>
            <ul className="space-y-2">
              {tocItems.map((item, i) => (
                <li key={item}>
                  <button
                    onClick={() => setActiveItem(i)}
                    className={`flex w-full items-start gap-2 rounded-xl px-3 py-2 text-left text-sm transition ${
                      activeItem === i
                        ? "border border-[#2B93C9]/30 bg-[#ECF7FA] font-semibold text-[#1E293B]"
                        : "text-slate-500 hover:text-[#1E293B]"
                    }`}
                  >
                    <ChevronRight
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                        activeItem === i ? "text-[#2B93C9]" : "text-slate-300"
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
                <a href="#" className={`font-semibold hover:underline ${LOGO_GRADIENT_TEXT}`}>
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
        <p className={`text-xs font-semibold uppercase tracking-widest ${LOGO_GRADIENT_TEXT}`}>
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
                    open === i ? "rotate-180 text-[#2B93C9]" : "text-slate-400"
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
      <div className="relative mr-auto min-h-[440px] max-w-5xl overflow-hidden rounded-[40px] shadow-2xl">
        <Image
          src="/foreign-qualification/img3.webp"
          alt="Business owner working confidently in a modern office"
          fill
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />

        <div className="relative z-10 flex min-h-[440px] flex-col justify-center gap-5 px-8 py-14 sm:px-12 md:max-w-xl">
          <span className="w-fit rounded-full border border-white/15 bg-white/12 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            Incorporate Now
          </span>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            Expand Your Business <br /> With Confidence
          </h2>
          <p className="text-base leading-relaxed text-white/85">
            Get started on your Foreign Qualification today and let Incorp
            Bay handle the details.
          </p>
          <div className="pt-2">
            <PrimaryButton href="/foreign-qualification/step-1">
              START FOREIGN QUALIFICATION
            </PrimaryButton>
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
        <DoYouNeedSection />
        <ArticleSection />
        <FAQSection />
        <CTASection />
      </div>
    </NavigationWrapper>
  );
}