"use client";

import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { ShieldCheck, FileText, Settings, ClipboardList, Star, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { statesInUS } from "@/data";
import NavigationWrapper from "@/components/NavigationWrapper";

const entityTypes = ["LLC", "C-Corporation", "Partnership", "Nonprofit"];

const stateFees: Record<string, number> = {
  Alabama: 200,
  Alaska: 250,
  Arizona: 150,
  Arkansas: 300,
  California: 350,
  Colorado: 150,
  Connecticut: 350,
  Delaware: 200,
  Florida: 350,
  Georgia: 250,
  Hawaii: 150,
  Idaho: 150,
  Illinois: 350,
  Indiana: 150,
  Iowa: 150,
  Kansas: 200,
  Kentucky: 200,
  Louisiana: 300,
  Maine: 250,
  Maryland: 200,
  Massachusetts: 350,
  Michigan: 250,
  Minnesota: 250,
  Mississippi: 200,
  Missouri: 200,
  Montana: 150,
  Nebraska: 150,
  Nevada: 250,
  "New Hampshire": 250,
  "New Jersey": 250,
  "New Mexico": 150,
  "New York": 350,
  "North Carolina": 250,
  "North Dakota": 150,
  Ohio: 150,
  Oklahoma: 200,
  Oregon: 300,
  Pennsylvania: 300,
  "Rhode Island": 350,
  "South Carolina": 200,
  "South Dakota": 150,
  Tennessee: 300,
  Texas: 300,
  Utah: 200,
  Vermont: 150,
  Virginia: 200,
  Washington: 250,
  "West Virginia": 200,
  Wisconsin: 250,
  Wyoming: 150,
};

const serviceFee = 99;

// ── Brand gradient theme (matches Certificate of Good Standing page) ────────
const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";

const LOGO_GRADIENT_VERTICAL =
  "bg-[linear-gradient(180deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";

const LOGO_GRADIENT_TEXT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent";

// Timeline geometry (matches cert page's WhenSection)
const ITEM_SPACING = 168; // px: min-h-[120px] + mb-12 (48px)
const ICON_CENTER = 24; // px: half of w-12 h-12 (48px)

const stepsData = [
  {
    title: "Stay Legally Compliant",
    desc: "Keeping your LLC's official records current helps you stay in line with state laws and steer clear of unnecessary fines or penalties.",
    icon: ClipboardList,
  },
  {
    title: "Keep Your Liability Protection Intact",
    desc: "Filing amendments helps preserve your LLC's limited liability protection by making sure your business information stays accurate and up to date.",
    icon: ShieldCheck,
  },
  {
    title: "Keep Public Records Accurate",
    desc: "Updating your LLC's details means banks, investors, vendors and other stakeholders always have access to correct information.",
    icon: FileText,
  },
  {
    title: "Keep Operations Running Smoothly",
    desc: "Current records help your business run without hiccups, especially during transactions where legal accuracy really matters.",
    icon: Settings,
  },
];

const howToSteps = [
  "Figure out which form you need",
  "Complete the amendment form",
  "Submit it to your state",
  "File Restated Articles of Organization",
];

const faqData = [
  {
    q: "How Long Does It Take To Change a Company Name?",
    a: "The filing time for Articles of Amendment typically takes four to six weeks, depending on the processing speeds of your specific Secretary of State. Some states offer expedited processing options for an additional fee if you need the updates approved quickly.",
  },
  {
    q: "How do I file out-of-state Articles of Amendment?",
    a: "If you're filing an amendment for a business that's registered as a foreign entity in another state, you will need to submit the corresponding amendment forms to that specific state's governing business authority, adhering to their particular state guidelines and document requirements.",
  },
  {
    q: "What is the difference between Articles of Amendment and Restated Articles?",
    a: "Articles of Amendment add to, delete, or change specific details in your original layout documents. Restated Articles combine your original articles and all subsequent updates or modifications into one single, clean, and comprehensive master document.",
  },
  {
    q: "Do I need to update my operating agreement after filing an amendment?",
    a: "Yes, it is highly recommended. Whenever key structural parameters or entity records change at the state level, like a company name change or change in membership, you should update your internal Operating Agreement to maintain operational clarity.",
  },
];

// ---------- Small building blocks (matches cert page) ----------

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
      {children}
    </div>
  );
}

function GradientButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={`${LOGO_GRADIENT} group relative overflow-hidden rounded-full px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:brightness-110 hover:scale-[1.03] hover:shadow-[0_10px_35px_rgba(43,147,201,0.45)]`}
    >
      <span className="absolute inset-x-0 top-0 h-1/2 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
      <span className="absolute -left-20 top-0 h-full w-12 -skew-x-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />
      <span className="relative z-10 flex items-center gap-2">
        {children}
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
    </Link>
  );
}

// ---------- Section 1: Hero ----------

function Hero() {
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
            File Your <span className={LOGO_GRADIENT_TEXT}>Articles of Amendment</span>
          </h1>

          <p className="mt-6 max-w-md text-xl leading-relaxed text-black">
            Here&apos;s how to update your LLC&apos;s name, address, or member
            details quickly and accurately.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <GradientButton href="/amendment/step-1">GET STARTED</GradientButton>
          </div>
        </div>

        <div>
          <div className="relative mx-auto max-w-lg">
            <div className="absolute inset-0 -z-10 scale-95 rounded-3xl bg-gradient-to-br from-[#2B93C9]/8 to-[#2B93C9]/4" />
            <div className="relative aspect-[4/5] w-full max-w-lg -rotate-2">
              <Image
                src="/amendment/Amendment-hero.webp"
                alt="File Articles of Amendment"
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

// ---------- Section 2: Trust / count strip ----------

function TrustSection() {
  return (
    <section className="bg-white px-6 py-12 md:px-16 md:py-14">
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

// ---------- Section 3: What are Articles of Amendment ----------

function WhatSection() {
  return (
    <section className="bg-white px-6 py-12 md:px-16 md:py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold leading-tight text-[#1E293B] md:text-5xl">
            What Are Articles of Amendment?
          </h2>

          <p className="mt-6 text-base leading-relaxed text-slate-600 md:text-xl">
            Articles of Amendment come into play when a company needs to make
            a major change to the{" "}
            <span className={`font-semibold ${LOGO_GRADIENT_TEXT}`}>
              Articles of Incorporation
            </span>{" "}
            or Articles of Organization that were created when the business
            first formed.
          </p>

          <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-xl">
            As a business, you&apos;re always evolving, shifting, and
            improving. This means you&apos;ll inevitably need to update some
            of the important parameters of your business. That&apos;s where
            Articles of Amendment come in.
          </p>
        </div>

       <div className="flex justify-center">
  <div className="w-full max-w-xl rounded-3xl bg-[#ECEFF1]/50 p-6 md:p-10">
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
      <Image
        src="/amendment/Amendment-toc-03.webp"
        alt="Articles of Amendment"
        fill
        className="rounded-3xl object-cover"
      />
    </div>
  </div>
</div>
      </div>
    </section>
  );
}

// ---------- Section 4: When do you need to file (checklist) ----------

function WhenChecklistSection() {
  const leftItems = ["Business Address", "Business Name", "Stated Business Activities"];
  const rightItems = ["Registered Agent", "Member Information", "Number of Authorized Shares"];

  return (
    <section className="bg-white px-6 py-12 md:px-16 md:py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="order-2 flex justify-center md:order-1">
          <div className="relative aspect-square w-full max-w-md">
            <Image
              src="/amendment/How-to-file-articles-of-amendment.webp"
              alt="Articles of Amendment checklist"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-4xl font-bold leading-tight text-[#1E293B]">
            When Do I Need to File Articles of Amendment?
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-xl">
            You need to file Articles of Amendment with your Secretary of
            State when your LLC, C Corp, S Corp, or nonprofit changes or
            modifies its:
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-3">
              {leftItems.map((item) => (
                <div key={item} className="flex items-center gap-2 text-[#1E293B]">
                  <CheckBadgeIcon className="h-6 w-6 flex-shrink-0 text-[#2B93C9]" />
                  <span className="text-sm font-medium md:text-base">{item}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {rightItems.map((item) => (
                <div key={item} className="flex items-center gap-2 text-[#1E293B]">
                  <CheckBadgeIcon className="h-6 w-6 flex-shrink-0 text-[#2B93C9]" />
                  <span className="text-sm font-medium md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Section 5: Why Filing Matters (animated timeline) ----------

function WhyFilingSection() {
  const [progressPercent, setProgressPercent] = useState(0);
  const [started, setStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const totalSteps = stepsData.length;
  const trackHeightPx = (totalSteps - 1) * ITEM_SPACING;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let animationFrameId: number;
    let startTime: number | null = null;
    const duration = 6000;
    const pauseAtEnd = 800; // thoda ruko jab progress 100% ho jaye, phir restart

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setProgressPercent(progress * 100);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        // pause thodi der, phir loop restart
        setTimeout(() => {
          startTime = null;
          setProgressPercent(0);
          animationFrameId = requestAnimationFrame(animate);
        }, pauseAtEnd);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [started]);

  const clampedProgress = Math.min(progressPercent, 100);
  const fillHeightPx = (clampedProgress / 100) * trackHeightPx;

  const getActiveStep = () => {
    const stepRange = 100 / totalSteps;
    const currentStep = Math.floor(clampedProgress / stepRange) + 1;
    return Math.min(currentStep, totalSteps);
  };

  const currentActiveStep = getActiveStep();

  return (
    <section ref={sectionRef} className="bg-white px-6 py-10 md:px-16 md:py-12">
      <div className="mb-8 text-center">
        <h2 className="mx-auto max-w-4xl text-center text-4xl font-bold leading-tight text-[#1E293B] md:text-4xl">
          Why Filing Matters
        </h2>
      </div>

      <div className="mx-auto max-w-6xl items-center gap-10 md:flex">
        <div className="w-full md:w-1/2 md:px-16">
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
                className={`${LOGO_GRADIENT_VERTICAL} w-full origin-top rounded-full transition-all duration-200 ease-out`}
                style={{ height: `${fillHeightPx}px` }}
              />
            </div>

            {stepsData.map((step, idx) => {
              const StepIcon = step.icon;
              const stepNumber = idx + 1;
              const isPassed = idx < currentActiveStep;
              const isCurrent = currentActiveStep === stepNumber;

              return (
                <div
                  key={step.title}
                  className="relative z-10 mb-12 flex min-h-[120px] w-full select-none flex-row items-start last:mb-0"
                >
                  <div
                    className={`absolute left-0 top-0 z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                      isPassed
                        ? "scale-105 border-[#2B93C9] bg-slate-50 text-[#2B93C9] shadow-md"
                        : "border-slate-300 bg-white text-slate-400"
                    } ${isCurrent ? "ring-4 ring-[#33D1CC]/20" : ""}`}
                  >
                    <StepIcon className="h-5 w-5" strokeWidth={2.5} />
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

        <div className="flex justify-center pt-5 md:w-1/2 md:pt-0">
          <div className="overflow-hidden rounded-3xl">
            <Image
              src="/amendment/Why-is-it-important-to-file-4.webp"
              alt="Why filing matters"
              width={500}
              height={500}
              className="transform rounded-3xl object-contain transition-transform duration-500 hover:scale-[1.02]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Section 6: How to File (steps grid) ----------

function HowToSection() {
  return (
    <section className="bg-white px-6 py-12 md:px-16 md:py-14">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold leading-tight text-[#1E293B]">
          How to File Articles of Amendment
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {howToSteps.map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:border-[#2B93C9]/40 hover:shadow-md"
            >
              <div
                className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${LOGO_GRADIENT}`}
              >
                {index + 1}
              </div>
              <p className="text-base font-bold text-[#1E293B] md:text-lg">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Section 7: Pricing / order form ----------

function PricingSection() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedEntityType, setSelectedEntityType] = useState("");

  const currentStateFee =
    selectedState && stateFees[selectedState] ? stateFees[selectedState] : 0;
  const totalPrice = selectedState ? serviceFee + currentStateFee : 0;

  return (
    <section className="bg-white px-6 py-12 md:px-16 md:py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold leading-tight text-[#1E293B]">
            We Make Filing Simple
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-xl">
            We know running a business already takes up enough time, money,
            and energy.
          </p>

          <p className="mt-3 text-base leading-relaxed text-slate-600 md:text-xl">
            Incorp Bay offers quick, affordable filing services so you can
            check Articles of Amendment off your list without the hassle.
          </p>
        </div>

        <div className="mx-auto w-full max-w-md rounded-3xl border border-slate-100 bg-[#ECEFF1]/50 p-8 shadow-sm">
          <p className="text-center text-2xl font-bold text-[#1E293B]">
            Articles of Amendment
          </p>

          <div className="mt-6 flex flex-col gap-2">
            <label className="text-center text-sm font-semibold text-[#1E293B]">
              Entity Type
            </label>
            <select
              className="mx-auto w-full rounded-full border-2 border-slate-200 bg-white py-2.5 text-center text-sm outline-none transition duration-300 ease-in-out hover:border-[#2B93C9] focus:border-[#2B93C9]"
              value={selectedEntityType}
              onChange={(e) => setSelectedEntityType(e.target.value)}
            >
              <option hidden value="">
                Select Entity Type
              </option>
              {entityTypes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <label className="text-center text-sm font-semibold text-[#1E293B]">
              Entity State
            </label>
            <select
              className="mx-auto w-full rounded-full border-2 border-slate-200 bg-white py-2.5 text-center text-sm outline-none transition duration-300 ease-in-out hover:border-[#2B93C9] focus:border-[#2B93C9]"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >
              <option value="">Select State</option>
              {statesInUS.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <div className="my-6 rounded-2xl border-2 border-[#2B93C9]/20 bg-white py-6 text-center transition duration-300 ease-in-out hover:border-[#2B93C9]">
            <h3 className={`text-4xl font-bold ${LOGO_GRADIENT_TEXT}`}>
              ${totalPrice || "0"}
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              {selectedState ? `Plus $${currentStateFee} state fee` : "Select a state"}
            </p>
          </div>

          <div className="flex justify-center">
            <GradientButton href="/amendment/step-1">ORDER NOW</GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Section 8: FAQ ----------

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="px-6 py-12 md:px-16 md:py-14">
      <div className="mx-auto max-w-2xl">
        <p className={`text-xs font-semibold uppercase tracking-widest ${LOGO_GRADIENT_TEXT}`}>
          Key Considerations
        </p>
        <h2 className="mt-2 text-4xl font-bold text-[#1E293B]">
          Common Questions About Filing Articles of Amendment
        </h2>

        <div className="mt-8 divide-y divide-slate-200">
          {faqData.map(({ q, a }, i) => (
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

// ---------- Section 9: Final CTA ----------

function CTASection() {
  return (
    <section className="px-6 py-12 md:px-16 md:py-14">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-bold uppercase text-[#1E293B] md:py-3 md:text-5xl">
          Ready for a Change?
        </h2>

        <p className="text-base text-slate-600 max-sm:pt-4 md:text-xl">
          Skip the hassle — let us file your LLC&apos;s Articles of Amendment
          for you.
        </p>

         <div className="flex items-center justify-center py-5">
          <Link
            href="/amendment/step-1"
            className={`${LOGO_GRADIENT} group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(43,147,201,0.5)] active:scale-[0.98]`}
          >
            <span className="absolute inset-x-0 top-0 h-1/2 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
            <span className="absolute -left-20 top-0 h-full w-12 -skew-x-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />
            <span className="relative z-10 flex items-center gap-2">
              FILE ARTICLES OF AMENDMENT
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ---------- Full Page ----------

const Amendment = () => {
  return (
    <NavigationWrapper>
      <div className="min-h-screen bg-white text-[#1E293B] font-helvetica">
        <Hero />
        <TrustSection />
        <WhatSection />
        <WhenChecklistSection />
        <WhyFilingSection />
        <HowToSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </div>
    </NavigationWrapper>
  );
};

export default Amendment;