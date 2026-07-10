// "use client";

// import React, { useState, useEffect } from "react";
// import NavigationWrapper from "@/components/NavigationWrapper";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import {
//   Star,
//   Shield,
//   FileText,
//   Landmark,
//   Handshake,
//   BadgeCheck,
//   ChevronDown,
//   CheckCircle2,
// } from "lucide-react";

// // ---------- Shared data ----------

// const needList = [
//   {
//     id: 1,
//     icon: Landmark,
//     title: "State Governments",
//     desc: "If you want to operate in another state, you'll need this certificate for Foreign Qualification.",
//     tag: "Foreign Qualification"
//   },
//   {
//     id: 2,
//     icon: FileText,
//     title: "Lenders or Banks",
//     desc: "Most loan applications and financial transactions require it before they'll even consider moving forward.",
//     tag: "Capital Access"
//   },
//   {
//     id: 3,
//     icon: Handshake,
//     title: "Investors or Business Partners",
//     desc: "It shows that your business is operating legally and in full compliance — something serious partners always want to see.",
//     tag: "Due Diligence"
//   },
//   {
//     id: 4,
//     icon: BadgeCheck,
//     title: "Business Licenses and Insurance",
//     desc: "Certain licenses and insurance policies won't be issued until you can provide this certificate.",
//     tag: "Risk Underwriting"
//   },
// ];

// const whyChoose = [
//   {
//     id: 1,
//     title: "Straightforward Pricing",
//     desc: "No subscriptions, no hidden fees, no surprises — just honest, transparent costs.",
//   },
//   {
//     id: 2,
//     title: "Better Value",
//     desc: "We're more affordable than most other providers out there.",
//   },
//   {
//     id: 3,
//     title: "Real Support",
//     desc: "You get dedicated specialists who are fast, friendly, and actually helpful.",
//   },
//   {
//     id: 4,
//     title: "A Smarter Experience",
//     desc: "Our easy-to-use dashboard keeps all your documents organized and accessible in one place.",
//   },
// ];

// const faqs = [
//   {
//     q: "What is a Certificate of Good Standing?",
//     a: "A Certificate of Good Standing is an official document issued by a state's Secretary of State office. It certifies that your business is in compliance with state regulations and is in good standing.",
//   },
//   {
//     q: "Why might I need one?",
//     a: "You may need one for foreign qualification to operate in another state, applying for loans or financing, attracting investors, or obtaining certain business licenses and insurance.",
//   },
//   {
//     q: "How do I get one?",
//     a: "You can request it directly from your state's Secretary of State office, or let Incorp Bay handle the paperwork for you quickly and easily.",
//   },
// ];

// // ---------- Small building blocks ----------

// function Badge({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
//       {children}
//     </div>
//   );
// }

// function PrimaryButton({ children, href }: { children: React.ReactNode; href?: string }) {
//   if (href) {
//     return (
//       <Link href={href} className="rounded-full bg-[#06B6D4] px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-[#06B6D4]/25 transition-all hover:bg-[#0891b2] hover:shadow-[0_8px_30px_rgba(6,182,212,0.4)]">
//         {children}
//       </Link>
//     );
//   }
//   return (
//     <button className="rounded-full bg-[#06B6D4] px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-[#06B6D4]/25 transition-all hover:bg-[#0891b2] hover:shadow-[0_8px_30px_rgba(6,182,212,0.4)]">
//       {children}
//     </button>
//   );
// }

// function GhostButton({ children }: { children: React.ReactNode }) {
//   return (
//     <button className="rounded-full border-2 border-[#06B6D4] px-8 py-3.5 text-sm font-bold text-[#06B6D4] transition-colors hover:bg-[#06B6D4]/5">
//       {children}
//     </button>
//   );
// }

// // ---------- Section 1: Hero ----------

// function Hero() {
//   const router = useRouter();
  
//   const handleGetStarted = () => {
//     router.push("/cert-good-standing/step-1");
//   };
  
//   return (
//     <section className="relative grid grid-cols-1 items-center gap-12 overflow-hidden px-6 py-16 md:grid-cols-2 md:px-16 md:py-24">
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.03]"
//         style={{
//           backgroundImage:
//             "linear-gradient(#06B6D4 1px, transparent 1px), linear-gradient(90deg, #06B6D4 1px, transparent 1px)",
//           backgroundSize: "40px 40px",
//         }}
//       />
//       <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-[#06B6D4]/10 blur-[90px]" />

//       <div className="relative z-10">
//         <Badge>
//           <span>Excellent 4.7 out of 5</span>
//           <Star className="h-4 w-4 fill-[#06B6D4] text-[#06B6D4]" />
//           <span>Trustpilot</span>
//         </Badge>

//         <h1 className="mt-6 text-5xl font-bold leading-tight text-[#1E293B] md:text-6xl">
//           Get Your <span className="text-[#06B6D4]">Certificate of Good Standing</span>
//         </h1>

//         <p className="mt-6 max-w-md text-xl text-gray-500 leading-relaxed">
//           A Certificate of Good Standing confirms your business complies with
//           state regulations. Get yours quickly and easily.
//         </p>

//         <div className="mt-8 flex flex-wrap items-center gap-4">
//           <button onClick={handleGetStarted} className="rounded-full bg-[#06B6D4] px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-[#06B6D4]/25 transition-all hover:bg-[#0891b2] hover:shadow-[0_8px_30px_rgba(6,182,212,0.4)]">
//             GET STARTED
//           </button>
//           <GhostButton>LEARN MORE</GhostButton>
//         </div>
//       </div>

//       <div className="relative z-10">
//         <div className="absolute inset-0 -z-10 scale-95 rounded-3xl bg-gradient-to-br from-[#06B6D4]/8 to-[#06B6D4]/4" />
//         <div className="mx-auto max-w-md -rotate-2 rounded-xl border-[14px] border-[#1E293B] bg-white p-8 shadow-2xl">
//           <div className="border-l-4 border-[#06B6D4] pl-4">
//             <h2 className="text-2xl font-bold uppercase leading-tight text-[#1E293B]">
//               Certificate <br /> of{" "}
//               <span className="text-[#06B6D4]">Good Standing</span>
//             </h2>
//           </div>
//           <p className="mt-4 text-[11px] font-semibold uppercase leading-relaxed text-slate-700">
//             A certificate of good standing is an official document issued by
//             a state agency. It certifies that your business is properly
//             registered with all necessary legal obligations.
//           </p>
//           <div className="mt-4 grid grid-cols-2 gap-3 text-[9px] leading-relaxed text-slate-400">
//             <p>
//               If you own a corporation, LLC, or any other formed business
//               entity, you may need a certificate of good standing. This
//               certificate can be crucial when expanding to another state,
//               seeking funding from investors, or applying for business
//               licenses. Sole proprietorships and partnerships typically do
//               not need this certificate, as they are not required to
//               formally register with the state.
//             </p>
//             <p>
//               The certificate confirms that your business is in compliance
//               with state regulations, and can be particularly important if
//               you&apos;re trying to obtain financing, enter contracts with
//               certain partners, or expand into new markets. Keep in mind
//               that if you fail to meet legal obligations, like missing
//               deadlines for annual reports, you may lose your good standing
//               status, which can impact your business operations.
//             </p>
//           </div>
//           <div className="mt-6 flex items-center justify-between border-t border-dashed border-slate-200 pt-4">
//             <div className="h-10 w-10 rounded-full border border-slate-300" />
//             <div className="text-right">
//               <p className="font-serif text-lg italic text-slate-700">
//                 J. Doe
//               </p>
//               <p className="text-[10px] text-slate-400">Secretary of State</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // ---------- Section 2: Trust + cards ----------

// function TrustSection() {
//   return (
//     <section className="px-6 py-16 md:px-16 bg-[#F8FAFC]">
//       <p className="text-center text-base md:text-xl font-bold text-slate-700 max-w-4xl mx-auto leading-relaxed">
//         Bootstrapped, Founder Led, Independently Owned{" "}
//         <span className="bg-cyan-50 px-2 py-0.5 rounded-lg font-extrabold text-[#06B6D4] whitespace-nowrap shadow-sm">
//           Since 2004
//         </span>{" "}
//         With{" "}
//         <span className="bg-cyan-50 px-2 py-0.5 rounded-lg font-extrabold text-[#06B6D4] shadow-sm">
//           Over 1,000,000 Entrepreneurs
//         </span>{" "}
//         Served!
//       </p>

//       <div className="mx-auto mt-12 max-w-6xl rounded-3xl bg-[#ECEFF1]/50 p-8 md:p-12">
//         <h2 className="text-center text-3xl md:text-[42px] font-medium tracking-tight text-slate-900 leading-tight">
//           Prove Your Business is in Good Standing
//         </h2>
//         <p className="mx-auto mt-4 max-w-2xl text-center text-sm font-medium text-slate-500">
//           Required for business expansions, loan applications, and verifying your company's legitimacy
//         </p>

//         <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          
//           {/* Card 1 */}
//           <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm min-h-[390px]">
//             <div className="relative w-full h-60 bg-slate-50/50 rounded-xl overflow-hidden flex items-center justify-center p-4">
//               <div className="absolute inset-4 border border-slate-100 bg-white rounded-xl shadow-sm rotate-2 translate-y-1" />
//               <div className="relative w-full bg-white rounded-xl border border-slate-100 p-4 shadow-md -rotate-1">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Market Growth</p>
//                     <p className="text-base font-extrabold text-slate-800">Pennsylvania</p>
//                   </div>
//                   <div className="rounded-xl bg-[#06B6D4] p-2.5 text-white flex items-center justify-center">
//                     <span className="text-sm font-bold">⚡</span>
//                   </div>
//                 </div>
//                 <div className="mt-6 relative h-24 w-full">
//                   <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
//                     <path d="M0,35 Q15,32 30,24 T60,26 T90,8 L100,4" fill="none" stroke="#06B6D4" strokeWidth="2.5" />
//                     <path d="M0,35 Q15,32 30,24 T60,26 T90,8 L100,4 L100,40 L0,40 Z" fill="url(#gradient-cyan)" opacity="0.15" />
//                     <defs>
//                       <linearGradient id="gradient-cyan" x1="0" y1="0" x2="0" y2="1">
//                         <stop offset="0%" stopColor="#06B6D4" />
//                         <stop offset="100%" stopColor="#FFFFFF" />
//                       </linearGradient>
//                     </defs>
//                     <circle cx="78" cy="14" r="3.5" fill="#06B6D4" />
//                   </svg>
//                   <div className="absolute top-2 right-12 bg-slate-900 text-[8px] text-white px-2 py-0.5 rounded font-bold shadow-sm">
//                     Step 3: Business Expansion
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <p className="mt-6 text-sm font-bold text-slate-800">
//               Expand into <span className="text-[#06B6D4]">New Markets</span>
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm min-h-[390px]">
//             <div className="relative w-full h-60 bg-slate-50/50 rounded-xl overflow-hidden flex flex-col items-center justify-center">
//               <span className="absolute top-4 left-4 text-sm font-bold text-slate-800">
//                 Secure <span className="text-[#06B6D4]">Financing</span>
//               </span>
//               <div className="relative flex items-center justify-center w-36 h-36 mt-4">
//                 <Shield className="absolute inset-0 h-full w-full text-slate-200" strokeWidth={1.2} />
//                 <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#06B6D4] text-white shadow-lg shadow-cyan-500/20">
//                   <span className="text-2xl font-black">$</span>
//                 </div>
//               </div>
//             </div>
//             <p className="mt-6 text-sm font-semibold text-slate-400 invisible select-none">Spacer</p>
//           </div>

//           {/* Card 3 */}
//           <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm min-h-[390px]">
//             <div className="relative w-full h-60 bg-slate-50/50 rounded-xl overflow-hidden flex items-center justify-center p-4">
//               <div className="absolute inset-6 border border-slate-100 bg-white rounded-2xl shadow-sm rotate-3 translate-x-1" />
//               <div className="absolute inset-5 border border-slate-100 bg-white rounded-2xl shadow-sm -rotate-2" />
//               <div className="relative w-60 bg-white rounded-2xl border border-slate-100/70 p-5 shadow-xl flex flex-col items-center text-center">
//                 <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-white shadow-md bg-slate-300">
//                   <img 
//                     src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=120" 
//                     alt="Robert Williams"
//                     className="h-full w-full object-cover" 
//                   />
//                 </div>
//                 <p className="mt-3 font-extrabold text-slate-800 text-base">Robert Williams</p>
//                 <p className="text-xs font-semibold text-slate-400">Chief Finance Officer</p>
//                 <div className="mt-4 w-full rounded-xl border border-slate-100 px-4 py-1.5 text-xs font-bold text-slate-500 bg-slate-50/50">
//                   Austin, Texas
//                 </div>
//               </div>
//             </div>
//             <p className="mt-6 text-sm font-bold text-slate-800">
//               Establish <span className="text-[#06B6D4]">Trust</span> with <span className="text-[#06B6D4]">Stakeholder</span>
//             </p>
//           </div>

//         </div>
//       </div>

//       <div className="mx-auto mt-6 flex max-w-6xl items-center gap-4 rounded-2xl border border-slate-200/60 bg-white px-6 py-4 text-sm font-medium text-slate-700 shadow-sm">
//         <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-[#06B6D4]">
//           <CheckCircle2 className="h-5 w-5 fill-current text-white" style={{ stroke: "#06B6D4" }} />
//         </div>
//         <p className="leading-relaxed text-slate-800">
//           You can file the necessary forms yourself or let <span className="font-bold text-slate-900">Incorp Bay</span> handle the paperwork for you efficiently and cost-effectively.
//         </p>
//       </div>
//     </section>
//   );
// }

// // ---------- Section 3: When do you need one ----------

// // ICON_SIZE = 48px (w-12 h-12), ITEM_HEIGHT = 120px (min-h-[120px]), GAP = 48px (mb-12)
// // Track starts at center of icon 1 (top = 24px) and ends at center of icon 4
// // Total track height = (totalSteps - 1) * (ITEM_HEIGHT + GAP) = 3 * 168 = 504px
// // But actual rendered heights vary, so we use: trackHeight = (n-1) items * itemSpacing
// // itemSpacing = min-h + mb = 120 + 48 = 168px
// const ITEM_SPACING = 168; // px: min-h-[120px] + mb-12 (48px)
// const ICON_CENTER = 24;   // px: half of w-12 h-12 (48px)

// function WhenSection() {
//   const [progressPercent, setProgressPercent] = useState(0);
//   const totalSteps = needList.length;
//   // Track height in px: from center of icon 1 to center of icon 4
//   const trackHeightPx = (totalSteps - 1) * ITEM_SPACING;

//   useEffect(() => {
//     let animationFrameId: number;
//     let startTime: number | null = null;
//     const duration = 12000;

//     const animate = (timestamp: number) => {
//       if (!startTime) startTime = timestamp;
//       const elapsed = timestamp - startTime;
//       const progress = (elapsed % duration) / duration;
//       setProgressPercent(progress * 100);
//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animationFrameId = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(animationFrameId);
//   }, []);

//   const clampedProgress = Math.min(progressPercent, 100);
//   // Cyan fill height in px — capped at trackHeightPx
//   const fillHeightPx = (clampedProgress / 100) * trackHeightPx;

//   const getActiveStep = () => {
//     const stepRange = 100 / totalSteps;
//     const currentStep = Math.floor(clampedProgress / stepRange) + 1;
//     return Math.min(currentStep, totalSteps);
//   };

//   const currentActiveStep = getActiveStep();

//   return (
//     <section className="bg-white py-16">
//       <div className="text-center px-4 mb-16">
//         <h2 className="text-3xl md:text-[44px] font-light tracking-normal text-slate-900 max-w-4xl mx-auto leading-snug">
//           When Do You Need a Certificate of <br className="hidden md:inline" /> Good Standing?
//         </h2>
//       </div>
 
//       <div className="md:flex gap-10 items-center mx-5 max-w-6xl lg:mx-auto">
//         <div className="w-full md:w-1/2 md:px-16">
//           <div className="relative w-full flex flex-col py-6">

//             {/* Grey background track: starts at center of icon 1, ends at center of icon 4 */}
//             <div
//               className="absolute w-1 bg-slate-100 rounded-full z-0"
//               style={{
//                 left: "24px",
//                 top: `${ICON_CENTER}px`,
//                 height: `${trackHeightPx}px`,
//               }}
//             >
//               {/* Cyan fill: grows from top, capped at trackHeightPx */}
//               <div
//                 className="w-full bg-[#06B6D4] rounded-full origin-top"
//                 style={{ height: `${fillHeightPx}px` }}
//               />
//             </div>

//             {needList.map((step, idx) => {
//               const StepIcon = step.icon;
//               const stepNumber = idx + 1;
//               const isPassed = idx < currentActiveStep;
//               const isCurrent = currentActiveStep === stepNumber;

//               return (
//                 <div
//                   key={step.id}
//                   className="relative flex flex-row items-start w-full min-h-[120px] mb-12 last:mb-0 z-10 select-none"
//                 >
//                   <div
//                     className={`absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 z-10 ${
//                       isPassed
//                         ? "bg-cyan-50 border-[#06B6D4] text-[#06B6D4] shadow-md scale-105"
//                         : "bg-white border-slate-300 text-slate-400"
//                     } ${isCurrent ? "ring-4 ring-cyan-100/70" : ""}`}
//                   >
//                     <StepIcon className="w-5 h-5" strokeWidth={2.5} />
//                   </div>

//                   <div className="w-full pl-16 text-left">
//                     <h4
//                       className={`md:text-xl text-lg font-bold transition-colors duration-300 ${
//                         isCurrent ? "text-[#06B6D4]" : isPassed ? "text-cyan-600/70" : "text-slate-400"
//                       }`}
//                     >
//                       {step.title}
//                     </h4>

//                     <p
//                       className={`md:text-base text-sm mt-1 leading-relaxed transition-all duration-300 ${
//                         isCurrent ? "text-slate-700 opacity-100" : "text-slate-400/70 opacity-60"
//                       }`}
//                     >
//                       {step.desc}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         <div className="md:w-1/2 flex justify-center pt-5 md:pt-0">
//           <Image
//             src="/amendment/a3.webp"
//             alt="Articles Amendment"
//             width={500}
//             height={500}
//             className="object-contain transform transition-transform duration-500 hover:scale-[1.02]"
//             priority
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// // ---------- Section 4: Why choose us ----------

// function WhyChooseSection() {
//   const [progressPercent, setProgressPercent] = useState(0);
//   const totalSteps = whyChoose.length;
//   const trackHeightPx = (totalSteps - 1) * ITEM_SPACING;

//   useEffect(() => {
//     let animationFrameId: number;
//     let startTime: number | null = null;
//     const duration = 12000;

//     const animate = (timestamp: number) => {
//       if (!startTime) startTime = timestamp;
//       const elapsed = timestamp - startTime;
//       const progress = (elapsed % duration) / duration;
//       setProgressPercent(progress * 100);
//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animationFrameId = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(animationFrameId);
//   }, []);

//   const clampedProgress = Math.min(progressPercent, 100);
//   const fillHeightPx = (clampedProgress / 100) * trackHeightPx;

//   const getActiveStep = () => {
//     const stepRange = 100 / totalSteps;
//     const currentStep = Math.floor(clampedProgress / stepRange) + 1;
//     return Math.min(currentStep, totalSteps);
//   };

//   const currentActiveStep = getActiveStep();

//   return (
//     <section className="px-6 py-16 md:px-16 bg-white">
//       <span className="block text-center text-xs font-semibold uppercase tracking-widest text-[#06B6D4] mb-3">
//         Trusted by millions
//       </span>
//       <h2 className="text-center text-4xl font-bold text-[#1E293B]">
//         Why Choose Us?
//       </h2>

//       <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        
//         {/* Left Side Graphics Deck */}
//         <div className="relative mx-auto w-full max-w-sm">
//           <div className="h-48 rounded-2xl bg-[#1E293B]" />
//           <div className="absolute -top-6 left-1/2 w-72 -translate-x-1/2 rounded-xl bg-white p-5 shadow-xl">
//             <p className="text-xs text-slate-400">Total Taxes</p>
//             <p className="text-2xl font-bold text-[#1E293B]">$12,128</p>
//             <div className="mt-3 h-16 rounded-lg bg-gradient-to-t from-[#06B6D4]/15 to-transparent" />
//           </div>
//           <div className="absolute -bottom-10 left-1/2 w-72 -translate-x-1/2 rounded-xl bg-white p-4 shadow-lg">
//             <p className="text-xs font-semibold text-[#1E293B]">Documents</p>
//             <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
//               <span>Annual Report</span>
//               <span>06/08/2024</span>
//             </div>
//             <div className="mt-1 flex items-center justify-between text-xs text-slate-500">
//               <span>Tax Filings</span>
//               <span>01/24/2024</span>
//             </div>
//           </div>
//         </div>

//         {/* Right Content Engine */}
//         <div className="w-full md:px-4">
//           <div className="relative w-full flex flex-col py-6">

//             {/* Grey track: starts at center of icon 1, ends exactly at center of icon 4 */}
//             <div
//               className="absolute w-1 bg-slate-100 rounded-full z-0"
//               style={{
//                 left: "24px",
//                 top: `${ICON_CENTER}px`,
//                 height: `${trackHeightPx}px`,
//               }}
//             >
//               {/* Cyan fill: grows in px, capped at trackHeightPx */}
//               <div
//                 className="w-full bg-[#06B6D4] rounded-full origin-top"
//                 style={{ height: `${fillHeightPx}px` }}
//               />
//             </div>

//             {whyChoose.map((step, idx) => {
//               const stepNumber = idx + 1;
//               const isPassed = idx < currentActiveStep;
//               const isCurrent = currentActiveStep === stepNumber;

//               return (
//                 <div
//                   key={step.id}
//                   className="relative flex flex-row items-start w-full min-h-[120px] mb-12 last:mb-0 z-10 select-none"
//                 >
//                   <div
//                     className={`absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 z-10 font-bold text-sm ${
//                       isPassed
//                         ? "bg-cyan-50 border-[#06B6D4] text-[#06B6D4] shadow-md scale-105"
//                         : "bg-white border-slate-300 text-slate-400"
//                     } ${isCurrent ? "ring-4 ring-cyan-100/70" : ""}`}
//                   >
//                     {step.id}
//                   </div>

//                   <div className="w-full pl-16 text-left">
//                     <h4
//                       className={`md:text-xl text-lg font-bold transition-colors duration-300 ${
//                         isCurrent ? "text-[#06B6D4]" : isPassed ? "text-cyan-600/70" : "text-slate-400"
//                       }`}
//                     >
//                       {step.title}
//                     </h4>

//                     <p
//                       className={`md:text-base text-sm mt-1 leading-relaxed transition-all duration-300 ${
//                         isCurrent ? "text-slate-700 opacity-100" : "text-slate-400/70 opacity-60"
//                       }`}
//                     >
//                       {step.desc}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

// // ---------- Section 5: FAQ ----------

// function FAQSection() {
//   const [open, setOpen] = useState<number | null>(0);

//   return (
//     <section className="px-6 py-16 md:px-16">
//       <div className="mx-auto max-w-2xl">
//         <p className="text-xs font-semibold uppercase tracking-widest text-[#06B6D4]">
//           Key Considerations
//         </p>
//         <h2 className="mt-2 text-4xl font-bold text-[#1E293B]">
//           Common Questions About Obtaining a Certificate of Good Standing
//         </h2>

//         <div className="mt-8 divide-y divide-slate-200">
//           {faqs.map(({ q, a }, i) => (
//             <div key={q}>
//               <button
//                 onClick={() => setOpen(open === i ? null : i)}
//                 className="flex w-full items-center justify-between py-5 text-left text-sm font-semibold text-gray-600 hover:text-[#1E293B] transition-colors"
//               >
//                 {q}
//                 <ChevronDown
//                   className={`h-5 w-5 flex-shrink-0 transition-transform ${
//                     open === i ? "rotate-180 text-[#06B6D4]" : "text-slate-400"
//                   }`}
//                 />
//               </button>
//               {open === i && (
//                 <p className="pb-5 text-sm leading-relaxed text-gray-500">
//                   {a}
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // ---------- Section 6: CTA ----------

// function CTASection() {
//   const router = useRouter();
  
//   const handleGetStarted = () => {
//     router.push("/cert-good-standing/step-1");
//   };
  
//   return (
//     <section className="px-6 py-16 md:px-16">
//       <div 
//         className="relative mx-auto max-w-4xl rounded-[40px] overflow-hidden py-14 px-8 sm:px-12 text-center shadow-2xl border border-white/5" 
//         style={{ background: 'linear-gradient(135deg, #1E293B 0%, #06B6D4 100%)' }}
//       >

//         <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#06B6D4]/20 to-transparent"/>
//         <div className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 w-72 h-72 bg-[#06B6D4]/30 rounded-full blur-[80px]"/>

//         <div className="relative grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-6 p-2 md:p-6 items-center">
//           {/* Left Layout Container */}
//           <div className="relative z-10 flex flex-col items-start text-left w-full pt-2 space-y-4">
//             <span className="bg-[#06B6D4] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
//               Incorporate Now
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white tracking-tight">
//               Ready To Take <br /> Your Startup To <br /> The Next Level?
//             </h2>
//             <p className="text-xs md:text-sm text-slate-300/90 leading-relaxed">
//               No Contracts. No Surprises. <br />
//               Only $0 + State Fee to Launch Your Business.
//             </p>
//             <button onClick={handleGetStarted} className="group relative bg-[#06B6D4] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-cyan-500/20 transition-all hover:bg-[#0891b2] hover:scale-[1.02] active:scale-[0.98] rounded-xl">
//               <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4] to-[#0891b2] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded-xl" />
//               GET STARTED
//             </button>
//           </div>

//           {/* Right Layout Container */}
//           <div className="relative z-10 flex justify-center items-center w-full min-h-[340px] overflow-visible select-none">
//             <div className="relative w-[180px] h-[340px] flex items-center justify-center">
//               <div className="absolute inset-0 rounded-[36px] border-[3.5px] border-slate-700/70 bg-[#0F1318] shadow-2xl overflow-hidden">
//                 <div className="absolute top-2.5 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 flex items-center justify-center">
//                   <div className="w-1.5 h-1.5 bg-slate-900 rounded-full ml-auto mr-3" />
//                 </div>
//                 <div className="w-full h-full p-4 pt-9 flex flex-col text-left text-[10px] text-slate-400 relative">
//                   <p className="font-bold text-slate-200 text-xs">Business Formation</p>
//                   <div className="w-full h-[1px] bg-slate-800/60 my-2" />
//                   <p className="text-[7px] text-slate-500 uppercase tracking-wider font-bold">Status</p>
//                   <p className="text-[9px] font-medium text-slate-300 mt-0.5 flex items-center gap-1">
//                     Business Officially Registered <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
//                   </p>
//                   <div className="w-full h-[1px] bg-slate-800/60 my-2" />
//                   <p className="text-[7px] text-slate-500 uppercase tracking-wider font-bold">Registered</p>
//                   <p className="text-base font-bold text-slate-200 mt-0.5">Apr 19</p>
//                   <p className="text-[7px] text-slate-500 mt-1 leading-snug">In the office of the secretary <br /> of state of the state of <br /> california</p>
//                   <div className="w-full h-[1px] bg-slate-800/60 my-2" />
//                   <p className="text-[7px] text-slate-500 uppercase tracking-wider font-bold">Company Address</p>
//                   <p className="text-[8px] text-slate-400 mt-0.5 truncate">8721 Delmar Blvd</p>
//                 </div>
//               </div>

//               <div className="absolute top-[38%] -left-6 z-20 bg-white/95 backdrop-blur shadow-xl rounded-lg p-2 border border-slate-100 flex items-center gap-1.5 -rotate-6 transform scale-95">
//                 <span className="font-extrabold text-[10px] text-slate-800 tracking-tight">BIZFIZ CO</span>
//                 <div className="w-4 h-4 rounded-full bg-[#06B6D4] flex items-center justify-center text-white text-[8px] font-bold shadow">
//                   ✓
//                 </div>
//               </div>

//               <div className="absolute bottom-[22%] -right-5 z-20 bg-white/95 backdrop-blur shadow-xl rounded-xl p-2.5 border border-slate-100 flex flex-col items-start min-w-[110px] rotate-3 transform scale-100">
//                 <span className="text-[8px] text-[#06B6D4] font-bold uppercase tracking-wider flex items-center gap-1">
//                   📝 Official Registered
//                 </span>
//                 <span className="text-sm font-black text-slate-800 mt-1 tracking-tight">BizFiz Co</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // ---------- Full Main Render Layout ----------

// export default function CertificateLandingPage() {
//   return (
//     <NavigationWrapper>
//       <div className="min-h-screen bg-white text-[#1E293B]">
//         <Hero />
//         <TrustSection />
//         <WhenSection />
//         <WhyChooseSection />
//         <FAQSection />
//         <CTASection />
//       </div>
//     </NavigationWrapper>
//   );
// }
"use client";

import React, { useState, useEffect } from "react";
import NavigationWrapper from "@/components/NavigationWrapper";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Space_Grotesk } from "next/font/google";
import {
  Star,
  Shield,
  FileText,
  Landmark,
  Handshake,
  BadgeCheck,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";


const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400","500","600","700"],
});
const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";

const LOGO_GRADIENT_VERTICAL =
  "bg-[linear-gradient(180deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";

const LOGO_GRADIENT_TEXT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent";

const LOGO_GRADIENT_SOFT =
  "bg-[linear-gradient(90deg,rgba(36,78,182,0.10)_0%,rgba(43,147,201,0.10)_50%,rgba(51,209,204,0.10)_100%)]";


// ---------- Shared data ----------

const needList = [
  {
    id: 1,
    icon: Landmark,
    title: "State Governments",
    desc: "If you want to operate in another state, you'll need this certificate for Foreign Qualification.",
    tag: "Foreign Qualification"
  },
  {
    id: 2,
    icon: FileText,
    title: "Lenders or Banks",
    desc: "Most loan applications and financial transactions require it before they'll even consider moving forward.",
    tag: "Capital Access"
  },
  {
    id: 3,
    icon: Handshake,
    title: "Investors or Business Partners",
    desc: "It shows that your business is operating legally and in full compliance — something serious partners always want to see.",
    tag: "Due Diligence"
  },
  {
    id: 4,
    icon: BadgeCheck,
    title: "Business Licenses and Insurance",
    desc: "Certain licenses and insurance policies won't be issued until you can provide this certificate.",
    tag: "Risk Underwriting"
  },
];

const whyChoose = [
  {
    id: 1,
    title: "Straightforward Pricing",
    desc: "No subscriptions, no hidden fees, no surprises — just honest, transparent costs.",
    // icon intentionally omitted; section renders a fallback number when icon is missing
  },
  {
    id: 2,
    title: "Better Value",
    desc: "We're more affordable than most other providers out there.",
  },
  {
    id: 3,
    title: "Real Support",
    desc: "You get dedicated specialists who are fast, friendly, and actually helpful.",
  },
  {
    id: 4,
    title: "A Smarter Experience",
    desc: "Our easy-to-use dashboard keeps all your documents organized and accessible in one place.",
  },
];

const faqs = [
  {
    q: "What is a Certificate of Good Standing?",
    a: "A Certificate of Good Standing is an official document issued by a state's Secretary of State office. It certifies that your business is in compliance with state regulations and is in good standing.",
  },
  {
    q: "Why might I need one?",
    a: "You may need one for foreign qualification to operate in another state, applying for loans or financing, attracting investors, or obtaining certain business licenses and insurance.",
  },
  {
    q: "How do I get one?",
    a: "You can request it directly from your state's Secretary of State office, or let Incorp Bay handle the paperwork for you quickly and easily.",
  },
];

// ---------- Small building blocks ----------

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
      {children}
    </div>
  );
}

function PrimaryButton({ children, href }: { children: React.ReactNode; href?: string }) {
  if (href) {
    return (
      <Link href={href} className={`${LOGO_GRADIENT} rounded-full px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:brightness-110 hover:scale-[1.03] hover:shadow-[0_10px_35px_rgba(43,147,201,0.45)]`}>
        {children}
      </Link>
    );
  }
  return (
    <button className={`${LOGO_GRADIENT} rounded-full px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:brightness-110 hover:scale-[1.03] hover:shadow-[0_10px_35px_rgba(43,147,201,0.45)]`}>
      {children}
    </button>
  );
}

function GhostButton({ children }: { children: React.ReactNode }) {
  return (
    <button className={`rounded-full border-2 border-[#2B93C9] px-8 py-3.5 text-sm font-bold transition-all duration-300 hover:bg-slate-50 hover:scale-[1.03] ${LOGO_GRADIENT_TEXT}`}>
      {children}
    </button>
  );
}

// ---------- Section 1: Hero ----------

function Hero() {
  const router = useRouter();
  
  const handleGetStarted = () => {
    router.push("/cert-good-standing/step-1");
  };
  
  return (
    <section className="relative overflow-hidden px-6 py-12 md:px-16 md:py-14">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#2B93C9 1px, transparent 1px), linear-gradient(90deg, #2B93C9 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]/10 blur-[90px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
        <Badge>
          <span>Excellent 4.7 out of 5</span>
          <Star className="h-4 w-4 fill-[#2B93C9] text-[#2B93C9]" />
          <span>Trustpilot</span>
        </Badge>

        <h1 className="mt-6 text-5xl font-bold leading-tight text-[#1E293B] md:text-6xl">
          Get Your <span className={LOGO_GRADIENT_TEXT}>Certificate of Good Standing</span>
        </h1>

        <p className="mt-6 max-w-md text-xl text-black leading-relaxed">
          A Certificate of Good Standing confirms your business complies with
          state regulations. Get yours quickly and easily.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
  <button
    onClick={handleGetStarted}
    className={`${LOGO_GRADIENT} group relative overflow-hidden rounded-full px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_35px_rgba(43,147,201,0.45)]`}
  >
    {/* Top Gloss */}
    <span className="absolute inset-x-0 top-0 h-1/2 rounded-full bg-gradient-to-b from-white/20 to-transparent" />

    {/* Shine Animation */}
    <span className="absolute -left-20 top-0 h-full w-12 -skew-x-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />

    <span className="relative z-10 flex items-center gap-2">
      GET STARTED

      <svg
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 12h14M13 5l7 7-7 7"
        />
      </svg>
    </span>
  </button>

  <button
    className="group rounded-full border-2 border-[#2B93C9] bg-white px-8 py-3.5 text-sm font-bold text-[#2B93C9] transition-all duration-300 hover:bg-[#2B93C9] hover:text-white hover:shadow-lg"
  >
    <span className="flex items-center gap-2">
      LEARN MORE

      <svg
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 12h14M13 5l7 7-7 7"
        />
      </svg>
    </span>
  </button>
</div>

        </div>

      <div>
        <div className="relative mx-auto max-w-md">
        <div className="absolute inset-0 -z-10 scale-95 rounded-3xl bg-gradient-to-br from-[#06B6D4]/8 to-[#06B6D4]/4" />
        <div className="mx-auto max-w-md -rotate-2 rounded-xl border-[14px] border-[#1E293B] bg-white p-8 shadow-2xl">
          <div className="border-l-4 border-[#2B93C9] pl-4">
            <h2 className="text-2xl font-bold uppercase leading-tight text-[#1E293B]">
              Certificate <br /> of{" "}
              <span className={LOGO_GRADIENT_TEXT}>Good Standing</span>
            </h2>
          </div>
          <p className="mt-4 text-[11px] font-semibold uppercase leading-relaxed text-slate-700">
            A certificate of good standing is an official document issued by
            a state agency. It certifies that your business is properly
            registered with all necessary legal obligations.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-[9px] leading-relaxed text-slate-400">
            <p>
              If you own a corporation, LLC, or any other formed business
              entity, you may need a certificate of good standing. This
              certificate can be crucial when expanding to another state,
              seeking funding from investors, or applying for business
              licenses. Sole proprietorships and partnerships typically do
              not need this certificate, as they are not required to
              formally register with the state.
            </p>
            <p>
              The certificate confirms that your business is in compliance
              with state regulations, and can be particularly important if
              you&apos;re trying to obtain financing, enter contracts with
              certain partners, or expand into new markets. Keep in mind
              that if you fail to meet legal obligations, like missing
              deadlines for annual reports, you may lose your good standing
              status, which can impact your business operations.
            </p>
          </div>
          <div className="mt-6 flex items-center justify-between border-t border-dashed border-slate-200 pt-4">
            <div className="h-10 w-10 rounded-full border border-slate-300" />
            <div className="text-right">
              <p className="font-serif text-lg italic text-slate-700">
                J. Doe
              </p>
              <p className="text-[10px] text-slate-400">Secretary of State</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>
    </section>
  );
}

// ---------- Section 2: Trust + cards ----------

function TrustSection() {
  return (
    <section className="px-6 py-12 md:px-16 md:py-14 bg-[White]">
      <p className="text-center text-base md:text-xl font-bold text-slate-700 max-w-4xl mx-auto leading-relaxed">
        Bootstrapped, Founder Led, Independently Owned{" "}
        <span className="bg-slate-50 px-2 py-0.5 rounded-lg font-extrabold bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent whitespace-nowrap shadow-sm">
          Since 2004
        </span>{" "}
        With{" "}
        <span className="bg-slate-50 px-2 py-0.5 rounded-lg font-extrabold bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent shadow-sm">
          Over 1,000,000 Entrepreneurs
        </span>{" "}
        Served!
      </p>

      <div className="mx-auto mt-8 max-w-6xl rounded-3xl bg-[#ECEFF1]/50 p-8 md:p-12">
        <h2 className={`text-center text-4xl font-bold max-w-4xl mx-auto leading-tight `}>
  Prove Your Business is in Good Standing
</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm font-medium text-black">
          Required for business expansions, loan applications, and verifying your company's legitimacy
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          
          {/* Card 1 */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm min-h-[390px]">
            <div className="relative w-full h-60 bg-slate-50/50 rounded-xl overflow-hidden flex items-center justify-center p-4">
              <div className="absolute inset-4 border border-slate-100 bg-white rounded-xl shadow-sm rotate-2 translate-y-1" />
              <div className="relative w-full bg-white rounded-xl border border-slate-100 p-4 shadow-md -rotate-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Market Growth</p>
                    <p className="text-base font-extrabold text-slate-800">Pennsylvania</p>
                  </div>
                  <div className={`${LOGO_GRADIENT} rounded-xl p-2.5 text-white flex items-center justify-center`}>
                    <span className="text-sm font-bold">⚡</span>
                  </div>
                </div>
                <div className="mt-6 relative h-24 w-full">
                  <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                    <path d="M0,35 Q15,32 30,24 T60,26 T90,8 L100,4" fill="none" stroke="#2B93C9" strokeWidth="2.5" />
                    <path d="M0,35 Q15,32 30,24 T60,26 T90,8 L100,4 L100,40 L0,40 Z" fill="url(#gradient-cyan)" opacity="0.15" />
                    <defs>
                      <linearGradient id="gradient-cyan" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#244EB6" />
                        <stop offset="50%" stopColor="#2B93C9" />
                        <stop offset="100%" stopColor="#33D1CC" />
                        <stop offset="100%" stopColor="#FFFFFF" />
                      </linearGradient>
                    </defs>
                    <circle cx="78" cy="14" r="3.5" fill="#2B93C9" />
                  </svg>
                  <div className="absolute top-2 right-12 bg-slate-900 text-[8px] text-white px-2 py-0.5 rounded font-bold shadow-sm">
                    Step 3: Business Expansion
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm font-bold text-slate-800">
              Expand into <span className="bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent">New Markets</span>
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm min-h-[390px]">
            <div className="relative w-full h-60 bg-slate-50/50 rounded-xl overflow-hidden flex flex-col items-center justify-center">
              <span className="absolute top-4 left-4 text-sm font-bold text-slate-800">
                Secure <span className="bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent">Financing</span>
              </span>
              <div className="relative flex items-center justify-center w-36 h-36 mt-4">
                <Shield className="absolute inset-0 h-full w-full text-slate-200" strokeWidth={1.2} />
                <div className={`${LOGO_GRADIENT} relative z-10 flex h-16 w-16 items-center justify-center rounded-full text-white shadow-lg shadow-[#2B93C9]/25`}>
                  <span className="text-2xl font-black">$</span>
                </div>
              </div>
            </div>
             <p className="mt-6 text-sm font-bold text-slate-800">
             Open Business <span className="bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent">Bank Accounts</span>
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm min-h-[390px]">
            <div className="relative w-full h-60 bg-slate-50/50 rounded-xl overflow-hidden flex items-center justify-center p-4">
              <div className="absolute inset-6 border border-slate-100 bg-white rounded-2xl shadow-sm rotate-3 translate-x-1" />
              <div className="absolute inset-5 border border-slate-100 bg-white rounded-2xl shadow-sm -rotate-2" />
              <div className="relative w-60 bg-white rounded-2xl border border-slate-100/70 p-5 shadow-xl flex flex-col items-center text-center">
                <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-white shadow-md bg-slate-300">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=120" 
                    alt="Robert Williams"
                    className="h-full w-full object-cover" 
                  />
                </div>
                <p className="mt-3 font-extrabold text-slate-800 text-base">Robert Williams</p>
                <p className="text-xs font-semibold text-slate-400">Chief Finance Officer</p>
                <div className="mt-4 w-full rounded-xl border border-slate-100 px-4 py-1.5 text-xs font-bold text-slate-500 bg-slate-50/50">
                  Austin, Texas
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm font-bold text-slate-800">
              Establish <span className="bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent">Trust</span> with <span className="bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent">Stakeholder</span>
            </p>
          </div>

        </div>
      </div>

      <div className="mx-auto mt-6 flex max-w-6xl items-center justify-Left gap-4 rounded-2xl border border-slate-200/60 bg-white px-6 py-4 text-sm font-medium text-slate-700 shadow-sm text-center">
  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center">
    <CheckCircle2
      className="h-6 w-6"
      style={{
        stroke: "url(#logoGradient)",
        fill: "none",
      }}
    />
    <svg width="0" height="0">
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#244EB6" />
          <stop offset="50%" stopColor="#2B93C9" />
          <stop offset="100%" stopColor="#33D1CC" />
        </linearGradient>
      </defs>
    </svg>
  </div>

  <p className="leading-relaxed text-slate-800">
    You can file the necessary forms yourself or let{" "}
    <span className="bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text font-bold text-transparent">
      Incorp Bay
    </span>{" "}
    handle the paperwork for you efficiently and cost-effectively.
  </p>
</div>
    </section>
  );
}

// ---------- Section 3: When do you need one ----------

// ICON_SIZE = 48px (w-12 h-12), ITEM_HEIGHT = 120px (min-h-[120px]), GAP = 48px (mb-12)
// Track starts at center of icon 1 (top = 24px) and ends at center of icon 4
// Total track height = (totalSteps - 1) * (ITEM_HEIGHT + GAP) = 3 * 168 = 504px
// But actual rendered heights vary, so we use: trackHeight = (n-1) items * itemSpacing
// itemSpacing = min-h + mb = 120 + 48 = 168px
const ITEM_SPACING = 168; // px: min-h-[120px] + mb-12 (48px)
const ICON_CENTER = 24;   // px: half of w-12 h-12 (48px)

function WhenSection() {
  const [progressPercent, setProgressPercent] = useState(0);
  const totalSteps = needList.length;
  // Track height in px: from center of icon 1 to center of icon 4
  const trackHeightPx = (totalSteps - 1) * ITEM_SPACING;

  useEffect(() => {
    let animationFrameId: number;
    let startTime: number | null = null;
    const duration = 12000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % duration) / duration;
      setProgressPercent(progress * 100);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const clampedProgress = Math.min(progressPercent, 100);
  // Cyan fill height in px — capped at trackHeightPx
  const fillHeightPx = (clampedProgress / 100) * trackHeightPx;

  const getActiveStep = () => {
    const stepRange = 100 / totalSteps;
    const currentStep = Math.floor(clampedProgress / stepRange) + 1;
    return Math.min(currentStep, totalSteps);
  };

  const currentActiveStep = getActiveStep();

  return (
    <section className="bg-white px-6 py-10 md:px-16 md:py-12">
      <div className="text-center mb-8">
        <h2 className={`text-center text-4xl md:text-4xl font-bold max-w-4xl mx-auto leading-tight `}>
  When Do You Need a Certificate of <br className="hidden md:inline" /> Good Standing?
</h2>
      </div>
 
      <div className="md:flex gap-10 items-center mx-auto max-w-6xl">
        <div className="w-full md:w-1/2 md:px-16">
          <div className="relative w-full flex flex-col py-2">

            {/* Grey background track: starts at center of icon 1, ends at center of icon 4 */}
            <div
              className="absolute w-1 bg-slate-100 rounded-full z-0"
              style={{
                left: "24px",
                top: `${ICON_CENTER}px`,
                height: `${trackHeightPx}px`,
              }}
            >
              {/* Cyan fill: grows from top, capped at trackHeightPx */}
              <div
                className={`${LOGO_GRADIENT_VERTICAL} w-full rounded-full origin-top`}
                style={{ height: `${fillHeightPx}px` }}
              />
            </div>

            {needList.map((step, idx) => {
              const StepIcon = step.icon;
              const stepNumber = idx + 1;
              const isPassed = idx < currentActiveStep;
              const isCurrent = currentActiveStep === stepNumber;

              return (
                <div
                  key={step.id}
                  className="relative flex flex-row items-start w-full min-h-[120px] mb-12 last:mb-0 z-10 select-none"
                >
                  <div
                    className={`absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 z-10 ${
                      isPassed
                        ? "bg-slate-50 border-[#2B93C9] text-[#2B93C9] shadow-md scale-105"
                        : "bg-white border-slate-300 text-slate-400"
                    } ${isCurrent ? "ring-4 ring-[#33D1CC]/20" : ""}`}
                  >
                    <StepIcon className="w-5 h-5" strokeWidth={2.5} />
                  </div>

                  <div className="w-full pl-16 text-left">
                    <h4 className={`md:text-xl text-lg font-bold ${LOGO_GRADIENT_TEXT}`}>
                      {step.title}
                    </h4>

                    <p className="md:text-base text-sm mt-1 leading-relaxed text-black">
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
            className="object-contain transform transition-transform duration-500 hover:scale-[1.02]"
            priority
          />
        </div>
      </div>
    </section>
  );
}

// ---------- Section 4: Why choose us ----------

function WhyChooseSection() {
  const [progressPercent, setProgressPercent] = useState(0);
  const totalSteps = whyChoose.length;
  const trackHeightPx = (totalSteps - 1) * ITEM_SPACING;

  useEffect(() => {
    let animationFrameId: number;
    let startTime: number | null = null;
    const duration = 12000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const elapsed = timestamp - startTime;
      const progress = (elapsed % duration) / duration;

      setProgressPercent(progress * 100);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const clampedProgress = Math.min(progressPercent, 100);
  const fillHeightPx = (clampedProgress / 100) * trackHeightPx;

  const getActiveStep = () => {
    const stepRange = 100 / totalSteps;
    const currentStep = Math.floor(clampedProgress / stepRange) + 1;

    return Math.min(currentStep, totalSteps);
  };

  const currentActiveStep = getActiveStep();

  return (
    <section className="bg-white px-6 py-10 md:px-16 md:py-12">
      <span
        className={`mb-3 block text-center text-xs font-semibold uppercase tracking-widest ${LOGO_GRADIENT_TEXT}`}
      >
        Trusted by millions
      </span>

      <h2 className="text-center text-4xl font-bold">
        Why Choose Us?
      </h2>

      <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Left Side Graphics Deck */}
        <div className="relative mx-auto w-full max-w-sm pb-12 md:pb-0">
          <div className="h-48 rounded-2xl bg-[#1E293B]" />

          <div className="absolute -top-6 left-1/2 w-72 -translate-x-1/2 rounded-xl bg-white p-5 shadow-xl">
            <p className="text-xs text-slate-400">Total Taxes</p>

            <p className="text-2xl font-bold text-[#1E293B]">
              $12,128
            </p>

            <div className="mt-3 h-16 rounded-lg bg-gradient-to-t from-[#2B93C9]/15 to-transparent" />
          </div>

          <div className="absolute -bottom-10 left-1/2 w-72 -translate-x-1/2 rounded-xl bg-white p-4 shadow-lg">
            <p className="text-xs font-semibold text-[#1E293B]">
              Documents
            </p>

            <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
              <span>Annual Report</span>
              <span>06/08/2024</span>
            </div>

            <div className="mt-1 flex items-center justify-between text-xs text-slate-500">
              <span>Tax Filings</span>
              <span>01/24/2024</span>
            </div>
          </div>
        </div>

        {/* Right Content Engine */}
        <div className="w-full md:px-4">
          <div className="relative flex w-full flex-col py-2">
            <div
              className="absolute z-0 w-1 rounded-full bg-slate-100"
              style={{
                left: "24px",
                top: `${ICON_CENTER}px`,
                height: `${trackHeightPx}px`,
              }}
            >
              <div
                className={`${LOGO_GRADIENT_VERTICAL} w-full origin-top rounded-full`}
                style={{
                  height: `${fillHeightPx}px`,
                }}
              />
            </div>

            {whyChoose.map((step, idx) => {
              // whyChoose items don't include an icon; keep types safe
              const StepIcon = (step as { icon?: React.ComponentType<any> }).icon;
              const stepNumber = idx + 1;
              const isPassed = idx < currentActiveStep;
              const isCurrent = currentActiveStep === stepNumber;

              return (
                <div
                  key={step.id}
                  className="relative z-10 mb-12 flex min-h-[120px] w-full select-none flex-row items-start last:mb-0"
                >
                  <div
                    className={`absolute left-0 top-0 z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                      isPassed
                        ? "scale-105 border-[#2B93C9] bg-slate-50 text-[#2B93C9] shadow-md"
                        : "border-slate-300 bg-white text-slate-400"
                    } ${
                      isCurrent ? "ring-4 ring-[#33D1CC]/20" : ""
                    }`}
                  >
                    {StepIcon ? (
                      <StepIcon
                        className="h-5 w-5"
                        strokeWidth={2.5}
                      />
                    ) : (
                      <span className="text-sm font-bold">
                        {stepNumber}
                      </span>
                    )}
                  </div>

                  <div className="w-full pl-16 text-left">
                    <h4
                      className={`text-lg font-bold md:text-xl ${LOGO_GRADIENT_TEXT}`}
                    >
                      {step.title}
                    </h4>

                    <p className="mt-1 text-sm leading-relaxed text-black md:text-base">
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
  );
}

// ---------- Section 5: FAQ ----------

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="px-6 py-12 md:px-16 md:py-14">
      <div className="mx-auto max-w-2xl">
        <p className={`text-xs font-semibold uppercase tracking-widest ${LOGO_GRADIENT_TEXT}`}>
          Key Considerations
        </p>
        <h2 className={`mt-2 text-4xl font-bold `}>
          Common Questions About Obtaining a Certificate of Good Standing
        </h2>

      <div className="mt-8 divide-y divide-slate-200">
        {faqs.map(({ q, a }, i) => (
          <div key={q}>
            <button

                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left text-sm font-semibold text-gray-600 hover:text-[#1E293B] transition-colors"
              >
                {q}
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 transition-transform ${
                    open === i ? "rotate-180 text-[#2B93C9]" : "text-slate-400"
                  }`}
                />
              </button>
              {open === i && (
                <p className="pb-5 text-sm leading-relaxed text-gray-500">
                  {a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Section 6: CTA ----------

function CTASection() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/cert-good-standing/step-1");
  };

  return (
    <section className="px-6 py-8 md:px-16 md:py-10">
      <div
        className={`${LOGO_GRADIENT} relative mx-auto max-w-4xl overflow-hidden rounded-[32px] border border-white/10 px-8 py-8 text-center shadow-2xl sm:px-10`}
      >
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#2B93C9]/20 to-transparent" />
        <div className="pointer-events-none absolute right-1/4 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#33D1CC]/30 blur-[80px]" />

        <div className="relative grid grid-cols-1 items-center gap-4 p-2 md:grid-cols-[1.2fr_0.8fr] md:p-3">
          <div className="relative z-10 flex w-full flex-col items-start space-y-3 text-left">
            <span className="rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-semibold text-white shadow-sm">
              Incorporate Now
            </span>

            <h2 className="text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl">
              Ready To Take <br /> Your Startup To <br /> The Next Level?
            </h2>

            <p className="max-w-sm text-xs leading-relaxed text-white/80 md:text-sm">
              Start your business with simple pricing, guided filing, and a secure dashboard built to keep your documents organized.
            </p>

            <button
  onClick={handleGetStarted}
  className={`${LOGO_GRADIENT} group relative overflow-hidden rounded-xl px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:brightness-110 hover:shadow-lg`}
>
  {/* Hover Shine */}
  <span className="absolute inset-0 bg-white/0 transition-colors duration-300 group-hover:bg-white/10" />

  {/* Animated Light */}
  <span className="absolute -left-16 top-0 h-full w-10 -skew-x-12 bg-white/20 blur-sm transition-all duration-700 group-hover:left-[120%]" />

  <span className="relative z-10 flex items-center gap-2">
    GET STARTED
    <svg
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14M13 5l7 7-7 7"
      />
    </svg>
  </span>
</button>

            <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] font-medium text-white/85">
              <span className="rounded-full border border-white/15 bg-white/12 px-3 py-1">
                ✓ No Hidden Fees
              </span>
              <span className="rounded-full border border-white/15 bg-white/12 px-3 py-1">
                ✓ Fast State Filing
              </span>
              <span className="rounded-full border border-white/15 bg-white/12 px-3 py-1">
                ✓ Secure Process
              </span>
            </div>

            <div className="mt-3 grid w-full max-w-sm grid-cols-3 gap-3">
              <div className="rounded-2xl border border-white/15 bg-white/12 px-3 py-2 backdrop-blur">
                <p className="text-lg font-bold text-white">1M+</p>
                <p className="text-[10px] text-white/75">Businesses</p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/12 px-3 py-2 backdrop-blur">
                <p className="text-lg font-bold text-white">50</p>
                <p className="text-[10px] text-white/75">States</p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/12 px-3 py-2 backdrop-blur">
                <p className="text-lg font-bold text-white">4.7★</p>
                <p className="text-[10px] text-white/75">Rating</p>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex min-h-[280px] w-full select-none items-center justify-center overflow-visible">
            <div className="relative flex h-[280px] w-[180px] items-center justify-center">
              <div className="absolute inset-0 overflow-hidden rounded-[36px] border-[3.5px] border-slate-700/70 bg-[#0F1318] shadow-2xl">
                <div className="absolute left-1/2 top-2.5 z-30 flex h-4 w-20 -translate-x-1/2 items-center justify-center rounded-full bg-black">
                  <div className="ml-auto mr-3 h-1.5 w-1.5 rounded-full bg-slate-900" />
                </div>

                <div className="relative flex h-full w-full flex-col p-4 pt-9 text-left text-[10px] text-slate-400">
                  <p className="text-xs font-bold text-slate-200">
                    Business Formation
                  </p>

                  <div className="my-2 h-[1px] w-full bg-slate-800/60" />

                  <p className="text-[7px] font-bold uppercase tracking-wider text-slate-500">
                    Status
                  </p>

                  <p className="mt-0.5 flex items-center gap-1 text-[9px] font-medium text-slate-300">
                    Business Officially Registered
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </p>

                  <div className="my-2 h-[1px] w-full bg-slate-800/60" />

                  <p className="text-[7px] font-bold uppercase tracking-wider text-slate-500">
                    Registered
                  </p>

                  <p className="mt-0.5 text-base font-bold text-slate-200">
                    Apr 19
                  </p>

                  <p className="mt-1 text-[7px] leading-snug text-slate-500">
                    In the office of the secretary <br />
                    of state of the state of <br />
                    california
                  </p>

                  <div className="my-2 h-[1px] w-full bg-slate-800/60" />

                  <p className="text-[7px] font-bold uppercase tracking-wider text-slate-500">
                    Company Address
                  </p>

                  <p className="mt-0.5 truncate text-[8px] text-slate-400">
                    8721 Delmar Blvd
                  </p>
                </div>
              </div>

              <div className="absolute left-[-1.5rem] top-[38%] z-20 flex scale-95 -rotate-6 transform items-center gap-1.5 rounded-lg border border-slate-100 bg-white/95 p-2 shadow-xl backdrop-blur">
                <span className="text-[10px] font-extrabold tracking-tight text-slate-800">
                  BIZFIZ CO
                </span>
                <div
                  className={`${LOGO_GRADIENT} flex h-4 w-4 items-center justify-center rounded-full text-[8px] font-bold text-white shadow`}
                >
                  ✓
                </div>
              </div>

              <div className="absolute bottom-[22%] right-[-1.25rem] z-20 flex min-w-[110px] rotate-3 transform flex-col items-start rounded-xl border border-slate-100 bg-white/95 p-2.5 shadow-xl backdrop-blur">
                <span className="flex items-center gap-1 bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-[8px] font-bold uppercase tracking-wider text-transparent">
                  📝 Official Registered
                </span>

                <span className="mt-1 text-sm font-black tracking-tight text-slate-800">
                  BizFiz Co
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Full Main Render Layout ----------

export default function CertificateLandingPage() {
  return (
    <NavigationWrapper>
      <div className={`${spaceGrotesk.className} min-h-screen bg-white text-[#1E293B]`}>
        <Hero />
        <TrustSection />
        <WhenSection />
        <WhyChooseSection />
        <FAQSection />
        <CTASection />
      </div>
    </NavigationWrapper>
  );
}