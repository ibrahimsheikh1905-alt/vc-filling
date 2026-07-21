"use client";

import React, { useState } from "react";
import NavigationWrapper from "@/components/NavigationWrapper";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Star,
  ChevronDown,
  CheckCircle2,
  BookOpen,
  Linkedin,
  Twitter,
  Link2,
} from "lucide-react";

const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";

const LOGO_GRADIENT_TEXT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent";

// ---------- Data ----------

const tocItems = [
  { id: "at-a-glance", label: "Alabama LLC at a glance" },
  { id: "how-to-form", label: "How to form an LLC in Alabama" },
  { id: "faq", label: "Frequently asked questions" },
];

const glanceFacts = [
  {
    label: "Filing fee",
    value: "$200 (Certificate of Formation) + $28 (name reservation)",
  },
  {
    label: "Processing time",
    value: "Immediate for online filings through Alabama Interactive",
  },
  {
    label: "State agency",
    value: "Alabama Secretary of State, Business Services Division",
  },
  {
    label: "Annual report due",
    value:
      "No annual report required as of October 1, 2024 (Alabama Act No. 2024-213). Alabama Business Privilege Tax return due April 15 each year.",
  },
  {
    label: "State tax rate",
    value:
      "Alabama Business Privilege Tax applies; no state-level LLC income tax on pass-through income",
  },
];

const steps = [
  {
    id: 1,
    title: "Reserve your LLC name",
    body: [
      "Alabama requires you to reserve your LLC name before — or as part of — filing your Certificate of Formation. You can do this online through the Secretary of State's Name Reservation system. The fee is $28, payable by credit card, and the reservation is issued immediately. A reserved name is valid for 365 days.",
      'Your LLC name must be distinguishable from other registered businesses in Alabama and must include a designator like "Limited Liability Company," "LLC," or "L.L.C." Check the Secretary of State\'s business name database before you apply to avoid a rejection.',
    ],
  },
  {
    id: 2,
    title: "Appoint a registered agent",
    body: [
      "Every Alabama LLC must have a registered agent — a person or entity designated to receive legal notices and government documents on behalf of the business. The agent must have a physical street address in Alabama (a P.O. box doesn't count) and be available during regular business hours.",
      "You can serve as your own registered agent if you have a physical Alabama address and can be there during business hours. Many business owners use a professional registered agent service instead — it keeps your personal address off public records and ensures someone is always available to receive documents.",
    ],
  },
  {
    id: 3,
    title: "File your Certificate of Formation",
    body: [
      "The Certificate of Formation is the document that legally creates your Alabama LLC. You file it with the Alabama Secretary of State, Business Services Division. Online filing through Alabama Interactive is the fastest option — processing is immediate. You can also mail a paper form, though that takes longer.",
      "The Certificate must include your LLC's name (matching the reserved name), the Name Reservation Certificate, your registered agent's name and Alabama street address, and a statement that the LLC has at least 1 member. The state filing fee is $200.",
    ],
  },
  {
    id: 4,
    title: "Create an operating agreement",
    body: [
      "Alabama doesn't require you to file an operating agreement with the state, but you should have one. It's the internal document that defines how your LLC is managed — who owns what, how profits are distributed, and how decisions get made. Without one, Alabama's default LLC statutes fill in the gaps, which may not reflect what you actually want.",
      "Your operating agreement should specify whether the LLC is member-managed or manager-managed. In a member-managed LLC, all owners share day-to-day authority. In a manager-managed LLC, a designated manager handles operations while other members retain economic rights. Alabama law permits oral agreements, but a written agreement is the only version that holds up when disputes arise.",
    ],
  },
  {
    id: 5,
    title: "Get your EIN",
    body: [
      "An Employer Identification Number (EIN) is a 9-digit federal tax ID issued by the IRS. Your Alabama LLC needs one to open a business bank account, hire employees, and file federal taxes. Applying online at irs.gov is free and issues your EIN immediately after you complete the application.",
      "To use the IRS online application, the responsible party must have a valid Social Security Number (SSN) or Individual Taxpayer Identification Number (ITIN), and the business must have its principal place of business in the United States. The IRS does not charge a fee for issuing an EIN.",
    ],
  },
];

const faqs = [
  {
    q: "How much does it cost to form an LLC in Alabama?",
    a: "The Alabama state fees total $228 — $28 to reserve your LLC name and $200 to file the Certificate of Formation with the Secretary of State. These are the required state fees regardless of how you file. There's no additional state fee to get your EIN; the IRS issues EINs for free.",
  },
  {
    q: "Can I form an LLC in Alabama by myself?",
    a: "Yes. Alabama allows a single person to form and own an LLC — this is called a single-member LLC. You can complete the name reservation and Certificate of Formation filing online through Alabama Interactive without an attorney. You'll still need to appoint a registered agent with a physical Alabama address, but that can be yourself if you qualify.",
  },
  {
    q: "Is there a free LLC option in Alabama?",
    a: "No. Alabama charges a $200 Certificate of Formation fee and a $28 name reservation fee — those are required state fees you can't avoid. What you can avoid is paying extra for formation help. We handle your Alabama LLC filing for $0; you only pay the $228 in required state fees.",
  },
  {
    q: "Does Alabama require an annual report for LLCs?",
    a: "No. Alabama eliminated the annual report requirement for LLCs on October 1, 2024, under Alabama Act No. 2024-213. You no longer need to file a standalone annual report with the Secretary of State. You do still need to file an Alabama Business Privilege Tax return with the Department of Revenue by April 15 each year if your LLC is subject to the tax.",
  },
  {
    q: "What is a registered agent and do I need one in Alabama?",
    a: "Yes, every Alabama LLC is required to have a registered agent. A registered agent is a person or entity that receives legal notices and official government documents on behalf of your LLC. The agent must have a physical street address in Alabama — not a P.O. box — and be available during regular business hours. You can serve as your own registered agent or use a professional service.",
  },
  {
    q: "What are common Alabama LLC mistakes?",
    a: "The mistakes that come up most often are skipping the name reservation before filing (Alabama requires it), using a P.O. box for the registered agent address (not allowed), and not having a written operating agreement. A lot of business owners also miss the Alabama Business Privilege Tax return deadline — April 15 — because they assume no annual report means no annual filing at all.",
  },
  {
    q: "How long does it take to form an LLC in Alabama?",
    a: "Online filings through Alabama Interactive are processed immediately — your LLC is generally approved the same day you file. Paper filings take longer, though the Secretary of State doesn't publish a fixed timeline for mail submissions. If speed matters, file online.",
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

function ArticleHeader() {
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
            <span>7 min read</span>
          </div>

          <h1 className="mt-4 text-4xl font-bold leading-tight text-[#1E293B] md:text-6xl">
            How to Form an{" "}
            <span className={LOGO_GRADIENT_TEXT}>LLC in Alabama</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base text-black md:text-lg">
            Learn the steps to form an LLC in Alabama — from reserving your
            name to filing your Certificate of Formation. $0 + $200 state
            fee. Start today.
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
}: {
  activeId: string;
  onNavigate: (id: string) => void;
}) {
  const router = useRouter();

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
          onClick={() => router.push("/llc/alabama/order")}
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

function AtAGlance() {
  return (
    <div id="at-a-glance" className="scroll-mt-24">
      <h2 className="text-3xl font-bold text-[#1E293B] md:text-4xl">
        Alabama LLC at a glance
      </h2>
      <div className="mt-6 space-y-5">
        {glanceFacts.map((fact) => (
          <p key={fact.label} className="text-base leading-relaxed text-black">
            <span className="font-bold text-[#1E293B]">{fact.label}:</span>{" "}
            {fact.value}
          </p>
        ))}
      </div>
    </div>
  );
}

function HowToForm() {
  return (
    <div id="how-to-form" className="mt-14 scroll-mt-24">
      <h2 className="text-3xl font-bold text-[#1E293B] md:text-4xl">
        How to form an LLC in Alabama
      </h2>
      <p className="mt-5 text-base leading-relaxed text-black">
        Forming an LLC in Alabama takes 5 steps: reserve your business name
        with the Secretary of State, appoint a registered agent with a
        physical Alabama address, file a Certificate of Formation online or
        by mail, draft an operating agreement, and get an Employer
        Identification Number (EIN) from the IRS. The state filing fee is
        $200.
      </p>

      <h3 className={`mt-10 text-2xl font-bold ${LOGO_GRADIENT_TEXT}`}>
        Why form an LLC in Alabama
      </h3>
      <p className="mt-4 text-base leading-relaxed text-black">
        Alabama offers low sales and income tax rates, affordable operating
        costs, and a range of tax incentives that make it a practical state
        for small business owners. An LLC gives you personal liability
        protection and pass-through taxation without the administrative
        overhead of a corporation — a combination that works well for most
        Alabama entrepreneurs.
      </p>
      <p className="mt-4 text-base leading-relaxed text-black">
        Alabama also eliminated its annual report requirement for LLCs as of
        October 1, 2024, which reduces ongoing compliance work compared to
        many other states. You&apos;ll still need to file an Alabama
        Business Privilege Tax return each year, but the paperwork burden is
        lighter than it used to be.
      </p>

      <div className="mt-10 space-y-10">
        {steps.map((step) => (
          <div key={step.id}>
            <div className="flex items-start gap-4">
              <div
                className={`${LOGO_GRADIENT} flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-md`}
              >
                {step.id}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[#1E293B] md:text-2xl">
                  Step {step.id}: {step.title}
                </h3>
                <div className="mt-3 space-y-4">
                  {step.body.map((para, i) => (
                    <p
                      key={i}
                      className="text-base leading-relaxed text-black"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className={`mt-12 text-2xl font-bold ${LOGO_GRADIENT_TEXT}`}>
        Ongoing compliance in Alabama
      </h3>
      <p className="mt-4 text-base leading-relaxed text-black">
        Alabama eliminated its annual report requirement for LLCs on October
        1, 2024, under Alabama Act No. 2024-213. That&apos;s one less filing
        to track each year. However, most Alabama LLCs are still subject to
        the Alabama Business Privilege Tax and must file a return with the
        Alabama Department of Revenue by April 15 each year.
      </p>
      <p className="mt-4 text-base leading-relaxed text-black">
        Missing the Business Privilege Tax deadline can put your LLC out of
        good standing with the state, which can affect your ability to do
        business in Alabama. A tax professional can help you figure out
        whether your LLC is subject to the tax and what you owe.
      </p>
    </div>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div id="faq" className="mt-14 scroll-mt-24">
      <h2 className="text-3xl font-bold text-[#1E293B] md:text-4xl">
        Frequently asked questions
      </h2>

      <div className="mt-6 space-y-4">
        {faqs.map(({ q, a }, i) => (
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

function ArticleBody() {
  const [activeId, setActiveId] = useState("at-a-glance");

  const handleNavigate = (id: string) => {
    setActiveId(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="px-6 py-6 md:px-16 md:py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-[280px_1fr]">
        <TableOfContents activeId={activeId} onNavigate={handleNavigate} />
        <div className="min-w-0">
          <AtAGlance />
          <HowToForm />
          <FAQSection />
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
              src="/llc-alabama/dashboard-preview.webp"
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

function StartStorySection() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/llc/alabama/order");
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
                src="/llc-alabama/corp-formation-dashboard.webp"
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

// ---------- Full Page ----------

export default function AlabamaLLCPage() {
  return (
    <NavigationWrapper>
      <div className="min-h-screen bg-white text-[#1E293B] font-helvetica">
        <ArticleHeader />
        <ArticleBody />
        <DashboardBanner />
        <StartStorySection />
      </div>
    </NavigationWrapper>
  );
}