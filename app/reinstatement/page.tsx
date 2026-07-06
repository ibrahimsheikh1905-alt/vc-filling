"use client";

import { useEffect, useRef, useState } from "react";
import NavigationWrapper from "@/components/NavigationWrapper";

const CYAN = "#06B6D4";

const TOC_SECTIONS = [
  { id: "dissolved", label: "Why Was My Business Dissolved?" },
  {
    id: "reinstate-or-new",
    label: "Should I Reinstate My LLC or Start a New One?",
  },
  { id: "new-llc", label: "Starting a New LLC" },
  { id: "how-to", label: "How to Reinstate a Dissolved LLC" },
  { id: "with-incorp-bay", label: "Reinstate Your LLC with Incorp Bay" },
];

const WHY_ITEMS = [
  {
    icon: "⚡",
    title: "Get back in business faster",
    body: "In many states, reinstatement procedures can be completed in less time than forming a new company, meaning you can restart operations sooner.",
  },
  {
    icon: "🛡️",
    title: "Keep your company name",
    body: "You put a lot of effort into choosing the perfect business name — don't throw it away! Reinstatement allows you to continue to use your original brand.",
  },
  {
    icon: "📋",
    title: "Recover historical company information",
    body: "With reinstatement, you can keep your original records and maintain your historical background. No starting from scratch!",
  },
];

const FILING_STEPS = [
  {
    n: "1",
    title: "File Required Reinstatement Forms",
    body: "File reinstatement forms with the proper state offices like the Secretary of State or the Department of Revenue or Taxation.",
  },
  { n: "2", title: "Pay State Fees", body: "Pay any required state fees." },
  {
    n: "3",
    title: "Check Status",
    body: "Wait to hear back from your state about your reinstatement status.",
  },
];

const BENEFITS = [
  { label: "Saves time", rest: " versus starting a new LLC" },
  { label: "You can hold on to", rest: " the company name" },
  { label: "Keep your original", rest: " historical records and paperwork" },
  {
    label: "Lets you capitalize on existing customers",
    rest: " and brand recognition",
  },
  {
    label: "Regain limited liability protection",
    rest: " from the date of dissolution",
  },
];

const LOSE_ITEMS = [
  { bold: "Established", rest: " customer base" },
  { bold: "Liability protection", rest: "" },
  { bold: "Rights", rest: " to your business name" },
  { bold: "Brand credibility,", rest: " recognition and value" },
  {
    bold: "Historical data",
    rest: " (bank and business history, credit ratings, funding)",
  },
];

const NEW_LLC_CONS = [
  "You lose out on all historical data related to your previous LLC. This data could be credit scores, bank statements, licenses and business financials. You have to start from scratch to build credibility, trust and business history.",
  "Incorporating a new LLC will take anywhere between a few days to weeks, depending on state requirements. It also requires you to gather and re-file all of the incorporation paperwork.",
  "The cost of incorporation can be steep. In states like Alaska, Alabama, New York and Texas, just the filing fees are upwards of $200! Remember, you'll require fresh business permits and licenses too, which will add costs and time to starting a business.",
  "If a new entity has taken over the original name of your LLC, you'll lose out on all brand recognition you built. You'll also have to restart the process of naming your LLC and then update your website, logo, tagline and any pertinent business information across all marketing channels.",
  "In starting a new LLC, you'll need to acquire a new EIN (Employer Identification Number) from the IRS. Remember, it will also take time to rebuild any credit history under this new EIN number. This could impact your funding needs.",
  "All existing paperwork, including contracts with vendors, banks or customers, will have to be drafted and signed again with the new name.",
  "You will miss out on the limited liability protection for the period of time from the dissolution to when you initiate the new LLC. With the restatement, the limited liability dates back to the point of dissolution.",
];

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="#00B67A" width={15} height={15}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const ChevronRight = ({ active }: { active?: boolean }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke={active ? CYAN : "#CBD5E1"}
    strokeWidth={2.5}
    width={16}
    height={16}
    className="mt-0.5 shrink-0"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const CheckSmall = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#fff"
    strokeWidth={3}
    width={12}
    height={12}
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const XCircle = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#94A3B8"
    strokeWidth={2}
    width={22}
    height={22}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M15 9l-6 6M9 9l6 6" />
  </svg>
);

export default function ReinstatementPage() {
  const [activeSection, setActiveSection] = useState("dissolved");
  const [progress, setProgress] = useState(0);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const onScroll = () => {
      for (const { id } of [...TOC_SECTIONS].reverse()) {
        const el = sectionRefs.current[id];
        if (el && el.getBoundingClientRect().top <= 160) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let animationFrameId: number | null = null;
    let startTime: number | null = null;
    const duration = 9000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      setProgress((elapsed % duration) / duration);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const setRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  const scrollTo = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const activeWhyStep = Math.min(
    Math.floor(progress * WHY_ITEMS.length) + 1,
    WHY_ITEMS.length,
  );

  return (
    <NavigationWrapper>
      <div className="min-h-screen bg-white text-[#1a1a1a]">
      {/* HERO */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-16 md:py-20">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
            <span>
              Excellent <strong>4.7</strong> out of 5
            </span>
            <StarIcon />
            <span className="font-bold text-[#00B67A]">Trustpilot</span>
          </div>

          <h1 className="mt-6 max-w-xl text-5xl font-black leading-[1.08] tracking-tight text-[#0f0f1a] md:text-6xl">
            File an Order of Reinstatement Quickly and Easily
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-500 md:text-lg">
            Incorp Bay can help you restore your Good Standing status with your
            state and restart operations in a fraction of the time and money it
            takes to start a new company.
          </p>

          <a
            href="/reinstatement/step-1"
            className="mt-8 inline-flex rounded-full bg-[#06B6D4] px-10 py-4 text-sm font-black uppercase tracking-wider text-white shadow-lg shadow-[#06B6D4]/30 transition hover:bg-[#0891b2]"
          >
            File Your Reinstatement
          </a>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-[340px] rounded-lg border-8 border-[#1E293B] bg-white px-8 py-9 shadow-[10px_14px_0_#1E293B]">
            <div className="absolute left-0 top-8 h-20 w-1.5 rounded-r bg-[#06B6D4]" />
            <h2 className="text-3xl font-black leading-none text-[#06B6D4]">
              REINSTATE
            </h2>
            <h2 className="mt-1 text-3xl font-black leading-none text-[#1a1a1a]">
              COMPANY
            </h2>
            <p className="mt-5 text-[10px] font-bold uppercase leading-relaxed tracking-wide text-slate-800">
              Reinstatement restores a dissolved business&apos;s legal status.
              Without it, owners lose legal protection, cannot operate, and risk
              personal liability.
            </p>
            <div className="mt-6 flex items-center gap-4 border-t border-slate-200 pt-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-300 text-[9px] text-slate-400">
                SEAL
              </div>
              <div>
                <p className="font-serif text-lg italic leading-none text-slate-700">
                  Jo Allen
                </p>
                <p className="mt-1 text-[10px] text-slate-400">
                  John Smith
                  <br />
                  Secretary of State
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="border-y border-slate-100 bg-[#F8FAFC] px-6 py-5 text-center text-sm font-semibold text-slate-600 md:text-base">
        Bootstrapped, Founder Led, Independently Owned{" "}
        <span className="font-extrabold text-[#06B6D4]">Since 2004</span> with{" "}
        <span className="font-extrabold text-[#06B6D4]">
          Over 1,000,000 Entrepreneurs
        </span>{" "}
        Served!
      </div>

      {/* WHY CHOOSE REINSTATEMENT */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-16">
        <h2 className="text-center text-4xl font-black leading-tight tracking-tight text-[#0f0f1a] md:text-5xl">
          Why Choose Reinstatement?
        </h2>

        <div className="mt-14 grid grid-cols-1 items-center gap-14 md:grid-cols-2">
          <div className="relative py-6">
            {/* FIXED: line starts at first icon center and ends at last icon center */}
            <div className="absolute left-6 top-12 bottom-[84px] z-0 w-1 -translate-x-1/2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="w-full rounded-full bg-[#06B6D4] transition-[height] duration-100 ease-linear"
                style={{ height: `${progress * 100}%` }}
              />
            </div>

            {WHY_ITEMS.map((item, index) => {
              const stepSize = 1 / WHY_ITEMS.length;
              const isPassed = progress >= index * stepSize;
              const isCurrent = activeWhyStep === index + 1;

              return (
                <div
                  key={item.title}
                  className={`relative z-10 flex min-h-[120px] w-full select-none flex-row items-start ${index === WHY_ITEMS.length - 1 ? "mb-0" : "mb-12"}`}
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 text-xl transition-all duration-300 ${
                      isPassed
                        ? "scale-105 border-[#06B6D4] bg-cyan-50 text-[#06B6D4] shadow-md"
                        : "border-slate-300 bg-white text-slate-400"
                    } ${isCurrent ? "ring-4 ring-cyan-100/70" : ""}`}
                  >
                    {item.icon}
                  </div>

                  <div className="w-full pl-4 text-left">
                    <p
                      className={`text-xs font-black uppercase tracking-wider transition-colors duration-300 ${
                        isCurrent
                          ? "text-[#06B6D4]"
                          : isPassed
                            ? "text-[#06B6D4]/70"
                            : "text-slate-400"
                      }`}
                    >
                      Benefit {index + 1}
                    </p>

                    <h3
                      className={`mt-1 text-lg font-black transition-colors duration-300 md:text-xl ${
                        isPassed ? "text-[#0f0f1a]" : "text-slate-400"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`mt-2 text-sm leading-relaxed transition-all duration-300 md:text-base ${
                        isPassed
                          ? "text-slate-600 opacity-100"
                          : "text-slate-400/70 opacity-60"
                      }`}
                    >
                      {item.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-[248px] rounded-[36px] border-8 border-[#1E293B] bg-white p-4 pb-5 shadow-2xl">
              <div className="mx-auto mb-5 h-5 w-20 rounded-full bg-[#1E293B]" />
              <div className="mb-4 text-center">
                <p className="text-[11px] text-slate-500">LLC Reinstatement</p>
                <p className="text-[10px] text-slate-400">Final Confirmation</p>
              </div>

              {[
                "Application Submitted",
                "Application Reviewed",
                "Reinstatement Approved",
                "Reinstatement Complete",
              ].map((status, idx) => {
                const statusProgress = idx / 4;
                const isActive = progress >= statusProgress;

                return (
                  <div key={status} className="mb-3 flex items-center gap-3">
                    <span
                      className={`h-3 w-3 rounded-full border-2 transition-all duration-300 ${
                        isActive
                          ? "border-[#06B6D4] bg-[#06B6D4]"
                          : "border-slate-200 bg-white"
                      }`}
                    />
                    <p
                      className={`text-[10px] transition-colors ${isActive ? "font-semibold text-slate-800" : "text-slate-400"}`}
                    >
                      {status}
                    </p>
                  </div>
                );
              })}

              <div className="my-4 h-1 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-[#06B6D4] transition-[width] duration-100 ease-linear"
                  style={{ width: `${progress * 100}%` }}
                />
              </div>

              <div className="flex justify-between py-1 text-[10px]">
                <span className="text-slate-400">Progress</span>
                <span className="font-bold text-[#06B6D4]">
                  {Math.round(progress * 100)}%
                </span>
              </div>

              <div className="mt-3 rounded-lg bg-[#06B6D4] py-2.5 text-center text-[11px] font-bold text-white">
                {progress < 0.5
                  ? "Processing..."
                  : progress < 0.75
                    ? "Almost Done!"
                    : "Complete!"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILING REINSTATEMENT */}
      <section className="bg-[#F8FAFC] px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-black leading-tight tracking-tight text-[#0f0f1a] md:text-5xl">
            Filing Reinstatement
          </h2>

          <div className="mt-14 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="mx-auto w-full max-w-sm rounded-3xl bg-[#1E293B] p-7 shadow-2xl">
              <div className="rounded-2xl bg-white p-5">
                <p className="text-xs text-slate-400">Reinstate Your Company</p>
                <p className="mt-1 text-lg font-black text-[#0f0f1a]">
                  Acme Design LLC
                </p>
                <div className="mt-5 flex h-14 items-center justify-center rounded-xl bg-slate-100 text-xs font-black text-slate-400">
                  REINSTATE COMPANY
                </div>
                <div className="mt-3 h-8 rounded-xl bg-slate-100" />
              </div>
              <div className="mt-4 rounded-2xl bg-white p-5 text-center shadow-xl">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#06B6D4] text-white">
                  ✓
                </div>
                <p className="mt-3 text-sm font-black text-[#0f0f1a]">
                  Reinstatement Service
                </p>
                <p className="mt-1 text-xs text-slate-400">Order Completed</p>
                <button className="mx-auto mt-4 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-2 text-xs font-bold text-slate-600">
                  Check More Details <span className="text-[#06B6D4]">→</span>
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {FILING_STEPS.map((step) => (
                <div
                  key={step.n}
                  className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#06B6D4] text-base font-black text-white shadow shadow-[#06B6D4]/30">
                    {step.n}
                  </div>
                  <div>
                    <h3 className="text-base font-black text-[#0f0f1a]">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[280px_1fr] md:items-start">
          <aside className="md:sticky md:top-24">
            <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
              <p className="mb-4 text-base font-black text-[#1a1a1a]">
                Table of Contents
              </p>
              <ul className="space-y-1">
                {TOC_SECTIONS.map((item) => {
                  const active = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => scrollTo(item.id)}
                        className={`flex w-full items-start gap-2 rounded-xl px-3 py-3 text-left text-sm transition-all duration-150 ${
                          active
                            ? "border border-slate-200 bg-white font-bold text-[#06B6D4] shadow-sm"
                            : "text-slate-400 hover:text-slate-600"
                        }`}
                      >
                        <ChevronRight active={active} />
                        <span className="leading-snug">{item.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

          <main className="min-w-0 space-y-16">
            <ArticleBlock
              id="dissolved"
              setRef={setRef}
              title="Why Was My Business Dissolved?"
            >
              <p>
                Before we jump into reinstating your venture, let&apos;s
                understand the why behind it.
              </p>
              <p>
                When you choose to form an LLC or other legal entity in a state,
                you are subject to a host of state laws and requirements. The
                laws give you permission to operate as a legal entity and these
                compliances have to be maintained.
              </p>
              <p>
                Some of the most common reasons behind{" "}
                <a href="#" className="font-semibold text-[#06B6D4]">
                  losing your Certificate of Good Standing
                </a>{" "}
                or dissolution of your LLC are:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  Failure to file the required annual reports and pay fees
                </li>
                <li>Underpayment of taxes or missed taxes</li>
                <li>
                  Not appointing a Registered Agent or forgetting to update
                  Registered Agent information
                </li>
                <li>Operating without necessary state licenses</li>
              </ul>
              <p>
                If you aren&apos;t sure why your company was put under dissolved
                or suspended status, check with your Secretary of State.
              </p>
            </ArticleBlock>

            <ArticleBlock
              id="reinstate-or-new"
              setRef={setRef}
              title="Should I Reinstate My LLC or Start a New One?"
            >
              <p>
                You might find yourself at a crossroads, wondering whether you
                should reinstate your LLC or start a new one. Let&apos;s compare
                the two scenarios.
              </p>
              <h3>Why Say Yes to Reinstatement</h3>
              <p>
                By reinstating your LLC, you are gaining back the benefits and
                protection a legal entity status offers. It also allows you to
                quickly resume interactions with your established customer pool
                and capitalize on your brand name and loyalty.
              </p>
              <BenefitsCard />
              <p>
                Along with these benefits, using Incorp Bay&apos;s{" "}
                <a href="#" className="font-semibold text-[#06B6D4]">
                  Reinstatement service
                </a>{" "}
                means the process of submitting your forms and paying your fees
                can be handled by our trusted business experts.
              </p>
            </ArticleBlock>

            <ArticleBlock
              id="new-llc"
              setRef={setRef}
              title="Starting a New LLC"
            >
              <p>
                In some scenarios, starting a new LLC might be the preferred
                option. But before you choose, it&apos;s in your best interest
                to be aware of the pros and cons surrounding this decision.
              </p>
              <h3>Pros of Starting a New LLC:</h3>
              <ul className="ml-6 list-disc space-y-2">
                <li>Chance to start with a clean slate</li>
                <li>
                  Ideal if you feel the business has run its course and
                  it&apos;s time to explore new ventures
                </li>
              </ul>
              <h3>Cons of Starting a New LLC:</h3>
              <p>
                Starting a new LLC might sound simple, but it is a mammoth task.
                Apart from time being the major player, here&apos;s what else
                you stand to lose out on:
              </p>
              <LoseCard />
              <ul className="ml-6 list-disc space-y-2">
                {NEW_LLC_CONS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </ArticleBlock>

            <ArticleBlock
              id="how-to"
              setRef={setRef}
              title="How to Reinstate a Dissolved LLC"
            >
              <p>
                Reinstatement of your LLC is the process of bringing your
                company back into good standing. Here&apos;s what it takes to
                get you back into business.
              </p>
              <h3>Reinstatement Requirements</h3>
              <p>
                At the bare minimum, most states require you to file a
                reinstatement application or affidavit for reinstatement. There
                might be additional paperwork and dues depending on why your
                business fell out of good standing.
              </p>
              <h3>Costs to Reinstate</h3>
              <p>
                The average cost to reinstate your LLC is based on your business
                home. Florida can be different from Delaware, and missed fines
                or taxes may also apply.
              </p>
              <h3>How Long Will It Take to Reinstate My LLC?</h3>
              <p>
                It can take anywhere from 1-2 business days to 2 weeks to hear
                back on your reinstatement. You could opt to pay an expedited
                fee if your state offers that option.
              </p>
            </ArticleBlock>

            <ArticleBlock
              id="with-incorp-bay"
              setRef={setRef}
              title="Reinstate Your LLC with Incorp Bay"
            >
              <p>
                Bringing your company back into good standing via reinstatement
                gives your business a second chance or second life in almost
                half the time it takes to open a new LLC.
              </p>
              <p>
                With Incorp Bay&apos;s Reinstatement service, you&apos;ll have a
                trusted and experienced partner that will help you navigate the
                reinstatement process and file the required paperwork on your
                behalf.
              </p>
              <a
                href="/reinstatement/step-1"
                className="mt-4 inline-flex rounded-full bg-[#06B6D4] px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-md shadow-[#06B6D4]/30 transition hover:bg-[#0891b2]"
              >
                Start Now
              </a>
            </ArticleBlock>
          </main>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-br from-[#1E293B] to-[#06B6D4] p-10 shadow-2xl md:p-16">
          <p className="text-xs font-black uppercase tracking-widest text-cyan-100">
            Reinstate
          </p>
          <h2 className="mt-3 text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
            Ready To Get Reinstated?
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-200 md:text-base">
            Incorp Bay can help you reinstate your dissolved business and get
            back in good standing.
          </p>
          <a
            href="/reinstatement/step-1"
            className="mt-8 inline-flex rounded-full bg-[#06B6D4] px-8 py-4 text-sm font-black uppercase tracking-wider text-white shadow-lg shadow-cyan-500/20 transition hover:bg-[#0891b2]"
          >
            Start Now
          </a>
</div>
      </section>
    </div>
    </NavigationWrapper>
  );
}

function ArticleBlock({
  id,
  setRef,
  title,
  children,
}: {
  id: string;
  setRef: (id: string) => (el: HTMLElement | null) => void;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      ref={setRef(id)}
      className="scroll-mt-28 border-b border-slate-100 pb-16 last:border-b-0"
    >
      <h2 className="text-3xl font-black leading-tight tracking-tight text-[#1a1a1a] md:text-4xl">
        {title}
      </h2>
      <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-600 [&_h3]:pt-4 [&_h3]:text-2xl [&_h3]:font-black [&_h3]:tracking-tight [&_h3]:text-[#1a1a1a]">
        {children}
      </div>
    </section>
  );
}

function BenefitsCard() {
  return (
    <div className="my-6 max-w-2xl rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
      <div className="rounded-xl bg-slate-50 p-5">
        <p className="text-lg font-black leading-tight text-[#0f0f1a]">
          Benefits of <span className="text-[#06B6D4]">Reinstating</span>
          <br /> Your LLC
        </p>
      </div>

      <div className="mt-4 divide-y divide-slate-100">
        {BENEFITS.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 py-3 text-sm text-slate-600"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#06B6D4]">
              <CheckSmall />
            </span>
            <span>
              <strong className="text-[#1a1a1a]">{item.label}</strong>
              {item.rest}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex h-36 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-900 to-cyan-600 text-center text-sm text-white/80">
        <div>
          <div className="mb-1 text-4xl">👩🏾‍💼</div>
          Business owner back in action
        </div>
      </div>
    </div>
  );
}

function LoseCard() {
  return (
    <div className="my-6 max-w-2xl rounded-2xl bg-slate-50 p-6">
      <div className="rounded-xl bg-white p-5 shadow-sm">
        <p className="text-base font-black leading-tight text-[#0f0f1a]">
          <span className="text-[#06B6D4]">Reinstatement</span>
          <br /> Or Start a New LLC?
        </p>
      </div>
      <p className="mt-5 text-sm font-bold text-[#0f0f1a]">
        Here&apos;s what you&apos;ll lose out on if you start a new LLC...
      </p>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {LOSE_ITEMS.map((item) => (
          <div
            key={item.bold}
            className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
          >
            <XCircle />
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              <strong className="text-[#1a1a1a]">{item.bold}</strong>
              {item.rest}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
