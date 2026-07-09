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
  "How to Form a California Corporation Yourself in 6 Steps",
  "California Corporation Types",
  "Helpful Resources from the State of California",
  "More Information in This Guide",
];

const cBenefits = [
  "The ability to sell stock to investors inside and outside the U.S.",
  "Several options to create, buy, sell or transfer stock, including publicly",
  "The ability to issue more than one type of stock",
  "The ability to raise more funds by issuing more stock",
  "The strongest form of liability protection possible by insulating your personal assets and finances from business debts, obligations, damages, bankruptcy or other liabilities",
];

const sBenefits = [
  "The capacity for up to 100 shareholders",
  "Simpler rules than those applicable to C Corporations",
  "Easy transfer of ownership simply by selling your stock",
  "The possibility of saving money by allowing you to pay less self-employment tax",
  "Options for creating, transferring and selling stock, though not as many as a C Corp (for example, an S Corp is only permitted to sell one class of stock)",
];

const resources = ["California Secretary of State", "Department of Tax and Fee Administration", "Labor and Workforce Development Agency"];

// ── Sidebar ───────────────────────────────────────────────────────────────────
function Sidebar({ activeIdx }: { activeIdx: number }) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <aside style={{
      position: "sticky", top: 88, alignSelf: "flex-start", zIndex: 20,
      width: 360, flexShrink: 0, overflow: "visible",
      borderRight: "1px solid #d9e0e7", background: "#fff",
    }}>
      <div style={{ padding: "32px 40px 40px" }}>
        <div style={{
          borderRadius: 14, background: "#ffd9cb", padding: "9px 20px",
          fontSize: 16, color: "#b93408", marginBottom: 12,
        }}>
          California Corp
        </div>

        <nav style={{ marginTop: 12 }}>
          {toc.map((item, i) => (
            <div key={item} onClick={() => scrollTo(`section-${i}`)} style={{
              display: "block", paddingLeft: 16, marginBottom: 20,
              borderLeft: activeIdx === i ? "4px solid #ff4b14" : "4px solid transparent",
              color: activeIdx === i ? "#333" : "#717b90",
              fontSize: 16, lineHeight: 1.4, cursor: "pointer",
              fontWeight: activeIdx === i ? 700 : 400,
            }}>
              {item}
            </div>
          ))}
        </nav>

        <div onClick={() => scrollTo("section-4")} style={{
          marginTop: 20, display: "flex", alignItems: "center", justifyContent: "space-between",
          borderRadius: 14, background: "#ffd9cb", padding: "9px 20px",
          fontSize: 16, color: "#b93408", cursor: "pointer",
        }}>
          <span>Business Taxes</span>
          <ArrowIcon />
        </div>

        {/* CTA card */}
        <div style={{
          marginTop: 56, width: 275, borderRadius: 18, background: "#fff",
          padding: 18, textAlign: "center",
          boxShadow: "0 18px 35px rgba(0,0,0,0.14)",
        }}>
          <h3 style={{ fontSize: 19, fontWeight: 800 }}>Form Your Business</h3>
          <p style={{ marginTop: 8, fontSize: 15, lineHeight: 1.45 }}>
            Form for $0 (+ State Fee) with a Free 1st Year of Registered Agent
          </p>
          <button style={{
            marginTop: 16, width: "100%", borderRadius: 50,
            background: "#ff4b14", padding: "14px 22px",
            fontSize: 15, fontWeight: 800, color: "#fff", border: "none", cursor: "pointer",
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
    <h2 id={id} style={{ marginBottom: 28, fontSize: 44, fontWeight: 800, lineHeight: 1.08, letterSpacing: -1.5, color: "#000", scrollMarginTop: 112 }}>
      {children}
    </h2>
  );
}
function SubTitle({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h3 id={id} style={{ marginBottom: 16, marginTop: 48, fontSize: 24, fontWeight: 800, lineHeight: 1.15, color: "#000", scrollMarginTop: 112 }}>
      {children}
    </h3>
  );
}

// ── Hero art ──────────────────────────────────────────────────────────────────
function HeroArt() {
  return (
    <div style={{ marginTop: 32, overflow: "hidden", borderRadius: 12, background: "#e9edf2" }}>
      <div style={{ display: "flex", height: 420, alignItems: "center", justifyContent: "center", padding: 40 }}>
        <div style={{
          position: "relative", height: 285, width: 720, borderRadius: 18,
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
            position: "absolute", left: 230, top: 82, width: 360,
            borderRadius: "28px 90px 28px 28px", background: "#fff", padding: 30, boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
          }}>
            <div style={{ position: "absolute", right: 32, top: 28, fontSize: 20, fontWeight: 900, fontStyle: "italic", color: "#FF4A00" }}>
              incorp bay
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 800 }}>Form Your Business</h3>
            <div style={{ marginTop: 28, fontSize: 13, fontWeight: 700, color: "#555" }}>Business Name</div>
            <div style={{ marginTop: 12, borderRadius: 50, border: "1px solid #e0e0e0", padding: "14px 24px", fontWeight: 700, color: "#999" }}>
              CALIFORNIA
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
      <div style={{ borderTop: "1px solid #d5dbe3", padding: "24px 44px", fontSize: 16, lineHeight: 1.6, color: "#1f2c45" }}>
        Incorp Bay can take care of all your corporation formation paperwork — and we'll do it for free. Just pay the required California state fee ($105).
      </div>
    </div>
  );
}


// ── Video placeholder ─────────────────────────────────────────────────────────
function VideoBox() {
  return (
    <div style={{ marginTop: 40, overflow: "hidden", borderRadius: "18px 18px 0 0", border: "10px solid #d7dde6", borderBottom: "none", background: "#fff7f1" }}>
      <div style={{ height: 6, background: "#000" }} />
      <div style={{ position: "relative", display: "flex", height: 420, alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 24, fontWeight: 900, letterSpacing: 2 }}>WHAT IS A</div>
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
      margin: "40px 0", display: "flex", minHeight: 220, alignItems: "center",
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
      <h3 style={{ maxWidth: 360, fontSize: 24, fontWeight: 800, lineHeight: 1.3 }}>{text}</h3>
      <button style={{
        marginLeft: "auto", marginRight: 48, borderRadius: 50,
        background: "#ff4b14", padding: "15px 28px",
        fontSize: 15, fontWeight: 800, color: "#fff", border: "none", cursor: "pointer",
      }}>
        Labor and Workforce Development Agency
      </button>
    </div>
  );
}

// ── Filing info box ───────────────────────────────────────────────────────────
function FilingBox() {
  const items = [
    "The exact name of the corporation",
    "The initial street address of the corporation",
    "The initial mailing address of the corporation (if different from the street address)",
    "Name and address of Agent for Service of Process",
    "The class and total number of shares the corporation is authorized to issue — do not leave blank or enter zero (0)",
    "Incorporator's name, email and signature",
    "Filing date",
  ];
  return (
    <div style={{ margin: "40px 0", borderRadius: 12, border: "1px solid #d5dde7", background: "#f5f7f9", padding: "36px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
      <h4 style={{ marginBottom: 32, fontSize: 18, fontWeight: 800 }}>Here's what is required in your California Articles of Incorporation:</h4>
      <ul style={{ paddingLeft: 32 }}>
        {items.map(item => (
          <li key={item} style={{ listStyle: "disc", fontSize: 18, lineHeight: 1.6, marginBottom: 24, paddingLeft: 12 }}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// ── Fees table ────────────────────────────────────────────────────────────────
function FeesTable() {
  const complianceRows = [
    ["Statement of Information - Frequency", "Annually"],
    ["Statement of Information - Due Date", "During six-month period ending on last day of anniversary month of incorporation or qualification."],
    ["Statement of Information - Filing Fee", "$25"],
    ["Important", "The initial Statement of Information filing is due within 90 days of the entity formation date."],
    ["California Franchise Tax - Frequency", "Annually"],
    ["California Franchise Tax - Filing Fee", "$800 minimum. Franchise Tax is waived the 1st year for corporations but not LLCs."],
    ["Note", "We do not assist in the filing of the Franchise Tax Report."],
  ];
  return (
    <>
      <h3 style={{ marginBottom: 24, marginTop: 64, fontSize: 26, fontWeight: 800 }}>What are the Fees and Requirements to Incorporate in California?</h3>
      <div style={{ overflow: "hidden", borderRadius: 18, border: "1px solid #dce1e7", fontSize: 18 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "#f3f5f7", fontWeight: 800 }}>
          {["State Fee","State Filing Time","Expedited Filing Time"].map(h => (
            <div key={h} style={{ padding: 18 }}>{h}</div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "#fff" }}>
          <div style={{ padding: 18, fontWeight: 700, color: "#ff4b14" }}>$105*</div>
          <div style={{ padding: 18 }}>4 Weeks</div>
          <div style={{ padding: 18 }}>5 Business Days</div>
        </div>
      </div>
      <p style={{ marginTop: 10, fontSize: 14, color: "#555" }}>*includes a $5 certified copy fee</p>

      <h3 style={{ marginBottom: 24, marginTop: 48, fontSize: 24, fontWeight: 800 }}>Statement of Information</h3>
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
          padding: "20px", fontSize: 17, fontWeight: 800, cursor: "pointer",
        }}>
          <span>{r}</span><ExternalIcon />
        </div>
      ))}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function CaliforniaCorpPage() {
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
        <div style={{ display: "flex", alignItems: "flex-start", width: "100%" }}>
          <Sidebar activeIdx={activeIdx} />


        <main style={{ width: "100%", maxWidth: 1040, padding: "36px 32px 96px", margin: "0 auto" }}>

          {/* Breadcrumb */}
          <div style={{ marginBottom: 56, display: "inline-flex", alignItems: "center", gap: 20, borderRadius: 12, background: "#f5f6f8", padding: "16px 24px", fontSize: 16, color: "#1b2944" }}>
            <span>Incorp Bay</span><span style={{ color: "#bbb" }}>›</span>
            <span>Corp Formation By State</span><span style={{ color: "#bbb" }}>›</span>
            <span style={{ color: "#ff4b14" }}>California</span>
          </div>

          <h1 style={{ maxWidth: 760, fontSize: 54, fontWeight: 800, lineHeight: 1.08, letterSpacing: -1.4 }}>How to Incorporate in California</h1>
          <p style={{ marginTop: 24, fontSize: 18, fontWeight: 800 }}>Have Incorp Bay do the work for you $0 + state fee</p>
          <button style={{ marginTop: 28, borderRadius: 50, background: "#ff4b14", padding: "16px 26px", fontSize: 16, fontWeight: 800, color: "#fff", border: "none", cursor: "pointer" }}>
            INCORPORATE NOW
          </button>
          <p style={{ marginTop: 28, fontSize: 18, fontWeight: 800 }}>Learn how to form a CA corporation yourself</p>
          <div style={{ marginTop: 58, display: "flex", alignItems: "center", gap: 36, fontSize: 15, color: "#15233a" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}><BookIcon />14 min read</span>
            <span style={{ display: "flex", alignItems: "center", gap: 12 }}><TrophyIcon />TrustPilot TrustScore 4.7 | 25,633 reviews</span>
          </div>
          <HeroArt />

          {/* WHY INCORPORATE */}
          <section style={{ marginTop: 64 }}>
            <SectionTitle>Why Start a California Corporation?</SectionTitle>
            <Para>The state of California offers an extensive list of business incentives, giving businesses in California a head start. Your corporation may be able to take advantage of these incentives, provided it meets qualifying criteria.</Para>
            <Para>For example, the <TextLink>Create Rebate Program</TextLink> provides qualified businesses with a financial incentive equal to 3.9 to 5 percent of the annual payroll of new full-time permanent employees.</Para>
            <Para>For a lot of entrepreneurs looking to start a larger business, an AR incorporation may be the best choice. As a corporation, your business is able to buy and trade stock, and when it comes to excess profits, corporations offer more flexibility than a limited liability company (LLC). A corporation is allowed to pass income and losses to its shareholders, who report taxes on an individual tax return at ordinary levels.</Para>
            <SubTitle>Is an LLC Better Than a Corporation?</SubTitle>
            <Para>It all depends on your goals. For smaller businesses, limited liability companies are usually a better option. An LLC is easier to set up, and you receive many of the same benefits as a corporation, but with less regulation.</Para>
            <Para>Learn more about forming an <TextLink>California LLC</TextLink> so you can decide which business entity is right for you.</Para>
            <SubTitle>Benefits of Starting a California C Corp</SubTitle>
            <p style={{ fontSize: 18 }}>It offers you numerous advantages including, but not limited to:</p>
            <ul style={{ margin: "32px 0 32px 56px" }}>
              {cBenefits.map(b => <li key={b} style={{ listStyle: "disc", fontSize: 18, lineHeight: 1.6, marginBottom: 16 }}>{b}</li>)}
            </ul>
            <SubTitle>Benefits of Starting a California S Corp</SubTitle>
            <p style={{ fontSize: 18 }}>It offers several advantages similar to those provided by a C Corp including, but not limited to:</p>
            <ul style={{ margin: "32px 0 32px 56px" }}>
              {sBenefits.map(b => <li key={b} style={{ listStyle: "disc", fontSize: 18, lineHeight: 1.6, marginBottom: 16 }}>{b}</li>)}
            </ul>
            <Para>In this guide, you'll find information on naming your corporation, getting a Registered Agent, the fees you'll need to pay, business taxes and much more. We also cover what you'll need to register your corporation and how you'll interact with the CA Secretary of State (SOS).</Para>
            <SubTitle>Start a Business in California Checklist</SubTitle>
            <Para>To help you along the way, use our <TextLink>Starting a Business</TextLink> checklist to keep track of everything you need to do to get your business up and running.</Para>
          </section>

          {/* SECTION 0 — 6 STEPS */}
          <section id="section-0" style={{ marginTop: 64, scrollMarginTop: 112 }}>
            <SectionTitle>How to Form a California Corporation Yourself in 6 Steps</SectionTitle>
            <VideoBox />

            <SubTitle>Step 1: Choose a Unique Business Name and Complete a State Business Search</SubTitle>
            <Para>Every California business must have a unique name that hasn't already been claimed by another business in the state. If you're having trouble coming up with a name, try using our <TextLink>Business Name Generator</TextLink> to gather ideas. You'll need to follow a few naming rules, which you can read about in detail on the California Corporation Names page.</Para>
            <Para>Once you've chosen a name, you'll need to make sure it's available in California. To learn whether another company in the state is using your desired business name, use our tool to do a California entity search.</Para>
            <Para>You can also carry out a business name search on the CA Secretary of State website.</Para>
            <CTANameCard text="We Can Check California Corporation Name Availability for You" />

            <SubTitle>Step 2: Provide an Official Address for your Corporation</SubTitle>
            <Para>Every California corporation must have a designated address. That could be your home address (if you're running the company from your residence), a building where your office is located or any physical address of your preference. The address can be outside the State of California and can be a P.O. Box.</Para>
            <Para>You may also be able to use a virtual mailbox for your business address. Incorp Bay can provide you with a California virtual mailbox where we'll receive your mail and scan it for your online review. This can be especially convenient if you run a home-based business and don't want your home address published as part of your business public record.</Para>

            <SubTitle>Step 3: Assign a Registered Agent</SubTitle>
            <Para>Most states require business entities to have a Registered Agent. In California, it's called an Agent for Service of Process, but the purpose is the same. We'll use these terms interchangeably.</Para>
            <Para>A business entity's agent receives official correspondence and is responsible for filing reports with the Secretary of State.</Para>
            <Para>You can fill this position, assign another manager in your business or use a Registered Agent service. If your California Registered Agent is a person, they must have a physical street address in California and must be present during business hours to receive important documents on behalf of your company.</Para>
            <Para>You'll appoint your Registered Agent when you file your Articles of Incorporation in California and officially form your corporation.</Para>
            <Para>All of Incorp Bay's business formation packages include Registered Agent service. It's free for the first year and just $149 per year after that. You can also access a digital dashboard to view any document we've received on your behalf.</Para>
            <Para><TextLink>Learn More About California Registered Agent</TextLink></Para>
            <div style={{ marginBottom: 40, display: "flex", alignItems: "center", justifyContent: "space-between", borderLeft: "4px solid #677184", background: "#f3f5f7", padding: "24px", fontSize: 20, fontWeight: 800, cursor: "pointer" }}>
              <span>Get a Free Registered Agent with Incorp Bay</span>
              <ExternalIcon />
            </div>

            <SubTitle>Step 4: File Your Certificate of Formation with the CA Secretary of State</SubTitle>
            <Para>Once you've gathered all the information for your corporation, you'll need to file a form with the Secretary of State to officially create your business.</Para>
            <FilingBox />
            <div style={{ marginBottom: 40, display: "flex", alignItems: "center", justifyContent: "space-between", borderLeft: "4px solid #677184", background: "#f3f5f7", padding: "24px", fontSize: 20, fontWeight: 800, cursor: "pointer" }}>
              <span>Download Incorporation Form</span><ExternalIcon />
            </div>
            <Para>Your Articles of Incorporation can be filed online via the Secretary of State website. You can also mail a paper form to the Office of the Secretary of State, or Incorp Bay can file it on your behalf. The California corporation filing fee is $100, and an additional $5 is charged for a certified copy of your document.</Para>
            <div style={{ margin: "40px 0", display: "grid", gridTemplateColumns: "1fr 1.2fr", borderRadius: 18, border: "1px solid #dce1e7", padding: 32, fontSize: 18, gap: 16 }}>
              <b>File by Mail</b>
              <div>California Secretary of State<br />1401 W. Capitol<br />Suite 250<br />Little Rock, AR 72201</div>
            </div>

            <Para>You only need to file your Articles of Incorporation in California once, but once a year thereafter by May 1, you'll also need to file an annual corporation franchise tax report with the Secretary of State in AR. Incorp Bay can remind you about this every year, or we can do it for you if you have us handle the paperwork.</Para>
            <CTANameCard text="Let Incorp Bay Handle All the California Corporation Formation Paperwork for You for $0 + the State Fee" />
            <FeesTable />

            <SubTitle>Step 5: Get an Employer Identification Number (EIN) from the Internal Revenue Service</SubTitle>
            <Para>You'll need an <TextLink>EIN</TextLink> to identify your business to the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees and for opening a business bank account. You can obtain one directly from the IRS, or Incorp Bay can get one for you as part of the California corporation formation process.</Para>

            <SubTitle>Step 6: Write Bylaws</SubTitle>
            <Para>A set of rules that govern how a corporation will be run, bylaws detail how many directors the corporation will have, whether the board of directors will have annual meetings and what the voting requirements are, among other things.</Para>
            <Para>Some states require companies to create bylaws. But in California, you're not legally required to have bylaws unless the Articles of Incorporation don't specify the number of directors in the corporation. You're also not required to file bylaws with the CA Secretary of State, but you must keep a copy at the corporation's principal address. Regardless of whether bylaws are legally required, it's a good idea to write them to protect your business from any future changes and events.</Para>
          </section>

          {/* SECTION 1 — CORP TYPES */}
          <section id="section-1" style={{ marginTop: 64, scrollMarginTop: 112 }}>
            <SectionTitle>California Corporation Types</SectionTitle>

            <SubTitle>C Corporation</SubTitle>
            <Para>When you file to start a corporation, by default, it's a C Corp. This is the choice for large businesses that will trade shares in the stock market.</Para>
            <Para>An California C Corporation will offer you several liability protections, but it will also be required to adhere to numerous strict rules and regulations. It will also likely have a substantial amount of administrative overhead and won't enjoy as many tax advantages as other corporation types.</Para>
            <Para>Learn more about <TextLink>C Corporations.</TextLink></Para>

            <SubTitle>S Corporation</SubTitle>
            <Para>Technically, an S Corporation isn't a business entity the way LLCs and C Corporations are. It's a tax filing status. An LLC or a C Corporation can be an S Corporation. It's just a matter of filing a form with the IRS.</Para>
            <Para>The main reason to file as an S Corp is to save money on self-employment taxes. To get an idea of how much money you might save, use our <TextLink>S Corp Tax Calculator.</TextLink></Para>
            <Para>If you want your business to be treated as a California S Corp, file the IRS <TextLink>Election by a Small Business Corporation</TextLink> form, also known as Form 2553 or an <TextLink>S Corp Election form.</TextLink></Para>
            <Para>Consult with your accountant or tax advisor to determine whether this is your best option.</Para>
            <Para>Learn more about <TextLink>S Corporations.</TextLink></Para>
            <Para>Compare <TextLink>S Corp vs. C Corp</TextLink> to learn the benefits and drawbacks of both, and decide which one will best suit your needs.</Para>

            <SubTitle>Professional Corporation</SubTitle>
            <Para>Some states, including California, allow certain occupations to form Professional Corporations and offer professional services. The state's Moscone-Knox Professional Corporation Act defines these services as:</Para>
            <Para>"...any type of professional services that may be lawfully rendered only pursuant to a license, certification, or registration authorized by the Business and Professions Code, the Chiropractic Act, or the Osteopathic Act..."</Para>
            <div style={{ margin: "40px 0", borderRadius: 12, border: "1px solid #d5dde7", background: "#f5f7f9", padding: 48, boxShadow: "0 4px 14px rgba(0,0,0,0.07)" }}>
              <h4 style={{ marginBottom: 40, fontSize: 18, fontWeight: 800, lineHeight: 1.45 }}>Per Title 1, Division 3, Part 4, § 13401.5 of the Moscone-Knox Professional Corporation Act, the professions permitted to form a California Professional Corporation include, but may not be limited to: <TextLink>Title 8. Business and Professions</TextLink></h4>
              <ul style={{ marginLeft: 36 }}>
                {["Registered nurses","Chiropractors","Dentists","Doctors"].map(x => (
                  <li key={x} style={{ listStyle: "disc", fontSize: 19, marginBottom: 24 }}>{x}</li>
                ))}
              </ul>
            </div>
            <Para>Check with the AR Secretary of State to confirm whether your business should and can be a Professional Corporation.</Para>

            <SubTitle>Close Corporation</SubTitle>
            <Para>Put simply, a Close Corporation is one that has a limited number of shareholders and isn't publicly traded.</Para>
            <Para>Usually, Close Corporations are exempt from corporate requirements, such as having a board of directors and holding annual meetings. Per the state's Corporations Code Title 1, Division 1, Chapter 1, § 158, a California Close Corporation is a business entity that has no more than 35 shareholders and holds articles containing the statement "this corporation is a close corporation."</Para>
            <Para>This entity is often chosen by family-owned businesses to prevent non-family members from establishing or claiming any ownership of the company.</Para>

            <SubTitle>Foreign Corporation</SubTitle>
            <Para>If your business operates in another state and you want to expand into California — or vice versa — you'll need to form a Foreign Corporation.</Para>

            <SubTitle>Nonprofit Corporation</SubTitle>
            <Para>Charitable organizations can incorporate as nonprofit corporations. This means all the profits they generate are donated to the organization supported by the charity, minus administrative costs.</Para>
            <Para>A <TextLink>nonprofit corporation</TextLink> is also exempt from federal and state taxes, allowing more of the profit to benefit the charity.</Para>
      <div style={{ background: "#f7f8fc", borderRadius: 10, padding: "16px 24px", marginBottom: 24, fontSize: 16, color: "#555" }}>
              <strong>Note:</strong> Everything in this guide applies to for-profit corporations, and mostly to C Corps and S Corps. Items listed as requirements for forming a corporation may or may not also apply to nonprofits.
            </div>

            <SubTitle>Limited Liability Company</SubTitle>
            <Para>Depending on the kind of business you want to start, or your personal circumstances and goals, a limited liability company (LLC) may be a better option. For example, you may only want to build a small business with just yourself and a few employees, or you may not need the options to buy and sell stock.</Para>
            <Para><TextLink>An California LLC</TextLink> is usually a better option for smaller businesses. It's easier to set up, but it still offers you certain advantages you'd get from a corporation. You can even have your LLC treated as an S Corporation for tax purposes to save you money.</Para>
            <Para>Regardless of which direction you decide to go, we can help you with your California business registration.</Para>
            <Para>Learn more about <TextLink>limited liability companies.</TextLink></Para>

            <SubTitle>Sole Proprietorship or Partnership</SubTitle>
            <Para>Because there's no real setup to do with sole proprietorships, these are considered the simplest types of businesses to set up. If you don't choose to form a separate business entity, by default, you'll have either a sole proprietorship (just you) or a partnership (you and one or more other people).</Para>
            <Para>Neither of these options provide you with any special benefits or liability protections and can leave your personal assets vulnerable. For these reasons, we don't recommend them.</Para>
            <Para>Compare <TextLink>business entity types</TextLink> to decide which one is best for you.</Para>
          </section>

          {/* SECTION 2 — RESOURCES */}
          <section id="section-2" style={{ marginTop: 64, scrollMarginTop: 112 }}>
            <SectionTitle>Helpful Resources from the State of California</SectionTitle>
            <ResourceLinks />
          </section>

          {/* SECTION 3 — MORE INFO */}
          <section id="section-3" style={{ marginTop: 56, scrollMarginTop: 112 }}>
            <SectionTitle>More Information in This Guide</SectionTitle>
            <p style={{ marginBottom: 40, fontSize: 18 }}>You'll find plenty more insight and guidance on the other pages of this guide, including:</p>
            {[
              ["California Corporation Names","How to search the state business registry and find the right name. Includes information on naming rules, fictitious names, reserving names for CA corporations and more."],
              ["California Registered Agents","How to appoint, change and search for Registered Agents. Also includes the duties they fulfill and the rules they're required to follow."],
              ["California Incorporation Fees and Requirements","Details the various fees you'll need to pay and the state and federal requirements you'll need to meet. Includes details about Employer Identification Numbers (EINs), state and federal business licenses, Statement of Information reports and more."],
              ["California Taxes","Covers the various taxes you'll have to pay to the state and federal governments. Includes details about state taxes such as sales and franchise, and federal taxes such as income and self-employment."],
            ].map(([h,p]) => (
              <div key={h} style={{ marginBottom: 36 }}>
                <h3 style={{ marginBottom: 16, fontSize: 24, fontWeight: 800 }}>{h}</h3>
                <p style={{ fontSize: 18, lineHeight: 1.7 }}>{p}</p>
              </div>
            ))}
            <h2 style={{ marginTop: 48, fontSize: 42, fontWeight: 800, letterSpacing: -1 }}>Launch Your Business With Incorp Bay</h2>
            <p style={{ marginTop: 32, fontSize: 18 }}>No Contracts. No Surprises. Only $0 + State Fee to Launch Your Business.</p>
            <button style={{ marginTop: 32, borderRadius: 50, background: "#ff4b14", padding: "16px 28px", fontSize: 17, fontWeight: 800, color: "#fff", border: "none", cursor: "pointer" }}>
              Labor and Workforce Development Agency
            </button>
          </section>


        </main>
      </div>
    </NavigationWrapper>
  </div>
  );
}