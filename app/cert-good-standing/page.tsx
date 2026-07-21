"use client";

import React, { useState, useEffect } from "react";
import NavigationWrapper from "@/components/NavigationWrapper";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Star,
  FileText,
  Landmark,
  Handshake,
  BadgeCheck,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";

const LOGO_GRADIENT_VERTICAL =
  "bg-[linear-gradient(180deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";

const LOGO_GRADIENT_TEXT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent";

// ---------- Shared data ----------

const needList = [
  {
    id: 1,
    icon: Landmark,
    title: "State Governments",
    desc: "If you want to operate in another state, you'll need this certificate for Foreign Qualification.",
    tag: "Foreign Qualification",
  },
  {
    id: 2,
    icon: FileText,
    title: "Lenders or Banks",
    desc: "Most loan applications and financial transactions require it before they'll even consider moving forward.",
    tag: "Capital Access",
  },
  {
    id: 3,
    icon: Handshake,
    title: "Investors or Business Partners",
    desc: "It shows that your business is operating legally and in full compliance — something serious partners always want to see.",
    tag: "Due Diligence",
  },
  {
    id: 4,
    icon: BadgeCheck,
    title: "Business Licenses and Insurance",
    desc: "Certain licenses and insurance policies won't be issued until you can provide this certificate.",
    tag: "Risk Underwriting",
  },
];

const whyChoose = [
  {
    id: 1,
    title: "Straightforward Pricing",
    desc: "No subscriptions, no hidden fees, no surprises — just honest, transparent costs.",
  },
  {
    id: 2,
    title: "Better Value",
    desc: "We're more affordable than most other providers out there.",
  },
  {
    id: 3,
    title: "Real Support",
    desc: "You get dedicated specialists who are fast, friendly, and actually helpful.",
  },
  {
    id: 4,
    title: "A Smarter Experience",
    desc: "Our easy-to-use dashboard keeps all your documents organized and accessible in one place.",
  },
];

const faqs = [
  {
    q: "What is a Certificate of Good Standing?",
    a: "A Certificate of Good Standing is an official document issued by a state's Secretary of State office. It certifies that your business is in compliance with state regulations and is in good standing.",
  },
  {
    q: "Why might I need one?",
    a: "You may need one for foreign qualification to operate in another state, applying for loans or financing, attracting investors, or obtaining certain business licenses and insurance.",
  },
  {
    q: "How do I get one?",
    a: "You can request it directly from your state's Secretary of State office, or let Incorp Bay handle the paperwork for you quickly and easily.",
  },
];

// ---------- Small building blocks ----------

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
        className={`${LOGO_GRADIENT} rounded-full px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:brightness-110 hover:scale-[1.03] hover:shadow-[0_10px_35px_rgba(43,147,201,0.45)]`}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`${LOGO_GRADIENT} rounded-full px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:brightness-110 hover:scale-[1.03] hover:shadow-[0_10px_35px_rgba(43,147,201,0.45)]`}
    >
      {children}
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

// ---------- Section 1: Hero ----------

function Hero() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/cert-good-standing/step-1");
  };

  return (
    <section className="relative overflow-hidden px-6 pt-4 pb-12 md:px-16 md:pt-6 md:pb-14">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#2B93C9 1px, transparent 1px), linear-gradient(90deg, #2B93C9 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-[#2B93C9]/10 blur-[90px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <Badge>
            <span>Excellent 4.7 out of 5</span>
            <Star className="h-4 w-4 fill-[#2B93C9] text-[#2B93C9]" />
            <span>Trustpilot</span>
          </Badge>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-[#1E293B] md:text-6xl">
            Get Your <span className={LOGO_GRADIENT_TEXT}>Certificate of Good Standing</span>
          </h1>

          <p className="mt-6 max-w-md text-xl text-black leading-relaxed">
            A Certificate of Good Standing confirms your business complies with
            state regulations. Get yours quickly and easily.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={handleGetStarted}
              className={`${LOGO_GRADIENT} group relative overflow-hidden rounded-full px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_35px_rgba(43,147,201,0.45)]`}
            >
              {/* Top Gloss */}
              <span className="absolute inset-x-0 top-0 h-1/2 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
              {/* Shine Animation */}
              <span className="absolute -left-20 top-0 h-full w-12 -skew-x-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />

              <span className="relative z-10 flex items-center gap-2">
                GET STARTED
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
            </button>

            <button className="group rounded-full border-2 border-[#2B93C9] bg-white px-8 py-3.5 text-sm font-bold text-[#2B93C9] transition-all duration-300 hover:bg-[#2B93C9] hover:text-white">
              <span className="flex items-center gap-2">
                LEARN MORE
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        <div>
          <div className="relative mx-auto max-w-lg">
            <div className="absolute inset-0 -z-10 scale-95 rounded-3xl bg-gradient-to-br from-[#2B93C9]/8 to-[#2B93C9]/4" />
            <div className="relative aspect-[4/5] w-full max-w-lg -rotate-2">
              <Image
                src="/cert-good-stand/1banner1.webp"
                alt="Certificate of Good Standing"
                fill
                className="rounded-xl object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Section 2: Trust + cards ----------

function TrustSection() {
  return (
    <section className="px-6 py-12 md:px-16 md:py-14 bg-white">
      <p className="text-center text-base md:text-xl font-bold text-slate-700 max-w-4xl mx-auto leading-relaxed">
        Bootstrapped, Founder Led, Independently Owned{" "}
        <span className="bg-slate-50 px-2 py-0.5 rounded-lg font-extrabold bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent whitespace-nowrap shadow-sm">
          Since 2004
        </span>{" "}
        With{" "}
        <span className="bg-slate-50 px-2 py-0.5 rounded-lg font-extrabold bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent shadow-sm">
          Over 1,000,000 Entrepreneurs
        </span>{" "}
        Served!
      </p>

      <div className="mx-auto mt-8 max-w-6xl rounded-3xl bg-[#ECEFF1]/50 p-8 md:p-12">
        <h2 className="text-center text-4xl font-bold max-w-4xl mx-auto leading-tight text-[#1E293B]">
          Prove Your Business is in Good Standing
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm font-medium text-black">
          Required for business expansions, loan applications, and verifying your company&apos;s legitimacy
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm min-h-[460px]">
            <div className="relative w-full h-60 overflow-hidden rounded-xl bg-slate-50">
              <Image
                src="/cert-good-stand/card1.webp"
                alt="Expand into new markets"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-6 text-sm font-bold text-slate-800">
              Expand into <span className="bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent">New Markets</span>
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm min-h-[460px]">
            <div className="relative w-full h-80 overflow-hidden rounded-xl bg-slate-50">
              <Image
                src="/cert-good-stand/card2.webp"
                alt="Secure financing for your business"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-6 text-sm font-bold text-slate-800">
              Open Business <span className="bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent">Bank Accounts</span>
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm min-h-[460px]">
            <div className="relative w-full h-80 overflow-hidden rounded-xl bg-slate-50">
              <Image
                src="/cert-good-stand/Card3.webp"
                alt="Build trust with stakeholders"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-6 text-sm font-bold text-slate-800">
              Establish <span className="bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent">Trust</span> with <span className="bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent">Stakeholders</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-6 flex max-w-6xl items-center gap-4 rounded-2xl border border-slate-200/60 bg-white px-6 py-4 text-sm font-medium text-slate-700 shadow-sm">
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center">
          <CheckCircle2
            className="h-6 w-6"
            style={{
              stroke: "url(#logoGradient)",
              fill: "none",
            }}
          />
          <svg width="0" height="0">
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#244EB6" />
                <stop offset="50%" stopColor="#2B93C9" />
                <stop offset="100%" stopColor="#33D1CC" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <p className="leading-relaxed text-slate-800">
          You can file the necessary forms yourself or let{" "}
          <span className="bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text font-bold text-transparent">
            Incorp Bay
          </span>{" "}
          handle the paperwork for you efficiently and cost-effectively.
        </p>
      </div>
    </section>
  );
}

// ---------- Section 3: When do you need one ----------

const ITEM_SPACING = 168; // px: min-h-[120px] + mb-12 (48px)
const ICON_CENTER = 24; // px: half of w-12 h-12 (48px)

function WhenSection() {
  const [progressPercent, setProgressPercent] = useState(0);
  const totalSteps = needList.length;
  const trackHeightPx = (totalSteps - 1) * ITEM_SPACING;

  useEffect(() => {
    let animationFrameId: number;
    let startTime: number | null = null;
    const duration = 12000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % duration) / duration;
      setProgressPercent(progress * 100);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const clampedProgress = Math.min(progressPercent, 100);
  const fillHeightPx = (clampedProgress / 100) * trackHeightPx;

  const getActiveStep = () => {
    const stepRange = 100 / totalSteps;
    const currentStep = Math.floor(clampedProgress / stepRange) + 1;
    return Math.min(currentStep, totalSteps);
  };

  const currentActiveStep = getActiveStep();

  return (
    <section className="bg-white px-6 py-10 md:px-16 md:py-12">
      <div className="text-center mb-8">
        <h2 className="text-center text-4xl md:text-4xl font-bold max-w-4xl mx-auto leading-tight text-[#1E293B]">
          When Do You Need a Certificate of <br className="hidden md:inline" /> Good Standing?
        </h2>
      </div>

      <div className="md:flex gap-10 items-center mx-auto max-w-6xl">
        <div className="w-full md:w-1/2 md:px-16">
          <div className="relative w-full flex flex-col py-2">
            {/* Grey background track: starts at center of icon 1, ends at center of icon 4 */}
            <div
              className="absolute w-1 bg-slate-100 rounded-full z-0"
              style={{
                left: "24px",
                top: `${ICON_CENTER}px`,
                height: `${trackHeightPx}px`,
              }}
            >
              {/* Gradient fill: grows from top, capped at trackHeightPx */}
              <div
                className={`${LOGO_GRADIENT_VERTICAL} w-full rounded-full origin-top`}
                style={{ height: `${fillHeightPx}px` }}
              />
            </div>

            {needList.map((step, idx) => {
              const StepIcon = step.icon;
              const stepNumber = idx + 1;
              const isPassed = idx < currentActiveStep;
              const isCurrent = currentActiveStep === stepNumber;

              return (
                <div
                  key={step.id}
                  className="relative flex flex-row items-start w-full min-h-[120px] mb-12 last:mb-0 z-10 select-none"
                >
                  <div
                    className={`absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 z-10 ${
                      isPassed
                        ? "bg-slate-50 border-[#2B93C9] text-[#2B93C9] shadow-md scale-105"
                        : "bg-white border-slate-300 text-slate-400"
                    } ${isCurrent ? "ring-4 ring-[#33D1CC]/20" : ""}`}
                  >
                    <StepIcon className="w-5 h-5" strokeWidth={2.5} />
                  </div>

                  <div className="w-full pl-16 text-left">
                    <h4 className={`md:text-xl text-lg font-bold ${LOGO_GRADIENT_TEXT}`}>
                      {step.title}
                    </h4>

                    <p className="md:text-base text-sm mt-1 leading-relaxed text-black">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center pt-5 md:pt-0">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/cert-good-stand/2banner2.webp"
              alt="Articles Amendment"
              width={500}
              height={500}
              className="object-contain rounded-3xl transform transition-transform duration-500 hover:scale-[1.02]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Section 4: Why choose us ----------

function WhyChooseSection() {
  const [progressPercent, setProgressPercent] = useState(0);
  const totalSteps = whyChoose.length;
  const trackHeightPx = (totalSteps - 1) * ITEM_SPACING;

  useEffect(() => {
    let animationFrameId: number;
    let startTime: number | null = null;
    const duration = 12000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % duration) / duration;
      setProgressPercent(progress * 100);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const clampedProgress = Math.min(progressPercent, 100);
  const fillHeightPx = (clampedProgress / 100) * trackHeightPx;

  const getActiveStep = () => {
    const stepRange = 100 / totalSteps;
    const currentStep = Math.floor(clampedProgress / stepRange) + 1;
    return Math.min(currentStep, totalSteps);
  };

  const currentActiveStep = getActiveStep();

  return (
    <section className="bg-white px-6 py-10 md:px-16 md:py-12">
      <span className={`mb-3 block text-center text-xs font-semibold uppercase tracking-widest ${LOGO_GRADIENT_TEXT}`}>
        Trusted by millions
      </span>

      <h2 className="text-center text-4xl font-bold text-[#1E293B]">Why Choose Us?</h2>

      <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 items-start gap-12 md:grid-cols-2">
        {/* Left Side Graphics Deck */}
        <div className="flex w-full justify-center pt-0 md:pt-2">
          <div className="relative w-full max-w-[420px] aspect-square overflow-hidden rounded-3xl">
            <Image
              src="/cert-good-stand/card.webp"
              alt="Dashboard preview"
              fill
              className="object-contain rounded-3xl transform transition-transform duration-500 hover:scale-[1.02]"
              priority
            />
          </div>
        </div>

        {/* Right Content Engine */}
        <div className="w-full md:px-4">
          <div className="relative flex w-full flex-col py-2">
            <div
              className="absolute z-0 w-1 rounded-full bg-slate-100"
              style={{
                left: "24px",
                top: `${ICON_CENTER}px`,
                height: `${trackHeightPx}px`,
              }}
            >
              <div
                className={`${LOGO_GRADIENT_VERTICAL} w-full origin-top rounded-full`}
                style={{ height: `${fillHeightPx}px` }}
              />
            </div>

            {whyChoose.map((step, idx) => {
              const stepNumber = idx + 1;
              const isPassed = idx < currentActiveStep;
              const isCurrent = currentActiveStep === stepNumber;

              return (
                <div
                  key={step.id}
                  className="relative z-10 mb-12 flex min-h-[120px] w-full select-none flex-row items-start last:mb-0"
                >
                  <div
                    className={`absolute left-0 top-0 z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                      isPassed
                        ? "scale-105 border-[#2B93C9] bg-slate-50 text-[#2B93C9] shadow-md"
                        : "border-slate-300 bg-white text-slate-400"
                    } ${isCurrent ? "ring-4 ring-[#33D1CC]/20" : ""}`}
                  >
                    <span className="text-sm font-bold">{stepNumber}</span>
                  </div>

                  <div className="w-full pl-16 text-left">
                    <h4 className={`text-lg font-bold md:text-xl ${LOGO_GRADIENT_TEXT}`}>
                      {step.title}
                    </h4>

                    <p className="mt-1 text-sm leading-relaxed text-black md:text-base">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Section 5: FAQ ----------

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="px-6 py-12 md:px-16 md:py-14">
      <div className="mx-auto max-w-2xl">
        <p className={`text-xs font-semibold uppercase tracking-widest ${LOGO_GRADIENT_TEXT}`}>
          Key Considerations
        </p>
        <h2 className="mt-2 text-4xl font-bold text-[#1E293B]">
          Common Questions About Obtaining a Certificate of Good Standing
        </h2>

        <div className="mt-8 divide-y divide-slate-200">
          {faqs.map(({ q, a }, i) => (
            <div key={q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left text-sm font-semibold text-gray-600 hover:text-[#1E293B] transition-colors"
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

// ---------- Section 6: CTA ----------

function CTASection() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/cert-good-standing/step-1");
  };

  return (
    <section className="px-6 py-8 md:px-16 md:py-10">
      <div
        className={`${LOGO_GRADIENT} relative mx-auto max-w-4xl overflow-hidden rounded-[32px] border border-white/10 px-8 py-8 text-center shadow-2xl sm:px-10`}
      >
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#2B93C9]/20 to-transparent" />
        <div className="pointer-events-none absolute right-1/4 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#33D1CC]/30 blur-[80px]" />

        <div className="relative grid grid-cols-1 items-center gap-4 p-2 md:grid-cols-[1.2fr_0.8fr] md:p-3">
          <div className="relative z-10 flex w-full flex-col items-start space-y-3 text-left">
            <span className="rounded-full border border-white/15 bg-white/12 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
  Incorporate Now
</span>
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl">
              Ready To Take <br /> Your Startup To <br /> The Next Level?
            </h2>

            <p className="max-w-sm text-xs leading-relaxed text-white/80 md:text-sm">
              Start your business with simple pricing, guided filing, and a secure dashboard built to keep your documents organized.
            </p>

 <button
  onClick={handleGetStarted}
  className="group relative overflow-hidden rounded-xl bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
>
  {/* Hover Shine */}
  <span className="absolute inset-0 bg-[#2B93C9]/0 transition-colors duration-300 group-hover:bg-[#2B93C9]/5" />
  {/* Animated Light */}
  <span className="absolute -left-16 top-0 h-full w-10 -skew-x-12 bg-[#2B93C9]/10 blur-sm transition-all duration-700 group-hover:left-[120%]" />

  <span className="relative z-10 flex items-center gap-2 text-black">
    GET STARTED
    <svg
      className="h-4 w-4 stroke-black transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  </span>
</button>

            <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] font-medium text-white/85">
              <span className="rounded-full border border-white/15 bg-white/12 px-3 py-1">✓ No Hidden Fees</span>
              <span className="rounded-full border border-white/15 bg-white/12 px-3 py-1">✓ Fast State Filing</span>
              <span className="rounded-full border border-white/15 bg-white/12 px-3 py-1">✓ Secure Process</span>
            </div>

            <div className="mt-3 grid w-full max-w-sm grid-cols-3 gap-3">
              <div className="rounded-2xl border border-white/15 bg-white/12 px-3 py-2 backdrop-blur">
                <p className="text-lg font-bold text-white">1M+</p>
                <p className="text-[10px] text-white/75">Businesses</p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/12 px-3 py-2 backdrop-blur">
                <p className="text-lg font-bold text-white">50</p>
                <p className="text-[10px] text-white/75">States</p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/12 px-3 py-2 backdrop-blur">
                <p className="text-lg font-bold text-white">4.7★</p>
                <p className="text-[10px] text-white/75">Rating</p>
              </div>
            </div>
          </div>

         {/* Right side: bigger image, bleeding toward the card edge like reference */}
<div className="relative z-10 flex min-h-[280px] w-full select-none items-end justify-end">
  <div className="relative -mr-6 -mb-6 -mt-14 h-[460px] w-[340px] translate-x-4 translate-y-10 md:-mt-20 md:h-[540px] md:w-[380px] md:translate-x-8 md:translate-y-6">
    <Image
      src="/cert-good-stand/cta.png"
      alt="Business Formation Certificate"
      fill
      className="object-contain object-bottom drop-shadow-2xl"
    />
  </div>
</div>
        </div>
      </div>
    </section>
  );
}

// ---------- Full Main Render Layout ----------

export default function CertificateLandingPage() {
  return (
    <NavigationWrapper>
      <div className="min-h-screen bg-white text-[#1E293B] font-helvetica">
        <Hero />
        <TrustSection />
        <WhenSection />
        <WhyChooseSection />
        <FAQSection />
        <CTASection />
      </div>
    </NavigationWrapper>
  );
}