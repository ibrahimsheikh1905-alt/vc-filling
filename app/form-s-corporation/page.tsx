"use client";

import { useEffect, useState } from "react";
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

const StarRow = ({ count = 5 }: { count?: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-[#00B67A]">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-4 w-4">
    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── Reusable accordion ──────────────────────────────────────────────────────
type QA = { q: string; a: string };

function Accordion({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y divide-gray-200">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="py-4">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <span className="text-[15px] font-semibold text-[#06B6D4]">{item.q}</span>
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
const painPoints = [
  {
    title: "Forming an S Corp Can Be Complicated and Expensive",
    text: "S Corp registration is a complex process as federal and state governments require you to meet various conditions, rules, and regulations. Your request can also be rejected because of one simple mistake.",
  },
  {
    title: "Save Money & Time With Incorp Bay’s Free S Corp Formation",
    text: "While some providers charge $149+, we don’t charge a thing. Streamlined processes keep our costs down, so we can pass the savings back to you. Form your S Corp with us for free and spend your valuable time and money on what really matters — growing your business.",
  },
];

const EXPERT_TRACK_ITEM_SPACING = 148;
const EXPERT_TRACK_ICON_CENTER = 32;

const filingChecklist = [
  { icon: "📄", label: "Choose a Name for Your S Corp" },
  { icon: "🧑‍💼", label: "Choose a Registered Agent" },
  { icon: "📋", label: "Prepare a S Corp Operating Agreement" },
  { icon: "🏛️", label: "Obtain a Certificate from the State" },
];

const registrationRows = [
  {
    label: "Free S Corp Filing",
    badge: "Free",
    text: "Low-cost, personalized business formation. Because when you’re starting a business, every dollar counts.",
  },
  {
    label: "Articles of Organization",
    text: "Every Incorp Bay formation package includes assistance drafting, preparing, and filing Articles of Organization.",
  },
  {
    label: "Business Contract Templates",
    text: "Ensure that all your contracts, documents, and forms are rock solid without the expense of hiring a lawyer.",
  },
  {
    label: "EIN Business Tax",
    text: "Included free in our Gold and Platinum formation packages. Get your EIN within 1 business day.",
  },
];

const officeSupportRows = [
  {
    label: "Free 1st-Year Registered Agent",
    badge: "Free",
    text: "Access your complete and easy-to-use Registered Agent service free for a full year ($149 annually after that).",
  },
  {
    label: "No Hidden Fees, No Contracts",
    text: "Get the best user experience and unparalleled value for money. Nobody gives you more for less.",
  },
  {
    label: "Personalized Dashboard",
    text: "Your business essentials all in one place. Access everything you need, whenever you need it.",
  },
  {
    label: "24/7 Friendly Customer Service",
    text: "Talk to a dedicated incorporation specialist and get lifetime customer support.",
  },
  {
    label: "On-Time Due Date Alerts",
    text: "Get text and email notifications, order updates, and free lifetime compliance alerts within your dashboard.",
  },
];

const businessDevRows = [
  {
    label: "Entrepreneurship Made Easy",
    text: "Get a Business Banking Account, domain name, and business email fast with the Platinum package.",
  },
  {
    label: "Customized Business Growth",
    text: "Get set up with additional business services from within your business dashboard.",
  },
  {
    label: "Tax Savings with IRS Form 2553",
    text: "Choose S Corp election so that your LLC is treated as an S Corp for tax filing purposes.",
  },
];

const steps = [
  {
    number: "01",
    title: "Choose Your Incorporation State",
    text: "Rules and regulations vary by state, so make sure you know the state in which you want your business to be located. You don’t have to choose the state you live in.",
  },
  {
    number: "02",
    title: "Choose the Package",
    text: "Whether you only need the basics or want more extensive business support, Incorp Bay has the ideal business formation package to help you start and grow your corporation.",
  },
  {
    number: "03",
    title: "Tell Us About Your S Corporation",
    text: "Complete an online order form with the details of your S Corp. You’ll need to supply information about the number of directors and information relating to stock, including the value of shares and number of shareholders.",
  },
];

const orderNextSteps = [
  {
    title: "Review Your Order Details",
    text: "Access your intuitive and easy-to-use business dashboard where you can review your order details and ensure everything is in order.",
  },
  {
    title: "Receive Your Documents",
    text: "Your filed articles and any additional documents and services are easily accessible from within your custom business dashboard. You’ll get notifications once they’re ready.",
  },
];

const faqs: QA[] = [
  { q: "Can I Start an S Corp for Free?", a: "Yes — our Basic package covers the core S Corp filing at no cost to you, though your state’s own filing fee still applies." },
  { q: "How Much Does Your Service Cost?", a: "Our Basic formation is free plus state fees. Standard and Premium packages add extra support and features for a flat one-time fee." },
  { q: "Are There Specific Rules For My State?", a: "Yes. Requirements like filing fees, directors, officers, and annual report deadlines vary by state, and our dashboard helps guide you through the rules that apply to your S Corp." },
  { q: "What’s My State’s Filing Fee for S Corps?", a: "State filing fees vary widely, generally from under $50 to a few hundred dollars depending on where you incorporate." },
];

// ── Component ────────────────────────────────────────────────────────────
export default function SCorpLandingPage() {
  const [expertProgress, setExpertProgress] = useState(0);
  const expertTotalSteps = painPoints.length;
  const expertTrackHeightPx = (expertTotalSteps - 1) * EXPERT_TRACK_ITEM_SPACING;

  useEffect(() => {
    let animationFrameId: number;
    let startTime: number | null = null;
    const duration = 7000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % duration) / duration;
      setExpertProgress(progress * 100);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const clampedExpertProgress = Math.min(expertProgress, 100);
  const expertFillHeightPx = (clampedExpertProgress / 100) * expertTrackHeightPx;
  const currentExpertStep = Math.min(
    Math.floor((clampedExpertProgress / 100) * expertTotalSteps) + 1,
    expertTotalSteps,
  );

  return (
    <NavigationWrapper>
      <div className="bg-white font-sans text-[#1a1a2e]">

        <style jsx>{`
          @keyframes expertTimelineFill {
            0% { height: 0%; }
            48% { height: 100%; }
            100% { height: 100%; }
          }
          .expert-timeline-fill {
            height: 0%;
            animation: expertTimelineFill 6s linear infinite;
          }
        `}</style>

        {/* ── HERO ── */}
        <section className="mx-auto max-w-[1200px] px-6 pt-10 md:px-16">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 className="mb-4 text-[38px] font-extrabold leading-[1.15] text-[#0d0d1a] md:text-[44px]">
                Start Your S-Corp for <span className="text-[#06B6D4]">$0</span> (+State Fees)
              </h1>
              <p className="mb-6 max-w-[480px] text-[15px] leading-relaxed text-gray-500">
                Stress-free S Corp formation to save money on your taxes as your business grows.
              </p>
              <a
                href="#pricing"
                className="inline-block rounded-full bg-[#06B6D4] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#0891B2]"
              >
                Start Now
              </a>
            </div>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900">
              <div className="flex h-full items-center justify-center text-center text-lg font-bold text-white/80">
                A Girl Working On Laptop Hero
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

        {/* ── EXPERT GUIDE ── */}
        <section className="mx-auto max-w-[1000px] px-6 py-16 md:px-16">
          <h2 className="mb-10 text-center text-[30px] font-extrabold">
            Effortless S Corp Formation with No Fees, No Hassles
          </h2>
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
            <div className="relative flex flex-col py-2">
              <div
                className="absolute left-8 z-0 w-1 -translate-x-1/2 overflow-hidden rounded-full bg-slate-100"
                style={{
                  top: `${EXPERT_TRACK_ICON_CENTER}px`,
                  height: `${expertTrackHeightPx}px`,
                }}
              >
                <div className="expert-timeline-fill w-full origin-top rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.65)]" />
              </div>

              {painPoints.map((p, i) => {
                const stepNumber = i + 1;
                const isPassed = i < currentExpertStep;
                const isCurrent = currentExpertStep === stepNumber;

                return (
                  <div
                    key={p.title}
                    className="relative z-10 flex min-h-[148px] gap-5 last:min-h-[64px]"
                  >
                    <span
                      className={`mt-0 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-[3px] text-2xl font-bold transition-all duration-300 ${
                        isPassed
                          ? "scale-105 border-cyan-500 bg-cyan-50 text-cyan-600 shadow-md"
                          : "border-slate-300 bg-white text-slate-400"
                      } ${isCurrent ? "ring-8 ring-cyan-100/70" : ""}`}
                    >
                      {i === 0 ? "!" : "⏱"}
                    </span>
                    <div className="pt-2">
                      <div
                        className={`mb-1 text-sm font-bold transition-colors duration-300 ${
                          isCurrent ? "text-cyan-500" : isPassed ? "text-slate-900" : "text-slate-400"
                        }`}
                      >
                        {p.title}
                      </div>
                      <p className="text-[13px] leading-relaxed text-gray-500">{p.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="rounded-2xl bg-[#f7f7f9] p-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-wide text-[#06B6D4]">Info 2 Item2</p>
              <div className="mb-4 flex items-center gap-2 rounded-lg bg-[#0d0d1a] px-4 py-3 text-xs font-semibold text-white">
                📄 File Organizational Paperwork
              </div>
              <ul className="flex flex-col gap-3">
                {filingChecklist.map((item) => (
                  <li key={item.label} className="flex items-center gap-3 text-[13px] font-medium text-gray-700">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-sm shadow-sm">
                      {item.icon}
                    </span>
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── BENEFITS ── */}
        <section id="pricing" className="mx-auto max-w-[1000px] px-6 pb-16 md:px-16">
          <div className="rounded-3xl border border-gray-200 bg-[#fafafa] p-8 text-center md:p-12">
            <h2 className="mb-3 text-[28px] font-extrabold leading-tight">
              Discover the Benefits of Forming Your S Corp with Incorp Bay
            </h2>
            <p className="mx-auto mb-6 max-w-[600px] text-[15px] leading-relaxed text-gray-500">
              Since 2004, we’ve helped 1,000,000+ entrepreneurs and small business owners form and grow their businesses. Get industry-leading support and a host of other benefits to start your business with confidence.
            </p>
            <button className="mb-10 rounded-full bg-[#06B6D4] px-8 py-3 text-sm font-bold text-white transition hover:bg-[#0891B2]">
              FORM YOUR S CORP NOW
            </button>
            <div className="mx-auto flex max-w-[720px] items-center gap-3 rounded-2xl bg-white p-4 shadow-md">
              <span className="sr-only">Incorp Bay Dashboard KV S-Corp</span>
              <div className="h-32 w-1/3 rounded-xl bg-gray-100" />
              <div className="flex-1 rounded-xl bg-gray-50 p-4 text-left">
                <div className="mb-2 h-2 w-1/2 rounded bg-gray-200" />
                <div className="mb-2 h-2 w-full rounded bg-gray-100" />
                <div className="h-2 w-2/3 rounded bg-gray-100" />
              </div>
              <div className="h-32 w-1/4 rounded-xl bg-cyan-50" />
            </div>
          </div>
        </section>

        {/* ── FEATURE TABLES ── */}
        <section className="mx-auto max-w-[1000px] px-6 pb-16 md:px-16">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 md:p-12">
            <FeatureBlock title="Registration and Formalities" rows={registrationRows} />
            <div className="my-10 h-px bg-gray-200" />
            <FeatureBlock title="Office Support and Administrative Assistance" rows={officeSupportRows} />
            <div className="my-10 h-px bg-gray-200" />
            <FeatureBlock title="Business Development and Management" rows={businessDevRows} />
          </div>
        </section>

        {/* ── 3 STEPS ── */}
        <section className="mx-auto max-w-[1000px] px-6 pb-16 md:px-16">
          <h2 className="mb-10 text-center text-[28px] font-extrabold leading-tight">
            How to Form an S Corporation with Incorp Bay in 3 Simple Steps
          </h2>
          <div className="flex flex-col gap-6">
            {steps.map((s) => (
              <div key={s.number} className="grid grid-cols-1 items-center gap-6 rounded-2xl border border-gray-200 bg-[#fafafa] p-6 md:grid-cols-[1fr_260px]">
                <div>
                  <div className="mb-2 text-sm font-extrabold text-[#06B6D4]">{s.number}</div>
                  <h3 className="mb-2 text-lg font-bold text-[#0d0d1a]">{s.title}</h3>
                  <p className="text-[13px] leading-relaxed text-gray-500">{s.text}</p>
                </div>
                <div className="h-28 w-full rounded-xl bg-white shadow-sm" />
              </div>
            ))}
          </div>
        </section>

        {/* ── WHAT'S NEXT ── */}
        <section className="mx-auto max-w-[1000px] px-6 pb-16 md:px-16">
          <div className="rounded-3xl border border-gray-200 bg-[#fafafa] p-8 text-center md:p-12">
            <h2 className="mb-8 text-[28px] font-extrabold">What Happens After You Place Your Order?</h2>
            <div className="mx-auto mb-8 grid max-w-[640px] grid-cols-1 gap-4 text-left sm:grid-cols-2">
              {orderNextSteps.map((s) => (
                <div key={s.title} className="rounded-xl border border-gray-200 bg-white p-5">
                  <div className="mb-1 text-sm font-bold text-[#06B6D4]">{s.title}</div>
                  <p className="text-[13px] leading-relaxed text-gray-500">{s.text}</p>
                </div>
              ))}
            </div>
            <button className="mb-10 rounded-full bg-[#06B6D4] px-8 py-3 text-sm font-bold text-white transition hover:bg-[#0891B2]">
              FORM YOUR S CORP
            </button>
            <div className="mx-auto grid max-w-[700px] grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="h-32 rounded-xl bg-white shadow-sm" />
              <div className="h-32 rounded-xl bg-white shadow-sm" />
              <div className="h-32 rounded-xl bg-white shadow-sm" />
            </div>
          </div>
        </section>

        {/* ── REVIEWS ── */}
        <section className="mx-auto max-w-[1000px] px-6 pb-16 md:px-16">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div>
              <div className="mb-3 flex items-center gap-2 text-[13px] font-medium text-gray-600">
                <span>Excellent <strong>4.7</strong> out of 5</span>
                <StarRow />
              </div>
              <h2 className="mb-4 text-[26px] font-extrabold leading-tight">
                See What Our Clients Have to Say…
              </h2>
              <button className="rounded-full bg-[#06B6D4] px-6 py-2.5 text-sm font-bold text-white transition hover:bg-[#0891B2]">
                CHECK OUT MORE REVIEWS
              </button>
            </div>
            <div className="w-[220px] justify-self-end rounded-xl border border-gray-200 bg-white p-4 shadow-md">
              <div className="mb-1 text-xs font-bold text-[#0d0d1a]">William Lopez</div>
              <StarRow />
              <p className="mt-2 text-[11px] leading-snug text-gray-400">
                Gus is the man. He helped me out and answered all my questions, so thanks to him and everyone else that was involved.
              </p>
              <div className="mt-2 flex items-center gap-1 text-[10px] font-bold text-[#00B67A]">
                ★ Trustpilot
              </div>
            </div>
          </div>
        </section>

        {/* ── STAT BANNER ── */}
        <section className="mx-auto max-w-[900px] px-6 pb-16 md:px-16">
          <div className="rounded-3xl bg-[#f7f7f9] px-8 py-14 text-center">
            <p className="mb-2 text-[13px] font-bold uppercase tracking-wide text-[#06B6D4]">
              Start. Manage. Grow.
            </p>
            <h2 className="mb-2 text-[28px] font-extrabold leading-tight">
              1 Million Entrepreneurs Across 50 States Choose Incorp Bay
            </h2>
            <p className="mb-6 text-[14px] text-gray-500">
              Incorp Bay delivers the tools, guidance, and simplicity you need to succeed.
            </p>
            <button className="rounded-full bg-[#06B6D4] px-8 py-3 text-sm font-bold text-white transition hover:bg-[#0891B2]">
              Get Started
            </button>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="mx-auto max-w-[1000px] px-6 pb-16 md:px-16">
          <h2 className="mb-8 text-[28px] font-extrabold leading-tight">
            Common Questions About Starting an S Corporation
          </h2>

          <Accordion items={faqs} />

          <div className="mt-10 overflow-hidden rounded-3xl border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-cyan-100 p-8 shadow-lg shadow-cyan-500/10">
            <h3 className="text-3xl font-extrabold leading-tight text-slate-900">
              FORM YOUR S CORP For <span className="text-[#06B6D4]">$0 (+ State Fees)</span>
            </h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-gray-500">
              Kickstart Your Dream Business with Incorp Bay Now.
            </p>
            <a
              href="#pricing"
              className="mt-8 inline-block rounded-full bg-[#06B6D4] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#0891B2]"
            >
              Start Now
            </a>
          </div>
        </section>
      </div>
    </NavigationWrapper>
  );
}

// ── Feature block: label + description rows ─────────────────────────────
function FeatureBlock({
  title,
  rows,
}: {
  title: string;
  rows: { label: string; text: string; badge?: string }[];
}) {
  return (
    <div>
      <h3 className="mb-5 text-lg font-extrabold text-[#0d0d1a]">{title}</h3>
      <div className="flex flex-col gap-5">
        {rows.map((row) => (
          <div key={row.label} className="grid grid-cols-1 gap-1 sm:grid-cols-[220px_1fr] sm:gap-6">
            <div className="flex items-start gap-2 text-sm font-bold text-[#0d0d1a]">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#06B6D4] text-white">
                <CheckIcon />
              </span>
              {row.label}
              {row.badge && (
                <span className="ml-1 rounded-full bg-cyan-50 px-2 py-0.5 text-[10px] font-bold text-[#06B6D4]">
                  {row.badge}
                </span>
              )}
            </div>
            <p className="text-[13px] leading-relaxed text-gray-500">{row.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}