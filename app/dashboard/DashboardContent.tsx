"use client";

import React from "react";
import ComplianceCard from "@/components/dashboard/ComplianceCard";
import UnclaimedServiceRow from "@/components/dashboard/UnclaimedServiceRow";
import RecommendationCards from "@/components/dashboard/RecommendationCards";
import CarouselIndicators from "@/components/dashboard/CarouselIndicators";
import { Zap } from "lucide-react";

interface UnclaimedService {
  title: string;
  description: string;
}

const unclaimedServices: UnclaimedService[] = [
  {
    title: "Build Website",
    description: "Launch an engaging, mobile-ready site to showcase your business.",
  },
  {
    title: "Claim Your Domain & Email",
    description: "A custom domain and professional email show you mean business.",
  },
  {
    title: "Safeguard Your Business",
    description: "Insurance coverage designed for small businesses. Don't skip this step.",
  },
];

const DashboardContent: React.FC = () => {
  return (
    <main className="flex-1 min-h-screen overflow-y-auto bg-slate-50 p-6 font-sans antialiased md:p-10">
      <header className="mb-12">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 shadow-sm">
            <Zap className="h-7 w-7 fill-cyan-500 text-cyan-500" />
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-600">
              Incorp Bay Dashboard
            </p>

            <h1 className="mt-2 text-4xl font-bold uppercase tracking-tight text-slate-900">
              My Tasks
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Stay on top of your business tasks, compliance and recommended services.
            </p>
          </div>
        </div>
      </header>

      <section className="mb-14">
        <h2 className="mb-6 text-2xl font-bold text-slate-900">
          Compliance Tasks
        </h2>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <ComplianceCard />
        </div>
      </section>

      <section className="mb-14">
        <h2 className="mb-6 text-2xl font-bold text-slate-900">
          Unclaimed Services
        </h2>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="divide-y divide-slate-100">
            {unclaimedServices.map((service, index) => (
              <div key={index} className="transition hover:bg-cyan-50">
                <UnclaimedServiceRow
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-10">
        <h2 className="mb-8 text-2xl font-bold text-slate-900">
          Recommendations
        </h2>

        <RecommendationCards />

        <div className="mt-8 flex justify-center">
          <CarouselIndicators />
        </div>
      </section>
    </main>
  );
};

export default DashboardContent;
