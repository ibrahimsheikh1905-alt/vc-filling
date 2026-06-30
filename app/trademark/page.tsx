"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import NavigationWrapper from "@/components/NavigationWrapper";
import { CheckCircle, ChevronRight, Shield, Star } from "lucide-react";

const CYAN = "#06B6D4";

const tocItems = [
  { id: 0, short: "Here's What Can and Cannot Be Trademarked" },
  { id: 1, short: "What Is a Trademark?" },
  { id: 2, short: "What Can Be Trademarked?" },
  { id: 3, short: "What Things Can You Not Trademark?" },
  { id: 4, short: "What If You Want to Use Someone's Trademark?" },
  { id: 5, short: "Should You File a Trademark?" },
{ id: 6, short: "Ready to Protect Your Incorp Bay with a Trademark?" },
];

const trademarkTypes = [
  "Slogan/Tagline",
  "Business Logo",
  "Business Name",
  "Product Name",
];

function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-16 md:py-20">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
          <span>Excellent 4.7 out of 5</span>
          <Star className="h-4 w-4 fill-[#00B67A] text-[#00B67A]" />
          <span className="font-bold text-[#00B67A]">Trustpilot</span>
        </div>

        <h1 className="mt-6 text-5xl font-black leading-[1.08] tracking-tight text-[#0f0f1a] md:text-6xl">
          Register a<br />
          Trademark
        </h1>

        <p className="mt-5 max-w-md text-base leading-relaxed text-slate-500">
          Protect your brand with expert legal support and hassle-free trademark
          registration.
        </p>

        <Link
          href="/trademark/step-1"
          className="mt-8 inline-flex rounded-full bg-[#06B6D4] px-10 py-4 text-sm font-black uppercase tracking-wider text-white shadow-lg shadow-[#06B6D4]/30 transition hover:bg-[#0891b2]"
        >
          Get Started
        </Link>
      </div>

      <div className="flex justify-center md:justify-end">
        <div className="relative">
          <div className="absolute inset-0 -z-10 scale-110 rounded-[3rem] bg-slate-100/80" />
          <div className="relative w-[285px] rounded-[2.6rem] border-[10px] border-[#1a1a1a] bg-white shadow-2xl">
            <div className="absolute left-1/2 top-2 h-3 w-20 -translate-x-1/2 rounded-full bg-[#1a1a1a]" />
            <div className="flex items-center justify-between px-5 pt-8 text-[10px] font-semibold text-[#1a1a1a]">
              <span>9:41</span>
              <span>WiFi</span>
            </div>
            <div className="px-5 pb-8 pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#1a1a1a]">
                    Jonathan Davis
                  </p>
                  <p className="text-[10px] text-slate-400">ACME Design LLC</p>
                </div>
                <div className="rounded-full bg-cyan-100 px-3 py-1 text-[10px] font-bold text-[#06B6D4]">
                  Active
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-gradient-to-br from-[#06B6D4] to-[#0891b2] p-5 text-white shadow-lg shadow-[#06B6D4]/30">
                <p className="text-xs font-semibold opacity-90">
                  ✓ Registration Status
                </p>
                <p className="mt-2 text-2xl font-black leading-tight">
                  13 Trademarks Covered
                </p>
                <p className="mt-1 text-xs opacity-90">
                  Your Brand is Under Protection
                </p>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-[#1a1a1a]">
                    Protected Trademarks
                  </p>
                  <div className="h-5 w-10 rounded-full bg-[#06B6D4] p-0.5">
                    <div className="ml-auto h-4 w-4 rounded-full bg-white" />
                  </div>
                </div>

                {["Business Name", "Slogan/Tagline"].map((item) => (
                  <div key={item} className="mt-4 flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-cyan-200" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-[#1a1a1a]">{item}</p>
                      <div className="mt-1 h-2 w-4/5 rounded bg-slate-100" />
                    </div>
                    <CheckCircle className="h-5 w-5 text-[#06B6D4]" />
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

function TrustBar() {
  return (
    <div className="border-y border-slate-100 bg-[#F8FAFC] px-6 py-5 text-center text-sm font-semibold text-slate-600 md:text-base">
      Bootstrapped, Founder Led, Independently Owned{" "}
      <span className="font-extrabold text-[#06B6D4]">Since 2004</span> With{" "}
      <span className="font-extrabold text-[#06B6D4]">
        Over 1,000,000 Entrepreneurs
      </span>{" "}
      Served!
    </div>
  );
}

function ProtectSection() {
  const cards = [
    {
      title: "Protecting Your Trademark Can Really Pay Dividends",
      text: "A registered trademark helps protect your business name, logo, tagline, and reputation.",
    },
    {
      title: "Our Partnered Attorneys Review Your Mark",
      text: "An attorney can help check whether the mark is already taken before filing.",
    },
    {
      title: "Protect Your Important Brand Elements",
      text: "Business names, logos, slogans, and product names can become valuable company assets.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] px-6 py-20 md:px-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-black text-[#0f0f1a] md:text-5xl">
          Protect Your Business Name With a{" "}
          <span className="text-[#06B6D4]">Trademark</span>
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-center leading-relaxed text-slate-500">
          Protecting your trademark can really pay dividends. It is your brand,
          your reputation, and a business asset that customers recognize.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="rounded-3xl bg-white p-7 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-[#06B6D4]">
                {index === 0 ? (
                  <Shield className="h-7 w-7" />
                ) : (
                  <CheckCircle className="h-7 w-7" />
                )}
              </div>
              <h3 className="text-xl font-black leading-snug text-[#0f0f1a]">
                {card.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-500">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PackageSection() {
  const items = [
    {
      n: 1,
      title: "Expert Legal Guidance",
      desc: "Receive professional counsel from an experienced trademark attorney.",
    },
    {
      n: 2,
      title: "Comprehensive Trademark Search",
      desc: "Thoroughly check existing trademarks to avoid conflicts.",
    },
    {
      n: 3,
      title: "USPTO Registration",
      desc: "Secure your trademark registration with the USPTO.",
    },
    {
      n: 4,
      title: "Complete USPTO Management",
      desc: "We handle correspondence until your trademark is approved.",
    },
  ];

  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-16">
      <div className="rounded-[2rem] bg-[#111827] p-6 shadow-2xl">
        <div className="rounded-3xl bg-white p-6">
          <p className="text-lg font-black text-[#0f0f1a]">
            Trademark Services
          </p>
          <p className="mt-1 text-sm text-slate-400">Enhance brand security</p>

          {["Business Name", "Business Logo"].map((item, index) => (
            <div
              key={item}
              className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#06B6D4] text-[#06B6D4]">
                  ✓
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0f0f1a]">{item}</p>
                  <p className="text-xs text-slate-400">
                    {index === 0 ? "Name Protected" : "Protection Granted"}
                  </p>
                </div>
              </div>
              <p className="text-xs font-semibold text-slate-500">2024</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-4xl font-black leading-tight text-[#0f0f1a] md:text-5xl">
          What's Included in the Package?
        </h2>
        <div className="mt-10 space-y-6">
          {items.map((item) => (
            <div key={item.n} className="flex gap-5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#06B6D4] text-base font-black text-white shadow shadow-[#06B6D4]/30">
                {item.n}
              </div>
              <div>
                <p className="font-bold text-[#0f0f1a]">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-500">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const [progress, setProgress] = useState(0);

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

  const steps = [
    {
      icon: "👤",
      title: "Tell us what you need",
      desc: "A trademark attorney will follow up and understand your trademark needs.",
    },
    {
      icon: "⚙️",
      title: "We get to work",
      desc: "The attorney conducts a trademark search and provides a clear plan of action.",
    },
    {
      icon: "📋",
      title: "We file your trademark",
      desc: "The attorney files with the USPTO and helps manage the registration process.",
    },
  ];

  const currentActiveStep = Math.min(
    Math.floor(progress * steps.length) + 1,
    steps.length,
  );

  return (
    <section className="bg-white px-6 py-20 md:px-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-black leading-tight text-[#0f0f1a] md:text-5xl">
          Trademark Searches & Registration:
          <br />
          How it Works
        </h2>

        <div className="mt-16 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="relative w-full py-6">
            <div className="absolute left-6 top-12 bottom-[84px] z-0 w-1 -translate-x-1/2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="w-full rounded-full bg-[#06B6D4] transition-[height] duration-100 ease-linear"
                style={{ height: `${progress * 100}%` }}
              />
            </div>

            {steps.map((step, index) => {
              const stepSize = 1 / steps.length;
              const isPassed = progress >= index * stepSize;
              const isCurrent = currentActiveStep === index + 1;

              return (
                <div
                  key={step.title}
                  className={`relative z-10 flex min-h-[120px] w-full select-none flex-row items-start ${
                    index === steps.length - 1 ? "mb-0" : "mb-12"
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 text-xl transition-all duration-300 ${
                      isPassed
                        ? "scale-105 border-[#06B6D4] bg-cyan-50 text-[#06B6D4] shadow-md"
                        : "border-slate-300 bg-white text-slate-400"
                    } ${isCurrent ? "ring-4 ring-cyan-100/70" : ""}`}
                  >
                    {step.icon}
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
                      {step.title}
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
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-64">
              <div className="rounded-[2.5rem] border-[10px] border-[#1a1a1a] bg-white shadow-2xl">
                <div className="absolute left-1/2 top-3 h-3 w-16 -translate-x-1/2 rounded-full bg-[#1a1a1a]" />

                <div className="px-5 pb-8 pt-10">
                  <div className="flex items-center justify-between">
                    <div className="h-8 w-8 rounded-full bg-[#06B6D4]" />
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <span key={i} className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                      ))}
                    </div>
                  </div>

                  <p className="mt-5 text-base font-black text-[#0f0f1a]">
                    Trademark Services
                  </p>

                  <div className="mt-4 flex gap-2">
                    {["Timeline", "Insights", "Updates"].map((tab, index) => (
                      <span
                        key={tab}
                        className={`rounded-lg px-2.5 py-1 text-[10px] font-bold ${
                          index === 0
                            ? "bg-[#0f0f1a] text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {tab}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      "Application Submitted",
                      "Application Reviewed",
                      "Examination Completed",
                      "Trademark Registered",
                    ].map((item, index) => {
                      const stepPoint = index / 4;
                      const isActive = progress >= stepPoint;
                      return (
                        <div key={item} className="flex items-center gap-3">
                          <span
                            className={`h-3.5 w-3.5 rounded-full border transition-all duration-300 ${
                              isActive
                                ? "border-[#06B6D4] bg-[#06B6D4] shadow-sm shadow-[#06B6D4]/40"
                                : "border-slate-300 bg-white"
                            }`}
                          />
                          <div className="min-w-0 flex-1">
                            <p
                              className={`text-[10px] font-bold transition-colors duration-300 ${
                                isActive ? "text-[#0f0f1a]" : "text-slate-400"
                              }`}
                            >
                              {item}
                            </p>
                            <div className="mt-1 h-1.5 w-full rounded bg-slate-100" />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <Link
                    href="/trademark/step-1"
                    className="mt-6 flex w-full justify-center rounded-full bg-[#06B6D4] py-3 text-xs font-black uppercase tracking-wider text-white shadow-md shadow-[#06B6D4]/25 transition hover:bg-[#0891b2]"
                  >
                    Start Filing
                  </Link>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -inset-6 rounded-full border border-[#06B6D4]/20" />
                <div className="absolute -inset-12 rounded-full border border-[#06B6D4]/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-slate-50 p-6">
      <div className="rounded-xl bg-white p-5 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#06B6D4]">
          {title}
        </p>
        <div className="mt-3 text-sm leading-relaxed text-slate-600">
          {children}
        </div>
      </div>
    </div>
  );
}

function ArticleSection() {
  const [activeItem, setActiveItem] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const createSectionRef = (index: number) => (el: HTMLDivElement | null) => {
    sectionRefs.current[index] = el;
  };

  const handleTocClick = (id: number) => {
    setActiveItem(id);
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex(
              (ref) => ref === entry.target,
            );
            if (index !== -1) setActiveItem(index);
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

  const canTrademark = [
    ["Brand names", "Apple, Microsoft and Ford"],
    [
      "Phrases/slogans",
      "McDonald's ‘I'm lovin' it,’ Capital One's ‘What's in your wallet?’ and Skittles' ‘Taste the rainbow’",
    ],
    [
      "Product names",
      "Kawasaki's ‘Jet Ski,’ Pfizer's ‘Listerine’ and 7-Eleven's ‘Slurpee’",
    ],
    [
      "Symbols/logos",
      "Nike's swoosh, Chanel's double C monogram and NBC's peacock",
    ],
    [
      "Colors",
      "Tiffany & Co's signature shade of blue, John Deere's green and yellow and Post-it's yellow hue",
    ],
    [
      "Shapes",
      "Toblerone's triangular chocolate bars, Hershey's Kisses and Weber's kettle-shaped grills",
    ],
    [
      "Sounds",
      "The roar of MGM's lion, NBC's chimes and Nokia's classic ringtones",
    ],
    [
      "Fictional characters",
      "Disney's Mickey Mouse, Planters' Mr. Peanut and Marvel's Captain America",
    ],
    [
      "Combinations",
      "Starbucks' green mermaid logo, Google's multi-colored logo and 20th Century Fox's orchestral fanfare",
    ],
  ];

  const cannotTrademark = [
    ["Generic words and phrases", "‘genuine,’ ‘craft store’ or ‘made in USA’"],
    [
      "Merely descriptive words and phrases",
      "‘delicious’ or ‘world's most delicious muffins’",
    ],
    [
      "Deceptively descriptive words and phrases",
      "‘real beef dog food’ for dog food that doesn't actually contain real beef",
    ],
    [
      "Primarily geographically descriptive words and phrases",
      "‘Maine lobster,’ ‘Florida oranges’ or ‘New York Pizza’",
    ],
    [
      "Primarily geographically deceptively descriptive words and phrases",
      "‘Wisconsin Signature Creamery’ for dairy products not produced in Wisconsin",
    ],
    ["Merely a surname", "‘Brown's Automotive’ or ‘Smith Antiques’"],
    ["Ornamentation", "‘live, laugh, love’ printed on a pillow"],
    [
      "Similarity to an existing trademark",
      "A phrase that could be confused with another company in the same field",
    ],
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-16">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[260px_1fr] md:items-start">
        <aside className="md:sticky md:top-24">
          <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
            <p className="mb-4 text-base font-black text-[#1a1a1a]">
              Table of Contents
            </p>
            <ul className="space-y-1">
              {tocItems.map((item) => {
                const isActive = activeItem === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => handleTocClick(item.id)}
                      className={`flex w-full items-start gap-2 rounded-xl px-3 py-3 text-left text-sm transition-all duration-150 ${
                        isActive
                          ? "border border-slate-200 bg-white font-bold text-[#06B6D4] shadow-sm"
                          : "text-slate-400 hover:text-slate-600"
                      }`}
                    >
                      <ChevronRight
                        className={`mt-0.5 h-4 w-4 flex-shrink-0 ${isActive ? "text-[#06B6D4]" : "text-slate-300"}`}
                      />
                      <span className="leading-snug">{item.short}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        <article className="min-w-0 space-y-16">
          <div ref={createSectionRef(0)} className="scroll-mt-28">
            <h2 className="text-4xl font-black leading-tight text-[#1a1a1a] md:text-5xl">
              Here's What Can and Cannot Be Trademarked
            </h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              There comes a point in every entrepreneur's journey when they
              start thinking about trademarks. Maybe it happens when they
              commission their first custom logo, or maybe it's when they switch
              from a slogan they're not crazy about to one they love.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              If you've reached that point in your small business adventure,
              then it's time to learn what can be trademarked so you can better
              protect your company's intellectual properties from infringement.
            </p>
          </div>

          <div ref={createSectionRef(1)} className="scroll-mt-28">
            <h2 className="text-3xl font-black text-[#1a1a1a] md:text-4xl">
              What Is a Trademark?
            </h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              If you run your own business, then you've probably heard of
              trademarks before, and you may have even contemplated filing one
              yourself.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              After all, trademarks are nothing if not popular — between Q4 2019
              and Q2 2022, the number of active trademark registrations swelled
              from just under 2.5 million to nearly 3 million.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              But before we start clearing up what can and cannot be
              trademarked, let's first define what a trademark actually is.
            </p>
            <InfoCard title="USPTO definition">
              A trademark can be any word, phrase, symbol, design, or a
              combination of these things that identifies your goods or
              services. It's how customers recognize you in the marketplace and
              distinguish you from your competitors.
            </InfoCard>
            <p className="mt-5 leading-relaxed text-slate-600">
              To complicate things slightly, a trademark can refer to both a
              trademark and a service mark. A service mark is similar to a
              trademark except that it applies to services instead of goods.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              A trademark can help to:
            </p>
            <ul className="mt-4 ml-6 list-disc space-y-2 text-slate-600">
              <li>Identify the brand behind your products or services</li>
              <li>Provide legal protection for your brand</li>
              <li>Prevent counterfeiting and fraud</li>
            </ul>
            <p className="mt-4 leading-relaxed text-slate-600">
              Knowing this, it's easy to see why so many trademarks are filed —
              they can be immensely valuable to businesses looking to protect
              their brand from copycats and fraudsters.
            </p>
          </div>

          <div ref={createSectionRef(2)} className="scroll-mt-28">
            <h2 className="text-3xl font-black text-[#1a1a1a] md:text-4xl">
              What Can Be Trademarked?
            </h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              Given the benefits that trademarks provide, it would be
              understandable if businesses trademarked everything they created.
              But unfortunately, trademarks can only be used to protect certain
              things, and they must be unique.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Here are the properties that can be trademarked, along with a few
              real-life examples:
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {canTrademark.map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
                >
                  <h3 className="text-base font-black text-[#1a1a1a]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 leading-relaxed text-slate-600">
              As you can see, trademarks can be applied to many aspects of a
              company's branding.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              If you're interested in using trademarks to protect your small
              business, it's often wise to start by filing them for properties
              you know can be covered, such as your company's unique name, logo
              and slogan.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Just remember to conduct a thorough trademark search first to
              ensure that your desired trademark, or one very similar to it,
              hasn't already been filed by someone else.
            </p>
          </div>

          <div ref={createSectionRef(3)} className="scroll-mt-28">
            <h2 className="text-3xl font-black text-[#1a1a1a] md:text-4xl">
              What Things Can You Not Trademark?
            </h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              There's a limit to what can be protected by trademark, and some
              people learn this the hard way when their trademark filing is
              rejected by the USPTO.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              To avoid becoming one of those people and making costly trademark
              mistakes, be sure to familiarize yourself with the properties that
              cannot be trademarked.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {cannotTrademark.map(([title, desc]) => (
                <div key={title} className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="text-base font-black text-[#1a1a1a]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 leading-relaxed text-slate-600">
              So what phrases cannot be trademarked? The answer is any phrase
              that is generic, merely descriptive, deceptive, based only on a
              surname or place, purely ornamental or similar to another
              trademark.
            </p>
          </div>

          <div ref={createSectionRef(4)} className="scroll-mt-28">
            <h2 className="text-3xl font-black text-[#1a1a1a] md:text-4xl">
              What If You Want to Use Someone's Trademark?
            </h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              While we're on the topic of things you can't trademark, let's talk
              about what to do if you want to use someone's trademark. For
              instance, you may want to sell merchandise that features a
              trademarked character or logo.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Or, you may want to demonstrate how your brand performs in
              comparison to a competitor with a trademarked name.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              In cases such as those, you can generally choose between two
              options:
            </p>
            <ol className="mt-4 ml-6 list-decimal space-y-2 text-slate-600">
              <li>
                Ask for permission, sign a licensing agreement and pay any
                requisite licensing fees.
              </li>
              <li>
                Use the property under the fair use doctrine, such as for
                criticism, commentary or educational purposes.
              </li>
            </ol>
            <p className="mt-4 leading-relaxed text-slate-600">
              Whatever route you take, just be sure that you're within your
              legal limits beforehand. If you don't, you might find yourself in
              hot water and possibly even liable for trademark infringement
              damages.
            </p>
            <InfoCard title="Quick note">
              Knowing this, it's easy to see why so many trademarks are filed —
              they can be immensely valuable to businesses looking to protect
              their brand from copycats and fraudsters.
            </InfoCard>
          </div>

          <div ref={createSectionRef(5)} className="scroll-mt-28">
            <h2 className="text-3xl font-black text-[#1a1a1a] md:text-4xl">
              Should You File a Trademark?
            </h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              So when should you start filling out a trademark application to
              protect your business's intellectual properties? That all depends
              on the potential strength of your trademark.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              As the USPTO explains, the strongest trademarks are fanciful, like
              “Kodak” to describe a camera company, or arbitrary, like “Galaxy”
              to describe a smartphone. On the other hand, the weakest
              trademarks are generic names that aren't unique to any company or
              product.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              If the property you're considering trademarking falls on the
              strong side of the spectrum, then a trademark may be just what you
              need to protect the brand you've worked so hard to create.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              But what if the property you want to trademark falls on the weak
              side of the spectrum? No worries — as long as you change it to be
              stronger, you can still get a trademark.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              For instance, if you have a business named “Texas BBQ,” it will be
              considered primarily geographically descriptive and thus won't be
              eligible for a trademark. You can simply add a word or two to make
              it unique and trademark-worthy — “Lilian's Texas BBQ” or “Pecan &
              Prairie BBQ” might be acceptable alternatives.
            </p>
          </div>

          <div
            ref={createSectionRef(6)}
            className="scroll-mt-28 rounded-3xl bg-[#F8FAFC] p-8"
          >
<h2 className="text-3xl font-black text-[#1a1a1a] md:text-4xl">
              Ready to Protect Your Incorp Bay with a Trademark?
            </h2>
            <p className="mt-5 leading-relaxed text-slate-600">
When you're ready to apply for a trademark, we can help you
              streamline the process. With Incorp's trademark registration
              service, we'll assist you with research, legal guidance and
              paperwork filing so you can rest easy knowing no detail's been
              overlooked.
            </p>
            <Link
              href="/trademark/step-1"
              className="mt-6 inline-flex rounded-full bg-[#06B6D4] px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-md shadow-[#06B6D4]/30 transition hover:bg-[#0891b2]"
            >
              Order Now
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}

function TrademarkCtaSection() {
  return (
    <section className="px-6 pb-20 md:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 overflow-hidden rounded-[2rem] bg-[#ecfeff] px-8 py-12 md:grid-cols-2 md:px-20 md:py-20">
        <div>
          <p className="text-xl font-black text-[#06B6D4]">Get Trademark</p>
          <h2 className="mt-8 max-w-xl text-4xl font-black leading-tight tracking-tight text-[#101828] md:text-6xl">
            Protect Your Name Logo, With A U.S. Trademark Registration
          </h2>
          <p className="mt-6 text-lg text-[#101828]">Only $299 + Filing Fee*</p>
          <Link
            href="/trademark/step-1"
            className="mt-10 inline-flex rounded-full bg-[#06B6D4] px-8 py-4 text-sm font-black uppercase text-white shadow-lg shadow-[#06B6D4]/25 transition hover:bg-[#0891b2]"
          >
            Get Started Now
          </Link>
        </div>

        <div className="relative flex min-h-[430px] justify-center md:justify-end">
          <div className="absolute right-0 top-0 h-[430px] w-[260px] rotate-[8deg] rounded-[2.2rem] border-[10px] border-[#1a1a1a] bg-white shadow-2xl">
            <div className="mx-auto mt-3 h-6 w-28 rounded-full bg-[#111827]" />
            <div className="px-6 pt-12">
              <p className="text-lg font-black text-[#111827]">
                Trademark Protected
              </p>
              <div className="mt-4 border-t border-slate-200 pt-4">
                <p className="text-xs font-semibold uppercase text-slate-400">
                  Status
                </p>
                <p className="mt-1 text-sm font-bold text-[#111827]">
                  Trademark Protected ✓
                </p>
              </div>
              <div className="mt-12 border-t border-slate-100 pt-6">
                <p className="text-xs font-semibold uppercase text-slate-400">
                  Trademark Information
                </p>
                <p className="mt-2 text-4xl font-medium text-[#111827]">
                  Jan 21 2023
                </p>
              </div>
              <div className="mt-20 space-y-2 text-xs text-slate-400">
                <p>Reg. No. 5...</p>
                <p>Intl. Cl.: 9</p>
                <p>Trademark Principal Register</p>
              </div>
            </div>
          </div>

          <div className="absolute left-0 top-32 w-[360px] rounded-xl bg-white px-7 py-5 shadow-xl md:left-[-20px]">
            <div className="flex items-center justify-between">
              <p className="text-3xl font-black tracking-tight text-[#1a1a1a]">
                ACME INC
              </p>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#06B6D4] text-white">
                <Shield className="h-7 w-7" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-14 left-16 w-[340px] rotate-[-3deg] rounded-xl bg-white px-5 py-4 shadow-xl md:left-20">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-black text-[#1a1a1a]">
                Trademark Details{" "}
                <span className="text-slate-400">- #1441334</span>
              </p>
              <span className="rounded-full bg-[#06B6D4] px-3 py-1 text-[10px] font-bold text-white">
                Active
              </span>
            </div>
            <div className="flex items-center gap-3 border-t border-slate-100 pt-3 text-xs text-slate-500">
              <span className="h-2 w-2 rounded-full bg-[#06B6D4]" />
              <span className="font-semibold text-[#1a1a1a]">
                Attorney Name
              </span>
              <span>John Smith</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TrademarkPage() {
  return (
    <NavigationWrapper>
      <div className="min-h-screen bg-white text-[#1a1a1a]">
        <Hero />
        <TrustBar />
        <ProtectSection />
        <PackageSection />
        <HowItWorksSection />
        <ArticleSection />
        <TrademarkCtaSection />
      </div>
    </NavigationWrapper>
  );
}
