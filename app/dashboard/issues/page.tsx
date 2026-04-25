"use client";

import React from 'react';
import { AlertTriangle, Mail, PhoneCall } from 'lucide-react';

const PendingIssuePage = () => {
  return (
    <main className="flex-1 p-8 bg-gray-50 font-sans antialiased">
      <div className="max-w-5xl mx-auto">
        
        {/* Header - Simple & Clean */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Pending Issue</h1>
          <div className="flex gap-6 mt-4">
            <a href="mailto:info@vcfiling.com" className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-600 transition-colors">
              <Mail className="w-4 h-4" />
              info@vcfiling.com
            </a>
            <a href="tel:1-888-888-8888" className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-600 transition-colors">
              <PhoneCall className="w-4 h-4" />
              1-888-888-8888
            </a>
          </div>
        </header>

        {/* Main Content Card */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            
            {/* Left Section (Details) */}
            <div className="lg:col-span-2 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Identity Confirmation Issue</h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="font-semibold text-gray-800">Please provide the following documentation:</p>
                
                <ol className="list-decimal list-outside ml-5 space-y-4 font-medium">
                  <li>
                    A clear photo of the card used to pay for the order. Make sure the <span className="text-gray-900 font-bold">cardholder&apos;s name and the last 4 digits</span> of the card are fully visible. For digital cards, provide a screenshot and a bank statement.
                  </li>
                  <li>
                    A selfie holding your ID. If the client and cardholder are different, we require <span className="text-gray-900 font-bold">selfies from both individuals</span> holding their IDs (Passport, Driver&apos;s License, or Resident Card).
                  </li>
                </ol>

                <div className="mt-8 p-5 bg-orange-50/50 rounded-xl border border-orange-100 text-sm">
                  <p>
                    Please send documents in <span className="font-bold text-gray-900">PDF format</span>. Review usually takes 24-48 business hours. If not received within 5 business days, the order will be canceled. Send to: 
                    <a href="mailto:billing@vcfiling.com" className="text-orange-600 font-bold ml-1 hover:underline">
                      billing@vcfiling.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section (Order Info) */}
            <div className="p-8 lg:p-10 bg-gray-50/30">
              <div className="flex items-center gap-2 text-orange-600 mb-8">
                <AlertTriangle className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-wider">Status: On Hold</span>
              </div>
              
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Order Number</p>
                  <p className="text-xl font-bold text-gray-900">01234567899</p>
                </div>
                
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Filing State</p>
                  <p className="text-xl font-bold text-gray-900">Missouri</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default PendingIssuePage;