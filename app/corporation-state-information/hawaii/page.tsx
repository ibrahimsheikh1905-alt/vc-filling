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

const toc = [
  "How to Form a Hawaii Corporation Yourself in Six Steps",
  "Hawaii Corporation Types",
  "Helpful Resources from the State of Hawaii",
];

const cBenefits = [
  "Strong personal liability protection that separates your own assets from business debts, lawsuits, and other obligations",
  "Multiple ways to issue, sell, or transfer stock, including on public markets",
  "The option to create more than one class of stock",
  "Greater ability to raise capital through additional stock issuances",
  "The ability to sell shares to investors both within Hawaii and beyond U.S. borders",
];

const sBenefits = [
  "Stock transfer and sale options, though more limited than a C Corp",
  "A cap of 100 shareholders",
  "A simpler regulatory structure than a C Corporation",
  "Ownership that transfers easily through the sale of stock",
  "Potential savings on self-employment tax",
];

const professions = [
  "Architects",
  "Certified public accountants",
  "Podiatrists",
  "Chiropractors",
  "Dentists",
  "Physicians and surgeons",
  "Optometrists",
  "Osteopathic physicians",
  "Naturopathic physicians",
  "Professional engineers and land surveyors",
  "Veterinarians",
  "Attorneys licensed to practice in Hawaii",
];

const resources = [
  "State of Hawaii Official Website",
  "DCCA Business Registration Division",
  "Hawaii Business Express Portal",
  "Department of Taxation",
  "Department of Labor and Industrial Relations",
];

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
          Hawaii Corp
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
          {["Business Names", "Registered Agent", "Filing Fees & Requirements", "Start a Corporation"].map(label => (
            <div key={label} style={{ fontSize: 16, fontWeight: 700, color: "#161616", cursor: "pointer" }}>
              {label}
            </div>
          ))}
        </div>

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

function HeroArt() {
  return (
    <div style={{ marginTop: 32, overflow: "hidden", borderRadius: 12, background: "#e9edf2" }}>
      <div style={{ display: "flex", height: 420, alignItems: "center", justifyContent: "center", padding: 40 }}>
        <div style={{
          position: "relative", height: 285, width: 720, borderRadius: 18,
          border: "10px solid #fff", background: "#fff", boxShadow: "0 25px 60px rgba(0,0,0,0.18)", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", left: 0, top: 0, width: 310, height: "100%", opacity: 0.8,
            backgroundImage: "radial-gradient(#d7dde6 2px,transparent 2px)", backgroundSize: "12px 12px" }} />
          <div style={{ position: "absolute", left: 95, top: 150, width: 50, height: 92,
            backgroundImage: "radial-gradient(#ff8a64 3px,transparent 3px)", backgroundSize: "12px 12px" }} />
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
              HAWAII
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
        Incorp Bay can take care of all your Hawaii corporation formation paperwork — and we'll do it for free. Just pay the required Hawaii state fee ($51).
      </div>
    </div>
  );
}

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

function FilingBox() {
  const items = [
    "The proposed name of the corporation",
    "The name and Hawaii street address of the registered agent",
    "The total number of shares the corporation is authorized to issue, and the classes of stock if more than one",
    "The name and address of each incorporator",
    "Signature of the incorporator(s)",
  ];
  return (
    <div style={{ margin: "40px 0", borderRadius: 12, border: "1px solid #d5dde7", background: "#f5f7f9", padding: "36px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
      <h4 style={{ marginBottom: 32, fontSize: 18, fontWeight: 800 }}>Here's what the DCCA Business Registration Division requires:</h4>
      <ul style={{ paddingLeft: 32 }}>
        {items.map(item => (
          <li key={item} style={{ listStyle: "disc", fontSize: 18, lineHeight: 1.6, marginBottom: 24, paddingLeft: 12 }}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function FeesTable() {
  const complianceRows = [
    ["Annual Report - Frequency", "Annually"],
    ["Annual Report - Due Date", "During the calendar quarter that contains your incorporation anniversary date"],
    ["Annual Report - Filing Fee", "$15"],
    ["State Archives Fee", "$1, added to most filings including your Articles of Incorporation"],
    ["Important", "Hawaii does not impose a separate franchise tax on corporations, but annual reports must still be filed on time to stay in good standing."],
  ];
  return (
    <>
      <h3 style={{ marginBottom: 24, marginTop: 64, fontSize: 26, fontWeight: 800 }}>What are the Fees and Requirements to Incorporate in Hawaii?</h3>
      <div style={{ overflow: "hidden", borderRadius: 18, border: "1px solid #dce1e7", fontSize: 18 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "#f3f5f7", fontWeight: 800 }}>
          {["State Fee","State Filing Time","Expedited Filing Time"].map(h => (
            <div key={h} style={{ padding: 18 }}>{h}</div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "#fff" }}>
          <div style={{ padding: 18, fontWeight: 700, color: "#ff4b14" }}>$51*</div>
          <div style={{ padding: 18 }}>3-5 Business Days</div>
          <div style={{ padding: 18 }}>1-3 Business Days</div>
        </div>
      </div>
      <p style={{ marginTop: 10, fontSize: 14, color: "#555" }}>*Includes the $50 Articles of Incorporation fee plus a $1 state archives fee. Expedited review adds an additional $25.</p>

      <h3 style={{ marginBottom: 24, marginTop: 48, fontSize: 24, fontWeight: 800 }}>Hawaii Annual Report</h3>
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

export default function HawaiiCorpPage() {
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

          <div style={{ marginBottom: 56, display: "inline-flex", alignItems: "center", gap: 20, borderRadius: 12, background: "#f5f6f8", padding: "16px 24px", fontSize: 16, color: "#1b2944" }}>
            <span>Incorp Bay</span><span style={{ color: "#bbb" }}>›</span>
            <span>Corp Formation By State</span><span style={{ color: "#bbb" }}>›</span>
            <span style={{ color: "#ff4b14" }}>Hawaii</span>
          </div>

          <h1 style={{ maxWidth: 760, fontSize: 54, fontWeight: 800, lineHeight: 1.08, letterSpacing: -1.4 }}>How to Incorporate in Hawaii</h1>
          <p style={{ marginTop: 24, fontSize: 18, fontWeight: 800 }}>Have Incorp Bay do the work for you $0 + state fee</p>
          <button style={{ marginTop: 28, borderRadius: 50, background: "#ff4b14", padding: "16px 26px", fontSize: 16, fontWeight: 800, color: "#fff", border: "none", cursor: "pointer" }}>
            INCORPORATE NOW
          </button>
          <p style={{ marginTop: 28, fontSize: 18, fontWeight: 800 }}>Learn how to form a Hawaii corporation yourself</p>
          <div style={{ marginTop: 58, display: "flex", alignItems: "center", gap: 36, fontSize: 15, color: "#15233a" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}><BookIcon />11 min read</span>
            <span style={{ display: "flex", alignItems: "center", gap: 12 }}><TrophyIcon />TrustPilot TrustScore 4.7 | 25,657 reviews</span>
          </div>
          <HeroArt />

          <section style={{ marginTop: 64 }}>
            <SectionTitle>Why Start a Hawaii Corporation?</SectionTitle>
            <Para>Hawaii offers a range of programs designed to help small businesses grow, including export assistance and readiness training through initiatives like the Hawaii State Trade Expansion Program. If your corporation qualifies, these programs can open doors to new markets and additional funding opportunities.</Para>
            <Para>For entrepreneurs planning to scale, a Hawaii corporation is often the right structure. Corporations can issue and trade stock, and unlike an LLC, they have the flexibility to reinvest profits back into the business rather than passing every dollar through to the owners' personal tax returns.</Para>
            <SubTitle>Is an LLC Better Than a Corporation?</SubTitle>
            <Para>The answer depends on what you're trying to build. Smaller, owner-operated businesses often find an LLC simpler to run, with fewer formalities and less ongoing paperwork than a corporation requires.</Para>
            <Para>Learn more about forming a <TextLink>Hawaii LLC</TextLink> to help decide which entity type fits your plans.</Para>
            <SubTitle>Benefits of Forming a Hawaii C Corporation</SubTitle>
            <p style={{ fontSize: 18 }}>Choosing a C Corp structure comes with several advantages, including:</p>
            <ul style={{ margin: "32px 0 32px 56px" }}>
              {cBenefits.map(b => <li key={b} style={{ listStyle: "disc", fontSize: 18, lineHeight: 1.6, marginBottom: 16 }}>{b}</li>)}
            </ul>
            <SubTitle>Benefits of Forming a Hawaii S Corporation</SubTitle>
            <p style={{ fontSize: 18 }}>An S Corp election carries many of the same advantages as a C Corp, along with:</p>
            <ul style={{ margin: "32px 0 32px 56px" }}>
              {sBenefits.map(b => <li key={b} style={{ listStyle: "disc", fontSize: 18, lineHeight: 1.6, marginBottom: 16 }}>{b}</li>)}
            </ul>
            <Para>Below you'll find a walkthrough of naming your corporation, appointing a Registered Agent, understanding the required fees, and everything else involved in getting your Hawaii corporation off the ground.</Para>
          </section>

          <section id="section-0" style={{ marginTop: 64, scrollMarginTop: 112 }}>
            <SectionTitle>How to Form a Hawaii Corporation Yourself in 6 Steps</SectionTitle>
            <VideoBox />

            <SubTitle>Step 1: Choose a Unique Business Name and Search the State Registry</SubTitle>
            <Para>Your corporation's name needs to be distinguishable from every other business entity already registered in Hawaii. Under Hawaii law, the name must include a corporate identifier such as "Corporation," "Incorporated," "Limited," or an accepted abbreviation like "Corp.," "Inc.," or "Ltd."</Para>
            <Para>Before filing, search the <TextLink>DCCA Business Registration Division</TextLink> database to confirm your chosen name isn't already taken by another registered entity, trade name, or trademark in the state.</Para>
            <Para>If you aren't ready to file yet, Hawaii lets you reserve a name for 120 days by submitting a name reservation application, either online through Hawaii Business Express or by mail to the Business Registration Division.</Para>
            <CTANameCard text="We Can Check Hawaii Corporation Name Availability for You" buttonText="Check Name Availability" />

            <SubTitle>Step 2: Provide a Principal Office Address for Your Corporation</SubTitle>
            <Para>Hawaii corporations must list a principal office address, which can be your home, a rented office, or another physical location. This address doesn't need to be inside Hawaii, and a P.O. Box is generally acceptable for the principal office.</Para>
            <Para>If you'd rather keep your personal address off the public record, a commercial Registered Agent service can provide a Hawaii street address for receiving official correspondence on your corporation's behalf.</Para>

            <SubTitle>Step 3: Appoint a Registered Agent</SubTitle>
            <Para>Every Hawaii corporation must designate a Registered Agent with a physical street address in the state who is available during normal business hours to accept legal and state correspondence.</Para>
            <Para>You may serve as your own agent, appoint someone within your company, or hire a commercial Registered Agent service to handle the role for you.</Para>
            <Para>You'll name your Registered Agent directly on the Articles of Incorporation when you file with the DCCA Business Registration Division.</Para>
            <Para>Incorp Bay includes Registered Agent service with every formation package — free for the first year and $149 per year afterward. You'll also get access to a digital dashboard where any documents we receive on your behalf are stored and easy to find.</Para>
            <div style={{ marginBottom: 40, display: "flex", alignItems: "center", justifyContent: "space-between", borderLeft: "4px solid #677184", background: "#f3f5f7", padding: "24px", fontSize: 20, fontWeight: 800, cursor: "pointer" }}>
              <span>Get a Free Registered Agent with Incorp Bay</span>
              <ExternalIcon />
            </div>

            <SubTitle>Step 4: File Your Articles of Incorporation with the DCCA Business Registration Division</SubTitle>
            <Para>Once you've pulled together the details your corporation needs, it's time to file Form DC-1 with Hawaii's Business Registration Division. Your corporation legally comes into existence once the state processes and accepts this filing.</Para>
            <FilingBox />
            <div style={{ marginBottom: 40, display: "flex", alignItems: "center", justifyContent: "space-between", borderLeft: "4px solid #677184", background: "#f3f5f7", padding: "24px", fontSize: 20, fontWeight: 800, cursor: "pointer" }}>
              <span>Download Form Here</span><ExternalIcon />
            </div>
            <Para>You can file your Articles of Incorporation online through the Hawaii Business Express portal, or submit them by email, mail, or fax to the DCCA. Incorp Bay can also handle the filing on your behalf. The total state filing cost is $51, which includes the $50 filing fee plus a $1 state archives fee.</Para>
            <div style={{ margin: "40px 0", display: "grid", gridTemplateColumns: "1fr 1fr", borderRadius: 18, border: "1px solid #dce1e7", padding: 32, fontSize: 18, gap: 24 }}>
              <div>
                <b>File by Mail</b>
                <div style={{ marginTop: 12, color: "#333" }}>
                  Business Registration Division<br />
                  <span style={{ color: ORANGE }}>Department of Commerce and Consumer Affairs</span><br />
                  P.O. Box 40<br />
                  Honolulu, HI 96810
                </div>
              </div>
              <div>
                <b>File in Person</b>
                <div style={{ marginTop: 12, color: "#333" }}>
                  Business Registration Division<br />
                  <span style={{ color: ORANGE }}>335 Merchant Street</span><br />
                  King Kalakaua Building<br />
                  Honolulu, HI 96813
                </div>
              </div>
            </div>

            <Para>Your Articles of Incorporation only need to be filed once, but Hawaii requires an annual report every year after that, due during the calendar quarter that contains your corporation's original registration anniversary date. Incorp Bay can send you a reminder each year, or handle the filing for you entirely.</Para>
            <CTANameCard text="Let Incorp Bay Handle All the Hawaii Corporation Formation Paperwork for You for $0 + the State Fee" buttonText="Get Started" />
            <FeesTable />

            <SubTitle>Step 5: Get an Employer Identification Number (EIN) from the Internal Revenue Service</SubTitle>
            <Para>An <TextLink>EIN</TextLink> identifies your business to the IRS and is required for filing taxes, running payroll, and opening a business bank account. You can request one directly from the IRS at no cost, or have Incorp Bay obtain it as part of your Hawaii formation package.</Para>

            <SubTitle>Step 6: Write Bylaws</SubTitle>
            <Para>Bylaws set the internal rules for how your corporation operates — covering things like the size of the board of directors, meeting requirements, and voting procedures.</Para>
            <Para>Hawaii law requires corporations to adopt bylaws, though they don't need to be filed with the DCCA. Keep them on record at your corporation's place of business instead.</Para>
            <Para>Beyond the legal requirement, well-written bylaws help keep your corporation organized and can protect it as circumstances change over time.</Para>
          </section>

          <section id="section-1" style={{ marginTop: 64, scrollMarginTop: 112 }}>
            <SectionTitle>Hawaii Corporation Types</SectionTitle>

            <SubTitle>C Corporation</SubTitle>
            <Para>Any corporation you form in Hawaii is a C Corp by default. It's the standard choice for larger businesses, especially those planning to eventually trade shares publicly.</Para>
            <Para>A Hawaii C Corporation provides strong liability protection but comes with more compliance obligations than other entity types, including a formal board of directors and shareholder meeting requirements under the Hawaii Business Corporation Act (HRS Chapter 414).</Para>
            <Para>Learn more about <TextLink>C Corporations.</TextLink></Para>

            <SubTitle>S Corporation</SubTitle>
            <Para>An S Corporation isn't a distinct legal entity type — it's a federal tax election. Both LLCs and C Corporations can choose S Corp tax treatment by filing the appropriate form with the IRS.</Para>
            <Para>Businesses typically elect S Corp status to reduce self-employment tax liability. Our <TextLink>S Corp Tax Calculator</TextLink> can help you estimate potential savings.</Para>
            <Para>To have your Hawaii corporation taxed as an S Corp, file IRS <TextLink>Form 2553</TextLink>. When Incorp Bay forms a Hawaii S Corporation for you, we prepare Form 2553 alongside your state formation documents.</Para>
            <Para>Talk with a tax professional to determine whether this election makes sense for your business.</Para>
            <Para>Learn more about <TextLink>S Corporations</TextLink>, or compare <TextLink>S Corp vs. C Corp</TextLink> to weigh the pros and cons of each.</Para>

            <SubTitle>Professional Corporation</SubTitle>
            <Para>Hawaii allows licensed professionals in specific fields to organize as Professional Corporations using Form PC-1, a dedicated version of the Articles of Incorporation.</Para>
            <div style={{ margin: "40px 0", borderRadius: 12, border: "1px solid #d5dde7", background: "#f5f7f9", padding: 48, boxShadow: "0 4px 14px rgba(0,0,0,0.07)" }}>
              <h4 style={{ marginBottom: 40, fontSize: 18, fontWeight: 800, lineHeight: 1.45 }}>Professions that may organize as a Hawaii Professional Corporation include, but aren't limited to:</h4>
              <ul style={{ marginLeft: 36 }}>
                {professions.map(x => (
                  <li key={x} style={{ listStyle: "disc", fontSize: 18, marginBottom: 20 }}>{x}</li>
                ))}
              </ul>
            </div>
            <Para>Check with the DCCA Business Registration Division to confirm whether your profession qualifies for this entity type.</Para>

            <SubTitle>Sustainable Business Corporation</SubTitle>
            <Para>Hawaii offers a Sustainable Business Corporation designation, filed using Form SBC-1, for companies that want to formally commit to social and environmental performance standards alongside profitability.</Para>
            <Para>This structure can appeal to founders who want their mission and values embedded directly into the corporation's governing documents.</Para>

            <SubTitle>Foreign Corporation</SubTitle>
            <Para>If your corporation was formed in another state and you want to do business in Hawaii, you'll need to register as a foreign corporation by filing an Application for Certificate of Authority with the DCCA and paying the associated filing fee.</Para>
            <Para>Learn more about <TextLink>Hawaii Foreign Corporation registration.</TextLink></Para>

            <SubTitle>Nonprofit Corporation</SubTitle>
            <Para>Organizations formed for charitable purposes can incorporate as nonprofits under the Hawaii Nonprofit Corporation Act. Profits generated go back into the organization's mission rather than to shareholders.</Para>
            <Para>A properly qualified <TextLink>nonprofit corporation</TextLink> can also be exempt from certain state and federal taxes.</Para>
            <div style={{ background: "#f7f8fc", borderRadius: 10, padding: "16px 24px", marginBottom: 24, fontSize: 16, color: "#555" }}>
              <strong>Note:</strong> This guide focuses on for-profit corporations, primarily C Corps and S Corps. Requirements described here may not apply the same way to nonprofits.
            </div>

            <SubTitle>Limited Liability Company</SubTitle>
            <Para>Depending on your goals, an LLC might suit your business better than a corporation — especially if you're running a small operation without plans to issue or trade stock.</Para>
            <Para>A <TextLink>Hawaii LLC</TextLink> is generally simpler to set up and maintain, while still offering liability protection. LLCs can also elect S Corp tax treatment to potentially reduce their tax burden.</Para>
            <Para>Learn more about <TextLink>limited liability companies</TextLink> to see which structure fits your business.</Para>

            <SubTitle>Sole Proprietorship or Partnership</SubTitle>
            <Para>These are the default business structures if you don't file anything with the state — a sole proprietorship if you're on your own, or a partnership if you're working with others.</Para>
            <Para>Neither option provides liability protection, meaning your personal assets could be at risk if the business faces debts or legal claims. We generally recommend forming a corporation or LLC instead.</Para>
            <Para>Compare <TextLink>business entity types</TextLink> to find the right fit for your situation.</Para>
          </section>

          <section id="section-2" style={{ marginTop: 64, scrollMarginTop: 112 }}>
            <SectionTitle>Helpful Resources from the State of Hawaii</SectionTitle>
            <ResourceLinks />
          </section>

          <section id="section-3" style={{ marginTop: 56, scrollMarginTop: 112 }}>
            <SectionTitle>FAQs</SectionTitle>
            <p style={{ marginBottom: 40, fontSize: 18 }}>You'll find more detail on related topics throughout this guide, including:</p>
            {[
              ["Hawaii Corporation Names","How to search the state business registry, follow Hawaii's naming rules, register a trade name, and reserve a name before you're ready to file."],
              ["Hawaii Registered Agent Service","What a Registered Agent does, how to appoint or change one, and the rules Hawaii sets for who can serve in this role."],
              ["Hawaii Incorporation Fees and Requirements","A closer look at filing fees, EINs, business licenses, and the annual report every Hawaii corporation must file."],
              ["Hawaii Corporation Taxes","An overview of state and federal tax obligations for Hawaii corporations, including income tax and self-employment tax considerations."],
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