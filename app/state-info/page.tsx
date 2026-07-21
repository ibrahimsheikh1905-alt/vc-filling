"use client";

import React, { useMemo, useState } from "react";
import NavigationWrapper from "@/components/NavigationWrapper";
import { useRouter } from "next/navigation";
// @ts-ignore - no first-party types; @types/svg-maps__usa can be added separately if desired
import usaMap from "@svg-maps/usa";


// ── Icons ───────────────────────────────────────────────────────────────────────
const ChevronDown = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className="h-[18px] w-[18px]"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const ArrowRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className="h-4 w-4"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const ArrowUpRight = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className="h-4 w-4"
  >
    <path d="M7 17l10-10M7 7h10v10" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[15px] w-[15px] fill-amber-400">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);


const BRAND_GRADIENT =
  "linear-gradient(90deg,#244EB6 0%,#2B93C9 50%,#33D1CC 100%)";

const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";

const gradientTextStyle: React.CSSProperties = {
  background: BRAND_GRADIENT,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  color: "transparent",
};

const gradientButtonStyle: React.CSSProperties = {
  background: BRAND_GRADIENT,
  color: "#fff",
  border: "none",
  boxShadow: "0 10px 28px rgba(43,147,201,.25)",
};

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

// Maps full state name -> USPS abbreviation used by react-usa-map's data-name attr
const ABBR_BY_NAME: Record<string, string> = {
  Alabama: "AL", Alaska: "AK", Arizona: "AZ", Arkansas: "AR",
  California: "CA", Colorado: "CO", Connecticut: "CT", Delaware: "DE",
  Florida: "FL", Georgia: "GA", Hawaii: "HI", Idaho: "ID",
  Illinois: "IL", Indiana: "IN", Iowa: "IA", Kansas: "KS",
  Kentucky: "KY", Louisiana: "LA", Maine: "ME", Maryland: "MD",
  Massachusetts: "MA", Michigan: "MI", Minnesota: "MN", Mississippi: "MS",
  Missouri: "MO", Montana: "MT", Nebraska: "NE", Nevada: "NV",
  "New Hampshire": "NH", "New Jersey": "NJ", "New Mexico": "NM", "New York": "NY",
  "North Carolina": "NC", "North Dakota": "ND", Ohio: "OH", Oklahoma: "OK",
  Oregon: "OR", Pennsylvania: "PA", "Rhode Island": "RI", "South Carolina": "SC",
  "South Dakota": "SD", Tennessee: "TN", Texas: "TX", Utah: "UT",
  Vermont: "VT", Virginia: "VA", Washington: "WA", "Washington DC": "DC",
  "West Virginia": "WV", Wisconsin: "WI", Wyoming: "WY",
};

// Reverse lookup: abbreviation -> full state name (used when hovering the map itself)
const NAME_BY_ABBR: Record<string, string> = Object.fromEntries(
  Object.entries(ABBR_BY_NAME).map(([name, abbr]) => [abbr, name])
);

const resources = [
  { title: "Understanding Filing Fees", gradient: "from-cyan-200 to-cyan-700" },
  { title: "Navigating Filing Times", gradient: "from-slate-300 to-cyan-900" },
  { title: "Business Name Search", gradient: "from-cyan-100 to-cyan-600" },
  { title: "Filing Annual Reports", gradient: "from-cyan-300 to-slate-900" },
  { title: "State LLC Filing Tips", gradient: "from-cyan-200 to-cyan-800" },
  { title: "File in Another Country", gradient: "from-sky-300 to-cyan-900" },
];

const faqs = [
  {
    q: "Which State Has the Most LLC-Friendly Requirements?",
    a: "States like Delaware, Nevada, and Wyoming are well known for having business-friendly rules, low filing fees, and strong legal protections, which is why many out-of-state entrepreneurs choose to form their LLC there.",
  },
  {
    q: "Which State is Best for Forming an LLC?",
    a: "The best state depends on your business goals. Many businesses choose their home state for simplicity, while others choose Delaware for its established business law, Nevada for tax advantages, or Wyoming for low fees and privacy.",
  },
  {
    q: "Does Every State Recognize LLCs?",
    a: "Yes, every U.S. state recognizes the LLC as a legal business structure. However, if you operate in a state other than where you formed your LLC, you'll typically need to register there as a foreign LLC.",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function LlcFormationByStatePage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/llc");
  };
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toStateSlug = (stateName: string) => {
    // Normalize spaces and punctuation; route examples: Alabama -> alabama, Washington DC -> washington-dc
    return stateName.toLowerCase().trim().replace(/\s+/g, "-").replace(/\./g, "");
  };

  const goToState = (stateName: string) => {
    router.push(`/state-info/${toStateSlug(stateName)}`);
  };


  // Resolve a full state name from whatever id/name format the map data uses
  // (svg-maps packages vary between "AL", "al", "us-al", "alabama", etc.)
  const resolveStateName = (rawId?: string, rawName?: string): string | null => {
    if (rawName) {
      const exact = states.find((s) => s.toLowerCase() === rawName.toLowerCase());
      if (exact) return exact;
    }
    if (rawId) {
      const cleaned = rawId.replace(/^us[-_]?/i, "").toUpperCase();
      if (NAME_BY_ABBR[cleaned]) return NAME_BY_ABBR[cleaned];
      const bySlug = states.find(
        (s) => s.toLowerCase().replace(/\s+/g, "-") === rawId.toLowerCase()
      );
      if (bySlug) return bySlug;
    }
    return null;
  };

  // Precompute each map location alongside its resolved full state name
  const mapLocations = useMemo(() => {
    return (usaMap?.locations || []).map((loc: any) => ({
      ...loc,
      stateName: resolveStateName(loc.id, loc.name),
    }));
  }, []);

  const handleLocationMouseOver = (stateName: string | null) => {
    if (stateName) setHoveredState(stateName);
  };

  const handleLocationMouseOut = () => setHoveredState(null);

  return (
    <NavigationWrapper>
      <div className="m-0 min-h-screen bg-white p-0 font-sans text-[#1a1a2e]">
        {/* ── BREADCRUMB ── */}
        <div className="mx-auto max-w-[1200px] px-6 pt-3.5 text-[13px] text-slate-400 md:px-20">
          <span style={gradientTextStyle}>Incorp Bay</span>
          <span className="mx-1.5">›</span>
          <span style={gradientTextStyle}>LLC Formation By State</span>
        </div>

        {/* ── HERO + MAP ── */}
        <section className="mx-auto max-w-[900px] px-6 pb-[70px] pt-[30px] text-center">
          <h1 className="m-0 mb-[22px] text-[40px] font-extrabold leading-[1.18] text-[#0d0d1a]">
            Want To Learn More <span style={gradientTextStyle}>About LLCs In Your State?</span>
          </h1>
          <p className="mx-auto mb-[50px] max-w-[700px] text-base leading-[1.7] text-[#555]">
            With different rules and regulations for LLC formation in every state, starting a business can be a pretty confusing process. That's why we've organized all LLC requirements by state in one handy place — right here!
          </p>

          {/* Real US states map (@svg-maps/usa), hover + click enabled */}
          <div className="relative mt-2.5 flex justify-center">
            <div
              className="pointer-events-none absolute left-1/2 top-0 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2 text-[13px] font-bold text-white shadow-[0_10px_30px_rgba(43,147,201,0.28)]"
              style={{ background: BRAND_GRADIENT }}
            >
              {hoveredState || "Hover a state"} <ArrowRight />
            </div>

            <div className="mt-[22px] w-full max-w-[780px]">
              <svg
                viewBox={usaMap?.viewBox || "0 0 959 593"}
                className="h-[420px] w-full"
                role="img"
                aria-label="United States map"
              >
                {mapLocations.map((loc: any) => {
                  const isHovered = loc.stateName === hoveredState;
                  return (
                    <path
                      key={loc.id}
                      d={loc.path}
                      onMouseEnter={() => handleLocationMouseOver(loc.stateName)}
                      onMouseLeave={handleLocationMouseOut}
                      onClick={() => {
                        if (!loc.stateName) return;
                        goToState(loc.stateName);
                      }}
                      className="cursor-pointer transition-all duration-300 ease-out"
                      style={{
                        fill: isHovered ? "#2B93C9" : "#F8FAFC",
                        stroke: isHovered ? "#244EB6" : "#CBD5E1",
                        strokeWidth: isHovered ? 2.6 : 1.4,
                        filter: isHovered
                          ? "drop-shadow(0 0 12px rgba(43,147,201,.55))"
                          : "none",
                      }}
                    >
                      <title>{loc.stateName || loc.name}</title>
                    </path>
                  );
                })}
              </svg>
            </div>
          </div>
        </section>

        {/* ── PICK A STATE GRID ── */}
        <section className="mx-auto max-w-[1100px] px-6 pb-20 md:px-20">
          <h2 className="mb-9 text-center text-[32px] font-extrabold">Pick a state, any state!</h2>
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {states.map((s) => {
              const isHovered = s === hoveredState;
              return (
                <button
                  key={s}
                  onMouseEnter={() => setHoveredState(s)}
                  onMouseLeave={() => setHoveredState(null)}
                  onClick={() => goToState(s)}
                  className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white px-5 py-4 text-left text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                  type="button"
                >
                  <span
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(90deg,rgba(36,78,182,.10),rgba(43,147,201,.10),rgba(51,209,204,.10))",
                    }}
                  />

                  <span className="absolute -left-16 top-0 h-full w-10 -skew-x-12 bg-white/50 blur-sm transition-all duration-700 group-hover:left-[120%]" />

                  <span className="relative z-10 flex items-center justify-between gap-3">
                    <span className="transition-colors duration-300 group-hover:text-[#2B93C9]">
                      {s}
                    </span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRight />
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* ── WHICH STATE SHOULD YOU CHOOSE ── */}
        <section className="mx-auto max-w-[1000px] px-6 pb-[60px] text-center md:px-20">
          <h2 className="m-0 mb-[18px] text-[32px] font-extrabold leading-[1.2]">Which State Should You Choose?</h2>
          <p className="mx-auto mb-[18px] max-w-[760px] text-[15px] leading-[1.75] text-[#444]">
            Remember, you don't necessarily need to form your LLC in the state where you live. Some states, such as Wyoming, Nevada and Delaware, have business-friendly rules and cheap filing fees that inspire out-of-state entrepreneurs to choose to file their LLCs there.
          </p>
          <p className="mx-auto max-w-[760px] text-[15px] leading-[1.75] text-[#444]">
            Explore the resources below to learn more about the state-by-state specifics of forming an LLC.
          </p>
        </section>

        {/* ── ADDITIONAL LLC RESOURCES ── */}
        <section className="mx-auto max-w-[1200px] px-6 pb-[90px] pt-[30px] md:px-20">
          <h2 className="m-0 mb-4 text-center text-[32px] font-extrabold">Additional LLC Resources</h2>
          <p className="mx-auto mb-12 max-w-[620px] text-center text-[15px] text-[#555]">
            Want to learn even more about forming an LLC in your state? Check out these handy resources from Incorp Bay:
          </p>
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((r) => (
              <div key={r.title} className="cursor-pointer">
                <div className={`mb-3.5 h-[190px] w-full rounded-[14px] bg-gradient-to-br ${r.gradient}`} />
                <div className="flex items-center gap-2 text-[15px] font-semibold text-[#0d0d1a]">
                  {r.title} <ArrowUpRight />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="mx-auto max-w-[820px] px-6 pb-[90px] md:px-20">
          <h2 className="m-0 mb-[30px] text-[32px] font-extrabold leading-[1.2]">Frequently Asked Questions About LLCs</h2>
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#e5e5e5] py-5">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-3.5 bg-transparent p-0 text-left"
                type="button"
              >
                <span className="flex items-baseline gap-3">
                  <span className="text-[15px] font-bold" style={gradientTextStyle}>{i + 1}</span>
                  <span className="text-base font-bold text-[#0d0d1a]">{faq.q}</span>
                </span>
                <span className={`shrink-0 text-slate-500 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}>
                  <ChevronDown />
                </span>
              </button>
              {openFaq === i && (
                <p className="ml-7 mt-3.5 text-[15px] leading-[1.7] text-[#555]">{faq.a}</p>
              )}
            </div>
          ))}
        </section>

        {/* ── FORM YOUR FREE LLC CTA ── */}
        <section className="mx-auto max-w-[760px] px-6 pb-[100px] text-center">
          <div className="mb-[26px] inline-flex items-center gap-1.5 rounded-[20px] border border-[#ddd] px-3.5 py-1.5 text-[13px] font-medium">
            <span>Excellent <strong>4.7</strong> out of 5</span>
            <StarIcon />
            <span className="font-bold text-[#00B67A]">Trustpilot</span>
          </div>
          <h2 className="m-0 mb-3.5 text-[38px] font-extrabold leading-[1.2]">
            Form Your<br /><span style={gradientTextStyle}>Free LLC Now</span>
          </h2>
          <p className="mx-auto mb-[30px] max-w-[560px] text-[15px] leading-[1.7] text-[#555]">
            Creating your own business from scratch is no small feat, but it's not impossible. Break down your work into bite-sized chunks with our checklist.
          </p>
          <button
  type="button"
  onClick={handleGetStarted}
  className={`${LOGO_GRADIENT} group relative overflow-hidden rounded-full px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_35px_rgba(43,147,201,0.45)]`}
>
  {/* Top Gloss */}
  <span className="absolute inset-x-0 top-0 h-1/2 rounded-full bg-gradient-to-b from-white/20 to-transparent" />

  {/* Shine Animation */}
  <span className="absolute -left-20 top-0 h-full w-12 -skew-x-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />

  <span className="relative z-10 flex items-center gap-2">
    GET STARTED
    <svg
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14M13 5l7 7-7 7"
      />
    </svg>
  </span>
</button>
        </section>
      </div>
    </NavigationWrapper>
  );
}