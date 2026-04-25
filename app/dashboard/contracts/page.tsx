"use client";

import React from 'react';
import { FolderOpen, AlertCircle } from 'lucide-react';
import BusinessContractTemplatesAccordion from '@/components/dashboard/BusinessContractTemplatesAccordion';

export default function Contracts() {
  const contractData = [
    {
      title: "Corporate Bylaws",
      mainTip: "The bylaws of a corporation are an internal document that details the operating rules for the corporation. The bylaws of a corporation are typically adopted at the organizational meeting of the board of directors after the corporation has been filed with the state.",
      expandedTip: "Tip: Get access to this document along with 25+ high quality legal documents to assist with running your business."
    },
    {
      title: "Non-Compete Agreement",
      mainTip: "A contract between an employee and employer that restricts the employee's ability to engage in business which competes with their current employer after termination.",
      expandedTip: "Protect your business interests with customizable non-compete clauses and comprehensive legal protection."
    },
    {
      title: "Operating Agreement",
      mainTip: "A key document used by LLCs to outline the business's financial and functional decisions including rules, regulations, and provisions.",
      expandedTip: "Establish clear governance structure with our professional LLC operating agreement template."
    },
    {
      title: "Confidentiality Agreement",
      mainTip: "Protects sensitive information shared between parties with non-disclosure provisions and legal penalties for breaches.",
      expandedTip: "Safeguard trade secrets and proprietary information with iron-clad NDA templates."
    },
    {
      title: "Independent Contractor Agreement",
      mainTip: "Defines the scope of work, payment terms, and responsibilities for freelance or contract workers.",
      expandedTip: "Streamline contractor relationships with complete agreement templates including scope and payment terms."
    },
    {
      title: "Partnership Agreement",
      mainTip: "Outlines rights, responsibilities, profit sharing, and dissolution terms for business partners.",
      expandedTip: "Form strong partnerships with fair and balanced agreement templates."
    },
    {
      title: "Employment Agreement",
      mainTip: "Details job responsibilities, compensation, benefits, and termination conditions for employees.",
      expandedTip: "Hire with confidence using comprehensive employment contracts."
    },
    {
      title: "Service Agreement",
      mainTip: "Specifies services to be provided, timelines, pricing, and performance standards for clients.",
      expandedTip: "Deliver services professionally with detailed service level agreements."
    },
    {
      title: "Sales Agreement",
      mainTip: "Defines terms for product sales including price, delivery, warranties, and payment schedules.",
      expandedTip: "Close deals faster with professional sales contract templates."
    },
    {
      title: "Lease Agreement",
      mainTip: "Legal contract for property rental covering rent, duration, maintenance, and termination.",
      expandedTip: "Secure tenant relationships with complete commercial lease agreements."
    }
  ];

  return (
    <main className="flex-1 p-8 bg-gray-50 font-sans antialiased overflow-y-auto">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header - Balanced & Clean */}
        <header>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-50 rounded-xl">
              <FolderOpen className="w-6 h-6 text-orange-600" />
            </div>
            <div className="space-y-0.5">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                Resource Library
              </span>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                Business Contract Templates
              </h1>
            </div>
          </div>
          <p className="text-gray-500 text-[15px] leading-relaxed font-medium">
            We give you easy access to legal templates to assist with various business affairs. 
            You can download them directly to your computer and edit them.
          </p>
        </header>

        {/* Important Notice Box - Minimal Style */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
            <AlertCircle className="w-5 h-5 text-gray-400" />
          </div>
          <div className="pt-0.5">
            <p className="text-[13px] text-gray-500 leading-relaxed font-medium">
              <span className="text-gray-900 font-bold">Important:</span> These documents are not customized for your particular situation. We recommend consulting with legal counsel for specific business requirements.
            </p>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 pb-10">
          {contractData.map((item, index) => (
            <BusinessContractTemplatesAccordion 
              key={index}
              title={item.title}
              description={item.mainTip}
              expandedTip={item.expandedTip}
            />
          ))}
        </div>

      </div>
    </main>
  );
}