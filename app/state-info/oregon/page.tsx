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
  slug: "oregon",
  name: "Oregon",
  pageTitle: "Oregon LLC Filing Fees and Requirements",
  metaDescription:
    "Forming an LLC in Oregon requires a $100 Articles of Organization filing fee plus a $100 annual report each year. No franchise tax and no publication requirement.",
  readTime: "6 min read",
  glance: [
    { label: "Filing fee", value: "$100 (Articles of Organization)" },
    { label: "Processing time", value: "5–7 business days typical; online filings generally faster than mail" },
    { label: "State agency", value: "Oregon Secretary of State, Corporation Division" },
    { label: "Annual report due", value: "$100 per year, due on the anniversary date of formation" },
    { label: "State tax rate", value: "No state sales tax; Oregon personal income tax applies to pass-through income" },
  ],
  introHeading: "How to form an LLC in Oregon",
  introParagraphs: [
    "Forming an LLC in Oregon requires filing Articles of Organization with the Oregon Secretary of State, Corporation Division and paying a $100 state fee. You'll also need a registered agent with a physical Oregon address, a distinguishable business name, and a plan to file a $100 annual report each year on your formation anniversary date.",
    "Oregon's fee structure is straightforward compared to many states — there's no franchise tax and no publication requirement. The costs that catch people off guard are usually the ongoing ones: the $100 annual report fee and any assumed business name or license fees that apply to their specific business.",
  ],
  steps: [
    {
      title: "Choose and check your LLC name",
      body: [
        "You can check name availability using the Oregon Secretary of State's business name search tool. If you find the perfect name but aren't ready to file yet, you can reserve it for 120 days for a $100 fee.",
      ],
    },
    {
      title: "Appoint a registered agent",
      body: [
        "Oregon requires every LLC to have a registered agent — an individual or company responsible for receiving legal documents and official state notices on your behalf, with a physical Oregon address.",
      ],
    },
    {
      title: "File your Articles of Organization",
      body: [
        "The Articles of Organization is the document that legally creates your Oregon LLC. You file it with the Oregon Secretary of State, Corporation Division, and pay the $100 state fee at the time of filing. All fees are paid in advance and are nonrefundable. You can file online through the Oregon Business Registry, by mail, or in person.",
      ],
    },
    {
      title: "Get your EIN",
      body: [
        "An Employer Identification Number (EIN) is a federal tax ID issued by the IRS. You'll use it to open a business bank account, file taxes, and pay employees. It's available at no cost from the IRS.",
      ],
    },
  ],
  extraSections: [
    {
      heading: "Annual report requirements",
      paragraphs: [
        "Every LLC in Oregon must file an annual report to remain in good standing. In Oregon, the renewal date is the same as your registration date — if you formed your LLC on March 1st, you'll need to file your annual report by March 1st every year. The Secretary of State's office sends a reminder letter 45 days before the deadline. The cost of filing this report is $100.",
      ],
    },
    {
      heading: "Business licenses in Oregon",
      paragraphs: [
        "Oregon doesn't have a single statewide general business license that every LLC needs. Whether your business needs a license — and which one — depends on your industry, your location, and the type of work you do. The Oregon Business Xpress portal is a good starting point for figuring out what your business needs.",
      ],
    },
  ],
  faqs: [
    {
      q: "How much does it cost to form an LLC in Oregon?",
      a: "The required state fee to form an Oregon LLC is $100, paid to the Oregon Secretary of State, Corporation Division. After formation, the annual report also costs $100 per year, due on your LLC's formation anniversary date.",
    },
    {
      q: "Does Oregon require an annual report for LLCs?",
      a: "Yes. Every Oregon LLC must file an annual report each year on the anniversary of its formation date, and the filing fee is $100 — one of the higher annual report fees relative to the formation cost.",
    },
    {
      q: "Does Oregon charge a franchise tax for LLCs?",
      a: "No. Oregon does not impose a franchise tax on LLCs. Oregon also has no state sales tax, which simplifies the tax picture for many small businesses. LLC members pay Oregon personal income tax on pass-through profits.",
    },
    {
      q: "Does an Oregon LLC need a registered agent?",
      a: "Yes. Oregon requires every LLC to have a registered agent with a physical Oregon street address, responsible for receiving legal documents and official state notices.",
    },
    {
      q: "Does Oregon require an operating agreement?",
      a: "No, Oregon doesn't legally require an operating agreement, but having one is essential to outline and document how you wish your company to run day-to-day and to help prevent internal disputes.",
    },
    {
      q: "How long does it take to form an LLC in Oregon?",
      a: "Online filings through the Oregon Business Registry are typically processed in 2–3 business days, while mailed applications take 4–6 weeks plus mailing time.",
    },
  ],
};

export default function OregonLLCPage() {
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