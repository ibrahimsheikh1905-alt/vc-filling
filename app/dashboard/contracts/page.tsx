"use client";

import React from "react";
import { FolderOpen, AlertCircle } from "lucide-react";
import BusinessContractTemplatesAccordion from "@/components/dashboard/BusinessContractTemplatesAccordion";

const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";

const LOGO_GRADIENT_TEXT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent";

const LOGO_GRADIENT_SOFT =
  "bg-[linear-gradient(90deg,rgba(36,78,182,0.10)_0%,rgba(43,147,201,0.10)_50%,rgba(51,209,204,0.10)_100%)]";

export default function Contracts() {
  const contractData = [
    {
      title: "Corporate Bylaws",
      mainTip:
        "The bylaws of a corporation are an internal document that details the operating rules for the corporation. The bylaws of a corporation are typically adopted at the organizational meeting of the board of directors after the corporation has been filed with the state.",
      expandedTip:
        "Tip: Get access to this document along with 25+ high quality legal documents to assist with running your business.",
    },
    {
      title: "Non-Compete Agreement",
      mainTip:
        "A contract between an employee and employer that restricts the employee's ability to engage in business which competes with their current employer after termination.",
      expandedTip:
        "Protect your business interests with customizable non-compete clauses and comprehensive legal protection.",
    },
    {
      title: "Operating Agreement",
      mainTip:
        "A key document used by LLCs to outline the business's financial and functional decisions including rules, regulations, and provisions.",
      expandedTip:
        "Establish clear governance structure with our professional LLC operating agreement template.",
    },
    {
      title: "Confidentiality Agreement",
      mainTip:
        "Protects sensitive information shared between parties with non-disclosure provisions and legal penalties for breaches.",
      expandedTip:
        "Safeguard trade secrets and proprietary information with iron-clad NDA templates.",
    },
    {
      title: "Independent Contractor Agreement",
      mainTip:
        "Defines the scope of work, payment terms, and responsibilities for freelance or contract workers.",
      expandedTip:
        "Streamline contractor relationships with complete agreement templates including scope and payment terms.",
    },
    {
      title: "Partnership Agreement",
      mainTip:
        "Outlines rights, responsibilities, profit sharing, and dissolution terms for business partners.",
      expandedTip:
        "Form strong partnerships with fair and balanced agreement templates.",
    },
    {
      title: "Employment Agreement",
      mainTip:
        "Details job responsibilities, compensation, benefits, and termination conditions for employees.",
      expandedTip:
        "Hire with confidence using comprehensive employment contracts.",
    },
    {
      title: "Service Agreement",
      mainTip:
        "Specifies services to be provided, timelines, pricing, and performance standards for clients.",
      expandedTip:
        "Deliver services professionally with detailed service level agreements.",
    },
    {
      title: "Sales Agreement",
      mainTip:
        "Defines terms for product sales including price, delivery, warranties, and payment schedules.",
      expandedTip:
        "Close deals faster with professional sales contract templates.",
    },
    {
      title: "Lease Agreement",
      mainTip:
        "Legal contract for property rental covering rent, duration, maintenance, and termination.",
      expandedTip:
        "Secure tenant relationships with complete commercial lease agreements.",
    },
  ];

  return (
    <main className="flex-1 overflow-y-auto bg-slate-50 p-8 font-sans antialiased">
      <div className="mx-auto max-w-4xl space-y-10">
        {/* Header */}
        <header>
          <div className="mb-4 flex items-center gap-4">
            <div
              className={`${LOGO_GRADIENT} flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg shadow-[#2B93C9]/25`}
            >
              <FolderOpen className="h-7 w-7" />
            </div>

            <div>
              <h1
                className={`} mt-2 text-3xl font-bold tracking-tight`}
              >
                Business Contract Templates
              </h1>
            </div>
          </div>

          <p className="text-[15px] font-medium leading-relaxed text-slate-600">
            We give you easy access to legal templates to assist with various
            business affairs. You can download them directly to your computer
            and edit them.
          </p>
        </header>

        {/* Notice Box - Gradient Border */}
        <div className="rounded-2xl border border-transparent bg-[linear-gradient(white,white)_padding-box,linear-gradient(90deg,#244EB6,#2B93C9,#33D1CC)_border-box] p-6 shadow-lg shadow-[#2B93C9]/10">
          <div className="flex items-start gap-4">
            <div
              className={`${LOGO_GRADIENT_SOFT} flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#2B93C9]/20`}
            >
              <AlertCircle className="h-5 w-5 text-[#2B93C9]" />
            </div>

            <div>
              <p className="text-[13px] font-medium leading-relaxed text-slate-600">
                <span className="font-bold text-slate-900">
                  Important:
                </span>{" "}
                These documents are not customized for your particular
                situation. We recommend consulting with legal counsel for
                specific business requirements.
              </p>
            </div>
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