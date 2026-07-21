"use client";

import { Search, Download, CreditCard, ShieldCheck, FileOutput, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavigationWrapper from "@/components/NavigationWrapper";

const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";
const LOGO_GRADIENT_VERTICAL =
  "bg-[linear-gradient(180deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";
const LOGO_GRADIENT_TEXT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
      {children}
    </div>
  );
}

const DBA = () => {
  const [activeSection, setActiveSection] = useState("");
  const [howRaw, setHowRaw] = useState(0);
  const [whyRaw, setWhyRaw] = useState(0);

  const HOW_DURATION = 15000;
  const WHY_DURATION = 14000;

  const howToFile = [
    { icon: Search,      title: "Find the Right Filing Authority", desc: "This is usually the Secretary of State, but in some cases it's handled at the county level. If that's the case where you operate, you'll need to register in every county you do business in." },
    { icon: Download,    title: "Download, Fill Out, and Submit the Form", desc: "Head to the relevant website's DBA section. Some states allow online filing, while others still require faxing or mailing your forms." },
    { icon: CreditCard,  title: "Pay the Filing Fee", desc: "Fees vary depending on your state and business type, so check ahead of time." },
    { icon: ShieldCheck, title: "Understand That a DBA Doesn't Protect Your Name", desc: "A DBA alone won't stop someone else from using your business name. To truly secure it, you'll want to form an LLC or corporation — or better yet, trademark it." },
    { icon: FileOutput,  title: "Stay on Top of Your Taxes", desc: "DBA or not, taxes still apply. How you file depends on how your business is structured." },
  ];

  const whyFileDba = [
    { number: "1", title: "Location-Specific Branding", desc: "Have multiple locations? A DBA lets each one operate under its own unique name while still falling under the same business entity.", legalName: "Acme LLC", dbaName: "Acme Chicago" },
    { number: "2", title: "Privacy", desc: "Without registering as an LLC, corporation, or nonprofit, your business defaults to your personal name. A DBA gives you a layer of separation.", legalName: "John Doe", dbaName: "Doe Consulting" },
    { number: "3", title: "Product Flexibility", desc: "Running more than one business? DBAs help you give each venture its own identity, making it easier for clients to understand what you offer.", legalName: "Apex Corp", dbaName: "Apex Tech Labs" },
    { number: "4", title: "Easier Rebranding", desc: "If your LLC name no longer reflects where your brand is headed, a DBA lets you update your public-facing identity without starting from scratch.", legalName: "Old Brand LLC", dbaName: "Nova Digital" },
  ];

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

  const howN = howToFile.length;
  const whyN = whyFileDba.length;

  const howVirtual   = howRaw * howN;
  const howActiveIdx = Math.min(Math.floor(howVirtual), howN - 1);
  const howFillPct   = Math.min((howVirtual / (howN - 1)) * 100, 100);

  const whyVirtual   = whyRaw * whyN;
  const whyActiveIdx = Math.min(Math.floor(whyVirtual), whyN - 1);
  const whyFillPct   = Math.min((whyVirtual / (whyN - 1)) * 100, 100);

  const whoNeedsImages = [
    "/fictitious-business/who-needs-a-dba-1.webp",
    "/fictitious-business/who-needs-a-dba-2.webp",
    "/fictitious-business/who-needs-a-dba-3.webp",
  ];

  const tocItems: [string, string][] = [
    ["Why File DBA?", "#why-file-dba-section"],
    ["How to File a DBA", "#how-to-file-dba-section"],
    ["When Do You Need a Certificate of Good Standing?", "#good-standing-section"],
    ["Trademark vs. DBA — Can You Have One Without the Other?", "#trademark-vs-dba"],
    ["What Is a Trademark?", "#what-is-trademark"],
    ["What Is a DBA?", "#what-is-dba"],
    ["DBA vs. Trademark: How to Decide", "#dba-vs-trademark"],
    ["Can You Trademark a DBA?", "#trademark-a-dba"],
    ["Get DBA and Trademark Help from Incorp Bay", "#getting-help"],
    ["Worried About the Costs of Trademark Registrations?", "#worried-about-costs"],
  ];

  const trademarkBenefits = [
    { title: "Offers brand protection", desc: 'Prevents others from using the same company or product name, logo or tagline. (Think of Budweiser\'s "King of Beers" catchphrase. That has a trademark!) This helps protect your brand and reputation, especially when others are trying to take advantage of your success.' },
    { title: "Ensures exclusive rights", desc: "The protection for a trademarked name is nationwide and begins as soon as the trademark takes effect. So even though your business is known only in Boston — for now — your trademark is protected in New York, Los Angeles and everywhere in between." },
    { title: "Can be a major asset", desc: "Many companies use their trademark to sell franchises. A successfully trademarked business can also attract potential buyers and help increase selling value." },
    { title: "Bolsters a company's business and reputation", desc: "Promotes the business that you are in and the products that you are selling through name, logo, and slogan recognition. A trademarked name and logo also helps represent what a business stands for." },
    { title: "Use of registration mark", desc: "A trademark allows you to use the ® symbol, adding to the validity of your product and acting as a deterrent against others who may want to steal your name or logo." },
    { title: "Shields against trademark infringement", desc: 'Having a trademark protects against others applying for a similar trademark. It also does not allow a competitor to infringe on a trademark by playing dumb and using the "I did not know" defense.' },
    { title: "Protection under the law", desc: "A trademark allows you to sue for damages. It also allows the U.S. Customs and Border Protection to block imports that infringe on your trademark. For example, knockoffs from other countries." },
  ];

  const dbaFeatures = [
    { title: "Easy to set up", desc: "The filing process is not as complicated or as costly as setting up as registering a trademark." },
    { title: "Avoids using your real name", desc: "A DBA lets you create a catchy and memorable name for your business that's different from your registered entity name. This, however, opens a business owner to the risk of other people or businesses using that same name or a variation of it." },
    { title: "Limited to a local market/area", desc: "A DBA does not extend across the country and is primarily allowed in a limited area." },
    { title: "A DBA does not form a business entity", desc: "Rather, it allows you to use a fictitious name for your business that differs from your actual name." },
    { title: "No protection from competitors", desc: 'You cannot copyright or trademark your "fictitious" name or alias. Unlike the protections afforded to trademarks, your business assets and personal assets are not protected if you just file for a DBA.' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(`#${e.target.id}`); }),
      { root: null, rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );
    tocItems.forEach(([, link]) => {
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
      <div className="min-h-screen bg-white text-[#1E293B] font-helvetica">

        {/* HERO */}
        <section className="px-6 md:px-16 py-16 max-w-7xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-12">
            <div className="flex-1 flex flex-col items-start text-left">
              <Badge>
                <span>Excellent 4.7 out of 5</span>
                <Star className="h-4 w-4 fill-[#2B93C9] text-[#2B93C9]" />
                <span>Trustpilot</span>
              </Badge>

              <h1 className="text-4xl md:text-5xl font-bold py-6 leading-tight text-[#1E293B]">
                File a DBA or <span className={LOGO_GRADIENT_TEXT}>Fictitious Business Name</span>
              </h1>

              <p className="text-lg md:text-xl pb-8 text-slate-600 max-w-lg leading-relaxed">
                Doing business under a name that isn&apos;t your own? You&apos;ll probably need a DBA. The good news — Incorp Bay makes the whole process simple.
              </p>

              <Link
                href="/fictitious-business-name/step-1"
                className={`${LOGO_GRADIENT} group relative overflow-hidden text-white font-bold text-sm px-7 py-3.5 rounded-full inline-flex items-center gap-2 transition-all duration-300 shadow-lg hover:scale-[1.03] hover:shadow-[0_10px_35px_rgba(43,147,201,0.45)] active:scale-95`}
              >
                {/* Top Gloss */}
                <span className="absolute inset-x-0 top-0 h-1/2 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
                {/* Shine Animation */}
                <span className="absolute -left-20 top-0 h-full w-12 -skew-x-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />

                <span className="relative z-10 flex items-center gap-2">
                  FILE ASSUMED BUSINESS NAME
                  <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </span>
              </Link>
            </div>

            <div className="flex-1 flex justify-center md:justify-end w-full">
              <Image
                src="/fictitious-business/file-dba-hero.webp"
                alt="File Dba Hero"
                width={750}
                height={650}
                className="rounded-3xl w-full max-w-[520px] h-auto"
                priority
              />
            </div>
          </div>
        </section>

        {/* Tagline */}
        <section className="px-6 md:px-16 py-6 max-w-7xl mx-auto">
          <div className="bg-slate-50 rounded-2xl py-4 px-8 text-center shadow-sm border border-slate-200">
            <p className="text-base md:text-lg text-slate-600 font-medium">
              <span className={`font-bold ${LOGO_GRADIENT_TEXT}`}>Bootstrapped, Founder Led, Independently Owned</span>
              <span className="mx-3 text-slate-400">|</span>
              <span className="font-semibold text-slate-700">Since 2004</span>
              <span className="mx-3 text-slate-400">With</span>
              <span className={`font-bold ${LOGO_GRADIENT_TEXT}`}>Over 1,000,000 Entrepreneurs Served!</span>
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 md:px-16">

          {/* WHO NEEDS A DBA */}
          <section className="bg-slate-50 rounded-3xl py-16 px-6 md:px-10">
            <h2 className="text-center text-4xl font-bold text-[#1E293B] mb-6">Who Needs a DBA?</h2>
            <p className="text-center max-w-3xl mx-auto text-slate-600 mb-12 leading-relaxed">
              If you&apos;re running a sole proprietorship or partnership, chances are you&apos;ll need a DBA. Since you&apos;re unincorporated, you never filed formation paperwork or officially chose a business name — which means your legal name automatically becomes your business name. A DBA fixes that.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {whoNeedsImages.map((src, idx) => (
                <div key={src} className="bg-white rounded-2xl shadow-sm p-4 flex items-center justify-center">
                  <Image src={src} alt={`Who Needs A Dba ${idx + 1}`} width={400} height={300} className="rounded-xl w-full h-auto" />
                </div>
              ))}
            </div>
          </section>

          {/* WHY FILE DBA */}
          <section id="why-file-dba-section" className="scroll-mt-24 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">

              <div className="relative rounded-3xl overflow-hidden min-h-[340px] flex items-center justify-center">
                <Image
                  src="/fictitious-business/Why-file-dba-info.webp"
                  alt="Why File DBA"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>

              <div>
                <h2 className="text-4xl font-bold text-[#1E293B] mb-10">Why File DBA?</h2>

                <div className="relative flex flex-col gap-6">
                  <div
                    className="absolute z-0 rounded-full bg-slate-100"
                    style={{ left: "23px", top: "24px", bottom: "24px", width: "4px", transform: "translateX(-50%)" }}
                  >
                    <div
                      className={`absolute top-0 left-0 right-0 rounded-full ${LOGO_GRADIENT_VERTICAL}`}
                      style={{ height: `${whyFillPct}%` }}
                    />
                  </div>

                  {whyFileDba.map((item, idx) => {
                    const isActive = whyActiveIdx === idx;
                    const isPassed = idx < whyActiveIdx;
                    return (
                      <div key={item.number} className="relative flex gap-6 items-start z-10">
                        <div className="shrink-0 w-12 h-12 flex items-center justify-center">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center border-2 font-bold text-sm bg-white transition-all duration-300
                              ${isActive  ? "border-[#2B93C9] text-[#2B93C9] bg-slate-50 scale-110 shadow-[0_0_0_5px_rgba(43,147,201,0.15)]"
                              : isPassed  ? "border-[#2B93C9] text-[#2B93C9] bg-slate-50"
                              : "border-slate-200 text-slate-400"}`}
                          >
                            {item.number}
                          </div>
                        </div>
                        <div className="pt-2 flex-1">
                          <h3 className="font-bold text-lg text-[#1E293B]">
                            {item.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-slate-600">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* HOW TO FILE A DBA */}
          <section id="how-to-file-dba-section" className="scroll-mt-24 py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#1E293B] mb-10">How to File a DBA</h2>

                <div className="relative flex flex-col z-10">
                  <div
                    className="absolute z-0 rounded-full bg-slate-100"
                    style={{ left: "23px", top: "24px", bottom: "88px", width: "4px", transform: "translateX(-50%)" }}
                  >
                    <div
                      className={`absolute top-0 left-0 right-0 rounded-full ${LOGO_GRADIENT_VERTICAL}`}
                      style={{ height: `${howFillPct}%` }}
                    />
                  </div>

                  {howToFile.map((step, idx) => {
                    const StepIcon  = step.icon;
                    const isActive  = howActiveIdx === idx;
                    const isPassed  = idx < howActiveIdx;
                    return (
                      <div key={step.title} className="relative flex gap-6 items-start select-none z-10 min-h-[112px]">
                        <div className="shrink-0 w-12 h-12 flex items-center justify-center">
                          <div
                            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center bg-white transition-all duration-300
                              ${isActive  ? "border-[#2B93C9] text-[#2B93C9] bg-slate-50 scale-110 shadow-[0_0_0_5px_rgba(43,147,201,0.15)]"
                              : isPassed  ? "border-[#2B93C9] text-[#2B93C9] bg-slate-50"
                              : "border-slate-200 text-slate-400"}`}
                          >
                            <StepIcon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
                          </div>
                        </div>
                        <div className="pt-2 flex-1">
                          <h3 className="font-bold mb-1 text-[#1E293B]">
                            {step.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-slate-600">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-center md:justify-end w-full">
                <div className="relative group w-full max-w-md">
                  <div className={`absolute inset-0 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity ${LOGO_GRADIENT}`} />
                  <Image
                    src="/fictitious-business/Startup-central-mobile-160.webp"
                    alt="How to File a DBA"
                    width={500}
                    height={650}
                    className="relative z-10 w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* TABLE OF CONTENTS + ARTICLE */}
          <section className="py-20">
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
                          className={`flex justify-between gap-3 py-3 text-sm font-medium transition-colors duration-200 ${activeSection === link ? `${LOGO_GRADIENT_TEXT} font-bold` : "text-gray-800 hover:text-[#2B93C9]"}`}
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
                  <p className="mb-4 text-slate-600 leading-relaxed">
                    While expanding or managing your commercial setups, certain transactions demand validation of your legal footprint. You might need a Certificate of Good Standing when applying for business loans, registering to do business in another state (foreign qualification), or handling state-level renewals alongside your DBA management.
                  </p>
                </div>

                <h2 id="trademark-vs-dba" className="scroll-mt-24 text-3xl font-bold text-[#1E293B] mb-4">Trademark vs. DBA — Can You Have One Without the Other?</h2>
                <p className="mb-4">You have a lot to consider when putting together your limited liability company. From assembling your team to establishing your mission, there&apos;s a lot to be done before you finally reach launch day.</p>
                <p className="mb-4">However, even in that flurry of activity, it&apos;s vital not to overlook the importance of protecting your company&apos;s assets. To that end, your company&apos;s name is among the most integral elements in your long-term success.</p>
                <p className="mb-8">Let&apos;s explore a DBA vs. trademark and how they might work together.</p>
                <Image src="/fictitious-business/file-dba-toc-1.webp" alt="File Dba Toc 1" width={800} height={450} className="rounded-2xl mb-3 w-full h-auto" />
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
                <Image src="/fictitious-business/file-dba-toc-2.webp" alt="File Dba Toc 2" width={800} height={450} className="rounded-2xl mb-3 w-full h-auto" />
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
                <Image src="/fictitious-business/file-dba-toc-3.webp" alt="File Dba Toc 3" width={800} height={450} className="rounded-2xl mb-3 w-full h-auto" />
                <p className="text-sm text-slate-500 mb-10">One key reason you should decide whether you want to secure a trademark vs. DBA name for your business is the cost involved.</p>

                <h2 id="trademark-a-dba" className="scroll-mt-24 text-3xl font-bold text-[#1E293B] mb-4">Can You Trademark a DBA?</h2>
                <p className="mb-4">If you want to use a DBA for a particular product or service, you can trademark your DBA, giving it the same legal protections provided to trademarked companies and brands.</p>
                <p className="mb-8">By having a trademark for your DBA, you gain all the benefits and protections of having a registered trademark. It keeps the competition from stealing your trade name or any similar sounding name and can also contribute to your unique brand identity.</p>

                <h2 id="getting-help" className="scroll-mt-24 text-3xl font-bold text-[#1E293B] mb-4">Get DBA and Trademark Help from Incorp Bay</h2>
                <p className="mb-4">Understanding how DBAs and trademarks work together can save you a lot of headaches down the road. Building a business from the ground up is hard enough — you shouldn&apos;t have to navigate the paperwork alone.</p>
                <p className="mb-8">At Incorp Bay, we give entrepreneurs the tools and support they need to hit the ground running. Our DBA and Trademark filing services handle all the details so you can stay focused on what matters most: growing your business.</p>

                <h2 id="worried-about-costs" className="scroll-mt-24 text-3xl font-bold text-[#1E293B] mb-4">Worried About the Costs of Trademark Registrations?</h2>
                <p>Imagine the Cost of Not Doing it!</p>
              </div>
            </div>
          </section>

          {/* CTA BANNER */}
          <section className="py-20">
            <div
              className={`${LOGO_GRADIENT} relative mx-auto max-w-4xl overflow-hidden rounded-[32px] border border-white/10 px-8 py-14 text-center shadow-2xl sm:px-14`}
            >
              <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#2B93C9]/20 to-transparent" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#33D1CC]/30 blur-[80px]" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <span className="rounded-full border border-white/15 bg-white/12 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  Incorporate Now
                </span>

                <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                  Need A DBA ASAP?
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 md:text-base">
                  We&apos;ll save you time by doing the paperwork for you. Just place an order and presto — you&apos;ll have an assumed business name in no time.
                </p>

                <Link
                  href="/fictitious-business-name/step-1"
                  className="group relative mt-8 overflow-hidden rounded-xl bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
                >
                  {/* Hover Shine */}
                  <span className="absolute inset-0 bg-[#2B93C9]/0 transition-colors duration-300 group-hover:bg-[#2B93C9]/5" />
                  {/* Animated Light */}
                  <span className="absolute -left-16 top-0 h-full w-10 -skew-x-12 bg-[#2B93C9]/10 blur-sm transition-all duration-700 group-hover:left-[120%]" />

                  <span className={`relative z-10 flex items-center gap-2 font-bold ${LOGO_GRADIENT_TEXT}`}>
                    GET STARTED
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

                <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-[11px] font-medium text-white/85">
                  <span className="rounded-full border border-white/15 bg-white/12 px-3 py-1">✓ No Hidden Fees</span>
                  <span className="rounded-full border border-white/15 bg-white/12 px-3 py-1">✓ Fast State Filing</span>
                  <span className="rounded-full border border-white/15 bg-white/12 px-3 py-1">✓ Secure Process</span>
                </div>

                <div className="mt-6 grid w-full max-w-sm grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-white/15 bg-white/12 px-3 py-3 backdrop-blur">
                    <p className="text-lg font-bold text-white">147K+</p>
                    <p className="text-[10px] text-white/75">Ratings</p>
                  </div>

                  <div className="rounded-2xl border border-white/15 bg-white/12 px-3 py-3 backdrop-blur">
                    <p className="text-lg font-bold text-white">25K+</p>
                    <p className="text-[10px] text-white/75">Reviews</p>
                  </div>

                  <div className="rounded-2xl border border-white/15 bg-white/12 px-3 py-3 backdrop-blur">
                    <p className="text-lg font-bold text-white">4.7★</p>
                    <p className="text-[10px] text-white/75">Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </NavigationWrapper>
  );
};

export default DBA;