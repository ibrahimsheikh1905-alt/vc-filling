"use client";
import { useState } from "react";
import Image from "next/image";
import NavigationWrapper from "@/components/NavigationWrapper";
import { Star, ChevronDown, User, Headphones, Globe, Users, MessageCircle } from "lucide-react";

// ── Theme tokens — matches the Certificate of Good Standing page theme ────────
const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";
const LOGO_GRADIENT_TEXT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent";

const CONTAINER_MAX = "max-w-6xl";

// ── Building blocks (shared visual language with the Certificate page) ────────
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm">
      {children}
    </div>
  );
}

function PrimaryButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`${LOGO_GRADIENT} rounded-full px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:brightness-110 hover:scale-[1.03] hover:shadow-[0_10px_35px_rgba(43,147,201,0.45)]`}
    >
      {children}
    </button>
  );
}

function CornerRibbon({ text }: { text: string }) {
  return (
    <div className="pointer-events-none absolute -right-1 -top-1 h-24 w-24 overflow-hidden">
      <div
        className="absolute left-[-8px] top-[18px] w-[150px] rotate-45 bg-[#0f172a] py-2 text-center text-[11px] font-bold uppercase tracking-wider text-white shadow-[0_6px_14px_rgba(0,0,0,0.35)] before:absolute before:bottom-[-6px] before:left-0 before:border-x-[6px] before:border-t-[6px] before:border-x-transparent before:border-t-[#050810] after:absolute after:bottom-[-6px] after:right-0 after:border-x-[6px] after:border-t-[6px] after:border-x-transparent after:border-t-[#050810]"
      >
        {text}
      </div>
    </div>
  );
}

// ── Icons ─────────────────────────────────────────────────────────────────────
const StarGreen = () => (
  <svg viewBox="0 0 24 24" fill="#00B67A" width={13} height={13}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
);
const StarOrange = () => (
  <svg viewBox="0 0 24 24" fill="#FF9A1F" width={13} height={13}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
);

// ── Data ──────────────────────────────────────────────────────────────────────
const ENTITY_TABS = ["LLC", "S-Corp", "C-Corp", "Non-Profit"];

const ENTITY_ACCORDIONS: Record<string, { title: string; body: string }[]> = {
  "LLC": [
    { title: "Limited Liability Companies (LLCs)", body: "An LLC is the most popular business structure for startups and small businesses, offering liability protection without the complexity of a corporation." },
    { title: "Flexibility & Operational Ease", body: "LLCs have minimal paperwork requirements and allow you to choose how you want to run your business without strict governance rules." },
    { title: "Ownership & Management", body: "LLCs can be owned by one or more people (called members) and managed by members or designated managers." },
    { title: "Taxation Advantages", body: "By default, LLCs are pass-through tax entities — profits and losses pass through to members and are reported on personal tax returns, avoiding double taxation." },
    { title: "Liability Protection", body: "An LLC creates a legal separation between you and your business, protecting your personal assets from business debts and lawsuits." },
    { title: "Compliance Requirements", body: "LLCs must file annual reports in most states, maintain a registered agent, and keep business and personal finances separate." },
    { title: "Financing Options", body: "LLCs can raise money through member contributions, loans, or bring on investors — though venture capital funding is easier through a C-Corp." },
    { title: "Great Choice For", body: "LLCs are ideal for freelancers, consultants, small business owners, real estate investors, and anyone who wants liability protection with minimal formality." },
  ],
  "S-Corp": [
    { title: "S-Corporations (S-Corps)", body: "An S-Corp is a special tax designation granted by the IRS. It lets your corporation avoid double taxation by passing income, losses, and deductions directly to shareholders." },
    { title: "Flexibility & Operational Ease", body: "S-Corps require more formality than LLCs — including regular board meetings, corporate minutes, and strict record-keeping — but offer significant tax savings for qualifying businesses." },
    { title: "Ownership & Management", body: "S-Corps can have up to 100 shareholders, all of whom must be U.S. citizens or residents. They are managed by a board of directors and officers." },
    { title: "Taxation Advantages", body: "S-Corp shareholders who work in the business are treated as employees and paid a reasonable salary. Additional profits can be distributed without paying self-employment tax — a major advantage." },
    { title: "Liability Protection", body: "Like a C-Corp, an S-Corp provides shareholders with limited liability protection, keeping personal assets separate from business debts and legal claims." },
    { title: "Compliance Requirements", body: "S-Corps must file annual reports, hold regular shareholder and director meetings, maintain corporate minutes, and follow strict IRS requirements to keep S-Corp status." },
    { title: "Financing Options", body: "S-Corps can raise money through the sale of stock (up to 100 shareholders), loans, and retained earnings. Venture capital funding is typically easier through a C-Corp." },
    { title: "Great Choice For", body: "S-Corps are ideal for profitable small businesses whose owners want to minimize self-employment taxes while maintaining liability protection and corporate structure." },
  ],
  "C-Corp": [
    { title: "C-Corporations (C-Corps)", body: "A C-Corp is the standard corporation — a separate legal entity from its owners, offering the strongest liability protection and the most options for raising capital and issuing stock." },
    { title: "Flexibility & Operational Ease", body: "C-Corps have more administrative requirements than LLCs — board meetings, bylaws, annual reports — but offer maximum flexibility in ownership structure and equity compensation." },
    { title: "Ownership & Management", body: "C-Corps can have an unlimited number of shareholders, including foreign individuals and entities. They are managed by a board of directors and corporate officers." },
    { title: "Taxation Advantages", body: "C-Corps are taxed at the corporate level (21% federal rate), and dividends paid to shareholders are taxed again on personal returns — known as double taxation. However, certain deductions and benefits offset this for many businesses." },
    { title: "Liability Protection", body: "C-Corps provide the strongest personal liability protection of any entity type, fully separating business debts and legal liabilities from shareholders' personal assets." },
    { title: "Compliance Requirements", body: "C-Corps must hold annual shareholder meetings, maintain corporate minutes and bylaws, file annual reports with the state, and comply with federal and state tax obligations." },
    { title: "Financing Options", body: "C-Corps can issue multiple classes of stock, attract venture capital, go public via IPO, and bring on unlimited investors — making them the preferred structure for high-growth startups." },
    { title: "Great Choice For", body: "C-Corps are ideal for businesses seeking venture capital, planning to go public, or wanting to offer equity compensation to employees through stock options." },
  ],
  "Non-Profit": [
    { title: "Non-Profit Organizations", body: "A nonprofit is a legal entity organized for a purpose other than making a profit for owners. Qualifying nonprofits can apply for 501(c)(3) tax-exempt status, exempting them from federal income tax." },
    { title: "Flexibility & Operational Ease", body: "Nonprofits must follow a mission-driven structure with a board of directors, bylaws, and regular reporting. While more structured than LLCs, they benefit from tax advantages and grant eligibility." },
    { title: "Ownership & Management", body: "Nonprofits don't have owners or shareholders — they are governed by a board of directors or trustees who are responsible for overseeing the organization's mission and finances." },
    { title: "Taxation Advantages", body: "501(c)(3) nonprofits are exempt from federal income tax and often state taxes. Donors can deduct contributions on their federal tax returns. Nonprofits may also be exempt from sales and property taxes." },
    { title: "Liability Protection", body: "Nonprofit directors and officers are generally protected from personal liability for the organization's debts and legal obligations, similar to a corporation's liability shield." },
    { title: "Compliance Requirements", body: "Nonprofits must file Form 990 annually with the IRS, maintain detailed financial records, hold board meetings, and comply with state charitable solicitation laws if fundraising publicly." },
    { title: "Financing Options", body: "Nonprofits raise money through grants, donations, membership fees, fundraising events, and program service revenue. They cannot distribute profits to members or directors." },
    { title: "Great Choice For", body: "Nonprofits are ideal for charities, religious organizations, educational institutions, community groups, and social enterprises focused on public benefit rather than profit." },
  ],
};

const PACKAGES = [
  { name: "Basic", price: "$0", sub: "+ state fee", badge: null, highlight: false, desc: "Our core features for the lowest price." },
  { name: "Standard", price: "$199", sub: "+ state fee", badge: "Recommended", highlight: false, desc: "Comprehensive features to get your business started." },
  { name: "Premium", price: "$299", sub: "+ state fee", badge: "Best Value", highlight: true, desc: "Full-service features at the best value." },
];

const REVIEWS = [
  {
    sub: "Sync",
    name: "Pet Pals U Animal Care Sitter",
    text: "They take care of you. This team truly cares about helping small businesses succeed — straight to the point and incredibly responsive.",
  },
  {
    sub: "Verified",
    name: "Bright Path Consulting LLC",
    text: "Incredibly smooth process from start to finish. I had my LLC formed in days, and the dashboard makes staying compliant genuinely easy.",
  },
  {
    sub: "Verified",
    name: "GreenLeaf Landscaping",
    text: "The support team walked me through every step. As a first-time business owner, that made all the difference — highly recommend.",
  },
  {
    sub: "Verified",
    name: "Urban Fitness Studio",
    text: "Fast, affordable, and no hidden surprises. Exactly what I needed when I was juggling a dozen other things while launching my studio.",
  },
];

const FAQS = [
  { q: "Is Incorp Bay a Reputable Company?", a: "Absolutely. Incorp Bay (formerly Incfile) has helped over 1,000,000 entrepreneurs start and manage their businesses since 2004. We're bootstrapped, founder-led, and independently owned — meaning our focus is always on you, not shareholders." },
  { q: "How Long Has Incorp Bay Been Around?", a: "Incorp Bay has been operating since 2004 — over two decades of helping entrepreneurs form and manage their businesses across all 50 states." },
  { q: "Does Incorp Bay Have a Monthly Fee?", a: "Our basic LLC formation is $0 + state fees. We also offer subscription-based compliance and management packages, but they are entirely optional." },
  { q: "How Much Does Incorp Bay Cost?", a: "Formation starts at $0 + your state's filing fee. Our Standard package is $199 + state fee, and our Premium package is $299 + state fee. Each includes additional services and support." },
  { q: "Which Incorp Bay Package Should I Get?", a: "It depends on your needs. Basic is perfect if you just want the essentials. Standard adds compliance features. Premium is our best-value package with the most comprehensive services for growing businesses." },
];

// ── Main ──────────────────────────────────────────────────────────────────────
export default function IncorpBayHomePage() {
  const [activeEntity, setActiveEntity] = useState("LLC");
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const handleEntityTab = (tab: string) => {
    setActiveEntity(tab);
    setOpenAccordion(0); // reset to first item open
  };
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [entity, setEntity] = useState("");
  const [state, setState] = useState("");
  const [entityError, setEntityError] = useState(false);
  const [stateError, setStateError] = useState(false);

  const states = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];

  const mapHomeEntityToPackageEntity = (homeEntity?: string) => {
    const e = (homeEntity ?? "").trim();
    if (!e) return "";
    if (e === "LLC") return "LLC";
    if (e === "S-Corp") return "S-Corporation";
    if (e === "C-Corp") return "C-Corporation";
    if (e === "Non-Profit") return "Nonprofit";
    return "";
  };

  const navigateToPackageMain = (nextEntity?: string, nextState?: string) => {
    const mappedEntity = mapHomeEntityToPackageEntity(nextEntity);
    const nextSRaw = (nextState ?? "").trim();

    // UX: Navigation always occur karein; agar values missing hain to /package-main par
    // "Select entity" / "Select state" wali UI show hogi.
    if (!mappedEntity) setEntityError(true);
    if (!nextSRaw) setStateError(true);

    const params = new URLSearchParams();
    if (mappedEntity) params.set("entity", mappedEntity);
    if (nextSRaw) params.set("state", nextSRaw);

    const query = params.toString();
    const url = query ? `/package-main?${query}` : `/package-main`;
    window.location.href = url;
  };

  const handleStartBusiness = () => {
    let isValid = true;
    if (!entity) { setEntityError(true); isValid = false; }
    if (!state) { setStateError(true); isValid = false; }
    if (!isValid) return;
    navigateToPackageMain(entity, state);
  };

  return (
    <NavigationWrapper>
      <div className="min-h-screen bg-white text-[#1E293B] font-helvetica">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden px-6 pt-16 pb-12 md:px-16 md:pt-20 md:pb-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#2B93C9 1px, transparent 1px), linear-gradient(90deg, #2B93C9 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-[#2B93C9]/10 blur-[90px]" />

          <div className={`relative z-10 mx-auto ${CONTAINER_MAX}`}>
            <div className="mb-10 grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <h1 className="text-4xl font-bold leading-tight text-[#1E293B] md:text-5xl">
                  Start Your Business With <span className={LOGO_GRADIENT_TEXT}>Confidence</span>
                </h1>
              </div>

              <div className="md:pt-2 md:text-right">
                <p className="text-base font-bold leading-relaxed text-[#1E293B] md:ml-auto md:max-w-sm">
                  Your big idea deserves a bold execution.{" "}
                  <span className="font-normal text-slate-500">
                    Say goodbye to stress and hello to your new business.
                  </span>
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
              <h2 className="mb-2 text-2xl font-bold leading-tight text-[#1E293B] md:text-3xl">
                Launch Your LLC in Minutes
              </h2>
              <p className="mb-8 text-base leading-relaxed text-slate-500">
                Say goodbye to stress and hello to your new business.
              </p>

              <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-[1fr_1fr_auto]">
                <div className="relative">
                  <select
                    value={entity}
                    onChange={e => { setEntity(e.target.value); setEntityError(false); }}
                    className={`h-16 w-full appearance-none rounded-xl border bg-white px-[54px] text-lg font-bold text-[#1E293B] outline-none ${entityError ? "border-red-500" : "border-[#2B93C9]/40"}`}
                  >
                    <option value="">Pick Entity</option>
                    {["LLC", "S-Corp", "C-Corp", "Non-Profit"].map(e => <option key={e} value={e}>{e}</option>)}
                  </select>
                  <span className={`absolute left-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-lg font-bold text-white ${LOGO_GRADIENT}`}>
                    1
                  </span>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#1E293B]">
                    <ChevronDown className="h-4 w-4" />
                  </span>
                  {entityError && (
                    <p className="ml-1.5 mt-2 text-xs font-normal text-red-500">Please select entity type.</p>
                  )}
                </div>

                <div className="relative">
                  <select
                    value={state}
                    onChange={e => { setState(e.target.value); setStateError(false); }}
                    className={`h-16 w-full appearance-none rounded-xl border bg-white px-[54px] text-lg font-bold text-[#1E293B] outline-none ${stateError ? "border-red-500" : "border-[#2B93C9]/40"}`}
                  >
                    <option value="">Select State</option>
                    {states.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <span className={`absolute left-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-lg font-bold text-white ${LOGO_GRADIENT}`}>
                    2
                  </span>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#1E293B]">
                    <ChevronDown className="h-4 w-4" />
                  </span>
                  {stateError && (
                    <p className="ml-1.5 mt-2 text-xs font-normal text-red-500">Please select state of formation.</p>
                  )}
                </div>

                <PrimaryButton onClick={handleStartBusiness}>
                  <span className="whitespace-nowrap">Start My Business</span>
                </PrimaryButton>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <div className="bg-white px-6 py-6 text-center text-sm font-bold text-slate-700">
          Founder Led & Independently Owned{" "}
          <span className={`whitespace-nowrap rounded-lg bg-slate-50 px-2 py-0.5 font-bold shadow-sm ${LOGO_GRADIENT_TEXT}`}>Since 2004</span>
          {" "}With{" "}
          <span className={`rounded-lg bg-slate-50 px-2 py-0.5 font-bold shadow-sm ${LOGO_GRADIENT_TEXT}`}>Over 1,000,000 Entrepreneurs</span>
          {" "}Served!
        </div>

        {/* ── FIND THE ENTITY ── */}
        <section className="px-4 py-16 md:px-8 md:py-20">
          <div className={`mx-auto ${CONTAINER_MAX}`}>
            <div className="mb-10 text-center">
              <h2 className="mb-3 text-3xl font-bold text-[#1E293B] md:text-4xl">Find the Entity That&apos;s Right For You</h2>
              <p className="mb-4 text-base text-slate-500">
                Incorp Bay <span className="font-bold text-[#1E293B]">will guide you through the process.</span> Use our resources to select a business formation type.
              </p>

              <div className="mb-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#2B93C9]/20 bg-white px-4 py-2 text-xs font-bold text-[#2B93C9] shadow-sm">
                  📍 Did you know LLCs are the most popular choice for startups?
                </div>
              </div>

              <div>
                <div className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1.5 shadow-sm">
                  {ENTITY_TABS.map(tab => (
                    <button key={tab} onClick={() => handleEntityTab(tab)}
                      className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-200 ${activeEntity === tab ? `${LOGO_GRADIENT} text-white shadow-md` : "bg-transparent text-slate-600 hover:bg-slate-50"}`}>
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_460px]">
              {/* Accordion */}
              <div className="min-w-0 pl-6 md:pl-16">
                {(ENTITY_ACCORDIONS[activeEntity] || []).map((item, i) =>
                  i === 0 ? (
                    <h3 key={`${activeEntity}-${i}`} className="mb-3 text-xl font-bold text-[#1E293B] md:text-2xl">
                      {item.title}
                    </h3>
                  ) : (
                    <div key={`${activeEntity}-${i}`} className="border-b border-slate-100">
                      <button
                        onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                        className="flex w-full items-center justify-between py-4 text-left"
                      >
                        <span className={`text-base ${openAccordion === i ? "font-bold text-[#2B93C9]" : "font-normal text-slate-600"}`}>{item.title}</span>
                        <ChevronDown className={`ml-4 h-4 w-4 flex-shrink-0 text-slate-400 transition-transform ${openAccordion === i ? "rotate-180" : ""}`} />
                      </button>
                      {openAccordion === i && (
                        <div className="pb-4 text-sm leading-relaxed text-slate-500">{item.body}</div>
                      )}
                    </div>
                  )
                )}
              </div>

              {/* Image */}
              <div className="w-full">
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-sm md:aspect-auto md:h-[460px]">
                  <Image
                    src="/home/Woman-working-laptop-coffee-shop.webp"
                    alt="Business owner working on a laptop"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <PrimaryButton onClick={() => navigateToPackageMain(activeEntity, state)}>
                START YOUR {activeEntity.toUpperCase()}
              </PrimaryButton>
            </div>
          </div>
        </section>

        {/* ── CHOOSE YOUR PACKAGE ── */}
        <section className="bg-white px-6 pt-6 pb-20 md:px-16 md:pt-8 md:pb-28">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-12 text-center md:p-20">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 0% 100%, rgba(43,147,201,0.08), transparent 28%), radial-gradient(circle at 100% 100%, rgba(43,147,201,0.08), transparent 28%)",
              }}
            />

            <div className="relative z-10">
              <h2 className="mb-4 text-4xl font-bold text-[#1E293B] md:text-5xl">Choose Your Package</h2>
              <p className="mx-auto mb-12 max-w-xl text-base leading-relaxed text-slate-500 md:text-lg">
                Choose from our 3 packages. You pick the one that works best for your business formation period.
              </p>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {PACKAGES.map((pkg, index) => (
                  <div
                    key={pkg.name}
                    onClick={() => navigateToPackageMain(activeEntity, state)}
                    className={`relative min-h-[220px] cursor-pointer rounded-2xl border p-7 text-left transition-transform hover:scale-[1.02] ${
                      index === 2
                        ? `${LOGO_GRADIENT} border-transparent text-white shadow-lg`
                        : index === 1
                        ? "border-[#2B93C9]/20 bg-[#2B93C9]/5 text-[#1E293B]"
                        : "border-slate-200 bg-white text-[#1E293B]"
                    }`}
                  >
                    {pkg.badge && <CornerRibbon text={pkg.badge} />}

                    <div className={`mb-5 inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-sm font-bold ${index === 2 ? "border-white/45 bg-white/10 text-white" : "border-[#2B93C9]/30 bg-white text-[#2B93C9]"}`}>
                      ⊕ {pkg.name}
                    </div>

                    <div className="text-3xl font-bold leading-none">
                      {pkg.price}
                      <span className="text-sm font-normal"> + state fee</span>
                    </div>

                    <div className="mt-3 text-sm font-normal">One-time payment</div>

                    <p className={`mt-3 text-base leading-relaxed ${index === 2 ? "text-white/90" : "text-slate-500"}`}>
                      {pkg.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <PrimaryButton onClick={() => navigateToPackageMain(activeEntity, state)}>
                  COMPARE PACKAGES
                </PrimaryButton>
              </div>
            </div>
          </div>
        </section>

        {/* ── BUSINESS WITHOUT BARRIERS ── */}
        <section className="px-6 pt-6 pb-20 text-center md:px-16 md:pt-8 md:pb-28">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-4 text-4xl font-bold text-[#1E293B] md:text-5xl">Business without barriers</h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-slate-500">
              To the side-hustlers, founders, learners, innovators, action-takers, move-makers, first-timers, and serial starters — welcome. This community is for you.
            </p>

            {/* Dark logo banner */}
            <div className="mb-10 flex items-center justify-center rounded-3xl bg-[#1a1a2e] px-6 py-24">
              <span className="text-7xl font-bold tracking-tight text-white md:text-8xl">
                Incorp<span className={LOGO_GRADIENT_TEXT}>Bay</span>
              </span>
            </div>

            <PrimaryButton onClick={() => navigateToPackageMain(activeEntity, state)}>
              Get Started
            </PrimaryButton>
          </div>
        </section>

        {/* ── PERSONALIZED DASHBOARD ── */}
        <section className="px-6 pt-6 pb-16 md:px-16 md:pt-8 md:pb-20">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200 p-8 text-center md:p-10">
            <h2 className="mb-3 text-4xl font-bold text-[#1E293B] md:text-5xl">Your Personalized Dashboard</h2>
            <p className="mx-auto mb-10 max-w-xl text-lg text-slate-500">
              Everything you need: business essentials and reminders in one place.
            </p>

            <div className="relative mx-auto mb-10 aspect-[16/9] w-full max-w-none overflow-hidden rounded-2xl shadow-sm">
              <Image
                src="/home/Business-dashboard-company-status-tasks.webp"
                alt="Business dashboard with company status and tasks"
                fill
                className="object-cover"
              />
            </div>

            <PrimaryButton onClick={() => (window.location.href = "/buisness-services")}>
              COMPARE PACKAGES
            </PrimaryButton>
          </div>
        </section>

        {/* ── CUSTOMER SUPPORT ── */}
        <section className="px-6 py-16 md:px-16 md:py-20">
          <div className={`mx-auto ${CONTAINER_MAX} overflow-hidden rounded-3xl bg-[#1a1a2e]`}>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="p-10 md:p-16 flex flex-col justify-center">
                <h2 className="mb-3 text-5xl font-bold leading-tight text-white md:text-6xl">Customer support is our priority</h2>
                <p className="mb-7 text-lg leading-relaxed text-white/60">We put customers first. That means when you need to talk to a human, you can reach a human.</p>
                {[
                  { icon: <Users className="h-6 w-6 text-[#2B93C9]" />, bold: "Real help", rest: " from real people" },
                  { icon: <Star className="h-6 w-6 text-[#2B93C9]" />, bold: "Industry Leading", rest: " Service" },
                  { icon: <MessageCircle className="h-6 w-6 text-[#2B93C9]" />, bold: "English and Spanish", rest: "-speaking" },
                ].map((item, i) => (
                  <div key={i} className="mb-3 flex items-center gap-4 rounded-2xl bg-white/5 px-5 py-4">
                    {item.icon}
                    <span className="text-base">
                      <span className="font-bold text-white">{item.bold}</span>
                      <span className="font-normal text-white/70">{item.rest}</span>
                    </span>
                  </div>
                ))}
              </div>
              <div className="relative h-[380px] w-full sm:h-full sm:min-h-[560px]">
                <Image
                  src="/home/Customer-support-agent-smiling.webp"
                  alt="Customer support agent smiling"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY DO BUSINESSES TRUST US ── */}
        <section className="px-6 py-16 md:px-16 md:py-20">
          <div className={`mx-auto ${CONTAINER_MAX}`}>
            <div className="mb-10 text-center md:text-left">
              <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3.5 py-1.5 text-xs font-bold">
                <StarGreen /> Trustpilot 4.7 out of 5 (125,000 Reviews)
              </div>
              <h2 className="text-3xl font-bold leading-snug text-[#1E293B] md:text-4xl">
                Why do over <span className={LOGO_GRADIENT_TEXT}>1,000,000 businesses</span> trust Incorp Bay?
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {REVIEWS.map((review) => (
                <div key={review.name} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <div className="mb-3.5 flex justify-between gap-3">
                    <div>
                      <div className="mb-1 text-xs text-slate-400">{review.sub}</div>
                      <div className="text-base font-bold text-[#1E293B]">{review.name}</div>
                    </div>
                    <div className="flex flex-shrink-0 gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => <StarOrange key={i} />)}
                    </div>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-slate-500">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-1.5 text-sm font-bold text-[#00B67A]">
                    <StarGreen /> Trustpilot
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQs ── */}
        <section className="px-6 pt-6 pb-20 md:px-16 md:pt-8 md:pb-28">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-10 text-4xl font-bold text-[#1E293B] md:text-5xl">FAQs</h2>
            {FAQS.map((faq, i) => (
              <div key={i} className="border-b border-slate-200">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="text-lg font-bold text-[#1E293B] md:text-xl">{faq.q}</span>
                  <ChevronDown className={`h-6 w-6 flex-shrink-0 text-slate-400 transition-transform ${openFaq === i ? "rotate-180 text-[#2B93C9]" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="pb-6 text-base leading-relaxed text-slate-500">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </NavigationWrapper>
  );
}