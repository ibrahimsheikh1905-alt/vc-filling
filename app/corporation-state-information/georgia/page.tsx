"use client";

import React, { useState, useEffect } from "react";
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
  "How to Form a Georgia Corporation Yourself in Six Steps",
  "Georgia Corporation Types",
  "Helpful Resources from the State of Georgia",
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

const resources = [
  "Georgia State Website",
  "Georgia Secretary of State, Corporations Division",
  "Georgia Department of Economic Development",
  "Georgia Department of Revenue",
  "Department of Labor",
];

// ── Sidebar ───────────────────────────────────────────────────────────────────
function Sidebar({ activeIdx }: { activeIdx: number }) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <aside style={{
      position: "sticky", top: 88, alignSelf: "flex-start", zIndex: 20,
      width: 300, flexShrink: 0, overflow: "visible",
      borderRight: "1px solid #d9e0e7", background: "#fff",
    }}>
      <div style={{ padding: "28px 32px 32px" }}>
        <div style={{
          borderRadius: 10, background: "#ffd9cb", padding: "8px 16px",
          fontSize: 15, color: "#b93408", marginBottom: 10, fontWeight: 500,
        }}>
          Georgia Corp
        </div>

        <nav style={{ marginTop: 10 }}>
          {toc.map((item, i) => (
            <div key={item} onClick={() => scrollTo(`section-${i}`)} style={{
              display: "block", paddingLeft: 14, marginBottom: 16,
              borderLeft: activeIdx === i ? "3px solid #ff4b14" : "3px solid transparent",
              color: activeIdx === i ? "#333" : "#8b93a3",
              fontSize: 15, lineHeight: 1.4, cursor: "pointer",
              fontWeight: activeIdx === i ? 500 : 400,
            }}>
              {item}
            </div>
          ))}
        </nav>

        <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 18 }}>
          {["Business Names", "Registered Agent", "Filing Fees & Requirements", "Business Taxes", "Start a Corporation"].map(label => (
            <div key={label} style={{ fontSize: 16, fontWeight: 700, color: "#161616", cursor: "pointer" }}>
              {label}
            </div>
          ))}
        </div>

        {/* CTA card */}
        <div style={{
          marginTop: 36, width: 240, borderRadius: 16, background: "#fff",
          padding: 16, textAlign: "center",
          boxShadow: "0 16px 30px rgba(0,0,0,0.12)",
        }}>
          <h3 style={{ fontSize: 17, fontWeight: 800 }}>Form Your Business</h3>
          <p style={{ marginTop: 8, fontSize: 13, lineHeight: 1.4 }}>
            Form for $0 (+ State Fee) with a Free 1st Year of Registered Agent
          </p>
          <button style={{
            marginTop: 14, width: "100%", borderRadius: 50,
            background: "#ff4b14", padding: "12px 18px",
            fontSize: 13, fontWeight: 800, color: "#fff", border: "none", cursor: "pointer",
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
              GEORGIA
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
        Incorp Bay can take care of all your Georgia corporation formation paperwork — and we'll do it for free. Just pay the required Georgia state fee ($100).
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
function CTANameCard({ text, buttonText }: { text: string; buttonText: string }) {
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
        {buttonText}
      </button>
    </div>
  );
}

// ── Filing info box ───────────────────────────────────────────────────────────
function FilingBox() {
  const items = [
    "The exact name of the corporation",
    "The number of shares the corporation is authorized to issue",
    "The name and Georgia street address of the Registered Agent",
    "The name and address of the incorporator",
    "The corporation's principal mailing address",
  ];
  return (
    <div style={{ margin: "40px 0", borderRadius: 12, border: "1px solid #d5dde7", background: "#f5f7f9", padding: "36px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
      <h4 style={{ marginBottom: 32, fontSize: 18, fontWeight: 800 }}>Here's what is required in your Georgia Articles of Incorporation:</h4>
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
    ["Frequency", "Annually (first registration due within 90 days of incorporation)"],
    ["Filing Fee", "$50 (online) / $60 (paper)"],
    ["Important", "Failure to file your annual registration can result in administrative dissolution of your corporation by the Secretary of State."],
  ];
  return (
    <>
      <h3 style={{ marginBottom: 24, marginTop: 64, fontSize: 26, fontWeight: 800 }}>What are the Fees and Requirements to Incorporate in Georgia?</h3>
      <div style={{ overflow: "hidden", borderRadius: 18, border: "1px solid #dce1e7", fontSize: 18 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "#f3f5f7", fontWeight: 800 }}>
          {["State Fee","State Filing Time","Paper Filing Fee"].map(h => (
            <div key={h} style={{ padding: 18 }}>{h}</div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "#fff" }}>
          <div style={{ padding: 18, fontWeight: 700, color: "#ff4b14" }}>$100</div>
          <div style={{ padding: 18 }}>5–7 Business Days</div>
          <div style={{ padding: 18 }}>+$10 for Mail/In-Person Filing</div>
        </div>
      </div>
      <p style={{ marginTop: 10, fontSize: 14, color: "#555" }}>*Georgia corporations must also publish a Notice of Intent to Incorporate in the county's official legal organ newspaper, along with a $40 publication fee.</p>

      <h3 style={{ marginBottom: 24, marginTop: 48, fontSize: 24, fontWeight: 800 }}>Georgia Annual Registration</h3>
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
export default function GeorgiaCorpPage() {
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
            <span style={{ color: "#ff4b14" }}>Georgia</span>
          </div>

          <h1 style={{ maxWidth: 760, fontSize: 54, fontWeight: 800, lineHeight: 1.08, letterSpacing: -1.4 }}>How to Incorporate in Georgia</h1>
          <p style={{ marginTop: 24, fontSize: 18, fontWeight: 800 }}>Have Incorp Bay do the work for you $0 + state fee</p>
          <button style={{ marginTop: 28, borderRadius: 50, background: "#ff4b14", padding: "16px 26px", fontSize: 16, fontWeight: 800, color: "#fff", border: "none", cursor: "pointer" }}>
            INCORPORATE NOW
          </button>
          <p style={{ marginTop: 28, fontSize: 18, fontWeight: 800 }}>Learn how to form a Georgia corporation yourself</p>
          <div style={{ marginTop: 58, display: "flex", alignItems: "center", gap: 36, fontSize: 15, color: "#15233a" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}><BookIcon />12 min read</span>
            <span style={{ display: "flex", alignItems: "center", gap: 12 }}><TrophyIcon />TrustPilot TrustScore 4.7 | 25,657 reviews</span>
          </div>
          <HeroArt />

          {/* WHY INCORPORATE */}
          <section style={{ marginTop: 64 }}>
            <SectionTitle>Why Start a Georgia Corporation?</SectionTitle>
            <Para>Georgia's Department of Economic Development has implemented several business incentives, which can give your Georgia corporation a competitive edge. You may be able to take advantage of these incentives, provided your business meets the qualifying criteria.</Para>
            <Para>For example, the <TextLink>job tax credit</TextLink> offered by the State of Georgia provides tax credits to business owners who create jobs in certain industry sectors. Businesses have the potential to receive a tax credit of up to $4,000 per job created, per year.</Para>
            <Para>For most entrepreneurs looking to start a larger business, creating a Georgia corporation may be the best choice. As a corporation, your business is able to buy and trade stock, and when it comes to excess profits, corporations offer more flexibility than an LLC. A corporation is allowed to pass income and losses to its shareholders, who report taxes on an individual tax return at ordinary levels.</Para>
            <SubTitle>Is an LLC Better Than a Corporation?</SubTitle>
            <Para>It all depends on your goals. If you don't need the options for buying and selling stock, a Georgia LLC may be a better choice for your business. It's easier to set up and receives many of the same benefits as corporations, but with less regulation.</Para>
            <Para>Learn more about forming a <TextLink>Georgia LLC</TextLink> so you can decide which business entity is right for you.</Para>
            <SubTitle>Benefits of Forming a Georgia C Corporation</SubTitle>
            <p style={{ fontSize: 18 }}>It offers you numerous advantages including, but not limited to:</p>
            <ul style={{ margin: "32px 0 32px 56px" }}>
              {cBenefits.map(b => <li key={b} style={{ listStyle: "disc", fontSize: 18, lineHeight: 1.6, marginBottom: 16 }}>{b}</li>)}
            </ul>
            <SubTitle>Benefits of Forming a Georgia S Corporation</SubTitle>
            <p style={{ fontSize: 18 }}>It offers several advantages similar to those provided by a C Corp including, but not limited to:</p>
            <ul style={{ margin: "32px 0 32px 56px" }}>
              {sBenefits.map(b => <li key={b} style={{ listStyle: "disc", fontSize: 18, lineHeight: 1.6, marginBottom: 16 }}>{b}</li>)}
            </ul>
            <Para>In this guide, you'll find information on naming your corporation, getting a Registered Agent, the fees you'll need to pay, and other requirements. To help you along the way, use our <TextLink>Starting a Business</TextLink> checklist to keep track of everything you need to do to get your business up and running.</Para>
          </section>

          {/* SECTION 0 — 6 STEPS */}
          <section id="section-0" style={{ marginTop: 64, scrollMarginTop: 112 }}>
            <SectionTitle>How to Form a Georgia Corporation Yourself in 6 Steps</SectionTitle>
            <VideoBox />

            <SubTitle>Step 1: Choose a Unique Business Name and Complete a State Business Search</SubTitle>
            <Para>Every Georgia business must have a unique name that hasn't already been claimed by another business in the state. If you're having difficulty coming up with a name, try using our <TextLink>Business Name Generator</TextLink> to gather ideas. You'll need to follow a few naming rules, which you can read about in detail on the <TextLink>Georgia Business Names</TextLink> page.</Para>
            <Para>Once you've chosen a name, you'll need to make sure it's available in Georgia. Use our tool to do a Georgia entity search, or perform your own search via the Georgia Secretary of State's Corporations Division.</Para>
            <Para>If you don't want to form your corporation right away, you can reserve the business name for 30 days by submitting a Name Reservation Request form and paying a fee of $25 ($35 if filed by paper).</Para>
            <CTANameCard text="We Can Check Georgia Corporation Name Availability for You" buttonText="Check Name Availability" />

            <SubTitle>Step 2: Provide an Official Address for Your Corporation</SubTitle>
            <Para>Every Georgia corporation must have a designated street address. That could be your home address (if you're running the company from your residence), your company's office building, or any other physical address. The address can be outside the state of Georgia.</Para>
            <Para>You may also be able to use a virtual mailbox for your business address. Incorp Bay can provide you with a Georgia virtual mailbox, where we'll receive your mail and scan it for your online review.</Para>

            <SubTitle>Step 3: Assign a Registered Agent</SubTitle>
            <Para>Every Georgia corporation must have a "Registered Agent" who receives official legal and tax correspondence and has responsibility for filing reports with the Georgia Secretary of State. Your Registered Agent must have a physical street address in Georgia.</Para>
            <Para>You can fill this position, assign another manager in your business or use a Registered Agent service. Your Registered Agent must be present to receive important documents for your company during business hours.</Para>
            <Para>You'll appoint your Registered Agent when you file your GA Articles of Incorporation with the Secretary of State and officially form your corporation.</Para>
            <Para>All of Incorp Bay's business formation packages include Registered Agent service. It's free for the first year and just $149 per year after that. You can also access a digital dashboard to view any document we've received on your behalf.</Para>
            <div style={{ marginBottom: 40, display: "flex", alignItems: "center", justifyContent: "space-between", borderLeft: "4px solid #677184", background: "#f3f5f7", padding: "24px", fontSize: 20, fontWeight: 800, cursor: "pointer" }}>
              <span>Get a Free Registered Agent with Incorp Bay</span>
              <ExternalIcon />
            </div>

            <SubTitle>Step 4: File Your Articles of Incorporation with the Georgia Secretary of State</SubTitle>
            <Para>Once you've gathered all the information for your corporation, you'll need to file your GA Articles of Incorporation with the SOS. Once the SOS processes the filing, you will have officially created your business.</Para>
            <FilingBox />
            <div style={{ marginBottom: 40, display: "flex", alignItems: "center", justifyContent: "space-between", borderLeft: "4px solid #677184", background: "#f3f5f7", padding: "24px", fontSize: 20, fontWeight: 800, cursor: "pointer" }}>
              <span>Download Form Here</span><ExternalIcon />
            </div>
            <Para>Your Articles of Incorporation can be filed online via the state's digital portal. You can also mail the form to the Office of the Secretary of State, or Incorp Bay can file it on your behalf. Note: if you choose to file in person or via mail, there is an additional $10 paper filing charge. The Georgia corporation filing fee is $100.</Para>
            <Para>All Georgia corporations must also publish a notice of intent to incorporate in a newspaper that is the official legal organ of the county where the initial registered office of the corporation is located. The notice of intent to incorporate and a $40 publication fee should be forwarded directly to the newspaper no later than the next business day after filing your Articles of Incorporation with the Secretary of State.</Para>
            <div style={{ margin: "40px 0", display: "grid", gridTemplateColumns: "1fr 1fr", borderRadius: 18, border: "1px solid #dce1e7", padding: 32, fontSize: 18, gap: 24 }}>
              <div>
                <b>File by Mail</b>
                <div style={{ marginTop: 12, color: "#333" }}>
                  Corporations Division<br />
                  <span style={{ color: ORANGE }}>Office of the Secretary of State</span><br />
                  2 Martin Luther King Jr. Dr. SE<br />
                  Suite 313, West Tower<br />
                  Atlanta, GA 30334
                </div>
              </div>
              <div>
                <b>File in Person</b>
                <div style={{ marginTop: 12, color: "#333" }}>
                  Corporations Division<br />
                  <span style={{ color: ORANGE }}>Office of the Secretary of State</span><br />
                  2 Martin Luther King Jr. Dr. SE<br />
                  Suite 313, West Tower<br />
                  Atlanta, GA 30334
                </div>
              </div>
            </div>

            <Para>You only need to file your Articles of Incorporation once, but you'll also need to file an annual registration with the Georgia SOS within 90 days of incorporation and once a year after that. Incorp Bay can remind you about this every year, or we can do it for you if you have us handle the paperwork.</Para>
            <CTANameCard text="Let Incorp Bay Handle All the Georgia Corporation Formation Paperwork for You for $0 + the State Fee" buttonText="Get Started" />
            <FeesTable />

            <SubTitle>Step 5: Get an Employer Identification Number (EIN) from the Internal Revenue Service</SubTitle>
            <Para>You'll need an <TextLink>EIN</TextLink> to identify your business to the IRS. You use this number when filing and paying taxes or when submitting payroll information and payments for your employees. An EIN is also required to open a business bank account. You can obtain one directly from the IRS, or Incorp Bay can get one for you as part of the Georgia corporation formation process.</Para>

            <SubTitle>Step 6: Write Bylaws</SubTitle>
            <Para>A set of rules that govern how a corporation will be run, bylaws detail how many directors the corporation will have, whether the board of directors will have annual meetings and what the voting requirements are, among other things.</Para>
            <Para>Georgia requires corporations to hold annual shareholder's meetings. It's always a good idea to write and follow bylaws to protect your business from any future changes and events, even where not strictly mandated.</Para>
          </section>

          {/* SECTION 1 — CORP TYPES */}
          <section id="section-1" style={{ marginTop: 64, scrollMarginTop: 112 }}>
            <SectionTitle>Georgia Corporation Types</SectionTitle>

            <SubTitle>C Corporation</SubTitle>
            <Para>When you file to start a corporation, by default, it's a C Corp. This is the choice for large businesses that will trade shares in the stock market. GA C Corporations give you the most flexibility for creating, transferring and selling stock.</Para>
            <Para>A Georgia C Corporation will offer you several liability protections, but it will also be required to adhere to numerous strict rules and regulations, including publishing a notice of intent to incorporate.</Para>
            <Para>Learn more about <TextLink>C Corporations.</TextLink></Para>

            <SubTitle>S Corporation</SubTitle>
            <Para>Technically, an S Corporation is a tax filing status meaning it isn't a business entity the way LLCs and C Corporations are. An LLC or a C Corporation can be an S Corporation. It's just a matter of filing a form with the IRS.</Para>
            <Para>The main reason to file as an S Corp is to save money on self-employment taxes. To get an idea of how much money you might save, use our <TextLink>S Corp Tax Calculator.</TextLink></Para>
            <Para>If you want your Georgia C Corporation to be treated as a Georgia S Corporation, file the IRS <TextLink>Election by a Small Business Corporation</TextLink> form, also known as Form 2553 or an <TextLink>S Corp Election form.</TextLink> Any Georgia S Corporations formed through Incorp Bay will also include a prepared Form 2553 that will be delivered with the state formation documents.</Para>
            <Para>Consult with your accountant or tax advisor to determine whether this is your best option.</Para>
            <Para>Learn more about <TextLink>S Corporations.</TextLink></Para>
            <Para>Compare <TextLink>S Corp vs. C Corp</TextLink> to learn the benefits and drawbacks of both, and decide which one will best suit your needs.</Para>

            <SubTitle>Foreign Corporation</SubTitle>
            <Para>If your business operates in another state and you want to expand into Georgia — or vice versa — you'll need to form a Foreign Corporation.</Para>
            <Para>Learn more about <TextLink>Georgia Foreign Corporation registration.</TextLink></Para>

            <SubTitle>Nonprofit Corporation</SubTitle>
            <Para>Charitable organizations can incorporate as nonprofit corporations. This means all the profits they generate are donated to the organization supported by the charity, minus administrative costs.</Para>
            <Para>A <TextLink>nonprofit corporation</TextLink> is also exempt from federal and state taxes, allowing more of the profit to benefit the charity.</Para>
            <div style={{ background: "#f7f8fc", borderRadius: 10, padding: "16px 24px", marginBottom: 24, fontSize: 16, color: "#555" }}>
              <strong>Note:</strong> Everything in this guide applies to for-profit corporations, and mostly to C Corps and S Corps. Items listed as requirements for forming a corporation may or may not also apply to nonprofits.
            </div>

            <SubTitle>Limited Liability Company</SubTitle>
            <Para>Depending on the type of business you want to start, or your personal circumstances and goals, an LLC may be a better option. For example, you may only want to build a small business that you yourself will run with just a few employees and you may not need the options to buy and sell stock.</Para>
            <Para>A <TextLink>Georgia LLC</TextLink> is usually a better option for a smaller business — it strikes a balance between liability protection and tax efficiency. It's easier to set up, but it still offers you certain advantages you'd get from a corporation. You can even have your LLC treated as an S Corporation for tax purposes to save you money.</Para>
            <Para>Regardless of which direction you decide to go, we can help you with your Georgia business registration.</Para>
            <Para>Learn more about <TextLink>limited liability companies.</TextLink></Para>

            <SubTitle>Sole Proprietorship or Partnership</SubTitle>
            <Para>These are the simplest types of businesses to set up. That's because there's no real setup to do. If you don't choose to form a separate business entity, by default, you'll have either a sole proprietorship (just you) or a partnership (you and one or more other people).</Para>
            <Para>Neither of these options provide you with any special benefits or liability protections and can leave your personal assets vulnerable. For these reasons, we don't recommend them.</Para>
            <Para>Compare <TextLink>business entity types</TextLink> to decide which one is best for you.</Para>
          </section>

          {/* SECTION 2 — RESOURCES */}
          <section id="section-2" style={{ marginTop: 64, scrollMarginTop: 112 }}>
            <SectionTitle>Helpful Resources from the State of Georgia</SectionTitle>
            <ResourceLinks />
          </section>

          {/* SECTION 3 — FAQs */}
          <section id="section-3" style={{ marginTop: 56, scrollMarginTop: 112 }}>
            <SectionTitle>FAQs</SectionTitle>
            <p style={{ marginBottom: 40, fontSize: 18 }}>You'll find plenty more insight and guidance on the other pages of this guide, including:</p>
            {[
              ["Georgia Corporation Names","How to search the state business registry and find the right name. Includes information on naming rules, trade names, reserving names for Georgia corporations and more."],
              ["Georgia Registered Agent Service","How to appoint, change and search for Registered Agents. Also includes the duties they fulfill and the rules they're required to follow."],
              ["Georgia Incorporation Fees and Requirements","Details the various fees you'll need to pay and the state and federal requirements you'll need to meet. Includes details about Employer Identification Numbers (EINs), state and federal business licenses, annual registrations and more."],
              ["Georgia Corporation Taxes","Covers the various taxes you'll have to pay to the state and federal governments. Includes details about state taxes such as income, sales and use, and federal taxes such as income and self-employment."],
            ].map(([h,p]) => (
              <div key={h} style={{ marginBottom: 36 }}>
                <h3 style={{ marginBottom: 16, fontSize: 24, fontWeight: 800 }}>{h}</h3>
                <p style={{ fontSize: 18, lineHeight: 1.7 }}>{p}</p>
              </div>
            ))}
            <h2 style={{ marginTop: 48, fontSize: 42, fontWeight: 800, letterSpacing: -1 }}>Launch Your Business With Incorp Bay</h2>
            <p style={{ marginTop: 32, fontSize: 18 }}>No Contracts. No Surprises. Only $0 + State Fee to Launch Your Business.</p>
            <button style={{ marginTop: 32, borderRadius: 50, background: "#ff4b14", padding: "16px 28px", fontSize: 17, fontWeight: 800, color: "#fff", border: "none", cursor: "pointer" }}>
              GET A FREE REGISTERED AGENT WHEN YOU START YOUR BUSINESS WITH INCORP BAY
            </button>
          </section>

        </main>
      </div>
    </NavigationWrapper>
  </div>
  );
}