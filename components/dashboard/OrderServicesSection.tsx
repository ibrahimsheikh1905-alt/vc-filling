"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowRight, FileText, Award, Globe, Search, BookOpen,
  X, ChevronRight, Edit3, RefreshCw, Briefcase,
  FileCode, Type, XCircle, MapPin
} from 'lucide-react';

const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";
const LOGO_GRADIENT_TEXT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent";

interface ServiceType {
  icon: React.ElementType;
  title: string;
  description: string;
  path?: string;
  isModal?: boolean;
}

const servicesData: Record<string, ServiceType[]> = {
  'Company Changes': [
    { icon: Type, title: 'Assumed Business Name', description: 'Filed if a company requires assumed business/fictitious name.', path: '/dashboard/Registrationoffictitious' },
    { icon: Edit3, title: 'Amendment', description: 'Filed if a company requires changes to membership, addresses or company name.', path: '/dashboard/Amendment' },
    { icon: RefreshCw, title: 'Reinstatement', description: 'Used to formally restore a company to good standing.', path: '/dashboard/Reinstatement' },
    { icon: XCircle, title: 'Dissolution', description: 'Used to formally terminate the existence of an entity.', path: '/dashboard/Dissolution' },
    { icon: MapPin, title: 'Virtual Address', description: 'Business address service to maintain the privacy of your personal addresses.', path: '/dashboard/VirtualAddress' }
  ],
  'Compliance': [
{ icon: FileText, title: 'File Annual Report', description: 'Maintain good standing with your state by filing your annual report on time.', path: '/dashboard/compliance' },
    { icon: Award, title: 'Certificate Of Good Standing', description: 'Prove your business is in good standing with a certificate from your state.', path: '/dashboard/certificateofgood' },
    { icon: Globe, title: 'Foreign Qualification', description: 'Register your business to operate legally in additional states.', path: '/dashboard/ForeignQualification' },
    { icon: Search, title: 'Trademark Name Search', description: 'Protect your brand with a comprehensive trademark search.', path: '/dashboard/TradeNameSearch' },
    { icon: BookOpen, title: 'Licenses & Permits', description: 'Identify and obtain all required local, state, and federal licenses.', path: '/dashboard/LicensePackage' }
  ],
  'Registered Agent': [
    { icon: Briefcase, title: 'New Registered Agent Service', description: 'Click here if you have existing registered agent service and would like to renew it.', path: '/dashboard/Registeragentform' },
    { icon: RefreshCw, title: 'Change Registered Agent', description: 'Use to update the registered agent on file with the state of formation.', path: '/dashboard/ChangeRegister' }
  ],
  'IRS Filings': [
    { icon: FileText, title: 'Form 2553', description: 'The 2553 is the IRS form filed by a business entity in order to obtain the S-Corporation tax classification.', path: '/dashboard/IRSfillingform' },
    { icon: FileCode, title: 'EIN / Tax ID Number', description: 'An EIN is required to open a bank account, file taxes and submit payroll taxes.', path: '/dashboard/EINTAXIDNumber' }
  ],
  /* Is tab ke andar cards empty rakhe hain kyunki click par direct navigation hoga */
  'Business Formation Kit': []
};

const mainTabs = Object.keys(servicesData);

export default function OrderServicesSection() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('Company Changes');

  const isTwoColumnTab = ['Registered Agent', 'IRS Filings'].includes(activeTab);

  return (
    <div className="mt-16 font-sans max-w-7xl mx-auto p-4 bg-[#F9FAFB]">
      <div className="mb-10 text-left">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-2">Order services for your companies</h2>
        <p className="text-gray-500 text-[15px] font-medium">We are happy to handle the paperwork for you.</p>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-3 mb-12">
        {mainTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              /* Agar 'Business Formation Kit' tab hai to direct page open karo */
              if (tab === 'Business Formation Kit') {
                router.push('/dashboard/BusinessFormationKit');
              } else {
                setActiveTab(tab);
              }
            }}
            className={`px-5 py-2.5 rounded-full text-[13px] font-bold border transition-all duration-200 ${
              activeTab === tab
                ? `${LOGO_GRADIENT} text-white border-transparent shadow-sm`
                : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:text-gray-900 shadow-sm'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className={`grid grid-cols-1 gap-6 transition-all duration-300 ${isTwoColumnTab ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
        {servicesData[activeTab].map((s, i) => (
          <div key={`${activeTab}-${i}`} className="group flex flex-col h-full bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 min-h-[260px]">
            <div className={`${LOGO_GRADIENT} w-12 h-12 rounded-xl flex items-center justify-center mb-5`}>
              <s.icon className="w-5 h-5 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 text-base mb-3 text-left">{s.title}</h4>
            <p className="text-gray-500 text-[13px] mb-6 leading-relaxed font-medium flex-grow text-left line-clamp-3">{s.description}</p>

            <button
              onClick={() => {
                if (s.isModal) {
                  setIsModalOpen(true);
                } else if (s.path) {
                  router.push(s.path);
                }
              }}
              className={`inline-flex items-center gap-1.5 ${LOGO_GRADIENT_TEXT} text-sm font-bold mt-auto w-fit hover:gap-2 transition-all`}
            >
              Learn More <ArrowRight className="w-4 h-4" />


            </button>
          </div>
        ))}
      </div>

      {/* Modal Section */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-white w-full max-w-2xl rounded-[32px] p-10 shadow-2xl animate-in zoom-in duration-300">
            <button onClick={() => setIsModalOpen(false)} className="absolute right-8 top-8 text-gray-400 hover:text-gray-600">
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-xl font-bold text-gray-900 mb-8 text-left">Select a company associated with your purchase</h3>
            
            {/* Modal Content matches Image Style */}
            <div className="border-2 border-[#2B93C9] rounded-2xl p-6 bg-white mb-10">
              <div className="flex items-start gap-4 text-left">
                <div className="mt-1.5 w-5 h-5 rounded-full border-2 border-[#2B93C9] flex items-center justify-center">
                  <div className={`${LOGO_GRADIENT} w-2.5 h-2.5 rounded-full`} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg uppercase">NEW COMPANY</h4>
                  <p className="text-gray-500 text-sm font-medium mt-1">A company previously incorporated outside of Bizee</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => { setIsModalOpen(false); router.push('/dashboard/annual-report'); }}
              className={`${LOGO_GRADIENT} group relative overflow-hidden text-white font-bold px-10 py-4 rounded-full flex items-center gap-2 ml-auto shadow-lg transition-all duration-300 hover:scale-[1.03] hover:brightness-110`}
            >
              <span className="absolute inset-x-0 top-0 h-1/2 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
              <span className="absolute -left-16 top-0 h-full w-10 -skew-x-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />
              <span className="relative z-10 flex items-center gap-2">Next <ChevronRight className="w-5 h-5" /></span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}