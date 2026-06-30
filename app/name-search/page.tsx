"use client";

import { useState } from "react";
import NavigationWrapper from "@/components/NavigationWrapper";

const ChevronDown = ({ open }: { open?: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className={`h-[18px] w-[18px] shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const StarFilled = () => (
  <svg viewBox="0 0 24 24" className="h-[15px] w-[15px] fill-amber-400">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const StarTeal = () => (
  <svg viewBox="0 0 24 24" className="h-[15px] w-[15px] fill-[#00B67A]">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const FAQS = [
  {
    q: "Do I Need to Have a Distinctive Name for My Business?",
    a: "Yes, most states require that your business name be distinguishable from other registered entities in the same state. This prevents confusion between businesses and protects consumers.",
  },
  {
    q: "Are There Rules on What Makes a Business Name Unique?",
    a: "Generally, your name can't be identical or deceptively similar to an existing registered business name. Adding a different word, abbreviation, or punctuation usually isn't enough to make a name distinguishable.",
  },
  {
    q: "How Do I Lookup My Proposed LLC or Corporation Business Name?",
    a: "You can use our free Business Name Checker tool above. Simply enter your desired name, choose your entity type and state, and we'll let you know if it's available.",
  },
  {
    q: "What Happens If I Don't Want to Do Business Under My Legal Entity Name?",
    a: "You can register a DBA (Doing Business As), also known as a trade name or fictitious name, which allows you to operate under a different name than your legal entity name.",
  },
  {
    q: "How Can I Change My Legal Business Name?",
    a: "To change your legal business name, you'll typically need to file an amendment with your state's Secretary of State office and update your name with the IRS, banks, and other relevant institutions.",
  },
  {
    q: "Can I Protect the Name of My LLC or Corporation?",
    a: "Registering your business name with the state offers some protection within that state. For broader, nationwide protection, you may want to consider filing for a trademark with the USPTO.",
  },
];

const entityTypes = ["LLC", "Corporation", "Nonprofit", "DBA"];
const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const inputClass =
  "w-full rounded-full border border-slate-200 bg-white px-5 py-3.5 text-sm text-slate-800 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100";

export default function BusinessNameCheckerPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [agree, setAgree] = useState(false);
  const [form, setForm] = useState({
    businessName: "",
    entityType: "",
    state: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const update =
    (key: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <NavigationWrapper>
      <div className="min-h-screen bg-white font-sans text-[#1a1a2e]">
        <section className="mx-auto max-w-4xl px-6 pt-16 text-center">
          <h1 className="text-4xl font-black tracking-tight text-[#0d0d1a] md:text-5xl">
            Business Name Checker
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-600">
            How do you come up with the perfect business name AND be certain
            it&apos;s not already taken by another business in your state?
            Simple! Incorp Bay&apos;s Name Search Tool. There&apos;s no easier
            way to find out if the LLC or corporation name you&apos;re after is
            available.
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-12 md:pb-20">
          <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white px-6 py-10 shadow-2xl shadow-slate-200/70 md:px-12">
            <div className="absolute right-0 top-0 rounded-bl-3xl bg-slate-50 px-7 py-4">
              <span className="text-base font-black italic text-[#0d0d1a]">
                incorp bay
              </span>
            </div>

            <h2 className="mb-6 text-lg font-bold text-[#0d0d1a]">
              Enter Your Business Name Information
            </h2>

            <div className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-[1.4fr_1fr_1fr]">
              <input
                className={inputClass}
                placeholder="Request Business Name*"
                value={form.businessName}
                onChange={update("businessName")}
              />
              <select
                className={`${inputClass} ${form.entityType ? "text-slate-800" : "text-slate-400"}`}
                value={form.entityType}
                onChange={update("entityType")}
              >
                <option value="">Entity Type</option>
                {entityTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <select
                className={`${inputClass} ${form.state ? "text-slate-800" : "text-slate-400"}`}
                value={form.state}
                onChange={update("state")}
              >
                <option value="">Select State</option>
                {states.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <h2 className="mb-5 text-lg font-bold text-[#0d0d1a]">
              Contact Information
            </h2>
            <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              <input
                className={inputClass}
                placeholder="First Name"
                value={form.firstName}
                onChange={update("firstName")}
              />
              <input
                className={inputClass}
                placeholder="Last Name"
                value={form.lastName}
                onChange={update("lastName")}
              />
              <input
                className={inputClass}
                placeholder="Email"
                value={form.email}
                onChange={update("email")}
              />
            </div>

            <label className="mb-8 flex cursor-pointer items-center gap-3 text-sm leading-relaxed text-slate-600">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="h-5 w-5 accent-cyan-500"
              />
              <span>
                I agree to{" "}
                <a
                  href="#"
                  className="font-semibold text-cyan-600 no-underline"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="font-semibold text-cyan-600 no-underline"
                >
                  Privacy Policy
                </a>
                . *
              </span>
            </label>

            <div className="text-center">
              <button className="rounded-full bg-cyan-500 px-10 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-600">
                Check Name Availability
              </button>
            </div>
          </div>
        </section>

        <div className="bg-slate-50 px-5 py-5 text-center text-sm font-semibold text-slate-700 md:text-base">
          Bootstrapped, Founder Led, Independently Owned{" "}
          <span className="rounded bg-cyan-100 px-2.5 py-1 font-bold text-cyan-700">
            Since 2004
          </span>{" "}
          With{" "}
          <span className="rounded bg-cyan-100 px-2.5 py-1 font-bold text-cyan-700">
            Over 1,000,000 Entrepreneurs
          </span>{" "}
          Served!
        </div>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-16">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-bold text-cyan-600">
                Your Choice Matters
              </p>
              <h2 className="text-3xl font-black leading-tight text-[#0d0d1a] md:text-4xl">
                Importance of a Great Business Name
              </h2>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-600">
                Your business name significantly impacts how customers perceive
                your brand. A short, fitting, and distinctive name demonstrates
                confidence, defines your business, and generates buzz. It is the
                foundation for your entire brand.
              </p>
            </div>
            <div className="flex min-h-[340px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-600 to-slate-900">
              <span className="text-sm text-white/60">
                Entrepreneur working on laptop
              </span>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-6 py-20 md:px-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black leading-tight text-[#0d0d1a] md:text-4xl">
                We&apos;ll Take Care
                <br />
                of the Entity Search
              </h2>
              <p className="mt-5 text-[15px] text-slate-600">
                We will tell you if your business name is available in your
                state.
              </p>
              <button className="mt-8 rounded-full bg-cyan-500 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-600">
                Search Name Availability
              </button>
            </div>
            <div className="flex justify-center">
              <svg
                viewBox="0 0 960 600"
                className="h-[260px] w-full max-w-[420px]"
              >
                <g fill="none" stroke="#cbd5e1" strokeWidth="1.5">
                  <rect x="60" y="80" width="840" height="420" rx="40" />
                </g>
                <text
                  x="480"
                  y="300"
                  textAnchor="middle"
                  fontSize="20"
                  fill="#94a3b8"
                >
                  USA Map
                </text>
                <rect
                  x="120"
                  y="160"
                  width="100"
                  height="100"
                  rx="8"
                  fill="#06B6D4"
                  opacity="0.9"
                />
                <text
                  x="170"
                  y="210"
                  textAnchor="middle"
                  fontSize="11"
                  fill="#fff"
                  fontWeight="bold"
                >
                  <tspan x="170" dy="0">
                    YOUR
                  </tspan>
                  <tspan x="170" dy="15">
                    STATE
                  </tspan>
                </text>
              </svg>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="mb-8 text-3xl font-black text-[#0d0d1a] md:text-4xl">
            FAQs
          </h2>
          {FAQS.map((faq, i) => (
            <div key={faq.q} className="border-b border-slate-200 py-6">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 text-left"
                type="button"
              >
                <span className="text-base font-bold text-[#0d0d1a] md:text-lg">
                  {faq.q}
                </span>
                <span className="text-slate-500">
                  <ChevronDown open={openFaq === i} />
                </span>
              </button>
              {openFaq === i && (
                <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </section>

        <section className="mx-auto max-w-[1140px] px-6 pb-24">
          <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-cyan-950 via-cyan-700 to-cyan-500 px-8 py-16 text-center text-white shadow-[0_24px_70px_rgba(6,182,212,0.25)] md:px-12 md:py-[72px]">
            <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.28),transparent_30%)]" />

            <svg
              className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
              preserveAspectRatio="none"
              viewBox="0 0 1200 560"
              fill="none"
            >
              <path
                d="M0 520 C220 330 420 520 640 300 C820 120 980 220 1200 60"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M0 420 C260 260 420 430 700 180 C900 20 1020 150 1200 0"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>

            <div className="relative z-10 mx-auto max-w-[920px]">
              <p className="mb-6 text-xl font-black text-cyan-100 md:text-[22px]">
                Join The Family
              </p>

              <h2 className="mx-auto text-4xl font-black leading-[1.18] tracking-tight text-white md:text-[46px]">
                More Than <span className="text-cyan-200">1,000,000</span>
                <br />
                Businesses Have Chosen Incorp Bay
              </h2>

              <p className="mx-auto mt-7 max-w-[900px] text-base font-medium leading-relaxed text-cyan-50 md:text-xl">
                With Incorp Bay, you are not just checking a business name; you
                are laying the foundation for your brand&apos;s future success.
                Start your journey today and take the first step toward building
                a thriving business.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-3 md:mb-12">
                <div className="inline-flex flex-wrap items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-black text-white backdrop-blur-md">
                  <span>148,137 ratings</span>
                  <span className="tracking-[1px] text-cyan-200">★★★★★</span>
                  <span className="text-cyan-50">ShopperApproved</span>
                </div>

                <div className="inline-flex flex-wrap items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-black text-white backdrop-blur-md">
                  <span>25,615 reviews</span>
                  <span className="tracking-[1px] text-cyan-200">★★★★★</span>
                  <span className="text-cyan-50">★ Trustpilot</span>
                </div>
              </div>

              <button className="mt-10 rounded-full bg-cyan-500 px-10 py-4 text-base font-black uppercase tracking-wide text-white shadow-[0_14px_30px_rgba(6,182,212,0.35)] ring-1 ring-white/20 transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_18px_40px_rgba(6,182,212,0.45)] md:mt-0">
                Start Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </NavigationWrapper>
  );
}
