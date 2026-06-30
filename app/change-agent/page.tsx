"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import NavigationWrapper from "@/components/NavigationWrapper";

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
        <section className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 overflow-hidden px-6 py-16 lg:grid-cols-2 lg:py-24">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#06B6D4 1px, transparent 1px), linear-gradient(90deg, #06B6D4 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-[#06B6D4]/10 blur-[90px]" />

          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm">
              Excellent 4.7 out of 5
              <span className="text-[#06B6D4]">★</span>
              Trustpilot
            </div>

            <h1 className="max-w-xl text-4xl font-bold leading-tight text-[#1E293B] md:text-6xl">
              Need to Change Your{" "}
              <span className="text-[#06B6D4]">Registered Agent?</span>
            </h1>

<p className="mt-5 max-w-lg text-sm leading-6 text-slate-600 md:text-base">
              Changing your Registered Agent is easier, simpler, and quicker
              with Incorp Bay. Sometimes circumstances arise that require a
              Registered Agent change.
            </p>

<Link href="/change-agent/step-1" className="group relative mt-8 inline-flex overflow-hidden rounded-full bg-[#06B6D4] px-8 py-5 text-sm font-bold text-white transition-all duration-300 shadow-md hover:shadow-[0_8px_30px_rgba(6,182,212,0.5)] hover:-translate-y-1 active:scale-[0.98]">
  <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4] to-[#0891b2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

  <span className="relative z-10 flex items-center gap-2">
    ORDER NOW
    <span className="group-hover:translate-x-1 transition-transform duration-300">
      →
    </span>
  </span>
</Link>
          </div>

          <div className="relative z-10 rounded-[28px] bg-[#F8FAFC] p-10">
            <div className="mx-auto h-[420px] max-w-[320px] rotate-[-8deg] rounded-[40px] border-[10px] border-[#1E293B] bg-white p-6 shadow-2xl">
              <p className="text-sm font-semibold text-[#1E293B]">
                Registered Agent
              </p>

              <p className="mt-6 text-xs font-bold uppercase tracking-wide text-slate-400">
                Status
              </p>

              <p className="font-bold text-[#1E293B]">
                ACTIVE <span className="text-emerald-500">✅</span>
              </p>

              <div className="mt-10 rounded-2xl bg-slate-100 p-5">
                <p className="text-3xl font-black text-[#1E293B]">ASSIGNED</p>

                <div className="mt-6 rounded-xl bg-white p-4 shadow-lg">
                  <p className="font-bold text-[#1E293B]">Tony Smith</p>
                  <p className="text-xs text-slate-500">Registered Agent</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="bg-[#F8FAFC] px-6 py-8">
          <p className="mx-auto max-w-5xl text-center text-sm font-bold leading-relaxed text-slate-700 md:text-xl">
            Bootstrapped, Founder Led, Independently Owned{" "}
            <span className="rounded-lg bg-cyan-50 px-2 py-0.5 font-extrabold text-[#06B6D4] shadow-sm">
              Since 2004
            </span>{" "}
            With{" "}
            <span className="rounded-lg bg-cyan-50 px-2 py-0.5 font-extrabold text-[#06B6D4] shadow-sm">
              Over 1,000,000 Entrepreneurs
            </span>{" "}
            Served!
          </p>
        </section>

        {/* WHY */}
        <section className="mx-auto max-w-7xl px-6 py-20">
<h2 className="mx-auto max-w-4xl text-center text-3xl font-bold text-[#1E293B] md:text-4xl">
            Why Change your Registered Agent Service Provider to Incorp Bay?
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="rounded-[28px] bg-[#1E293B] p-8">
              <div className="rounded-2xl bg-white p-6 shadow-xl">
                <h3 className="text-xl font-bold text-[#1E293B]">
                  Tony Smith
                </h3>
                <p className="text-sm text-slate-500">Registered Agent</p>

                <div className="mt-8 space-y-4">
                  <div className="rounded-xl border border-slate-200 p-4 text-slate-700">
                    Payroll Management
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4 text-slate-700">
                    Tax Forms
                  </div>
                </div>
              </div>
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
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#06B6D4]/40 hover:shadow-md"
                >
                  <div className="flex gap-4">
                    <span className="flex h-7 w-9 items-center justify-center rounded bg-[#06B6D4] text-sm font-bold text-white">
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
        <section className="bg-[#F8FAFC] px-6 py-20">
          <div className="mx-auto max-w-7xl rounded-3xl bg-[#ECEFF1]/50 p-6 md:p-12">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[320px_1fr]">
              <aside className="w-full lg:sticky lg:top-24">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#06B6D4]">
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
                              ? "font-bold text-[#06B6D4]"
                              : "text-slate-700 hover:text-[#06B6D4]"
                          }`}
                        >
                          {title}

                          <span
                            className={
                              activeSection === link
                                ? "translate-x-1 transition-transform text-[#06B6D4]"
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
                <section id="change-agent" className="scroll-mt-24 mb-12">
<h2 className="mb-6 text-4xl font-bold text-[#1E293B]">
                    How to Change Your Registered Agent with Incorp Bay
                  </h2>

                  <p className="mb-4">
                    A Registered Agent plays a very important role in your LLC.
                    However, sometimes you may need to change your Registered
                    Agent.
                  </p>
                </section>

                <section id="registered-agent" className="scroll-mt-24 mb-12">
                  <h2 className="mb-6 text-4xl font-bold text-[#1E293B]">
                    What Is a Registered Agent?
                  </h2>

                  <p className="mb-6">
                    A Registered Agent is responsible for receiving official
                    legal notices and important state documents for your
                    business.
                  </p>

                  <div className="rounded-xl bg-slate-100 p-8">
                    <div className="rounded-2xl bg-white p-8 shadow">
                      <h3 className="text-2xl font-black text-[#1E293B]">
                        YOUR REGISTERED AGENT MUST:
                      </h3>

                      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                        {[
                          "Reside in the same state",
                          "Maintain a physical address",
                          "Be available during business hours",
                          "Be at least 18 years old",
                        ].map((item) => (
                          <div
                            key={item}
                            className="rounded-xl border border-slate-200 p-5 text-slate-700"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                <section id="benefits" className="scroll-mt-24 mb-12">
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

                <section id="how-to-change" className="scroll-mt-24 mb-12">
                  <h2 className="mb-6 text-4xl font-bold text-[#1E293B]">
                    How Do I Change My Registered Agent?
                  </h2>

                  <ol className="mb-8 list-decimal space-y-3 pl-6">
                    <li>Visit your Secretary of State website.</li>
                    <li>Search for change of registered agent.</li>
                    <li>Follow your state requirements.</li>
                    <li>Submit the form and required fee.</li>
                  </ol>

<Link href="/change-agent/step-1" className="group relative mt-8 inline-flex overflow-hidden rounded-full bg-[#06B6D4] px-8 py-5 text-sm font-bold text-white transition-all duration-300 shadow-md hover:shadow-[0_8px_30px_rgba(6,182,212,0.5)] hover:-translate-y-1 active:scale-[0.98]">
  <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4] to-[#0891b2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

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
        <section className="px-6 py-20">
          <div
            className="relative mx-auto max-w-5xl overflow-hidden rounded-[40px] px-6 py-16 text-center shadow-2xl"
            style={{
              background:
                "linear-gradient(135deg, #1E293B 0%, #06B6D4 100%)",
            }}
          >
            <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#06B6D4]/20 to-transparent" />

            <p className="relative z-10 mb-6 text-lg font-extrabold text-white md:text-xl">
              Incorporate Now
            </p>

            <h2 className="relative z-10 mx-auto max-w-3xl text-[34px] font-black leading-[1.05] text-white md:text-[64px]">
              Change{" "}
              <span className="text-cyan-400">Your Registered</span>
              <br />
              Agent Now
            </h2>

            <div className="relative z-10 mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
              <div className="rounded-xl bg-white px-6 py-3 text-sm shadow-sm">
                <span className="font-semibold text-[#1E293B]">
                  147,779 ratings
                </span>
                <span className="ml-3 text-[#06B6D4]">★★★★★</span>
                <span className="ml-2 font-bold text-[#1E293B]">
                  ShopperApproved
                </span>
              </div>

              <div className="rounded-xl bg-white px-6 py-3 text-sm shadow-sm">
                <span className="font-semibold text-[#1E293B]">
                  25,576 reviews
                </span>
                <span className="ml-3 text-[#06B6D4]">★★★★</span>
                <span className="text-slate-300">★</span>
                <span className="ml-2 font-bold text-[#1E293B]">
                  Trustpilot
                </span>
              </div>
            </div>

<Link href="/change-agent/step-1" className="group relative z-10 mt-8 inline-flex overflow-hidden rounded-full bg-[#06B6D4] px-10 py-5 text-sm font-bold text-white transition-all duration-300 shadow-md hover:shadow-[0_8px_30px_rgba(6,182,212,0.5)] hover:-translate-y-1 active:scale-[0.98]">
  <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4] to-[#0891b2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

  <span className="relative z-10 flex items-center gap-2">
    GET STARTED NOW
    <span className="group-hover:translate-x-1 transition-transform duration-300">
      →
    </span>
  </span>
</Link>
          </div>
        </section>
      </main>
    </NavigationWrapper>
  );
}