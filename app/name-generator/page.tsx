"use client";

import { useState } from "react";
import NavigationWrapper from "@/components/NavigationWrapper";

const ChevronDown = ({ open }: { open: boolean }) => (
  <svg
    width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2"
    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s", flexShrink: 0 }}
  >
    <path d="M6 9l6 6 6-6"/>
  </svg>
);

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid #e5e7eb" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "20px 0", background: "white", border: "none", cursor: "pointer",
          fontSize: 17, fontWeight: 500, color: "#111827", textAlign: "left"
        }}
      >
        {q}
        <ChevronDown open={open} />
      </button>
      {open && (
        <div style={{ padding: "0 0 20px", fontSize: 14, color: "#4b5563", lineHeight: 1.7 }}>
          {a}
        </div>
      )}
    </div>
  );
};

const CheckCircle = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#06B6D4" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 12l3 3 5-6" />
  </svg>
);

const XCircle = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M9 9l6 6M15 9l-6 6" />
  </svg>
);

export default function BusinessNameGeneratorPage() {
  const [keywords, setKeywords] = useState("");
  const [generatedNames, setGeneratedNames] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

// Business name generation logic - Now uses user's keywords directly
  const generateNames = () => {
    if (!keywords.trim()) return;
    
    setIsGenerating(true);
    
    // Get user's keywords - split by comma or space and clean up
    const userKeywords = keywords.split(/[,&]+/)
      .map(k => k.trim())
      .filter(k => k.length > 0);
    
    // Common business suffixes
    const suffixes = ["LLC", "Inc", "Corp", "Co", "Solutions", "Group", "Works", "Studio", "Hub", "Lab", "ify", "ly", "flow", "tech", "wise", "spot", "nest", "forge", "base", "pulse", "verse", "ship", "zone", "gear", "wave", "spark", "bloom", "craft", "build", "start", "first", "pro", "plus", "hub", "lab"];
    
    // Prefix combinations
    const prefixes = ["Nova", "Prime", "Elite", "Apex", "Vertex", "Nexus", "Pulse", "Spark", "Flow", "Core", "Bright", "Smart", "Fast", "Pure", "Bold", "True", "First", "Best", "Top", "Pro", "Max", "Plus", "Ultra", "Mega", "Global", "United", "American", "National", "Strategic", "Dynamic", "Innovative", "Creative", "Quantum", "Summit", "Peak", "Pinnacle", "Zenith", "Horizon", "Vanguard", "Frontier", "Synergy", "Ascend", "Elevate", "Amplify", "Accelerate", "Velocity", "Momentum"];
    
    const names: string[] = [];
    
    // Capitalize first letter helper
    const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
    
    // Generate names using user's keywords directly
    for (let i = 0; i < 12; i++) {
      const keyword = userKeywords[i % userKeywords.length];
      if (!keyword) continue;
      
      const capKeyword = capitalize(keyword);
      const technique = i % 5;
      
      if (technique === 0) {
        // Keyword + Prefix
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        names.push(`${capKeyword}${prefix}`);
      } else if (technique === 1) {
        // Prefix + Keyword
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        names.push(`${prefix}${capKeyword}`);
      } else if (technique === 2) {
        // Keyword + Suffix
        const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
        names.push(`${capKeyword}${suffix}`);
      } else if (technique === 3) {
        // Keyword + "and" + another keyword
        const otherKeyword = userKeywords[(i + 1) % userKeywords.length] || userKeywords[0];
        names.push(`${capKeyword} & ${capitalize(otherKeyword)}`);
      } else {
        // Keyword with space (two words)
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        names.push(`${capKeyword} ${prefix}`);
      }
    }
    
    setTimeout(() => {
      setGeneratedNames(names);
      setIsGenerating(false);
    }, 1500);
  };

  const useTips = [
    "Simple and distinctive words",
    "Meaningful and emotional words",
    "Words that create a verbal or sound association",
    "Techniques like alliteration, assonance and rhythm",
  ];
  const avoidTips = [
    "Names that are long and cumbersome",
    "Names that are hard to pronounce or remember",
    "Any name that is already in use by another business in your state",
    "Names that are trademarked or otherwise protected",
    "A name that may be offensive in a different language",
    "Names where you can't get naming rights on various social media platforms",
    "Names where the website domain isn't available",
  ];

  const stats = [
    { stat: "72%", text: "of the best brand names are made-up words or acronyms." },
    { stat: "77%", text: "of consumers make purchase decisions based entirely on a brand name." },
    { stat: "7 SEC", text: "Your brand has 7 seconds to make a good first impression." },
    { stat: "55%", text: "of a first impression is made because of visual stimuli like a logo or brand colors." },
    { stat: "42%", text: "of people say a logo can tell them about a brand's personality." },
  ];

  const faqs = [
    {
      q: "What Is the Best Business Name Generator?",
      a: "The best business name generator is one that lets you enter keywords about your business, industry, and brand personality, then produces relevant, available options. IncorpBay's free generator does exactly that, instantly creating name ideas tailored to your input."
    },
    {
      q: "What Are the Types of Brand Names?",
      a: "Brand names typically fall into a few categories: descriptive (explains what the business does), invented or made-up words, lexical names built from real words combined in new ways, founder names, and abstract or evocative names that suggest a feeling rather than a literal meaning."
    },
    {
      q: "What Is a Business Name Example?",
      a: "A business name example could be something like 'Acme Design LLC' — a name that's short, memorable, and clearly tied to the brand. Good examples balance simplicity with distinctiveness so customers can recall and search for the business easily."
    },
    {
      q: "How Do I Register My Business Name?",
      a: "Once you've checked that your name is available, you typically register it as part of forming your LLC or corporation by filing your formation documents with the state. If you're a sole proprietor operating under a different name, you'll file a DBA (Doing Business As) statement instead."
    },
    {
      q: "Can I Change My Business Name?",
      a: "Yes, you can change your business name later, though it usually requires filing an amendment with your state, updating your EIN records with the IRS, and reissuing branding materials, contracts, and licenses. It's simpler to choose carefully the first time."
    },
];

return (
    <NavigationWrapper>
      <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">

      {/* Hero Section */}
      <section style={{
        position: "relative", overflow: "hidden", background: "#f9fafb",
        borderRadius: "0 0 32px 32px", padding: "64px 32px 56px", textAlign: "center"
      }}>
        {/* decorative diagonal lines */}
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.4 }} preserveAspectRatio="none">
          <line x1="5%" y1="0" x2="0%" y2="40%" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="12%" y1="0" x2="2%" y2="55%" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="95%" y1="20%" x2="100%" y2="60%" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="88%" y1="35%" x2="100%" y2="85%" stroke="#e5e7eb" strokeWidth="1" />
        </svg>

        <div style={{ position: "relative", maxWidth: 800, margin: "0 auto" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid #e5e7eb",
            borderRadius: 50, padding: "6px 16px", fontSize: 13, fontWeight: 500, marginBottom: 28, background: "white"
          }}>
            Excellent 4.7 out of 5 ★ Trustpilot
          </div>
          <h1 style={{ fontSize: 48, fontWeight: 800, lineHeight: 1.15, marginBottom: 36 }}>
            Picking the Perfect Business Name
          </h1>

          <div style={{
            background: "white", borderRadius: 50, border: "1px solid #e5e7eb",
            padding: 6, display: "flex", alignItems: "center", marginBottom: 12,
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
          }}>
            <input
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              placeholder="Enter keywords"
              style={{
                flex: 1, border: "none", outline: "none", padding: "12px 20px",
                fontSize: 15, background: "transparent", color: "#111827"
              }}
            />
<button 
              onClick={generateNames}
              disabled={isGenerating}
              style={{
                background: isGenerating ? "#9ca3af" : "#06B6D4", color: "white", border: "none", borderRadius: 50,
                padding: "14px 28px", fontSize: 14, fontWeight: 700, cursor: isGenerating ? "not-allowed" : "pointer", whiteSpace: "nowrap"
              }}
            >
              {isGenerating ? "Generating..." : "GENERATE NAMES"}
            </button>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, fontSize: 13, color: "#374151" }}>
            <span style={{ color: "#06B6D4" }}>↖</span>
Tell us about your business, industry, and brand personality, and we'll generate options to help find your perfect fit.
          </div>
        </div>

        {/* Generated Names Display */}
        {generatedNames.length > 0 && (
          <div style={{ 
            maxWidth: 800, 
            margin: "32px auto 0", 
            padding: "24px", 
            background: "white", 
            borderRadius: 16,
            border: "1px solid #06B6D4",
            boxShadow: "0 4px 20px rgba(6, 182, 212, 0.15)"
          }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: "#0e7490" }}>
              Suggested Business Names
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
              {generatedNames.map((name, index) => (
                <div 
                  key={index}
                  style={{
                    padding: "14px 18px",
                    background: "#f0fdfa",
                    borderRadius: 10,
                    border: "1px solid #5eead4",
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#134e4a",
                    cursor: "pointer",
                    transition: "all 0.2s"
                  }}
                  onClick={() => navigator.clipboard.writeText(name)}
                  title="Click to copy"
                >
                  {name}
                </div>
              ))}
            </div>
            <p style={{ marginTop: 16, fontSize: 12, color: "#6b7280", textAlign: "center" }}>
              Click on a name to copy it
            </p>
          </div>
        )}

        {/* Trust bar */}
        <div style={{
          position: "relative", maxWidth: 1000, margin: "48px auto 0", paddingTop: 28,
          borderTop: "1px solid #e5e7eb", fontSize: 16, color: "#374151"
        }}>
          Bootstrapped, Founder Led, Independently Owned{" "}
          <span style={{ background: "#cffafe", color: "#0e7490", borderRadius: 6, padding: "2px 10px", fontWeight: 700 }}>Since 2004</span>{" "}
          With{" "}
          <span style={{ background: "#cffafe", color: "#0e7490", borderRadius: 6, padding: "2px 10px", fontWeight: 700 }}>Over 1,000,000 Entrepreneurs</span>{" "}
          Served!
        </div>
      </section>

      {/* A Great Name For Your Business */}
      <section style={{ maxWidth: 1200, margin: "64px auto", padding: "0 32px", display: "flex", alignItems: "center", gap: 60, flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 380px" }}>
          <div style={{ color: "#06B6D4", fontWeight: 700, fontSize: 14, marginBottom: 12 }}>Your Choice Matters</div>
          <h2 style={{ fontSize: 36, fontWeight: 800, lineHeight: 1.2, marginBottom: 20 }}>
            A Great Name For Your Business Is Everything
          </h2>
          <p style={{ fontSize: 15, color: "#4b5563", lineHeight: 1.75, maxWidth: 480 }}>
            Your business name shapes how customers perceive your brand. A short, fitting, and distinctive name demonstrates confidence, defines your business, and generates buzz. It is the foundation for your entire brand.
          </p>
        </div>
        <div style={{ flex: "1 1 420px" }}>
          <div style={{
            borderRadius: 20, height: 320, background: "linear-gradient(135deg, #1f2937, #374151)",
            display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af", fontSize: 14, overflow: "hidden"
          }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 48, marginBottom: 8 }}>🧑‍💻</div>
              <div>Founder working on laptop</div>
            </div>
          </div>
        </div>
      </section>

      {/* Startup Central Banner */}
      <section style={{ maxWidth: 1200, margin: "64px auto", padding: "0 32px" }}>
        <div style={{
          border: "1px solid #e5e7eb", borderRadius: 20, padding: "40px 48px",
          display: "flex", alignItems: "center", gap: 48, flexWrap: "wrap",
          background: "linear-gradient(135deg, #fff 60%, #ecfeff 100%)"
        }}>
          <div style={{ flex: "1 1 300px" }}>
            <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 14 }}>IncorpBay's<br />Startup Central</h2>
            <p style={{ color: "#6b7280", fontSize: 15, lineHeight: 1.6, marginBottom: 24 }}>
              The media center. Guts, grit, and a game plan for launching your business.
            </p>
            <button style={{
              background: "#06B6D4", color: "white", border: "none", borderRadius: 50,
              padding: "14px 28px", fontSize: 14, fontWeight: 700, cursor: "pointer"
            }}>VISIT INCORPBAY'S STARTUP CENTRAL</button>
          </div>
          <div style={{ flex: "1 1 240px", display: "flex", justifyContent: "flex-end" }}>
            <div style={{ background: "#ecfeff", borderRadius: 16, padding: 24, maxWidth: 260 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#9ca3af", letterSpacing: 1, marginBottom: 10 }}>HOW TO</div>
              <div style={{ background: "#e5e7eb", borderRadius: 8, height: 100, marginBottom: 12 }} />
              <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>BUSINESS IDEAS</div>
              <div style={{ fontSize: 12, color: "#6b7280" }}>Understanding Data Privacy Laws and How They Impact Small Businesses</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips for choosing */}
      <section style={{ background: "#f9fafb", padding: "64px 32px", marginBottom: 64 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontSize: 38, fontWeight: 800, textAlign: "center", marginBottom: 48 }}>
            Tips For Choosing <span style={{ color: "#06B6D4" }}>A Business Name</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <div style={{ background: "white", borderRadius: 16, padding: 28, border: "1px solid #e5e7eb" }}>
              <div style={{ background: "#cffafe", borderRadius: 12, padding: "14px 0", textAlign: "center", marginBottom: 20 }}>
                <span style={{ color: "#06B6D4", fontSize: 26 }}>✓</span>
              </div>
              <h3 style={{ fontWeight: 800, fontSize: 22, marginBottom: 16 }}>Use</h3>
              {useTips.map((t) => (
                <div key={t} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 12 }}>
                  <CheckCircle />
                  <span style={{ fontSize: 14, color: "#374151", lineHeight: 1.6 }}>{t}</span>
                </div>
              ))}
            </div>
            <div style={{ background: "white", borderRadius: 16, padding: 28, border: "1px solid #e5e7eb" }}>
              <div style={{ background: "#f3f4f6", borderRadius: 12, padding: "14px 0", textAlign: "center", marginBottom: 20 }}>
                <span style={{ color: "#111827", fontSize: 26 }}>✕</span>
              </div>
              <h3 style={{ fontWeight: 800, fontSize: 22, marginBottom: 16 }}>Avoid</h3>
              {avoidTips.map((t) => (
                <div key={t} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 12 }}>
                  <XCircle />
                  <span style={{ fontSize: 14, color: "#374151", lineHeight: 1.6 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Name and Branding Stats */}
      <section style={{ maxWidth: 1200, margin: "0 auto 64px", padding: "0 32px" }}>
        <h2 style={{ fontSize: 34, fontWeight: 800, textAlign: "center", marginBottom: 16 }}>
          Business Name and Branding Stats
        </h2>
        <p style={{ textAlign: "center", color: "#6b7280", maxWidth: 700, margin: "0 auto 48px", fontSize: 15, lineHeight: 1.6 }}>
          People are bombarded with products and services all day, every day, in real life and across many devices. A good business name and brand is vital to standing out — just check out these stats!
        </p>
        <div style={{ display: "flex", gap: 40, alignItems: "stretch", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 320px" }}>
            <div style={{
              borderRadius: 20, height: "100%", minHeight: 380,
              background: "linear-gradient(135deg, #cffafe, #cffafe)",
              display: "flex", alignItems: "center", justifyContent: "center", color: "#0e7490", fontSize: 14
            }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 48, marginBottom: 8 }}>🧑‍💼</div>
                <div>Entrepreneur portrait</div>
              </div>
            </div>
          </div>
          <div style={{ flex: "1 1 420px", display: "flex", flexDirection: "column", gap: 14 }}>
            {stats.map((s) => (
              <div key={s.text} style={{
                display: "flex", alignItems: "center", gap: 18, border: "1px solid #e5e7eb",
                borderRadius: 14, padding: "16px 20px"
              }}>
                <div style={{
                  background: "#cffafe", color: "#06B6D4", borderRadius: 10, fontWeight: 800,
                  fontSize: 18, padding: "12px 16px", minWidth: 70, textAlign: "center"
                }}>{s.stat}</div>
                <div style={{ fontSize: 14, color: "#374151", lineHeight: 1.6 }}>
                  <span style={{ color: "#06B6D4", fontWeight: 700 }}>{s.stat}</span> {s.text.replace(s.stat, "")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps After Finding Your Perfect Name */}
      <section style={{ maxWidth: 1200, margin: "0 auto 64px", padding: "0 32px" }}>
        <h2 style={{ fontSize: 34, fontWeight: 800, textAlign: "center", marginBottom: 48 }}>
          Steps After Finding Your Perfect Name
        </h2>

        {/* Step 1 */}
        <div style={{
          border: "1px solid #e5e7eb", borderRadius: 18, padding: 32, marginBottom: 24,
          display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap"
        }}>
          <div style={{ flex: "1 1 320px" }}>
            <div style={{ color: "#06B6D4", fontWeight: 800, fontSize: 20, marginBottom: 10 }}>01</div>
            <h3 style={{ fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Check Name Availability</h3>
            <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, marginBottom: 20 }}>
              To be legally available, a name must not be in use or trademarked. Use IncorpBay's free Business Name Search Tool to check your state's business registry.
            </p>
            <a style={{ color: "#06B6D4", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Learn More ›</a>
          </div>
          <div style={{ flex: "1 1 360px" }}>
            <div style={{
              background: "#f9fafb", borderRadius: 16, padding: 20, position: "relative",
              minHeight: 200, display: "flex", flexWrap: "wrap", gap: 10, alignContent: "flex-start", opacity: 0.5
            }}>
              {["Joy Works", "Paintworks", "Peak Design", "Design Craft", "John Studio", "Muse Studio", "Dream Name", "Logic Touch", "Calm Space", "Artful Space", "Design Wave", "Vision Works", "Blend Studio", "Bright Ideas"].map((n) => (
                <span key={n} style={{
                  background: "white", borderRadius: 8, padding: "8px 12px", fontSize: 12, color: "#6b7280"
                }}>{n}</span>
              ))}
            </div>
            <div style={{
              position: "relative", marginTop: -90, marginLeft: 60, background: "#111827", color: "white",
              borderRadius: 10, padding: "12px 18px", display: "inline-flex", alignItems: "center", gap: 10,
              fontWeight: 700, fontSize: 15, boxShadow: "0 8px 24px rgba(0,0,0,0.2)"
            }}>
              <span style={{ background: "#06B6D4", borderRadius: 6, width: 26, height: 26, display: "flex", alignItems: "center", justifyContent: "center" }}>⚡</span>
              Acme LLC
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div style={{
          border: "1px solid #e5e7eb", borderRadius: 18, padding: 32, marginBottom: 24,
          display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap"
        }}>
          <div style={{ flex: "1 1 320px" }}>
            <div style={{
              background: "white", borderRadius: 20, boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
              padding: 16, width: 240, fontSize: 12
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#e5e7eb" }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 12 }}>Jonathan Davis</div>
                  <div style={{ color: "#9ca3af", fontSize: 10 }}>ACME Design LLC</div>
                </div>
              </div>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 12 }}>Get a Domain Name</div>
              <div style={{ background: "#06B6D4", borderRadius: 10, padding: "10px 14px", color: "white" }}>
                <div style={{ fontSize: 10, opacity: 0.85 }}>Your Name is Available ✓</div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>Acme Design INC</div>
                <div style={{ fontSize: 10, opacity: 0.85, marginTop: 2 }}>Enhance your online presence</div>
              </div>
              <div style={{ fontSize: 10, color: "#9ca3af", marginTop: 10 }}>Exclusive Benefits</div>
            </div>
          </div>
          <div style={{ flex: "1 1 320px" }}>
            <div style={{ color: "#06B6D4", fontWeight: 800, fontSize: 20, marginBottom: 10 }}>02</div>
            <h3 style={{ fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Choose Your Entity</h3>
            <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, marginBottom: 20 }}>
              Explore how liability, taxes, management, and growth potential impact your choice of business entity.
            </p>
            <a style={{ color: "#06B6D4", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Learn More ›</a>
          </div>
        </div>

        {/* Step 3 */}
        <div style={{
          border: "1px solid #e5e7eb", borderRadius: 18, padding: 32,
          display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap"
        }}>
          <div style={{ flex: "1 1 320px" }}>
            <div style={{ color: "#06B6D4", fontWeight: 800, fontSize: 20, marginBottom: 10 }}>03</div>
            <h3 style={{ fontWeight: 800, fontSize: 22, marginBottom: 12 }}>Form Your LLC</h3>
            <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, marginBottom: 20 }}>
              Make your business official by starting your LLC with IncorpBay. Filing your paperwork will reserve and protect your business name in your state.
            </p>
            <a style={{ color: "#06B6D4", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>Learn More ›</a>
          </div>
          <div style={{ flex: "1 1 320px" }}>
            <div style={{ background: "#f9fafb", borderRadius: 16, padding: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                <span style={{ fontWeight: 700, fontSize: 15 }}>Form Your LLC</span>
                <span>→</span>
              </div>
              <div style={{ fontSize: 11, color: "#6b7280", marginBottom: 4 }}>Business Setup Process ●</div>
              <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 12 }}>Streamlined and Secure</div>
              <div style={{ background: "#e5e7eb", height: 6, borderRadius: 3, marginBottom: 8 }}>
                <div style={{ background: "#06B6D4", height: 6, borderRadius: 3, width: "75%" }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#6b7280" }}>
                <span>Your progress</span><span>75%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* FAQ */}
      <section style={{ maxWidth: 900, margin: "0 auto 80px", padding: "0 32px" }}>
        <h2 style={{ fontSize: 38, fontWeight: 800, marginBottom: 24 }}>FAQ</h2>
        {faqs.map((f) => (
          <FAQItem key={f.q} q={f.q} a={f.a} />
        ))}
      </section>


      {/* Family CTA */}
      <section style={{ maxWidth: 1140, margin: "0 auto 80px", padding: "0 32px" }}>
        <div style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 36,
          padding: "72px 32px",
          textAlign: "center",
          color: "white",
          background: "linear-gradient(135deg, #083344 0%, #0e7490 45%, #06B6D4 100%)",
          boxShadow: "0 24px 70px rgba(6, 182, 212, 0.25)"
        }}>
          <div style={{
            position: "absolute",
            inset: 0,
            opacity: 0.18,
            background:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 28%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.28), transparent 30%)"
          }} />
          <svg
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.18 }}
            preserveAspectRatio="none"
          >
            <path d="M0 520 C220 330 420 520 640 300 C820 120 980 220 1200 60" fill="none" stroke="white" strokeWidth="2" />
            <path d="M0 420 C260 260 420 430 700 180 C900 20 1020 150 1200 0" fill="none" stroke="white" strokeWidth="1.5" />
          </svg>

          <div style={{ position: "relative", zIndex: 1, maxWidth: 920, margin: "0 auto" }}>
            <div style={{
              color: "#a5f3fc",
              fontSize: 22,
              fontWeight: 800,
              marginBottom: 26
            }}>
              Join The Family
            </div>

            <h2 style={{
              fontSize: 46,
              lineHeight: 1.18,
              fontWeight: 900,
              margin: "0 auto 28px",
              letterSpacing: "-0.03em"
            }}>
              More Than <span style={{ color: "#67e8f9" }}>1,000,000</span>
              <br />
              Businesses Have Chosen IncorpBay
            </h2>

            <p style={{
              maxWidth: 900,
              margin: "0 auto 34px",
              fontSize: 20,
              lineHeight: 1.55,
              fontWeight: 500,
              color: "#ecfeff"
            }}>
              With IncorpBay, you are not just picking a name; you are laying the foundation for your brand's future success.
              Start your journey today and take the first step toward building a thriving business.
            </p>

            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              flexWrap: "wrap",
              marginBottom: 50
            }}>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                borderRadius: 10,
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.16)",
                padding: "14px 16px",
                fontSize: 14,
                fontWeight: 800,
                backdropFilter: "blur(10px)"
              }}>
                <span>148,137 ratings</span>
                <span style={{ color: "#67e8f9", letterSpacing: 1 }}>★★★★★</span>
                <span style={{ color: "#ecfeff" }}>ShopperApproved</span>
              </div>

              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                borderRadius: 10,
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.16)",
                padding: "14px 16px",
                fontSize: 14,
                fontWeight: 800,
                backdropFilter: "blur(10px)"
              }}>
                <span>25,615 reviews</span>
                <span style={{ color: "#67e8f9", letterSpacing: 1 }}>★★★★★</span>
                <span style={{ color: "#ecfeff" }}>★ Trustpilot</span>
              </div>
            </div>

            <button style={{
              background: "#06B6D4",
              color: "white",
              border: "none",
              borderRadius: 50,
              padding: "18px 34px",
              fontSize: 16,
              fontWeight: 900,
              cursor: "pointer",
              boxShadow: "0 14px 30px rgba(6,182,212,0.35)",
              transition: "all 0.3s ease"
            }}>
              START NOW
            </button>
          </div>
        </div>
      </section>

    </div>
    </NavigationWrapper>
  );
}
