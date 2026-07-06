"use client";

import React from "react";

const BusinessFormationKit = () => {
  const steps = [
    { id: 1, title: "Binder & Slip Case", desc: "Our standard LLC incorporation or corporate kits are Handcrafted in the traditional bookbinding method and constructed with heavier materials extra durability and long life. The three-ring mechanisms with double opening and closing boosters allow pages to lie flat and turn easily." },
    { id: 2, title: "20 Member of Stock Certificates", desc: "These elegantly designed numbered security certificates contain your company name and state of incorporation and are printed on the finest security paper available." },
    { id: 3, title: "Corporate Forms / Documents", desc: "Your personalized binder will include printed minutes and bylaws or an operating agreement if they are included in the package you chose." },
    { id: 4, title: "Corporate Embossing Seal", desc: "Custom 1 5/8 metal die cast pocket seal embosser personalized with your company name, state of formation and date of formation." },
    { id: 5, title: "Personalized Business Name on Kit", desc: "Each quality binder is personalized in gold with your organization name and comes with a matching slipcase." },
    { id: 6, title: "Transfer Ledger", desc: "8-page alphabetized transfer ledger." },
    { id: 7, title: "Index Tabs", desc: "Mylar-coated, easy to use tabs for your Corporate or LLC Kit." },
  ];

  return (
    <div className="min-h-screen bg-white pb-20 font-sans">
      <div className="mx-auto max-w-7xl p-4 md:p-10">
        {/* Header Promo */}
        <div className="relative mb-24 flex flex-col items-center overflow-hidden rounded-[32px] border border-cyan-100 bg-cyan-50 shadow-sm md:flex-row">
          <div className="z-10 flex-1 space-y-6 p-8 text-left md:p-16">
            <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-widest text-cyan-600">
              <span className="rounded-lg bg-white p-1.5 text-lg shadow-sm">💼</span>
              Business Formation Kit
            </div>

            <h1 className="text-4xl font-black leading-tight text-slate-900 md:text-5xl">
              Get your Business <br /> Formation KIT
            </h1>

            <div className="max-w-xl space-y-4">
              <p className="text-[15px] font-medium leading-relaxed text-slate-600">
                The Business Formation Kit is a professional binder enclosed in a matching slip case, customized with the name of your company on the spine insert.
              </p>

              <p className="text-[15px] font-medium leading-relaxed text-slate-600">
                It comes with a metal die-cast corporate embossing seal with its own carrying pouch, customized with the name of your company and the date and state of formation. It has a set of Mylar Reinforced Index Tabs, 20 custom printed stock or membership certificates with 20 full page stubs.
              </p>
            </div>
          </div>

          <div className="relative p-8 md:pr-16">
            <div className="absolute right-0 top-0 z-0 hidden h-full w-full -translate-y-[20%] translate-x-1/2 -rotate-12 rounded-[40px] bg-[#06B6D4] opacity-100 md:block" />

            <img
              src="/kit-cover.png"
              alt="Kit Cover"
              className="relative z-10 h-auto w-[480px] drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="text-[32px] font-black uppercase tracking-tighter text-slate-900">
            Unboxing Your Business Formation Kit
          </h2>

          <p className="mx-auto mt-2 max-w-3xl text-[14px] font-medium italic text-slate-500">
            Your official state documents will be delivered in a high quality and professional kit with your company name stamped along the spine of the book
          </p>
        </div>

        {/* Desktop Interactive Pointers */}
        <div className="relative mx-auto mt-10 hidden h-[850px] max-w-6xl lg:block">
          <div className="absolute left-1/2 top-1/2 z-0 w-[900px] -translate-x-1/2 -translate-y-1/2">
            <img
              src="/kit-unboxed-full.png"
              alt="Unboxed Kit Content"
              className="h-auto w-full opacity-100"
            />
          </div>

          <svg
            className="pointer-events-none absolute inset-0 z-10 h-full w-full"
            style={{ stroke: "#06B6D4", strokeWidth: "1.2", fill: "none" }}
          >
            <path d="M 120 180 V 380 H 260" />
            <path d="M 330 180 V 420 H 450" />
            <path d="M 550 180 V 520 H 680" />
            <path d="M 850 180 V 450 H 780" />
            <path d="M 230 750 V 680" />
            <path d="M 450 750 V 630" />
            <path d="M 800 750 V 680 H 730" />
          </svg>

          <div className="absolute inset-0 z-20">
            <div className="absolute top-0 grid w-full grid-cols-4 gap-6">
              {[0, 1, 2, 3].map((i) => (
                <div key={steps[i].id} className="max-w-[220px] space-y-2 text-left">
                  <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#06B6D4] text-xs font-black text-white shadow-md shadow-cyan-100">
                    {steps[i].id}
                  </span>

                  <h4 className="text-[15px] font-black uppercase leading-tight tracking-tighter text-slate-900">
                    {steps[i].title}
                  </h4>

                  <p className="text-[11px] font-medium leading-relaxed text-slate-500">
                    {steps[i].desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="absolute bottom-0 grid w-full grid-cols-3 gap-16 px-20">
              {[4, 5, 6].map((i) => (
                <div key={steps[i].id} className="max-w-[250px] space-y-2 text-left">
                  <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#06B6D4] text-xs font-black text-white shadow-md shadow-cyan-100">
                    {steps[i].id}
                  </span>

                  <h4 className="text-[15px] font-black uppercase leading-tight tracking-tighter text-slate-900">
                    {steps[i].title}
                  </h4>

                  <p className="text-[11px] font-medium leading-relaxed text-slate-500">
                    {steps[i].desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Grid View */}
        <div className="mt-10 grid grid-cols-1 gap-6 text-left md:grid-cols-2 lg:hidden">
          {steps.map((s) => (
            <div key={s.id} className="flex gap-4 rounded-2xl border border-cyan-100 bg-cyan-50/50 p-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#06B6D4] text-xs font-black text-white">
                {s.id}
              </span>

              <div>
                <h4 className="text-sm font-black uppercase tracking-tighter text-slate-900">
                  {s.title}
                </h4>

                <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Final Price & CTA */}
        <div className="mt-32 space-y-10 text-center">
          <p className="text-3xl font-black tracking-tight text-slate-900">
            Get yours for <span className="italic text-cyan-600">$99</span> only
          </p>

          <button className="rounded-xl bg-[#06B6D4] px-16 py-5 text-[14px] font-black uppercase tracking-[2px] text-white shadow-2xl shadow-cyan-100 transition-all hover:bg-[#0891B2] active:scale-95">
            Get Your Business Formation Kit
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessFormationKit;
