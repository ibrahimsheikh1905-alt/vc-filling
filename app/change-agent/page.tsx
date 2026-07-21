"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import NavigationWrapper from "@/components/NavigationWrapper";

const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";
const LOGO_GRADIENT_TEXT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent";

const tocItems = [
  ["How to Change Your Registered Agent with Incorp Bay", "#change-agent"],
  ["What Is a Registered Agent?", "#registered-agent"],
  ["What Is the Benefit of a Registered Agent Service?", "#benefits"],
  ["How Do I Change My Registered Agent?", "#how-to-change"],
];

export default function ChangeRegisteredAgentPage() {
  const [activeSection, setActiveSection] = useState("#change-agent");

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    e.preventDefault();

    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(link);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      tocItems.forEach(([, link]) => {
        const section = document.querySelector(link);
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 140 && rect.bottom >= 140) {
          setActiveSection(link);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavigationWrapper>
      <main className="bg-white text-[#1E293B]">
        {/* HERO */}
        <section className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 overflow-hidden px-6 py-12 lg:grid-cols-2 lg:py-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#2B93C9 1px, transparent 1px), linear-gradient(90deg, #2B93C9 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-[#2B93C9]/10 blur-[90px]" />

          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm">
              Excellent 4.7 out of 5
              <span className="text-[#2B93C9]">★</span>
              Trustpilot
            </div>

            <h1 className="max-w-xl text-5xl font-bold leading-tight text-[#1E293B] md:text-7xl">
              Need to Change Your
              <br />
              <span className={LOGO_GRADIENT_TEXT}>Registered Agent?</span>
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-6 text-slate-600 md:text-base">
              Changing your Registered Agent is easier, simpler, and quicker
              with Incorp Bay. Sometimes circumstances arise that require a
              Registered Agent change.
            </p>

            <Link href="/change-agent/step-1" className={`${LOGO_GRADIENT} group relative mt-8 inline-flex overflow-hidden rounded-full px-5 py-2.5 text-xs font-bold text-white transition-all duration-300 shadow-md hover:shadow-[0_10px_35px_rgba(43,147,201,0.45)] active:scale-[0.98]`}>
              <span className="absolute inset-x-0 top-0 h-1/2 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
              <span className="absolute -left-20 top-0 h-full w-12 -skew-x-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />

              <span className="relative z-10 flex items-center gap-2">
                ORDER NOW
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </span>
            </Link>
          </div>

          <div className="relative z-10 flex items-center justify-center">
            <img
              src="/change-register-agent/Change-of-registered-agent-hero.webp"
              alt="Registered Agent"
              className="mx-auto max-w-[400px] w-full rounded-[40px]"
            />
          </div>
        </section>

        {/* STATS */}
        <section className="bg-[#F8FAFC] px-6 py-8">
          <p className="mx-auto max-w-5xl text-center text-sm font-bold leading-relaxed text-slate-700 md:text-xl">
            Bootstrapped, Founder Led, Independently Owned{" "}
            <span className={`rounded-lg bg-slate-50 px-2 py-0.5 font-extrabold ${LOGO_GRADIENT_TEXT} shadow-sm`}>
              Since 2004
            </span>{" "}
            With{" "}
            <span className={`rounded-lg bg-slate-50 px-2 py-0.5 font-extrabold ${LOGO_GRADIENT_TEXT} shadow-sm`}>
              Over 1,000,000 Entrepreneurs
            </span>{" "}
            Served!
          </p>
        </section>

        {/* WHY */}
        <section className="mx-auto max-w-7xl px-6 py-14">
          <h2 className="mx-auto max-w-4xl text-center text-3xl font-bold text-[#1E293B] md:text-4xl">
            Why Change your Registered Agent Service Provider to Incorp Bay?
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-[28px] bg-[#1E293B] p-8">
              <img
                src="/change-register-agent/Change-ra-info.webp"
                alt="Registered Agent"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>

            <div className="space-y-5">
              {[
                "Only $149 Annually",
                "Expert Handling of All of Your Documents",
                "Automatic Mail Forwarding",
                "Tailored SMS and Email Notifications",
              ].map((title, index) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#2B93C9]/40 hover:shadow-md"
                >
                  <div className="flex gap-4">
                    <span className={`flex h-7 w-9 items-center justify-center rounded ${LOGO_GRADIENT} text-sm font-bold text-white`}>
                      {index + 1}
                    </span>

                    <div>
                      <h3 className="font-bold text-[#1E293B]">{title}</h3>
                      <p className="mt-1 text-sm text-slate-600">
                        Reliable registered agent support for your business.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TABLE OF CONTENTS + ARTICLE */}
        <section className="bg-[#F8FAFC] px-6 py-14">
          <div className="mx-auto max-w-7xl rounded-3xl bg-[#ECEFF1]/50 p-6 md:p-12">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[320px_1fr]">
              <aside className="w-full lg:sticky lg:top-24">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className={`text-xs font-semibold uppercase tracking-wider ${LOGO_GRADIENT_TEXT}`}>
                    Table of Contents
                  </p>

                  <ul className="mt-4">
                    {tocItems.map(([title, link]) => (
                      <li
                        key={link}
                        className="border-t border-slate-200 first:border-t-0"
                      >
                        <a
                          href={link}
                          onClick={(e) => handleSmoothScroll(e, link)}
                          className={`flex justify-between gap-3 py-3 text-sm font-medium transition-colors ${
                            activeSection === link
                              ? `font-bold ${LOGO_GRADIENT_TEXT}`
                              : "text-slate-700 hover:text-[#2B93C9]"
                          }`}
                        >
                          {title}

                          <span
                            className={
                              activeSection === link
                                ? "translate-x-1 transition-transform text-[#2B93C9]"
                                : "text-slate-400"
                            }
                          >
                            ›
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>

              <article className="w-full max-w-4xl leading-7 text-slate-700">
                <section id="change-agent" className="scroll-mt-24 mb-8">
                  <h2 className="mb-6 text-4xl font-bold text-[#1E293B]">
                    How to Change Your Registered Agent with Incorp Bay
                  </h2>

                  <p className="mb-4">
                    A Registered Agent plays a very important role in your LLC.
                    However, sometimes you may need to change your Registered
                    Agent.
                  </p>
                </section>

                <section id="registered-agent" className="scroll-mt-24 mb-8">
                  <h2 className="mb-6 text-4xl font-bold text-[#1E293B]">
                    What Is a Registered Agent?
                  </h2>

                  <p className="mb-6">
                    A Registered Agent is responsible for receiving official
                    legal notices and important state documents for your
                    business.
                  </p>

                  <img
                    src="/change-register-agent/Change-ra-toc-1.webp"
                    alt="Registered Agent Requirements"
                    className="w-full rounded-2xl shadow"
                  />
                </section>

                <section id="benefits" className="scroll-mt-24 mb-8">
                  <h2 className="mb-6 text-4xl font-bold text-[#1E293B]">
                    What Is the Benefit of a Registered Agent Service?
                  </h2>

                  <ul className="mb-8 list-disc space-y-3 pl-6">
                    <li>
                      Helpful when expanding your business to another state.
                    </li>
                    <li>Saves time by handling official business mail.</li>
                    <li>Keeps your personal address more private.</li>
                  </ul>
                </section>

                <section id="how-to-change" className="scroll-mt-24 mb-8">
                  <h2 className="mb-6 text-4xl font-bold text-[#1E293B]">
                    How Do I Change My Registered Agent?
                  </h2>

                  <ol className="mb-8 list-decimal space-y-3 pl-6">
                    <li>Visit your Secretary of State website.</li>
                    <li>Search for change of registered agent.</li>
                    <li>Follow your state requirements.</li>
                    <li>Submit the form and required fee.</li>
                  </ol>

                  <Link href="/change-agent/step-1" className={`${LOGO_GRADIENT} group relative mt-8 inline-flex overflow-hidden rounded-full px-5 py-2.5 text-xs font-bold text-white transition-all duration-300 shadow-md hover:shadow-[0_10px_35px_rgba(43,147,201,0.45)] active:scale-[0.98]`}>
                    <span className="absolute inset-x-0 top-0 h-1/2 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
                    <span className="absolute -left-20 top-0 h-full w-12 -skew-x-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />

                    <span className="relative z-10 flex items-center gap-2">
                      CHANGE REGISTERED AGENT
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </span>
                  </Link>
                </section>
              </article>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="px-6 py-8 md:py-10">
          <div className={`${LOGO_GRADIENT} relative mx-auto max-w-3xl overflow-hidden rounded-[32px] border border-white/10 px-6 py-8 text-center shadow-2xl`}>
            <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#33D1CC]/20 to-transparent" />
            <div className="pointer-events-none absolute right-1/4 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#33D1CC]/30 blur-[80px]" />

            <div className="relative flex items-center gap-4 p-2 md:p-3">
              <div className="relative z-10 mx-auto flex w-full flex-col items-center space-y-3 text-center">
                <span className="rounded-full border border-white/15 bg-white/12 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  Incorporate Now
                </span>
                <h2 className="text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl">
                  Change <br /> Your Registered <br /> Agent Now
                </h2>

                <p className="max-w-sm text-xs leading-relaxed text-white/80 md:text-sm">
                  Fast, reliable registered agent service with automatic mail forwarding and expert document handling.
                </p>

                <Link
                  href="/change-agent/step-1"
                  className="group relative overflow-hidden rounded-xl bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
                >
                  <span className="absolute inset-0 bg-[#2B93C9]/0 transition-colors duration-300 group-hover:bg-[#2B93C9]/5" />
                  <span className="absolute -left-16 top-0 h-full w-10 -skew-x-12 bg-[#2B93C9]/10 blur-sm transition-all duration-700 group-hover:left-[120%]" />

                  <span className={`relative z-10 flex items-center gap-2 ${LOGO_GRADIENT_TEXT}`}>
                    GET STARTED NOW
                    <svg
                      className="h-4 w-4 stroke-[#2B93C9] transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>

                <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] font-medium text-white/85">
                  <span className="rounded-full border border-white/15 bg-white/12 px-3 py-1">✓ No Hidden Fees</span>
                  <span className="rounded-full border border-white/15 bg-white/12 px-3 py-1">✓ Fast State Filing</span>
                  <span className="rounded-full border border-white/15 bg-white/12 px-3 py-1">✓ Secure Process</span>
                </div>

                <div className="mt-3 grid w-full max-w-sm grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-white/15 bg-white/12 px-3 py-2 backdrop-blur">
                    <p className="text-lg font-bold text-white">147K+</p>
                    <p className="text-[10px] text-white/75">Ratings</p>
                  </div>

                  <div className="rounded-2xl border border-white/15 bg-white/12 px-3 py-2 backdrop-blur">
                    <p className="text-lg font-bold text-white">25K+</p>
                    <p className="text-[10px] text-white/75">Reviews</p>
                  </div>

                  <div className="rounded-2xl border border-white/15 bg-white/12 px-3 py-2 backdrop-blur">
                    <p className="text-lg font-bold text-white">4.7★</p>
                    <p className="text-[10px] text-white/75">Rating</p>
                  </div>
                </div>
              </div>

       
            </div>
          </div>
        </section>
      </main>
    </NavigationWrapper>
  );
}