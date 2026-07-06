"use client";

import { useState, useEffect, useRef } from "react";
import NavigationWrapper from "@/components/NavigationWrapper";

// ── Icons ─────────────────────────────────────────────────────────────────────
const AnchorIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={14} height={14}>
    <circle cx="12" cy="5" r="3"/><line x1="12" y1="8" x2="12" y2="20"/><path d="M5 20h14M5 12H2l10 8 10-8h-3"/>
  </svg>
);
const ChevronUp = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={16} height={16}>
    <path d="M18 15l-6-6-6 6"/>
  </svg>
);
const ChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={16} height={16}>
    <path d="M6 9l6 6 6-6"/>
  </svg>
);
const BookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={16} height={16}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const LinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={14} height={14}>
    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
  </svg>
);
const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="#00B67A" width={14} height={14}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

// ── TOC Items ─────────────────────────────────────────────────────────────────
const TOC = [
  { id: "introduction",   label: "Introduction" },
  { id: "step1",          label: "Step 1: Nail down your business idea" },
  { id: "step2",          label: "Step 2: Do your market research" },
  { id: "step3",          label: "Step 3: Write a business plan" },
  { id: "step4",          label: "Step 4: Choose a business structure" },
  { id: "step5",          label: "Step 5: Pick and check your business name" },
  { id: "step6",          label: "Step 6: Register your business and get your EIN" },
  { id: "step7",          label: "Step 7: Get licenses and permits" },
  { id: "step8",          label: "Step 8: Fund your business" },
  { id: "step9",          label: "Step 9: Open a business bank account" },
  { id: "step10",         label: "Step 10: Build your brand and marketing plan" },
  { id: "faq",            label: "FAQ" },
];

const FAQS = [
  { q: "How do I start a business with no money?", a: "Start with a service-based business that uses skills you already have — consulting, freelancing, or tutoring require little to no upfront capital. Use free tools for your website and social media marketing. As revenue grows, reinvest it to expand." },
  { q: "What is the first step to starting a business?", a: "The first step is validating your business idea. Before spending money on anything, confirm that real people have the problem you're solving and would pay for your solution. Talk to potential customers, research competitors, and test your concept before committing resources." },
  { q: "Do I need an LLC to start a business?", a: "No — you can operate as a sole proprietorship without registering anything. But an LLC separates your personal assets from business liabilities, which protects you if the business is sued or incurs debt. Most advisors recommend forming an LLC once your business is generating income." },
  { q: "How much does it cost to start a business?", a: "Costs vary widely. At minimum, you'll pay state filing fees to register your business ($50–$500 depending on the state). Beyond that, costs depend on your industry — a service business can start for a few hundred dollars, while a product business may need thousands for inventory and equipment." },
  { q: "How long does it take to start a business?", a: "You can form an LLC in as little as 1–2 business days in many states. Writing your business plan, setting up banking, and getting licenses may take a few weeks more. IncorpBay handles the registration paperwork so you can focus on everything else." },
];

export default function StartBusinessGuidePage() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [tocOpen, setTocOpen] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const setRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  const scrollTo = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const onScroll = () => {
      for (const { id } of [...TOC].reverse()) {
        const el = sectionRefs.current[id];
        if (el && el.getBoundingClientRect().top <= 160) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const link = (text: string) => (
    <span style={{ color: "#06B6D4", textDecoration: "underline", cursor: "pointer" }}>{text}</span>
  );

  const H2 = ({ id, children }: { id: string; children: React.ReactNode }) => (
    <h2
      ref={setRef(id)}
      id={id}
      style={{ fontSize: 30, fontWeight: 800, margin: "0 0 20px", scrollMarginTop: 90, color: "#0d0d1a" }}
    >
      {children}
    </h2>
  );

  const H3 = ({ children }: { children: React.ReactNode }) => (
    <h3 style={{ fontSize: 22, fontWeight: 700, margin: "28px 0 12px", color: "#0d0d1a" }}>
      {children}
    </h3>
  );

  const P = ({ children, orange }: { children: React.ReactNode; orange?: boolean }) => (
    <p style={{ fontSize: 16, lineHeight: 1.8, color: "#333", margin: "0 0 18px" }}>
      {children}
    </p>
  );

  const UL = ({ items, orange }: { items: React.ReactNode[]; orange?: boolean }) => (
    <ul style={{ padding: "0 0 0 0", listStyle: "none", margin: "0 0 20px" }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
          <span style={{ color: "#06B6D4", marginTop: 5, flexShrink: 0 }}>·</span>
          <span style={{ fontSize: 16, lineHeight: 1.8, color: "#333" }}>{item}</span>
        </li>
      ))}
    </ul>
  );

  const Divider = () => <hr style={{ border: "none", borderTop: "1px solid #eee", margin: "48px 0" }} />;

  return (
    <NavigationWrapper>
      <div style={{ fontFamily: "'Inter','Helvetica Neue',Arial,sans-serif", color: "#1a1a2e", background: "#fff", margin: 0, padding: 0 }}>

      {/* ── SHARE BAR ── */}
      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", padding: "14px 40px", gap: 10, borderBottom: "1px solid #f0f0f0" }}>
        <span style={{ fontSize: 14, color: "#888", fontWeight: 500 }}>Share:</span>
        {[
          { icon: <LinkedInIcon />, label: "LinkedIn" },
          { icon: <XIcon />, label: "X" },
          { icon: <LinkIcon />, label: "Copy" },
        ].map(({ icon, label }) => (
          <button key={label} title={label} style={{ width: 36, height: 36, borderRadius: "50%", border: "1.5px solid #ddd", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#555" }}>
            {icon}
          </button>
        ))}
      </div>

      {/* ── HERO ── */}
      <div style={{ background: "#f7f8fc", margin: "24px 40px", borderRadius: 20, padding: "48px 60px", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontSize: 14, color: "#888", marginBottom: 24 }}>
          <BookIcon /> 11 min read
        </div>
        <h1 style={{ fontSize: 40, fontWeight: 800, lineHeight: 1.15, margin: "0 0 22px", maxWidth: 680, marginLeft: "auto", marginRight: "auto" }}>
          A Step-by-Step Guide to Starting Your Own Business
        </h1>
        <p style={{ fontSize: 16, color: "#555", lineHeight: 1.7, maxWidth: 640, margin: "0 auto 32px" }}>
          Learn the steps to start your own business — from validating your idea and writing a business plan to choosing a structure, registering with the state, and getting your EIN.
        </p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
          <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#1a1a2e", display: "flex", alignItems: "center", justifyContent: "center", color: "#06B6D4", fontWeight: 800, fontSize: 16 }}>i</div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontWeight: 700, fontSize: 15 }}>IncorpBay Editorial Staff</div>
            <div style={{ fontSize: 13, color: "#888" }}>Editorial Team</div>
          </div>
        </div>
      </div>

      {/* ── MAIN LAYOUT: sidebar + content ── */}
      <div style={{ display: "flex", maxWidth: 1100, margin: "0 auto", padding: "48px 40px 80px", gap: 48 }}>

        {/* ── LEFT SIDEBAR ── */}
        <aside style={{ width: 240, flexShrink: 0, position: "sticky", top: 80, alignSelf: "flex-start", maxHeight: "calc(100vh - 100px)", overflowY: "auto" }}>

          {/* Jump to section */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 700, color: "#555", letterSpacing: 1, textTransform: "uppercase", marginBottom: 14 }}>
            <AnchorIcon /> JUMP TO SECTION
          </div>

          {/* TOC collapsible */}
          <div style={{ border: "1.5px solid #cffafe", borderRadius: 10, overflow: "hidden", marginBottom: 24 }}>
            <button
              onClick={() => setTocOpen(!tocOpen)}
              style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 14px", background: "#ecfeff", border: "none", cursor: "pointer", color: "#06B6D4", fontWeight: 700, fontSize: 14 }}
            >
              Table of contents
              {tocOpen ? <ChevronUp /> : <ChevronDown />}
            </button>
            {tocOpen && (
              <div style={{ padding: "8px 0" }}>
                {TOC.map(({ id, label }) => {
                  const isActive = activeSection === id;
                  return (
                    <div
                      key={id}
                      onClick={() => scrollTo(id)}
                      style={{
                        padding: "8px 14px",
                        fontSize: 13,
                        cursor: "pointer",
                        color: isActive ? "#0d0d1a" : "#888",
                        fontWeight: isActive ? 700 : 400,
                        borderLeft: isActive ? "3px solid #06B6D4" : "3px solid transparent",
                        background: isActive ? "#fff" : "transparent",
                        lineHeight: 1.5,
                      }}
                    >
                      {label}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Trustpilot */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 14, fontSize: 13, color: "#333" }}>
            <StarIcon />
            <span style={{ color: "#00B67A", fontWeight: 700 }}>Trustpilot</span>
            <span style={{ color: "#888" }}>Excellent 4.7 out of 5</span>
          </div>
        </aside>

        {/* ── ARTICLE CONTENT ── */}
        <main style={{ flex: 1, minWidth: 0 }}>

          {/* INTRODUCTION */}
          <section ref={setRef("introduction")} id="introduction" style={{ scrollMarginTop: 90, marginBottom: 48 }}>
            <H2 id="introduction">Introduction</H2>
            <P>Starting your own business takes more than a good idea — it takes a clear sequence of decisions. This guide walks you through the core steps: {link("validating your idea")}, writing a business plan, choosing a structure, registering with the state, getting your Employer Identification Number (EIN), and setting up your finances.</P>
          </section>

          <Divider />

          {/* STEP 1 */}
          <section ref={setRef("step1")} id="step1" style={{ scrollMarginTop: 90, marginBottom: 48 }}>
            <H2 id="step1">Step 1: Nail down your business idea</H2>
            <P>Your business idea is the foundation everything else is built on. Before you spend money or file paperwork, make sure the idea is specific enough to act on — you need to know what you're selling, who you're selling it to, and why someone would {link("buy it")} from you instead of someone else.</P>
            <P>A lot of people skip this step because they feel confident in the idea. That confidence is good, but it's not the same as validation. Talk to potential customers. Look at whether anyone is already doing this and making money at it. If competitors exist, that's a signal there's a market — not a reason to walk away.</P>
            <UL orange items={[
              "What problem does your product or service solve?",
              "Who has that problem and how often do they face it?",
              "Are people already paying for a solution — and if so, what's missing from what's out there?",
            ]} />
          </section>

          <Divider />

          {/* STEP 2 */}
          <section ref={setRef("step2")} id="step2" style={{ scrollMarginTop: 90, marginBottom: 48 }}>
            <H2 id="step2">Step 2: Do your market research</H2>
            <P orange>Market research tells you whether your idea has legs before you commit real resources to it. You're looking for 3 things: the size of your target market, who your competitors are, and what your potential customers actually want — not what you assume they want.</P>
            <P orange>Good research doesn't have to be expensive. Free tools like Google Trends, the U.S. Census Bureau's business data, and the SBA's industry guides can give you a solid picture of demand and competition. The goal is to go into your business plan with facts, not guesses.</P>
            <UL orange items={[
              "Industry size and growth trends",
              "Who your direct and indirect competitors are",
              "What your target customers buy, how much they spend, and what frustrates them",
              "Gaps in the market your business could fill",
            ]} />
          </section>

          <Divider />

          {/* STEP 3 */}
          <section ref={setRef("step3")} id="step3" style={{ scrollMarginTop: 90, marginBottom: 48 }}>
            <H2 id="step3">Step 3: Write a business plan</H2>
            <P>A business plan is a written roadmap for how your business will work and how it will make money. The SBA identifies 9 core components: executive summary, company description, market analysis, organization and management, products or services, marketing and sales strategy, funding request, financial projections, and appendix.</P>
            <P orange>Write the executive summary last — it's a snapshot of the whole plan and it's easier to summarize once everything else is drafted. Your financial projections should cover at least the first year and include income statements, cash flow projections, and a balance sheet. If you're seeking outside funding, lenders and investors will look at these closely.</P>
            <P orange>Even if you're not raising money, a business plan forces you to think through the hard questions before they become expensive problems.</P>
          </section>

          <Divider />

          {/* STEP 4 */}
          <section ref={setRef("step4")} id="step4" style={{ scrollMarginTop: 90, marginBottom: 48 }}>
            <H2 id="step4">Step 4: Choose a business structure</H2>
            <P>Your business structure determines your personal liability, how you're taxed, and what paperwork you need to file. The most common structures in the U.S. are sole proprietorship, partnership, LLC, C Corporation, and S Corporation. Most first-time business owners land on either a sole proprietorship or an {link("LLC")}.</P>
            <H3>Sole proprietorship</H3>
            <P orange>A sole proprietorship requires no formal state filing to form — you're automatically one if you start doing business on your own. The trade-off is that you and the business are legally the same entity, which means your personal finances are fair game if the business owes money or gets sued.</P>
            <H3>LLC</H3>
            <P orange>An LLC separates your personal assets from your business liabilities. To form one, you file Articles of Organization with your state — usually through the Secretary of State's office — and pay a state filing fee. An LLC also gives you flexibility in how you're taxed, which is one reason it's the most popular structure for small business owners.</P>
            <H3>Corporation</H3>
            <P orange>A C Corporation or S Corporation makes sense if you plan to raise venture capital, issue stock, or bring on many shareholders. Corporations have more formal requirements — board meetings, bylaws, annual reports — and more administrative overhead than an LLC. A tax professional can help you figure out whether the structure fits your goals.</P>
          </section>

          <Divider />

          {/* STEP 5 */}
          <section ref={setRef("step5")} id="step5" style={{ scrollMarginTop: 90, marginBottom: 48 }}>
            <H2 id="step5">Step 5: Pick and check your business name</H2>
            <P>Your business name needs to be distinguishable from existing registered names in your state. {link("Check availability")} using your Secretary of State's online business name search tool before you get attached to anything. Some words — like "bank," "insurance," or "corporation" — are restricted and require special approval to use.</P>
            <P orange>If you want to protect your name nationally, you can apply for a federal trademark through the USPTO. A trademark gives you exclusive rights to the name in your industry category across the country — state registration only protects you within that state.</P>
          </section>

          <Divider />

          {/* STEP 6 */}
          <section ref={setRef("step6")} id="step6" style={{ scrollMarginTop: 90, marginBottom: 48 }}>
            <H2 id="step6">Step 6: Register your business and get your EIN</H2>
            <P orange>If you're forming an LLC or corporation, you register by filing formation documents — Articles of Organization for an LLC, Articles of Incorporation for a corporation — with your state's business filing office, typically the Secretary of State. Sole proprietorships generally don't require state registration, though local business licenses may still apply.</P>
            <P orange>After registering, apply for an Employer Identification Number (EIN) from the IRS. An EIN is required if your business has employees, operates as a corporation or partnership, or elects certain tax treatments. You can apply online at irs.gov/ein — online applications are processed immediately. Even if you don't technically need one yet, getting an EIN keeps your Social Security number off business documents.</P>
          </section>

          <Divider />

          {/* STEP 7 */}
          <section ref={setRef("step7")} id="step7" style={{ scrollMarginTop: 90, marginBottom: 48 }}>
            <H2 id="step7">Step 7: Get licenses and permits</H2>
            <P>Most businesses need at least one license or permit to operate legally — and many need several. Requirements vary by industry, state, and city. A restaurant faces different requirements than a consulting firm. A {link("home-based business")} may need a local zoning permit even if it has no walk-in customers.</P>
            <P orange>The SBA's business license and permit tool is a good starting point for figuring out what applies to your business type and location. Don't skip this step — running without required licenses can mean fines or being forced to shut down temporarily.</P>
            <UL orange items={[
              <>Federal licenses — required for regulated industries like agriculture, alcohol, firearms, and financial services</>,
              <>State business licenses — many states require a general business license in addition to industry-specific ones</>,
              <>Local permits — zoning, signage, health inspections, and home occupation permits depending on your city or county</>,
            ]} />
          </section>

          <Divider />

          {/* STEP 8 */}
          <section ref={setRef("step8")} id="step8" style={{ scrollMarginTop: 90, marginBottom: 48 }}>
            <H2 id="step8">Step 8: Fund your business</H2>
            <P>Most businesses need some upfront capital — for equipment, inventory, marketing, or just covering expenses while revenue builds. How you fund your business affects how much control you keep and how much debt you take on. There's no single right answer, and many businesses use more than 1 source.</P>
            <UL orange items={[
              <>Personal savings — the most common starting point; no debt, no dilution, but your own money is at risk</>,
              <>Small business loans — banks and credit unions offer term loans and lines of credit; the SBA also backs loans through approved lenders</>,
              <>Grants — federal, state, and nonprofit grants don't need to be repaid, but competition is high and eligibility requirements are specific</>,
              <>Friends and family — informal funding that can move fast, but put any agreement in writing to protect the relationship</>,
              <>Angel investors and venture capital — suited to high-growth businesses willing to give up equity in exchange for capital</>,
            ]} />
          </section>

          <Divider />

          {/* STEP 9 */}
          <section ref={setRef("step9")} id="step9" style={{ scrollMarginTop: 90, marginBottom: 48 }}>
            <H2 id="step9">Step 9: Open a business bank account</H2>
            <P orange>Open a dedicated business bank account as soon as your business is registered. Keeping business and personal finances separate is one of the most important things you can do early on — not just for bookkeeping, but for liability protection. If your LLC gets sued and your personal and business money are mixed together, a court could decide the LLC isn't really a separate entity, and your personal finances are fair game.</P>
            <P orange>To open a business bank account, you'll typically need your EIN, your formation documents (like your Articles of Organization), and a government-issued ID. Many banks also offer business credit cards — getting one early can help you build a credit history for the business separate from your personal credit.</P>
          </section>

          <Divider />

          {/* STEP 10 */}
          <section ref={setRef("step10")} id="step10" style={{ scrollMarginTop: 90, marginBottom: 48 }}>
            <H2 id="step10">Step 10: Build your brand and marketing plan</H2>
            <P>Your brand is how customers recognize and remember your business. It includes your name, logo, visual style, and the tone you use when you communicate. Getting this right early matters because rebranding later is expensive and confusing for customers who've already found you.</P>
            <P orange>Your marketing plan answers a simpler question: how will people find out you exist? Start with the channels where your target customers already spend time. For most small businesses, that means a combination of {link("a website")}, social media, and either local outreach or search visibility — depending on whether your customers are nearby or nationwide.</P>
            <P orange>You don't need a massive budget to start. A clear message, a professional-looking website, and consistent presence on 1 or 2 channels will outperform scattered efforts across many.</P>
          </section>

          <Divider />

          {/* FAQ */}
          <section ref={setRef("faq")} id="faq" style={{ scrollMarginTop: 90, marginBottom: 60 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, margin: "0 0 30px" }}>FAQ</h2>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ background: "#f9f9f9", borderRadius: 14, marginBottom: 12, overflow: "hidden" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: 16 }}
                >
                  <span style={{ fontSize: 17, fontWeight: 700, color: "#0d0d1a" }}>{faq.q}</span>
                  {openFaq === i ? <ChevronUp /> : <ChevronDown />}
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 24px 20px", fontSize: 15, lineHeight: 1.75, color: "#555" }}>{faq.a}</div>
                )}
              </div>
            ))}
          </section>



        </main>
      </div>


      {/* ── BOTTOM CTA CARD OUTSIDE TOC ── */}
      <section style={{ maxWidth: 1140, margin: "0 auto 90px", padding: "0 40px" }}>
        <div style={{ border: "1.5px solid #e5e7eb", borderRadius: 20, padding: "40px 48px", display: "flex", gap: 48, alignItems: "center", background: "#fff", boxShadow: "0 14px 35px rgba(15,23,42,0.08)", overflow: "hidden" }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, border: "1px solid #ddd", borderRadius: 20, padding: "5px 12px", fontSize: 13, fontWeight: 500, marginBottom: 18 }}>
                Excellent 4.7 out of 5 <StarIcon /> <span style={{ color: "#00B67A", fontWeight: 700 }}>Trustpilot</span>
              </div>
              <h2 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 14px", lineHeight: 1.2 }}>
                Start Your Story With IncorpBay
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555", margin: "0 0 24px", maxWidth: 380 }}>
                Whether you are starting a bridal business, a retail shop, or something entirely different, we can help you handle the paperwork so you can focus on what matters most. Get started today for $0 + state fee.
              </p>
              <button style={{ background: "#06B6D4", color: "#fff", border: "none", borderRadius: 50, padding: "14px 32px", fontWeight: 700, fontSize: 14, cursor: "pointer", letterSpacing: 0.4 }}>
                GET STARTED
              </button>
            </div>

            {/* Dashboard UI mockup */}
            <div style={{ flex: 1, background: "#f7f8fc", borderRadius: 16, padding: "20px", display: "flex", gap: 12, minWidth: 0 }}>
              {/* Sidebar */}
              <div style={{ width: 130, flexShrink: 0 }}>
                {["Corp Formation", "Compliance", "Financials", "Taxes", "Insurance", "Business Mail", "Business Contracts"].map((item, i) => (
                  <div key={item} style={{ padding: "8px 10px", borderRadius: 8, fontSize: 12, color: i === 0 ? "#0d0d1a" : "#888", fontWeight: i === 0 ? 700 : 400, background: i === 0 ? "#fff" : "transparent", marginBottom: 2, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    {item} {i === 0 && <span style={{ color: "#aaa", fontSize: 10 }}>›</span>}
                  </div>
                ))}
              </div>
              {/* Panel */}
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 12 }}>Corp Formation</div>
                <div style={{ background: "#fff", borderRadius: 10, padding: 12, marginBottom: 10 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 8 }}>Order Status</div>
                  {/* Gauge */}
                  <div style={{ display: "flex", justifyContent: "center", position: "relative", height: 70, marginBottom: 6 }}>
                    <svg viewBox="0 0 120 70" width="120" height="70">
                      <path d="M10,65 A55,55 0 0,1 110,65" fill="none" stroke="#e8e8e8" strokeWidth="10" strokeLinecap="round"/>
                      <path d="M10,65 A55,55 0 0,1 85,20" fill="none" stroke="#06B6D4" strokeWidth="10" strokeLinecap="round"/>
                    </svg>
                    <span style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", fontSize: 12, fontWeight: 700 }}>In Progress</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "#06B6D4" }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#06B6D4", display: "inline-block" }} /> Operational
                  </div>
                </div>
                <div style={{ background: "#fff", borderRadius: 10, padding: 12 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 8 }}>Order Tracking</div>
                  <div style={{ background: "#e8e8e8", borderRadius: 6, height: 28, overflow: "hidden", display: "flex" }}>
                    <div style={{ width: "65%", background: "#06B6D4", display: "flex", alignItems: "center", paddingLeft: 8 }}>
                      <span style={{ color: "#fff", fontSize: 12, fontWeight: 700 }}>65%</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4, fontSize: 11, color: "#888" }}>
                    <span>EIN</span><span style={{ color: "#06B6D4" }}>In Progress</span>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      </div>
    </NavigationWrapper>
  );
}
