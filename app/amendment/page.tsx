"use client";

import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { ShieldCheck, FileText, Settings, ClipboardList } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { statesInUS } from "@/data";
import NavigationWrapper from "@/components/NavigationWrapper";
import { Inter } from "next/font/google";

const entityTypes = ["LLC", "C-Corporation", "Partnership", "Nonprofit"];

const stateFees: Record<string, number> = {
  Alabama: 200,
  Alaska: 250,
  Arizona: 150,
  Arkansas: 300,
  California: 350,
  Colorado: 150,
  Connecticut: 350,
  Delaware: 200,
  Florida: 350,
  Georgia: 250,
  Hawaii: 150,
  Idaho: 150,
  Illinois: 350,
  Indiana: 150,
  Iowa: 150,
  Kansas: 200,
  Kentucky: 200,
  Louisiana: 300,
  Maine: 250,
  Maryland: 200,
  Massachusetts: 350,
  Michigan: 250,
  Minnesota: 250,
  Mississippi: 200,
  Missouri: 200,
  Montana: 150,
  Nebraska: 150,
  Nevada: 250,
  "New Hampshire": 250,
  "New Jersey": 250,
  "New Mexico": 150,
  "New York": 350,
  "North Carolina": 250,
  "North Dakota": 150,
  Ohio: 150,
  Oklahoma: 200,
  Oregon: 300,
  Pennsylvania: 300,
  "Rhode Island": 350,
  "South Carolina": 200,
  "South Dakota": 150,
  Tennessee: 300,
  Texas: 300,
  Utah: 200,
  Vermont: 150,
  Virginia: 200,
  Washington: 250,
  "West Virginia": 200,
  Wisconsin: 250,
  Wyoming: 150,
};

const serviceFee = 99;

// Timeline geometry
// icon is w-12 h-12 = 48px, center = 24px
const ICON_CENTER = 24; // px

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const Amendment = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedEntityType, setSelectedEntityType] = useState("");
  const [timelineProgress, setTimelineProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [mounted, setMounted] = useState(false);

  const whyFilingRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [trackHeightPx, setTrackHeightPx] = useState(0);

  const currentStateFee =
    selectedState && stateFees[selectedState] ? stateFees[selectedState] : 0;

  const totalPrice = selectedState ? serviceFee + currentStateFee : 0;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let current = 0;

          const interval = setInterval(() => {
            current += 1;

            if (current >= 100) {
              setTimelineProgress(100);
              setActiveStep(4);
              clearInterval(interval);
            } else {
              setTimelineProgress(current);

              if (current >= 0 && current < 28) setActiveStep(1);
              else if (current >= 28 && current < 58) setActiveStep(2);
              else if (current >= 58 && current < 88) setActiveStep(3);
              else if (current >= 88) setActiveStep(4);
            }
          }, 25);

          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (whyFilingRef.current) {
      observer.observe(whyFilingRef.current);
    }

    return () => observer.disconnect();
  }, [mounted]);

  const stepsData = [
    {
      title: "Stay Legally Compliant",
      desc: "Keeping your LLC's official records current helps you stay in line with state laws and steer clear of unnecessary fines or penalties.",
      icon: ClipboardList,
    },
    {
      title: "Keep Your Liability Protection Intact",
      desc: "Filing amendments helps preserve your LLC's limited liability protection by making sure your business information stays accurate and up to date.",
      icon: ShieldCheck,
    },
    {
      title: "Keep Public Records Accurate",
      desc: "Updating your LLC's details means banks, investors, vendors and other stakeholders always have access to correct information.",
      icon: FileText,
    },
    {
      title: "Keep Operations Running Smoothly",
      desc: "Current records help your business run without hiccups, especially during transactions where legal accuracy really matters.",
      icon: Settings,
    },
  ];

  useEffect(() => {
    const updateTrackHeight = () => {
      const firstStep = stepRefs.current[0];
      const lastStep = stepRefs.current[stepsData.length - 1];

      if (!firstStep || !lastStep) return;

      const firstCenter = firstStep.offsetTop + ICON_CENTER;
      const lastCenter = lastStep.offsetTop + ICON_CENTER;

      setTrackHeightPx(Math.max(lastCenter - firstCenter, 0));
    };

    updateTrackHeight();
    window.addEventListener("resize", updateTrackHeight);

    return () => window.removeEventListener("resize", updateTrackHeight);
  }, [mounted, stepsData.length]);

  // Fill height in px — capped at actual measured track height
  const fillHeightPx = (Math.min(timelineProgress, 100) / 100) * trackHeightPx;

  const faqData = [
    {
      id: "faq-1",
      question: "How Long Does It Take To Change a Company Name?",
      answer:
        "The filing time for Articles of Amendment typically takes four to six weeks, depending on the processing speeds of your specific Secretary of State. Some states offer expedited processing options for an additional fee if you need the updates approved quickly.",
    },
    {
      id: "faq-2",
      question: "How do i file out-of-state Articles of Amendment?",
      answer:
        "If you're filing an amendment for a business that's registered as a foreign entity in another state, you will need to submit the corresponding amendment forms to that specific state's governing business authority, adhering to their particular state guidelines and document requirements.",
    },
    {
      id: "faq-3",
      question:
        "What is the difference between Articles of Amendment and Restated Articles?",
      answer:
        "Articles of Amendment add to, delete, or change specific details in your original layout documents. Restated Articles combine your original articles and all subsequent updates or modifications into one single, clean, and comprehensive master document.",
    },
    {
      id: "faq-4",
      question:
        "Do I need to update my operating agreement after filing an amendment?",
      answer:
        "Yes, it is highly recommended. Whenever key structural parameters or entity records change at the state level, like a company name change or change in membership, you should update your internal Operating Agreement to maintain operational clarity.",
    },
  ];

  return (
    <NavigationWrapper>
      <div className={inter.className}>
      {/* Hero Section */}
      <div className="my-16 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        <div className="md:text-left max-sm:mx-5 w-full md:w-1/2">
          <h1 className="text-5xl font-bold pt-20 md:pl-20 max-sm:text-3xl text-[#1E293B]">
            File Articles of
          </h1>

          <h2 className="md:text-5xl max-sm:text-3xl font-bold md:pl-20 text-[#1E293B]">
            Amendment
          </h2>

          <h2 className="text-xl md:pl-20 py-10 pb-24 text-[#1E293B]">
            Here&apos;s how to update your LLC&apos;s name, address or member
            details.
          </h2>

          <Link
            href="/amendment/step-1"
            className="group relative px-10 md:ml-20 py-5 font-bold bg-[#06B6D4] text-white border border-[#06B6D4] rounded-[30px] overflow-hidden inline-flex items-center justify-center gap-2 transition-all duration-300 ease-in-out shadow-md hover:shadow-[0_8px_30px_rgba(6,182,212,0.5)] hover:-translate-y-1 active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4] to-[#0891b2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              ARTICLES OF AMENDMENT
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </span>
          </Link>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/free-llc/LLC green.jpg"
            alt="Free LLC"
            width={850}
            height={850}
            priority
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Count Section */}
        <div className="flex gap-4 items-center justify-center my-16 py-7 mx-3 md:flex-row flex-col">
          <div>
            <h3 className="md:text-5xl text-3xl font-bold py-2 uppercase text-[#1E293B]">
              Join <span className="text-[#06B6D4]">1,000,000+</span>
              <br />
              Entrepreneurs <br /> Like You
            </h3>

            <p className="text-xl text-[#1E293B] mt-4">
              Entrepreneurship is on the rise, and we&apos;re proud to be <br />
              one of America&apos;s fastest-growing companies.
            </p>
          </div>
        </div>

        {/* Info Block 1 */}
        <div className="md:flex items-center md:py-10 mx-4 px-1 gap-10">
          <div className="md:text-left md:w-1/2 md:px-16">
            <h3 className="md:text-5xl text-3xl font-bold text-[#1E293B]">
              What Are Articles of Amendment?
            </h3>

            <p className="md:text-xl text-base max-sm:pt-5 md:pt-5 text-slate-600">
              Articles of Amendment come into play when a company needs to make
              a major change to the Articles of Incorporation or Articles of
              Organization...
            </p>

            <p className="md:pt-8 md:text-xl text-base max-sm:py-3 text-slate-600">
              Businesses are always growing and changing, so at some point
              you&apos;ll likely need to update a few key details...
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center pt-10 md:pt-0">
            <Image
              src="/amendment/articles1.webp"
              alt="Articles Amendment"
              width={600}
              height={600}
            />
          </div>
        </div>

        {/* Info Block 2 Check-List */}
        <div className="md:flex justify-center gap-10 items-center py-10 mx-5">
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/amendment/articles2.webp"
              alt="Articles Amendment"
              width={600}
              height={600}
            />
          </div>

          <div className="md:text-left md:w-1/2 md:px-16 px-1">
            <h3 className="md:text-5xl text-2xl font-bold md:py-10 max-sm:pt-5 text-[#1E293B]">
              When Do I Need to File Articles of Amendment?
            </h3>

            <p className="md:text-xl text-base max-sm:pt-5 text-slate-600">
              You need to file Articles of Amendment with your Secretary of
              State when your LLC, C Corp, S Corp or nonprofit changes or
              modifies its:
            </p>

            <div className="md:pt-16 max-sm:pt-6 md:justify-between flex flex-col sm:flex-row gap-4">
              <div className="px-2 text-[#1E293B] space-y-3">
                <div className="flex items-center gap-2">
                  <CheckBadgeIcon className="h-7 w-7 text-[#06B6D4]" />
                  Business Address
                </div>

                <div className="flex items-center gap-2">
                  <CheckBadgeIcon className="h-7 w-7 text-[#06B6D4]" />
                  Business Name
                </div>

                <div className="flex items-center gap-2">
                  <CheckBadgeIcon className="h-7 w-7 text-[#06B6D4]" />
                  Stated Business Activities
                </div>
              </div>

              <div className="px-2 text-[#1E293B] space-y-3">
                <div className="flex items-center gap-2">
                  <CheckBadgeIcon className="h-7 w-7 text-[#06B6D4]" />
                  Registered Agent
                </div>

                <div className="flex items-center gap-2">
                  <CheckBadgeIcon className="h-7 w-7 text-[#06B6D4]" />
                  Member Information
                </div>

                <div className="flex items-center gap-2">
                  <CheckBadgeIcon className="h-7 w-7 text-[#06B6D4]" />
                  Number of authorized shares
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Timeline */}
        <div
          ref={whyFilingRef}
          className="md:flex gap-10 items-center md:py-10 mx-5"
        >
          <div className="md:text-left w-full md:w-1/2 md:px-16">
            <h3 className="md:text-5xl text-2xl font-bold md:py-5 mb-2 text-[#1E293B]">
              Why Filing Matters
            </h3>

            <div className="relative w-full flex flex-col py-10">

              {/* Grey background track: starts at center of icon 1, ends at center of icon 4 */}
              <div
                className="absolute left-6 top-10 w-1 -translate-x-1/2 bg-slate-100 rounded-full z-0"
                style={{
                  height: `${trackHeightPx}px`,
                }}
              >
                {/* Cyan fill: grows in px, capped at trackHeightPx */}
                <div
                  className="w-full bg-[#06B6D4] rounded-full origin-top transition-all duration-200 ease-out"
                  style={{ height: `${fillHeightPx}px` }}
                />
              </div>

              {stepsData.map((step, idx) => {
                const StepIcon = step.icon;
                const isCompletedOrActive = activeStep >= idx + 1;

                return (
                  <div
                    key={idx}
                    ref={(el) => {
                      stepRefs.current[idx] = el;
                    }}
                    className="relative flex flex-row items-start w-full min-h-[120px] mb-12 last:mb-0 z-10"
                  >
                    <div
                      className={`absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                        isCompletedOrActive
                          ? "bg-cyan-50 border-[#06B6D4] text-[#06B6D4] shadow-md scale-105"
                          : "bg-white border-slate-300 text-slate-400"
                      }`}
                    >
                      <StepIcon className="w-5 h-5" strokeWidth={2.5} />
                    </div>

                    <div className="w-full pl-16 text-left">
                      <h4
                        className={`md:text-xl text-lg font-bold transition-colors duration-500 ${
                          isCompletedOrActive
                            ? "text-[#06B6D4]"
                            : "text-slate-500"
                        }`}
                      >
                        {step.title}
                      </h4>

                      <p className="md:text-base text-sm text-slate-600 mt-1 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center pt-5 md:pt-0">
            <Image
              src="/amendment/a3.webp"
              alt="Articles Amendment"
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* Steps Guide Grid */}
        <div className="md:pt-12 mx-5 pt-6">
          <h2 className="md:text-5xl font-bold text-2xl text-[#1E293B]">
            How to File Articles of Amendment
          </h2>
        </div>

        <div className="mx-5 my-10 rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Figure out which form you need",
              "Complete the amendment form",
              "Submit it to your state",
              "File Restated Articles of Organization",
            ].map((item, index) => (
              <div
                key={item}
                className="bg-cyan-50 rounded-xl p-8 text-center border border-cyan-100 hover:border-[#06B6D4] transition duration-300 ease-in-out"
              >
                <p className="font-bold text-xl text-[#1E293B]">
                  <span className="text-[#06B6D4]">{index + 1}. </span>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Order Setup Pricing Form section */}
        <div className="flex flex-col-reverse md:flex-row gap-10 items-center pt-10 md:pt-24 mx-5">
          {/* LEFT SIDE - Text Content */}
          <div className="md:text-left md:w-1/2 md:px-16">
            <h3 className="md:text-5xl text-3xl font-bold text-[#1E293B]">
              We Make Filing
            </h3>

            <h3 className="md:text-5xl text-3xl font-bold text-[#1E293B]">
              Simple
            </h3>

            <p className="md:text-xl text-base pt-10 py-2 text-slate-600">
              We know running a business already takes up enough time, money and
              energy.
            </p>

            <p className="py-2 text-slate-600">
              Incorp Bay offers quick, affordable filing services so you can
              check Articles of Amendment off your list...
            </p>
          </div>

          {/* RIGHT SIDE - Form */}
          <div className="md:text-left md:w-1/2 md:px-16 w-full">
            <p className="text-center text-2xl pt-8 pb-3 font-bold text-[#1E293B]">
              Articles of Amendment
            </p>

            <div className="pb-5 flex flex-col justify-center">
              <p className="text-center pt-4 py-3 text-[#1E293B]">
                Entity Type
              </p>

              <select
                className="py-2 mx-3 rounded-full border-2 text-center border-slate-200 hover:border-[#06B6D4] focus:border-[#06B6D4] bg-white outline-none transition duration-300 ease-in-out"
                value={selectedEntityType}
                onChange={(e) => setSelectedEntityType(e.target.value)}
              >
                <option hidden value="">
                  Select Entity Type
                </option>
                {entityTypes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>

              <p className="pb-2 pt-3 text-center text-[#1E293B]">
                Entity State
              </p>

              <select
                className="py-2 mx-3 rounded-full border-2 text-center border-slate-200 hover:border-[#06B6D4] focus:border-[#06B6D4] bg-white outline-none transition duration-300 ease-in-out"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                <option value="">Select State</option>
                {statesInUS.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>

              <div className="border-4 border-cyan-100 mx-3 rounded-full text-center py-5 my-5 bg-white transition duration-300 ease-in-out hover:border-[#06B6D4]">
                <h1 className="text-4xl font-semibold text-[#06B6D4]">
                  ${totalPrice || "0"}
                </h1>

                <p className="text-sm text-slate-600 mt-1">
                  {selectedState
                    ? `Plus $${currentStateFee} state Fee`
                    : "Select a state"}
                </p>
              </div>

              <div className="flex justify-center items-center">
                <Link
                  href="/amendment/step-1"
                  className="group relative px-9 py-5 bg-[#06B6D4] text-white border border-[#06B6D4] rounded-[30px] overflow-hidden text-center inline-flex items-center justify-center gap-2 transition-all duration-300 ease-in-out shadow-md hover:shadow-[0_8px_30px_rgba(6,182,212,0.5)] hover:-translate-y-1 active:scale-[0.98]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4] to-[#0891b2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center gap-2">
                    ORDER NOW
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="my-16 md:px-10 md:pt-20 mx-5">
          <h2 className="md:text-5xl text-2xl font-bold md:text-left text-[#1E293B]">
            Common Questions About
          </h2>

          <h2 className="md:text-5xl text-2xl font-bold md:text-left pb-10 text-[#1E293B]">
            Filing Articles of Amendment
          </h2>

          <Accordion type="single" collapsible className="text-xl w-full">
            {faqData.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-b border-black">
                <AccordionTrigger className="text-left font-medium py-4 text-[#1E293B] hover:text-[#06B6D4] transition duration-200 ease-in-out">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent>
                  <p className="my-2 md:text-xl text-base text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Footer CTAs */}
        <div className="text-center pb-24 mx-5">
          <h2 className="md:text-5xl text-2xl font-bold md:py-3 uppercase text-[#1E293B]">
            Ready for a Change?
          </h2>

          <p className="md:text-xl text-base max-sm:pt-4 text-slate-600">
            Skip the hassle — let us file your LLC&apos;s Articles of Amendment
            for you.
          </p>

          <div className="flex justify-center items-center py-5">
            <Link
              href="/amendment/step-1"
              className="group relative md:px-10 md:py-5 py-6 px-4 bg-[#06B6D4] text-white border border-[#06B6D4] rounded-[30px] overflow-hidden inline-flex items-center justify-center gap-2 transition-all duration-300 ease-in-out shadow-md hover:shadow-[0_8px_30px_rgba(6,182,212,0.5)] hover:-translate-y-1 active:scale-[0.98]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4] to-[#0891b2] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                FILE ARTICLES OF AMENDMENT
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </NavigationWrapper>
  );
};

export default Amendment;

