"use client";

import { useState } from "react";
import NavigationWrapper from "@/components/NavigationWrapper";


// ── Icons ───────────────────────────────────────────────────────────────────────
const ChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={18} height={18}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);
const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={16} height={16}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={16} height={16}>
    <path d="M7 17l10-10M7 7h10v10" />
  </svg>
);
const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="#FF9A1F" width={15} height={15}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────────────────
const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas",
  "California", "Colorado", "Connecticut", "Delaware",
  "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas",
  "Kentucky", "Louisiana", "Maine", "Maryland",
  "Massachusetts", "Michigan", "Minnesota", "Mississippi",
  "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma",
  "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah",
  "Vermont", "Virginia", "Washington", "Washington DC",
  "West Virginia", "Wisconsin", "Wyoming",
];

const resources = [
  { title: "Understanding Filing Fees", gradient: "linear-gradient(145deg,#8b5a2b,#3e2a1a)" },
  { title: "Navigating Filing Times", gradient: "linear-gradient(145deg,#6b6b6b,#2a2a2a)" },
  { title: "Business Name Search", gradient: "linear-gradient(145deg,#7a8b5a,#2e3a1a)" },
  { title: "Filing Annual Reports", gradient: "linear-gradient(145deg,#5a2b6b,#1a0a2a)" },
  { title: "State LLC Filing Tips", gradient: "linear-gradient(145deg,#8b6b3a,#3a2a0a)" },
  { title: "File in Another Country", gradient: "linear-gradient(145deg,#3a5a8b,#0a1a3a)" },
];

const faqs = [
  {
    q: "Which State Has the Most Corporation-Friendly Requirements?",
    a: "States like Delaware, Nevada, and Wyoming are well known for having business-friendly rules, low filing fees, and strong legal protections, which is why many out-of-state entrepreneurs choose to incorporate there.",
  },
  {
    q: "Which State is Best for Registering a Corporation?",
    a: "The best state depends on your business goals. Many businesses choose their home state for simplicity, while others choose Delaware for its established corporate law, Nevada for tax advantages, or Wyoming for low fees and privacy.",
  },
  {
    q: "Does Every State Recognize Corporations?",
    a: "Yes, every U.S. state recognizes corporations as a legal business structure. However, if you operate in a state other than where you incorporated, you'll typically need to register as a foreign corporation there.",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function CorpFormationByStatePage() {
  const [selectedState, setSelectedState] = useState<string>("Massachusetts");
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

return (
    <NavigationWrapper>
      <div style={{ fontFamily: "'Inter','Helvetica Neue',Arial,sans-serif", color: "#1a1a2e", background: "#fff", margin: 0, padding: 0 }}>

      {/* ── BREADCRUMB ── */}
      <div style={{ padding: "14px 80px 0", fontSize: 13, color: "#999", maxWidth: 1200, margin: "0 auto" }}>
        <span style={{ color: "#FF4A00", cursor: "pointer" }}>Incorp Bay</span>
        <span style={{ margin: "0 6px" }}>›</span>
        <span style={{ color: "#FF4A00" }}>Corp Formation By State</span>
      </div>

      {/* ── HERO + MAP ── */}
      <section style={{ textAlign: "center", padding: "30px 24px 70px", maxWidth: 900, margin: "0 auto" }}>
        <h1 style={{ fontSize: 40, fontWeight: 800, lineHeight: 1.18, margin: "0 0 22px", color: "#0d0d1a" }}>
          Want To Learn More <span style={{ color: "#FF4A00" }}>About Corporations In Your State?</span>
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: "#555", maxWidth: 700, margin: "0 auto 50px" }}>
          With different rules and regulations for incorporation in every state, starting a business can be a pretty confusing process. That's why we've organized all corporation requirements by state in one handy place — right here!
        </p>

{/* US Outline Map */}
        <div
          style={{ position: "relative", display: "flex", justifyContent: "center", marginTop: 10 }}
          onMouseLeave={() => setHoveredState(null)}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              background: "#ecfeff",
              border: "1px solid #a5f3fc",
              borderRadius: 999,
              padding: "8px 16px",
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontWeight: 700,
              fontSize: 13,
              color: "#0e7490",
              boxShadow: "0 8px 24px rgba(6,182,212,0.12)",
              zIndex: 10,
            }}
          >
            {hoveredState || selectedState} <ArrowRight />
          </div>

          <svg
            viewBox="0 0 960 560"
            width="100%"
            height="380"
            style={{ maxWidth: 780, marginTop: 22 }}
            aria-label="United States map outline"
          >
            <g fill="none" stroke="#cbd5e1" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              {/* Contiguous United States outline */}
              <path d="M132 178 L154 150 L204 139 L263 146 L329 158 L392 166 L458 163 L520 171 L581 164 L633 177 L682 169 L742 181 L789 207 L824 239 L850 278 L831 302 L841 337 L809 348 L779 340 L751 360 L717 356 L686 373 L645 364 L606 381 L551 369 L501 384 L444 370 L383 380 L331 359 L281 363 L229 346 L180 321 L151 283 L123 259 L111 220 Z" />

              {/* West coast / Pacific states */}
              <path d="M154 150 L160 204 L142 257 L157 313" />
              <path d="M204 139 L201 202 L180 254 L184 323" />
              <path d="M263 146 L260 218 L240 284 L229 346" />
              <path d="M160 204 L260 218" />
              <path d="M142 257 L240 284" />

              {/* Mountain states */}
              <path d="M329 158 L324 232 L319 308 L331 359" />
              <path d="M392 166 L392 237 L386 310 L383 380" />
              <path d="M458 163 L454 237 L451 315 L444 370" />
              <path d="M260 218 L454 237" />
              <path d="M240 284 L451 315" />
              <path d="M319 308 L451 315" />

              {/* Plains */}
              <path d="M520 171 L520 239 L517 311 L501 384" />
              <path d="M581 164 L575 231 L572 299 L551 369" />
              <path d="M454 237 L575 231" />
              <path d="M451 315 L572 299" />
              <path d="M520 239 L633 238" />
              <path d="M517 311 L645 311" />

              {/* Midwest / Mississippi valley */}
              <path d="M633 177 L633 238 L645 311 L645 364" />
              <path d="M682 169 L681 226 L686 286 L686 373" />
              <path d="M742 181 L731 231 L717 286 L717 356" />
              <path d="M633 238 L731 231" />
              <path d="M645 311 L717 286" />

              {/* Southeast */}
              <path d="M686 373 L704 323 L751 360" />
              <path d="M717 356 L732 316 L779 340" />
              <path d="M751 360 L765 408 L793 438 L811 430 L798 390 L809 348" />
              <path d="M645 364 L686 373 L717 356" />
              <path d="M606 381 L645 364" />

              {/* Northeast */}
              <path d="M742 181 L773 186 L789 207" />
              <path d="M773 186 L780 222 L824 239" />
              <path d="M731 231 L780 222" />
              <path d="M717 286 L776 278 L824 239" />
              <path d="M776 278 L850 278" />
              <path d="M789 207 L827 188 L850 205 L824 239" />
              <path d="M827 188 L849 160 L870 182 L850 205" />
              <path d="M850 205 L888 207 L870 230 L824 239" />

              {/* State separator detail lines */}
              <path d="M204 139 L240 185" opacity="0.65" />
              <path d="M281 363 L286 315" opacity="0.65" />
              <path d="M329 158 L392 166" opacity="0.65" />
              <path d="M392 237 L520 239" opacity="0.65" />
              <path d="M501 384 L517 311" opacity="0.65" />
              <path d="M581 164 L633 177" opacity="0.65" />
              <path d="M645 311 L686 286" opacity="0.65" />
              <path d="M717 286 L732 316" opacity="0.65" />
              <path d="M776 278 L779 340" opacity="0.65" />
              <path d="M809 348 L831 302" opacity="0.65" />
            </g>

            {/* subtle cyan selected-state marker */}
            <g
              onMouseEnter={() => setHoveredState(selectedState)}
              style={{ cursor: "pointer" }}
            >
              <circle cx="780" cy="222" r="9" fill="#06B6D4" opacity="0.92" />
              <circle cx="780" cy="222" r="18" fill="#06B6D4" opacity="0.16" />
            </g>

            {/* Alaska */}
            <g fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(88 380)">
              <path d="M10 72 L34 48 L73 36 L117 50 L137 83 L110 105 L66 102 L34 91 Z" />
              <path d="M85 105 L119 125 M51 103 L23 119 M125 84 L158 91" />
            </g>

            {/* Hawaii */}
            <g fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(280 442)">
              <path d="M0 20 C10 12 22 13 30 20" />
              <path d="M45 26 C56 18 70 21 76 31" />
              <path d="M93 36 C103 29 116 31 122 42" />
              <path d="M140 52 C154 43 170 48 178 61" />
            </g>
          </svg>
        </div>
      </section>

      {/* ── PICK A STATE GRID ── */}
      <section style={{ padding: "0 80px 80px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 32, fontWeight: 800, marginBottom: 36 }}>Pick a state, any state!</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
          {states.map((s) => {
            const isSelected = s === selectedState;
            return (
              <button
                key={s}
                onClick={() => setSelectedState(s)}
                style={{
                  textAlign: "left",
                  padding: "16px 20px",
                  borderRadius: 10,
                  border: "1px solid transparent",
                  background: isSelected ? "#ffd9c2" : "#fff3ef",
                  color: "#cc4400",
                  fontWeight: 500,
                  fontSize: 14,
                  cursor: "pointer",
                  transition: "background 0.15s",
                }}
              >
                {s}
              </button>
            );
          })}
        </div>
      </section>

      {/* ── WHICH STATE SHOULD YOU CHOOSE ── */}
      <section style={{ padding: "0 80px 60px", maxWidth: 1000, margin: "0 auto" }}>
        <h2 style={{ fontSize: 32, fontWeight: 800, margin: "0 0 18px", lineHeight: 1.2 }}>Which State Should You Choose?</h2>
        <p style={{ fontSize: 15, lineHeight: 1.75, color: "#444", marginBottom: 18, maxWidth: 760 }}>
          Remember, you don't necessarily need to form your corporation in the state where you live. Some states, such as Wyoming, Nevada and Delaware, have business-friendly rules and cheap filing fees that inspire out-of-state entrepreneurs choose to file their corporations there.
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.75, color: "#444", maxWidth: 760 }}>
          Explore the resources below to learn more about the state-by-state specifics of forming a corporation.
        </p>
      </section>

      {/* ── ADDITIONAL CORPORATION RESOURCES ── */}
      <section style={{ padding: "30px 80px 90px", maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: 32, fontWeight: 800, margin: "0 0 16px" }}>Additional Corporation Resources</h2>
        <p style={{ textAlign: "center", fontSize: 15, color: "#555", maxWidth: 620, margin: "0 auto 48px" }}>
          Want to learn even more about forming a corporation in your state? Check out these handy resources from Incorp Bay:
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
          {resources.map((r) => (
            <div key={r.title} style={{ cursor: "pointer" }}>
              <div style={{
                width: "100%",
                height: 190,
                borderRadius: 14,
                background: r.gradient,
                marginBottom: 14,
              }} />
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 600, color: "#0d0d1a" }}>
                {r.title} <ArrowUpRight />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "0 80px 90px", maxWidth: 820, margin: "0 auto" }}>
        <h2 style={{ fontSize: 32, fontWeight: 800, margin: "0 0 30px", lineHeight: 1.2 }}>Frequently Asked Questions About LLCs</h2>
        {faqs.map((faq, i) => (
          <div key={i} style={{ borderBottom: "1px solid #e5e5e5", padding: "20px 0" }}>
            <button
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              style={{ width: "100%", background: "none", border: "none", textAlign: "left", cursor: "pointer", display: "flex", alignItems: "center", gap: 14, padding: 0, justifyContent: "space-between" }}
            >
              <span style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                <span style={{ color: "#FF4A00", fontWeight: 700, fontSize: 15 }}>{i + 1}</span>
                <span style={{ fontSize: 16, fontWeight: 700, color: "#0d0d1a" }}>{faq.q}</span>
              </span>
              <span style={{ transform: openFaq === i ? "rotate(180deg)" : "none", transition: "transform 0.2s", flexShrink: 0, color: "#888" }}>
                <ChevronDown />
              </span>
            </button>
            {openFaq === i && (
              <p style={{ fontSize: 15, color: "#555", marginTop: 14, marginLeft: 28, lineHeight: 1.7 }}>{faq.a}</p>
            )}
          </div>
        ))}
      </section>

      {/* ── FORM YOUR FREE CORPORATION CTA ── */}
      <section style={{ textAlign: "center", padding: "0 24px 100px", maxWidth: 760, margin: "0 auto" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, border: "1px solid #ddd", borderRadius: 20, padding: "6px 14px", fontSize: 13, fontWeight: 500, marginBottom: 26 }}>
          <span>Excellent <strong>4.7</strong> out of 5</span>
          <StarIcon />
          <span style={{ color: "#00B67A", fontWeight: 700 }}>Trustpilot</span>
        </div>
        <h2 style={{ fontSize: 38, fontWeight: 800, margin: "0 0 14px", lineHeight: 1.2 }}>
          Form Your<br /><span style={{ color: "#FF4A00" }}>Free Corporation Now</span>
        </h2>
        <p style={{ fontSize: 15, color: "#555", maxWidth: 560, margin: "0 auto 30px", lineHeight: 1.7 }}>
          Creating your own business from scratch is no small feat, but it's not impossible. Break down your work into bite-sized chunks with our checklist.
        </p>
        <a href="#" style={{ display: "inline-block", background: "#FF4A00", color: "#fff", padding: "16px 38px", borderRadius: 50, fontWeight: 700, fontSize: 14, textDecoration: "none", letterSpacing: 0.4 }}>
          GET STARTED NOW
        </a>
</section>


      </div>
    </NavigationWrapper>
  );
}
