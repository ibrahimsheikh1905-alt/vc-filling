"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, FileText, Archive } from "lucide-react";
import NavigationWrapper from "@/components/NavigationWrapper";

const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";

const LOGO_GRADIENT_VERTICAL =
  "bg-[linear-gradient(180deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";

const LOGO_GRADIENT_TEXT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent";

const benefits = [
  {
    no: "1",
    title: "Get Your Own Personalized Corporate Binder",
    text: "A handcrafted kit you can display in your office while keeping your important documents together.",
  },
  {
    no: "2",
    title: "Keep Accurate Records with a Transfer Ledger",
    text: "Record corporation stock transactions, including anything that’s purchased, issued or sold.",
  },
  {
    no: "3",
    title: "Certificates to Formalize Business Ownership",
    text: "Get 20 security certificates for LLC members or corporate stockholders to formalize your business ownership.",
  },
  {
    no: "4",
    title: "Get Your Customized Company Seal & Embosser",
    text: "Seal important business documents with a custom embosser of your company name, state and date of formation.",
  },
  {
    no: "5",
    title: "Always Find the Information You Need",
    text: "Find what you need fast with tabbed separators, to stay organized throughout the life of your business.",
  },
];

const faqs = [
  {
    q: "How Much Does Your Corporate Kit Service Cost?",
    a: "Our corporate kit service costs $99. It is a great value LLC business starter kit and it is delivered to you for free.",
  },
  {
    q: "Are There Any Hidden Costs?",
    a: "Absolutely not. We keep everything transparent. There are no hidden costs involved in getting your corporate kit.",
  },
  {
    q: "How Long Will It Take to Receive My Kit?",
    a: "Kits are prepared quickly and shipped to your provided address after processing.",
  },
  {
    q: "Are There Any Guides or Resources?",
    a: "Yes, you can use our business resources to understand how to manage your company documents properly.",
  },
];

export default function CorporateKitPage() {
  return (
    <NavigationWrapper>
    <main className="bg-white text-[#071329]">
      {/* HERO */}
      <section className="mx-auto max-w-[1280px] px-5 pt-10 pb-16 md:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="max-w-[560px]">
            <h1 className="text-[44px] font-bold leading-[1.05] tracking-[-2px] text-black md:text-[60px]">
              Get Established with Incorp Bay&apos;s Corporate Kit
            </h1>

            <p className="mt-5 max-w-[500px] text-[18px] leading-[1.45] text-[#0b1b32]">
              Easily create and manage your business. Keep your documents neat
              and organized using Incorp Bay&apos;s business formation kit.
            </p>

<Link
              href="/kit-info/step-1"
              className={`${LOGO_GRADIENT} group relative mt-10 inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_10px_35px_rgba(43,147,201,0.45)] active:translate-y-[1px]`}
            >
              <span className="absolute inset-x-0 top-0 h-1/2 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
              <span className="absolute -left-20 top-0 h-full w-12 -skew-x-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />
              <span className="relative z-10">ORDER YOUR LLC KIT NOW</span>
            </Link>
          </div>

          <div className="relative h-[430px] overflow-hidden rounded-[34px] bg-[#f3f5f7] md:h-[520px]">
            <Image
              src="/kit-info/Hero-corporate-llc-kit.webp"
              alt="Corporate LLC Kit"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="mx-auto max-w-[980px] px-5 pb-20">
        <div className="relative border-y border-[#dbe3ec] py-5 text-center">
          <span className="absolute -top-[5px] left-1/2 h-2 w-2 rounded-full bg-[#dbe3ec]" />
          <span className="absolute -bottom-[5px] left-1/2 h-2 w-2 rounded-full bg-[#dbe3ec]" />

          <p className="text-[20px] font-bold leading-snug text-[#071329] md:text-[22px]">
            Bootstrapped, Founder Led, Independently Owned{" "}
            <span className={`rounded bg-slate-50 px-1 font-bold ${LOGO_GRADIENT_TEXT}`}>
              Since 2004
            </span>{" "}
            with{" "}
            <span className={`rounded bg-slate-50 px-1 font-bold ${LOGO_GRADIENT_TEXT}`}>
              Over 1,000,000 Entrepreneurs
            </span>{" "}
            Served!
          </p>
        </div>
      </section>

      {/* RECORDS */}
      <RecordsSection />

      {/* BENEFITS */}
      <section className="mx-auto max-w-[1120px] px-5 py-20">
        <h2 className="text-center text-[30px] font-bold leading-tight text-black md:text-[36px]">
          Discover the Benefits of Incorp Bay&apos;s Business Formation Kit
        </h2>

        <p className="mx-auto mt-4 max-w-[560px] text-center text-[14px] leading-relaxed text-[#0b1b32]">
          Our business formation kit frees up your valuable time, so you can
          focus on what matters.
        </p>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <div className="relative h-[380px] overflow-hidden rounded-[18px] bg-[#f3f5f7] md:h-[450px]">
            <Image
              src="/kit-info/Steps-desktop-corporate-llc-kit.webp"
              alt="Business formation kit benefits"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-3">
            {benefits.map((item) => (
              <div
                key={item.no}
                className="flex gap-4 rounded-[14px] border border-[#dde4ec] bg-white p-3 shadow-sm"
              >
                <div className={`${LOGO_GRADIENT} flex h-[54px] min-w-[54px] items-center justify-center rounded-[8px] text-[28px] font-bold text-white`}>
                  {item.no}
                </div>

                <div>
                  <h3 className="text-[14px] font-bold text-black">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[12px] leading-[1.45] text-[#0b1b32]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="mx-auto max-w-[1080px] px-5 py-20">
        <h2 className="mb-10 text-center text-[30px] font-bold leading-tight text-black md:text-[36px]">
          How to Get Your Corporate Kit and Seal in Three Easy Steps
        </h2>

        <div className="space-y-5">
          <StepCard
            no="01"
            title="Discover the Right Entity for You"
            text="Choose your entity type and your state of formation. Supply us with your contact details and company information."
            img="/kit-info/Group-corporate-llc-kit-1.webp"
          />

          <StepCard
            no="02"
            title="Complete the Order Form"
            text="Fill in our simple, short online order form and pay the $99 business kit fee quickly and securely."
            img="/kit-info/Group-corporate-llc-kit-2.webp"
            reverse
          />

          <StepCard
            no="03"
            title="Your Kit and Seal Arrives"
            text="Your documents are delivered in a professional kit, complete with your company name stamped on the spine of the book."
            img="/kit-info/Group-corporate-llc-kit-3.webp"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[1040px] px-5 py-16">
        <h2 className="mb-8 text-[32px] font-bold leading-tight text-black md:text-[38px]">
          Common Questions About <br /> Corporate Kit
        </h2>

        <div className="max-w-[900px]">
          {faqs.map((faq, index) => (
            <details
              key={faq.q}
              className="group border-b border-[#d9e1eb] py-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5">
                <div className="flex items-center gap-4">
                  <span className={`text-sm font-bold ${LOGO_GRADIENT_TEXT}`}>
                    {index + 1}
                  </span>
                  <h3 className="text-[16px] font-bold text-black">
                    {faq.q}
                  </h3>
                </div>
                <ChevronDown className="h-5 w-5 text-slate-400 transition group-open:rotate-180 group-open:text-[#2B93C9]" />
              </summary>

              <p className="mt-4 max-w-[720px] pl-8 text-[14px] leading-relaxed text-[#0b1b32]">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
<section className="mx-auto max-w-4xl px-5 pb-16">
  <div className={`${LOGO_GRADIENT} relative overflow-hidden rounded-[32px] border border-white/10 px-6 py-6 shadow-2xl sm:px-10 sm:py-8`}>
    <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#33D1CC]/20 to-transparent" />
    <div className="pointer-events-none absolute right-1/4 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[#33D1CC]/30 blur-[80px]" />

    <div className="relative z-10 flex flex-col items-center text-center">
      <span className="inline-block rounded-full border border-white/15 bg-white/12 px-3 py-1 text-xs font-bold text-white backdrop-blur">
        Incorp Bay
      </span>

      <h2 className="mt-4 max-w-lg text-2xl font-bold leading-tight text-white sm:text-3xl">
        Get Your Business Formation Kit Today
      </h2>

      <p className="mt-3 max-w-md text-sm leading-6 text-white/80">
        Stay organized with a premium Corporate Kit, company seal,
        ownership certificates and professional business records.
      </p>

<Link
        href="/kit-info/step-1"
        className="group relative mt-5 inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-7 py-3 text-xs font-bold uppercase tracking-wide shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <span className="absolute inset-0 bg-[#2B93C9]/0 transition-colors duration-300 group-hover:bg-[#2B93C9]/5" />
        <span className="absolute -left-16 top-0 h-full w-10 -skew-x-12 bg-[#2B93C9]/10 blur-sm transition-all duration-700 group-hover:left-[120%]" />
        <span className={`relative z-10 ${LOGO_GRADIENT_TEXT}`}>ORDER YOUR LLC KIT NOW</span>
      </Link>
    </div>
  </div>
</section>

</main>
    </NavigationWrapper>
  );
}

function RecordsSection() {
  const recordsSteps = [
    {
      id: 1,
      icon: FileText,
      title: "Starting and Managing a Business Involves a Lot of Paperwork",
      desc: "When you run your own business, there are so many things to do that paperwork often gets pushed down to the bottom of the to-do list. But as a business owner, you’re legally obligated to keep complete and accurate records. Your records must contain formation paperwork, shareholder information, resolutions, meeting minutes and licenses, as well as other important and formal documents.",
    },
    {
      id: 2,
      icon: Archive,
      title: "Make Your Life Easier with Incorp Bay’s LLC Corporate Kit",
      desc: "Incorp Bay’s LLC corporate kit is made up of a binder of forms, certificates, papers and other items beautifully produced and personalized for your business. It helps keep your business records safe, organized and ready whenever you need them.",
    },
  ];

  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<HTMLDivElement[]>([]);
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame: number | null = null;
    let start: number | null = null;
    const duration = 7000;

    const animate = (time: number) => {
      if (!start) start = time;
      setProgress(((time - start) % duration) / duration);
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => {
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useLayoutEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      const track = trackRef.current;
      const icons = iconRefs.current.filter((el): el is HTMLDivElement => Boolean(el));

      if (!container || !track || icons.length < 2) return;

      const containerRect = container.getBoundingClientRect();
      const firstRect = icons[0].getBoundingClientRect();
      const secondRect = icons[1].getBoundingClientRect();

      const startX = firstRect.left - containerRect.left + firstRect.width / 2;
      const startY = firstRect.top - containerRect.top + firstRect.height / 2;
      const endY = secondRect.top - containerRect.top + secondRect.height / 2;
      const trackHeight = Math.max(endY - startY, 0);

      track.style.left = `${startX}px`;
      track.style.top = `${startY}px`;
      track.style.height = `${trackHeight}px`;
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const fill = fillRef.current;
    if (!track || !fill) return;

    const trackHeight = parseFloat(track.style.height) || 0;
    fill.style.height = `${Math.min(progress * trackHeight, trackHeight)}px`;
  }, [progress]);

  const currentActiveStep = Math.min(
    Math.floor(progress * recordsSteps.length) + 1,
    recordsSteps.length
  );

  return (
    <section className="mx-auto max-w-[1180px] px-5 pb-24">
      <h2 className="mb-14 text-center text-[40px] font-bold leading-tight tracking-[-1px] text-black md:text-[50px]">
        Keep Your Records Complete
      </h2>

      <div className="grid items-center gap-14 lg:grid-cols-[520px_1fr] lg:gap-16">
        <div ref={containerRef} className="relative w-full py-6">
          <div
            ref={trackRef}
            className="absolute z-0 w-1 -translate-x-1/2 overflow-hidden rounded-full bg-slate-100"
            style={{ top: 0, left: 0, height: 0 }}
          >
            <div
              ref={fillRef}
              className={`${LOGO_GRADIENT_VERTICAL} w-full origin-top rounded-full`}
              style={{ height: 0 }}
            />
          </div>

          {recordsSteps.map((step, idx) => {
            const StepIcon = step.icon;
            const stepSize = 1 / recordsSteps.length;
            const isPassed = progress >= idx * stepSize;
            const isCurrent = currentActiveStep === idx + 1;

            return (
              <div
                key={step.id}
                className={`relative z-10 flex w-full select-none flex-row items-start ${
                  idx === recordsSteps.length - 1 ? "mb-0" : "mb-16"
                }`}
              >
                <div
                  ref={(el: HTMLDivElement | null) => {
                    if (el) iconRefs.current[idx] = el;
                  }}
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ease-out ${
                    isPassed
                      ? "scale-105 border-[#2B93C9] bg-slate-50 text-[#2B93C9] shadow-md"
                      : "border-slate-300 bg-white text-slate-400"
                  } ${isCurrent ? "ring-4 ring-[#33D1CC]/20" : ""}`}
                >
                  <StepIcon className="h-5 w-5" strokeWidth={2.5} />
                </div>

                <div className="w-full pl-4 text-left">
                  <h3 className={`text-[20px] font-bold leading-snug ${LOGO_GRADIENT_TEXT}`}>
                    {step.title}
                  </h3>

                  <p className="mt-4 text-[16px] leading-8 text-black">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative h-[520px] overflow-hidden rounded-[34px] bg-slate-100 shadow-[0_30px_70px_rgba(15,23,42,.12)] md:h-[650px]">
          <Image
            src="/kit-info/Info-corporate-llc-kit-1.webp"
            alt="Corporate records kit"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function StepCard({
  no,
  title,
  text,
  img,
  reverse = false,
}: {
  no: string;
  title: string;
  text: string;
  img: string;
  reverse?: boolean;
}) {
  return (
    <div className="grid items-center gap-6 overflow-hidden rounded-[14px] border border-[#d9e1eb] bg-white p-4 md:grid-cols-2">
      <div className={`${reverse ? "md:order-2" : ""} px-2 md:px-5`}>
        <div className={`mb-2 text-[15px] font-bold ${LOGO_GRADIENT_TEXT}`}>
          {no}
        </div>

        <h3 className="text-[20px] font-bold text-black">{title}</h3>

        <p className="mt-3 max-w-[430px] text-[13px] leading-relaxed text-[#0b1b32]">
          {text}
        </p>
      </div>

      <div
        className={`relative h-[190px] overflow-hidden rounded-[10px] bg-[#f3f5f7] md:h-[230px] ${
          reverse ? "md:order-1" : ""
        }`}
      >
        <Image src={img} alt={title} fill className="object-cover" />
      </div>
    </div>
  );
}
