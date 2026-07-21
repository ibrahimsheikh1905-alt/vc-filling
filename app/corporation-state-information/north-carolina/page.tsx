"use client";

import React, { useEffect, useState } from "react";
import NavigationWrapper from "@/components/NavigationWrapper";

const BRAND_BLUE = "#2B93C9";
const BRAND_GRADIENT =
  "linear-gradient(90deg,#244EB6 0%,#2B93C9 50%,#33D1CC 100%)";
const BRAND_GRADIENT_VERTICAL =
  "linear-gradient(180deg,#244EB6 0%,#2B93C9 50%,#33D1CC 100%)";

const gradientTextStyle: React.CSSProperties = {
  background: BRAND_GRADIENT,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  color: "transparent",
};

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

const toc = [
  "How to Form a North Carolina Corporation Yourself in Six Steps",
  "North Carolina Corporation Types",
  "Helpful Resources from the State of North Carolina",
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

const professions = [
  "Architects",
  "Certified or other public accountants",
  "Chiropodists",
  "Chiropractors",
  "Doctors of dentistry",
  "Doctors of medicine",
  "Optometrists",
  "Doctors of osteopathy",
  "Doctors of podiatric medicine",
  "Professional engineers",
  "Veterinarians",
  "Attorneys-at-law (subject to the Rules of the Supreme Court)",
];

const resources = [
  "North Carolina Secretary of State",
  "Business Registration Division",
  "North Carolina Department of Revenue",
  "North Carolina Department of Labor",
  "Economic Development Partnership of North Carolina",
];

function Sidebar({ activeIdx }: { activeIdx: number }) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <aside
      style={{
        position: "sticky",
        top: 88,
        alignSelf: "flex-start",
        zIndex: 20,
        width: 300,
        flexShrink: 0,
        overflow: "visible",
        borderRight: "1px solid #d9e0e7",
        background: "#fff",
      }}
    >
      <div style={{ padding: "28px 32px 32px" }}>
        <div style={{
          borderRadius: 10,
          background: "linear-gradient(90deg,rgba(36,78,182,.12),rgba(51,209,204,.16))",
          padding: "8px 16px",
          fontSize: 15,
          ...gradientTextStyle,
          marginBottom: 10,
          fontWeight: 500,
        }}>
          North Carolina Corp
        </div>

        <nav style={{ marginTop: 10 }}>
          {toc.map((item, i) => (
            <div
              key={item}
              onClick={() => scrollTo(`section-${i}`)}
              style={{
                display: "block",
                paddingLeft: 14,
                marginBottom: 16,
                borderLeft: "3px solid transparent",
                borderImage: activeIdx === i ? `${BRAND_GRADIENT} 1` : "none",
                color: activeIdx === i ? BRAND_BLUE : "#8b93a3",
                fontSize: 15,
                lineHeight: 1.4,
                cursor: "pointer",
                fontWeight: activeIdx === i ? 500 : 400,
              }}
            >
              {item}
            </div>
          ))}
        </nav>

        <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 18 }}>
          {["Business Names", "Registered Agent", "Filing Fees & Requirements", "Start a Corporation"].map((label) => (
            <div key={label} style={{ fontSize: 16, fontWeight: 700, color: "#161616", cursor: "pointer" }}>
              {label}
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 36,
          width: 240,
          borderRadius: 16,
          background: "#fff",
          padding: 16,
          textAlign: "center",
          boxShadow: "0 16px 30px rgba(0,0,0,0.12)",
          borderTop: "4px solid #2B93C9",
        }}>
          <h3 style={{ fontSize: 17, fontWeight: 800 }}>Form Your Business</h3>
          <p style={{ marginTop: 8, fontSize: 13, lineHeight: 1.4 }}>Form for $0 (+ State Fee) with a Free 1st Year of Registered Agent</p>
          <button style={{
            marginTop: 14,
            width: "100%",
            borderRadius: 50,
            background: BRAND_GRADIENT,
            padding: "12px 18px",
            fontSize: 13,
            fontWeight: 800,
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}>
            GET STARTED
          </button>
        </div>
      </div>
    </aside>
  );
}

function TextLink({ children }: { children: React.ReactNode }) {
  return <span style={{ ...gradientTextStyle, cursor: "pointer", fontWeight: 700 }}>{children}</span>;
}

function Para({ children }: { children: React.ReactNode }) {
  return <p style={{ marginBottom: 24, fontSize: 18, lineHeight: 1.65, color: "#161616" }}>{children}</p>;
}

function SectionTitle({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      style={{
        marginBottom: 28,
        fontSize: 44,
        fontWeight: 800,
        lineHeight: 1.08,
        letterSpacing: -1.5,
        color: "#000",
        scrollMarginTop: 112,
      }}
    >
      {children}
    </h2>
  );
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 style={{ marginBottom: 16, marginTop: 48, fontSize: 24, fontWeight: 800, lineHeight: 1.15, color: "#000", scrollMarginTop: 112 }}>
      {children}
    </h3>
  );
}

function HeroArt() {
  return (
    <div style={{ marginTop: 32, overflow: "hidden", borderRadius: 12, background: "#e9edf2" }}>
      <div style={{ display: "flex", height: 420, alignItems: "center", justifyContent: "center", padding: 40 }}>
        <div style={{ position: "relative", height: 285, width: 720, borderRadius: 18, border: "10px solid #fff", background: "#fff", boxShadow: "0 25px 60px rgba(0,0,0,0.18)", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: 0, top: 0, width: 310, height: "100%", opacity: 0.8, backgroundImage: "radial-gradient(#d7dde6 2px,transparent 2px)", backgroundSize: "12px 12px" }} />
          <div style={{ position: "absolute", left: 95, top: 150, width: 50, height: 92, backgroundImage: "radial-gradient(#2B93C9 3px,transparent 3px)", backgroundSize: "12px 12px" }} />
          <div style={{ position: "absolute", left: 230, top: 82, width: 360, borderRadius: "28px 90px 28px 28px", background: "#fff", padding: 30, boxShadow: "0 10px 30px rgba(0,0,0,0.12)" }}>
            <div style={{ position: "absolute", right: 32, top: 28, fontSize: 20, fontWeight: 900, fontStyle: "italic", ...gradientTextStyle }}>
              incorp bay
            </div>
            <h3 style={{ fontSize: 18, fontWeight: 800 }}>Form Your Business</h3>
            <div style={{ marginTop: 28, fontSize: 13, fontWeight: 700, color: "#555" }}>Business Name</div>
            <div style={{ marginTop: 12, borderRadius: 50, border: "1px solid #e0e0e0", padding: "14px 24px", fontWeight: 700, color: "#999" }}>DELAWARE</div>
            <div style={{ marginTop: 24, fontSize: 13, fontWeight: 700, color: "#555" }}>Entity Type</div>
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid #d5dbe3", padding: "24px 44px", fontSize: 16, lineHeight: 1.6, color: "#1f2c45" }}>
        Incorp Bay can take care of all your North Carolina corporation formation paperwork — and we'll do it for free. Just pay the required North Carolina state fee ($128).
      </div>
    </div>
  );
}

function ResourceLinks() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      {resources.map((r) => (
        <div key={r} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderLeft: "4px solid #2B93C9", background: "#f3f5f7", padding: "20px", fontSize: 17, fontWeight: 800, cursor: "pointer" }}>
          <span>{r}</span>
          <ExternalIcon />
        </div>
      ))}
    </div>
  );
}

export default function NorthCarolinaCorpPage(): JSX.Element {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionIds = ["section-0", "section-1", "section-2", "section-3"];

  useEffect(() => {
    const onScroll = () => {
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.getBoundingClientRect().top <= 160) {
          setActiveIdx(i);
          return;
        }
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
            <div style={{ marginBottom: 56, display: "inline-flex", alignItems: "center", gap: 20, borderRadius: 12, background: "#f5f6f8", padding: "16px 24px", fontSize: 16, color: "#1b2944" }}>
              <span>Incorp Bay</span>
              <span style={{ color: "#bbb" }}>›</span>
              <span>Corp Formation By State</span>
              <span style={{ color: "#bbb" }}>›</span>
              <span style={{ ...gradientTextStyle, fontWeight: 700 }}>North Carolina</span>
            </div>

            <h1
              style={{
                maxWidth: 760,
                fontSize: 54,
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: -1.4,
              }}
            >
              How to Incorporate in{" "}
              <span style={gradientTextStyle}>North Carolina</span>
            </h1>
            <p style={{ marginTop: 24, fontSize: 18, fontWeight: 800 }}>Have Incorp Bay do the work for you $0 + state fee</p>
            <button style={{ marginTop: 28, borderRadius: 50, background: BRAND_GRADIENT, padding: "16px 26px", fontSize: 16, fontWeight: 800, color: "#fff", border: "none", cursor: "pointer" }}>
              INCORPORATE NOW
            </button>

            <div style={{ marginTop: 58, display: "flex", alignItems: "center", gap: 36, fontSize: 15, color: "#15233a" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <BookIcon />12 min read
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <TrophyIcon />TrustPilot TrustScore 4.7 | 25,657 reviews
              </span>
            </div>

            <HeroArt />

            <section style={{ marginTop: 64 }}>
              <SectionTitle>Why Start a North Carolina Corporation?</SectionTitle>
              <Para>North Carolina offers workforce, financing and economic development programs intended to encourage eligible business investment and job creation.</Para>
              <Para>Program availability and eligibility requirements can change, so review current guidance from the appropriate North Carolina agency.</Para>
              <SubTitle>Benefits of Forming a North Carolina C Corporation</SubTitle>
              <p style={{ fontSize: 18 }}>It offers you numerous advantages including, but not limited to:</p>
              <ul style={{ margin: "32px 0 32px 56px" }}>
                {cBenefits.map((b) => (
                  <li key={b} style={{ listStyle: "disc", fontSize: 18, lineHeight: 1.6, marginBottom: 16 }}>
                    {b}
                  </li>
                ))}
              </ul>
              <SubTitle>Benefits of Forming a North Carolina S Corporation</SubTitle>
              <p style={{ fontSize: 18 }}>It offers several advantages similar to those provided by a C Corp including, but not limited to:</p>
              <ul style={{ margin: "32px 0 32px 56px" }}>
                {sBenefits.map((b) => (
                  <li key={b} style={{ listStyle: "disc", fontSize: 18, lineHeight: 1.6, marginBottom: 16 }}>
                    {b}
                  </li>
                ))}
              </ul>
            </section>

            <section id="section-0" style={{ marginTop: 64, scrollMarginTop: 112 }}>
              <SectionTitle>How to Form a North Carolina Corporation Yourself in 6 Steps</SectionTitle>
              <Para>Step 1: Choose a Unique Business Name and Complete a State Business Search.</Para>
            </section>

            <section id="section-1" style={{ marginTop: 64, scrollMarginTop: 112 }}>
              <SectionTitle>North Carolina Corporation Types</SectionTitle>
              <SubTitle>Professional Corporation</SubTitle>
              <div style={{ margin: "40px 0", borderRadius: 12, border: "1px solid #d5dde7", background: "#f5f7f9", padding: 48, boxShadow: "0 4px 14px rgba(0,0,0,0.07)" }}>
                <h4 style={{ marginBottom: 40, fontSize: 18, fontWeight: 800, lineHeight: 1.45 }}>The professions permitted to form a North Carolina Professional Corporation include, but may not be limited to:</h4>
                <ul style={{ marginLeft: 36 }}>
                  {professions.map((x) => (
                    <li key={x} style={{ listStyle: "disc", fontSize: 18, marginBottom: 20 }}>
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section id="section-2" style={{ marginTop: 64, scrollMarginTop: 112 }}>
              <SectionTitle>Helpful Resources from the State of North Carolina</SectionTitle>
              <ResourceLinks />
            </section>

            <section id="section-3" style={{ marginTop: 56, scrollMarginTop: 112 }}>
              <SectionTitle>FAQs</SectionTitle>
              <p style={{ marginBottom: 40, fontSize: 18 }}>You'll find plenty more insight and guidance on the other pages of this guide.</p>
            </section>
          </main>
        </div>
      </NavigationWrapper>
    </div>
  );
}
