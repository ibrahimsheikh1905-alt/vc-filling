"use client";

import React, { useState, useEffect, useRef } from "react";
import NavigationWrapper from "@/components/NavigationWrapper";

const ORANGE = "#ff4b14";


function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 20, height: 20 }}>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15.5H6.5A2.5 2.5 0 0 0 4 21V5.5Z" />
      <path d="M4 5.5v15M8 7h8" />
    </svg>
  );
}
function TrophyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ width: 20, height: 20 }}>
      <path d="M8 4h8v4a4 4 0 1 1-8 0V4Z" />
      <path d="M8 6H5a3 3 0 0 0 3 5M16 6h3a3 3 0 0 1-3 5M12 12v4M9 20h6M10 16h4" />
    </svg>
  );
}
function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 20, height: 20 }}>
      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 16, height: 16 }}>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const toc = [
  "How to Form an Alaska Corporation Yourself in 6 Steps",
  "Alaska Corporation Types",
  "Helpful Resources from the State of Alaska",
  "More Information in This Guide",
];

const cBenefits = [
  "The strongest form of liability protection possible by insulating your personal assets and finances from business debts, obligations, damages, bankruptcy or other liabilities",
  "Several options to create, buy, sell or transfer stock, including publicly",
  "The ability to issue more than one type of stock",
  "The ability to raise more funds by issuing more stock",
  "The ability to sell stock to investors inside and outside the U.S.",
];

const sBenefits = [
  "Options for creating, transferring and selling stock, though not as many as a C Corp",
  "The capacity for up to 100 shareholders",
  "Simpler rules than those that apply to C Corporations",
  "Easy transfer of ownership simply by selling your stock",
  "The possibility of saving money by allowing you to pay less self-employment tax",
];

const resources = ["Division of Corporations", "Department of Revenue", "Department of Labor and Workforce Development"];

// ── Sidebar ───────────────────────────────────────────────────────────────────
function Sidebar({ activeIdx }: { activeIdx: number }) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <aside style={{
      position: "sticky",
      top: 88,
      alignSelf: "flex-start",
      zIndex: 20,
      width: 320,
      flexShrink: 0,
      overflow: "visible",
      borderRight: "1px solid #d9e0e7",
      background: "#fff",
    }}>
      <div style={{ padding: "28px 32px 32px" }}>
        <div style={{
          borderRadius: 14, background: "#ffd9cb", padding: "9px 18px",
          fontSize: 16, color: "#b93408", marginBottom: 12,
        }}>
          Alaska Corp
        </div>

        <nav style={{ marginTop: 12 }}>
          {toc.map((item, i) => (
            <div key={item} onClick={() => scrollTo(`section-${i}`)} style={{
              display: "block", paddingLeft: 14, marginBottom: 16,
              borderLeft: activeIdx === i ? "4px solid #ff4b14" : "4px solid transparent",
              color: activeIdx === i ? "#333" : "#717b90",
              fontSize: 15, lineHeight: 1.42, cursor: "pointer",
              fontWeight: activeIdx === i ? 700 : 400,
            }}>
              {item}
            </div>
          ))}
        </nav>

        <div onClick={() => scrollTo("section-4")} style={{
          marginTop: 16, display: "flex", alignItems: "center", justifyContent: "space-between",
          borderRadius: 14, background: "#ffd9cb", padding: "9px 18px",
          fontSize: 15, color: "#b93408", cursor: "pointer",
        }}>
          <span>Business Taxes</span>
          <ArrowIcon />
        </div>

        {/* CTA card */}
        <div style={{
          marginTop: 40, width: "100%", borderRadius: 18, background: "#fff",
          padding: 20, textAlign: "center",
          boxShadow: "0 18px 35px rgba(0,0,0,0.14)",
        }}>
          <h3 style={{ fontSize: 17, fontWeight: 800 }}>Form Your Business</h3>
          <p style={{ marginTop: 8, fontSize: 13, lineHeight: 1.45 }}>
            Form for $0 (+ State Fee) with a Free 1st Year of Registered Agent
          </p>
          <button style={{
            marginTop: 14, width: "100%", borderRadius: 50,
            background: "#ff4b14", padding: "12px 20px",
            fontSize: 14, fontWeight: 800, color: "#fff", border: "none", cursor: "pointer",
          }}>
            GET STARTED
          </button>
        </div>
      </div>
    </aside>
  );
}

// ── Inline helpers ────────────────────────────────────────────────────────────
function TextLink({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "#ff4b14", cursor: "pointer" }}>{children}</span>;
}
function Para({ children }: { children: React.ReactNode }) {
  return <p style={{ marginBottom: 24, fontSize: 18, lineHeight: 1.65, color: "#161616" }}>{children}</p>;
}
function SectionTitle({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2 id={id} style={{ marginBottom: 24, fontSize: 42, fontWeight: 800, lineHeight: 1.08, letterSpacing: -1.2, color: "#000", scrollMarginTop: 112 }}>
      {children}
    </h2>
  );
}
function SubTitle({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h3 id={id} style={{ marginBottom: 14, marginTop: 40, fontSize: 24, fontWeight: 800, lineHeight: 1.15, color: "#000", scrollMarginTop: 112 }}>
      {children}
    </h3>
  );
}

// ── Hero art ──────────────────────────────────────────────────────────────────
function HeroArt() {
  return (
    <div style={{ marginTop: 32, overflow: "hidden", borderRadius: 12, background: "#e9edf2" }}>
      <div style={{ display: "flex", height: 400, alignItems: "center", justifyContent: "center", padding: 32 }}>
        <div style={{
          position: "relative", height: 270, width: 700, borderRadius: 18,
          border: "10px solid #fff", background: "#fff", boxShadow: "0 25px 60px rgba(0,0,0,0.18)", overflow: "hidden",
        }}>
          {/* dot pattern */}
          <div style={{ position: "absolute", left: 0, top: 0, width: 310, height: "100%", opacity: 0.8,
            backgroundImage: "radial-gradient(#d7dde6 2px,transparent 2px)", backgroundSize: "12px 12px" }} />
          {/* orange dots accent */}
          <div style={{ position: "absolute", left: 95, top: 150, width: 50, height: 92,
            backgroundImage: "radial-gradient(#ff8a64 3px,transparent 3px)", backgroundSize: "12px 12px" }} />
          {/* form card */}
          <div style={{
            position: "absolute", left: 220, top: 78, width: 360,
            borderRadius: "28px 90px 28px 28px", background: "#fff", padding: 30, boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
          }}>
            <div style={{ position: "absolute", right: 32, top: 28, fontSize: 20, fontWeight: 900, fontStyle: "italic", color: "#FF4A00" }}>
              incorp bay
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 800 }}>Form Your Business</h3>
            <div style={{ marginTop: 28, fontSize: 13, fontWeight: 700, color: "#555" }}>Business Name</div>
            <div style={{ marginTop: 12, borderRadius: 50, border: "1px solid #e0e0e0", padding: "14px 24px", fontWeight: 700, color: "#999" }}>
              ALASKA
            </div>
            <div style={{ marginTop: 24, fontSize: 13, fontWeight: 700, color: "#555" }}>Entity Type</div>
            <div style={{ marginTop: 16, display: "flex", gap: 12 }}>
              {["C Corp","S Corp","Nonprofit","LLC"].map((x,i) => (
                <div key={x} style={{
                  borderRadius: 50, border: "1.5px solid",
                  borderColor: i === 0 ? "#ffd0b8" : "#e0e0e0",
                  background: i === 0 ? "#fff3ef" : "#fff",
                  color: i === 0 ? "#ff4b14" : "#777",
                  fontWeight: 700, padding: "10px 18px", fontSize: 13, cursor: "pointer",
                }}>
                  {x}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid #d5dbe3", padding: "24px 42px", fontSize: 16, lineHeight: 1.6, color: "#1f2c45" }}>
        Incorp Bay can take care of all your corporation formation paperwork — and we'll do it for free. Just pay the required Alaska state fee ($250).
      </div>
    </div>
  );
}


// ── Video placeholder ─────────────────────────────────────────────────────────
function VideoBox() {
  return (
    <div style={{ marginTop: 40, overflow: "hidden", borderRadius: "18px 18px 0 0", border: "10px solid #d7dde6", borderBottom: "none", background: "#fff7f1" }}>
      <div style={{ height: 6, background: "#000" }} />
      <div style={{ position: "relative", display: "flex", height: 400, alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 18, fontWeight: 900, letterSpacing: 2 }}>WHAT IS A</div>
          <div style={{ fontSize: 56, fontWeight: 900, lineHeight: 1, color: "#ff4b14" }}>CORPORATION?</div>
        </div>
        <div style={{
          position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)",
          width: 120, height: 68, background: "rgba(33,76,216,0.95)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div style={{ marginLeft: 8, width: 0, height: 0,
            borderTop: "16px solid transparent", borderBottom: "16px solid transparent", borderLeft: "24px solid #fff" }} />
        </div>
      </div>
    </div>
  );
}

// ── Name CTA card ─────────────────────────────────────────────────────────────
function CTANameCard({ text }: { text: string }) {
  return (
    <div style={{
      margin: "36px 0", display: "flex", minHeight: 220, alignItems: "center",
      overflow: "hidden", borderRadius: 18, border: "1px solid #d5dde7", background: "#f5f7f9",
    }}>
      <div style={{ position: "relative", height: 220, width: 260, flexShrink: 0, overflow: "hidden" }}>
        <div style={{
          position: "absolute", bottom: -56, left: 48,
          height: 230, width: 150, borderRadius: 35, border: "8px solid #000",
          background: "#fff", boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          transform: "rotate(-12deg)",
        }}>
          <div style={{ margin: "12px auto 0", height: 20, width: 80, borderRadius: 50, background: "#000" }} />
          <div style={{ padding: 20, fontSize: 12, color: "#555" }}>
            <div style={{ fontWeight: 700 }}>Business Name Search</div>
            <div style={{ marginTop: 28, fontSize: 30, color: "#ddd" }}>Type Name</div>
          </div>
        </div>
      </div>
      <h3 style={{ maxWidth: 330, fontSize: 18, fontWeight: 800, lineHeight: 1.3 }}>{text}</h3>
      <button style={{
        marginLeft: "auto", marginRight: 32, borderRadius: 50,
        background: "#ff4b14", padding: "15px 28px",
        fontSize: 15, fontWeight: 800, color: "#fff", border: "none", cursor: "pointer",
      }}>
        DEPARTMENT OF LABOR
      </button>
    </div>
  );
}

// ── Filing info box ───────────────────────────────────────────────────────────
function FilingBox() {
  const items = [
    "Your business name",
    "The corporation's purpose",
    "Registered Agent's name and address",
    "The corporation's capital structure (number of shares to be issued, who owns them, pricing, etc.)",
    "Names and signatures of incorporators",
  ];
  return (
    <div style={{ margin: "40px 0", borderRadius: 12, border: "1px solid #d5dde7", background: "#f5f7f9", padding: "34px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
      <h4 style={{ marginBottom: 28, fontSize: 18, fontWeight: 800 }}>Here's what is typically included:</h4>
      <ul style={{ paddingLeft: 32 }}>
        {items.map(item => (
          <li key={item} style={{ listStyle: "disc", fontSize: 18, lineHeight: 1.6, marginBottom: 18, paddingLeft: 12 }}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// ── Fees table ────────────────────────────────────────────────────────────────
function FeesTable() {
  const complianceRows = [
    ["Initial Report", "Domestic (Alaskan) Entities are required to file within 6 months of creation. Failure to file will cause non-compliance and may lead to administrative dissolution."],
    ["Due Date", "Within 6 months of the date of formation."],
    ["Filing Fee", "$0"],
    ["Frequency", "Biennially"],
    ["Due Date", "By January 2nd of the filing year."],
    ["Filing Fee", "$100"],
    ["Note", "Entity organized or qualified in even-numbered years must file in even-numbered years; those in odd-numbered years file in odd-numbered years."],
  ];
  return (
    <>
      <h3 style={{ marginBottom: 24, marginTop: 64, fontSize: 20, fontWeight: 800 }}>What Are the Fees and Requirements to Incorporate in Alaska?</h3>
      <div style={{ overflow: "hidden", borderRadius: 18, border: "1px solid #dce1e7", fontSize: 18 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "#f3f5f7", fontWeight: 800 }}>
          {["State Fee","State Filing Time","Expedited Filing Time"].map(h => (
            <div key={h} style={{ padding: 18 }}>{h}</div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "#fff" }}>
          <div style={{ padding: 18, fontWeight: 700, color: "#ff4b14" }}>$250</div>
          <div style={{ padding: 18 }}>3 Weeks</div>
          <div style={{ padding: 18 }}>1 Business Day</div>
        </div>
      </div>

      <h3 style={{ marginBottom: 24, marginTop: 48, fontSize: 24, fontWeight: 800 }}>Alaska Compliance Requirements</h3>
      <div style={{ overflow: "hidden", borderRadius: 18, border: "1px solid #dce1e7", fontSize: 18 }}>
        {complianceRows.map((r, i) => (
          <div key={i} style={{
            display: "grid", gridTemplateColumns: "1fr 1.25fr",
            borderBottom: i < complianceRows.length - 1 ? "1px solid #dce1e7" : "none",
            background: i % 2 ? "#f3f5f7" : "#fff",
          }}>
            <div style={{ padding: 18, fontWeight: 800 }}>{r[0]}</div>
            <div style={{ padding: 18, lineHeight: 1.5 }}>{r[1]}</div>
          </div>
        ))}
      </div>
    </>
  );
}

// ── Resource links ────────────────────────────────────────────────────────────
function ResourceLinks() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      {resources.map(r => (
        <div key={r} style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          borderLeft: "4px solid #677184", background: "#f3f5f7",
          padding: "18px", fontSize: 17, fontWeight: 800, cursor: "pointer",
        }}>
          <span>{r}</span><ExternalIcon />
        </div>
      ))}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function AlaskaCorpPage() {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionIds = ["section-0","section-1","section-2","section-3"];

  useEffect(() => {
    const onScroll = () => {
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.getBoundingClientRect().top <= 160) { setActiveIdx(i); return; }
      }
      setActiveIdx(0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#fff", fontFamily: "'Inter','Helvetica Neue',Arial,sans-serif", color: "#000" }}>
      <NavigationWrapper>
        <div style={{ display: "flex", alignItems: "flex-start", width: "100%", gap: 28 }}>
          <Sidebar activeIdx={activeIdx} />


        <main style={{ flex: 1, width: "100%", maxWidth: 1040, padding: "32px 28px 110px", margin: "0 auto" }}>

          {/* Breadcrumb */}
          <div style={{ marginBottom: 52, display: "inline-flex", alignItems: "center", gap: 16, borderRadius: 12, background: "#f5f6f8", padding: "14px 22px", fontSize: 16, color: "#1b2944" }}>
            <span>Incorp Bay</span><span style={{ color: "#bbb" }}>›</span>
            <span>Corp Formation By State</span><span style={{ color: "#bbb" }}>›</span>
            <span style={{ color: "#ff4b14" }}>Alaska</span>
          </div>

          <h1 style={{ maxWidth: 760, fontSize: 54, fontWeight: 800, lineHeight: 1.08, letterSpacing: -1.4 }}>How to Incorporate in Alaska</h1>
          <p style={{ marginTop: 24, fontSize: 18, fontWeight: 800 }}>Have Incorp Bay do the work for you $0 + state fee</p>
          <button style={{ marginTop: 28, borderRadius: 50, background: "#ff4b14", padding: "16px 26px", fontSize: 16, fontWeight: 800, color: "#fff", border: "none", cursor: "pointer" }}>
            INCORPORATE NOW
          </button>
          <p style={{ marginTop: 28, fontSize: 18, fontWeight: 800 }}>Learn how to form an Alaska corporation yourself</p>
          <div style={{ marginTop: 56, display: "flex", alignItems: "center", gap: 36, fontSize: 15, color: "#15233a" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}><BookIcon />12 min read</span>
            <span style={{ display: "flex", alignItems: "center", gap: 12 }}><TrophyIcon />TrustPilot TrustScore 4.7 | 25,633 reviews</span>
          </div>
          <HeroArt />

          {/* WHY INCORPORATE */}
          <section style={{ marginTop: 64 }}>
            <SectionTitle>Why Incorporate in Alaska?</SectionTitle>
            <Para>Alaska is one of the few states with no personal income tax or sales tax, making it attractive for new businesses to set up shop. In addition to the <TextLink>desirable tax structure</TextLink>, Alaska also offers several <TextLink>business development incentives</TextLink>, provided your corporation meets certain criteria.</Para>
            <Para>For example, the <TextLink>Rural Development Initiative Fund</TextLink> provides private sector employment by financing the start-up and expansion of businesses that will create significant long-term employment.</Para>
            <Para>An Alaska corporation may be the best choice for many entrepreneurs looking to start a larger business. As a corporation, your business is able to buy and trade stock, and when it comes to excess profits, corporations offer more flexibility than a limited liability company (LLC). A corporation is allowed to pass income and losses to its shareholders, who report taxes on an individual tax return at ordinary levels.</Para>
            <SubTitle>Is an LLC Better Than a Corporation?</SubTitle>
            <Para>It all depends on your goals. Limited liability companies are usually better for smaller businesses. An LLC is easier to set up, and you receive many of the same benefits as a corporation, but with less regulation.</Para>
            <Para>Learn more about forming an <TextLink>Alaska LLC</TextLink> so you can decide which business entity is right for you.</Para>
            <SubTitle>Benefits of Forming an Alaska C Corp</SubTitle>
            <p style={{ fontSize: 18 }}>It offers you numerous advantages including, but not limited to:</p>
            <ul style={{ margin: "32px 0 32px 56px" }}>
              {cBenefits.map(b => <li key={b} style={{ listStyle: "disc", fontSize: 18, lineHeight: 1.45, marginBottom: 16 }}>{b}</li>)}
            </ul>
            <SubTitle>Benefits of Forming an Alaska S Corp</SubTitle>
            <p style={{ fontSize: 18 }}>It offers several advantages similar to those provided by a C Corp including, but not limited to:</p>
            <ul style={{ margin: "32px 0 32px 56px" }}>
              {sBenefits.map(b => <li key={b} style={{ listStyle: "disc", fontSize: 18, lineHeight: 1.45, marginBottom: 16 }}>{b}</li>)}
            </ul>
            <Para>In this guide, you'll find information on naming your corporation, getting a Registered Agent, the fees you'll need to pay, business taxes and much more. We also cover what you'll need to register your corporation and how you'll interact with the AK Department of Commerce, Community, and Economic Development, Division of Corporations.</Para>
            <SubTitle>Start a Business in Alaska Checklist</SubTitle>
            <Para>To help you along the way, use our <TextLink>Starting a Business</TextLink> checklist to keep track of everything you need to do to get your business up and running.</Para>
          </section>

          {/* SECTION 0 — 6 STEPS */}
          <section id="section-0" style={{ marginTop: 64, scrollMarginTop: 112 }}>
            <SectionTitle>How to Form an Alaska Corporation Yourself in 6 Steps</SectionTitle>
            <VideoBox />

            <SubTitle>Step 1: Choose a Unique Business Name and Complete a State Business Search</SubTitle>
            <Para>Every Alaska business must have a distinct name that hasn't already been claimed by another business in the state. If you're having difficulty thinking of a name, try using our <TextLink>Business Name Generator</TextLink> to gather ideas. You'll need to follow a few naming rules.</Para>
            <Para>Once you've chosen a name, you'll need to make sure it's available in Alaska. To learn whether another company in the state is using your desired business name, use our tool to do an Alaska entity search.</Para>
            <Para>You can also carry out a name search via the <TextLink>business database</TextLink> on the AK Division of Corporations website.</Para>
            <CTANameCard text="We Can Check Alaska Corporation Name Availability for You" />

            <SubTitle>Step 2: Provide an Official Address for your Corporation</SubTitle>
            <Para>Every Alaska corporation must have a designated address. That could be your home address (if you're running the company from your residence), a building where your office is located or any physical address of your preference. The address can be outside the state of Alaska and can be a P.O. Box.</Para>
            <Para>You may also be able to use a virtual mailbox for your business address. Incorp Bay can provide you with an Alaska virtual mailbox where we'll receive your mail, and scan it for your online review. This can be especially convenient if you run a home-based business and don't want your home address published as part of your business public record.</Para>

            <SubTitle>Step 3: Assign a Registered Agent</SubTitle>
            <Para>Someone who receives official correspondence and is responsible for filing reports with the Secretary of State is known as a Registered Agent. Every Alaska corporation is required to have a Registered Agent.</Para>
            <Para>You can fill this position yourself, assign another manager in your business or use a Registered Agent service. If your Registered Agent in Alaska is a person, they must have a physical street address in Alaska and must be available during business hours to receive important communications and documentation on behalf of your company.</Para>
            <Para>You'll appoint your Registered Agent when you file your Alaska Articles of Incorporation with the AK Division of Corporations, and formally create your business.</Para>
            <Para>All of Incorp Bay's business formation packages include Registered Agent service. It's free for the first year and just $149 per year after that. You can also access a digital dashboard to view any document we've received on your behalf.</Para>
            <div style={{ marginBottom: 40, display: "flex", alignItems: "center", justifyContent: "space-between", borderLeft: "4px solid #677184", background: "#f3f5f7", padding: "24px", fontSize: 20, fontWeight: 800, cursor: "pointer" }}>
              <span>Get a Free Registered Agent When You Start Your Business With Incorp Bay</span>
              <ExternalIcon />
            </div>

            <SubTitle>Step 4: File Your Articles of Incorporation with the AK Division of Corporations</SubTitle>
            <Para>Once you've gathered all the information for your corporation, you'll need to <TextLink>file your Articles of Incorporation</TextLink> with the Division of Corporations to officially create your business.</Para>
            <FilingBox />
            <div style={{ marginBottom: 40, display: "flex", alignItems: "center", justifyContent: "space-between", borderLeft: "4px solid #677184", background: "#f3f5f7", padding: "24px", fontSize: 20, fontWeight: 800, cursor: "pointer" }}>
              <span>Download Incorporation Form</span><ExternalIcon />
            </div>
            <Para>Your Articles of Incorporation <TextLink>can be filed online</TextLink> for immediate processing. You can also mail the form to the Division of Corporations, or Incorp Bay can file it on your behalf. The Alaska corporation filing fee is $250.</Para>
            <div style={{ margin: "40px 0", display: "grid", gridTemplateColumns: "1fr 1.2fr", borderRadius: 18, border: "1px solid #dce1e7", padding: 32, fontSize: 18, gap: 16 }}>
              <b>File by Mail</b>
              <div>State of Alaska Corporations Section<br />PO Box 110806<br />Juneau, AK 99811-0806</div>
            </div>
            <Para>You only need to file your Alaska Articles of Incorporation once, but you're also required to file an <TextLink>initial report</TextLink> after corporation formation, followed by a <TextLink>biennial report</TextLink> once every two years. Incorp Bay can remind you about this, or we can do it for you if you have us handle the paperwork.</Para>
            <CTANameCard text="Let Incorp Bay Handle All the Alaska Corporation Formation Paperwork for You for $0 + the State Fee" />
            <FeesTable />

            <SubTitle>Step 5: Get an Employer Identification Number (EIN) from the Internal Revenue Service</SubTitle>
            <Para>You'll need an <TextLink>EIN</TextLink> to identify your business to the IRS. You'll use this number when filing and paying taxes, when submitting payroll information and payments for your employees and for opening a business bank account. You can obtain one directly from the IRS, or Incorp Bay can get one for you as part of the Alaska corporation formation process.</Para>

            <SubTitle>Step 6: Write Bylaws</SubTitle>
            <Para>A set of rules that govern how a corporation will be run, bylaws detail how many directors the corporation will have, whether the board of directors will have annual meetings and what the voting requirements are, among other things.</Para>
            <Para>Some states require companies to create bylaws. You're not legally required to have them in Alaska, but it's always a good idea to write them to protect your business from any future changes and events.</Para>
          </section>

          {/* SECTION 1 — CORP TYPES */}
          <section id="section-1" style={{ marginTop: 64, scrollMarginTop: 112 }}>
            <SectionTitle>Alaska Corporation Types</SectionTitle>

            <SubTitle>C Corporation</SubTitle>
            <Para>When you file to start a corporation, by default, it's a C Corp. This is the choice for large businesses that will trade shares in the stock market.</Para>
            <Para>An Alaska C Corp will offer you several liability protections, but it will also be required to adhere to numerous strict rules and regulations. It will also likely have a substantial amount of administrative overhead and won't enjoy as many tax advantages as other corporation types.</Para>
            <Para>Learn more about <TextLink>C Corporations.</TextLink></Para>

            <SubTitle>S Corporation</SubTitle>
            <Para>Technically, an S Corporation isn't a business entity the way LLCs and C Corporations are. It's a tax filing status. An LLC or a C Corporation can be an S Corporation. It's just a matter of filing a form with the IRS.</Para>
            <Para>The main reason to file as an S Corp is to save money on self-employment taxes. To get an idea of how much money you might save, use our <TextLink>S Corp Tax Calculator.</TextLink></Para>
            <Para>If you want your business to be treated as an Alaska S Corp, file the IRS <TextLink>Election by a Small Business Corporation</TextLink> form, also known as Form 2553 or an <TextLink>S Corp Election form.</TextLink></Para>
            <Para>Consult with your accountant or tax advisor to determine whether this is your best option.</Para>
            <Para>Learn more about <TextLink>S Corporations.</TextLink></Para>
            <Para>Compare <TextLink>S Corp vs. C Corp</TextLink> to learn the benefits and drawbacks of both, and decide which one will best suit your needs.</Para>

            <SubTitle>Professional Corporation</SubTitle>
            <Para>Some states, including Alaska, allow certain occupations to form Professional Corporations. The state's Professional Corporation Act defines this as:</Para>
            <Para>"...a corporation organized under this chapter to render a professional service. 'Professional service' means a type of highly skilled, technical, and specialized personal service rendered to the public by persons licensed by the state."</Para>
            <div style={{ margin: "40px 0", borderRadius: 12, border: "1px solid #d5dde7", background: "#f5f7f9", padding: 48, boxShadow: "0 4px 14px rgba(0,0,0,0.07)" }}>
              <h4 style={{ marginBottom: 40, fontSize: 25, fontWeight: 800, lineHeight: 1.45 }}>Per Alaska Statutes, Title 8, a few of the professions permitted to form an Alaska Professional Corporation include, but may not be limited to: <TextLink>Title 8. Business and Professions</TextLink></h4>
              <ul style={{ marginLeft: 36 }}>
                {["Accountants","Attorneys","Chiropractors","Dieticians","Optometrists","Veterinarians"].map(x => (
                  <li key={x} style={{ listStyle: "disc", fontSize: 20, marginBottom: 24 }}>{x}</li>
                ))}
              </ul>
            </div>
            <Para>Check with the AK Division of Corporations to confirm whether your business should and can be a Professional Corporation.</Para>

            <SubTitle>Cooperative Corporation</SubTitle>
            <Para>Put simply, a Cooperative Corporation is one that places ownership and/or control of the corporation in the hands of the employees or patrons of the corporation.</Para>
            <Para>In many cases, Cooperative Corporations will have certain obligations to fill. For example, as per Alaska Statutes <TextLink>Title 10, Chapter 15, Article 1, § 10.15.015</TextLink> all Alaska Cooperative Corporations must write and adopt initial bylaws of a cooperative.</Para>
            <Para>For more information on legalities and the formation of Cooperative Corporations, review the <TextLink>Alaska Cooperative Corporation Act.</TextLink></Para>

            <SubTitle>Foreign Corporation</SubTitle>
            <Para>If your business operates in another state and you want to expand into Alaska — or vice versa — you'll need to form a Foreign Corporation.</Para>

            <SubTitle>Nonprofit Corporation</SubTitle>
            <Para>Charitable organizations can incorporate as nonprofit corporations. This means all the profits they generate are donated to the organization supported by the charity, minus administrative costs.</Para>
            <Para>A <TextLink>nonprofit corporation</TextLink> is also exempt from federal and state taxes, allowing more of the profit to benefit the charity.</Para>
            <div style={{ background: "#f7f8fc", borderRadius: 10, padding: "16px 24px", marginBottom: 24, fontSize: 16, color: "#555" }}>
              <strong>Note:</strong> Everything in this guide applies to for-profit corporations, and mostly to C Corps and S Corps. Items listed as requirements for forming a corporation may or may not also apply to nonprofits.
            </div>

            <SubTitle>Limited Liability Company</SubTitle>
            <Para>Depending on what type of business you want to start, or your personal circumstances and goals, an LLC may be a better option. For example, you may not need the options to buy and sell stock. Or you may simply want to build a small business with a few employees or even just yourself.</Para>
            <Para><TextLink>An Alaska LLC</TextLink> is usually a better option for smaller businesses. It's easier to set up, but it still offers you certain advantages you'd get from a corporation. You can even have your LLC treated as an S Corporation for tax purposes to save you money.</Para>
            <Para>Regardless of which direction you decide to go, we can help you with your Alaska business registration.</Para>
            <Para>Learn more about <TextLink>limited liability companies.</TextLink></Para>

            <SubTitle>Sole Proprietorship or Partnership</SubTitle>
            <Para>Because there's no real setup to do, these are the simplest types of businesses to set up. By default, if you don't choose to form a separate business entity, you'll have either a sole proprietorship (just you) or a partnership (you and one or more other people).</Para>
            <Para>Neither of these options provide you with any special benefits or liability protections and can leave your personal assets vulnerable. For these reasons, we don't recommend them.</Para>
            <Para>Compare <TextLink>business entity types</TextLink> to decide which one is best for you.</Para>
          </section>

          {/* SECTION 2 — RESOURCES */}
          <section id="section-2" style={{ marginTop: 64, scrollMarginTop: 112 }}>
            <SectionTitle>Helpful Resources from the State of Alaska</SectionTitle>
            <ResourceLinks />
          </section>

          {/* SECTION 3 — MORE INFO */}
          <section id="section-3" style={{ marginTop: 56, scrollMarginTop: 112 }}>
            <SectionTitle>More Information in This Guide</SectionTitle>
            <p style={{ marginBottom: 40, fontSize: 18 }}>You'll find plenty more insight and guidance on the other pages of this guide, including:</p>
            {[
              ["Alaska Corporation Names","How to search the state business registry and find the right name. Includes information on naming rules, fictitious names, reserving a corporation name and more."],
              ["Alaska Registered Agents","How to appoint, change and search for Registered Agents. Also includes the duties they fulfill and the rules they're required to follow."],
              ["Alaska Incorporation Fees","Details the various fees you'll need to pay, as well as the state and federal requirements you'll need to meet. Includes details about Employer Identification Numbers (EINs), state and federal business licenses, public information reports and more."],
              ["Alaska Corporation Taxes","Covers the various taxes you'll have to pay to the state and federal governments. Includes details about state taxes such as corporate income, and federal taxes such as income and self-employment."],
            ].map(([h,p]) => (
              <div key={h} style={{ marginBottom: 36 }}>
                <h3 style={{ marginBottom: 16, fontSize: 24, fontWeight: 800 }}>{h}</h3>
                <p style={{ fontSize: 18, lineHeight: 1.7 }}>{p}</p>
                
              </div>
            
            ))}
             <h2 style={{ marginTop: 48, fontSize: 42, fontWeight: 800, letterSpacing: -1 }}>Launch Your Business With Incorp Bay</h2>
            <p style={{ marginTop: 32, fontSize: 18 }}>No Contracts. No Surprises. Only $0 + State Fee to Launch Your Business.</p>
            <button style={{ marginTop: 32, borderRadius: 50, background: "#ff4b14", padding: "16px 28px", fontSize: 17, fontWeight: 800, color: "#fff", border: "none", cursor: "pointer" }}>
              DEPARTMENT OF LABOR AND WORKFORCE DEVELOPMENT
            </button>

          </section>
        </main>
        </div>
      </NavigationWrapper>
    </div>
  );
}