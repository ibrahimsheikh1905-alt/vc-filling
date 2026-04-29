"use client";

import React from 'react';
import VirtualMailboxTable from '@/components/dashboard/VirtualMailboxTable';
import PromotionBanner from '@/components/dashboard/PromotionBanner';
import HowItWorksSection from '@/components/dashboard/HowItWorksSection';
import TipsGrid from '@/components/dashboard/TipsGrid';
import VirtualMailboxBanner from '@/components/dashboard/Virtualmailboxbanner';
import { Mail } from 'lucide-react';

export default function VirtualMailboxPage() {
  return (
    <main className="flex-1 p-8 overflow-y-auto bg-gray-50 font-sans antialiased">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Header - Simple & Normal Bold */}
        <header className="mb-10">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-orange-100 rounded-xl">
                <Mail className="w-6 h-6 text-[#FF5722]" />
              </div>
              <span className="text-[11px] font-black text-gray-400 uppercase tracking-[0.3em]">
                MAIL MANAGEMENT
              </span>
            </div>
            <h1 className="text-3xl font-black tracking-tight text-[#111827]">
              Virtual Mailbox
            </h1>
          </div>
        </header>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Table Section */}
<section className="space-y-8">
             <VirtualMailboxTable />
             <div className="pt-6 pb-4"></div>
             <PromotionBanner />
          </section>

          {/* Info Section */}
          <section className="pt-10 border-t border-gray-200">
             <HowItWorksSection />
             <div className="mt-12">
                <TipsGrid />
             </div>
          </section>

          <VirtualMailboxBanner />
        </div>







      </div>
   </main>
  );
}