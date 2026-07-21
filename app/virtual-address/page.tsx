"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  CheckCircle,
  XCircle,
  HelpCircle,
  Building,
  User,
  MapPin,
  Mail,
  ArrowUpRight,
  AlertTriangle,
  ChevronDown,
  Star
} from 'lucide-react';

import NavigationWrapper from "@/components/NavigationWrapper";

// ── Brand gradient theme (matches Certificate of Good Standing / Amendment pages) ────────
const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";

const LOGO_GRADIENT_VERTICAL =
  "bg-[linear-gradient(180deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";

const LOGO_GRADIENT_TEXT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent";

// ---------- Small building blocks (matches Certificate page) ----------

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
      {children}
    </div>
  );
}

const MapIllustration = () => (
  <svg viewBox="0 0 180 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
    <path
      d="M30 60 L90 30 L160 50 L170 130 L140 180 L80 200 L20 170 L10 100 Z"
      fill="#e0f2fe"
      stroke="#2B93C9"
      strokeWidth="1.5"
      strokeDasharray="4 2"
    />
    <circle cx="95" cy="105" r="10" fill="#2B93C9" opacity="0.15" />
    <circle cx="95" cy="105" r="5" fill="#2B93C9" />
    <line x1="95" y1="110" x2="95" y2="125" stroke="#2B93C9" strokeWidth="2" strokeLinecap="round" />
    <circle cx="55" cy="80" r="3" fill="#2B93C9" opacity="0.4" />
    <circle cx="140" cy="90" r="3" fill="#2B93C9" opacity="0.4" />
    <circle cx="70" cy="150" r="3" fill="#2B93C9" opacity="0.4" />
    <circle cx="130" cy="155" r="3" fill="#2B93C9" opacity="0.4" />
    <line x1="0" y1="110" x2="180" y2="110" stroke="#2B93C9" strokeWidth="0.5" opacity="0.15" />
    <line x1="90" y1="0" x2="90" y2="220" stroke="#2B93C9" strokeWidth="0.5" opacity="0.15" />
  </svg>
);

const EnvelopeIllustration = () => (
  <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="10" y="25" width="140" height="90" rx="8" fill="#e0f2fe" stroke="#2B93C9" strokeWidth="1.5" />
    <path d="M10 33 L80 75 L150 33" stroke="#2B93C9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="35" y1="88" x2="85" y2="88" stroke="#2B93C9" strokeWidth="2" strokeLinecap="round" />
    <line x1="35" y1="97" x2="70" y2="97" stroke="#2B93C9" strokeWidth="2" strokeLinecap="round" />
    <rect x="112" y="80" width="22" height="26" rx="2" fill="#2B93C9" opacity="0.15" stroke="#2B93C9" strokeWidth="1" />
    <rect x="115" y="83" width="16" height="20" rx="1" fill="#2B93C9" opacity="0.1" />
  </svg>
);

export default function VirtualAddress() {
  const router = useRouter();
  const [addressType, setAddressType] = useState<'business' | 'personal'>('business');
  const [selectedState, setSelectedState] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleContinue = () => {
    if (!selectedState) {
      router.push(`/virtual-address/step-1?type=${addressType}&state=california`);
      return;
    }
    router.push(`/virtual-address/step-1?type=${addressType}&state=${selectedState}`);
  };

  const handleBusinessContinue = () => {
    router.push(`/virtual-address/step-1?type=business&state=${selectedState || 'california'}`);
  };

  const handlePersonalContinue = () => {
    router.push(`/virtual-address/step-1?type=personal&state=${selectedState || 'california'}`);
  };

  const statesList = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
    'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
    'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
    'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
    'Wisconsin', 'Wyoming'
  ];

  const faqData = [
    {
      question: "I'm a self-employed contractor who wants a virtual address for my freelance business. Which do I use?",
      answer:
        "If you are operating under a legal business entity structure (like an LLC or Corporation) or using a registered DBA name, we highly recommend selecting a Business Virtual Address. If you operate strictly under your personal legal name without any formal entity registration, a Personal Virtual Address is the perfect option."
    },
    {
      question: "I'm a sole proprietor using a fictitious business name. How do I use your Virtual Address?",
      answer:
        "To use your fictitious business name (DBA) with an Incorp Bay Virtual Address, you can sign up for our Business Virtual Address. During setup, you will be able to supply your formal fictitious name registration documents so that our digital mailroom platforms can explicitly recognize and authorize incoming mail addresses to your company name."
    },
    {
      question: "What happens if the sender misspells my name or the name of my business?",
      answer:
        "Our automated high-speed scanning systems utilize intelligent character recognition. If a sender minorly misspells your name or business name, our expert facility handlers cross-reference it with your unique mailbox account ID number. As long as the unique identifier matches your account profile, your mail will be securely processed and uploaded into your dashboard."
    },
    {
      question: "What if my company name and brand is the same as my personal name?",
      answer:
        "If your corporate name matches your personal name precisely (e.g., John Doe LLC), you should choose the Business Virtual Address. This ensures your account receives business-tier compliance processing, automated data keeping, and proper reporting for state registries, which frequently differentiate entity operations from personal private mail."
    },
    {
      question: "What if I want to use a Virtual Address in multiple states?",
      answer:
        "Incorp Bay offers an expansive multi-location network. You can seamlessly add multiple Virtual Addresses in different states directly inside your unified account dashboard. Each additional state address gives you a premium physical street footprint, allowing you to manage compliance, regional customer bases, and mail collection from one single dashboard interface."
    }
  ];

  return (
    <NavigationWrapper>
      <div className="min-h-screen bg-white">

        {/* ── SECTION 1: HERO ─────────────────────────────────── */}
        <section className="relative pt-14 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#2B93C9 1px, transparent 1px), linear-gradient(90deg, #2B93C9 1px, transparent 1px)",
              backgroundSize: "40px 40px"
            }}
          />
          <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-[#2B93C9]/10 blur-[90px]" />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="flex justify-center mb-8">
              <Badge>
                <span className="font-semibold uppercase tracking-wide text-slate-700">Excellent</span>
                <span className="font-bold text-[#1E293B]">4.7 out of 5</span>
                <Star className="w-4 h-4 fill-[#2B93C9] text-[#2B93C9]" />
                <span className="font-bold text-[#1E293B]">Trustpilot</span>
              </Badge>
            </div>

            <h1 className="text-center text-5xl font-bold tracking-tight text-[#1E293B] mb-5 leading-tight">
              Get a <span className={LOGO_GRADIENT_TEXT}>Business</span> or{' '}
              <span className={LOGO_GRADIENT_TEXT}>Personal</span>
              <br className="hidden sm:block" /> Virtual Address
            </h1>

            <p className="text-center max-w-xl mx-auto text-xl text-black leading-relaxed mb-14">
              Stay connected, wherever life takes you. Whether you're launching a business or always on the go, Incorp Bay's Virtual Address keeps your mail secure, organized, and always accessible.
            </p>

            <div className="relative mx-auto max-w-5xl">
              <style jsx>{`
                .va-hero-side {
                  display: none;
                  position: absolute;
                  top: 50%;
                  transform: translateY(-50%);
                  width: 320px;
                  pointer-events: none;
                }
                @media (min-width: 1024px) {
                  .va-hero-side {
                    display: block;
                  }
                }
                @media (min-width: 1280px) {
                  .va-hero-side {
                    width: 380px;
                  }
                }
                .va-hero-left { left: -40px; }
                .va-hero-right { right: -40px; }
                @media (min-width: 1280px) {
                  .va-hero-left { left: -120px; }
                  .va-hero-right { right: -120px; }
                }
              `}</style>

              <div
                className="va-hero-side va-hero-left"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent 0%, black 50%, black 100%), linear-gradient(to bottom, transparent 0%, black 25%, black 100%)",
                  maskComposite: "intersect",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 50%, black 100%), linear-gradient(to bottom, transparent 0%, black 25%, black 100%)",
                  WebkitMaskComposite: "source-in"
                }}
              >
                <img
                  src="/virtualaddress/Virtual-address-hero-1.webp"
                  alt="Virtual address dashboard preview — address on map and cloud mail cards"
                  className="w-full h-auto"
                />
              </div>

              <div
                className="va-hero-side va-hero-right"
                style={{
                  maskImage:
                    "linear-gradient(to left, transparent 0%, black 50%, black 100%), linear-gradient(to bottom, transparent 0%, black 25%, black 100%)",
                  maskComposite: "intersect",
                  WebkitMaskImage:
                    "linear-gradient(to left, transparent 0%, black 50%, black 100%), linear-gradient(to bottom, transparent 0%, black 25%, black 100%)",
                  WebkitMaskComposite: "source-in"
                }}
              >
                <img
                  src="/virtualaddress/Virtual-address-hero-2.webp"
                  alt="Virtual address dashboard preview — scanned documents and notification cards"
                  className="w-full h-auto"
                />
              </div>

              <div className="relative z-10 mx-auto w-full max-w-[420px] bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-2xl shadow-[#2B93C9]/10">
                <div className="flex bg-slate-50 p-1 rounded-xl border border-slate-200/60 mb-7">
                  {(['business', 'personal'] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setAddressType(type)}
                      className={`flex-1 py-2.5 px-4 rounded-lg font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                        addressType === type
                          ? `${LOGO_GRADIENT} text-white shadow-md shadow-[#2B93C9]/30`
                          : 'text-slate-700 hover:text-[#1E293B]'
                      }`}
                    >
                      {type === 'business' ? <Building className="w-4 h-4" /> : <User className="w-4 h-4" />}
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>

                <div className="mb-6 min-h-[64px]">
                  {addressType === 'business' ? (
                    <div>
                      <h3 className="font-bold text-base text-[#1E293B] mb-1.5">For LLCs and Corporations</h3>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        Use the Business Virtual Address if you're managing or forming an LLC or corporation.
                      </p>
                    </div>
                  ) : (
                    <div>
                      <h3 className="font-bold text-base text-[#1E293B] mb-1.5">For Individuals</h3>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        Choose the Personal Virtual Address if you're a sole proprietor or don't run a formal business.
                      </p>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="w-full text-left">
                    <label
                      htmlFor="state-select"
                      className="block text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1.5 px-0.5"
                    >
                      Select Operating State
                    </label>
                    <div className="relative flex items-center border border-slate-200 rounded-xl overflow-hidden bg-slate-50 focus-within:border-[#2B93C9] focus-within:ring-1 focus-within:ring-[#2B93C9] transition-all">
                      <div className="bg-[#2B93C9]/8 border-r border-slate-200 px-3 py-3 text-xs font-bold text-[#2B93C9] uppercase tracking-wide shrink-0">
                        State
                      </div>
                      <select
                        id="state-select"
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.target.value)}
                        className="flex-1 bg-transparent py-3 pl-3 pr-10 text-sm text-[#1E293B] font-medium focus:outline-none appearance-none cursor-pointer"
                      >
                        <option value="">Select State</option>
                        {statesList.map((state) => (
                          <option key={state} value={state.toLowerCase()}>
                            {state}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 pointer-events-none" />
                    </div>
                  </div>

                  <div className="w-full">
                    <button
                      onClick={handleContinue}
                      className={`${LOGO_GRADIENT} group relative w-full overflow-hidden rounded-full h-[48px] text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_35px_rgba(43,147,201,0.45)] flex items-center justify-center`}
                    >
                      <span className="absolute inset-x-0 top-0 h-1/2 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
                      <span className="absolute -left-20 top-0 h-full w-12 -skew-x-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {addressType === 'business' ? 'Get Business VA' : 'Get Personal VA'}
                        <svg
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center mt-14 text-base md:text-xl font-bold text-slate-700 leading-relaxed">
              Bootstrapped, founder led, independently owned{' '}
              <span className={`px-2 py-0.5 rounded-lg font-extrabold whitespace-nowrap shadow-sm bg-slate-50 ${LOGO_GRADIENT_TEXT}`}>Since 2004</span>{' '}
              with{' '}
              <span className={`px-2 py-0.5 rounded-lg font-extrabold shadow-sm bg-slate-50 ${LOGO_GRADIENT_TEXT}`}>over 1,000,000 entrepreneurs</span> served!
            </p>
          </div>
        </section>

        {/* ── SECTION 2: HELP CARDS ───────────────────────────── */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 flex gap-4 items-start hover:border-[#2B93C9]/40 hover:shadow-sm transition-all duration-200">
              <div className="p-2 bg-[#2B93C9]/8 rounded-lg text-[#2B93C9] shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#1E293B] mb-1">Not sure which one to pick?</h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Simple rule: if you're using a business name, go with a Business Virtual Address. If you're using your own name, a Personal Virtual Address is the right fit.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 flex gap-4 items-start hover:border-[#2B93C9]/40 hover:shadow-sm transition-all duration-200">
              <div className="p-2 bg-[#2B93C9]/8 rounded-lg text-[#2B93C9] shrink-0">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#1E293B] mb-1">Want both?</h4>
                <p className="text-sm text-slate-700 leading-relaxed">No problem — just sign up for each one separately.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: <Building className="w-4 h-4" />, label: 'Learn more about Business Virtual Addresses', href: '#business-details' },
              { icon: <User className="w-4 h-4" />, label: 'Learn more about Personal Virtual Addresses', href: '#personal-details' }
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="group bg-white p-5 rounded-xl border border-slate-100 hover:border-[#2B93C9]/40 hover:shadow-sm flex items-center justify-between transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#2B93C9]/8 rounded-lg text-[#2B93C9]">{item.icon}</div>
                  <span className="text-sm font-semibold text-slate-700 group-hover:text-[#1E293B] transition-colors">{item.label}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#2B93C9] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </a>
            ))}
          </div>
        </section>

        {/* ── SECTION 3: KNOWLEDGE BLOCK ──────────────────────── */}
        <section className="pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto bg-white">
          <div className="bg-[#ECEFF1]/50 rounded-2xl border border-slate-100 p-6 sm:p-8 relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-1 h-full rounded-l-2xl ${LOGO_GRADIENT_VERTICAL}`} />

            <h3 className="text-xl font-bold text-[#1E293B] mb-6">New to Virtual Addresses? Here's What You Need to Know</h3>

            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <div className="mt-0.5 text-[#2B93C9] shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1E293B] mb-1">What it is:</h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    A real street address with a unique suite number where your mail gets received, scanned, and uploaded to your personal online mailbox. You can view everything from anywhere. We hold your physical mail for 1–2 weeks, then shred it securely.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="mt-0.5 text-black shrink-0">
                  <XCircle className="w-5 h-5 fill-gray-100" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1E293B] mb-1">What it isn't:</h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    It's not a PO Box, and it's not a physical location you can visit. It also doesn't accept packages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 4: BENEFITS ─────────────────────────────── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto bg-white">
          <div className="text-center mb-12">
            <span className={`text-xs font-semibold uppercase tracking-widest block mb-3 ${LOGO_GRADIENT_TEXT}`}>Benefits Of Virtual Address</span>
            <h2 className="text-4xl font-bold text-[#1E293B] mb-4">Why Use a Virtual Address?</h2>
            <p className="max-w-2xl mx-auto text-xl text-slate-700 leading-relaxed">
              The ways to use it are practically endless — but at its core, Incorp Bay's Virtual Address service delivers two powerful features, each built with flexibility in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md hover:border-[#2B93C9]/20 hover:-translate-y-0.5 transition-all duration-200">
              <div className={`relative p-8 flex justify-center ${LOGO_GRADIENT}`}>
                <div className="p-4 bg-white/95 rounded-2xl shadow-xl border border-white/80 relative z-10 text-[#2B93C9]">
                  <MapPin className="w-7 h-7" strokeWidth={2.2} />
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h4 className="font-bold text-sm text-[#1E293B]">A physical street address where you don't live or work:</h4>
                <ul className="space-y-4 text-sm text-slate-700">
                  {[
                    { title: 'Credibility', desc: 'Present a legitimate U.S. street address at a professional, premium location.' },
                    { title: 'Privacy', desc: 'Keep your home address off the internet and out of public records.' },
                    { title: 'Compliance', desc: 'Many states require a physical address to form a business. A Business Virtual Address through Incorp Bay helps you meet that requirement.' }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <div className="mt-1 w-4 h-4 rounded-full bg-[#2B93C9]/10 flex items-center justify-center shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2B93C9]" />
                      </div>
                      <div>
                        <strong className="text-[#1E293B] block mb-0.5">{item.title}</strong>
                        {item.desc}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md hover:border-[#2B93C9]/20 hover:-translate-y-0.5 transition-all duration-200">
              <div className={`relative p-8 flex justify-center ${LOGO_GRADIENT}`}>
                <div className="p-4 bg-white/95 rounded-2xl shadow-xl border border-white/80 relative z-10 text-[#2B93C9]">
                  <Mail className="w-7 h-7" strokeWidth={2.2} />
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h4 className="font-bold text-sm text-[#1E293B]">Mail handling with digital scans and recordkeeping:</h4>
                <ul className="space-y-4 text-sm text-slate-700">
                  {[
                    { title: 'Remote Access', desc: 'Check and organize your mail from anywhere in the world.' },
                    { title: 'Never Lose a Document Again', desc: 'Every piece of mail is digitally recorded and ready when you need it.' },
                    { title: 'Save Time and Stress', desc: "We open, scan, and upload your mail so you don't have to." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <div className="mt-1 w-4 h-4 rounded-full bg-[#2B93C9]/15 flex items-center justify-center shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2B93C9]" />
                      </div>
                      <div>
                        <strong className="text-[#1E293B] block mb-0.5">{item.title}</strong>
                        {item.desc}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: IMPORTANT NOTICE ────────────────────────── */}
        <section className="py-10 px-4 sm:px-6 lg:px-10 max-w-5xl mx-auto bg-white">
          <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl">
            <div className={`h-1.5 w-full `} />

            <div className="p-6 flex flex-col sm:flex-row items-start gap-5">
              <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 border border-slate-200 shadow-sm">
                <AlertTriangle className="h-7 w-7 text-[#2B93C9] stroke-[2.5]" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="rounded-full bg-[#1E293B] px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white">
                    IMPORTANT NOTICE
                  </span>

                  <span className="text-xl font-bold text-[#1E293B]">Packages Are Not Accepted</span>
                </div>

                <p className="text-[15px] leading-7 text-slate-700">
                  Our <span className="font-semibold text-[#1E293B]">Virtual Address Service</span> is designed exclusively for{' '}
                  <span className="font-semibold text-[#1E293B]">letters, legal mail, and large envelopes.</span>
                </p>

                <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-[15px] leading-7 text-slate-700">
                    <span className="font-bold text-[#1E293B]">Please Note:</span> For security and operational reasons,
                    <span className="font-semibold text-[#1E293B]"> packages of any size cannot be received, signed for, or stored.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 6: FAQ ──────────────────────────────────── */}
        <section className="px-6 py-12 md:px-16 md:py-14 bg-white">
          <div className="mx-auto max-w-2xl">
            <p className={`text-xs font-semibold uppercase tracking-widest ${LOGO_GRADIENT_TEXT}`}>Got Questions?</p>
            <h2 className="mt-2 text-4xl font-bold text-[#1E293B]">Frequently Asked Questions</h2>

            <div className="mt-8 divide-y divide-slate-200">
              {faqData.map((faq, index) => (
                <div key={index}>
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between py-5 text-left text-sm font-semibold text-gray-600 hover:text-[#1E293B] transition-colors"
                  >
                    {faq.question}
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180 text-[#2B93C9]' : 'text-slate-400'}`}
                    />
                  </button>
                  {openFaq === index && <p className="pb-5 text-sm leading-relaxed text-gray-500">{faq.answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 7: FOOTER CTA ─────────────────────────────── */}
        <section className="px-6 py-4 md:px-16 md:py-6 bg-white">
          <div
            className={`${LOGO_GRADIENT} relative mx-auto max-w-4xl overflow-hidden rounded-[32px] border border-white/10 px-8 py-10 text-center shadow-2xl sm:px-10`}
          >
            <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#2B93C9]/20 to-transparent" />
            <div className="pointer-events-none absolute right-1/4 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#33D1CC]/30 blur-[80px]" />

            <div className="relative z-10">
              <span className="rounded-full border border-white/15 bg-white/12 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur">Get Started Today</span>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight mt-6 mb-6 text-white">
                Ready for a <span className="text-3xl md:text-5xl font-bold leading-tight mt-6 mb-6 text-white">Smarter Way</span>
                <br /> to Manage Your Mail?
              </h2>

              <p className="text-lg text-white/80 max-w-md mx-auto mb-8 leading-relaxed">
                No Contracts. No Surprises.
                <br /> Choose your virtual address in minutes.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-10">
                <div className="flex items-center gap-2 bg-white/12 backdrop-blur px-4 py-2 rounded-full border border-white/15 shadow-sm">
                  <span className="font-bold text-white text-sm">167,561</span>
                  <span className="text-white/75 text-sm">ratings</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-white text-white" />
                    ))}
                  </div>
                  <span className="text-white/85 font-semibold text-sm">Shopper Approved</span>
                </div>
                <div className="flex items-center gap-2 bg-white/12 backdrop-blur px-4 py-2 rounded-full border border-white/15 shadow-sm">
                  <span className="font-bold text-white text-sm">25,561</span>
                  <span className="text-white/75 text-sm">reviews</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-white text-white" />
                    ))}
                  </div>
                  <span className="text-white/85 font-semibold text-sm">Trustpilot</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-4">
                <button
                  onClick={handleBusinessContinue}
                  className="group relative overflow-hidden rounded-lg bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl whitespace-nowrap"
                >
                  <span className="absolute inset-0 bg-[#2B93C9]/0 transition-colors duration-300 group-hover:bg-[#2B93C9]/5" />
                  <span className="absolute -left-16 top-0 h-full w-10 -skew-x-12 bg-[#2B93C9]/10 blur-sm transition-all duration-700 group-hover:left-[120%]" />
                  <span className="relative z-10 flex items-center gap-1.5 text-black">
                    <span className="bg-gradient-to-r from-[#0B1220] via-[#2B93C9] to-[#33D1CC] text-transparent bg-clip-text">
                      Get Business<br />Virtual Mailbox
                    </span>
                    <svg className="h-3.5 w-3.5 stroke-black transition-transform duration-300 group-hover:translate-x-1" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>

                <button
                  onClick={handlePersonalContinue}
                  className="group relative overflow-hidden rounded-lg bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl whitespace-nowrap"
                >
                  <span className="absolute inset-0 bg-[#2B93C9]/0 transition-colors duration-300 group-hover:bg-[#2B93C9]/5" />
                  <span className="absolute -left-16 top-0 h-full w-10 -skew-x-12 bg-[#2B93C9]/10 blur-sm transition-all duration-700 group-hover:left-[120%]" />
                  <span className="relative z-10 flex items-center gap-1.5 text-black">
                    <span className="bg-gradient-to-r from-[#0B1220] via-[#2B93C9] to-[#33D1CC] text-transparent bg-clip-text">
                      Get Personal<br />Virtual Mailbox
                    </span>
                    <svg className="h-3.5 w-3.5 stroke-black transition-transform duration-300 group-hover:translate-x-1" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </div>

              <div className="mt-6 flex flex-wrap justify-center items-center gap-2 text-[11px] font-medium text-white/85">
                <span className="rounded-full border border-white/15 bg-white/12 px-3 py-1">✓ No Hidden Fees</span>
                <span className="rounded-full border border-white/15 bg-white/12 px-3 py-1">✓ Fast Setup</span>
                <span className="rounded-full border border-white/15 bg-white/12 px-3 py-1">✓ Secure Process</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </NavigationWrapper>
  );
}

