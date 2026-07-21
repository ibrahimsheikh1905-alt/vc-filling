"use client";

import React from "react";
import VirtualMailboxTable from "@/components/dashboard/VirtualMailboxTable";
import PromotionBanner from "@/components/dashboard/PromotionBanner";
import HowItWorksSection from "@/components/dashboard/HowItWorksSection";
import TipsGrid from "@/components/dashboard/TipsGrid";
import VirtualMailboxBanner from "@/components/dashboard/Virtualmailboxbanner";
import { Mail } from "lucide-react";

const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";
const LOGO_GRADIENT_TEXT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent";

export default function VirtualMailboxPage() {
  return (
    <main className="flex-1 min-h-screen overflow-y-auto bg-slate-50 p-6 font-sans antialiased md:p-10">
      <div className="mx-auto max-w-6xl space-y-10">

        <header className="mb-10">
          <div className="flex items-center gap-4">
            <div className={`${LOGO_GRADIENT} flex h-14 w-14 items-center justify-center rounded-2xl shadow-md shadow-[#2B93C9]/25`}>
              <Mail className="h-7 w-7 text-white" />
            </div>

            <div>
              <p className={`text-[11px] font-bold uppercase tracking-[0.28em] ${LOGO_GRADIENT_TEXT}`}>
                Incorp Bay Dashboard
              </p>

              <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
                Virtual Mailbox
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                Manage, receive and organize your business mail from one secure dashboard.
              </p>
            </div>
          </div>
        </header>

        <section className="space-y-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <VirtualMailboxTable />
          </div>

          <PromotionBanner />
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <HowItWorksSection />

          <div className="mt-12">
            <TipsGrid />
          </div>
        </section>

        <VirtualMailboxBanner />
      </div>
    </main>
  );
}
