"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavigationWrapper from "@/components/NavigationWrapper";
import { CheckCircle, ChevronRight, Shield, Star } from "lucide-react";

const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";

const LOGO_GRADIENT_VERTICAL =
  "bg-[linear-gradient(180deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";

const LOGO_GRADIENT_TEXT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent";

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
          <Star className="h-4 w-4 fill-[#2B93C9] text-[#2B93C9]" />
          <span className="font-bold text-slate-700">Trustpilot</span>
        </div>

        <h1 className="mt-6 text-5xl font-bold leading-[1.08] tracking-tight text-[#1E293B] md:text-6xl">
          Register a<br />
          Trademark
        </h1>

        <p className="mt-5 max-w-md text-base leading-relaxed text-slate-500">
          Protect your brand with expert legal support and hassle-free trademark
          registration.
        </p>

        <Link
          href="/trademark/step-1"
          className={`${LOGO_GRADIENT} group relative mt-8 inline-flex overflow-hidden rounded-full px-10 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_35px_rgba(43,147,201,0.45)]`}
        >
          <span className="absolute inset-x-0 top-0 h-1/2 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
          <span className="absolute -left-20 top-0 h-full w-12 -skew-x-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />
          <span className="relative z-10">Get Started</span>
        </Link>
      </div>

      <div className="flex justify-center md:justify-end">
        <div className="relative w-full max-w-md">
          <Image
            src="/trademark/Hero-trademark-registration.webp"
            alt="Trademark Services app showing registration status"
            width={1365}
            height={1152}
            className="w-full rounded-3xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <div className="border-y border-slate-100 bg-[#F8FAFC] px-6 py-5 text-center text-sm font-semibold text-slate-600 md:text-base">
      Bootstrapped, Founder Led, Independently Owned{" "}
      <span className={`font-extrabold ${LOGO_GRADIENT_TEXT}`}>Since 2004</span> With{" "}
      <span className={`font-extrabold ${LOGO_GRADIENT_TEXT}`}>
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
        <h2 className="text-center text-4xl font-bold text-[#1E293B] md:text-5xl">
          Protect Your Business Name With a{" "}
          <span className={LOGO_GRADIENT_TEXT}>Trademark</span>
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
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2B93C9]/10 text-[#2B93C9]">
                {index === 0 ? (
                  <Shield className="h-7 w-7" />
                ) : (
                  <CheckCircle className="h-7 w-7" />
                )}
              </div>
              <h3 className="text-xl font-bold leading-snug text-[#1E293B]">
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
      <div className="relative w-full max-w-md">
        <Image
          src="/trademark/Whats-included-in-the-package-trademark.webp"
          alt="Brand Protection dashboard showing trademark status"
          width={1345}
          height={1169}
          className="w-full rounded-3xl"
        />
      </div>

      <div>
        <h2 className="text-4xl font-bold leading-tight text-[#1E293B] md:text-5xl">
          What's Included in the Package?
        </h2>
        <div className="mt-10 space-y-6">
          {items.map((item) => (
            <div key={item.n} className="flex gap-5">
              <div className={`${LOGO_GRADIENT} flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-base font-bold text-white shadow shadow-[#2B93C9]/30`}>
                {item.n}
              </div>
              <div>
                <p className="font-bold text-[#1E293B]">{item.title}</p>
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

  const ITEM_SPACING = 168; // px: min-h-[120px] + mb-12 (48px)
  const ICON_CENTER = 24; // px: half of w-12 h-12 (48px)
  const trackHeightPx = (steps.length - 1) * ITEM_SPACING;
  const clampedProgress = Math.min(progress * 100, 100);
  const fillHeightPx = (clampedProgress / 100) * trackHeightPx;

  return (
    <section className="bg-white px-6 py-20 md:px-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-bold leading-tight text-[#1E293B] md:text-5xl">
          Trademark Searches & Registration:
          <br />
          How it Works
        </h2>

        <div className="mt-16 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="relative w-full flex flex-col py-2">
            {/* Grey background track: starts at center of icon 1, ends at center of last icon */}
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

            {steps.map((step, index) => {
              const isPassed = index < currentActiveStep;
              const isCurrent = currentActiveStep === index + 1;

              return (
                <div
                  key={step.title}
                  className="relative flex flex-row items-start w-full min-h-[120px] mb-12 last:mb-0 z-10 select-none"
                >
                  <div
                    className={`absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 text-xl transition-all duration-300 z-10 ${
                      isPassed
                        ? "bg-slate-50 border-[#2B93C9] text-[#2B93C9] shadow-md scale-105"
                        : "bg-white border-slate-300 text-slate-400"
                    } ${isCurrent ? "ring-4 ring-[#33D1CC]/20" : ""}`}
                  >
                    {step.icon}
                  </div>

                  <div className="w-full pl-16 text-left">
                    <p className={`text-xs font-semibold uppercase tracking-wider ${LOGO_GRADIENT_TEXT}`}>
                      Step {index + 1}
                    </p>

                    <h3 className={`mt-1 text-lg font-bold md:text-xl ${LOGO_GRADIENT_TEXT}`}>
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-black md:text-base">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center md:justify-end">
            <Link href="/trademark/step-1" className="relative block w-full max-w-sm">
              <Image
                src="/trademark/How-it-works-trademark-3.webp"
                alt="Brand protection confirmation screen"
                width={1182}
                height={1330}
                className="w-full rounded-3xl"
              />
            </Link>
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
        <p className={`text-xs font-semibold uppercase tracking-wider ${LOGO_GRADIENT_TEXT}`}>
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
            <p className="mb-4 text-base font-bold text-[#1E293B]">
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
                          ? `border border-slate-200 bg-white font-bold shadow-sm ${LOGO_GRADIENT_TEXT}`
                          : "text-slate-400 hover:text-slate-600"
                      }`}
                    >
                      <ChevronRight
                        className={`mt-0.5 h-4 w-4 flex-shrink-0 ${isActive ? "text-[#2B93C9]" : "text-slate-300"}`}
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
            <h2 className="text-4xl font-bold leading-tight text-[#1E293B] md:text-5xl">
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
            <h2 className="text-3xl font-bold text-[#1E293B] md:text-4xl">
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
            <h2 className="text-3xl font-bold text-[#1E293B] md:text-4xl">
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
                  <h3 className="text-base font-bold text-[#1E293B]">
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
            <h2 className="text-3xl font-bold text-[#1E293B] md:text-4xl">
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
                  <h3 className="text-base font-bold text-[#1E293B]">
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
            <h2 className="text-3xl font-bold text-[#1E293B] md:text-4xl">
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
            <h2 className="text-3xl font-bold text-[#1E293B] md:text-4xl">
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
<h2 className="text-3xl font-bold text-[#1E293B] md:text-4xl">
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
              className={`${LOGO_GRADIENT} group relative mt-6 inline-flex overflow-hidden rounded-full px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_35px_rgba(43,147,201,0.45)]`}
            >
              <span className="absolute inset-x-0 top-0 h-1/2 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
              <span className="absolute -left-20 top-0 h-full w-12 -skew-x-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />
              <span className="relative z-10">Order Now</span>
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}

function TrademarkCtaSection() {
  return (
    <section className="px-6 pb-16 md:px-16">
      <div className={`${LOGO_GRADIENT} relative mx-auto grid max-w-4xl grid-cols-1 items-center gap-6 overflow-hidden rounded-[32px] border border-white/10 px-6 py-6 shadow-2xl md:grid-cols-2 md:px-10 md:py-8`}>
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#33D1CC]/20 to-transparent" />
        <div className="pointer-events-none absolute right-1/4 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#33D1CC]/30 blur-[80px]" />

        <div className="relative z-10">
          <p className="text-sm font-bold text-white">Get Trademark</p>
          <h2 className="mt-3 max-w-xl text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl">
            Protect Your Name Logo, With A U.S. Trademark Registration
          </h2>
          <p className="mt-3 text-sm text-white/80">Only $299 + Filing Fee*</p>
          <Link
            href="/trademark/step-1"
            className="group relative mt-5 inline-flex overflow-hidden rounded-full bg-white px-6 py-3 text-xs font-bold uppercase shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
          >
            <span className="absolute inset-0 bg-[#2B93C9]/0 transition-colors duration-300 group-hover:bg-[#2B93C9]/5" />
            <span className="absolute -left-16 top-0 h-full w-10 -skew-x-12 bg-[#2B93C9]/10 blur-sm transition-all duration-700 group-hover:left-[120%]" />
            <span className={`relative z-10 ${LOGO_GRADIENT_TEXT}`}>Get Started Now</span>
          </Link>
        </div>

        <div className="relative z-10 flex justify-center md:justify-end">
          <div className="relative w-full max-w-[260px] md:-mr-6 md:translate-x-10">
            <Image
              src="/trademark/Protect-your-name-cropped-trademark.webp"
              alt="Trademark Secured confirmation for Nova Labs"
              width={1114}
              height={1412}
              className="w-full rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TrademarkPage() {
  return (
    <NavigationWrapper>
      <div className="min-h-screen bg-white text-[#1E293B]">
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
