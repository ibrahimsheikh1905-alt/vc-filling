"use client";
import { useState } from "react";
import NavigationWrapper from "@/components/NavigationWrapper";

// ── Design tokens (consistent type scale + spacing) ───────────────────────────
const TYPE = {
  h1: 40,        // page hero heading
  h2: 32,        // section heading
  h3: 22,        // card / sub heading
  bodyLg: 18,     // hero subtitle / lead paragraph
  body: 15,        // standard paragraph
  small: 14,      // supporting text
  tiny: 12,       // badges, labels, meta
};

const SECTION_PAD = "80px 24px";       // consistent vertical/horizontal section padding
const CONTAINER_MAX = 1200;             // consistent container width

// ── Icons ─────────────────────────────────────────────────────────────────────
const ChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={14} height={14}><path d="M6 9l6 6 6-6" /></svg>
);
const StarGreen = () => (
  <svg viewBox="0 0 24 24" fill="#00B67A" width={13} height={13}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
);
const StarOrange = () => (
  <svg viewBox="0 0 24 24" fill="#FF9A1F" width={13} height={13}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
);
const CheckCircle = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth={2} width={16} height={16}><circle cx="12" cy="12" r="10" /><path d="M9 12l2 2 4-4" /></svg>
);
const PersonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth={2} width={16} height={16}><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
);
const HeadsetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth={2} width={16} height={16}><path d="M3 18v-6a9 9 0 0118 0v6" /><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" /></svg>
);
const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth={2} width={16} height={16}><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>
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
  { name: "Standard", price: "$199", sub: "+ state fee", badge: null, highlight: false, desc: "Comprehensive features to get your business started." },
  { name: "Premium", price: "$299", sub: "+ state fee", badge: "Best Value", highlight: true, desc: "Full-service features at the best value." },
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
      <div style={{ fontFamily: "inherit", color: "#1a1a2e", background: "#fff", margin: 0, padding: 0 }}>

        {/* ── HERO ── */}
        <section style={{ background: "#fff", padding: "72px 24px 48px" }}>
          <div style={{ maxWidth: CONTAINER_MAX, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 48, alignItems: "center", marginBottom: 40 }}>
              <h1 style={{ fontSize: TYPE.h1, fontWeight: 900, lineHeight: 1.1, margin: 0, color: "#0d0d1a", letterSpacing: -1 }}>
                Start Your Business<br />With <span style={{ color: "#06B6D4" }}>Confidence</span>
              </h1>

              <p style={{ fontSize: TYPE.bodyLg, color: "#334155", margin: 0, lineHeight: 1.5, maxWidth: 420 }}>
                <strong>Your big idea deserves a bold execution.</strong><br />
                Say goodbye to stress and hello to your new business.
              </p>
            </div>

            <div style={{ border: "1.5px solid #dbe3ea", borderRadius: 24, padding: "40px", background: "#fff" }}>
              <h2 style={{ fontSize: TYPE.h2, fontWeight: 900, lineHeight: 1.2, margin: "0 0 8px", color: "#0d0d1a", letterSpacing: -0.5 }}>
                Launch Your LLC in Minutes
              </h2>
              <p style={{ fontSize: TYPE.bodyLg, color: "#64748b", margin: "0 0 32px", lineHeight: 1.5 }}>
                Say goodbye to stress and hello to your new business.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr auto", gap: 20, alignItems: "start" }}>
                <div style={{ position: "relative" }}>
                  <select
                    value={entity}
                    onChange={e => { setEntity(e.target.value); setEntityError(false); }}
                    style={{
                      width: "100%",
                      height: 64,
                      padding: "0 44px 0 54px",
                      borderRadius: 12,
                      border: entityError ? "1.5px solid #ef4444" : "1.5px solid #67e8f9",
                      fontSize: TYPE.h3,
                      fontWeight: 700,
                      appearance: "none" as const,
                      background: "#fff",
                      color: "#0d0d1a",
                      cursor: "pointer",
                      outline: "none",
                      boxSizing: "border-box" as const,
                    }}
                  >
                    <option value="">Pick Entity</option>
                    {["LLC", "S-Corp", "C-Corp", "Non-Profit"].map(e => <option key={e} value={e}>{e}</option>)}
                  </select>

                  <span style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", width: 32, height: 32, borderRadius: "50%", background: "#06B6D4", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: TYPE.h3, fontWeight: 900 }}>
                    1
                  </span>
                  <span style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", color: "#0d0d1a", pointerEvents: "none" }}>
                    <ChevronDown />
                  </span>
                  {entityError && (
                    <p style={{ color: "#ef4444", fontSize: TYPE.tiny, margin: "8px 0 0 6px", fontWeight: 500 }}>
                      Please select entity type.
                    </p>
                  )}
                </div>

                <div style={{ position: "relative" }}>
                  <select
                    value={state}
                    onChange={e => { setState(e.target.value); setStateError(false); }}
                    style={{
                      width: "100%",
                      height: 64,
                      padding: "0 44px 0 54px",
                      borderRadius: 12,
                      border: stateError ? "1.5px solid #ef4444" : "1.5px solid #67e8f9",
                      fontSize: TYPE.h3,
                      fontWeight: 700,
                      appearance: "none" as const,
                      background: "#fff",
                      color: "#0d0d1a",
                      cursor: "pointer",
                      outline: "none",
                      boxSizing: "border-box" as const,
                    }}
                  >
                    <option value="">Select State</option>
                    {states.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>

                  <span style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", width: 32, height: 32, borderRadius: "50%", background: "#06B6D4", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: TYPE.h3, fontWeight: 900 }}>
                    2
                  </span>
                  <span style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", color: "#0d0d1a", pointerEvents: "none" }}>
                    <ChevronDown />
                  </span>
                  {stateError && (
                    <p style={{ color: "#ef4444", fontSize: TYPE.tiny, margin: "8px 0 0 6px", fontWeight: 500 }}>
                      Please select state of formation.
                    </p>
                  )}
                </div>

                <button
                  onClick={handleStartBusiness}
                  style={{
                    height: 64,
                    background: "linear-gradient(180deg,#06B6D4 0%,#0891B2 100%)",
                    color: "#fff",
                    border: "1px solid #0891B2",
                    borderRadius: 12,
                    padding: "0 28px",
                    fontWeight: 800,
                    fontSize: TYPE.body,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    boxShadow: "inset 0 0 0 2px rgba(255,255,255,0.25), 0 12px 24px rgba(6,182,212,0.25)",
                  }}
                >
                  Start My Business
                </button>
              </div>
            </div>
          </div>
        </section>

      {/* ── TRUST BAR ── */}
      <div style={{ background: "#fff", textAlign: "center", padding: "16px 24px", fontSize: TYPE.small, fontWeight: 600, color: "#1a1a2e" }}>
        Founder Led & Independently Owned{" "}
        <span style={{ background: "#cffafe", color: "#06B6D4", padding: "1px 8px", borderRadius: 4, fontWeight: 700 }}>Since 2004</span>
        {" "}With{" "}
        <span style={{ background: "#cffafe", color: "#06B6D4", padding: "1px 8px", borderRadius: 4, fontWeight: 700 }}>Over 1,000,000 Entrepreneurs</span>
        {" "}Served!
      </div>

      {/* ── FIND THE ENTITY ── */}
      <section style={{ padding: SECTION_PAD }}>
        <div style={{ maxWidth: CONTAINER_MAX, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{ fontSize: TYPE.h2, fontWeight: 800, margin: "0 0 12px" }}>Find the Entity That's Right For You</h2>
          <p style={{ fontSize: TYPE.body, color: "#06B6D4", margin: "0 0 20px" }}>Incorp Bay will guide you through the process. Use our resources to select a business formation type.</p>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#ecfeff", border: "1.5px solid #67e8f9", borderRadius: 20, padding: "6px 16px", fontSize: TYPE.tiny, color: "#06B6D4", fontWeight: 600, marginBottom: 24 }}>
            ⭐ Did you know LLCs are the most popular choice for startups?
          </div>
          {/* Entity tabs */}
          <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
            {ENTITY_TABS.map(tab => (
              <button key={tab} onClick={() => handleEntityTab(tab)}
                style={{ padding: "10px 24px", borderRadius: 50, border: "none", cursor: "pointer", fontWeight: 700, fontSize: TYPE.small, background: activeEntity === tab ? "#06B6D4" : "#f0f0f0", color: activeEntity === tab ? "#fff" : "#666", transition: "all 0.15s" }}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", gap: 56, alignItems: "flex-start" }}>
          {/* Accordion */}
          <div style={{ flex: 1 }}>
            {(ENTITY_ACCORDIONS[activeEntity] || []).map((item, i) => (
              <div key={`${activeEntity}-${i}`} style={{ borderBottom: "1px solid #f0f0f0" }}>
                <button
                  onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                >
                  <span style={{ fontSize: TYPE.body, fontWeight: openAccordion === i ? 700 : 500, color: "#06B6D4" }}>{item.title}</span>
                  <span style={{ transform: openAccordion === i ? "rotate(180deg)" : "none", transition: "transform 0.2s", color: "#aaa", flexShrink: 0, marginLeft: 16 }}>
                    <ChevronDown />
                  </span>
                </button>
                {openAccordion === i && (
                  <div style={{ padding: "0 0 16px", fontSize: TYPE.small, color: "#555", lineHeight: 1.7 }}>{item.body}</div>
                )}
              </div>
            ))}
            <div style={{ textAlign: "center", marginTop: 32 }}>
              <button
                onClick={() => navigateToPackageMain(activeEntity, state)}
                style={{ background: "#06B6D4", color: "#fff", border: "none", borderRadius: 50, padding: "14px 36px", fontWeight: 700, fontSize: TYPE.small, cursor: "pointer" }}
              >
                START YOUR {activeEntity.toUpperCase()}
              </button>
            </div>
          </div>

          {/* Image placeholder */}
          <div style={{ flex: "0 0 320px" }}>
            <div style={{ borderRadius: 16, overflow: "hidden", height: 320, background: "linear-gradient(145deg,#8b6040,#4a2c10)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 60 }}>👩‍💼</span>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ── CHOOSE YOUR PACKAGE ── */}
      <section style={{ padding: SECTION_PAD, background: "#fff" }}>
        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            textAlign: "center",
            border: "1.5px solid #dbe3ea",
            borderRadius: 24,
            padding: "48px 56px",
            background: "#f8fafc",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 0% 100%, rgba(6,182,212,0.08), transparent 28%), radial-gradient(circle at 100% 100%, rgba(6,182,212,0.08), transparent 28%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: TYPE.h2, fontWeight: 900, margin: "0 0 10px", color: "#0d0d1a" }}>
              Choose Your Package
            </h2>
            <p style={{ fontSize: TYPE.small, color: "#64748b", margin: "0 0 36px", lineHeight: 1.6 }}>
              Choose from our 3 packages. You pick the one that works best for your business formation period.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
              {PACKAGES.map((pkg, index) => (
                <div
                  key={pkg.name}
                  onClick={() => navigateToPackageMain(activeEntity, state)}
                  style={{
                    background: index === 2 ? "linear-gradient(180deg,#06B6D4,#0891B2)" : index === 1 ? "#ecfeff" : "#fff",
                    borderRadius: 12,
                    padding: "22px 18px",
                    border: index === 2 ? "1.5px solid #0891B2" : "1.5px solid #dbe3ea",
                    position: "relative",
                    minHeight: 160,
                    textAlign: "left",
                    color: index === 2 ? "#fff" : "#0d0d1a",
                    boxShadow: index === 2 ? "0 12px 28px rgba(6,182,212,0.25)" : "none",
                    cursor: "pointer",
                  }}
                >
                  {index > 0 && (
                    <div
                      style={{
                        position: "absolute",
                        right: -20,
                        top: 10,
                        transform: "rotate(45deg)",
                        background: "#0f172a",
                        color: "#fff",
                        fontSize: 10,
                        fontWeight: 900,
                        padding: "3px 26px",
                      }}
                    >
                      POPULAR
                    </div>
                  )}

                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                      border: index === 2 ? "1px solid rgba(255,255,255,0.45)" : "1px solid #bae6fd",
                      borderRadius: 20,
                      padding: "4px 10px",
                      fontSize: TYPE.tiny,
                      fontWeight: 800,
                      color: index === 2 ? "#fff" : "#06B6D4",
                      marginBottom: 16,
                      background: index === 2 ? "rgba(255,255,255,0.12)" : "#fff",
                    }}
                  >
                    ⊕ {pkg.name}
                  </div>

                  <div style={{ fontSize: TYPE.h3, fontWeight: 900, lineHeight: 1 }}>
                    {pkg.price}
                    <span style={{ fontSize: TYPE.tiny, fontWeight: 800 }}> + state fee</span>
                  </div>

                  <div style={{ fontSize: TYPE.tiny, fontWeight: 700, marginTop: 8 }}>
                    One-time payment
                  </div>

                  <p
                    style={{
                      fontSize: TYPE.small,
                      lineHeight: 1.5,
                      margin: "10px 0 0",
                      color: index === 2 ? "rgba(255,255,255,0.9)" : "#64748b",
                    }}
                  >
                    {pkg.desc}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigateToPackageMain(activeEntity, state)}
              style={{
                marginTop: 36,
                background: "linear-gradient(180deg,#06B6D4,#0891B2)",
                color: "#fff",
                border: "1px solid #0891B2",
                borderRadius: 999,
                padding: "14px 30px",
                fontWeight: 800,
                fontSize: TYPE.small,
                cursor: "pointer",
                boxShadow: "inset 0 0 0 2px rgba(255,255,255,0.25), 0 12px 24px rgba(6,182,212,0.28)",
              }}
            >
              COMPARE PACKAGES
            </button>
          </div>
        </div>
      </section>

      {/* ── BUSINESS WITHOUT BARRIERS ── */}
      <section style={{ padding: SECTION_PAD, textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <h2 style={{ fontSize: TYPE.h2, fontWeight: 800, margin: "0 0 14px" }}>Business without barriers</h2>
        <p style={{ fontSize: TYPE.body, color: "#06B6D4", margin: "0 0 36px", lineHeight: 1.7 }}>
          To the side-hustlers, founders, learners, innovators, action-takers, move-makers, first-timers, and serial starters — welcome. This community is for you.
        </p>
        {/* Yellow word cloud banner */}
        <div style={{ background: "#FFBE00", borderRadius: 16, padding: "40px 24px", marginBottom: 32, textAlign: "center" }}>
          <div style={{ fontSize: TYPE.tiny, letterSpacing: 3, color: "rgba(0,0,0,0.5)", marginBottom: 12, fontWeight: 700 }}>FOR THE</div>
          {["HEROINES", "STORYTELLERS", "DISRUPTORS", "UNDERDOGS"].map(word => (
            <div key={word} style={{ fontSize: 26, fontWeight: 900, color: "#fff", lineHeight: 1.3, textShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>{word}</div>
          ))}
        </div>
        <button
          onClick={() => navigateToPackageMain(activeEntity, state)}
          style={{ background: "#06B6D4", color: "#fff", border: "none", borderRadius: 50, padding: "14px 36px", fontWeight: 700, fontSize: TYPE.small, cursor: "pointer" }}
        >
          Get Started
        </button>
        </div>
      </section>

      {/* ── PERSONALIZED DASHBOARD ── */}
      <section style={{ padding: SECTION_PAD }}>
        <div style={{ maxWidth: 840, margin: "0 auto", border: "1.5px solid #eee", borderRadius: 20, padding: "44px 40px", textAlign: "center" }}>
          <h2 style={{ fontSize: TYPE.h2, fontWeight: 800, margin: "0 0 12px" }}>Your Personalized Dashboard</h2>
          <p style={{ fontSize: TYPE.body, color: "#06B6D4", margin: "0 0 32px" }}>Everything you need: business essentials and reminders in one place.</p>

          {/* Dashboard mockup */}
          <div style={{ display: "flex", gap: 14, background: "#f7f8fc", borderRadius: 14, padding: 18, marginBottom: 28, textAlign: "left" }}>
            {/* Left gauge */}
            <div style={{ flex: "0 0 140px", background: "#fff", borderRadius: 10, padding: 14 }}>
              <div style={{ fontSize: TYPE.tiny, fontWeight: 700, color: "#888", marginBottom: 10 }}>Recommendations</div>
              <svg viewBox="0 0 80 50" width="80" height="50">
                <path d="M5,45 A35,35 0 0,1 75,45" fill="none" stroke="#e8e8e8" strokeWidth="7" strokeLinecap="round" />
                <path d="M5,45 A35,35 0 0,1 50,15" fill="none" stroke="#06B6D4" strokeWidth="7" strokeLinecap="round" />
              </svg>
              <div style={{ fontSize: 11, color: "#888", marginTop: 6 }}>30 Days Left</div>
              <div style={{ fontSize: 11, color: "#555", marginTop: 2 }}>File Annual Report</div>
            </div>
            {/* Center table */}
            <div style={{ flex: 1, background: "#fff", borderRadius: 10, padding: 14 }}>
              <div style={{ fontSize: TYPE.small, fontWeight: 700, marginBottom: 10, display: "flex", justifyContent: "space-between" }}>
                <span>My Companies</span>
                <span style={{ color: "#aaa", fontSize: TYPE.small }}>⊕</span>
              </div>
              {[
                { name: "PlusMinus Bakers LLC", state: "Texas", status: "Good Standing", color: "#22c55e" },
                { name: "PlusMinus Haircare LLC", state: "New Mexico", status: "Good Standing", color: "#22c55e" },
                { name: "Harmony Foundation", state: "Oklahoma", status: "State Standing", color: "#f59e0b" },
              ].map((co, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0", borderBottom: "1px solid #f5f5f5", fontSize: 11 }}>
                  <span style={{ fontWeight: 500 }}>{co.name}</span>
                  <span style={{ color: "#888" }}>{co.state}</span>
                  <span style={{ color: co.color, fontWeight: 600 }}>{co.status}</span>
                </div>
              ))}
              <div style={{ marginTop: 12, fontSize: 11, color: "#888" }}>5 tasks to complete</div>
            </div>
            {/* Right notifications */}
            <div style={{ flex: "0 0 140px", background: "#fff", borderRadius: 10, padding: 14 }}>
              <div style={{ fontSize: TYPE.tiny, fontWeight: 700, color: "#888", marginBottom: 10 }}>Virtual Address</div>
              <div style={{ height: 44, background: "#f0f0f0", borderRadius: 6, marginBottom: 10 }} />
              <div style={{ fontSize: 11, color: "#888", marginBottom: 10 }}>New Notifications</div>
              <div style={{ background: "#ecfeff", borderRadius: 6, padding: "6px 8px", fontSize: 11 }}>
                <div style={{ color: "#888", marginBottom: 2 }}>New Business Formed</div>
                <div style={{ color: "#06B6D4", fontWeight: 600 }}>PlusMinus Haircare LLC</div>
                <div style={{ color: "#aaa" }}>Order #: 12345081</div>
              </div>
            </div>
          </div>

          <button
            onClick={() => (window.location.href = "/buisness-services")}
            style={{ background: "#06B6D4", color: "#fff", border: "none", borderRadius: 50, padding: "14px 36px", fontWeight: 700, fontSize: TYPE.small, cursor: "pointer" }}
          >
            GET STARTED
          </button>
        </div>
      </section>

      {/* ── CUSTOMER SUPPORT ── */}
      <section style={{ padding: SECTION_PAD }}>
        <div style={{ maxWidth: CONTAINER_MAX, margin: "0 auto", borderRadius: 20, overflow: "hidden", position: "relative", background: "#1a1a2e", padding: "52px 48px", display: "flex", alignItems: "center", gap: 48 }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: TYPE.h2, fontWeight: 800, color: "#fff", margin: "0 0 12px", lineHeight: 1.25 }}>Customer support is our priority</h2>
            <p style={{ fontSize: TYPE.body, color: "#aaa", margin: "0 0 28px", lineHeight: 1.7 }}>We put customers first. That means when you need to talk to a human, you can reach a human.</p>
            {[
              { icon: <PersonIcon />, text: "Real help from real people" },
              { icon: <HeadsetIcon />, text: "Industry-leading service" },
              { icon: <GlobeIcon />, text: "English and Spanish-speaking" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                {item.icon}
                <span style={{ fontSize: TYPE.body, color: "#fff", fontWeight: 500 }}>{item.text}</span>
              </div>
            ))}
          </div>
          {/* Support agent photo placeholder */}
          <div style={{ flex: "0 0 300px", height: 260, borderRadius: 16, background: "linear-gradient(145deg,#2d3a4a,#1a2530)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 64, marginBottom: 10 }}>👨‍💼</div>
              <div style={{ fontSize: TYPE.small, color: "#aaa" }}>Support Agent</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY DO BUSINESSES TRUST US ── */}
      <section style={{ padding: SECTION_PAD }}>
        <div style={{ maxWidth: CONTAINER_MAX, margin: "0 auto", display: "flex", gap: 56, alignItems: "center" }}>
          {/* Left */}
          <div style={{ flex: "0 0 320px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, border: "1px solid #ddd", borderRadius: 20, padding: "5px 14px", fontSize: TYPE.tiny, fontWeight: 600, marginBottom: 20 }}>
              <StarGreen /> Trustpilot 4.7 out of 5 (125,000 Reviews)
            </div>
            <h2 style={{ fontSize: TYPE.h2, fontWeight: 800, margin: 0, lineHeight: 1.3, color: "#0d0d1a" }}>
              Why do over<br /><span style={{ color: "#06B6D4" }}>1,000,000 businesses</span><br />trust Incorp Bay?
            </h2>
          </div>
          {/* Right — review card mockup */}
          <div style={{ flex: 1 }}>
            <div style={{ background: "#fff", border: "1.5px solid #eee", borderRadius: 14, padding: "24px 24px", boxShadow: "0 4px 20px rgba(0,0,0,0.07)", maxWidth: 400 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
                <div>
                  <div style={{ fontSize: TYPE.tiny, color: "#aaa", marginBottom: 4 }}>Sync</div>
                  <div style={{ fontSize: TYPE.body, fontWeight: 700 }}>Pet Pals U Animal Care Sitter</div>
                </div>
                <div style={{ display: "flex", gap: 2 }}>
                  {Array.from({ length: 5 }).map((_, i) => <StarOrange key={i} />)}
                </div>
              </div>
              <p style={{ fontSize: TYPE.small, color: "#555", lineHeight: 1.6, margin: "0 0 16px" }}>
                "They take care of you. This team truly cares about helping small businesses succeed — straight to the point and incredibly responsive."
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: TYPE.small, fontWeight: 700, color: "#00B67A" }}>
                  <StarGreen /> Trustpilot
                </div>
                <div style={{ display: "flex", gap: 8, color: "#ccc", fontSize: 16 }}>‹ ›</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section style={{ padding: SECTION_PAD }}>
        <div style={{ maxWidth: 840, margin: "0 auto" }}>
        <h2 style={{ fontSize: TYPE.h2, fontWeight: 800, margin: "0 0 28px" }}>FAQs</h2>
        {FAQS.map((faq, i) => (
          <div key={i} style={{ borderBottom: "1px solid #e5e5e5" }}>
            <button
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: 16 }}
            >
              <span style={{ fontSize: TYPE.body, fontWeight: 600, color: "#0d0d1a" }}>{faq.q}</span>
              <span style={{ transform: openFaq === i ? "rotate(180deg)" : "none", transition: "transform 0.2s", flexShrink: 0, color: "#aaa" }}><ChevronDown /></span>
            </button>
            {openFaq === i && (
              <div style={{ padding: "0 0 20px", fontSize: TYPE.small, color: "#555", lineHeight: 1.75 }}>{faq.a}</div>
            )}
          </div>
        ))}
        </div>
      </section>

      </div>
    </NavigationWrapper>
  );
}