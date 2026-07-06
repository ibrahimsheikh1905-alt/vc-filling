"use client";

import React from 'react';
import { LayoutDashboard } from 'lucide-react';
// import ActionItemsSection from './ActionItemsSection';
import MyCompanySection from './MyCompanySection';
import OrderServicesSection from './OrderServicesSection';
import ComplianceTasks from './ComplianceTasks';

const DashboardMainContent: React.FC = () => {
  return (
    <main className="flex-1 p-8 overflow-y-auto bg-[#F9FAFB] font-sans antialiased">
      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3.5">
          <div className="bg-[#ECFEFF] p-2 rounded-xl">
  <LayoutDashboard className="w-7 h-7 text-[#06B6D4]" />
          </div>
          <div>
            <h1 className="text-[32px] font-bold tracking-[-0.03em] text-gray-900 leading-none">
              Dashboard
            </h1>
          </div>
        </div>
      </header>

      {/* Sections Container */}
      <div className="space-y-12">

        
        {/* My Company Section */}
        <MyCompanySection />
        
        {/* Order Services Section */}
        <OrderServicesSection />
      </div>
    </main>
  );
};

export default DashboardMainContent;
