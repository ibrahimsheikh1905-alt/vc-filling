"use client";

import { CheckBadgeIcon, PlayIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import NavigationWrapper from "@/components/NavigationWrapper";

const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";

const LOGO_GRADIENT_TEXT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent";

const RegisteredAgent = () => {
  const whyChoose = [
    "Founded in Houston, Incorp Bay has helped entrepreneurs complete over 1,000,000 business formations since 2004.",
    "We're a truly national registered agent service — we own and operate our own offices in all 50 states. We never outsource.",
    "You'll get instant text and email notifications the moment any Service of Process (SOP) or state correspondence arrives.",
    "All Service of Process documents are shipped via FedEx with full tracking.",
    "Every document is securely handled by Incorp Bay staff and promptly uploaded to your personal client portal.",
    "Our service includes free lifetime compliance notifications, so you're always in the loop on important state requirements.",
  ];

  const features = [
    { label: "It's FREE for the first year!", desc: "Completely on us when you form a business or LLC through Incorp Bay. We want to help you save money from day one." },
    { label: "Availability", desc: "Someone is always available during standard business hours to accept official notices and documents on your LLC's behalf." },
    { label: "Convenience", desc: "We serve as a consistent point of contact for all state correspondence, making business administration much easier to manage." },
    { label: "Compliance Assurance", desc: "We handle all official government mail and legal notices, so your business stays compliant with state requirements." },
    { label: "Reliability", desc: "Important documents are handled promptly and carefully — nothing slips through the cracks." },
    { label: "Privacy Protection", desc: "Your personal address stays off public records, giving you better privacy and far less unwanted mail." },
  ];

  const tocItems = [
    ["Why you need a registered agent", "#why-need"],
    ["What Does a Registered Agent Do?", "#what-does"],
    ["Do I Need a Registered Agent for My LLC?", "#need-for-llc"],
    ["Do I Need a Registered Agent in Every State My Company Operates In?", "#every-state"],
    ["Should I Be My Own Registered Agent?", "#be-own"],
    ["Who Can Be My Registered Agent?", "#who-can"],
    ["Advantages of Using a Registered Agent Service", "#advantages"],
    ["Frequently Asked Questions", "#faq"],
  ];

  const stats = [
    { value: "1M+", label: "Businesses formed" },
    { value: "50", label: "States covered" },
    { value: "4.7★", label: "Trustpilot rating" },
  ];

  return (
    <NavigationWrapper>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <div className="relative overflow-hidden">
        {/* Subtle grid background matched with Cyan color */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#2B93C9 1px, transparent 1px), linear-gradient(90deg, #2B93C9 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Top-right glow */}
        <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-[#2B93C9]/10 blur-[90px]" />

        <div className="mb-16 flex flex-col-reverse md:flex-row items-center relative z-10">
          <div className="flex-1">
            <p className={`md:pl-20 max-sm:mx-5 text-sm font-semibold ${LOGO_GRADIENT_TEXT} tracking-wide uppercase`}>
              Excellent 4.7 out of 5 ★ Trustpilot
            </p>

            <h1 className="text-5xl font-bold py-6 md:pl-20 max-sm:mx-5 leading-tight text-[#1E293B]">
              Get Your First Year of Registered Agent Service — Free
            </h1>

            <p className="md:text-xl md:pl-20 max-sm:mx-5 pb-8 text-gray-500 max-w-lg leading-relaxed">
              Every business is legally required to have a registered agent to stay in good standing with the state. We make the whole process simple, affordable, and stress-free — so you can stay compliant without the hassle.
            </p>

            <div className="flex gap-4 md:pl-20 max-sm:mx-5 flex-wrap">
              {/* Button 1 Updated with same Hover effect as START NOW */}
              <Link
                href="/form-a-llc"
                className={`group relative ${LOGO_GRADIENT} text-white rounded-2xl p-5 w-48 overflow-hidden hover:brightness-110 hover:scale-[1.03] hover:shadow-[0_10px_35px_rgba(43,147,201,0.45)] transition-all duration-300`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2B93C9] to-[#33D1CC] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <p className="text-sm text-cyan-100">Free LLC Formation</p>
                  <h3 className="font-bold py-3">Free First Year</h3>
                  <span className="flex items-center gap-1 text-sm">
                    Get Started <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </span>
                </div>
              </Link>

              <Link
                href="/registered-agent/step-1"
                className="group bg-[#1E293B] text-white rounded-2xl p-5 w-48 hover:bg-[#0f172a] hover:shadow-[0_8px_30px_rgba(30,41,59,0.4)] transition-all duration-300"
              >
                <p className="text-sm text-gray-400">Registered Agent</p>
                <h3 className="font-bold py-3">Standard Service</h3>
                <span className="flex items-center gap-1 text-sm">
                  Get Started <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </span>
              </Link>
            </div>

            {/* Stats strip */}
            <div className="flex gap-8 md:pl-20 max-sm:mx-5 mt-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className={`text-2xl font-bold ${LOGO_GRADIENT_TEXT}`}>{s.value}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#2B93C9]/20 to-[#2B93C9]/10 blur-2xl scale-105" />
              <Image
                src="/Register-agent/Incorporate-now-ra.webp"
                alt="Registered Agent"
                width={430}
                height={430}
                className="rounded-3xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="h-px mx-5 bg-gradient-to-r from-transparent via-[#2B93C9]/40 to-transparent mb-6" />

      <div className="max-w-7xl mx-auto">
        {/* ─── STARTUP CENTRAL ──────────────────────────────────── */}
        <div className="border border-[#2B93C9]/20 rounded-2xl p-8 mx-5 flex justify-between items-center flex-col md:!flex-row gap-8 bg-gradient-to-r from-[#2B93C9]/5 to-[#2B93C9]/5 hover:border-[#2B93C9]/40 transition-colors duration-300">
          <div className="w-full md:w-auto text-center md:text-left">
            <span className={`text-xs font-semibold uppercase tracking-widest ${LOGO_GRADIENT_TEXT}`}>Resources</span>
            <h2 className="text-3xl font-bold text-[#1E293B] mt-2">Incorp Bay's Startup Central</h2>
            <p className="text-gray-500 py-4 max-w-sm mx-auto md:mx-0">
              Your go-to resource hub. Real-world advice, determination, and a clear roadmap for building your business from the ground up.
            </p>
            {/* Button 2 Updated with same Hover effect as START NOW */}
            <Link
              href="/Startup-Central"
              className={`group relative ${LOGO_GRADIENT} text-white px-8 py-4 rounded-[30px] inline-block overflow-hidden hover:brightness-110 hover:scale-[1.03] hover:shadow-[0_10px_35px_rgba(43,147,201,0.45)] transition-all duration-300`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2B93C9] to-[#33D1CC] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">
                VISIT INCORP BAY'S STARTUP CENTRAL
              </span>
            </Link>
          </div>

          <div className="relative shrink-0 w-[400px] h-[250px]">
            {/* Blurred backdrop copy — shows through the faded edges of the sharp image on top */}
            <Image
              src="/Register-agent/Startup-central-ideas.webp"
              alt=""
              aria-hidden="true"
              fill
              className="object-contain rounded-2xl blur-md scale-105 opacity-80"
            />
            <Image
              src="/Register-agent/Startup-central-ideas.webp"
              alt="Startup Central"
              fill
              className="object-contain rounded-2xl relative"
              style={{
                maskImage:
                  "radial-gradient(ellipse 42% 55% at center, black 60%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 42% 55% at center, black 60%, transparent 100%)",
              }}
            />
          </div>
        </div>

        {/* ─── WHY CHOOSE ───────────────────────────────────────── */}
        <div className="py-20 mx-5">
          <span className={`block text-center text-xs font-semibold uppercase tracking-widest ${LOGO_GRADIENT_TEXT} mb-3`}>
            Trusted by millions
          </span>
          <h2 className="text-center text-4xl font-bold pb-10 text-[#1E293B]">
            Why Choose Incorp Bay as Your Registered Agent?
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-3">
              {whyChoose.map((item, index) => (
                <div
                  key={index}
                  className="group border-l-4 border-transparent hover:border-[#2B93C9] border border-gray-100 rounded-xl p-4 flex gap-5 items-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span className={`shrink-0 ${LOGO_GRADIENT_TEXT} text-2xl font-bold bg-[#2B93C9]/8 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-[#2B93C9]/15 transition-colors`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#2B93C9]/10 to-[#2B93C9]/10 blur-xl" />
              <Image
                src="/Register-agent/image.webp"
                alt="Registered Agent Woman"
                width={600}
                height={650}
                className="rounded-3xl relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Section divider */}
        <div className="h-px mx-5 bg-gradient-to-r from-transparent via-[#2B93C9]/30 to-transparent mb-6" />

        {/* ─── VIDEO FAQ ────────────────────────────────────────── */}
<div className="py-16 mx-5">
  <span className="block text-center text-xs font-semibold uppercase tracking-widest text-black mb-3">
    Learn more
  </span>

  <h2 className="text-center text-4xl font-bold text-[#1E293B]">
    Why You Need A Registered Agent
  </h2>

  <p className="text-center text-gray-500 py-3 max-w-xl mx-auto">
    A registered agent ensures you never miss crucial legal documents and
    compliance notices.
  </p>

  <div className="grid md:grid-cols-2 gap-10 items-center pt-10">
    {/* Left */}
    <div>
      <p className="text-black font-semibold text-sm uppercase tracking-wide mb-2">
        What you need to know
      </p>

      <h3 className="text-2xl font-bold pb-6 text-[#1E293B] leading-snug">
        Key questions and answers about Registered Agents
      </h3>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="video-1" className="border-b border-black">
          <AccordionTrigger className="text-left hover:text-black">
            Does My Business Need a Registered Agent?
          </AccordionTrigger>

          <AccordionContent className="text-gray-500">
            Yes, most states require businesses to have a registered agent.
            Operating without one can put your LLC at risk of losing good
            standing.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="video-2" className="border-b border-black">
          <AccordionTrigger className="text-left hover:text-black">
            Why Use a Registered Agent Service?
          </AccordionTrigger>

          <AccordionContent className="text-gray-500">
            A professional service ensures documents are received and processed
            promptly, protecting your privacy and keeping your business
            compliant.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>

    {/* Right */}
    <div className="relative group rounded-2xl overflow-hidden bg-[#1E293B]">
      <Image
        src="/free-llc/seeWhat.webp"
        alt="Registered Agent Video"
        width={650}
        height={380}
        className="opacity-80 group-hover:opacity-70 transition-opacity duration-300"
      />

      <button
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        bg-black hover:bg-gray-800
        text-white rounded-full w-16 h-16
        flex justify-center items-center
        shadow-[0_0_0_8px_rgba(0,0,0,0.20)]
        hover:shadow-[0_0_0_12px_rgba(0,0,0,0.15)]
        transition-all duration-300"
      >
        <PlayIcon className="h-8 w-8 ml-1" />
      </button>
    </div>
  </div>
</div>

        {/* ─── SERVICE BOX ──────────────────────────────────────── */}
        <div className="relative bg-[#1E293B] rounded-3xl p-10 mx-5 text-center overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-1/4 w-72 h-72 bg-[#2B93C9]/10 rounded-full blur-[80px]" />
          <div className="pointer-events-none absolute bottom-0 right-1/4 w-72 h-72 bg-[#2B93C9]/15 rounded-full blur-[80px]" />

          <div className="relative z-10">
            <span className={`text-xs font-semibold uppercase tracking-widest ${LOGO_GRADIENT_TEXT} mb-3 block`}>
              All in one place
            </span>
            <h2 className="text-4xl font-bold text-white">
              Incorp Bay's Registered Agent Service Has <br />
              <span className={LOGO_GRADIENT_TEXT}>Everything You Need</span>
            </h2>

            <p className="py-4 text-slate-300 max-w-lg mx-auto">
              Get peace of mind knowing your business is always in compliance.
            </p>

            <div className="grid md:grid-cols-3 gap-4 py-10">
              {features.map((item) => (
                <div
                  key={item.label}
                  className="group bg-white/5 border border-white/8 rounded-2xl p-6 text-left hover:bg-white/10 hover:border-[#2B93C9]/40 hover:-translate-y-1 transition-all duration-200 cursor-default"
                >
                  <CheckBadgeIcon className="h-7 w-7 text-[#2B93C9] mb-4" />
                  <h3 className="font-bold text-white text-sm mb-2">{item.label}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mx-auto w-full max-w-[750px] overflow-hidden rounded-3xl">
              <Image
                src="/Register-agent/Registered_agent_promotion_section.webp"
                alt="Service Phones"
                width={750}
                height={500}
                className="object-contain rounded-3xl w-full transform transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>

        {/* ─── TABLE OF CONTENTS + ARTICLE ─────────────────────── */}
        <div className="py-20 mx-5">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 items-start">
            <div className="w-full lg:sticky lg:top-24">
              <div className="bg-white border border-[#2B93C9]/15 rounded-2xl p-6 shadow-sm">
                <p className={`text-xs uppercase tracking-widest ${LOGO_GRADIENT_TEXT} font-semibold`}>
                  What you need to know
                </p>

                <h3 className="text-xl font-bold mt-2 mb-5 text-[#1E293B] leading-snug">
                  Key questions and answers about registered agents
                </h3>

                <ul>
                  {tocItems.map(([title, link]) => (
                    <li key={link} className="border-t first:border-t-0 border-gray-100">
                      <a
                        href={link}
                        className="group flex justify-between gap-3 py-3 text-sm text-gray-600 hover:text-[#2B93C9] transition-colors"
                      >
                        {title}
                        <span className="group-hover:translate-x-0.5 transition-transform inline-block">›</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full max-w-4xl text-gray-600 leading-7">
              {[
                { id: "why-need", title: "Why you need a registered agent", content: (
                  <>
                    <p className="mb-4">Make sure your business is covered when it comes to legal and compliance matters.</p>
                    <p className="mb-4">Starting a business is exciting, and it&apos;s easy to overlook the importance of setting up a registered agent. But this is a step you don&apos;t want to skip.</p>
                    <p className="mb-4">So, what exactly is a registered agent? Also known as an agent for service of process, a statutory agent, or a resident agent, this person or service plays a key role in your business formation. Here&apos;s what you need to know about registered agents and why having one matters.</p>
                  </>
                )},
                { id: "what-does", title: "What Does a Registered Agent Do?", content: (
                  <>
                    <p className="mb-4">Your LLC&apos;s registered agent is the official point of contact for all legal, tax, and government documents. Think of them as your business&apos;s dedicated mailbox for critical paperwork, including:</p>
                    <ul className="list-none space-y-2 mb-8">
                      {["Legal notifications such as lawsuits and subpoenas (Service of Process)","Annual reports from the state","Any official correspondence from state government agencies"].map(i => (
                        <li key={i} className="flex items-center gap-2 text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2B93C9] shrink-0" />
                          {i}
                        </li>
                      ))}
                    </ul>
                    <p className="mb-4">A registered agent acts as a reliable go-between, making sure you receive every legal communication that could affect your business. They help keep your LLC in good standing and ensure you&apos;re always meeting state requirements.</p>
                  </>
                )},
                { id: "need-for-llc", title: "Do I Need a Registered Agent for My LLC?", content: (
                  <>
                    <p className="mb-4">Yes — and it&apos;s not just a good idea, it&apos;s the law. Every state in the U.S. requires LLCs to have a registered agent. Whether you&apos;re running a tech startup in California or a small bakery in Rhode Island, having someone designated to receive official documents is a must.</p>
                    <p className="mb-4">Operating without a registered agent can lead to serious problems — missed legal notices, fines, or even the forced dissolution of your LLC. It also puts your personal privacy at risk and can leave you out of compliance with state regulations.</p>
                    <p className="mb-8">Choosing a dependable registered agent protects your privacy, keeps your personal information out of public records, and ensures you receive important legal documents on time.</p>
                  </>
                )},
                { id: "every-state", title: "Do I Need a Registered Agent in Every State My Company Operates In?", content: (
                  <>
                    <p className="mb-4">Yes - if you&apos;re doing business in multiple states, you&apos;ll typically need a registered agent in each one. This is called foreign qualification.</p>
                    <p className="mb-8">Each state has its own rules about what counts as "doing business" there, but if you have employees, an office, or make regular sales in a state, you&apos;ll likely need to register there and appoint an agent.</p>
                  </>
                )},
                { id: "be-own", title: "Should I Be My Own Registered Agent?", content: (
                  <>
                    <p className="mb-4">Being your own registered agent can cut costs, but it comes with some real drawbacks worth thinking through:</p>
                    <ul className="list-none space-y-2 mb-8">
                      {["You need a physical address. P.O. boxes aren't allowed — you must have a physical street address in the state where your LLC is registered.","You must be available during business hours. If you travel, have a busy schedule, or keep irregular hours, this can be tough to manage consistently.","Missing documents can be costly. If you miss a legal notice like a lawsuit, the consequences can be severe. A professional service ensures nothing gets overlooked."].map(i => (
                        <li key={i} className="flex items-center gap-2 text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2B93C9] shrink-0" />
                          {i}
                        </li>
                      ))}
                    </ul>
                    <p className="mb-8">Being your own agent is cheaper upfront, but it does expose you and your business to potential legal and privacy risks.</p>
                  </>
                )},
                { id: "who-can", title: "Who Can Be My Registered Agent?", content: (
                  <>
                    <p className="mb-4">Requirements vary by state, but generally your registered agent can be any individual over the age of 18 — such as an attorney, an employee, a family member, or a professional registered agent service — as long as they have a physical address in the state where your business is registered.</p>
                    <p className="mb-4">The most important thing is to choose someone who is reliable, accessible, and trustworthy to handle important legal documents on your behalf.</p>
                    <p className="mb-8">Your LLC&apos;s registered agent is its official point of contact for critical legal, tax, and government documents.</p>
                  </>
                )},
                { id: "advantages", title: "What Are the Benefits of Using a Registered Agent Service?", content: (
                  <>
                    <p className="mb-4">Beyond receiving legal documents, a registered agent service offers several practical advantages:</p>
                    <ul className="list-none space-y-2 mb-4">
                      {["Peace of mind. You can focus on running your business knowing that important documents are being handled — no worrying about missed deadlines.","Compliance support. Many services help with annual report filings and other state compliance tasks.","Privacy. Your personal address stays out of public records.","Convenience. Many services provide online portals where you can easily track and manage your documents anytime."].map(i => (
                        <li key={i} className="flex items-center gap-2 text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2B93C9] shrink-0" />
                          {i}
                        </li>
                      ))}
                    </ul>
                    <p className="mb-8">Don&apos;t overlook the value of a good registered agent — it can make a real difference in how smoothly your business runs.</p>
                  </>
                )},
                { id: "faq", title: "Frequently Asked Questions", content: (
                  <>
                    <h3 className="text-xl font-bold text-[#1E293B] mb-2">How much does Incorp Bay's registered agent service cost?</h3>
                    <p className="mb-6">Incorp Bay offers a full-featured registered agent service designed to save you both time and money.</p>
                    <h3 className="text-xl font-bold text-[#1E293B] mb-2">How much does the first year cost?</h3>
                    <p className="mb-6">$0 for the first year when you form your LLC with Incorp Bay — it&apos;s completely free. After that, it&apos;s just $99/year (plus state fees).</p>
                    <h3 className="text-xl font-bold text-[#1E293B] mb-2">Can I change my statutory agent later?</h3>
                    <p className="mb-6">Yes - you can change your registered agent anytime by filing the required form with the state. Many businesses switch agents when they want better service or pricing.</p>
                    <h3 className="text-xl font-bold text-[#1E293B] mb-2">Can I Use the Same Registered Agent for My LLC in Multiple States?</h3>
                    <p className="mb-6">Each state where your LLC is registered requires a separate statutory agent with a physical address within that state. Many professional registered agent services — including Incorp Bay — can fulfill this role in all 50 states.</p>
                    <h3 className="text-xl font-bold text-[#1E293B] mb-2">What If I Run My LLC from Home?</h3>
                    <p className="mb-6">You can use your home address, but doing so puts your personal information in public records and could lead to legal papers being served at your home. A registered agent service gives you a business address instead, keeping your personal life separate and your privacy protected.</p>
                    <h3 className="text-xl font-bold text-[#1E293B] mb-2">What Happens If My Registered Agent Goes Out of Business?</h3>
                    <p className="mb-6">If your registered agent ceases operations, the state will notify you at your last known address. You&apos;ll need to appoint a new agent promptly to stay in good standing. Most reputable services have continuity plans, so this rarely happens — but it&apos;s smart to check.</p>
                    <h3 className="text-xl font-bold text-[#1E293B] mb-2">If my registered agent goes out of business, how quickly do I need to find a new one?</h3>
                    <p className="mb-6">As soon as possible. Your LLC could face penalties or be marked as noncompliant if you don&apos;t have an active agent. Most states give you 30 days to appoint a new one. Using a reliable service reduces this risk significantly.</p>
                    <h3 className="text-xl font-bold text-[#1E293B] mb-2">How does a registered agent get notified?</h3>
                    <p className="mb-8">When legal documents arrive, the state or court sends them to your registered agent&apos;s physical address. A professional service receives them on your behalf and immediately notifies you via email, text, and your online dashboard — often within minutes.</p>
                  </>
                )},
              ].map((section) => (
                <div key={section.id} className="mb-12 pb-12 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
                  <h2 id={section.id} className="text-3xl font-bold text-[#1E293B] mb-5 leading-snug">
                    {section.title}
                  </h2>
                  {section.content}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── CTA BANNER ───────────────────────────────────────── */}
        <div className="mx-5 my-12">
          <div className="relative bg-[#1E293B] rounded-[40px] overflow-hidden">
            <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#2B93C9]/15 to-transparent" />
            <div className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 w-80 h-80 bg-[#2B93C9]/25 rounded-full blur-[80px]" />

            <div className="grid md:grid-cols-2 items-center relative z-10">
              <div className="p-8 md:p-10">
                <span className={`${LOGO_GRADIENT} text-white text-sm font-semibold px-4 py-2 rounded-full`}>
                  Incorporate Now
                </span>

                <h2 className="text-3xl md:text-5xl font-bold leading-tight mt-4 text-white">
                  Launch Your <br />
                  Business With <br />
                  <span className={LOGO_GRADIENT_TEXT}>Incorp Bay</span>
                </h2>

                <p className="mt-4 text-base text-cyan-100 leading-relaxed">
                  No Contracts. No Surprises.
                  <br />
                  Only $0 + State Fee to Launch Your Business.
                </p>

                {/* Base reference button */}
                <Link
                  href="/form-a-llc"
                  className={`group relative inline-block mt-5 ${LOGO_GRADIENT} text-white text-sm font-semibold px-6 py-2.5 rounded-full overflow-hidden hover:brightness-110 hover:scale-[1.03] hover:shadow-[0_10px_35px_rgba(43,147,201,0.45)] transition-all duration-300`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2B93C9] to-[#33D1CC] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center gap-1">
                    START NOW <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </span>
                </Link>
              </div>

              <div className="flex justify-end">
                <Image
                  src="/Register-agent/Registered-agent-page-on-phone.webp"
                  alt="Launch Your Business"
                  width={560}
                  height={482}
                  className="object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </NavigationWrapper>
  );
};

export default RegisteredAgent;

