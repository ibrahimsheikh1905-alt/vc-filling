"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowRight, FileText, Award, Globe, Search, BookOpen, 
  X, ChevronRight, Edit3, RefreshCw, Scale, Briefcase, 
  FileCode, Type, XCircle, MapPin
} from 'lucide-react';

interface ServiceType {
  icon: React.ElementType;
  title: string;
  description: string;
  path?: string; 
  isModal?: boolean; 
}

const servicesData: Record<string, ServiceType[]> = {
  'Company Changes': [
    { icon: Type, title: 'Assumed Business Name', description: 'Filed if a company requires assumed business/fictitious name.' },
    { icon: Edit3, title: 'Amendment', description: 'Filed if a company requires changes to membership, addresses or company name.' },
    { icon: RefreshCw, title: 'Reinstatement', description: 'Used to formally restore a company to good standing.' },
    { icon: XCircle, title: 'Dissolution', description: 'Used to formally terminate the existence of an entity.' },
    { icon: MapPin, title: 'Virtual Address', description: 'Business address service to maintain the privacy of your personal addresses.' }
  ],
  'Compliance': [
    { 
      icon: FileText, 
      title: 'File Annual Report', 
      description: 'Maintain good standing with your state by filing your annual report on time.',
      isModal: true 
    },
    { 
      icon: Award, 
      title: 'Certificate Of Good Standing', 
      description: 'Prove your business is in good standing with a certificate from your state.',
      // Check karein agar iska folder bhi capital hai toh waisa hi likhein
      path: '/dashboard/certificateofgood' 
    },
    { 
      icon: Globe, 
      title: 'Foreign Qualification', 
      description: 'Register your business to operate legally in additional states.',
      // FIXED: Aapke folder name (ForeignQualification) ke mutabiq update kiya hai
      path: '/dashboard/ForeignQualification' 
    },
    { icon: Search, 
      title: 'Trademark Name Search', 
      description: 'Protect your brand with a comprehensive trademark search.',
      path: '/dashboard/TradeNameSearch'
    },

    { icon: BookOpen, title: 
      'Licenses & Permits', 
      description: 'Identify and obtain all required local, state, and federal licenses.',
      path: '/dashboard/LicensePackage'
    }
  ],
  'Registered Agent': [
    { icon: Briefcase, 
      title: 'New Registered Agent Service', 
      description: 'Click here if you have existing registered agent service and would like to renew it.',
      path: '/dashboard/Registeragentform'

     },
    { icon: RefreshCw, 
      title: 'Change Registered Agent', 
      description: 'Use to update the registered agent on file with the state of formation.',
      path: '/dashboard/ChangeRegister'

     }
  ],
  'IRS Filings': [
    { icon: FileText,
      title: 'Form 2553',
      description: 'The 2553 is the IRS form filed by a business entity in order to obtain the S-Corporation tax classification.',
      path: '/dashboard/IRSfillingform'
    
    },
    { icon: FileCode, 
      title: 'EIN / Tax ID Number', 
      description: 'An EIN is required to open a bank account, file taxes and submit payroll taxes.',
      path: '/dashboard/EINTAXIDNumber'

     },
  ],
  'Business Formation Kit': [
    { icon: BookOpen, title: 'Corporate Bylaws', description: 'Formalize your business structure and internal governing rules.' },
    { icon: Award, title: 'Banking Resolution', description: 'Document required by banks to open a business account.' }
  ]
};

const mainTabs = Object.keys(servicesData);

export default function OrderServicesSection() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('Compliance');

  const isTwoColumnTab = ['Registered Agent', 'IRS Filings', 'Business Formation Kit'].includes(activeTab);

  return (
    <div className="mt-16 font-sans max-w-7xl mx-auto p-4 bg-[#F9FAFB]">
      <div className="mb-10 text-left">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 mb-2">Order services for your companies</h2>
        <p className="text-gray-500 text-[15px] font-medium">We're happy to handle the paperwork for you.</p>
      </div>

      {/* TABS NAVIGATION */}
      <div className="flex flex-wrap gap-3 mb-12">
        {mainTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-full text-[13px] font-bold border transition-all duration-200 ${
              activeTab === tab
                ? 'bg-orange-500 text-white border-orange-500 shadow-sm'
                : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:text-gray-900 shadow-sm'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* DYNAMIC SERVICES GRID */}
      <div className={`grid grid-cols-1 gap-6 transition-all duration-300 ${isTwoColumnTab ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
        {servicesData[activeTab].map((s, i) => (
          <div key={`${activeTab}-${i}`} className="group flex flex-col h-full bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 min-h-[260px]"> 
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange-100">
              <s.icon className="w-5 h-5 text-orange-600" />
            </div>
            <h4 className="font-bold text-gray-900 text-base mb-3 text-left">{s.title}</h4>
            <p className="text-gray-500 text-[13px] mb-6 leading-relaxed font-medium flex-grow text-left line-clamp-3">{s.description}</p>
            
            <button 
              onClick={() => {
                if (s.isModal) {
                  setIsModalOpen(true);
                } else if (s.path) {
                  router.push(s.path);
                } else {
                  console.log("No link defined for:", s.title);
                }
              }}
              className="inline-flex items-center gap-1.5 text-orange-600 text-sm font-bold mt-auto w-fit hover:gap-2 transition-all"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* MODAL COMPONENT */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-white w-full max-w-2xl rounded-[32px] p-10 shadow-2xl animate-in zoom-in duration-300">
            <button onClick={() => setIsModalOpen(false)} className="absolute right-8 top-8 text-gray-400 hover:text-gray-600">
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-xl font-bold text-gray-900 mb-8 text-left">Select a company associated with your purchase</h3>
            <div className="border-2 border-orange-500 rounded-2xl p-6 bg-white mb-10">
              <div className="flex items-start gap-4 text-left">
                <div className="mt-1.5 w-5 h-5 rounded-full border-2 border-orange-500 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                </div>
                <div>
                  <h4 className="font-extrabold text-gray-900 text-lg uppercase">NEW COMPANY</h4>
                  <p className="text-gray-500 text-sm font-medium mt-1">A company previously incorporated outside of Bizee</p>
                </div>
              </div>
            </div>
            <button 
              onClick={() => { setIsModalOpen(false); router.push('/dashboard/annual-report'); }} 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-2xl flex items-center gap-2 ml-auto shadow-lg"
            >
              Next <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}