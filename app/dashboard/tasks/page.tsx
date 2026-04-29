"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Zap, CheckCircle2 } from 'lucide-react';

import UnclaimedServiceRow from '@/components/dashboard/UnclaimedServiceRow';
import RecommendationCards from '@/components/dashboard/RecommendationCards';
import BuildWebsiteModal from '@/components/dashboard/BuildWebsiteModal';
import DomainEmailModal from '@/components/dashboard/DomainEmailModal';
import SafeguardBusinessModal from '@/components/dashboard/SafeguardBusinessModal';

const TasksPage = () => {
  const initialServices = [
    { id: 1, title: 'Build Your Website', description: 'Launch an engaging, mobile-ready site to showcase your business.', type: 'website' },
    { id: 2, title: 'Claim Your Name, Domain, Email', description: 'A custom domain and professional email show you mean business.', type: 'domain' },
    { id: 3, title: 'Safeguard Your Business', description: 'Insurance coverage designed for small businesses, dont skip this step.', type: 'safeguard' }
  ];


  const [unclaimedServices, setUnclaimedServices] = useState(initialServices);
  const [showClaimModal, setShowClaimModal] = useState(false);
  const [selectedServiceType, setSelectedServiceType] = useState<'website' | 'domain' | 'safeguard' | null>(null);

  const STORAGE_KEY = 'unclaimedServices';

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setUnclaimedServices(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(unclaimedServices));
  }, [unclaimedServices]);

  const handleRemove = (id: number) => {
    setUnclaimedServices(prev => prev.filter(service => service.id !== id));
  };

  const handleClaimSuccess = () => {
    // Remove from unclaimed after successful claim
    const serviceId = unclaimedServices.find(s => s.type === selectedServiceType)?.id;
    if (serviceId) {
      handleRemove(serviceId);
    }
    setShowClaimModal(false);
    setSelectedServiceType(null);
  };

  const handleOpenClaimModal = (serviceId: number) => {
    const service = unclaimedServices.find(s => s.id === serviceId);
    if (service?.type) {
      setSelectedServiceType(service.type as 'website' | 'domain' | 'safeguard');
      setShowClaimModal(true);
    }
  };


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

        {/* 2. Compliance Tasks */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-6">Compliance Tasks</h2>
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="flex flex-row items-center justify-between p-8 min-h-[120px]">
              
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Compliance Up to Date</h3>
                <p className="text-sm text-gray-500 font-medium">
                  We provide courtesy alerts to make sure that you never miss a state compliance important due date.
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="h-12 w-[1px] bg-gray-100 mx-10"></div>
                
                <div className="flex items-center gap-12">
                  <div className="w-[200px]">
                    <div className="flex items-center gap-2 bg-[#D1FAE5] text-[#065F46] px-3 py-1 rounded-full w-fit mb-1">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-sm font-semibold">Good Standing</span>
                    </div>
                    <p className="text-[12px] text-gray-400 font-medium whitespace-nowrap">
                      Your up to date with compliance events!
                    </p>
                  </div>

                  <Link href="/dashboard/compliance">
                    <button className="border border-gray-200 hover:bg-gray-50 text-gray-700 px-8 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-sm shrink-0 min-w-[140px]">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Unclaimed Services */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-6">Unclaimed Services</h2>
          <div className="bg-white shadow-sm rounded-2xl border border-gray-200 overflow-hidden divide-y divide-gray-100 font-medium text-sm">
{unclaimedServices.map((service) => (
              <UnclaimedServiceRow 
                key={service.id}
                title={service.title}
                description={service.description}
                type={service.type as 'website' | 'domain' | 'safeguard'}

                onRemove={handleRemove}
                onClaim={handleOpenClaimModal}
                serviceId={service.id}
              />
            ))}
          </div>
        </section>

        {/* 4. Recommendations */}
        <section className="pb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-orange-50 rounded-2xl">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Recommendations</h2>
          </div>

          <RecommendationCards />
        </section>
      </div>

      {/* Service Specific Modals */}
      {selectedServiceType === 'website' && (
        <BuildWebsiteModal
          isOpen={showClaimModal}
          onClose={() => {
            setShowClaimModal(false);
            setSelectedServiceType(null);
          }}
        />
      )}
      {selectedServiceType === 'domain' && (
        <DomainEmailModal
          isOpen={showClaimModal}
          onClose={() => {
            setShowClaimModal(false);
            setSelectedServiceType(null);
          }}
        />
      )}
      {selectedServiceType === 'safeguard' && (
        <SafeguardBusinessModal
          isOpen={showClaimModal}
          onClose={() => {
            setShowClaimModal(false);
            setSelectedServiceType(null);
          }}
        />
      )}

    </main>
  );
};

export default TasksPage;

