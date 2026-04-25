"use client";

import React, { useState } from 'react';
import CompanyProfileTab from '@/components/dashboard/CompanyProfileTab';
import PaymentMethodsTab from '@/components/dashboard/PaymentMethodsTab';
import { Settings } from 'lucide-react';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState<'company' | 'payment'>('company');

  return (
    <main className="flex-1 p-8 overflow-y-auto bg-[#F9FAFB] font-sans antialiased">
      <div className="max-w-6xl mx-auto">
        
        {/* Header - Compliance Style */}
        <header className="mb-10">
          <div className="flex items-center gap-3">
            <div className="bg-orange-50 p-2 rounded-xl">
               <Settings className="w-7 h-7 text-orange-500" />
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] leading-none">
                Account Management
              </p>
              <h1 className="text-[32px] font-black tracking-[-0.03em] text-gray-900 uppercase leading-none">
                Settings
              </h1>
            </div>
          </div>
        </header>

        {/* Tab Switcher - Clean & Modern */}
        <div className="bg-gray-100/50 rounded-2xl p-1.5 mb-10 flex max-w-md border border-gray-200">
          <button
            onClick={() => setActiveTab('company')}
            className={`flex-1 px-6 py-3 rounded-[14px] text-[15px] font-bold tracking-tight transition-all duration-200 ${
              activeTab === 'company'
                ? 'bg-white shadow-sm text-gray-900 border border-gray-100'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Company Profile
          </button>
          <button
            onClick={() => setActiveTab('payment')}
            className={`flex-1 px-6 py-3 rounded-[14px] text-[15px] font-bold tracking-tight transition-all duration-200 ${
              activeTab === 'payment'
                ? 'bg-white shadow-sm text-gray-900 border border-gray-100'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Payment Methods
          </button>
        </div>

        {/* Tab Content Area */}
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
          {activeTab === 'company' ? <CompanyProfileTab /> : <PaymentMethodsTab />}
        </div>
      </div>
    </main>
  );
};

export default SettingsPage;