"use client";

import { useState } from "react";
import NavigationWrapper from "@/components/NavigationWrapper";

// ── Icons ─────────────────────────────────────────────────────────────────────
const StarGreen = () => (
  <svg viewBox="0 0 24 24" fill="#00B67A" width={14} height={14}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
const StarCyan = () => (
  <svg viewBox="0 0 24 24" fill="#FF9A1F" width={14} height={14}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
const ChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={16} height={16}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={3} width={12} height={12}>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);
const MonitorIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth={1.5} width={22} height={22}>
    <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
  </svg>
);
const DollarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth={1.5} width={22} height={22}>
    <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────────────────
const HOW_TAXED_STEPS = [
  { n: 1, text: "Your business earns revenue", cyan: false },
  { n: 2, text: "You deduct any allowable business expenses", cyan: false },
  { n: 3, text: "The amount remaining is your business profit, which you pay to yourself", cyan: true },
  { n: 4, text: "You pay self-employment tax of around 15 percent on any profits", cyan: true },
  { n: 5, text: "You pay federal tax at various income bands on any profits", cyan: true },
  { n: 6, text: "You pay state tax on any profits", cyan: false },
];

const HOW_TO_FILE_STEPS = [
  { n: 1, text: "Go to the Internal Revenue Service website", cyan: true },
  { n: 2, text: "Find the section on S Corporation Tax Elections", cyan: true },
  { n: 3, text: "Download form 2553", cyan: false },
  { n: 4, text: "Gather the required information for form 2553 and fill it in", cyan: true },
  { n: 5, text: "Send the form back to the IRS, typically by mail or fax", cyan: true },
  { n: 6, text: "Wait for notification of acceptance of your tax election", cyan: false },
];

const FAQS = [
  { q: "Does Filing Form 2553 Remove Any LLC Protections?", a: "No. Filing Form 2553 is a tax election only — it changes how the IRS treats your LLC for tax purposes. Your LLC's legal protections, structure, and liability shield remain fully intact. You continue to operate as an LLC under state law." },
  { q: "How Much Could I Save by Being Treated as an S Corporation for Tax Purposes?", a: "Savings vary based on your net profits and salary level. Generally, LLC owners with net profits above $40,000–$50,000 per year can see meaningful reductions in self-employment tax. Use our S Corp Tax Calculator for a personalized estimate." },
  { q: "Do I Have to File My S Corporation Tax Election at a Certain Time?", a: "Yes. To elect S-Corp tax treatment for the current tax year, you must file Form 2553 no later than two months and 15 days after the beginning of the tax year. For a new LLC, this means filing shortly after formation." },
  { q: "Can I File an S Corporation Tax Election if There Are More Owners in the Business?", a: "Yes, as long as the business meets S-Corp eligibility requirements: no more than 100 shareholders, all shareholders must be U.S. citizens or residents, and there can only be one class of stock." },
];

const RELATED_ARTICLES = [
  { title: "How to Start Setting Up Your Business and Structure for Your Small Business", grad: "linear-gradient(135deg,#06B6D4,#0f172a)" },
  { title: "How to Start Setting Up Your Business in Texas", grad: "linear-gradient(135deg,#06B6D4,#0f172a)" },
  { title: "What is a Domestic LLC? How to Choose the Right State to …", grad: "linear-gradient(135deg,#06B6D4,#0f172a)" },
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function SCorpElectionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ color: "#0f172a", background: "#fff", margin: 0, padding: 0 }}>
      <NavigationWrapper>
        {/* ── HERO ── */}
        <section style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 40px 52px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 56, flexWrap: "wrap" }}>
          {/* Left */}
          <div style={{ flex: "1 1 420px" }}>
            {/* Trustpilot pill */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 5, border: "1px solid #ddd", borderRadius: 20, padding: "4px 12px", fontSize: 12, marginBottom: 22 }}>
              Excellent 4.7 out of 5 <StarGreen /> <span style={{ color: "#00B67A", fontWeight: 700 }}>Trustpilot</span>
            </div>
            <h1 style={{ fontSize: 44, fontWeight: 900, lineHeight: 1.15, margin: "0 0 18px", color: "#0d0d1a" }}>
              Prepare and File an S Corporation Tax Election With Form 2553
            </h1>
            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7, margin: "0 0 28px", maxWidth: 420 }}>
              Reduce the Tax You Pay by Having Your LLC Treated as an S Corp for Tax Purposes.
            </p>
            <button style={{ background: "linear-gradient(180deg,#06B6D4,#0891B2)", color: "#fff", border: "none", borderRadius: 50, padding: "14px 30px", fontWeight: 800, fontSize: 13, cursor: "pointer", letterSpacing: 0.3 }}>
              FILE S CORP ELECTION
            </button>
          </div>

          {/* Right — Form mockup */}
          <div style={{ flex: "1 1 360px", display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", width: 280 }}>
              {/* Cyan glow */}
              <div style={{ position: "absolute", right: -30, top: -20, width: 180, height: 180, background: "radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)", borderRadius: "50%" }} />
              {/* Framed document */}
              <div style={{ background: "#fff", border: "6px solid #1a1a2e", borderRadius: 6, padding: "24px 22px", boxShadow: "8px 10px 0 #0f172a", position: "relative", zIndex: 1 }}>
                <div style={{ background: "#06B6D4", padding: "6px 10px", borderRadius: 4, display: "inline-block", marginBottom: 12 }}>
                  <span style={{ color: "#fff", fontWeight: 900, fontSize: 13, letterSpacing: 1 }}>S CORP</span>
                </div>
                <div style={{ fontSize: 13, fontWeight: 900, color: "#0f172a", marginBottom: 14 }}>ELECTION</div>
                <div style={{ height: 6, background: "#eee", borderRadius: 4, marginBottom: 6, width: "100%" }} />
                <div style={{ height: 6, background: "#eee", borderRadius: 4, marginBottom: 6, width: "85%" }} />
                <div style={{ height: 6, background: "#eee", borderRadius: 4, marginBottom: 6, width: "90%" }} />
                <div style={{ height: 6, background: "#eee", borderRadius: 4, marginBottom: 20, width: "70%" }} />
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", border: "1.5px solid #ddd" }} />
                  <div>
                    <div style={{ height: 5, width: 80, background: "#ddd", borderRadius: 3, marginBottom: 5 }} />
                    <div style={{ height: 5, width: 60, background: "#eee", borderRadius: 3 }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="px-6 py-4 md:px-16 bg-white">
        <p className="text-center text-base md:text-xl font-bold text-slate-700 max-w-4xl mx-auto leading-relaxed">
          Bootstrapped, Founder Led, Independently Owned{" "}
          <span className="bg-cyan-50 px-2 py-0.5 rounded-lg font-extrabold text-[#06B6D4] whitespace-nowrap shadow-sm">
            Since 2004
          </span>{" "}
          With{" "}
          <span className="bg-cyan-50 px-2 py-0.5 rounded-lg font-extrabold text-[#06B6D4] shadow-sm">
            Over 1,000,000 Entrepreneurs
          </span>{" "}
          Served!
        </p>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "48px 40px" }}>
        <div style={{ display: "flex", gap: 24, alignItems: "stretch", flexWrap: "wrap" }}>
          {/* Trustpilot */}
          <div style={{ flex: "1 1 220px", border: "1.5px solid #eee", borderRadius: 14, padding: "20px 24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
              <StarGreen /> <span style={{ color: "#00B67A", fontWeight: 700, fontSize: 13 }}>Trustpilot</span>
            </div>
            <div style={{ display: "flex", gap: 3, marginBottom: 6 }}>
              {Array.from({ length: 5 }).map((_, i) => <StarGreen key={i} />)}
            </div>
            <div style={{ fontSize: 12, color: "#555" }}>TrustScore <strong>4.7</strong> | <strong>25,036</strong> reviews</div>
          </div>

          {/* ShopperApproved */}
          <div style={{ flex: "1 1 220px", border: "1.5px solid #eee", borderRadius: 14, padding: "20px 24px" }}>
            <div style={{ fontSize: 12, color: "#888", marginBottom: 8, fontWeight: 600 }}>⭐ ShopperApproved</div>
            <div style={{ display: "flex", gap: 3, marginBottom: 6 }}>
              {Array.from({ length: 5 }).map((_, i) => <StarCyan key={i} />)}
            </div>
            <div style={{ fontSize: 12, color: "#555" }}>Overall rating <strong>4.6</strong> | <strong>148,209</strong> reviews</div>
          </div>

          {/* Join banner */}
          <div style={{ flex: "2 1 360px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <div style={{ width: 70, height: 70, borderRadius: "50%", border: "3px solid #1a1a2e", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 9, fontWeight: 800, color: "#0f172a", lineHeight: 1 }}>Inc.</div>
                  <div style={{ fontSize: 14, fontWeight: 900, color: "#06B6D4", lineHeight: 1 }}>5000</div>
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: 22, fontWeight: 800, margin: "0 0 6px", lineHeight: 1.2 }}>
                  Join <span style={{ color: "#06B6D4" }}>1,000,000+</span><br />Entrepreneurs Like You
                </h3>
                <p style={{ fontSize: 13, color: "#555", margin: 0 }}>Entrepreneurship is booming — and we're happy to be one of America's fastest growing companies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO TEXT ── */}
      <section style={{ maxWidth: 860, margin: "0 auto", padding: "0 40px 40px" }}>
        <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.8 }}>
          If you want to reduce the amount of tax you pay on your LLC earnings, an S Corporation Tax Election (Form 2553) is a necessity. This tax election tells the Internal Revenue Service to tax your LLC business as an S Corporation, which could reduce the amount of income on which you need to pay self-employment tax (including Social Security, Medicare and FICA). This can substantially reduce your tax bill with only a slight increase in administrative overhead for you and your accountant.
        </p>
      </section>

      {/* ── HOW LLCs ARE NORMALLY TAXED ── */}
      <section style={{ maxWidth: 860, margin: "0 auto", padding: "0 40px 60px" }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 14px" }}>How LLCs Are Normally Taxed</h2>
        <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.7, margin: "0 0 28px" }}>
          When it comes to the amount of tax you owe the federal and state government, your income from an LLC is normally taxed similarly to that of sole proprietorship businesses. For a small, one-person LLC, this typically works as follows:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
          {HOW_TAXED_STEPS.map(step => (
            <div key={step.n} style={{ display: "flex", alignItems: "center", gap: 14, background: "#f8fafc", borderRadius: 12, padding: "14px 18px", border: "1.5px solid #e2e8f0" }}>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: "#06B6D4", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 13, color: "#fff", flexShrink: 0 }}>
                {step.n}
              </div>
              <span style={{ fontSize: 14, color: "#000", fontWeight: 600 }}>{step.text}</span>
            </div>
          ))}
        </div>
        <div style={{ background: "#f7f8fc", borderRadius: 12, padding: "16px 20px", display: "flex", alignItems: "flex-start", gap: 12 }}>
          <span style={{ fontSize: 18, flexShrink: 0 }}>💡</span>
          <p style={{ fontSize: 14, color: "#555", margin: 0, lineHeight: 1.7 }}>
            An S Corporation Tax Election reduces the amount of tax you pay in step 4, self-employment tax. It has no impact on any other taxes.
          </p>
        </div>
      </section>

      {/* ── SELF-EMPLOYMENT TAX COMPARISON ── */}
      <section style={{ background: "#f7f8fc", padding: "60px 0" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto", padding: "0 40px", display: "flex", gap: 52, alignItems: "flex-start", flexWrap: "wrap" }}>
          {/* Left: text + bar charts */}
          <div style={{ flex: "1 1 420px" }}>
            <h3 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 14px" }}>Self-Employment Tax as an LLC</h3>
            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7, margin: "0 0 28px" }}>
              Under a standard LLC tax arrangement where the income "flows through" to your 1040 tax return and business schedule C, you would pay self-employment tax on all of that $90,000. At approximately 15%, the tax on that money would be $13,500. You would still pay standard federal and state taxes on any earnings.
            </p>
            <h3 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 14px" }}>Self-Employment Tax as an LLC Payroll Tax as an S Corporation</h3>
            <p style={{ fontSize: 14, color: "#475569", lineHeight: 1.7, margin: "0 0 28px" }}>
              If you choose to be taxed as an S Corporation, you could say that your salary is $63,000 and have the other $27,000 of your business revenue as a distribution. You would pay standard payroll taxes on the $63,000 for a total of around $7,100. You would not pay any payroll (self-employment) tax on the $27,000 distribution, saving you around $4,050. You would still pay standard federal and state taxes on both your salary and your distribution.
            </p>

            {/* Income bar */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 26, fontWeight: 900, color: "#0f172a", marginBottom: 6 }}>$63,000</div>
              <div style={{ fontSize: 12, color: "#888", marginBottom: 8 }}>Estimated Yearly Income</div>
              <div style={{ height: 8, background: "#06B6D4", borderRadius: 4, width: "63%", marginBottom: 4 }} />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#aaa" }}>
                <span>$0</span><span>$50,000</span><span>$100,000</span>
              </div>
            </div>

            {/* Salary bar */}
            <div style={{ marginBottom: 32 }}>
              <div style={{ fontSize: 26, fontWeight: 900, color: "#0f172a", marginBottom: 6 }}>$26,000</div>
              <div style={{ fontSize: 12, color: "#888", marginBottom: 8 }}>Salary you could pay yourself as S Corporation</div>
              <div style={{ height: 8, background: "#06B6D4", borderRadius: 4, width: "40%", marginBottom: 4 }} />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#aaa" }}>
                <span>$0</span><span>$31,500</span><span>$63,000</span>
              </div>
            </div>

            {/* Comparison table */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
              {[
                { label: "As a Sole Proprietor", sub: "Self-employment taxes paid $63,160 as a sole proprietor", amount: "$6,419", color: "#06B6D4" },
                { label: "As a S Corporation", sub: "With a salary of $26,000 and a dividend of $37,160", amount: "$2,378", color: "#00a86b" },
              ].map((row, i) => (
                <div key={i} style={{ background: "#fff", border: "1.5px solid #eee", borderRadius: 12, padding: "16px 16px" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 4 }}>{row.label}</div>
                  <div style={{ fontSize: 11, color: "#888", marginBottom: 10, lineHeight: 1.5 }}>Taxes Paid</div>
                  <div style={{ fontSize: 11, color: "#555", marginBottom: 8, lineHeight: 1.5 }}>{row.sub}</div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: row.color }}>{row.amount}</div>
                </div>
              ))}
            </div>
            <div style={{ background: "#ecfeff", border: "1.5px solid #67e8f9", borderRadius: 10, padding: "12px 16px", marginTop: 14, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 13, fontWeight: 700 }}>Total Savings</span>
              <span style={{ fontSize: 16, fontWeight: 900, color: "#06B6D4" }}>$4,041</span>
            </div>
          </div>

          {/* Right: donut + calculator CTA */}
          <div style={{ flex: "1 1 360px" }}>
            {/* Donut chart */}
            <div style={{ background: "#fff", borderRadius: 16, padding: "28px", textAlign: "center", marginBottom: 28, boxShadow: "0 4px 16px rgba(0,0,0,0.06)", border: "1.5px solid #eee" }}>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#0f172a", marginBottom: 6 }}>$120K</div>
              <div style={{ fontSize: 12, color: "#888", marginBottom: 20 }}>Your Annual Business Revenue</div>
              {/* Donut SVG */}
              <svg viewBox="0 0 120 120" width="160" height="160" style={{ display: "block", margin: "0 auto 16px" }}>
                <circle cx="60" cy="60" r="44" fill="none" stroke="#eee" strokeWidth="16" />
                <circle cx="60" cy="60" r="44" fill="none" stroke="#06B6D4" strokeWidth="16"
                  strokeDasharray={`${2 * Math.PI * 44 * 0.75} ${2 * Math.PI * 44 * 0.25}`}
                  strokeDashoffset={2 * Math.PI * 44 * 0.25}
                  strokeLinecap="round" transform="rotate(-90 60 60)" />
                <text x="60" y="64" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1a1a2e">Revenue</text>
              </svg>
              <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#06B6D4" }} />
                  <span style={{ fontSize: 11 }}>$90K profits</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#eee" }} />
                  <span style={{ fontSize: 11 }}>$30K expenses</span>
                </div>
              </div>
            </div>

            {/* Calculator CTA */}
            <div style={{ background: "#fff", borderRadius: 16, padding: "28px", border: "1.5px solid #eee", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
              <h3 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 12px", lineHeight: 1.3 }}>
                Check the Savings Yourself With Our S Corporation Tax Calculator
              </h3>
              <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7, margin: "0 0 16px" }}>
                The S Corporation calculator lets you choose how much to withdraw from your business each year and how much of it you will take as salary (with the rest being taxed as a distribution). It will show you how much money you can save in taxes.
              </p>
              <p style={{ fontSize: 14, color: "#06B6D4", fontWeight: 700, margin: "0 0 20px" }}>
                Use our S Corporation Tax Calculator to view your potential tax savings.
              </p>
              <button style={{ background: "linear-gradient(180deg,#06B6D4,#0891B2)", color: "#fff", border: "none", borderRadius: 50, padding: "12px 22px", fontWeight: 800, fontSize: 12, cursor: "pointer", letterSpacing: 0.3 }}>
                GO TO S CORP TAX CALCULATOR
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── ASSIGNING A FAIR SALARY ── */}
      <section style={{ maxWidth: 1060, margin: "0 auto", padding: "60px 40px" }}>
        <div style={{ display: "flex", gap: 52, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 16px" }}>Assigning a Fair Salary</h2>
            <p style={{ fontSize: 14, color: "#555", lineHeight: 1.8 }}>
              One important part of the S Corporation Tax Election is that you must pay yourself a fair salary, which the IRS defines as "reasonable compensation." If you do not, the IRS could audit you and levy taxes and penalties. For example, you cannot pay yourself a salary of $13,000 and take $60,000 in distributions. When it comes to setting a fair salary, look at what full-time roles similar to yours are paying someone with similar expertise and experience, and use that as a baseline. Speak with your accountant or attorney for more information.
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ borderRadius: 16, overflow: "hidden", height: 260, background: "linear-gradient(145deg,#6b4020,#2a1008)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: 64 }}>👨‍💼</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── ADMINISTRATIVE OVERHEAD ── */}
      <section style={{ background: "#f7f8fc", padding: "60px 0" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 40px" }}>
          <h2 style={{ fontSize: 26, fontWeight: 800, color: "#06B6D4", margin: "0 0 14px", lineHeight: 1.3 }}>
            Administrative Overhead Of the S Corporation Election
          </h2>
          <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7, margin: "0 0 28px" }}>
            Because it can reduce your tax burden by such a substantial amount, the S Corporation Tax Election is a good idea for most LLC owners. But this is important to understand the additional overhead this might create for you, your business, and your accountant.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {[
              { icon: <MonitorIcon />, title: "Setting up monthly payroll", desc: "You will need to set up a monthly payroll where you pay yourself and submit your payroll taxes." },
              { icon: <DollarIcon />, title: "Setting up monthly payroll", desc: "You will need to set up a monthly payroll where you pay yourself and submit your payroll taxes." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#fff", border: "1.5px solid #eee", borderRadius: 12, padding: "20px 18px" }}>
                <div style={{ marginBottom: 10 }}>{item.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 6 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO FILE ── */}
      <section style={{ maxWidth: 860, margin: "0 auto", padding: "60px 40px" }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 8px", textAlign: "center" }}>
          How To File Your <span style={{ color: "#06B6D4" }}>S Corp Tax Election</span>
        </h2>
        <p style={{ fontSize: 14, color: "#555", textAlign: "center", margin: "0 0 8px" }}>
          There are a couple of ways you can file form 2553. File Form 2553: S Corporation Tax Election if you want to complete the filing process yourself, here are the steps you need to follow.
        </p>
        <p style={{ fontSize: 14, color: "#06B6D4", textAlign: "center", margin: "0 0 32px" }}>
          File Form 2553: S Corporation Tax Election
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 40 }}>
          {HOW_TO_FILE_STEPS.map(step => (
            <div key={step.n} style={{ display: "flex", alignItems: "center", gap: 14, background: "#f8fafc", borderRadius: 12, padding: "14px 18px", border: "1.5px solid #e2e8f0" }}>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: "#06B6D4", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 13, color: "#fff", flexShrink: 0 }}>
                {step.n}
              </div>
              <span style={{ fontSize: 14, color: "#000", fontWeight: 600 }}>{step.text}</span>
            </div>
          ))}
        </div>

        {/* Trustpilot under steps */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 5, border: "1px solid #ddd", borderRadius: 20, padding: "4px 12px", fontSize: 12 }}>
            Excellent 4.7 out of 5 <StarGreen /> <span style={{ color: "#00B67A", fontWeight: 700 }}>Trustpilot</span>
          </div>
        </div>

        {/* Help CTA */}
        <div style={{ background: "#fff", border: "1.5px solid #eee", borderRadius: 16, padding: "40px 48px", textAlign: "center", boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, margin: "0 0 4px", lineHeight: 1.25 }}>
            Help File My LLC S<br /><span style={{ color: "#06B6D4" }}>Corporation Tax Election</span>
          </h2>
          <p style={{ fontSize: 14, color: "#555", margin: "12px 0 24px", lineHeight: 1.7, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
            No Contracts, No Surprise. Save your time, we'll handle the paperwork. We provide a complete S Corporation Tax Election service to register and file your LLC tax status with the IRS on your behalf. Just place an order and we'll collect the right information to guide you through the process, and the IRS will notify you of your updated tax status.
          </p>
          <button style={{ background: "linear-gradient(180deg,#06B6D4,#0891B2)", color: "#fff", border: "none", borderRadius: 50, padding: "14px 36px", fontWeight: 800, fontSize: 14, cursor: "pointer" }}>
            FILE NOW
          </button>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section style={{ background: "#f7f8fc", padding: "60px 0" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 40px" }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 28px", lineHeight: 1.3 }}>
            Common Questions About Filing Your S Corporation Tax Election
          </h2>
          {FAQS.map((faq, i) => (
            <div key={i} style={{ borderBottom: "1px solid #e0e0e0", background: "#fff", borderRadius: i === 0 ? "12px 12px 0 0" : i === FAQS.length - 1 ? "0 0 12px 12px" : "0" }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: 16 }}
              >
                <span style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                  <span style={{ color: "#06B6D4", fontWeight: 700, fontSize: 14, flexShrink: 0 }}>{i + 1}</span>
                  <span style={{ fontSize: 15, fontWeight: 600, color: "#0d0d1a" }}>{faq.q}</span>
                </span>
                <span style={{ transform: openFaq === i ? "rotate(180deg)" : "none", transition: "transform 0.2s", flexShrink: 0, color: "#aaa" }}>
                  <ChevronDown />
                </span>
              </button>
              {openFaq === i && (
                <div style={{ padding: "0 20px 18px 46px", fontSize: 14, color: "#555", lineHeight: 1.75 }}>{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── RELATED ARTICLES ── */}
      <section style={{ maxWidth: 1060, margin: "0 auto", padding: "60px 40px 80px" }}>
        <h2 style={{ fontSize: 24, fontWeight: 800, textAlign: "center", margin: "0 0 32px" }}>Related Articles</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
          {RELATED_ARTICLES.map((article, i) => (
            <div key={i} style={{ cursor: "pointer" }}>
              <div style={{ height: 160, borderRadius: 12, background: article.grad, marginBottom: 12, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                <span style={{ fontSize: 40 }}>📄</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#0d0d1a", lineHeight: 1.5 }}>{article.title}</span>
                <span style={{ color: "#06B6D4", fontSize: 14, flexShrink: 0 }}>↗</span>
              </div>
              <div style={{ fontSize: 11, color: "#aaa", marginTop: 4 }}>2/5/2025</div>
            </div>
          ))}
        </div>
      </section>
      </NavigationWrapper>
    </div>
  );
}
