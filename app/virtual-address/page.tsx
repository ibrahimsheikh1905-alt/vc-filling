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

const MapIllustration = () => (
  <svg viewBox="0 0 180 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-80">
    <path d="M30 60 L90 30 L160 50 L170 130 L140 180 L80 200 L20 170 L10 100 Z" 
      fill="#e0f2fe" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="4 2"/>
    <circle cx="95" cy="105" r="10" fill="#06B6D4" opacity="0.15"/>
    <circle cx="95" cy="105" r="5" fill="#06B6D4"/>
    <line x1="95" y1="110" x2="95" y2="125" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="55" cy="80" r="3" fill="#06B6D4" opacity="0.4"/>
    <circle cx="140" cy="90" r="3" fill="#06B6D4" opacity="0.4"/>
    <circle cx="70" cy="150" r="3" fill="#06B6D4" opacity="0.4"/>
    <circle cx="130" cy="155" r="3" fill="#06B6D4" opacity="0.4"/>
    <line x1="0" y1="110" x2="180" y2="110" stroke="#06B6D4" strokeWidth="0.5" opacity="0.15"/>
    <line x1="90" y1="0" x2="90" y2="220" stroke="#06B6D4" strokeWidth="0.5" opacity="0.15"/>
  </svg>
);

const EnvelopeIllustration = () => (
  <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="10" y="25" width="140" height="90" rx="8" fill="#e0f2fe" stroke="#06B6D4" strokeWidth="1.5"/>
    <path d="M10 33 L80 75 L150 33" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="35" y1="88" x2="85" y2="88" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round"/>
    <line x1="35" y1="97" x2="70" y2="97" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round"/>
    <rect x="112" y="80" width="22" height="26" rx="2" fill="#06B6D4" opacity="0.15" stroke="#06B6D4" strokeWidth="1"/>
    <rect x="115" y="83" width="16" height="20" rx="1" fill="#06B6D4" opacity="0.1"/>
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
      answer: "If you are operating under a legal business entity structure (like an LLC or Corporation) or using a registered DBA name, we highly recommend selecting a Business Virtual Address. If you operate strictly under your personal legal name without any formal entity registration, a Personal Virtual Address is the perfect option."
    },
    {
      question: "I'm a sole proprietor using a fictitious business name. How do I use your Virtual Address?",
      answer: "To use your fictitious business name (DBA) with an Incorp Bay Virtual Address, you can sign up for our Business Virtual Address. During setup, you will be able to supply your formal fictitious name registration documents so that our digital mailroom platforms can explicitly recognize and authorize incoming mail addresses to your company name."
    },
    {
      question: "What happens if the sender misspells my name or the name of my business?",
      answer: "Our automated high-speed scanning systems utilize intelligent character recognition. If a sender minorly misspells your name or business name, our expert facility handlers cross-reference it with your unique mailbox account ID number. As long as the unique identifier matches your account profile, your mail will be securely processed and uploaded into your dashboard."
    },
    {
      question: "What if my company name and brand is the same as my personal name?",
      answer: "If your corporate name matches your personal name precisely (e.g., John Doe LLC), you should choose the Business Virtual Address. This ensures your account receives business-tier compliance processing, automated data keeping, and proper reporting for state registries, which frequently differentiate entity operations from personal private mail."
    },
    {
      question: "What if I want to use a Virtual Address in multiple states?",
      answer: "Incorp Bay offers an expansive multi-location network. You can seamlessly add multiple Virtual Addresses in different states directly inside your unified account dashboard. Each additional state address gives you a premium physical street footprint, allowing you to manage compliance, regional customer bases, and mail collection from one single dashboard interface."
    }
  ];

  return (
    <NavigationWrapper>
      <div className="min-h-screen bg-white">

        {/* ── SECTION 1: HERO ─────────────────────────────────── */}
        <section className="relative pt-14 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#06B6D4]/5 via-white to-white border-b border-gray-100">
          <div className="absolute inset-0 flex items-start justify-center pointer-events-none">
            <div className="w-[700px] h-[500px] rounded-full bg-[#06B6D4] opacity-[0.06] blur-3xl mt-20"/>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">

            {/* Trustpilot badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-1.5 bg-white px-4 py-1.5 rounded-full border border-gray-200 shadow-sm text-sm text-gray-500">
                <span className="font-semibold text-[#06B6D4] uppercase tracking-wide">Excellent</span>
                <span className="font-bold text-[#1E293B]">4.7 out of 5</span>
                <div className="flex items-center gap-0.5 ml-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3 h-3 ${i < 4 ? 'text-[#06B6D4] fill-[#06B6D4]' : 'text-[#06B6D4]/30 fill-[#06B6D4]/30'}`}/>
                  ))}
                </div>
                <span className="font-bold text-[#1E293B] ml-1">Trustpilot</span>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-center text-5xl font-bold tracking-tight text-[#1E293B] mb-5 leading-tight">
              Get a{' '}
              <span style={{
                background: 'linear-gradient(135deg, #06B6D4 0%, #06B6D4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Business</span>
              {' '}or{' '}
              <span style={{
                background: 'linear-gradient(135deg, #06B6D4 0%, #06B6D4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Personal</span>
              <br className="hidden sm:block"/>
              {' '}Virtual Address
            </h1>

            <p className="text-center max-w-xl mx-auto text-xl text-gray-500 leading-relaxed mb-14">
              Stay connected, wherever life takes you. Whether you're launching a business or always on the go, Incorp Bay's Virtual Address keeps your mail secure, organized, and always accessible.
            </p>

            {/* Three-column layout */}
            <div className="flex items-center justify-center gap-0 lg:gap-4">

              {/* Left decorative – map */}
              <div className="hidden lg:block w-44 xl:w-52 opacity-80 translate-y-4 -mr-6 relative z-0">
                <MapIllustration />
                <div className="absolute bottom-12 left-4 bg-white rounded-lg shadow-md px-3 py-2 border border-gray-100">
                  <div className="font-bold text-[#1E293B] text-sm">1,000,000+</div>
                  <div className="text-gray-500 text-sm">Entrepreneurs</div>
                </div>
              </div>

              {/* Center card */}
              <div className="w-full max-w-[420px] bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-2xl shadow-[#06B6D4]/8 relative z-10">

                {/* Toggle */}
                <div className="flex bg-gray-50 p-1 rounded-xl border border-gray-200/60 mb-7">
                  {(['business', 'personal'] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setAddressType(type)}
                      className={`flex-1 py-2.5 px-4 rounded-lg font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                        addressType === type
                          ? 'bg-[#06B6D4] text-white shadow-md shadow-[#06B6D4]/30'
                          : 'text-gray-500 hover:text-[#1E293B]'
                      }`}
                    >
                      {type === 'business' ? <Building className="w-4 h-4"/> : <User className="w-4 h-4"/>}
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Card content */}
                <div className="mb-6 min-h-[64px]">
                  {addressType === 'business' ? (
                    <div>
                      <h3 className="font-bold text-base text-[#1E293B] mb-1.5">For LLCs and Corporations</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        Use the Business Virtual Address if you're managing or forming an LLC or corporation.
                      </p>
                    </div>
                  ) : (
                    <div>
                      <h3 className="font-bold text-base text-[#1E293B] mb-1.5">For Individuals</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        Choose the Personal Virtual Address if you're a sole proprietor or don't run a formal business.
                      </p>
                    </div>
                  )}
                </div>

                {/* Clean, Scaled Select & CTA block layout */}
                <div className="space-y-4">
                  <div className="w-full text-left">
                    <label htmlFor="state-select" className="block text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5 px-0.5">
                      Select Operating State
                    </label>
                    <div className="relative flex items-center border border-gray-200 rounded-xl overflow-hidden bg-gray-50 focus-within:border-[#06B6D4] focus-within:ring-1 focus-within:ring-[#06B6D4] transition-all">
                      <div className="bg-[#06B6D4]/8 border-r border-gray-200 px-3 py-3 text-xs font-bold text-[#06B6D4] uppercase tracking-wide shrink-0">
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
                          <option key={state} value={state.toLowerCase()}>{state}</option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 pointer-events-none"/>
                    </div>
                  </div>
                  
                  {/* HERO CTA BUTTON WITH PREMIUM GLOW EFFECTS */}
                  <div className="w-full">
                    <button
                      onClick={handleContinue}
                      className="group relative w-full bg-[#06B6D4] active:scale-[0.98] text-white font-bold text-sm h-[48px] rounded-xl overflow-hidden transition-all duration-300 shadow-md hover:shadow-[0_8px_30px_rgba(6,182,212,0.5)] flex items-center justify-center gap-2 z-10"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4] to-[#0891b2] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                      <span className="relative z-20 flex items-center justify-center gap-2">
                        {addressType === 'business' ? 'Get Business VA' : 'Get Personal VA'}
                        <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right decorative – envelope */}
              <div className="hidden lg:block w-44 xl:w-52 opacity-80 translate-y-4 -mr-6 relative z-0">
                <EnvelopeIllustration />
                <div className="absolute top-8 right-4 bg-white rounded-lg shadow-md px-3 py-2 border border-gray-100">
                  <div className="font-bold text-[#1E293B] text-sm flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#06B6D4] inline-block"/>
                    Mail Received
                  </div>
                  <div className="text-gray-500 text-sm">Scanned & Uploaded</div>
                </div>
              </div>
            </div>

            {/* Trust strip */}
            <p className="text-center mt-14 text-sm text-gray-500">
              Bootstrapped, founder led, independently owned{' '}
              <span className="text-[#06B6D4] font-semibold">Since 2004</span>{' '}
              with{' '}
              <span className="text-[#1E293B] font-semibold underline decoration-[#06B6D4]/50 underline-offset-4">over 1,000,000 entrepreneurs</span> served!
            </p>
          </div>
        </section>

        {/* Section divider */}
        <div className="h-px mx-5 bg-gradient-to-r from-transparent via-[#06B6D4]/40 to-transparent my-6" />

        {/* ── SECTION 2: HELP CARDS ───────────────────────────── */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 flex gap-4 items-start hover:border-[#06B6D4]/30 hover:shadow-sm transition-all duration-200">
              <div className="p-2 bg-[#06B6D4]/8 rounded-lg text-[#06B6D4] shrink-0">
                <HelpCircle className="w-5 h-5"/>
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#1E293B] mb-1">Not sure which one to pick?</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Simple rule: if you're using a business name, go with a Business Virtual Address. If you're using your own name, a Personal Virtual Address is the right fit.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 flex gap-4 items-start hover:border-[#06B6D4]/30 hover:shadow-sm transition-all duration-200">
              <div className="p-2 bg-[#06B6D4]/8 rounded-lg text-[#06B6D4] shrink-0">
                <Building className="w-5 h-5"/>
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#1E293B] mb-1">Want both?</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  No problem — just sign up for each one separately.
                </p>
              </div>
            </div>
          </div>

          {/* Deep dive links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: <Building className="w-4 h-4"/>, label: 'Learn more about Business Virtual Addresses', href: '#business-details' },
              { icon: <User className="w-4 h-4"/>, label: 'Learn more about Personal Virtual Addresses', href: '#personal-details' },
            ].map((item, i) => (
              <a key={i} href={item.href} className="group bg-white p-5 rounded-xl border border-gray-200 hover:border-[#06B6D4]/30 hover:shadow-sm flex items-center justify-between transition-all duration-200">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#06B6D4]/8 rounded-lg text-[#06B6D4]">{item.icon}</div>
                  <span className="text-sm font-semibold text-gray-600 group-hover:text-[#1E293B] transition-colors">{item.label}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-[#06B6D4] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"/>
              </a>
            ))}
          </div>
        </section>

        {/* ── SECTION 3: KNOWLEDGE BLOCK ──────────────────────── */}
        <section className="pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="bg-[#06B6D4]/5 rounded-2xl border border-[#06B6D4]/20 p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#06B6D4] rounded-l-2xl"/>

            <h3 className="text-xl font-bold text-[#1E293B] mb-6">New to Virtual Addresses? Here's What You Need to Know</h3>

            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <div className="mt-0.5 text-[#06B6D4] shrink-0">
                  <CheckCircle className="w-5 h-5"/>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1E293B] mb-1">What it is:</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    A real street address with a unique suite number where your mail gets received, scanned, and uploaded to your personal online mailbox. You can view everything from anywhere. We hold your physical mail for 1–2 weeks, then shred it securely.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="mt-0.5 text-rose-500 shrink-0">
                  <XCircle className="w-5 h-5 fill-rose-50"/>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1E293B] mb-1">What it isn't:</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    It's not a PO Box, and it's not a physical location you can visit. It also doesn't accept packages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section divider */}
        <div className="h-px mx-5 bg-gradient-to-r from-transparent via-[#06B6D4]/30 to-transparent mb-6" />

        {/* ── SECTION 4: BENEFITS ─────────────────────────────── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-gray-100">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4] block mb-3">Benefits Of Virtual Address</span>
            <h2 className="text-4xl font-bold text-[#1E293B] mb-4">Why Use a Virtual Address?</h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-500 leading-relaxed">
              The ways to use it are practically endless — but at its core, Incorp Bay's Virtual Address service delivers two powerful features, each built with flexibility in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md hover:border-[#06B6D4]/20 hover:-translate-y-0.5 transition-all duration-200">
              <div className="relative p-8 flex justify-center" style={{ background: 'linear-gradient(135deg, #06B6D4 0%, #0891b2 60%, #06B6D4 100%)' }}>
                <div className="absolute inset-0 bg-[#06B6D4] opacity-15 blur-xl pointer-events-none"/>
                <div className="p-4 bg-white/95 rounded-2xl shadow-xl border border-white/80 relative z-10 text-[#06B6D4]">
                  <MapPin className="w-7 h-7" strokeWidth={2.2}/>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h4 className="font-bold text-sm text-[#1E293B]">A physical street address where you don't live or work:</h4>
                <ul className="space-y-4 text-sm text-gray-600">
                  {[
                    { title: 'Credibility', desc: 'Present a legitimate U.S. street address at a professional, premium location.' },
                    { title: 'Privacy', desc: 'Keep your home address off the internet and out of public records.' },
                    { title: 'Compliance', desc: 'Many states require a physical address to form a business. A Business Virtual Address through Incorp Bay helps you meet that requirement.' },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <div className="mt-1 w-4 h-4 rounded-full bg-[#06B6D4]/10 flex items-center justify-center shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]"/>
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

            {/* Card 2 */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md hover:border-[#06B6D4]/20 hover:-translate-y-0.5 transition-all duration-200">
              <div className="relative p-8 flex justify-center" style={{ background: 'linear-gradient(135deg, #06B6D4 0%, #0891b2 60%, #06B6D4 100%)' }}>
                <div className="absolute inset-0 bg-[#06B6D4] opacity-15 blur-xl pointer-events-none"/>
                <div className="p-4 bg-white/95 rounded-2xl shadow-xl border border-white/80 relative z-10 text-[#06B6D4]">
                  <Mail className="w-7 h-7" strokeWidth={2.2}/>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h4 className="font-bold text-sm text-[#1E293B]">Mail handling with digital scans and recordkeeping:</h4>
                <ul className="space-y-4 text-sm text-gray-600">
                  {[
                    { title: 'Remote Access', desc: 'Check and organize your mail from anywhere in the world.' },
                    { title: 'Never Lose a Document Again', desc: 'Every piece of mail is digitally recorded and ready when you need it.' },
                    { title: 'Save Time and Stress', desc: "We open, scan, and upload your mail so you don't have to." },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <div className="mt-1 w-4 h-4 rounded-full bg-[#06B6D4]/15 flex items-center justify-center shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]"/>
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

        {/* ── SECTION 5: WARNING STRIP ────────────────────────── */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="bg-amber-50 rounded-xl border border-amber-200 p-4 sm:p-5 flex items-center gap-4">
            <div className="p-2 bg-amber-100 rounded-lg text-amber-700 shrink-0">
              <AlertTriangle className="w-5 h-5"/>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-amber-600 text-white text-sm font-semibold px-3 py-0.5 rounded-full">
                  No Packages
                </span>
                <span className="text-sm font-bold text-amber-900">Accepted</span>
              </div>
              <p className="text-sm text-amber-800 leading-relaxed">
                Please Note: Our virtual address service handles letters and large envelopes only.{' '}
                <span className="text-amber-950 font-semibold">We do not accept packages of any size.</span>
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 6: FAQ ──────────────────────────────────── */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <span className="block text-xs font-semibold uppercase tracking-widest text-[#06B6D4] mb-3">Got questions?</span>
          <h2 className="text-4xl font-bold text-[#1E293B] mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-2">
            {faqData.map((faq, index) => (
              <div key={index} className={`rounded-xl overflow-hidden border transition-colors duration-200 ${openFaq === index ? 'border-[#06B6D4]/25 bg-white' : 'border-gray-100 bg-gray-50/60'}`}>
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left flex justify-between items-center gap-4 text-sm font-semibold text-gray-600 hover:text-[#1E293B] transition-colors py-4 px-5"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180 text-[#06B6D4]' : 'text-gray-500'
                    }`}
                  />
                </button>
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openFaq === index ? 'max-h-60 opacity-100 border-t border-[#06B6D4]/10' : 'max-h-0 opacity-0'
                }`}>
                  <p className="p-5 text-sm text-gray-500 leading-relaxed bg-white">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 7: FOOTER CTA ───────────────────────────── */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mb-16">
          <div className="relative rounded-[40px] overflow-hidden p-10 sm:p-16 text-center" style={{ background: 'linear-gradient(135deg, #1E293B 0%, #06B6D4 100%)' }}>

            <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#06B6D4]/15 to-transparent"/>
            <div className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 w-80 h-80 bg-[#06B6D4]/25 rounded-full blur-[80px]"/>

            <div className="relative z-10">
              <span className="bg-[#06B6D4] text-white text-sm font-semibold px-4 py-2 rounded-full">
                Get Started Today
              </span>

              <h2 className="text-4xl md:text-6xl font-bold leading-tight mt-6 mb-6 text-white">
                Ready for a{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #60a5fa 0%, #06B6D4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>Smarter Way</span>
                <br/>
                to Manage Your Mail?
              </h2>

              <p className="text-xl text-blue-200 max-w-md mx-auto mb-8 leading-relaxed">
                No Contracts. No Surprises.
                <br/>
                Choose your virtual address in minutes.
              </p>

              {/* Social proof */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-10">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 shadow-sm">
                  <span className="font-bold text-white text-sm">167,561</span>
                  <span className="text-blue-200 text-sm">ratings</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#06B6D4] text-[#06B6D4]"/>
                    ))}
                  </div>
                  <span className="text-blue-100 font-semibold text-sm">Shopper Approved</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20 shadow-sm">
                  <span className="font-bold text-white text-sm">25,561</span>
                  <span className="text-blue-200 text-sm">reviews</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#06B6D4] text-[#06B6D4]"/>
                    ))}
                  </div>
                  <span className="text-blue-100 font-semibold text-sm">Trustpilot</span>
                </div>
              </div>

              {/* DUAL FOOTER CTA BUTTONS WITH PREMIUM GLOW EFFECTS */}
              <div className="flex flex-wrap justify-center items-center gap-4">
                
                {/* Business Mailbox Button */}
                <button
                  onClick={handleBusinessContinue}
                  className="group relative bg-[#06B6D4] text-white font-bold text-sm py-4 px-8 rounded-2xl overflow-hidden transition-all duration-300 shadow-md hover:shadow-[0_8px_30px_rgba(6,182,212,0.5)] active:scale-[0.98] whitespace-nowrap flex items-center gap-2 z-10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4] to-[#0891b2] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  <span className="relative z-20 flex items-center gap-2">
                    Get Business Virtual Mailbox
                    <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                  </span>
                </button>

                {/* Personal Mailbox Button */}
                <button
                  onClick={handlePersonalContinue}
                  className="group relative bg-[#06B6D4] text-white font-bold text-sm py-4 px-8 rounded-2xl overflow-hidden transition-all duration-300 shadow-md hover:shadow-[0_8px_30px_rgba(6,182,212,0.5)] active:scale-[0.98] whitespace-nowrap flex items-center gap-2 z-10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4] to-[#0891b2] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  <span className="relative z-20 flex items-center gap-2">
                    Get Personal Virtual Mailbox
                    <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                  </span>
                </button>

              </div>
            </div>
          </div>
        </section>
      </div>
    </NavigationWrapper>
  );
}