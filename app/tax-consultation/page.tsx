"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import NavigationWrapper from "@/components/NavigationWrapper";

const StarIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#00B67A]">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const PackageIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-500">
    {children}
  </div>
);

const DocumentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6M8 13h8M8 17h6" />
  </svg>
);

const CalculatorIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <path d="M8 6h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 19h.01M12 19h.01M16 19h.01" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
    <circle cx="12" cy="7" r="4" />
    <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const BankIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
    <path d="M3 10h18M5 10v9M9 10v9M15 10v9M19 10v9M4 19h16M12 3 3 8h18z" />
  </svg>
);

const CloudIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
    <path d="M17.5 19H7a5 5 0 1 1 1.7-9.7A6 6 0 0 1 20 12.5 3.5 3.5 0 0 1 17.5 19z" />
  </svg>
);

const PhoneMockup = ({ small = false }: { small?: boolean }) => (
  <div className={`relative mx-auto ${small ? "w-[220px]" : "w-[270px]"} rotate-[-6deg] rounded-[2.4rem] border-[10px] border-slate-950 bg-white shadow-2xl`}>
    <div className="absolute left-1/2 top-3 h-5 w-24 -translate-x-1/2 rounded-full bg-slate-950" />
    <div className="px-5 pb-7 pt-12">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-cyan-100" />
          <div>
            <p className="text-[10px] font-black text-slate-950">Alexandra Davis</p>
            <p className="text-[8px] text-slate-400">Managing Director</p>
          </div>
        </div>
        <div className="h-2 w-2 rounded-full bg-red-500" />
      </div>

      <p className="mb-3 text-lg font-black text-slate-950">Incorp Bay Tax</p>

      <div className="rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-700 p-4 text-white shadow-lg shadow-cyan-500/30">
        <div className="mb-1 text-[9px] font-semibold opacity-80">Current Status</div>
        <div className="flex items-center justify-between">
          <p className="text-base font-black">Service Active</p>
          <span className="rounded-full bg-white/15 px-2 py-1 text-[8px]">Excellent</span>
        </div>
        <p className="mt-1 text-[9px] opacity-80">Next Payment: 02/28/2025</p>
      </div>

      <p className="mt-5 text-xs font-black text-slate-950">Upcoming Tax Deadlines</p>

      <div className="mt-3 space-y-3">
        {[
          ["Pay your Tax", "02/14/2025"],
          ["Annual Tax Filing", "03/11/2025"],
          ["Withholding Tax", "04/13/2025"],
          ["Estimated Tax", "04/15/2025"],
        ].map(([title, date]) => (
          <div key={title} className="flex items-center justify-between rounded-xl border border-slate-100 bg-white p-3 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-50 text-[10px] font-black text-cyan-600">✓</span>
              <div>
                <p className="text-[9px] font-bold text-slate-950">{title}</p>
                <p className="text-[8px] text-slate-400">LLC Tax</p>
              </div>
            </div>
            <span className="text-[8px] font-bold text-slate-500">{date}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="absolute -right-16 top-40 hidden rounded-xl border border-cyan-100 bg-white px-4 py-3 shadow-xl md:block">
      <p className="text-[10px] font-black text-slate-950">State Tax Reminder</p>
      <p className="text-[9px] text-slate-400">Due Date: 02/11/2025</p>
    </div>
  </div>
);

const TaxDashboard = () => (
  <div className="relative mx-auto w-full max-w-[420px] rounded-3xl bg-slate-950 p-7 shadow-2xl">
    <div className="absolute -right-8 -top-8 w-56 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs font-black text-slate-950">Total Taxes</p>
        <span className="rounded-lg bg-slate-50 px-2 py-1 text-[9px] text-slate-500">Summary</span>
      </div>
      <p className="text-xl font-black text-slate-950">$12,128</p>
      <svg viewBox="0 0 200 80" className="mt-3 h-20 w-full">
        <path d="M5 60 C35 30 55 55 78 38 C102 18 130 22 155 48 C170 64 185 38 195 25" fill="none" stroke="#06B6D4" strokeWidth="5" strokeLinecap="round" />
        <path d="M5 60 C35 30 55 55 78 38 C102 18 130 22 155 48 C170 64 185 38 195 25 L195 80 L5 80z" fill="#06B6D4" opacity=".1" />
      </svg>
    </div>

    <div className="mt-28 rounded-2xl bg-white p-5">
      <p className="text-sm font-black text-slate-950">Tax Management</p>
      <p className="mt-1 text-xs text-slate-400">View and update your tax details</p>

      {[
        ["Federal Income Tax", "04/15/2024"],
        ["State Income Tax", "04/18/2024"],
      ].map(([title, date]) => (
        <div key={title} className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-50 text-cyan-500">✓</span>
            <div>
              <p className="text-xs font-black text-slate-950">{title}</p>
              <p className="text-[10px] text-slate-400">Last paid 04/13/2024</p>
            </div>
          </div>
          <span className="text-[10px] font-semibold text-slate-500">{date}</span>
        </div>
      ))}
    </div>
  </div>
);


const TAX_TRACK_ITEM_SPACING = 132;
const TAX_TRACK_ICON_CENTER = 20;

export default function IncorpBayTaxPage() {
  const packageItems = [
    ["Quarterly bookkeeping and financial reporting.", <DocumentIcon key="d" />],
    ["Business tax return preparation.", <CalculatorIcon key="c" />],
    ["Personal tax filing for sole proprietors and single-member LLCs.", <UserIcon key="u" />],
    ["Compliance assistance to stay tax-ready.", <ShieldIcon key="s" />],
    ["Online tools to link and manage up to two bank accounts.", <BankIcon key="b" />],
    ["Professional accounting advice from our team of experts.", <CloudIcon key="cl" />],
  ];

  const howItWorks = [
    ["Free 30-Minute Consultation", "Start with a personalized conversation to discuss your tax needs and business goals with a Incorp Bay Tax expert."],
    ["Quick Setup", "You’ll be up and running in minutes. Your account is ready to go as soon as you sign up through your Incorp Bay dashboard."],
    ["30-Day Trial", "Test-drive Incorp Bay Tax with unrestricted access to our services and expert team for 30 days."],
    ["Hassle-Free Continuation", "If you’re satisfied, your subscription begins automatically after the trial. No interruption, no contracts, and cancel anytime."],
  ];

  const [taxTrackProgress, setTaxTrackProgress] = useState(0);
  const totalTaxSteps = howItWorks.length;
  const taxTrackHeightPx = (totalTaxSteps - 1) * TAX_TRACK_ITEM_SPACING;

  useEffect(() => {
    let animationFrameId: number;
    let startTime: number | null = null;
    const duration = 12000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % duration) / duration;
      setTaxTrackProgress(progress * 100);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const clampedTaxProgress = Math.min(taxTrackProgress, 100);
  const taxFillHeightPx = (clampedTaxProgress / 100) * taxTrackHeightPx;

  const currentTaxStep = Math.min(
    Math.floor(clampedTaxProgress / (100 / totalTaxSteps)) + 1,
    totalTaxSteps,
  );

  return (
    <NavigationWrapper>
      <main className="min-h-screen bg-white font-sans text-slate-950">
      <section className="relative overflow-hidden px-6 py-16 md:px-12 lg:px-20">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-30">
          <svg viewBox="0 0 500 500" className="h-full w-full">
            <path d="M40 20 C120 80 90 190 180 220 C300 260 280 390 460 450" fill="none" stroke="#06B6D4" strokeWidth="1" />
            <path d="M180 0 C260 80 230 180 330 210 C430 240 400 370 490 420" fill="none" stroke="#06B6D4" strokeWidth="1" />
          </svg>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 md:grid-cols-2">
          <div>
            <div className="mb-8 inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold shadow-sm">
              Excellent 4.7 out of 5 <StarIcon /> <span>Trustpilot</span>
            </div>

            <h1 className="text-5xl font-black leading-[1.08] tracking-tight md:text-6xl">
              Simplify Your
              <br />
              <span className="text-cyan-500">Business Taxes</span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-slate-700">
              Start Incorp Bay Tax FREE for 31 days. After that, choose the plan that fits your
              business and your budget. The best businesses run on more than intuition. They run
              on good accounting solutions.
            </p>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 rounded-[3rem] bg-cyan-50/70" />
            <PhoneMockup />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl border-y border-cyan-100 px-6 py-5 text-center text-sm font-semibold text-slate-800">
        Bootstrapped, Founder Led, Independently Owned{" "}
        <span className="rounded bg-cyan-100 px-2 py-1 font-black text-cyan-700">Since 2004</span>{" "}
        With{" "}
        <span className="rounded bg-cyan-100 px-2 py-1 font-black text-cyan-700">Over 1,000,000 Entrepreneurs</span>{" "}
        Served!
      </div>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-20">
        <h2 className="text-center text-4xl font-black tracking-tight md:text-5xl">
          Why Choose <span className="text-cyan-500">Incorp Bay Tax?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-7 text-slate-600">
          With Incorp Bay Tax, you get more than software. You get strategy. Real accountants who work
          with you to lower your tax bill, catch financial statements you can actually read, and
          detailed insights.
        </p>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[0.9fr_1fr]">
          <div className="min-h-[430px] overflow-hidden rounded-3xl bg-gradient-to-br from-slate-200 to-slate-500 shadow-lg">
            <div className="flex h-full items-end justify-center p-8 text-center text-slate-700">
              <div>
                <div className="mx-auto mb-5 h-44 w-44 rounded-full bg-slate-100" />
                <p className="text-lg font-black text-slate-950">Tax Expert Support</p>
                <p className="text-sm text-slate-600">Real accountants. Real answers.</p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {[
              ["Schedule Your Consultation", "In just 30 minutes, get expert answers to your biggest tax and bookkeeping questions. We’ll help you simplify your finances and reduce stress."],
              ["Meet with Our Accountant Team", "Get professional tax strategies, quarterly bookkeeping, and personalized advice for most CPAs and EAs. Whether you’re a freelancer or scaling your LLC, we’re here to save you money."],
              ["Streamline Your Finances", "Whether starting out or streamlining your current processes, Incorp Bay Tax simplifies finances with tax prep, financial insights, and expert support—so you can focus on growing your business."],
            ].map(([title, text], index) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="mb-4 flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500 text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-black">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-100 bg-cyan-50/30 px-6 py-16 text-center shadow-sm">
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <svg viewBox="0 0 900 250" className="h-full w-full">
              <path d="M0 220 C160 60 300 260 470 80 C610 -60 750 90 900 20" fill="none" stroke="#06B6D4" strokeWidth="1" />
              <path d="M0 50 C130 120 300 0 480 120 C650 240 750 120 900 180" fill="none" stroke="#06B6D4" strokeWidth="1" />
            </svg>
          </div>
          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-cyan-500 shadow">
              <CheckIcon />
            </div>
            <h2 className="text-3xl font-black leading-tight md:text-4xl">
              Taxes Can Be Stressful - Managing
              <br />
              Taxes Shouldn’t Be - <span className="text-cyan-500">Start Your 30-Day Trial</span>
            </h2>
            <Link
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-black uppercase text-white shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-600"
            >
              Get Started <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-20">
        <h2 className="text-center text-4xl font-black leading-tight">
          What’s Included in the
          <br />
          <span className="text-cyan-500">Starter Package?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-6 text-slate-600">
          For $125/month - available to sole proprietorships and single-member LLCs - the Starter
          Package offers everything you need to stay on top of your business finances.
        </p>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 md:grid-cols-3">
          {packageItems.map(([text, icon], index) => (
            <div key={String(text)} className="border-b border-slate-200 p-8 text-center md:border-r md:last:border-r-0 [&:nth-child(n+4)]:md:border-b-0">
              <PackageIcon>{icon}</PackageIcon>
              <p className="text-sm font-black leading-6 text-slate-950">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-16 md:px-12 lg:grid-cols-2 lg:px-20">
        <div>
          <h2 className="mb-10 text-center text-4xl font-black lg:text-left">How It Works</h2>
          <div className="relative flex w-full flex-col py-4">
            <div
              className="absolute left-5 z-0 w-1 rounded-full bg-slate-100"
              style={{
                top: `${TAX_TRACK_ICON_CENTER}px`,
                height: `${taxTrackHeightPx}px`,
              }}
            >
              <div
                className="w-full origin-top rounded-full bg-cyan-500 transition-[height] duration-100 ease-linear"
                style={{ height: `${taxFillHeightPx}px` }}
              />
            </div>

            {howItWorks.map(([title, text], index) => {
              const stepNumber = index + 1;
              const isPassed = index < currentTaxStep;
              const isCurrent = currentTaxStep === stepNumber;

              return (
                <div
                  key={title}
                  className="relative z-10 flex min-h-[84px] w-full select-none flex-row items-start gap-5 mb-12 last:mb-0"
                >
                  <span
                    className={`z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-sm font-black transition-all duration-300 ${
                      isPassed
                        ? "scale-105 border-cyan-500 bg-cyan-50 text-cyan-600 shadow-md"
                        : "border-slate-300 bg-white text-slate-400"
                    } ${isCurrent ? "ring-4 ring-cyan-100/70" : ""}`}
                  >
                    {stepNumber}
                  </span>

                  <div className="pt-0.5">
                    <h3
                      className={`font-black transition-colors duration-300 ${
                        isCurrent
                          ? "text-cyan-500"
                          : isPassed
                            ? "text-slate-950"
                            : "text-slate-400"
                      }`}
                    >
                      {title}
                    </h3>
                    <p
                      className={`mt-2 max-w-md text-sm leading-7 transition-all duration-300 ${
                        isCurrent
                          ? "text-slate-700 opacity-100"
                          : isPassed
                            ? "text-slate-600 opacity-90"
                            : "text-slate-400/80 opacity-70"
                      }`}
                    >
                      {text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute inset-0 rounded-full border border-cyan-100" />
          <PhoneMockup small />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16 md:px-12 lg:grid-cols-2 lg:px-20">
        <TaxDashboard />

        <div>
          <h2 className="text-4xl font-black leading-tight">
            Why Small Business
            <br />
            Owners Love Incorp Bay Tax
          </h2>
          <div className="mt-8 space-y-6">
            {[
              ["Time-Saving", "Spend less time worrying about taxes and more time growing your business."],
              ["Expert Guidance", "Get the advice and insights you need to make confident financial decisions."],
              ["Peace of Mind", "Stay compliant and organized with our professional tools and team by your side."],
            ].map(([title, text], index) => (
              <div key={title} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500 text-sm font-black text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-black">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-12">
        <div className="relative grid grid-cols-1 items-center gap-10 overflow-hidden rounded-3xl border border-cyan-100 bg-gradient-to-br from-cyan-50 to-white px-8 py-12 shadow-sm md:grid-cols-2 md:px-12">
          <div>
            <h2 className="text-4xl font-black leading-tight">
              Schedule a <span className="text-cyan-500">Free</span>
              <br />
              Tax Consultation
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
              Log in to your Dashboard and speak with a tax expert to get all your questions answered.
            </p>
            <Link
              href="#"
              className="mt-8 inline-flex w-full max-w-sm items-center justify-between rounded-xl bg-cyan-500 px-6 py-4 text-sm font-black text-white shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-600"
            >
              Log In To Your Dashboard <ArrowRight />
            </Link>
          </div>

          <div className="relative mx-auto w-full max-w-md rounded-3xl bg-white p-6 shadow-xl">
            <div className="mb-5 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-cyan-100" />
              <div>
                <p className="text-sm font-black">Tony Smith</p>
                <p className="text-xs text-slate-400">Tax Expert</p>
              </div>
              <div className="ml-auto flex gap-2">
                <span className="h-8 w-8 rounded-full bg-cyan-50" />
                <span className="h-8 w-8 rounded-full bg-cyan-50" />
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2 text-center text-sm text-slate-400">
              {Array.from({ length: 35 }).map((_, i) => (
                <span key={i} className={`rounded-lg py-2 ${i === 16 ? "bg-cyan-500 font-black text-white" : "bg-slate-50"}`}>
                  {(i % 31) + 1}
                </span>
              ))}
            </div>

            <div className="absolute -right-5 bottom-16 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500 text-white shadow-lg shadow-cyan-500/30">
              <ArrowRight />
            </div>
          </div>
        </div>
      </section>
      </main>
    </NavigationWrapper>
  );
}
