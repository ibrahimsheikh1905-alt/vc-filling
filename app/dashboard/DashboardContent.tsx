"use client";

import React from 'react';
import ComplianceCard from '@/components/dashboard/ComplianceCard';
import UnclaimedServiceRow from '@/components/dashboard/UnclaimedServiceRow';
import RecommendationCards from '@/components/dashboard/RecommendationCards';
import CarouselIndicators from '@/components/dashboard/CarouselIndicators';
import { Zap } from 'lucide-react';

interface UnclaimedService {
  title: string;
  description: string;
}

const unclaimedServices: UnclaimedService[] = [
  {
    title: 'Build Website',
    description: 'Launch an engaging, mobile-ready site to showcase your business.'
  },
  {
    title: 'Claim Your, Domain, Email',
    description: 'A custom domain and professional email show you mean business.'
  },
  {
    title: 'Safeguard Your Business',
    description: 'Insurance coverage designed for small businesses, don\'t skip this step.'
  }
];

const DashboardContent: React.FC = () => {
  return (
    <main className="flex-1 p-8 overflow-y-auto bg-[#F9FAFB] font-sans antialiased">
      {/* Header - Compliance Style Label aur Heading */}
      <header className="mb-12">
        <div className="flex items-center gap-3">
          <div className="bg-orange-50 p-1.5 rounded-lg">
            <Zap className="w-6 h-6 text-orange-500 fill-orange-500" />
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] leading-none">
              Overview
            </p>
            <h1 className="text-[28px] font-black tracking-[-0.03em] text-gray-900 uppercase">
              MY TASKS
            </h1>
          </div>
        </div>
      </header>

      {/* Compliance Tasks Section */}
      <div className="mb-14">
        <h2 className="text-[22px] font-bold text-gray-900 tracking-tight mb-6">
          Compliance Tasks
        </h2>
        <ComplianceCard />
      </div>

      {/* Unclaimed Services Section */}
      <div className="mb-14">
        <h2 className="text-[22px] font-bold text-gray-900 tracking-tight mb-6">
          Unclaimed Services
        </h2>
        <div className="bg-white shadow-sm border border-gray-100 rounded-[24px] overflow-hidden">
          <div className="divide-y divide-gray-50">
            {unclaimedServices.map((service, index) => (
              <div key={index} className="transition-colors hover:bg-gray-50/50">
                <UnclaimedServiceRow 
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recommendations Section */}
      <div className="pb-10">
        <h2 className="text-[22px] font-bold text-gray-900 tracking-tight mb-8">
          Recommendations
        </h2>
        <RecommendationCards />
        <div className="mt-8 flex justify-center">
           <CarouselIndicators />
        </div>
      </div>
    </main>
  );
};

export default DashboardContent;