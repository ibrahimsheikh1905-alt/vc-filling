"use client";

import React from 'react';
import { Zap, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import UnclaimedServiceRow from '@/components/dashboard/UnclaimedServiceRow';
import RecommendationCards from '@/components/dashboard/RecommendationCards';

const TasksPage = () => {
  const unclaimedServices = [
    { title: 'Build Your Website', description: 'Launch an engaging, mobile-ready site to showcase your business.' },
    { title: 'Claim Your Name, Domain, Email', description: 'A custom domain and professional email show you mean business.' },
    { title: 'Safeguard Your Business', description: 'Insurance coverage designed for small businesses, dont skip this step.' }
  ];

  return (
    <main className="flex-1 p-8 bg-gray-50 font-sans antialiased overflow-y-auto">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* 1. Header */}
        <header>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-orange-50 rounded-xl">
              <Zap className="w-5 h-5 text-orange-600" />
            </div>
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Action Center</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">My Tasks</h1>
        </header>

        {/* 2. Compliance Tasks - PERFECT ALIGNMENT */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-6">Compliance Tasks</h2>
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="flex flex-row items-center justify-between p-8 min-h-[120px]">
              
              {/* Left Side: Text */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Compliance Up to Date</h3>
                <p className="text-sm text-gray-500 font-medium">
                  We provide courtesy alerts to make sure that you never miss a state compliance important due date.
                </p>
              </div>
              
              {/* Right Side: Status + Button (Strict Alignment) */}
              <div className="flex items-center">
                {/* Vertical Divider */}
                <div className="h-12 w-[1px] bg-gray-100 mx-10"></div>
                
                <div className="flex items-center gap-12">
                  {/* Status Group */}
                  <div className="w-[200px]">
                    <div className="flex items-center gap-2 bg-[#D1FAE5] text-[#065F46] px-3 py-1 rounded-full w-fit mb-1">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-sm font-bold">Good Standing</span>
                    </div>
                    <p className="text-[12px] text-gray-400 font-medium whitespace-nowrap">
                      Your up to date with compliance events!
                    </p>
                  </div>

                  {/* Button - Always Aligned */}
                  <button className="border border-gray-200 hover:bg-gray-50 text-gray-700 px-8 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm shrink-0 min-w-[140px]">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Unclaimed Services */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-6">Unclaimed Services</h2>
          <div className="bg-white shadow-sm rounded-2xl border border-gray-200 overflow-hidden divide-y divide-gray-100 font-medium text-sm">
            {unclaimedServices.map((service, index) => (
              <UnclaimedServiceRow 
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </section>

        {/* 4. Recommendations - ROTATING CAROUSEL STYLE */}
        <section className="pb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Recommendations</h2>
            {/* Carousel Controls */}
            <div className="flex gap-2">
              <button className="p-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
          
          {/* Is div ko scroll-hide kiya hai taake ye rotating/slider feel de */}
          <div className="overflow-x-auto no-scrollbar pb-4 flex gap-6 snap-x">
            <div className="min-w-full md:min-w-[400px] snap-center">
              <RecommendationCards />
            </div>
          </div>
        </section>

      </div>
    </main>
  );
};

export default TasksPage;