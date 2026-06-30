"use client";

import { Search, Download, CreditCard, ShieldCheck, FileOutput, CheckCircle, Building, LockKeyhole, Boxes, RefreshCw } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import NavigationWrapper from "@/components/NavigationWrapper";

const DBA = () => {
  const [activeSection, setActiveSection] = useState("");

  // Raw 0..1 progress values — updated every animation frame
  const [howRaw, setHowRaw] = useState(0);   // 0 → 1 in 15s, loops
  const [whyRaw, setWhyRaw] = useState(0);   // 0 → 1 in 14s, loops

  const HOW_DURATION = 15000; // 15s for 5 steps
  const WHY_DURATION = 14000; // 14s for 4 steps

  const howToFile = [
    { icon: Search,     title: "Find the Right Filing Authority", desc: "This is usually the Secretary of State, but in some cases it's handled at the county level. If that's the case where you operate, you'll need to register in every county you do business in." },
    { icon: Download,   title: "Download, Fill Out, and Submit the Form",   desc: "Head to the relevant website's DBA section. Some states allow online filing, while others still require faxing or mailing your forms." },
    { icon: CreditCard, title: "Pay the Filing Fee",                            desc: "Fees vary depending on your state and business type, so check ahead of time." },
    { icon: ShieldCheck,title: "Understand That a DBA Doesn't Protect Your Name",        desc: "A DBA alone won't stop someone else from using your business name. To truly secure it, you'll want to form an LLC or corporation — or better yet, trademark it." },
    { icon: FileOutput, title: "Stay on Top of Your Taxes",                               desc: "DBA or not, taxes still apply. How you file depends on how your business is structured." },
  ];

  const whyFileDba = [
    { number: "1", title: "Location-Specific Branding",  desc: "Have multiple locations? A DBA lets each one operate under its own unique name while still falling under the same business entity.",                                                                            legalName: "Acme LLC",     dbaName: "Acme Chicago" },
    { number: "2", title: "Privacy",                     desc: "Without registering as an LLC, corporation, or nonprofit, your business defaults to your personal name. A DBA gives you a layer of separation.",                                  legalName: "John Doe",     dbaName: "Doe Consulting" },
    { number: "3", title: "Product Flexibility",         desc: "Running more than one business? DBAs help you give each venture its own identity, making it easier for clients to understand what you offer.",                                                               legalName: "Apex Corp",    dbaName: "Apex Tech Labs" },
    { number: "4", title: "Easier Rebranding",      desc: "If your LLC name no longer reflects where your brand is headed, a DBA lets you update your public-facing identity without starting from scratch.",                               legalName: "Old Brand LLC",dbaName: "Nova Digital" },
  ];

  // ─── Smooth continuous RAF loops ──────────────────────────────────────────
  useEffect(() => {
    let raf: number;
    let start: number | null = null;
    const tick = (ts: number) => {
      if (!start) start = ts;
      setHowRaw(((ts - start) % HOW_DURATION) / HOW_DURATION);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    let raf: number;
    let start: number | null = null;
    const tick = (ts: number) => {
      if (!start) start = ts;
      setWhyRaw(((ts - start) % WHY_DURATION) / WHY_DURATION);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // ─── Derived values from raw progress ─────────────────────────────────────
  // howRaw goes 0→1 over 15s.
  // We map it to a "virtual position" 0 → N (number of steps).
  // e.g. at howRaw=0.4, virtualPos = 0.4 * 5 = 2.0  → step index 2 is active.
  // fillPct for the line = (virtualPos / (N-1)) * 100
  // This makes the line travel smoothly from step-0 centre to step-(N-1) centre
  // without any pause — it's pure linear interpolation.

  const howN = howToFile.length;   // 5
  const whyN = whyFileDba.length;  // 4

  const howVirtual   = howRaw * howN;                          // 0 → 5
  const howActiveIdx = Math.min(Math.floor(howVirtual), howN - 1);
  // Smooth fill: goes from 0% (at virtualPos=0) to 100% (at virtualPos=howN-1)
  const howFillPct   = Math.min((howVirtual / (howN - 1)) * 100, 100);

  const whyVirtual   = whyRaw * whyN;
  const whyActiveIdx = Math.min(Math.floor(whyVirtual), whyN - 1);
  const whyFillPct   = Math.min((whyVirtual / (whyN - 1)) * 100, 100);

  // ─── Data ─────────────────────────────────────────────────────────────────
  const whoNeedsImages = [
    "/dba/who-needs-a-dba-1.webp",
    "/dba/who-needs-a-dba-2.webp",
    "/dba/who-needs-a-dba-3.webp",
  ];

const tocItems = [
    ["Why File DBA?",                                          "#why-file-dba-section"],
    ["How to File a DBA",                                     "#how-to-file-dba-section"],
    ["When Do You Need a Certificate of Good Standing?",      "#good-standing-section"],
    ["Trademark vs. DBA — Can You Have One Without the Other?","#trademark-vs-dba"],
    ["What Is a Trademark?",                                  "#what-is-trademark"],
    ["What Is a DBA?",                                        "#what-is-dba"],
    ["DBA vs. Trademark: How to Decide",                      "#dba-vs-trademark"],
    ["Can You Trademark a DBA?",                              "#trademark-a-dba"],
    ["Get DBA and Trademark Help from Incorp Bay",            "#getting-help"],
    ["Worried About the Costs of Trademark Registrations?",   "#worried-about-costs"],
  ];

  const trademarkBenefits = [
    { title: "Offers brand protection",               desc: 'Prevents others from using the same company or product name, logo or tagline. (Think of Budweiser\'s "King of Beers" catchphrase. That has a trademark!) This helps protect your brand and reputation, especially when others are trying to take advantage of your success.' },
    { title: "Ensures exclusive rights",              desc: "The protection for a trademarked name is nationwide and begins as soon as the trademark takes effect. So even though your business is known only in Boston — for now — your trademark is protected in New York, Los Angeles and everywhere in between." },
    { title: "Can be a major asset",                  desc: "Many companies use their trademark to sell franchises. A successfully trademarked business can also attract potential buyers and help increase selling value." },
    { title: "Bolsters a company's business and reputation", desc: "Promotes the business that you are in and the products that you are selling through name, logo, and slogan recognition. A trademarked name and logo also helps represent what a business stands for." },
    { title: "Use of registration mark",              desc: "A trademark allows you to use the ® symbol, adding to the validity of your product and acting as a deterrent against others who may want to steal your name or logo." },
    { title: "Shields against trademark infringement",desc: 'Having a trademark protects against others applying for a similar trademark. It also does not allow a competitor to infringe on a trademark by playing dumb and using the "I did not know" defense.' },
    { title: "Protection under the law",              desc: "A trademark allows you to sue for damages. It also allows the U.S. Customs and Border Protection to block imports that infringe on your trademark. For example, knockoffs from other countries." },
  ];

  const dbaFeatures = [
    { title: "Easy to set up",                   desc: "The filing process is not as complicated or as costly as setting up as registering a trademark." },
    { title: "Avoids using your real name",       desc: "A DBA lets you create a catchy and memorable name for your business that's different from your registered entity name. This, however, opens a business owner to the risk of other people or businesses using that same name or a variation of it." },
    { title: "Limited to a local market/area",   desc: "A DBA does not extend across the country and is primarily allowed in a limited area." },
    { title: "A DBA does not form a business entity", desc: "Rather, it allows you to use a fictitious name for your business that differs from your actual name." },
    { title: "No protection from competitors",   desc: 'You cannot copyright or trademark your "fictitious" name or alias. Unlike the protections afforded to trademarks, your business assets and personal assets are not protected if you just file for a DBA.' },
  ];

  // ─── Intersection Observer ─────────────────────────────────────────────────
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(`#${e.target.id}`); }),
      { root: null, rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );
    tocItems.forEach(([_, link]) => {
      const el = document.getElementById(link.replace("#", ""));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    const el = document.getElementById(link.replace("#", ""));
    if (el) {
      const offsetPosition = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      window.history.pushState(null, "", link);
      setActiveSection(link);
    }
  };

  return (
    <NavigationWrapper>
      {/* HERO */}
      <div className="my-16 flex flex-col-reverse md:flex-row items-center max-w-7xl mx-auto px-4">
        <div className="flex-1">
          <p className="md:pl-20 pt-10 max-sm:mx-5 text-sm font-semibold text-[#1E293B]">
            Excellent 4.7 out of 5 ★ Trustpilot
          </p>
<h1 className="text-5xl font-bold py-6 md:pl-20 max-sm:mx-5 leading-tight text-[#1E293B]">
            File a DBA or Fictitious Business Name
          </h1>
<p className="md:text-xl md:pl-20 max-sm:mx-5 pb-8 text-slate-600">
            Doing business under a name that isn't your own? You'll probably need a DBA. The good news — Incorp Bay makes the whole process simple.
          </p>
          <div className="md:pl-20 max-sm:mx-5">
<Link
              href="/fictitious-business-name/step-1"
              className="group relative bg-[#06B6D4] text-white font-bold px-10 py-5 rounded-full inline-flex items-center gap-1 overflow-hidden transition-all duration-300
                hover:scale-105 hover:shadow-[0_0_16px_3px_rgba(6,182,212,0.3)]
                active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4] to-[#0891b2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-1">
                FILE ASSUMED BUSINESS NAME <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </span>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Image src="/dba/file-dba-hero.webp" alt="File Dba Hero" width={750} height={650} className="rounded-3xl" />
        </div>
</div>

{/* Tagline between Hero and Who Needs a DBA */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-gradient-to-r from-slate-100 to-slate-50 rounded-2xl py-4 px-8 text-center shadow-sm border border-slate-200">
          <p className="text-lg text-slate-600 font-medium">
            <span className="font-bold text-[#06B6D4]">Bootstrapped, Founder Led, Independently Owned</span>
            <span className="mx-3 text-slate-400">|</span>
            <span className="font-semibold text-slate-700">Since 2004</span>
            <span className="mx-3 text-slate-400">With</span>
            <span className="font-bold text-[#06B6D4]">Over 1,000,000 Entrepreneurs Served!</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">

        {/* WHO NEEDS A DBA */}
        <div className="bg-slate-50 rounded-3xl mx-5 py-16 px-6 md:px-10">
<h2 className="text-center text-4xl font-bold text-[#1E293B] mb-6">Who Needs a DBA?</h2>
          <p className="text-center max-w-3xl mx-auto text-slate-600 mb-12">
            If you're running a sole proprietorship or partnership, chances are you'll need a DBA. Since you're unincorporated, you never filed formation paperwork or officially chose a business name — which means your legal name automatically becomes your business name. A DBA fixes that.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {whoNeedsImages.map((src, idx) => (
              <div key={src} className="bg-white rounded-2xl shadow-sm p-4 flex items-center justify-center">
                <Image src={src} alt={`Who Needs A Dba ${idx + 1}`} width={400} height={300} className="rounded-xl" />
              </div>
            ))}
          </div>
        </div>

        {/* ── WHY FILE DBA ─────────────────────────────────────────────────────── */}
        <div id="why-file-dba-section" className="scroll-mt-24 py-20 mx-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Card */}
            <div className="relative bg-[#1E293B] rounded-3xl p-8 min-h-[340px] flex items-center justify-center">
              <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-10 rounded-lg bg-[#06B6D4]/10 flex items-center justify-center text-[#06B6D4] font-bold text-xs">DBA</span>
                  <p className="font-bold text-[#1E293B]">DBA (Doing Business As)</p>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-slate-50 rounded-lg px-3 py-3 text-xs text-slate-400">Legal Registered Name</div>
                  <div className="bg-slate-50 rounded-lg px-3 py-3 text-xs text-slate-400">DBA Name</div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-50 rounded-lg px-3 py-3 text-sm font-semibold text-[#1E293B] min-h-[48px] flex items-center transition-all duration-500">
                    {whyFileDba[whyActiveIdx].legalName}
                  </div>
                  <div className="bg-slate-50 rounded-lg px-3 py-3 text-sm font-semibold text-[#1E293B] min-h-[48px] flex items-center transition-all duration-500">
                    {whyFileDba[whyActiveIdx].dbaName}
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 right-8 bg-white rounded-xl shadow-lg px-4 py-3 text-left animate-pulse">
                <p className="text-xs font-semibold text-[#1E293B]">DBA Has Been</p>
                <p className="text-xs font-bold text-[#06B6D4]">Successfully Filed</p>
              </div>
            </div>

            {/* Steps */}
            <div>
              <h2 className="text-4xl font-bold text-[#1E293B] mb-10">Why File DBA?</h2>

              <div className="relative flex flex-col gap-6">

{/* ── Track line ── */}
                {/* bg grey line, positioned between first icon centre and last icon centre */}
                <div
                  className="absolute z-0 rounded-full bg-slate-100"
                  style={{ left: "23px", top: "24px", bottom: "24px", width: "4px", transform: "translateX(-50%)" }}
                >
                  {/* cyan fill — travels smoothly, NO transition so RAF drives it frame-by-frame */}
                  <div
                    className="absolute top-0 left-0 right-0 rounded-full bg-[#06B6D4]"
                    style={{ height: `${whyFillPct}%` }}
                  />
                </div>

                {whyFileDba.map((item, idx) => {
                  const isActive = whyActiveIdx === idx;
                  const isPassed = idx < whyActiveIdx;
                  return (
                    <div key={item.number} className="relative flex gap-6 items-start z-10">
                      {/* Icon circle */}
                      <div className="shrink-0 w-12 h-12 flex items-center justify-center">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center border-2 font-bold text-sm bg-white transition-all duration-300
                            ${isActive  ? "border-[#06B6D4] text-[#06B6D4] bg-cyan-50 scale-110 shadow-[0_0_0_5px_rgba(6,182,212,0.15)]"
                            : isPassed  ? "border-[#06B6D4] text-[#06B6D4] bg-cyan-50"
                            : "border-slate-200 text-slate-400"}`}
                        >
                          {item.number}
                        </div>
                      </div>
                      {/* Text */}
                      <div className="pt-2 flex-1">
                        <h3 className={`font-bold text-lg transition-colors duration-300 ${isActive ? "text-[#06B6D4]" : isPassed ? "text-cyan-600/60" : "text-[#1E293B]"}`}>
                          {item.title}
                        </h3>
                        <p className={`text-sm transition-all duration-300 ${isActive ? "text-slate-600 opacity-100" : "text-slate-400 opacity-50"}`}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ── HOW TO FILE A DBA ────────────────────────────────────────────────── */}
        <div id="how-to-file-dba-section" className="scroll-mt-24 py-16 mx-5">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-[#1E293B] mb-10">How to File a DBA</h2>

              <div className="relative flex flex-col gap-6">

{/* ── Track line ── */}
                <div
                  className="absolute z-0 rounded-full bg-slate-100"
                  style={{ left: "23px", top: "24px", bottom: "24px", width: "4px", transform: "translateX(-50%)" }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 rounded-full bg-[#06B6D4]"
                    style={{ height: `${howFillPct}%` }}
                  />
                </div>

                {howToFile.map((step, idx) => {
                  const StepIcon  = step.icon;
                  const isActive  = howActiveIdx === idx;
                  const isPassed  = idx < howActiveIdx;
                  return (
                    <div key={step.title} className="relative flex gap-6 items-start select-none z-10">
                      {/* Icon circle */}
                      <div className="shrink-0 w-12 h-12 flex items-center justify-center">
                        <div
                          className={`w-12 h-12 rounded-full border-2 flex items-center justify-center bg-white transition-all duration-300
                            ${isActive  ? "border-[#06B6D4] text-[#06B6D4] bg-cyan-50 scale-110 shadow-[0_0_0_5px_rgba(6,182,212,0.15)]"
                            : isPassed  ? "border-[#06B6D4] text-[#06B6D4] bg-cyan-50"
                            : "border-slate-200 text-slate-400"}`}
                        >
                          <StepIcon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="pt-2 flex-1">
                        <h3 className={`font-bold mb-1 transition-colors duration-300 ${isActive ? "text-[#06B6D4]" : isPassed ? "text-cyan-600/60" : "text-slate-400"}`}>
                          {step.title}
                        </h3>
                        <p className={`text-sm leading-relaxed transition-all duration-300 ${isActive ? "text-slate-700 opacity-100" : "text-slate-400 opacity-50"}`}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-center md:justify-end lg:sticky lg:top-24">
              <div className="relative group">
                <div className="absolute inset-0 bg-[#06B6D4]/10 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity" />
                <Image src="/dba/how-to-file-a-dba-phone.webp" alt="How to File a DBA" width={500} height={650} className="rounded-3xl relative z-10 shadow-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* TABLE OF CONTENTS + ARTICLE */}
        <div className="py-20 mx-5">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 items-start">

            <div className="w-full lg:sticky lg:top-24">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Table of Contents</p>
                <ul className="mt-4">
                  {tocItems.map(([title, link]) => (
                    <li key={link} className="border-t first:border-t-0 border-gray-200">
                      <a
                        href={link}
                        onClick={(e) => handleSmoothScroll(e, link)}
                        className={`flex justify-between gap-3 py-3 text-sm font-medium transition-colors duration-200 ${activeSection === link ? "text-[#06B6D4] font-bold" : "text-gray-800 hover:text-[#06B6D4]"}`}
                      >
                        {title}
                        <span className={activeSection === link ? "translate-x-1 transition-transform" : ""}>›</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full max-w-4xl text-slate-700 leading-7">
              <div id="good-standing-section" className="scroll-mt-24 mb-12">
                <h2 className="text-3xl font-bold text-[#1E293B] mb-6">When Do You Need a Certificate of Good Standing?</h2>
                <p className="mb-4 text-slate-600">
                  While expanding or managing your commercial setups, certain transactions demand validation of your legal footprint. You might need a Certificate of Good Standing when applying for business loans, registering to do business in another state (foreign qualification), or handling state-level renewals alongside your DBA management.
                </p>
              </div>

              <h2 id="trademark-vs-dba" className="scroll-mt-24 text-3xl font-bold text-[#1E293B] mb-4">Trademark vs. DBA — Can You Have One Without the Other?</h2>
              <p className="mb-4">You have a lot to consider when putting together your limited liability company. From assembling your team to establishing your mission, there&apos;s a lot to be done before you finally reach launch day.</p>
              <p className="mb-4">However, even in that flurry of activity, it&apos;s vital not to overlook the importance of protecting your company&apos;s assets. To that end, your company&apos;s name is among the most integral elements in your long-term success.</p>
              <p className="mb-8">Let&apos;s explore a DBA vs. trademark and how they might work together.</p>
              <Image src="/dba/file-dba-toc-1.webp" alt="File Dba Toc 1" width={800} height={450} className="rounded-2xl mb-3" />
              <p className="text-sm text-slate-500 mb-10">As the starting point of your brand, you&apos;ll have to decide if you need to trademark your company name or if a simple DBA—&ldquo;doing business as&rdquo; or fictitious name — is enough.</p>

              <h2 id="what-is-trademark" className="scroll-mt-24 text-3xl font-bold text-[#1E293B] mb-4">What Is a Trademark?</h2>
              <p className="mb-4">Imagine going through all the trouble of devising the perfect name for your business. You&apos;re excited and ready to make a difference. Then you realize that another company either already has the same name or has sprung up to capitalize on your business&apos;s success. Without a trademark for your business name, you have little to no defense against any emerging claims.</p>
              <p className="mb-4">A trademark ensures that you have legal ownership over elements integral to your company, such as its name, logo, or slogan. Look around. Examples of successful trademarks are everywhere. Think of company names and logos like Apple, McDonald&apos;s and Nike, or specific products like Jell-O, Post-it, ChapStick and Vaseline. They are all trademarked and protected, meaning only the company owning the trademark can use these names and benefit from the products.</p>
              <p className="mb-8">Filing for trademark rights isn&apos;t overly complicated, although the process of finding a name that 1) suits your business and 2) isn&apos;t already claimed can take a while. Once you file a trademark, it is infinitely renewable and recognized nationwide.</p>
              <h3 className="text-xl font-bold text-[#1E293B] mb-3">Benefits of Having a Trademark</h3>
              <p className="mb-4">A trademark can add value to your business. It also highlights company reliability and trustworthiness when it comes to offered products or services. Many of today&apos;s trademarked company names and products have entered into common everyday use. Think of how many times you&apos;ve asked for a Band-Aid every time you had a scrape or cut! Here are seven benefits of having a trademark.</p>
              <ol className="list-decimal pl-6 mb-8 space-y-3">
                {trademarkBenefits.map((b) => (
                  <li key={b.title}><span className="font-bold text-[#1E293B]">{b.title}.</span> {b.desc}</li>
                ))}
              </ol>

              <h2 id="what-is-dba" className="scroll-mt-24 text-3xl font-bold text-[#1E293B] mb-4">What Is a DBA?</h2>
              <p className="mb-4">A DBA name has less to do with legal protection than trademarks and should not be confused with the legal business entity of your company. In some cases, a sole proprietor will use a DBA to separate their business from their individual name, or a corporation may opt to conduct business with a DBA name rather than using their corporation&apos;s legal registered name.</p>
              <p className="mb-8">This distinction between your own or your organization&apos;s legal name is truly the only major benefit of a DBA name over other options.</p>
              <Image src="/dba/file-dba-toc-2.webp" alt="File Dba Toc 2" width={800} height={450} className="rounded-2xl mb-3" />
              <p className="text-sm text-slate-500 mb-10">While a DBA name certainly has its place (and may very well be ideal for your company), its usefulness as a marketing and brand development tool doesn&apos;t include any larger legal protections for your company or its meticulously selected name.</p>
              <h3 className="text-xl font-bold text-[#1E293B] mb-3">Key Features of a DBA</h3>
              <ol className="list-decimal pl-6 mb-8 space-y-3">
                {dbaFeatures.map((f) => (
                  <li key={f.title}><span className="font-bold text-[#1E293B]">{f.title}.</span> {f.desc}</li>
                ))}
              </ol>

              <h2 id="dba-vs-trademark" className="scroll-mt-24 text-3xl font-bold text-[#1E293B] mb-4">DBA vs. Trademark: How to Decide</h2>
              <p className="mb-4">So, we&apos;ve laid out a basic description for both trademark name and DBA name. Now, let&apos;s take a look at some key ways in which these two types of names compare.</p>
              <p className="mb-4"><span className="font-bold text-[#1E293B]">Protection.</span> Legal trademark and DBA names are designed for very different functions. As described above, a DBA creates a buffer between a legal entity as the name you use to market and promote your company, whereas a trademark name is inextricably concerned with the distinction between your company and others with names or even missions like it. If you have both of these needs, then you can easily file both a DBA and a trademark name, as this is a common practice among businesses.</p>
              <p className="mb-4"><span className="font-bold text-[#1E293B]">Name ownership.</span> If you really want to secure exclusive rights to your company&apos;s name — perhaps you&apos;re thinking long-term branding and expansion, which is never a bad idea — then you certainly will want to trademark. DBA names don&apos;t give you the right to claim anything about your business&apos;s name, at least not across the board. In many cases, businesses in an area can &ldquo;claim&rdquo; duplicate DBA names. Trademarks, however, are all about ownership of your name and the elements therein.</p>
              <p className="mb-4"><span className="font-bold text-[#1E293B]">Legal rights.</span> Aside from how you use your business name and your interest in having exclusive rights, you&apos;ll also need to fully understand the legal protections or lack thereof involved with each. Yes, we&apos;ve covered, but as the primary difference between trademark and DBA names, it bears repeating. DBAs offer virtually no legal rights. You have the right to use a name for your company, not to defend it against the competition. Trademarks and DBAs can work together to provide the best of both worlds though.</p>
              <p className="mb-8"><span className="font-bold text-[#1E293B]">Cost.</span> One key reason you should decide whether you want to secure a trademark vs. DBA name for your business is the cost involved. While trademark names can run into hundreds of dollars, a DBA name bears an incredibly affordable price, sometimes as low as $50. It all depends on the level of trademark (state vs. federal, the latter of which costs significantly more) you&apos;re seeking, and that&apos;s not even considering the potential need for legal assistance.</p>
              <Image src="/dba/file-dba-toc-3.webp" alt="File Dba Toc 3" width={800} height={450} className="rounded-2xl mb-3" />
              <p className="text-sm text-slate-500 mb-10">One key reason you should decide whether you want to secure a trademark vs. DBA name for your business is the cost involved.</p>

              <h2 id="trademark-a-dba" className="scroll-mt-24 text-3xl font-bold text-[#1E293B] mb-4">Can You Trademark a DBA?</h2>
              <p className="mb-4">If you want to use a DBA for a particular product or service, you can trademark your DBA, giving it the same legal protections provided to trademarked companies and brands.</p>
              <p className="mb-8">By having a trademark for your DBA, you gain all the benefits and protections of having a registered trademark. It keeps the competition from stealing your trade name or any similar sounding name and can also contribute to your unique brand identity.</p>

<h2 id="getting-help" className="scroll-mt-24 text-3xl font-bold text-[#1E293B] mb-4">Get DBA and Trademark Help from Incorp Bay</h2>
              <p className="mb-4">Understanding how DBAs and trademarks work together can save you a lot of headaches down the road. Building a business from the ground up is hard enough — you shouldn't have to navigate the paperwork alone.</p>
              <p className="mb-8">At Incorp Bay, we give entrepreneurs the tools and support they need to hit the ground running. Our DBA and Trademark filing services handle all the details so you can stay focused on what matters most: growing your business.</p>

              <h2 id="worried-about-costs" className="scroll-mt-24 text-3xl font-bold text-[#1E293B] mb-4">Worried About the Costs of Trademark Registrations?</h2>
              <p>Imagine the Cost of Not Doing it!</p>
            </div>
          </div>
        </div>

        {/* CTA BANNER */}
        <div className="mx-5 my-20">
          <div className="relative rounded-[40px] overflow-hidden p-10 md:p-16 text-center" style={{ background: 'linear-gradient(135deg, #1E293B 0%, #06B6D4 100%)' }}>

            {/* Decorative glows — same as reference */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#06B6D4]/15 to-transparent" />
            <div className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 w-80 h-80 bg-[#06B6D4]/25 rounded-full blur-[80px]" />

            <div className="relative z-10">
              <span className="bg-[#06B6D4] text-white text-sm font-semibold px-4 py-2 rounded-full">
                Incorporate Now
              </span>

              <h2 className="text-4xl md:text-6xl font-bold leading-tight mt-6 mb-6 text-white">
                Need A{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #60a5fa 0%, #06B6D4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>DBA</span>{' '}
                ASAP?
              </h2>

              <p className="max-w-2xl mx-auto text-lg text-blue-200 mb-10">
                We&apos;ll save you time by doing the paperwork for you. Just place an order and presto — you&apos;ll have an assumed business name in no time.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-10">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 shadow-sm">
                  <span className="font-bold text-white text-sm">147,693 ratings</span>
                  <span className="text-[#06B6D4]">★★★★★</span>
                  <span className="text-blue-100 font-semibold text-sm">Shopper Approved</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 shadow-sm">
                  <span className="font-bold text-white text-sm">25,569 reviews</span>
                  <span className="text-[#06B6D4]">★★★★★</span>
                  <span className="text-blue-100 font-semibold text-sm">Trustpilot</span>
                </div>
              </div>

<Link
                href="/fictitious-business-name/step-1"
                className="group relative bg-[#06B6D4] text-white font-bold px-10 py-5 rounded-full inline-flex items-center gap-1 overflow-hidden transition-all duration-300
                  hover:scale-105 hover:shadow-[0_0_16px_3px_rgba(6,182,212,0.3)]
                  active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4] to-[#0891b2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-1">
                  FILE AN ASSUMED BUSINESS NAME <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </NavigationWrapper>
  );
};

export default DBA;