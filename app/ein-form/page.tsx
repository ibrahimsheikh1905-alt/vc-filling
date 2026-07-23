"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import NavigationWrapper from "@/components/NavigationWrapper";

const LOGO_GRADIENT =
  "linear-gradient(90deg,#244EB6 0%,#2B93C9 50%,#33D1CC 100%)";

const gradientText = {
  backgroundImage: LOGO_GRADIENT,
  WebkitBackgroundClip: "text" as const,
  backgroundClip: "text" as const,
  WebkitTextFillColor: "transparent",
  color: "transparent",
};

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#2B93C9" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const ChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 6l6 6-6 6" />
  </svg>
);

const PrimaryButton = ({ children }: { children: React.ReactNode }) => (
  <button
    className="group relative overflow-hidden rounded-full px-7 py-3.5 text-sm font-bold tracking-wide text-white shadow-sm transition-all duration-300 hover:shadow-md"
    style={{ background: LOGO_GRADIENT }}
  >
    <span className="absolute inset-x-0 top-0 h-1/2 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
    <span className="absolute -left-20 top-0 h-full w-12 -skew-x-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />
    <span className="relative z-10">{children}</span>
  </button>
);

const PhoneMockupEIN = () => (
  <Image
    src="/ein/ein-hero-phone.webp"
    alt="EIN application dashboard showing approved status"
    width={1193}
    height={1319}
    className="block w-[280px] rounded-2xl shadow-xl md:w-[360px]"
    priority
  />
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
        <div className="overflow-hidden rounded-xl bg-slate-50 p-4">
          <Image
            src="/ein/ss4-form-paper.webp"
            alt="Form SS-4 application for Employer Identification Number"
            width={1254}
            height={1254}
            className="block aspect-square w-full rounded-2xl object-cover"
          />
        </div>
      ),
    },
    {
      title: "Fill Out the SS4 Form Using Our",
      accent: "Quick Application",
      body: (
        <div className="overflow-hidden rounded-xl bg-slate-50 p-4">
          <Image
            src="/ein/ss4-online-progress.webp"
            alt="SS-4 application progress in our online platform"
            width={1254}
            height={1254}
            className="block aspect-square w-full rounded-2xl object-cover"
          />
        </div>
      ),
    },
    {
      title: "Receive an EIN Number for",
      accent: "Your Business",
      body: (
        <div className="overflow-hidden rounded-xl bg-slate-50 p-4">
          <Image
            src="/ein/ein-confirmed-phone.webp"
            alt="Phone showing a confirmed EIN number"
            width={1136}
            height={1385}
            className="block aspect-square w-full rounded-2xl object-cover"
          />
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
<main className="min-h-screen bg-white text-[#1E293B]">
      <section className="mx-auto flex max-w-7xl flex-wrap items-center gap-14 px-8 py-16">
        <div className="flex-1 basis-[400px]">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 px-3.5 py-1.5 text-[13px] font-normal">
            Excellent 4.7 out of 5 <StarIcon /> Trustpilot
          </div>
          <h1 className="mb-5 max-w-2xl text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
Get Your EIN Fast with Incorp Bay: Simple, Quick, and Hassle-Free
          </h1>
          <p className="mb-8 max-w-lg text-base leading-7 text-slate-600">
Secure your business&apos;s Tax ID. Let Incorp Bay handle the paperwork so you can focus on what matters most.
          </p>
          <PrimaryButton>ORDER NOW</PrimaryButton>
        </div>

        <div className="shrink-0">
          <div className="flex min-h-[420px] items-center justify-center p-6">
            <PhoneMockupEIN />
          </div>
        </div>
      </section>

      <div className="border-y border-slate-200 px-8 py-4 text-center text-sm text-slate-700 md:text-[15px]">
        <span className="text-slate-500">●</span>&nbsp; Bootstrapped, Founder Led, Independently Owned &nbsp;
        <span className="rounded-md bg-slate-50 px-2.5 py-0.5 font-bold" style={gradientText}>Since 2004</span>
        &nbsp; With &nbsp;
        <span className="rounded-md bg-slate-50 px-2.5 py-0.5 font-bold" style={gradientText}>Over 1,000,000 Entrepreneurs</span>
        &nbsp; Served! &nbsp;<span className="text-slate-500">●</span>
      </div>

      <section className="mx-auto my-12 max-w-7xl px-8">
        <div className="flex flex-wrap items-center gap-12 rounded-[20px] border border-slate-200 bg-gradient-to-br from-white via-white to-[#2B93C9]/5 p-8 md:p-12">
          <div className="flex-1 basis-[300px]">
Incorp Bay&apos;s<br />Startup Central
            <p className="mb-6 max-w-lg text-[15px] leading-7 text-slate-500">
              The media center. Guts, grit, and a game plan for launching your business.
            </p>
<PrimaryButton>VISIT INCORP BAY&apos;S STARTUP CENTRAL</PrimaryButton>
          </div>
          <div className="flex flex-1 basis-[240px] justify-end">
            <div className="max-w-[260px] rounded-2xl bg-[#2B93C9]/5 p-6">
              <div className="mb-2.5 text-[11px] font-bold uppercase tracking-widest text-slate-400">How To</div>
              <Image
                src="/ein/build-your-business-guide.webp"
                alt="Guide: Build Your Business"
                width={1410}
                height={1116}
                className="mb-3 block h-[100px] w-full rounded-2xl object-cover"
              />
              <div className="mb-1 text-sm font-bold">BUSINESS IDEAS</div>
              <p className="text-xs text-slate-500">Understanding Data Privacy Laws and How They Impact Small Businesses</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16 bg-slate-50 px-8 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-center text-4xl font-bold">How to Get a Tax ID Number</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-base leading-7 text-slate-500">
Get your EIN (Tax ID) fast with Incorp Bay — easy, convenient, and delivered electronically within one business day.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {taxSteps.map((step) => (
              <div key={step.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 text-base font-bold">
                  {step.title} <span style={gradientText}>{step.accent}</span>
                </div>
                {step.body}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mb-12 max-w-7xl px-8">
        <div className="flex items-center gap-3.5 rounded-2xl border border-slate-200 p-4 md:px-5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2B93C9]/10 text-[#2B93C9]">✓</span>
          <span className="text-sm font-normal text-slate-700">
let <strong className="font-bold" style={gradientText}>Incorp Bay</strong>
          </span>
        </div>
      </section>

      <section className="mx-auto mb-20 max-w-7xl px-6 md:px-16">
        <h2 className="mx-auto mb-14 max-w-4xl text-center text-4xl font-bold leading-tight tracking-tight text-[#1E293B] md:text-5xl">
          Do You Need a Federal EIN for Your Business Entity?
        </h2>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="relative w-full flex flex-col py-2">
            <div
              className="absolute w-1 rounded-full bg-slate-100 z-0"
              style={{
                left: "24px",
                top: "24px",
                height: `${(needEinItems.length - 1) * 168}px`,
              }}
            >
              <div
                className="w-full rounded-full origin-top"
                style={{
                  background: "linear-gradient(180deg,#244EB6 0%,#2B93C9 50%,#33D1CC 100%)",
                  height: `${Math.min(progress * 100, 100) / 100 * (needEinItems.length - 1) * 168}px`,
                }}
              />
            </div>

            {needEinItems.map((item, index) => {
              const stepSize = 1 / needEinItems.length;
              const isPassed = progress >= index * stepSize;
              const isCurrent = currentNeedStep === index + 1;

              return (
                <div
                  key={item.title}
                  className={`relative flex min-h-[120px] w-full select-none items-start z-10 ${
                    index === needEinItems.length - 1 ? "mb-0" : "mb-12"
                  }`}
                >
                  <div
                    className={`absolute left-0 top-0 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 text-xl transition-all duration-300 ${
                      isPassed
                        ? "scale-105 border-[#2B93C9] bg-slate-50 text-[#2B93C9] shadow-md"
                        : "border-slate-300 bg-white text-slate-400"
                    } ${isCurrent ? "ring-4 ring-[#33D1CC]/20" : ""}`}
                  >
                    {item.icon}
                  </div>

                  <div className="w-full pl-16 text-left">
                    <p className="text-xs font-bold uppercase tracking-wider" style={gradientText}>
                      Step {index + 1}
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-[#1E293B] md:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm font-normal leading-relaxed text-slate-600 md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/ein/ein-approved-phone.webp"
              alt="Business entity EIN status check"
              width={1098}
              height={1433}
              className="block w-full max-w-[320px] rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto mb-16 flex max-w-7xl flex-wrap items-center gap-14 px-8">
        <div className="flex w-[320px] shrink-0 flex-col gap-5 rounded-3xl bg-slate-900 p-3 shadow-xl">
          <Image
            src="/ein/ein-account-documents.webp"
            alt="Account overview and documents dashboard"
            width={1330}
            height={1183}
            className="block w-full rounded-2xl"
          />
        </div>

        <div className="flex-1 basis-[380px]">
          <h2 className="mb-7 text-4xl font-bold">Using an EIN</h2>
          {usingEin.map((item, index) => (
            <div key={item.title} className="mb-5 flex gap-3.5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white" style={{ background: LOGO_GRADIENT }}>{index + 1}</span>
              <div>
                <div className="mb-1 text-base font-bold">{item.title}</div>
                <p className="text-sm font-normal leading-6 text-slate-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-wrap gap-12 px-8">
        <aside className="basis-[260px]">
          <div className="sticky top-24 rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
            <div className="mb-4 text-base font-bold text-[#1E293B]">Table of Contents</div>
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
                          ? "border border-slate-200 bg-white font-bold shadow-sm bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent"
                          : "font-normal text-slate-400 hover:text-slate-600"
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
          <h2 className="mb-5 text-3xl font-bold">Do I Need an EIN for my LLC? (Plus Other Important FAQs)</h2>
          <p className="mb-5 text-[15px] leading-7 text-slate-700">You&apos;ve done all the legwork to form your business, but you&apos;re still left wondering, &quot;Do I need an Employer Identification Number (EIN) for my LLC?&quot; The short answer is that you might. An EIN is a nine-digit federal tax identification number used by the Internal Revenue Service (IRS) to identify business entities.</p>
          <p className="mb-10 text-[15px] leading-7 text-slate-700">In this guide, you&apos;ll learn whether or not your LLC needs an EIN and why it would be beneficial to secure one, even if it&apos;s not mandated. Got questions? This guide covers all the FAQs so you don&apos;t miss a thing.</p>
          </div>

          <div ref={createSectionRef(1)} className="scroll-mt-28">
          <h2 className="mb-4 text-3xl font-bold">What Is an EIN? Is It the Same as an LLC?</h2>
          <p className="mb-4 text-[15px] leading-7 text-slate-700">An EIN is not the same as an LLC (Limited Liability Company).</p>
          <p className="mb-4 text-[15px] leading-7 text-slate-700">An EIN, also known as a federal identification number or business tax ID, is a tax identity. The IRS assigns EINs to distinguish unique business entities, including sole proprietors, LLCs, corporations, partnerships, and nonprofit organizations.</p>
          <p className="mb-4 text-[15px] leading-7 text-slate-700"><span className="font-bold" style={gradientText}>What is an LLC?</span> An LLC is a type of legal business entity created by state statutes. It&apos;s the fastest and easiest legal structure for your business to adopt. An LLC provides legal coverage of assets and liabilities as well as pass-through taxation.</p>
          <p className="mb-10 text-[15px] leading-7 text-slate-700">The IRS doesn&apos;t require most sole proprietorships or single-member LLCs to have EINs. However, there may be some scenarios where your LLC is obligated to secure an EIN, so let&apos;s dig deeper.</p>
          </div>

          <div ref={createSectionRef(2)} className="scroll-mt-28">
          <h2 className="mb-4 text-3xl font-bold">If I Have an LLC, Do I Need an EIN?</h2>
          <p className="mb-3.5 text-[15px] leading-7 text-slate-700">If you have an LLC, you might need an EIN. Your LLC will require an EIN if any of the following scenarios apply:</p>
          <ul className="mb-5 list-disc space-y-1.5 pl-5">
            {needList.map((item) => <li key={item} className="text-sm font-normal leading-6 text-slate-700">{item}</li>)}
          </ul>
          <p className="mb-10 text-[15px] leading-7 text-slate-700">For more detailed information, visit the IRS website, or hire a tax or startup business consultant to guide you. Now, let&apos;s take a look at the benefits of having an EIN.</p>
          </div>

          <div ref={createSectionRef(3)} className="scroll-mt-28">
          <h2 className="mb-4 text-3xl font-bold">Benefits of Having an EIN</h2>
          <p className="mb-4 text-[15px] leading-7 text-slate-700">There are several business-related benefits of having an EIN for your LLC. Let&apos;s say you&apos;re running a new LLC and have no intention of hiring employees or setting up a retirement plan; therefore, you don&apos;t need an EIN. But should you get one? The answer is a resounding yes. An EIN does much more than just serve as a business tax identifier.</p>
          <p className="mb-3.5 text-[15px] leading-7 text-slate-700">Even if obtaining an EIN is not mandated for you by the IRS, there are many benefits of getting an EIN for your LLC:</p>
          <Image
            src="/ein/ein-benefits-list.webp"
            alt="Key EIN benefits: security, tax savings, business credit, reputation"
            width={1617}
            height={973}
            className="mx-auto mb-6 block w-full max-w-2xl rounded-2xl"
          />
          <ul className="mb-5 list-disc space-y-1.5 pl-5">
            {benefits.map((item) => <li key={item} className="text-sm font-normal leading-6 text-slate-700">{item}</li>)}
          </ul>
          <p className="mb-10 text-[15px] leading-7 text-slate-700">To minimize business costs and save time, we suggest getting an EIN sooner rather than later.</p>
          </div>

          <div ref={createSectionRef(4)} className="scroll-mt-28">
          <h2 className="mb-4 text-3xl font-bold">Is an EIN the Same as an SSN for an LLC?</h2>
          <Image
            src="/ein/ein-vs-ssn.webp"
            alt="Use an EIN instead of an SSN for your business taxes"
            width={1254}
            height={1254}
            className="mx-auto mb-5 block w-full max-w-2xl rounded-2xl"
          />
          <p className="mb-4 text-[15px] leading-7 text-slate-700">The main difference between a Social Security number (SSN) and an EIN is that an SSN is for individuals, while an EIN is for businesses. The IRS tracks your business&apos;s filings using an EIN. Many small business owners find it helpful to think of an EIN as an SSN for their business.</p>

          <h3 className="mb-3.5 text-2xl font-bold">Should I Use an SSN or an EIN for Taxes?</h3>
          <p className="mb-4 text-[15px] leading-7 text-slate-700">If you do not have staff, a self-retirement plan, or excise tax payments, and you are a sole proprietor or single-member LLC, your SSN can be used for tax filing.</p>
          <p className="mb-2.5 text-[15px] leading-7 text-slate-700">However, there are some compelling reasons for filing taxes using an EIN as opposed to an SSN. An EIN will do the following:</p>
          <ul className="mb-10 list-disc space-y-1.5 pl-5">
            {["Provide more privacy and security as your SSN number won't be on public documents", "Enable you to file business taxes separately and establish a business history", "Give you the flexibility to hire employees and secure funding without any delay"].map((item) => <li key={item} className="text-sm font-normal leading-6 text-slate-700">{item}</li>)}
          </ul>
          </div>

          <div ref={createSectionRef(5)} className="scroll-mt-28">
          <h2 className="mb-4 text-3xl font-bold">What Do I Need to Get an EIN for My LLC?</h2>
          <p className="mb-4 text-[15px] leading-7 text-slate-700">In order to obtain a new EIN, an SS-4 application form is required. To complete this application without any issues, you must have the following information available:</p>
          <ol className="mb-10 list-decimal space-y-2.5 pl-5">
            {einRequirements.map((item) => <li key={item.b} className="text-sm font-normal leading-6 text-slate-700"><strong className="font-bold">{item.b}:</strong> <span className="font-normal">{item.t}</span></li>)}
          </ol>
          </div>

          <div ref={createSectionRef(6)} className="scroll-mt-28">
          <h2 className="mb-4 text-3xl font-bold">How to Apply for an EIN</h2>
          <Image
            src="/ein/ein-apply-methods-guide.webp"
            alt="Guide comparing applying online versus applying by mail for an EIN"
            width={1254}
            height={1254}
            className="mx-auto mb-5 block w-full max-w-2xl rounded-2xl"
          />
through Incorp Bay's EIN filing service.
          <p className="mb-7 text-[15px] leading-7 text-slate-700">To file directly with the IRS, complete the <span className="font-bold" style={gradientText}>online application form</span> between Monday and Friday, 7 a.m. to 10 p.m. EST. The IRS issues the EIN upon submission and verification of the form — this usually just takes a few minutes. However, the online application is only available for LLCs with a domestic, U.S.-based address.</p>

          <p className="mb-4 text-[15px] leading-7 text-slate-700">To apply by fax, complete the SS-4 form and fax it to 855-641-6935. The fax line is open all seven days of the week, 24/7. Faxed EIN requests have a turnaround time of four business days.</p>
          <p className="mb-2 text-[15px] leading-7 text-slate-700">Domestic LLCs can mail the hard copy of form SS-4 to the following address:</p>
          <p className="mb-4 text-[15px] leading-7 text-slate-700">Internal Revenue Service Attn: EIN Operation Cincinnati, OH 45999</p>
          <p className="mb-4 text-[15px] leading-7 text-slate-700">The processing time for mailed applications ranges between four to five weeks.</p>
          <p className="mb-10 text-[15px] leading-7 text-slate-700">LLC owners with international addresses and no legal U.S. address or a responsible party that can file on their behalf need to call 267-941-1099 between 6 a.m. and 11 p.m. EST, Monday through Friday, to get their EIN.</p>
          </div>

          <div ref={createSectionRef(7)} className="scroll-mt-28">
          <h2 className="mb-4 text-3xl font-bold">What to Do After Getting an EIN</h2>
          <p className="mb-5 text-[15px] leading-7 text-slate-700">Your EIN is active and ready as soon as you receive it from the IRS. Use it to open a dedicated <span className="font-bold" style={gradientText}>business bank account</span>, secure funding, or hire employees.</p>
          <Image
            src="/ein/ein-approved-phone.webp"
            alt="Phone showing an approved EIN application"
            width={1098}
            height={1433}
            className="mx-auto mb-10 block w-full max-w-xs rounded-2xl shadow-md"
          />
          </div>

          <div ref={createSectionRef(8)} className="scroll-mt-28">
          <h2 className="mb-4 text-3xl font-bold">Will I Ever Need to Change My EIN?</h2>
          <p className="mb-4 text-[15px] leading-7 text-slate-700">Yes, there might be cases where you&apos;ll need to change your EIN. If you&apos;re changing ownership or the type of business structure you operate, you will need to apply for a new EIN.</p>
          <p className="mb-2.5 text-[15px] leading-7 text-slate-700">Here are a few scenarios that require changing your EIN:</p>
          <ul className="mb-5 list-disc space-y-1.5 pl-5">
            {["You already got an EIN as a sole proprietor and now you are incorporating.", "You are currently registered as a single-member LLC and wish to restructure to a multi-member LLC or corporation.", "You have an LLC EIN and elect to file LLC taxes as an S Corp.", "You add new partners to an existing LLC."].map((item) => <li key={item} className="text-sm leading-6 text-slate-700">{item}</li>)}
          </ul>
          <p className="mb-10 text-[15px] leading-7 text-slate-700">Changing your business name or location does not require changing your EIN. A business formation service can help you understand whether or not your LLC needs a change of EIN.</p>
          </div>

          <div ref={createSectionRef(9)} className="scroll-mt-28">
          <h2 className="mb-6 text-3xl font-bold">Frequently Asked Questions</h2>
          <h3 className="mb-2.5 text-xl font-bold">Does EIN Mean You Own a Business?</h3>
          <p className="mb-4 text-[15px] leading-7 text-slate-700">Yes, having an EIN means you own a business, as it&apos;s administered by the IRS to identify business entities for tax purposes. But keep in mind that acquiring an EIN as a sole proprietor does not make your business a legitimate business entity. To form a legal business entity that provides liability and assets protection, like an LLC or corporation, you must register with your state.</p>

          <h3 className="mb-2.5 text-xl font-bold">How Do I Find My EIN?</h3>
          <p className="mb-4 text-[15px] leading-7 text-slate-700">However, you can look up your LLC&apos;s EIN on previous tax forms, bank statements, or your original confirmation notice. If none of these are handy, call the IRS Business and Specialty Tax Line at 1-800-829-4933.</p>
<p className="mb-10 text-[15px] leading-7 text-slate-700">When you incorporate with Incorp Bay, you can easily access your EIN and crucial business documents via your online dashboard.</p>

          <h3 className="mb-2.5 text-xl font-bold">Can I Close or Cancel My EIN?</h3>
          <p className="mb-10 text-[15px] leading-7 text-slate-700">Once assigned, the IRS doesn&apos;t cancel EINs. However, you can write to the IRS and ask them to close the EIN account if you deem it unnecessary. You need to provide the legal entity name, address, and reason for closing the account.</p>
          </div>

          <div ref={createSectionRef(10)} className="scroll-mt-28">
<h2 className="mb-4 text-3xl font-bold">Establish Your Business With an EIN</h2>
          <p className="mb-7 text-[15px] leading-7 text-slate-700">Obtaining an EIN is an excellent way to establish and grow your business. To obtain an EIN, you must form a legal business entity, which guarantees the safety of your business and its assets. Incorp Bay offers a standalone EIN service, or our Standard and Premium Packages include this service for free. Join over 1 million thriving business owners who use Incorp Bay as their go-to source.</p>
          <PrimaryButton>GET IN TOUCH TODAY</PrimaryButton>
          </div>
        </article>
      </section>

      <section className="px-6 py-8 md:px-16 md:py-10">
        <div
          className="relative mx-auto max-w-4xl overflow-hidden rounded-[32px] border border-white/10 px-8 py-8 text-center shadow-2xl sm:px-10"
          style={{ background: LOGO_GRADIENT }}
        >
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#2B93C9]/20 to-transparent" />
          <div className="pointer-events-none absolute right-1/4 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#33D1CC]/30 blur-[80px]" />

          <div className="relative grid grid-cols-1 items-center gap-1 p-2 md:grid-cols-[1.4fr_0.6fr] md:p-3">
            <div className="relative z-10 flex w-full flex-col items-start space-y-3 text-left">
              <span className="rounded-full border border-white/15 bg-white/12 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                EIN Tax ID Number
              </span>

              <h2 className="text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl">
                Obtain An EIN / <br /> Tax ID Number
              </h2>

              <p className="max-w-sm text-xs leading-relaxed text-white/80 md:text-sm">
                Save your time. We&apos;ll handle the paperwork. Only $70.
              </p>

              <button className="group relative overflow-hidden rounded-xl bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">
                <span className="absolute inset-0 bg-[#2B93C9]/0 transition-colors duration-300 group-hover:bg-[#2B93C9]/5" />
                <span className="absolute -left-16 top-0 h-full w-10 -skew-x-12 bg-[#2B93C9]/10 blur-sm transition-all duration-700 group-hover:left-[120%]" />
                <span className="relative z-10 flex items-center gap-2 text-black">
                  ORDER NOW
                  <svg className="h-4 w-4 stroke-black transition-transform duration-300 group-hover:translate-x-1" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </button>

              <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] font-medium text-white/85">
                <span className="rounded-full border border-white/15 bg-white/12 px-3 py-1">✓ No Hidden Fees</span>
                <span className="rounded-full border border-white/15 bg-white/12 px-3 py-1">✓ Fast Processing</span>
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

            <div className="relative z-10 flex w-full select-none items-center justify-center md:justify-end">
              <div className="relative h-[280px] w-[220px] md:h-[320px] md:w-[250px]">
                <Image
                  src="/ein/ein-issued-phone.webp"
                  alt="Phone showing an issued EIN number"
                  fill
                  className="rounded-2xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
</main>
    </NavigationWrapper>
  );
}
