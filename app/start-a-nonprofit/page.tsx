"use client";

import { useState } from "react";
import NavigationWrapper from "@/components/NavigationWrapper";

const StarRow = () => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-[#00B67A]">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const ChevronDown = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
  >
    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-4 w-4">
    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" className="h-7 w-7">
    <path d="M8 5v14l11-7z" />
  </svg>
);

type QA = { q: string; a: string };

function Accordion({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-slate-200">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q} className="py-5">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-5 text-left"
            >
              <span className="text-[15px] font-semibold text-slate-950">{item.q}</span>
              <ChevronDown open={isOpen} />
            </button>

            {isOpen && (
              <p className="mt-3 text-sm leading-7 text-slate-500">{item.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

const painPoints = [
  {
    title: "Nonprofit Formation Can Be Intimidating, Time Consuming and Costly",
    text: "Filing for nonprofits is hard. Each nonprofit has different goals, structures and regulations that need to be followed — making it difficult to get 501(c)(3) tax-exempt status.",
    icon: "!",
  },
  {
    title: "Save Time, Money & Stress with Incorp Bay’s $0 Nonprofit Formation",
    text: "Some providers charge $300+ just to start. We offer truly free nonprofit formation. Streamlined processes keep costs down so you can focus on what matters most — your mission.",
    icon: "⏱",
  },
];

const filingRows = [
  {
    label: "Free Nonprofit Filing",
    badge: "Free",
    text: "Low-cost, personalized business formation. Because when you’re starting a business, every dollar counts.",
  },
  {
    label: "Articles of Organization",
    text: "Every Incorp Bay formation package includes assistance drafting, preparing and filing Articles of Organization.",
  },
  {
    label: "Business Contract Templates",
    text: "Ensure that all your contracts, documents and forms are rock solid without the expense of hiring a lawyer.",
  },
  {
    label: "EIN Business Tax",
    text: "Included free in our Gold and Platinum formation packages. Get your EIN within 1 business day.",
  },
];

const supportRows = [
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
    label: "Friendly Customer Service",
    text: "Talk to a dedicated incorporation specialist, not a salesperson, and get lifetime customer support.",
  },
  {
    label: "On-Time Due Date Alerts",
    text: "Get text and email notifications, order updates and free lifetime compliance alerts within your dashboard.",
  },
];

const businessRows = [
  {
    label: "Entrepreneurship Made Easy",
    text: "Get a Business Banking Account, domain name and business email fast with the Platinum package.",
  },
  {
    label: "Customized Business Growth",
    text: "Get set up with additional business services from within your business dashboard.",
  },
];

const steps = [
  {
    number: "01",
    title: "Choose the Right Type of Nonprofit Organization",
    text: "There are four main types of nonprofits. Each type has slightly different goals and corporation structures, but all are tax-exempt. They include Public Charities, 501(c)(3) Organizations, Social Advocacy Organizations, Foundations and Trade & Professional Organizations.",
    visual: "LLC • C Corporation • Non Profit • S Corporation",
  },
  {
    number: "02",
    title: "Choose the Package that Meets Your Needs",
    text: "Whether you only need the basics or want more robust business support, Incorp Bay has the ideal formation package to help you start and grow a nonprofit organization.",
    visual: "PREMIUM • Full-service formation",
  },
  {
    number: "03",
    title: "Tell Us About Your Nonprofit",
    text: "Fill in the simple online order form and provide us with the details of your nonprofit and the services that you need, so we can prepare and file your incorporation documents.",
    visual: "ACME • Submit",
  },
];

const afterOrder = [
  {
    title: "Review Your Order Details",
    text: "Access your intuitive and easy-to-use business dashboard where you can review your order details and ensure everything is in order.",
  },
  {
    title: "Receive Your Documents",
    text: "Your filed articles and any additional documents and services are easily accessible from within your custom business dashboard. You’ll get notifications once they’re ready.",
  },
];

const faqs = [
  { q: "Can I Form a Nonprofit For Free?", a: "Yes. With Incorp Bay, your nonprofit formation can start at $0 plus state fees. Optional upgrades are available if you want extra support and services." },
  { q: "How Much Does Your Service Cost?", a: "The Basic package starts at $0 plus state fees. Additional packages and add-ons are clearly shown before checkout." },
  { q: "Which Type of Nonprofit Organization is Right for Me?", a: "That depends on your mission and activities. Common nonprofit structures include public charities, foundations, social advocacy organizations and professional associations." },
  { q: "Are There Specific Rules For My State?", a: "Yes. Nonprofit rules, filing fees and requirements vary by state. Incorp Bay helps guide you through the requirements for your filing state." },
  { q: "What’s My State’s Filing Fee for Nonprofit Organizations?", a: "State filing fees vary widely and depend on where you file. Your exact fee is shown during the order process." },
  { q: "Are There any Hidden Costs?", a: "No. Pricing is shown upfront. Optional services are clearly presented before you place your order." },
  { q: "How Long Does It Take to Form a Nonprofit Online?", a: "Formation timing depends on the state processing speed. Many states process filings in a few business days, while others take longer." },
  { q: "Do You Have Any Guides or Resources for Getting Started?", a: "Yes. Incorp Bay provides nonprofit formation resources, guides and support to help you get started confidently." },
  { q: "Do You Provide Hands-On Support?", a: "Yes. You get real support from knowledgeable specialists who can help with your formation process." },
];

const reviews = [
  {
    name: "Md. Shafiqul Islam",
    text: "Oliver O. was amazing. Oliver helped resolving Registered Agent issues.",
  },
  {
    name: "Isabel Cárdenas",
    text: "I had a great experience. I’m so glad that Roy was able to help me promptly with all my questions and concerns.",
  },
  {
    name: "William Lopez",
    text: "Gus helped me out and answered all my questions. Thanks to him and everyone else involved.",
  },
];

const TRACK_SPACING = 150;
const ICON_CENTER = 16;

function ExpertGuide() {
  return (
    <section className="mx-auto max-w-[1000px] px-6 py-16 md:px-16">
      <style jsx>{`
        @keyframes nonprofitLineFill {
          0% {
            transform: scaleY(0);
          }
          55% {
            transform: scaleY(1);
          }
          100% {
            transform: scaleY(1);
          }
        }

        .nonprofit-line-fill {
          transform-origin: top;
          animation: nonprofitLineFill 4.8s ease-in-out infinite;
        }
      `}</style>

      <h2 className="mb-12 text-center text-[30px] font-extrabold leading-tight text-slate-950">
        Incorp Bay Is Your Expert Guide for
        <br />
        Formation
      </h2>

      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="relative">
          {/* Grey line: starts from center of first icon and ends at center of second icon */}
          <div className="absolute left-4 top-4 h-[150px] w-1 -translate-x-1/2 overflow-hidden rounded-full bg-slate-100">
            <div className="nonprofit-line-fill h-full w-full rounded-full bg-cyan-500 shadow-[0_0_14px_rgba(6,182,212,0.75)]" />
          </div>

          {painPoints.map((item, index) => (
            <div
              key={item.title}
              className={`relative z-10 flex gap-4 ${index === 0 ? "min-h-[150px]" : ""}`}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-cyan-500 bg-cyan-50 text-sm font-bold text-cyan-600 shadow-md ring-4 ring-cyan-100">
                {item.icon}
              </span>

              <div>
                <h3 className="text-sm font-extrabold leading-snug text-cyan-500">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-500">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-[360px] rounded-3xl bg-slate-50 p-6 shadow-sm">
            <div className="absolute -right-4 top-8 h-32 w-24 rounded-2xl bg-white shadow-md" />
            <div className="relative rounded-2xl bg-white p-6 shadow-xl">
              <div className="mb-4 flex items-center justify-between text-xs font-bold text-slate-700">
                <span>Form Your Business</span>
                <span className="text-cyan-500">Incorp Bay</span>
              </div>

              {["Business Name", "Entity Type", "Country"].map((item) => (
                <div key={item} className="mb-3">
                  <p className="mb-1 text-[10px] font-semibold text-slate-400">{item}</p>
                  <div className="h-8 rounded-full bg-slate-100" />
                </div>
              ))}

              <div className="mb-4 flex gap-2">
                {["LLC", "501(c)(3)", "501(c)(4)", "NPO"].map((item) => (
                  <span
                    key={item}
                    className={`rounded-full px-3 py-1 text-[10px] font-bold ${
                      item === "501(c)(3)" ? "bg-cyan-500 text-white" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mb-3 flex items-center justify-between rounded-xl bg-cyan-50 px-4 py-3">
                <span className="text-xs font-bold text-slate-700">Total Due Now</span>
                <span className="text-lg font-extrabold text-cyan-500">$0</span>
              </div>

              <button className="w-full rounded-full bg-cyan-500 py-3 text-xs font-bold uppercase text-white shadow-lg shadow-cyan-500/25">
                Place an Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureBlock({
  title,
  rows,
}: {
  title: string;
  rows: { label: string; text: string; badge?: string }[];
}) {
  return (
    <div className="grid grid-cols-1 gap-6 border-b border-slate-200 py-10 last:border-b-0 md:grid-cols-[190px_1fr]">
      <h3 className="text-sm font-extrabold leading-tight text-slate-950">{title}</h3>
      <div className="space-y-8">
        {rows.map((row) => (
          <div key={row.label} className="grid grid-cols-1 gap-2 md:grid-cols-[220px_1fr]">
            <div className="flex items-start gap-2 text-sm font-bold text-slate-950">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-white">
                <CheckIcon />
              </span>
              <span>
                {row.label}
                {row.badge && (
                  <span className="ml-2 rounded-full bg-cyan-50 px-2 py-0.5 text-[10px] font-bold text-cyan-600">
                    {row.badge}
                  </span>
                )}
              </span>
            </div>
            <p className="text-[13px] leading-relaxed text-slate-500">{row.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function NonprofitLandingPage() {
  return (
    <NavigationWrapper>
      <main className="bg-white font-sans text-slate-950">
        <section className="mx-auto max-w-[1200px] px-6 pt-10 md:px-16">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-2 text-[13px] font-medium text-slate-600">
                <span>Excellent <strong>4.7</strong> out of 5</span>
                <StarRow />
                <span className="font-bold text-[#00B67A]">Trustpilot</span>
              </div>

              <h1 className="mb-4 text-[38px] font-extrabold leading-[1.15] text-slate-950 md:text-[44px]">
                Start a Nonprofit
                <br />
                with <span className="text-cyan-500">Incorp Bay</span>
              </h1>

              <p className="mb-6 max-w-[470px] text-[15px] leading-relaxed text-slate-500">
                Simple, stress-free and personalized nonprofit formation for people driven to do good.
              </p>

              <a
                href="#pricing"
                className="inline-block rounded-full bg-cyan-500 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-600"
              >
                START NOW
              </a>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-700 to-slate-950 shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-36 w-36 rounded-full bg-cyan-500/20 blur-2xl" />
              </div>
              <div className="relative flex h-full items-center justify-center text-center text-lg font-bold text-white/80">
                Nonprofit Founder Hero
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 border-y border-slate-100 py-4 text-center text-[13px] font-semibold">
            <span>Bootstrapped, Founder Led, Independently Owned</span>
            <span className="rounded bg-cyan-50 px-2 py-0.5 font-extrabold text-cyan-600">Since 2004</span>
            <span>With</span>
            <span className="rounded bg-cyan-50 px-2 py-0.5 font-extrabold text-cyan-600">Over 1,000,000 Entrepreneurs</span>
            <span>Served!</span>
          </div>
        </section>

        <ExpertGuide />

        <section id="pricing" className="mx-auto max-w-[1000px] px-6 pb-16 md:px-16">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm md:p-12">
            <h2 className="mb-3 text-[30px] font-extrabold leading-tight">
              Discover the Benefits of Forming a
              <br />
              Nonprofit With <span className="text-cyan-500">Incorp Bay</span>
            </h2>
            <p className="mx-auto mb-8 max-w-[620px] text-[15px] leading-relaxed text-slate-500">
              Since 2004, we’ve helped 1,000,000+ entrepreneurs and small business owners form and grow their businesses.
              Get industry-leading support and a host of other benefits to start your business with confidence.
            </p>

            <button className="rounded-full bg-cyan-500 px-8 py-3 text-sm font-bold uppercase text-white shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-600">
              FORM YOUR NONPROFIT NOW
            </button>

            <div className="mx-auto mt-12 max-w-[760px] rounded-2xl bg-slate-50 p-5">
              <div className="rounded-xl bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center gap-3 text-sm font-bold text-slate-800">
                  <span className="h-8 w-8 rounded-full bg-cyan-500" />
                  Creating a website for your business can be easier than you think.
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-24 rounded-xl bg-slate-100" />
                  <div className="h-24 rounded-xl bg-cyan-50" />
                  <div className="h-24 rounded-xl bg-slate-100" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1000px] px-6 pb-16 md:px-16">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12">
            <FeatureBlock title="Registration and formalities" rows={filingRows} />
            <FeatureBlock title="Office support and administrative assistance" rows={supportRows} />
            <FeatureBlock title="Business development and management" rows={businessRows} />
          </div>
        </section>

        <section className="mx-auto max-w-[1000px] px-6 pb-16 md:px-16">
          <h2 className="mb-10 text-[30px] font-extrabold leading-tight">
            How to Form a Nonprofit with Incorp Bay in 3 Simple Steps
          </h2>

          <div className="space-y-5">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="grid grid-cols-1 items-center gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[1fr_300px]"
              >
                <div>
                  <div className="mb-2 text-sm font-extrabold text-cyan-500">{step.number}</div>
                  <h3 className="mb-2 text-lg font-bold text-slate-950">{step.title}</h3>
                  <p className="text-[13px] leading-relaxed text-slate-500">{step.text}</p>
                </div>

                <div className="flex h-36 items-center justify-center rounded-xl bg-slate-50 p-5">
                  <div className="rounded-xl bg-white px-6 py-4 text-center text-sm font-extrabold text-slate-700 shadow-lg">
                    {step.visual}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1000px] px-6 pb-16 md:px-16">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center md:p-12">
            <h2 className="mb-8 text-[30px] font-extrabold leading-tight">
              What Happens After You Place Your
              <br />
              Order?
            </h2>

            <div className="mx-auto mb-8 grid max-w-[650px] grid-cols-1 gap-4 md:grid-cols-2">
              {afterOrder.map((item) => (
                <div key={item.title} className="rounded-xl bg-white p-5 shadow-sm">
                  <div className="mx-auto mb-2 flex h-5 w-5 items-center justify-center rounded-full bg-cyan-50 text-cyan-500">
                    <CheckIcon />
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-[12px] leading-relaxed text-slate-500">{item.text}</p>
                </div>
              ))}
            </div>

            <button className="rounded-full bg-cyan-500 px-8 py-3 text-xs font-bold uppercase text-white shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-600">
              FORM YOUR NONPROFIT
            </button>

            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="h-32 rounded-xl bg-white shadow-sm" />
              <div className="h-32 rounded-xl bg-white shadow-sm" />
              <div className="h-32 rounded-xl bg-white shadow-sm" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1000px] px-6 pb-16 md:px-16">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[280px_1fr]">
            <div>
              <div className="mb-3 flex items-center gap-2 text-[13px] font-medium text-slate-600">
                <span>Excellent <strong>4.7</strong> out of 5</span>
                <StarRow />
              </div>
              <h2 className="mb-5 text-[28px] font-extrabold leading-tight">
                See What Our
                <br />
                Clients Have to Say…
              </h2>
              <button className="rounded-full bg-cyan-500 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-600">
                CHECK OUT MORE REVIEWS
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {reviews.map((review) => (
                <div key={review.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-md">
                  <div className="mb-2 text-sm font-bold text-slate-950">{review.name}</div>
                  <StarRow />
                  <p className="mt-3 text-[12px] leading-relaxed text-slate-500">{review.text}</p>
                  <div className="mt-4 text-[11px] font-bold text-[#00B67A]">★ Trustpilot</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[900px] px-6 pb-16 md:px-16">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-100 bg-cyan-50/40 px-8 py-14 text-center">
            <div className="pointer-events-none absolute inset-0 opacity-20">
              <svg viewBox="0 0 900 240" className="h-full w-full">
                <path d="M0 220 C160 60 300 260 470 80 C610 -60 750 90 900 20" fill="none" stroke="#06B6D4" strokeWidth="1" />
                <path d="M0 50 C130 120 300 0 480 120 C650 240 750 120 900 180" fill="none" stroke="#06B6D4" strokeWidth="1" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-cyan-500 shadow-sm">
                <CheckIcon />
              </div>

              <p className="mb-2 text-[13px] font-bold text-cyan-500">Start. Manage. Grow.</p>
              <h2 className="mx-auto max-w-[520px] text-[30px] font-extrabold leading-tight">
                Chosen by <span className="text-cyan-500">1,000,000+</span>
                <br />
                entrepreneurs across all 50 states
              </h2>
              <p className="mt-3 text-[13px] text-slate-500">
                Join more than 1,000,000 businesses that trust Incorp Bay.
              </p>
              <button className="mt-7 rounded-full bg-cyan-500 px-7 py-3 text-xs font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-600">
                GET STARTED
              </button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[900px] px-6 pb-16 md:px-16">
          <h2 className="mb-8 text-[30px] font-extrabold leading-tight">
            Common Questions About Forming
            <br />
            a Nonprofit Organization
          </h2>
          <Accordion items={faqs} />
        </section>

        <section className="mx-auto max-w-[900px] px-6 pb-24 md:px-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 px-8 py-14 text-white shadow-2xl">
            <div className="absolute inset-0 bg-cyan-500/20" />
            <div className="relative z-10 max-w-sm">
              <h2 className="text-[32px] font-extrabold leading-tight">
                Form Your
                <br />
                Nonprofit For $0
              </h2>
              <p className="mt-3 text-sm text-white/80">
                Kickstart Your Dream Business with Incorp Bay Now.
              </p>
              <button className="mt-7 rounded-full bg-cyan-500 px-7 py-3 text-xs font-bold uppercase text-white transition hover:bg-cyan-600">
                START NOW
              </button>
            </div>
          </div>
        </section>
      </main>
    </NavigationWrapper>
  );
}
