"use client";

import { useState } from "react";
import NavigationWrapper from "@/components/NavigationWrapper";

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
    <path d="M9 6l6 6-6 6" />
  </svg>
);

const FileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M8 13h8M8 17h6" />
  </svg>
);

const ReceiptIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
    <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2z" />
    <path d="M8 7h8M8 11h8M8 15h5" />
  </svg>
);

const IdIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M7 10h4M7 14h7" />
    <circle cx="17" cy="12" r="2" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
    <circle cx="12" cy="7" r="4" />
    <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-7 w-7">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8.09 9.63a16 16 0 0 0 6.28 6.28l1.19-1.19a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-7 w-7">
    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-7 w-7">
    <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const TexasShape = () => (
  <svg viewBox="0 0 420 430" className="h-[300px] w-[300px] md:h-[390px] md:w-[390px]" aria-hidden="true">
    <defs>
      <filter id="texasGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="16" result="blur" />
        <feColorMatrix in="blur" type="matrix" values="0 0 0 0 0.023 0 0 0 0 0.714 0 0 0 0 0.831 0 0 0 .75 0" />
        <feBlend in="SourceGraphic" />
      </filter>
    </defs>
    <path
      filter="url(#texasGlow)"
      fill="#06B6D4"
      d="M70 120l78 18 42-3 4-100 92 1 4 141 53 18 21 55-26 13 23 27-16 28 25 34-37 2-16 44-43-28-47 24-30-32-47 10-12-47-50-35 11-45-61-49 33-18z"
    />
    <circle cx="222" cy="230" r="38" fill="none" stroke="white" strokeWidth="8" />
    <circle cx="222" cy="230" r="11" fill="white" />
    <text x="222" y="294" textAnchor="middle" fill="white" fontSize="22" fontWeight="900">
      INCORPBAY LLC
    </text>
  </svg>
);

const SupportCard = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <button className="group flex w-full items-center justify-between rounded-xl border border-cyan-100 bg-white px-5 py-5 text-left shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-[0_16px_40px_rgba(6,182,212,0.16)]">
    <span className="flex items-center gap-4">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-500">{icon}</span>
      <span className="text-sm font-extrabold text-slate-950 md:text-base">{label}</span>
    </span>
    <span className="text-cyan-500 transition-transform duration-300 group-hover:translate-x-1">
      <ChevronRight />
    </span>
  </button>
);

const ContactInfoCard = ({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) => (
  <div className="flex items-center gap-5 rounded-2xl border border-slate-100 bg-white px-5 py-5 shadow-[0_14px_35px_rgba(15,23,42,0.10)]">
    <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-500">{icon}</span>
    <div className="text-base font-extrabold leading-snug text-slate-950">{children}</div>
  </div>
);

export default function ContactSupportPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", reason: "", order: "", message: "", agree: false });

  const update =
    (key: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const target = e.target as HTMLInputElement;
      setForm((prev) => ({ ...prev, [key]: target.type === "checkbox" ? target.checked : target.value }));
    };

  const inputClass =
    "w-full rounded-full border border-slate-300 bg-white px-5 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100";

  return (
    <NavigationWrapper>
      <main className="min-h-screen bg-white px-5 py-10 font-sans text-slate-950 md:px-10 md:py-16">
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1fr_0.92fr] lg:gap-16">
        <div className="pt-4">
          <h1 className="max-w-xl text-5xl font-black leading-[1.08] tracking-tight text-slate-950 md:text-6xl">
            Exceptional Support
            <br />
            for <span className="text-cyan-500">Your Success</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-slate-700">
            No AI bots, only real people. At IncorpBay, our dedicated support team is here to assist you in both English and Spanish, ensuring you get the personalized help you need. Reach out to us Monday through Friday, from 9 a.m. to 6 p.m. CST.
          </p>

          <div className="mt-10 max-w-xl space-y-5">
            <SupportCard icon={<FileIcon />} label="View my business documents" />
            <SupportCard icon={<ReceiptIcon />} label="View my receipts" />
            <SupportCard icon={<IdIcon />} label="View my EIN" />
            <SupportCard icon={<UserIcon />} label="View my Registered Agent information" />
          </div>
        </div>

        <div className="rounded-[2rem] border border-cyan-100 bg-white p-6 shadow-[0_18px_45px_rgba(6,182,212,0.08)] md:p-8">
          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-extrabold text-slate-950">Name*</label>
              <input className={inputClass} placeholder="Enter your name" value={form.name} onChange={update("name")} />
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-extrabold text-slate-950">Email*</label>
                <input className={inputClass} placeholder="Enter your email" value={form.email} onChange={update("email")} />
              </div>
              <div>
                <label className="mb-2 block text-sm font-extrabold text-slate-950">Phone number</label>
                <input className={inputClass} placeholder="Enter your phone number" value={form.phone} onChange={update("phone")} />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-extrabold text-slate-950">Contact Reason</label>
              <select className={`${inputClass} appearance-none`} value={form.reason} onChange={update("reason")}>
                <option value="">Select</option>
                <option>LLC Formation</option>
                <option>Order Support</option>
                <option>Registered Agent</option>
                <option>Business Documents</option>
                <option>Billing</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-extrabold text-slate-950">Order number</label>
              <input className={inputClass} placeholder="Enter your order number" value={form.order} onChange={update("order")} />
            </div>

            <div>
              <label className="mb-2 block text-sm font-extrabold text-slate-950">Message*</label>
              <textarea className="min-h-[150px] w-full resize-y rounded-3xl border border-slate-300 bg-white px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100" placeholder="How can we help you?" value={form.message} onChange={update("message")} />
            </div>

            <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-700">
              <input type="checkbox" checked={form.agree} onChange={update("agree")} className="h-5 w-5 rounded border-slate-300 accent-cyan-500" />
              <span>
                I agree to the <a href="#" className="font-bold text-cyan-600 underline">Terms of Service</a> and <a href="#" className="font-bold text-cyan-600 underline">Privacy Policy</a>.
              </span>
            </label>

            <button type="button" className="w-full rounded-full bg-cyan-500 px-8 py-4 text-base font-extrabold text-white shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-600 hover:shadow-cyan-500/35">
              Submit
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl overflow-hidden rounded-[1.8rem] border border-cyan-100 bg-cyan-50/30 shadow-[0_18px_45px_rgba(6,182,212,0.08)]">
        <div className="relative grid min-h-[560px] grid-cols-1 gap-8 p-8 md:p-12 lg:grid-cols-[1fr_1fr]">
          <div className="pointer-events-none absolute inset-0 opacity-50">
            <svg viewBox="0 0 1100 600" className="h-full w-full">
              <path d="M60 120 C240 70 400 120 560 80 C740 40 900 80 1040 35" fill="none" stroke="#cbd5e1" strokeWidth="1" />
              <path d="M40 260 C230 210 400 250 590 210 C740 185 920 230 1060 170" fill="none" stroke="#cbd5e1" strokeWidth="1" />
              <path d="M80 410 C250 360 450 420 620 360 C790 300 930 365 1050 315" fill="none" stroke="#cbd5e1" strokeWidth="1" />
              <path d="M170 30 L140 560 M330 45 L330 575 M520 35 L545 590 M720 40 L685 570 M885 30 L900 560" fill="none" stroke="#d8e2ea" strokeWidth="1" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col justify-center">
            <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              Contact <span className="text-cyan-500">IncorpBay</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-8 text-slate-700">
              You always receive customer support from real people and not AI. IncorpBay’s entire customer support team is fluent in both English and Spanish.
            </p>

            <div className="mt-10 flex justify-center lg:justify-start">
              <TexasShape />
            </div>
          </div>

          <div className="relative z-10 flex flex-col justify-center">
            <div className="mb-6 flex items-center gap-3 text-sm font-semibold text-slate-700">
              <span className="text-cyan-500"><ClockIcon /></span>
              Monday – Friday from 9 a.m. to 6 p.m. CST
            </div>

            <div className="space-y-6">
              <ContactInfoCard icon={<PhoneIcon />}>844 - 830 - 8267</ContactInfoCard>
              <ContactInfoCard icon={<MailIcon />}>support@incorpbay.com</ContactInfoCard>
              <ContactInfoCard icon={<PinIcon />}>
                17350 State Highway 249, Suite 220,
                <br />
                Houston, TX 77064
              </ContactInfoCard>
            </div>
          </div>
        </div>
      </section>
      </main>
    </NavigationWrapper>
  );
}
