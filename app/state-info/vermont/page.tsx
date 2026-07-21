"use client";

import React, { useState } from "react";
import NavigationWrapper from "@/components/NavigationWrapper";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Star,
  ChevronDown,
  BookOpen,
  Linkedin,
  Twitter,
  Link2,
} from "lucide-react";

interface GlanceFact {
  label: string;
  value: string;
}

interface ContentSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

interface StepItem {
  title: string;
  body: string[];
}

interface FAQItem {
  q: string;
  a: string;
}

interface StateData {
  slug: string; // e.g. "alabama"
  name: string; // e.g. "Alabama"
  pageTitle: string; // e.g. "How to Form an LLC in Alabama"
  metaDescription: string;
  readTime: string; // e.g. "7 min read"
  glance: GlanceFact[];
  introHeading: string; // e.g. "How to form an LLC in Alabama"
  introParagraphs: string[];
  whyHeading?: string; // e.g. "Why form an LLC in Alabama"
  whyParagraphs?: string[];
  steps: StepItem[];
  extraSections?: ContentSection[]; // e.g. "Registered agent requirements", "Ongoing compliance"
  faqs: FAQItem[];
}

const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";

const LOGO_GRADIENT_TEXT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent";

// ---------- Small building blocks ----------

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
      {children}
    </div>
  );
}

function PrimaryButton({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`${LOGO_GRADIENT} group relative overflow-hidden rounded-full px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:brightness-110 hover:scale-[1.03] hover:shadow-[0_10px_35px_rgba(43,147,201,0.45)] ${className}`}
    >
      <span className="absolute inset-x-0 top-0 h-1/2 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
      <span className="absolute -left-20 top-0 h-full w-12 -skew-x-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />
      <span className="relative z-10">{children}</span>
    </button>
  );
}

// ---------- Section: Article Header ----------

function ArticleHeader({ data }: { data: StateData }) {
  return (
    <section className="px-6 pt-8 pb-6 md:px-16 md:pt-10">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-end gap-2 text-sm text-slate-500">
          <span className="font-medium">Share:</span>
          <button
            aria-label="Share on LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-[#2B93C9] hover:text-[#2B93C9]"
          >
            <Linkedin className="h-4 w-4" />
          </button>
          <button
            aria-label="Share on X"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-[#2B93C9] hover:text-[#2B93C9]"
          >
            <Twitter className="h-4 w-4" />
          </button>
          <button
            aria-label="Copy link"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-[#2B93C9] hover:text-[#2B93C9]"
          >
            <Link2 className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-6 rounded-[32px] bg-[#ECEFF1]/50 px-8 py-12 text-center md:px-14 md:py-16">
          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-500">
            <BookOpen className="h-4 w-4" />
            <span>{data.readTime}</span>
          </div>

          <h1 className="mt-4 text-4xl font-bold leading-tight text-[#1E293B] md:text-6xl">
            {data.pageTitle.replace(`in ${data.name}`, "").trim()}{" "}
            <span className={LOGO_GRADIENT_TEXT}>in {data.name}</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base text-black md:text-lg">
            {data.metaDescription}
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <div
              className={`${LOGO_GRADIENT} flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white`}
            >
              IB
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-[#1E293B]">
                Incorp Bay Editorial Staff
              </p>
              <p className="text-xs text-slate-500">Editorial Team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Section: Main layout (sidebar + content) ----------

function TableOfContents({
  activeId,
  onNavigate,
  stateSlug,
}: {
  activeId: string;
  onNavigate: (id: string) => void;
  stateSlug: string;
}) {
  const router = useRouter();

  const tocItems = [
    { id: "at-a-glance", label: "At a glance" },
    { id: "how-to-form", label: "How to form your LLC" },
    { id: "faq", label: "Frequently asked questions" },
  ];

  return (
    <aside className="md:sticky md:top-6 md:self-start">
      <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
          <span>⚓</span>
          <span>Jump to section</span>
        </div>

        <div className="mt-4 rounded-xl bg-slate-50 p-4">
          <p className={`text-sm font-bold ${LOGO_GRADIENT_TEXT}`}>
            Table of contents
          </p>
          <ul className="mt-3 space-y-3 border-l-2 border-slate-200 pl-4">
            {tocItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`text-left text-sm transition-colors ${
                    activeId === item.id
                      ? "font-bold text-[#1E293B]"
                      : "text-slate-500 hover:text-[#2B93C9]"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
        <p className={`text-sm font-bold ${LOGO_GRADIENT_TEXT}`}>
          Ready to Get Started?
        </p>
        <p className="mt-2 text-sm leading-relaxed text-slate-700">
          Have Incorp Bay do the work for you. $0 + state fee.
        </p>
        <PrimaryButton
          onClick={() => router.push(`/llc/${stateSlug}/order`)}
          className="mt-4 w-full text-center"
        >
          Form Your LLC Now
        </PrimaryButton>

        <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-600">
          <Star className="h-4 w-4 fill-[#2B93C9] text-[#2B93C9]" />
          <span>Trustpilot</span>
          <span>Excellent 4.7 out of 5</span>
        </div>
      </div>
    </aside>
  );
}

function AtAGlance({ data }: { data: StateData }) {
  return (
    <div id="at-a-glance" className="scroll-mt-24">
      <h2 className="text-3xl font-bold text-[#1E293B] md:text-4xl">
        {data.name} LLC at a glance
      </h2>
      <div className="mt-6 space-y-5">
        {data.glance.map((fact) => (
          <p key={fact.label} className="text-base leading-relaxed text-black">
            <span className="font-bold text-[#1E293B]">{fact.label}:</span>{" "}
            {fact.value}
          </p>
        ))}
      </div>
    </div>
  );
}

function Section({ section }: { section: { heading: string; paragraphs?: string[]; bullets?: string[] } }) {
  return (
    <div className="mt-10">
      <h3 className={`text-2xl font-bold ${LOGO_GRADIENT_TEXT}`}>
        {section.heading}
      </h3>
      {section.paragraphs && (
        <div className="mt-4 space-y-4">
          {section.paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-black">
              {p}
            </p>
          ))}
        </div>
      )}
      {section.bullets && (
        <ul className="mt-4 space-y-3">
          {section.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-base leading-relaxed text-black">
              <span className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full ${LOGO_GRADIENT}`} />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function HowToForm({ data }: { data: StateData }) {
  return (
    <div id="how-to-form" className="mt-14 scroll-mt-24">
      <h2 className="text-3xl font-bold text-[#1E293B] md:text-4xl">
        {data.introHeading}
      </h2>
      <div className="mt-5 space-y-4">
        {data.introParagraphs.map((p, i) => (
          <p key={i} className="text-base leading-relaxed text-black">
            {p}
          </p>
        ))}
      </div>

      {data.whyHeading && data.whyParagraphs && (
        <>
          <h3 className={`mt-10 text-2xl font-bold ${LOGO_GRADIENT_TEXT}`}>
            {data.whyHeading}
          </h3>
          <div className="mt-4 space-y-4">
            {data.whyParagraphs.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-black">
                {p}
              </p>
            ))}
          </div>
        </>
      )}

      <div className="mt-10 space-y-10">
        {data.steps.map((step, idx) => (
          <div key={step.title}>
            <div className="flex items-start gap-4">
              <div
                className={`${LOGO_GRADIENT} flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-md`}
              >
                {idx + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#1E293B] md:text-2xl">
                  Step {idx + 1}: {step.title}
                </h3>
                <div className="mt-3 space-y-4">
                  {step.body.map((para, i) => (
                    <p key={i} className="text-base leading-relaxed text-black">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {data.extraSections?.map((section) => (
        <Section key={section.heading} section={section} />
      ))}
    </div>
  );
}

function FAQSection({ data }: { data: StateData }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div id="faq" className="mt-14 scroll-mt-24">
      <h2 className="text-3xl font-bold text-[#1E293B] md:text-4xl">
        Frequently asked questions
      </h2>

      <div className="mt-6 space-y-4">
        {data.faqs.map(({ q, a }, i) => (
          <div
            key={q}
            className="rounded-2xl border border-slate-100 bg-white shadow-sm"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-bold text-[#1E293B] transition-colors hover:text-[#2B93C9]"
            >
              {q}
              <ChevronDown
                className={`h-5 w-5 flex-shrink-0 transition-transform ${
                  open === i ? "rotate-180 text-[#2B93C9]" : "text-slate-400"
                }`}
              />
            </button>
            {open === i && (
              <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600">
                {a}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ArticleBody({ data }: { data: StateData }) {
  const [activeId, setActiveId] = useState("at-a-glance");

  const handleNavigate = (id: string) => {
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="px-6 py-6 md:px-16 md:py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-[280px_1fr]">
        <TableOfContents
          activeId={activeId}
          onNavigate={handleNavigate}
          stateSlug={data.slug}
        />
        <div className="min-w-0">
          <AtAGlance data={data} />
          <HowToForm data={data} />
          <FAQSection data={data} />
        </div>
      </div>
    </section>
  );
}

// ---------- Section: Dashboard banner ----------

function DashboardBanner() {
  return (
    <section className="px-6 py-10 md:px-16 md:py-14">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-[#ECEFF1]/50 p-2 shadow-sm">
          <div className="relative aspect-[16/8] w-full overflow-hidden rounded-2xl">
            <Image
              src="/llc-states/dashboard-preview.webp"
              alt="Business formation and compliance dashboard displaying LLC status, EIN tracking, annual report deadlines, and corporate documents"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <Badge>
            <span className="font-bold">Excellent 4.7</span>
            <span>out of 5</span>
            <Star className="h-4 w-4 fill-[#2B93C9] text-[#2B93C9]" />
            <span>Trustpilot</span>
          </Badge>
        </div>
      </div>
    </section>
  );
}

// ---------- Section: CTA (Start Your Story) ----------

function StartStorySection({ data }: { data: StateData }) {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push(`/llc/${data.slug}/order`);
  };

  return (
    <section className="px-6 pb-16 pt-4 md:px-16 md:pb-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-[#ECEFF1]/60">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="px-8 py-12 md:px-14 md:py-16">
            <Badge>
              <span>Excellent 4.7 out of 5</span>
              <Star className="h-4 w-4 fill-[#2B93C9] text-[#2B93C9]" />
              <span>Trustpilot</span>
            </Badge>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-[#1E293B] md:text-5xl">
              Start Your Story With{" "}
              <span className={LOGO_GRADIENT_TEXT}>Incorp Bay</span>
            </h2>

            <p className="mt-5 max-w-md text-base leading-relaxed text-black">
              Marina turned her passion into a thriving boutique with a
              little help from Incorp Bay. Whether you are starting a
              bridal business, a retail shop, or something entirely
              different, we can help you handle the paperwork so you can
              focus on what matters most. Get started today for $0 + state
              fee.
            </p>

            <div className="mt-8">
              <PrimaryButton onClick={handleGetStarted}>
                GET STARTED
              </PrimaryButton>
            </div>
          </div>

          <div className="relative flex h-full min-h-[320px] items-end justify-center px-6 md:min-h-[420px]">
            <div className="relative h-[280px] w-full max-w-md md:h-[380px]">
              <Image
                src="/llc-states/corp-formation-dashboard.webp"
                alt="Corp Formation dashboard preview"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Full Page Template ----------

const data: StateData = {
  slug: "vermont",
  name: "Vermont",
  pageTitle: "Vermont LLC Filing Fees and Requirements",
  metaDescription:
    "Forming an LLC in Vermont costs $125 online or $155 by mail. Learn the filing fees, annual report requirements, and what you need to stay in good standing.",
  readTime: "6 min read",
  glance: [
    { label: "Filing fee", value: "$125 online or $155 by mail (Articles of Organization)" },
    { label: "Processing time", value: "A few business days online; longer for mail — no rush service available" },
    { label: "State agency", value: "Vermont Secretary of State, Business Services Division" },
    { label: "Annual report due", value: "Within 2.5 months after the end of the LLC's fiscal year; $35–$45 fee for domestic LLCs" },
    { label: "State tax rate", value: "No state-level LLC franchise tax; Vermont personal income tax (3.35%–8.75%) applies to pass-through income" },
  ],
  introHeading: "How to form an LLC in Vermont",
  introParagraphs: [
    "To form an LLC in Vermont, you file Articles of Organization with the Vermont Secretary of State's Business Services Division. Vermont offers 2 ways to file, and the method you choose affects both the cost and the timeline: online filing costs $125 and processes within a few business days, while mail filing costs $155 and takes longer. Vermont does not offer a rush or expedited service for paper filings.",
  ],
  steps: [
    {
      title: "Choose and check your LLC name",
      body: [
        'Your LLC name must include the words "limited liability company" or "limited company," or an approved abbreviation like "LLC" or "L.L.C." It also needs to be distinguishable from other registered Vermont entities.',
      ],
    },
    {
      title: "Appoint a registered agent",
      body: [
        "Every LLC in Vermont is required to have a registered agent with a physical street address in Vermont, present during business hours to receive important documents on behalf of your company.",
      ],
    },
    {
      title: "File your Articles of Organization",
      body: [
        "The Articles must include your LLC's name and the address of its principal office. Filing online through the Vermont Secretary of State's Business Services portal costs $125 and saves you $30 compared to mail filing, which costs $155.",
      ],
    },
    {
      title: "Get your EIN",
      body: [
        "Every LLC in the U.S. should obtain a unique EIN from the Internal Revenue Service. You'll use it when you open a business bank account, file taxes, and pay employees.",
      ],
    },
  ],
  extraSections: [
    {
      heading: "Annual report requirements",
      paragraphs: [
        "Every Vermont LLC must file an annual report with the Secretary of State each year to stay in good standing. Vermont's annual report deadline is tied to your LLC's fiscal year, not a single fixed calendar date — it's due within 2.5 months after the end of your fiscal year. If your LLC uses a calendar year, the report is due by mid-March. The filing fee is around $35–$45 for domestic LLCs, and $170 for foreign LLCs registered in Vermont.",
      ],
    },
    {
      heading: "Business licenses in Vermont",
      paragraphs: [
        "Vermont doesn't issue a single general business license, but many businesses need industry-specific or local permits to operate. Common examples include licenses for cleaning businesses, landscaping operations, food service, and contractors.",
      ],
    },
  ],
  faqs: [
    {
      q: "How much does it cost to form an LLC in Vermont?",
      a: "It costs $125 to file Articles of Organization online with the Vermont Secretary of State, or $155 if you file by mail. After formation, you'll also owe an annual report fee of roughly $35–$45 each year.",
    },
    {
      q: "Does Vermont require an annual report for LLCs?",
      a: "Yes. Every Vermont LLC must file an annual report each year, due within 2.5 months after the end of the LLC's fiscal year — for calendar-year LLCs, that's typically mid-March. Missing the deadline puts your LLC out of good standing.",
    },
    {
      q: "How long does it take to form an LLC in Vermont?",
      a: "Online filing is processed within a few business days. Mail filing takes longer, and Vermont does not offer a rush or expedited service for paper filings — filing online is the faster option for most people.",
    },
    {
      q: "Does Vermont charge a franchise tax for LLCs?",
      a: "No separate LLC franchise tax, but Vermont does impose a flat Business Entity Tax due on the anniversary of your LLC's formation, paid to the Vermont Department of Taxes. Vermont corporate income tax applies only if the LLC elects to be taxed as a corporation.",
    },
    {
      q: "Does a Vermont LLC need a registered agent?",
      a: "Yes. Every LLC in Vermont is required to have a registered agent with a physical Vermont street address, appointed when you file your Articles of Organization.",
    },
    {
      q: "How do I register a foreign LLC in Vermont?",
      a: "File an Application for Certificate of Authority with the Vermont Secretary of State and pay a processing fee of $125–$170 depending on the source. Foreign LLCs also pay a higher annual report fee ($170) than domestic LLCs.",
    },
  ],
};

export default function VermontLLCPage() {
  return (
    <NavigationWrapper>
      <div className="min-h-screen bg-white text-[#1E293B] font-helvetica">
        <ArticleHeader data={data} />
        <ArticleBody data={data} />
        <DashboardBanner />
        <StartStorySection data={data} />
      </div>
    </NavigationWrapper>
  );
}