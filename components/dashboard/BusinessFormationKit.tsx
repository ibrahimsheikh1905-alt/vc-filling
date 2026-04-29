"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

const BusinessFormationKit = () => {
  const router = useRouter();

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
    <div className="min-h-screen bg-white font-sans pb-20">
      <div className="max-w-7xl mx-auto p-4 md:p-10">
        
        {/* --- SECTION 1: HEADER PROMO (Matching image_e55830.png) --- */}
        <div className="bg-[#FFF5F1] rounded-[32px] overflow-hidden flex flex-col md:flex-row items-center border border-orange-50 mb-24 relative shadow-sm">
          <div className="p-8 md:p-16 text-left space-y-6 flex-1 z-10">
            <div className="flex items-center gap-2 text-[#E25A28] font-bold text-[12px] uppercase tracking-widest">
              <span className="p-1.5 bg-white rounded-lg shadow-sm text-lg">💼</span> Business Formation Kit
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Get your Business <br/> Formation KIT
            </h1>
            <div className="space-y-4 max-w-xl">
              <p className="text-[15px] text-gray-600 leading-relaxed font-medium">
                The Business Formation Kit is a professional binder enclosed in a matching slip case, customized with the name of your company on the spine insert.
              </p>
              <p className="text-[15px] text-gray-600 leading-relaxed font-medium">
                It comes with a metal die-cast corporate embossing seal with its own carrying pouch, customized with the name of your company and the date and state of formation. It has a set of Mylar Reinforced Index Tabs, 20 custom printed stock or membership certificates with 20 full page stubs.
              </p>
            </div>
          </div>
          <div className="p-8 md:pr-16 relative">
            {/* Orange background accent from image */}
            <div className="absolute top-0 right-0 w-full h-full bg-[#FF4500] -rotate-12 translate-x-1/2 translate-y-[-20%] z-0 rounded-[40px] opacity-100 hidden md:block"></div>
            <img 
              src="/kit-cover.png" // Replace with your actual banner image
              alt="Kit Cover" 
              className="w-[480px] h-auto drop-shadow-2xl relative z-10" 
            />
          </div>
        </div>

        {/* --- SECTION 2: UNBOXING TITLE --- */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-black text-gray-900 uppercase tracking-tighter">
            Unboxing Your Business Formation Kit
          </h2>
          <p className="text-[14px] text-gray-500 font-medium max-w-3xl mx-auto mt-2 italic">
            Your official state documents will be delivered in a high quality and professional kit with your company name stamped along the spine of the book
          </p>
        </div>

        {/* --- SECTION 3: INTERACTIVE POINTERS (Matching image_e5548d.png) --- */}
        <div className="relative max-w-6xl mx-auto hidden lg:block h-[850px] mt-10">
          
          {/* Main Kit Visual (The unboxed kit image) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] z-0">
            <img 
              src="/kit-unboxed-full.png" // Replace with your kit-unboxed image
              alt="Unboxed Kit Content" 
              className="w-full h-auto opacity-100" 
            />
          </div>

          {/* SVG Connector Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ stroke: '#00AEEF', strokeWidth: '1.2', fill: 'none' }}>
            {/* Top Lines */}
            <path d="M 120 180 V 380 H 260" /> {/* Point 1 */}
            <path d="M 330 180 V 420 H 450" /> {/* Point 2 */}
            <path d="M 550 180 V 520 H 680" /> {/* Point 3 */}
            <path d="M 850 180 V 450 H 780" /> {/* Point 4 */}
            {/* Bottom Lines */}
            <path d="M 230 750 V 680" />       {/* Point 5 */}
            <path d="M 450 750 V 630" />       {/* Point 6 */}
            <path d="M 800 750 V 680 H 730" /> {/* Point 7 */}
          </svg>

          {/* Text Points (Absolute Layout) */}
          <div className="absolute inset-0 z-20">
            {/* Top Row (1, 2, 3, 4) */}
            <div className="grid grid-cols-4 gap-6 absolute top-0 w-full">
              {[0, 1, 2, 3].map((i) => (
                <div key={steps[i].id} className="text-left space-y-2 max-w-[220px]">
                  <span className="w-8 h-8 bg-[#00AEEF] text-white rounded-full flex items-center justify-center text-xs font-black mb-3 shadow-md">
                    {steps[i].id}
                  </span>
                  <h4 className="text-[15px] font-black uppercase text-gray-900 leading-tight tracking-tighter">
                    {steps[i].title}
                  </h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-medium">
                    {steps[i].desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Row (5, 6, 7) */}
            <div className="grid grid-cols-3 gap-16 absolute bottom-0 w-full px-20">
              {[4, 5, 6].map((i) => (
                <div key={steps[i].id} className="text-left space-y-2 max-w-[250px]">
                  <span className="w-8 h-8 bg-[#00AEEF] text-white rounded-full flex items-center justify-center text-xs font-black mb-3 shadow-md">
                    {steps[i].id}
                  </span>
                  <h4 className="text-[15px] font-black uppercase text-gray-900 leading-tight tracking-tighter">
                    {steps[i].title}
                  </h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed font-medium">
                    {steps[i].desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Grid View */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-10">
          {steps.map((s) => (
            <div key={s.id} className="flex gap-4 p-5 border border-gray-50 rounded-2xl bg-gray-50/50">
              <span className="w-8 h-8 bg-[#00AEEF] text-white rounded-full flex items-center justify-center text-xs font-black shrink-0">{s.id}</span>
              <div>
                <h4 className="text-sm font-black uppercase text-gray-900 tracking-tighter">{s.title}</h4>
                <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* --- SECTION 4: FINAL PRICE & CTA --- */}
        <div className="mt-32 space-y-10 text-center">
          <p className="text-3xl font-black text-gray-900 tracking-tight">
            Get yours for <span className="text-[#FF6B35] italic">$99</span> only
          </p>
          <button className="bg-[#FF6B35] hover:bg-[#E85A24] text-white font-black py-5 px-16 rounded-xl uppercase text-[14px] tracking-[2px] shadow-2xl shadow-orange-100 transition-all active:scale-95">
            Get Your Business Formation Kit
          </button>
        </div>

      </div>
    </div>
  );
};

export default BusinessFormationKit;