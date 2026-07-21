"use client";

import { useState } from "react";
import NavigationWrapper from "@/components/NavigationWrapper";

// ── Small icons ─────────────────────────────────────────────────────────────
const ChevronDown = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
  >
    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" className="h-7 w-7">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const StarRow = ({ count = 5 }: { count?: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-[#00B67A]">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

// ── Reusable accordion ──────────────────────────────────────────────────────
type AccordionItem = { q: string; a: string; badge?: string | number };

function Accordion({
  items,
  variant = "plain",
}: {
  items: AccordionItem[];
  variant?: "plain" | "card";
}) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className={variant === "card" ? "flex flex-col gap-3" : "divide-y divide-gray-200"}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className={
              variant === "card"
                ? "rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm"
                : "py-4"
            }
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span className="flex items-center gap-3 text-[15px] font-semibold text-[#0d0d1a]">
                {item.badge !== undefined && (
                  <span className="text-[#06B6D4]">{item.badge}</span>
                )}
                {item.q}
              </span>
              <ChevronDown open={isOpen} />
            </button>
            {isOpen && (
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{item.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────
const guideQuestions: AccordionItem[] = [
  {
    q: "What Is an LLC?",
    a: "A limited liability company (LLC) is a business structure that separates your personal assets from your company's debts and legal obligations, while letting profits pass through to your personal tax return.",
  },
  {
    q: "Is Starting an LLC Right for You?",
    a: "If you want liability protection without the paperwork load of a corporation, an LLC is usually the simplest fit for freelancers, small teams, and growing startups alike.",
  },
];

const formSteps: AccordionItem[] = [
  {
    q: "Name Your LLC",
    a: "Choose a name that's distinguishable from other registered businesses in your state and includes a required designator like 'LLC' or 'Limited Liability Company.'",
  },
  {
    q: "Provide an Address",
    a: "You'll need a physical business address for your formation documents — a home address, office, or virtual mailbox all work depending on your state's rules.",
  },
  {
    q: "Assign a Registered Agent",
    a: "Your registered agent accepts legal and state mail on behalf of your LLC during business hours. This can be you, a trusted contact, or a professional service.",
  },
  {
    q: "Provide Names and Addresses of LLC Members",
    a: "Most states require you to list the LLC's owners (members) and their addresses as part of the formation paperwork.",
  },
  {
    q: "State the Purpose of Your LLC",
    a: "A short statement describing what your business does. Many states accept a broad, general-purpose statement rather than a detailed description.",
  },
  {
    q: "File the Articles of Organization",
    a: "This is the official document that creates your LLC. File it with your state's business filing office along with the required fee, and your LLC is legally formed.",
  },
];

const llcTypes: AccordionItem[] = [
  { q: "Single-Member LLC", a: "An LLC owned by one person, taxed by default as a sole proprietorship while still offering liability protection." },
  { q: "Multiple-Member LLC", a: "Owned by two or more members, typically taxed as a partnership unless the members elect otherwise." },
  { q: "Member-Managed LLC", a: "All owners share in the day-to-day management and decision-making of the business." },
  { q: "Manager-Managed LLC", a: "Owners appoint one or more managers — who may or may not be members — to run daily operations." },
  { q: "Series LLC", a: "A single LLC that can create separate 'series' underneath it, each with its own assets and liability protection, available in select states." },
  { q: "Professional LLC", a: "Designed for licensed professionals such as accountants or architects, subject to extra state licensing rules." },
  { q: "Family LLC", a: "Typically used to hold and transfer family assets or businesses across generations with added liability protection." },
  { q: "L3C (Low-Profit Limited Liability Company)", a: "A hybrid structure for mission-driven businesses that prioritize a social goal while still operating for modest profit." },
];

const pros = [
  { title: "Limited Liability Protection", detail: "Your personal assets are generally shielded from business debts and lawsuits." },
  { title: "Pass-Through Taxation", detail: "Business income passes through to your personal return, avoiding corporate-level tax." },
  { title: "Flexible Management", detail: "Run the business yourself or appoint managers — an LLC adapts to how you want to operate." },
  { title: "No Ownership Restrictions", detail: "Partner with anyone, including foreign nationals, and add as many members as you need." },
  { title: "Minimal Compliance", detail: "Far fewer ongoing formalities than a corporation — often just an annual report." },
  { title: "Versatile Tax Status", detail: "Elect to be taxed as a sole proprietor, partnership, or S corp, whichever benefits your business most." },
];

const cons = [
  { title: "Franchise Taxes", detail: "Some states charge flat or income-based franchise fees on LLCs that sole proprietors don't pay." },
  { title: "Self-Employment Taxes", detail: "Active members typically owe self-employment tax on their share of the profits." },
  { title: "Investor Restrictions", detail: "LLCs can't issue stock, which can make them less attractive to venture investors." },
  { title: "Less Familiar Structure", detail: "Some banks, landlords, and partners are more used to working with corporations." },
];

const faqs: AccordionItem[] = [
  { q: "Do I Need to Form an LLC to Start a Business?", a: "No — you can operate as a sole proprietorship without any state filing. An LLC simply adds a legal separation between you and your business." },
  { q: "What Does It Cost to Own an LLC?", a: "Costs vary by state and typically include a one-time formation fee plus an annual or biennial report fee, which can range from under $50 to a few hundred dollars." },
  { q: "Is an LLC a Corporation?", a: "No. An LLC is its own distinct structure — it offers liability protection like a corporation but with the simpler tax treatment of a sole proprietorship or partnership." },
  { q: "How Do I File an Amendment for an LLC?", a: "You'll file an amendment form with your state's business filing office whenever key details change, such as your LLC's name, address, or members." },
  { q: "How Do LLC Taxes Work?", a: "By default, LLCs are 'pass-through' entities — profits and losses flow to the members' personal tax returns. Members can also elect corporate tax treatment if it benefits them." },
];

const pricingPlans = [
  {
    name: "Basic",
    price: "$0",
    note: "+ state fee",
    payment: "One-time payment",
    blurb: "Everything you need to get your LLC filed at the lowest possible price.",
    featured: false,
  },
  {
    name: "Standard",
    price: "$199",
    note: "+ state fee",
    payment: "One-time payment",
    blurb: "Comprehensive, fast-tracked filing to get your business started sooner.",
    featured: false,
  },
  {
    name: "Premium",
    price: "$299",
    note: "+ state fee",
    payment: "One-time payment",
    blurb: "Our full-service package with everything included for the best value.",
    featured: true,
  },
];

// ── Component ────────────────────────────────────────────────────────────
export default function LlcLandingPage() {
  const handleGetStarted = () => {
    // Navigate to pricing first, then continue to LLC Step 1.
    // This keeps the package/state selection consistent with OrderSummary.
    window.location.href = "/package-main?entity=LLC";
  };


  return (
    <NavigationWrapper>
      <div className="bg-white font-sans text-[#1a1a2e]">
        {/* ── HERO ── */}
        <section className="mx-auto max-w-[1200px] px-6 pt-10 md:px-16">

          <div className="mb-4 flex items-center gap-2 text-[13px] font-medium text-gray-600">
            <span>Excellent <strong>4.7</strong> out of 5</span>
            <StarRow />
            <span className="font-bold text-[#00B67A]">Trustpilot</span>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 className="mb-4 text-[38px] font-extrabold leading-[1.15] text-[#0d0d1a] md:text-[44px]">
                Start an LLC: Step-by-Step Guide
              </h1>
              <p className="mb-6 max-w-[520px] text-[15px] leading-relaxed text-gray-500">
                Welcome to your ultimate guide to forming an LLC, tailored specifically for aspiring
                startup founders. If you're feeling overwhelmed by the intricacies of business
                structure, you're not alone — let's demystify the process and help you understand why
                an LLC might be the perfect choice for your startup.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleGetStarted}
                  className="inline-block rounded-full bg-[#06B6D4] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#0891B2]"
                >
                  Get Started
                </button>

                <a
                  href="#reviews"
                  className="inline-block rounded-full border border-gray-300 px-7 py-3 text-sm font-bold text-[#0d0d1a] transition hover:border-[#06B6D4] hover:text-[#06B6D4]"
                >
                  See What Others Say About Incorp Bay
                </a>

              </div>
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950">
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  aria-label="Play video"
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur transition hover:bg-white/30"
                >
                  <PlayIcon />
                </button>
              </div>
              <div className="absolute bottom-4 left-5 right-5 text-lg font-extrabold uppercase leading-tight text-white md:text-2xl">
                How to Start a Business
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 border-y border-gray-100 py-4 text-center text-[13px] font-semibold">
            <span className="text-[#06B6D4]">Bootstrapped</span>
            <span className="text-gray-300">•</span>
            <span className="text-[#06B6D4]">Founder Led</span>
            <span className="text-gray-300">•</span>
            <span className="text-[#06B6D4]">Independently Owned Since 2004</span>
            <span className="text-gray-300">•</span>
            <span>With <span className="text-[#06B6D4]">Over 1,000,000 Entrepreneurs</span> Served!</span>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section id="pricing" className="mx-auto max-w-[1000px] px-6 py-16 md:px-16">
          <div className="rounded-3xl bg-[#f7f7f9] p-8 md:p-12">
            <h2 className="mb-3 text-center text-[30px] font-extrabold leading-tight">
              Launch Your LLC with Confidence
            </h2>
            <p className="mx-auto mb-8 max-w-[600px] text-center text-[15px] leading-relaxed text-gray-500">
              Starting your LLC is a crucial step in your entrepreneurial journey. With Incorp Bay, you
              get the guidance, support, and resources needed to make the process seamless and
              stress-free.
            </p>

            <div className="mx-auto mb-8 max-w-[640px] rounded-xl border border-gray-200 bg-white px-6 py-4 text-center text-[13px] text-gray-500">
              Pick the package that works best for your business format or period. Each package is
              eligible for <span className="font-semibold text-[#0d0d1a]">one free year of Registered Agent service</span> from Incorp Bay.
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl border p-6 ${
                    plan.featured
                      ? "border-[#06B6D4] bg-[#06B6D4] text-white shadow-lg"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <div
                    className={`mb-3 inline-block rounded-full px-3 py-1 text-[11px] font-bold ${
                      plan.featured ? "bg-white/20 text-white" : "bg-cyan-50 text-[#06B6D4]"
                    }`}
                  >
                    {plan.name}
                  </div>
                  <div className="mb-1 text-3xl font-extrabold">
                    {plan.price}
                    <span className="text-sm font-medium"> {plan.note}</span>
                  </div>
                  <div
                    className={`mb-4 text-xs ${plan.featured ? "text-white/80" : "text-gray-400"}`}
                  >
                    {plan.payment}
                  </div>
                  <p className={`text-[13px] leading-relaxed ${plan.featured ? "text-white/90" : "text-gray-500"}`}>
                    {plan.blurb}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button
                type="button"
                className="rounded-full bg-[#06B6D4] px-8 py-3 text-sm font-bold text-white transition hover:bg-[#0891B2]"
              >
                Compare Packages
              </button>
            </div>
          </div>
        </section>

        {/* ── COMPREHENSIVE GUIDE ── */}
        <section className="mx-auto max-w-[1000px] px-6 pb-16 text-center md:px-16">
          <p className="mb-2 text-[13px] font-bold uppercase tracking-wide text-[#06B6D4]">
            Key Questions and Answers
          </p>
          <h2 className="mb-10 text-[30px] font-extrabold">A Comprehensive Guide for Startups</h2>
          <div className="grid grid-cols-1 items-center gap-10 text-left md:grid-cols-2">
            <Accordion items={guideQuestions} />
            <div className="mx-auto flex h-[280px] w-[200px] items-center justify-center rounded-3xl bg-gradient-to-b from-gray-50 to-gray-100 shadow-inner">
              <div className="w-[160px] rounded-2xl bg-white p-3 shadow-md">
                <div className="mb-2 h-2 w-1/2 rounded bg-gray-200" />
                <div className="mb-1 h-2 w-full rounded bg-cyan-100" />
                <div className="h-2 w-2/3 rounded bg-gray-100" />
              </div>
            </div>
          </div>
        </section>

        {/* ── FORM MY LLC STEPS ── */}
        <section className="mx-auto max-w-[820px] px-6 pb-16 text-center md:px-16">
          <h2 className="mb-3 text-[30px] font-extrabold">Form My LLC</h2>
          <p className="mx-auto mb-8 max-w-[560px] text-[15px] leading-relaxed text-gray-500">
            Entrepreneurship is booming, and we're proud to help fuel it. Here's how you can start
            your LLC in six straightforward steps:
          </p>
          <Accordion items={formSteps.map((s, i) => ({ ...s, badge: i + 1 }))} />
        </section>

        {/* ── TYPES OF LLCs ── */}
        <section className="mx-auto max-w-[1000px] px-6 pb-16 text-center md:px-16">
          <h2 className="mb-3 text-[30px] font-extrabold">Types of LLCs</h2>
          <p className="mx-auto mb-10 max-w-[560px] text-[15px] leading-relaxed text-gray-500">
            Understanding the different types of LLCs can help you choose the right one for your
            startup.
          </p>
          <div className="grid grid-cols-1 items-center gap-10 text-left md:grid-cols-2">
            <Accordion items={llcTypes} />
            <div className="mx-auto flex h-[300px] w-[220px] items-center justify-center rounded-3xl bg-gray-50">
              <div className="w-[170px] rounded-2xl border border-gray-200 bg-white p-4 shadow-md">
                <div className="mb-3 flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#06B6D4] text-[10px] text-white">✓</span>
                  <div className="h-2 w-16 rounded bg-gray-200" />
                </div>
                <div className="mb-1.5 h-2 w-full rounded bg-gray-100" />
                <div className="mb-1.5 h-2 w-full rounded bg-gray-100" />
                <div className="h-2 w-2/3 rounded bg-gray-100" />
              </div>
            </div>
          </div>
        </section>

        {/* ── BENEFITS PROS / CONS ── */}
        <section className="mx-auto max-w-[1000px] px-6 pb-16 md:px-16">
          <div className="rounded-3xl border border-gray-200 bg-[#fafafa] p-8 md:p-12">
            <h2 className="mb-3 text-center text-[30px] font-extrabold">Benefits of an LLC</h2>
            <p className="mx-auto mb-10 max-w-[620px] text-center text-[15px] leading-relaxed text-gray-500">
              Every savvy entrepreneur knows that weighing the pros and cons is essential. Let's dive
              into why an LLC could be your startup's best friend.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-50 text-lg font-bold text-[#06B6D4]">+</span>
                    <h3 className="text-lg font-extrabold">Pros</h3>
                  </div>

                <ul className="flex flex-col gap-4">
                  {pros.map((p) => (
                    <li key={p.title}>
                      <div className="text-sm font-bold text-[#0d0d1a]">{p.title}</div>
                      <p className="text-[13px] leading-relaxed text-gray-500">{p.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <div className="mb-4 flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-lg font-bold text-gray-700">–</span>
                  <h3 className="text-lg font-extrabold">Cons</h3>
                </div>
                <ul className="flex flex-col gap-4">
                  {cons.map((c) => (
                    <li key={c.title}>
                      <div className="text-sm font-bold text-[#0d0d1a]">{c.title}</div>
                      <p className="text-[13px] leading-relaxed text-gray-500">{c.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── SUPPORT CALLOUT ── */}
        <section className="mx-auto max-w-[1000px] px-6 pb-16 md:px-16">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-md">
              <div className="mb-3 text-sm font-bold text-[#0d0d1a]">Form Your Business</div>
              <div className="mb-2 h-2 w-full rounded bg-gray-100" />
              <div className="mb-2 h-2 w-2/3 rounded bg-gray-100" />
              <div className="mb-4 h-2 w-1/2 rounded bg-gray-100" />
              <div className="rounded-lg bg-gray-50 px-3 py-2 text-xs font-semibold text-gray-500">
                Total Due Now: $0
              </div>
              <button className="mt-4 w-full rounded-full bg-gray-200 py-2.5 text-xs font-bold text-gray-500">
                Place an Order
              </button>
            </div>
            <div>
              <p className="mb-2 text-[13px] font-bold uppercase tracking-wide text-[#06B6D4]">
                What to Expect
              </p>
              <h3 className="mb-3 text-2xl font-extrabold leading-snug">
                From Incorp Bay Services and Support
              </h3>
              <p className="mb-5 text-[15px] leading-relaxed text-gray-500">
                Join the entrepreneurs who've chosen us to streamline their business formation
                process, backed by a team that actually knows the paperwork.
              </p>
              <a
                href="#pricing"
                className="inline-block rounded-full bg-[#06B6D4] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#0891B2]"
              >
                Form Your LLC Now
              </a>
            </div>
          </div>
        </section>

        {/* ── REVIEWS ── */}
        <section id="reviews" className="mx-auto max-w-[1000px] px-6 pb-16 md:px-16">
          <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="mb-3 text-[28px] font-extrabold leading-tight">
                See What Our Clients Have to Say…
              </h2>
              <button className="rounded-full bg-[#06B6D4] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#0891B2]">
                Check Out More Reviews
              </button>
            </div>
            <div className="flex gap-3">
              {["Michael", "Christine", "Priya"].map((name) => (
                <div key={name} className="w-[150px] rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
                  <div className="mb-1 text-xs font-bold text-[#0d0d1a]">{name}</div>
                  <StarRow />
                  <p className="mt-2 line-clamp-3 text-[11px] leading-snug text-gray-400">
                    Fully is amazing, made the whole process painless.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-cyan-100 to-cyan-50" />
            <div>
              <p className="mb-2 text-[13px] font-bold uppercase tracking-wide text-[#06B6D4]">
                Support
              </p>
              <p className="mb-5 text-[15px] leading-relaxed text-gray-500">
                These reviews are only a snapshot of the thousands of positive reviews we've
                received. We offer support from a team that's seen every kind of formation situation
                — from simple typos to unusual edge cases even state offices didn't anticipate.
              </p>
              <button className="rounded-full bg-[#06B6D4] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#0891B2]">
                Contact Incorp Bay Support
              </button>
            </div>
          </div>
        </section>

        {/* ── STATE-BY-STATE ── */}
        <section className="mx-auto max-w-[1000px] px-6 pb-16 md:px-16">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div>
              <p className="mb-2 text-[13px] font-bold uppercase tracking-wide text-[#06B6D4]">
                Formation and Compliance
              </p>
              <h3 className="mb-3 text-2xl font-extrabold leading-snug">State-by-State LLC Rules</h3>
              <p className="text-[15px] leading-relaxed text-gray-500">
                From filing costs to processing times, and from accepted name designations to
                compliance requirements, check out our comprehensive state-by-state guides to LLC
                formation and compliance.
              </p>
            </div>
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950" />
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="mx-auto max-w-[820px] px-6 pb-16 md:px-16">
          <h2 className="mb-8 text-[30px] font-extrabold">Frequently Asked Questions</h2>
          <Accordion items={faqs} />
        </section>

        {/* ── FINAL CTA ── */}
        <section className="mx-auto max-w-[900px] px-6 pb-24 md:px-16">
          <div className="relative overflow-hidden rounded-3xl bg-[#f7f7f9] px-8 py-14 text-center">
            <h2 className="mb-3 text-[30px] font-extrabold">
              Ready to Start <span className="text-[#06B6D4]">Your LLC?</span>
            </h2>
            <p className="mx-auto mb-6 max-w-[480px] text-[15px] leading-relaxed text-gray-500">
              Join the entrepreneurs who trust Incorp Bay to help launch and grow their businesses.
            </p>
            <a
              href="#pricing"
              className="inline-block rounded-full bg-[#06B6D4] px-8 py-3.5 text-sm font-bold text-white transition hover:bg-[#0891B2]"
            >
              Get Started
            </a>
          </div>
        </section>
      </div>
    </NavigationWrapper>
  );
}