"use client";

import {
  Search,
  Package,
  FileCheck,
  Shield,
  MapPin,
  Building2,
  Activity,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavigationWrapper from "@/components/NavigationWrapper";

const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";

const LOGO_GRADIENT_TEXT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent";

const BusinessLicense = () => {
  const [activeSection, setActiveSection] = useState("");

  const tocItems = [
    ["What Is a Business License?", "#what-is-license"],
    ["What Is a Business Permit?", "#what-is-permit"],
    [
      "What Licenses and Permits are Needed to Start a Business?",
      "#licenses-needed",
    ],
    ["Seven Common Types of Business Licenses and Permits", "#seven-types"],
    ["Licensing and Permitting Differences Between States", "#state-differences"],
    ["A Note on Federal Permits", "#federal-permits"],
    ["Prepare Your Company for Success", "#prepare-success"],
  ];

  const obtainingSteps = [
    {
      number: "1",
      icon: Search,
      title: "Research Requirements",
      desc: "Determine all business licenses and permits required at the federal, state, county and municipal level.",
    },
    {
      number: "2",
      icon: Package,
      title: "Prepare a Customized Package",
      desc: "Your package includes each of the proper license/permit applications related to your business and location.",
    },
    {
      number: "3",
      icon: FileCheck,
      title: "Filing Instructions and Documentation",
      desc: "List filing instructions, supporting document requirements, and fees.",
    },
  ];

  const licenseFactors = [
    {
      icon: Activity,
      title: "Industry",
      desc: "Regulations differ vastly across industries. A bakery needs a health department permit for safe food handling and inspections, while a software company likely won't.",
    },
    {
      icon: MapPin,
      title: "Location",
      desc: "Requirements vary by state, county, and even city. Always check with your local government for the latest regulations.",
    },
    {
      icon: Building2,
      title: "Business Structure",
      desc: "Sole proprietorships might have fewer licensing hurdles than LLCs or corporations.",
    },
    {
      icon: Shield,
      title: "Business Activities",
      desc: "Beyond your core business activities, consider any additional services you provide.",
    },
  ];

  const sevenTypes = [
    {
      title: "General business license",
      desc: "This is often the first license obtained, authorizing basic business operations within a specific location.",
    },
    {
      title: "Seller's permit",
      desc: "If you sell physical products, you'll most likely need a seller's permit.",
    },
    {
      title: "Home occupation permit",
      desc: "Working from home often requires a specific permit to comply with zoning regulations.",
    },
    {
      title: "Business signage permit",
      desc: "This allows you to display your business name and logo outside your place of business.",
    },
    {
      title: "Zoning permits",
      desc: "You might need a zoning permit to ensure your operation complies with designated land use.",
    },
    {
      title: "Building permits",
      desc: "Any construction or major renovations will likely require a building permit.",
    },
    {
      title: "Environmental permits",
      desc: "Businesses that generate waste or handle hazardous materials may need environmental permits.",
    },
  ];

  const stateDifferences = [
    {
      title: "Tech and e-commerce",
      desc: "Startup-heavy industries like tech or e-commerce might have specific state-level requirements.",
    },
    {
      title: "Licensed professionals",
      desc: "Licensing requirements for certain professionals may vary by state.",
    },
    {
      title: "Home-based businesses",
      desc: "Regulations for home-based businesses can differ from state to state.",
    },
  ];

  const federalSectors = [
    "Broadcasting and transportation may need federal licenses or permits.",
    "Manufacturing and distribution may require food, drug, or medical permits.",
    "Businesses with environmental impact may need EPA-related permits.",
    "Alcohol and tobacco businesses require special federal licensing.",
    "Farming and livestock businesses may need agriculture-related permits.",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(`#${e.target.id}`);
        }),
      { root: null, rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    tocItems.forEach(([, link]) => {
      const el = document.getElementById(link.replace("#", ""));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    e.preventDefault();

    const el = document.getElementById(link.replace("#", ""));

    if (el) {
      const offsetPosition =
        el.getBoundingClientRect().top + window.scrollY - 100;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      window.history.pushState(null, "", link);
      setActiveSection(link);
    }
  };

  return (
    <NavigationWrapper>
      <main className="bg-white text-[#1E293B]">
        {/* HERO */}
        <section className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 overflow-hidden px-4 py-16 md:flex-row">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#2B93C9 1px, transparent 1px), linear-gradient(90deg, #2B93C9 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 flex-1 max-sm:mx-5 md:pl-20">
            <p className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#1E293B] shadow-sm">
              Excellent 4.7 out of 5{" "}
              <span className="mx-1 text-[#2B93C9]">★</span> Trustpilot
            </p>

            <h1 className="py-6 text-5xl font-bold leading-tight text-[#1E293B]">
              Business License Research{" "}
              <span className={LOGO_GRADIENT_TEXT}>(Made Easy)</span>
            </h1>

<p className="pb-8 text-slate-600 md:text-xl">
              Navigating business licenses can feel overwhelming. Incorp Bay
              takes the guesswork out of it by doing the research for you — so
              you can focus on building your business.
            </p>

<Link
              href="/business-license/step-1"
              className={`${LOGO_GRADIENT} group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_35px_rgba(43,147,201,0.45)] active:scale-95`}
            >
              <span className="absolute inset-x-0 top-0 h-1/2 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
              <span className="absolute -left-20 top-0 h-full w-12 -skew-x-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />

              <span className="relative z-10 flex items-center gap-1">
                ORDER NOW{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          </div>

          <div className="relative z-10 flex flex-1 justify-center">
            <Image
              src="/Buisness-License/Business-license-hero.webp"
              alt="Business License Hero"
              width={750}
              height={650}
              className="w-full max-w-[520px] rounded-3xl"
            />
          </div>
        </section>

        <div className="mx-auto max-w-7xl">
{/* TRUST BAR */}
          <section className="mx-5 mb-16 border-y border-slate-100 py-6 text-center text-sm text-slate-500">
            Bootstrapped, Founder-Led, and Independently Owned —{" "}
            <span className={`font-bold ${LOGO_GRADIENT_TEXT}`}>Serving Over 1,000,000 Entrepreneurs Since 2004</span>
          </section>

          {/* PACKAGE */}
          <section className="mx-5 mb-16 rounded-3xl bg-[#F8FAFC] px-6 py-16 md:px-10">
            <h2 className="mb-6 text-center text-4xl font-bold text-[#1E293B]">
              What&apos;s in the Package?
            </h2>

            <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-slate-600">
              Business licensing rules vary by location, and government agencies
              often update filing requirements. Our trusted partner simplifies
              this by providing the latest forms and guidelines. Your customized
              Business License Research Package will arrive by email 3–4 weeks
              after your company is filed.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  src: "/Buisness-License/whats-in-the-package-info-group-1.webp",
                  alt: "Order Your Business License Research Package",
                },
                {
                  src: "/Buisness-License/whats-in-the-package-info-group-2.webp",
                  alt: "Receive Your Customized Package",
                },
                {
                  src: "/Buisness-License/whats-in-the-package-info-group-3.webp",
                  alt: "Receive Your Licenses and Permits",
                },
              ].map((img) => (
                <div
                  key={img.src}
                  className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={400}
                    height={300}
                    className="rounded-xl"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* OBTAINING */}
          <section className="mx-5 mb-16 py-16">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="flex justify-center">
                <div className="group relative">
                  <div className="absolute inset-0 rounded-3xl bg-[#2B93C9]/10 blur-2xl opacity-40 transition-opacity group-hover:opacity-60" />

                  <Image
                    src="/Buisness-License/using-ein-business-license-info.webp"
                    alt="Obtaining Business Licenses"
                    width={520}
                    height={600}
                    className="relative z-10 rounded-3xl shadow-xl"
                  />
                </div>
              </div>

              <div>
                <h2 className="mb-10 text-4xl font-bold text-[#1E293B]">
                  Obtaining Business Licenses and Permits
                </h2>

                <div className="flex flex-col gap-8">
                  {obtainingSteps.map((step) => {
                    const StepIcon = step.icon;

                    return (
                      <div
                        key={step.number}
                        className="group flex items-start gap-5"
                      >
                        <div className={`${LOGO_GRADIENT} flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-bold text-white shadow-md transition-transform duration-300 group-hover:scale-105`}>
                          {step.number}
                        </div>

                        <div>
                          <h3 className="mb-1 text-lg font-bold text-[#1E293B]">
                            {step.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-slate-500">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* ARTICLE */}
          <section className="mx-5 py-10">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[300px_1fr]">
              {/* TOC */}
              <aside className="w-full lg:sticky lg:top-24">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Table of Contents
                  </p>

                  <ul className="mt-4">
                    {tocItems.map(([title, link]) => (
                      <li
                        key={link}
                        className="border-t border-slate-100 first:border-t-0"
                      >
                        <a
                          href={link}
                          onClick={(e) => handleSmoothScroll(e, link)}
                          className={`flex justify-between gap-3 py-3 text-sm font-medium transition-colors duration-200 ${
                            activeSection === link
                              ? `font-bold ${LOGO_GRADIENT_TEXT}`
                              : "text-slate-700 hover:text-[#2B93C9]"
                          }`}
                        >
                          {title}
                          <span
                            className={
                              activeSection === link
                                ? "translate-x-1 transition-transform"
                                : ""
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

              {/* Content */}
              <article className="w-full max-w-4xl leading-7 text-slate-700">
                <section id="what-is-license" className="scroll-mt-24 mb-12">
                  <h2 className="mb-4 text-3xl font-bold text-[#1E293B]">
                    What Is a Business License?
                  </h2>
                  <p className="leading-relaxed text-slate-600">
                    Think of a business license as your official permission slip
                    from the state government authorizing you to operate in a
                    specific location. It&apos;s like a driver&apos;s license for
                    your business — a green light to conduct business legally.
                  </p>
                </section>

                <section id="what-is-permit" className="scroll-mt-24 mb-12">
                  <h2 className="mb-4 text-3xl font-bold text-[#1E293B]">
                    What Is a Business Permit?
                  </h2>
                  <p className="leading-relaxed text-slate-600">
                    A business permit, typically issued by a state or federal
                    agency after an inspection, ensures your startup adheres to
                    your industry&apos;s safety and health standards.
                  </p>
                </section>

                <section id="licenses-needed" className="scroll-mt-24 mb-12">
                  <h2 className="mb-4 text-3xl font-bold text-[#1E293B]">
                    What Licenses and Permits are Needed to Start a Business?
                  </h2>

                  <p className="mb-8 leading-relaxed text-slate-600">
                    To ensure compliance with local and federal regulations,
                    it&apos;s crucial to thoroughly research and understand the
                    specific licensing and permit requirements for your business.
                  </p>

                  <div className="grid gap-5 sm:grid-cols-2">
                    {licenseFactors.map((factor) => {
                      const FactorIcon = factor.icon;

                      return (
                        <div
                          key={factor.title}
                          className="group rounded-2xl border border-slate-100 bg-[#F8FAFC] p-6 transition-all duration-300 hover:border-[#2B93C9]/30 hover:shadow-md"
                        >
                          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#2B93C9]/10 transition-colors duration-300 group-hover:bg-[#2B93C9]/20">
                            <FactorIcon className="h-5 w-5 text-[#2B93C9]" />
                          </div>

                          <h3 className="mb-2 font-bold text-[#1E293B]">
                            {factor.title}
                          </h3>

                          <p className="text-sm leading-relaxed text-slate-500">
                            {factor.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-8">
                    <Image
                      src="/business-license/business-license-toc.webp"
                      alt="Business License"
                      width={800}
                      height={450}
                      className="mb-3 rounded-2xl"
                    />

                    <p className="text-sm text-slate-500">
                      A data breach can weaken a starting enterprise, eroding
                      trust, incurring hefty fines, and leading to legal trouble.
                    </p>
                  </div>
                </section>

                <section id="seven-types" className="scroll-mt-24 mb-12">
                  <h2 className="mb-4 text-3xl font-bold text-[#1E293B]">
                    Seven Common Types of Business Licenses and Permits
                  </h2>

                  <p className="mb-6 leading-relaxed text-slate-600">
                    The particular permits or licenses you need will vary
                    depending on your location and industry.
                  </p>

                  <ol className="space-y-4">
                    {sevenTypes.map((item, idx) => (
                      <li key={item.title} className="flex items-start gap-4">
                        <span className={`${LOGO_GRADIENT} flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white`}>
                          {idx + 1}
                        </span>

                        <div>
                          <span className="font-bold text-[#1E293B]">
                            {item.title}.{" "}
                          </span>
                          <span className="text-slate-600">{item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ol>
                </section>

                <section id="state-differences" className="scroll-mt-24 mb-12">
                  <h2 className="mb-4 text-3xl font-bold text-[#1E293B]">
                    Licensing and Permitting Differences Between States
                  </h2>

                  <p className="mb-6 leading-relaxed text-slate-600">
                    Business license and permit requirements vary significantly
                    from state to state.
                  </p>

                  <div className="space-y-4">
                    {stateDifferences.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-r-2xl border-l-4 border-[#2B93C9] bg-[#F8FAFC] py-4 pl-5 pr-6"
                      >
                        <h3 className="mb-1 font-bold text-[#1E293B]">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-600">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="federal-permits" className="scroll-mt-24 mb-12">
                  <h2 className="mb-4 text-3xl font-bold text-[#1E293B]">
                    A Note on Federal Permits
                  </h2>

                  <p className="mb-6 leading-relaxed text-slate-600">
                    While most businesses won&apos;t need federal permits, some
                    industries operate under federal government regulations.
                  </p>

                  <ul className="space-y-3">
                    {federalSectors.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm leading-relaxed text-slate-600"
                      >
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#2B93C9]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section id="prepare-success" className="scroll-mt-24 mb-12">
                  <h2 className="mb-4 text-3xl font-bold text-[#1E293B]">
                    Prepare Your Company for Success
                  </h2>

                  <p className="leading-relaxed text-slate-600">
                    Recognizing the distinctions between business licenses and
                    permits helps ensure that you comply with all local, state,
                    and federal regulations.
                  </p>
                </section>

<div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 text-xs leading-relaxed text-slate-500">
                  <p className="mb-1 font-bold text-slate-600">Disclaimer</p>
                  Incorp Bay and its affiliates do not provide tax, legal, or
                  accounting advice. This material is prepared for informational
                  purposes only.
                </div>
              </article>
            </div>
          </section>

          {/* CTA */}
          <section className="mx-5 my-12">
            <div
              className={`${LOGO_GRADIENT} relative mx-auto max-w-4xl overflow-hidden rounded-[32px] p-6 text-center shadow-2xl md:p-10`}
            >
              <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#33D1CC]/20 to-transparent" />

              <div className="pointer-events-none absolute right-1/4 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#33D1CC]/30 blur-[80px]" />

<div className="relative z-10">
                <span className="rounded-full border border-white/15 bg-white/12 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  Incorporate Now
                </span>

                <h2 className="mb-3 mt-4 text-2xl font-bold leading-tight text-white md:text-3xl">
                  Incorp Bay&apos;s Business License{" "}
                  <span
                    style={{
                      background:
                        "linear-gradient(135deg, #67E8F9 0%, #ffffff 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Research Package
                  </span>
                </h2>

                <p className="mx-auto mb-6 max-w-xl text-sm text-white/80">
                  With Incorp Bay&apos;s Business License Research Package,
                  you&apos;ll have everything you need to apply for the right licenses
                  and meet your business&apos;s specific requirements — all in one
                  place, ready to go.
                </p>

                <div className="mb-6 flex flex-col items-center justify-center gap-2 sm:flex-row">
                  <div className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/12 px-3 py-1.5 backdrop-blur-sm">
                    <span className="text-xs font-bold text-white">
                      147,797 ratings
                    </span>
                    <span className="text-xs text-white">★★★★★</span>
                    <span className="text-xs font-semibold text-white/80">
                      Shopper Approved
                    </span>
                  </div>

                  <div className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/12 px-3 py-1.5 backdrop-blur-sm">
                    <span className="text-xs font-bold text-white">
                      25,578 reviews
                    </span>
                    <span className="text-xs text-white">★★★★★</span>
                    <span className="text-xs font-semibold text-white/80">
                      Trustpilot
                    </span>
                  </div>
                </div>

<Link
                  href="/business-license/step-1"
                  className="group relative inline-flex items-center gap-1 overflow-hidden rounded-full bg-white px-7 py-3.5 text-sm font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
                >
                  <span className="absolute inset-0 bg-[#2B93C9]/0 transition-colors duration-300 group-hover:bg-[#2B93C9]/5" />
                  <span className="absolute -left-16 top-0 h-full w-10 -skew-x-12 bg-[#2B93C9]/10 blur-sm transition-all duration-700 group-hover:left-[120%]" />

                  <span className={`relative z-10 flex items-center gap-1 ${LOGO_GRADIENT_TEXT}`}>
                    ORDER NOW{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </NavigationWrapper>
  );
};

export default BusinessLicense;