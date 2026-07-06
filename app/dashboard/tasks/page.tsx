"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Zap, CheckCircle2 } from "lucide-react";

import UnclaimedServiceRow from "@/components/dashboard/UnclaimedServiceRow";
import RecommendationCards from "@/components/dashboard/RecommendationCards";
import BuildWebsiteModal from "@/components/dashboard/BuildWebsiteModal";
import DomainEmailModal from "@/components/dashboard/DomainEmailModal";
import SafeguardBusinessModal from "@/components/dashboard/SafeguardBusinessModal";

const TasksPage = () => {
  const initialServices = [
    {
      id: 1,
      title: "Build Your Website",
      description: "Launch an engaging, mobile-ready site to showcase your business.",
      type: "website",
    },
    {
      id: 2,
      title: "Claim Your Name, Domain, Email",
      description: "A custom domain and professional email show you mean business.",
      type: "domain",
    },
    {
      id: 3,
      title: "Safeguard Your Business",
      description: "Insurance coverage designed for small businesses, dont skip this step.",
      type: "safeguard",
    },
  ];

  const [unclaimedServices, setUnclaimedServices] = useState(initialServices);
  const [showClaimModal, setShowClaimModal] = useState(false);
  const [selectedServiceType, setSelectedServiceType] = useState<
    "website" | "domain" | "safeguard" | null
  >(null);

  const STORAGE_KEY = "unclaimedServices";

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
    setUnclaimedServices((prev) => prev.filter((service) => service.id !== id));
  };

  const handleClaimSuccess = () => {
    const serviceId = unclaimedServices.find(
      (service) => service.type === selectedServiceType
    )?.id;

    if (serviceId) {
      handleRemove(serviceId);
    }

    setShowClaimModal(false);
    setSelectedServiceType(null);
  };

  const handleOpenClaimModal = (serviceId: number) => {
    const service = unclaimedServices.find((service) => service.id === serviceId);

    if (service?.type) {
      setSelectedServiceType(service.type as "website" | "domain" | "safeguard");
      setShowClaimModal(true);
    }
  };

  return (
    <main className="flex-1 overflow-y-auto bg-slate-50 p-6 font-sans antialiased md:p-10">
      <div className="mx-auto max-w-6xl space-y-12">
        {/* Header */}
        <header>
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 shadow-sm">
              <Zap className="h-7 w-7 text-cyan-600" />
            </div>

            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-cyan-600">
                Incorp Bay Dashboard
              </p>
              <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900">
                My Tasks
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                Complete important action items and unlock recommended services for your business.
              </p>
            </div>
          </div>
        </header>

        {/* Compliance Tasks */}
        <section>
          <h2 className="mb-6 text-xl font-black text-slate-900">Compliance Tasks</h2>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex min-h-[120px] flex-col gap-6 p-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1">
                <h3 className="mb-1 text-lg font-bold text-slate-900">
                  Compliance Up to Date
                </h3>
                <p className="text-sm font-medium leading-6 text-slate-500">
                  We provide courtesy alerts to make sure that you never miss an important state
                  compliance due date.
                </p>
              </div>

              <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
                <div className="hidden h-12 w-px bg-slate-100 lg:block" />

                <div className="w-full lg:w-[240px]">
                  <div className="mb-2 flex w-fit items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-emerald-700">
                    <CheckCircle2 className="h-4 w-4" />
                    <span className="text-sm font-semibold">Good Standing</span>
                  </div>
                  <p className="text-[12px] font-medium text-slate-400">
                    You are up to date with compliance events.
                  </p>
                </div>

                <Link href="/dashboard/compliance">
                  <button className="min-w-[140px] shrink-0 rounded-2xl border border-slate-200 bg-white px-8 py-3 text-sm font-bold text-slate-700 shadow-sm transition-all hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-600">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Unclaimed Services */}
        <section>
          <h2 className="mb-6 text-xl font-black text-slate-900">Unclaimed Services</h2>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white text-sm font-medium shadow-sm divide-y divide-slate-100">
            {unclaimedServices.map((service) => (
              <UnclaimedServiceRow
                key={service.id}
                title={service.title}
                description={service.description}
                type={service.type as "website" | "domain" | "safeguard"}
                onRemove={handleRemove}
                onClaim={handleOpenClaimModal}
                serviceId={service.id}
              />
            ))}
          </div>
        </section>

        {/* Recommendations */}
        <section className="pb-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
              <svg
                className="h-7 w-7 text-cyan-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>

            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-cyan-600">
                Recommended For You
              </p>
              <h2 className="mt-1 text-2xl font-black text-slate-900">
                Recommendations
              </h2>
            </div>
          </div>

          <RecommendationCards />
        </section>
      </div>

      {/* Service Specific Modals */}
      {selectedServiceType === "website" && (
        <BuildWebsiteModal
          isOpen={showClaimModal}
          onClose={() => {
            setShowClaimModal(false);
            setSelectedServiceType(null);
          }}
        />
      )}

      {selectedServiceType === "domain" && (
        <DomainEmailModal
          isOpen={showClaimModal}
          onClose={() => {
            setShowClaimModal(false);
            setSelectedServiceType(null);
          }}
        />
      )}

      {selectedServiceType === "safeguard" && (
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
