"use client";

import React from 'react';
import ComplianceTasks from './ComplianceTasks';
import UnclaimedServiceRow from './UnclaimedServiceRow';
import RecommendationCards from './RecommendationCards';
import CarouselIndicators from './CarouselIndicators';

const unclaimedServices = [
  {
    title: 'Build Your Website',
    description: 'Launch an engaging, mobile-ready site to showcase your business.'
  },
  {
    title: 'Claim Your Name, Domain, Email',
    description: 'A custom domain and professional email show you mean business.'
  },
  {
    title: 'Safeguard Your Business',
    description: 'Insurance coverage designed for small businesses, dont skip this step.'
  }
];

export default function ComplianceCard() {
  return (
    <div>
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Compliance Tasks</h2>
        <ComplianceTasks />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Unclaimed Services</h2>
        <div className="bg-white shadow-lg rounded-2xl border border-gray-200 p-8">
          <div className="space-y-0">
            {unclaimedServices.map((service, index) => (
              <UnclaimedServiceRow 
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Recommendations</h2>
        <RecommendationCards />
        <CarouselIndicators />
      </div>
    </div>
  );
}




