"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const recommendations = [
  { title: 'Virtual Address', path: '/dashboard/VirtualAddress', desc: 'Business address service to maintain privacy of personal addresses.', icon: '🏠', cardClass: 'card-normal' },
  { title: 'Logo Design', path: '/logo-design', desc: 'Professional logo design to establish your brand identity.', icon: '🎨', cardClass: 'card-normal' },
  { title: 'Freelance Services', path: '/freelance-services', desc: 'Access vetted freelancers for your business needs.', icon: '👥', cardClass: 'card-normal' },
  { title: 'EIN / Tax Number', path: '/dashboard/EINTAXIDNumber', desc: 'Get your EIN required for banking and taxes.', icon: '📋', cardClass: 'card-normal' },
  { title: 'Credit Card', path: '/business-credit-card', desc: 'Business credit cards for operations and rewards.', icon: '💳', cardClass: 'card-normal' },
  { title: 'S-Corp Calculator', path: '/s-corp-calculator', desc: 'Calculate potential tax savings with S-Corp status.', icon: '🧮', cardClass: 'card-normal' },
  { title: 'S-Corp Election Form (Form 2553)', path: '/dashboard/IRSfillingform', desc: 'IRS Form 2553 for S-Corp tax election.', icon: '📄', cardClass: 'card-normal' },
  { title: 'Business Loan', path: '/business-loan', desc: 'Secure funding for business growth and operations.', icon: '💰', cardClass: 'card-normal' },
  { title: 'Contract Template', path: '/contract-template', desc: 'Professional contract templates for business use.', icon: '📝', cardClass: 'card-normal' },
  { title: 'Trademark', path: '/dashboard/TradeNameSearch', desc: 'Protect your brand with trademark registration.', icon: '®️', cardClass: 'card-normal' }
];

export default function RecommendationCards() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerSlide = 4;
  const totalSlides = Math.ceil(recommendations.length / cardsPerSlide);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const startIndex = currentSlide * cardsPerSlide;
  const currentCards = recommendations.slice(startIndex, startIndex + cardsPerSlide);

  return (
    <div className="w-full font-sans antialiased relative">
      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 h-[400px]">
        {currentCards.map((rec, index) => (
          <div key={index} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full">

            <div className="mb-6 relative h-32 flex items-center justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:scale-105 transition-all duration-300">
                {rec.icon}
              </div>
            </div>
            
            <h4 className="text-lg font-bold text-gray-900 mb-2">{rec.title}</h4>
            <p className="text-gray-500 text-sm font-medium mb-6 leading-relaxed flex-grow line-clamp-2">{rec.desc}</p>
            
            <Link 
              href={rec.path} 
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-xl text-sm font-bold transition-all shadow-sm shadow-orange-100 text-center group-hover:shadow-md flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        ))}
      </div>

      {/* Slider Controls */}
      <div className="flex items-center mt-12">
        <div className="flex gap-2 mx-auto">



          {Array.from({ length: totalSlides }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-4 h-4 rounded-full transition-all shadow-sm ${
                i === currentSlide ? 'bg-orange-500 scale-125 shadow-md' : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
              }`}
            />
          ))}
        </div>

        
        <div className="ml-8 flex gap-3">
          <button 
            onClick={prevSlide}
            className="w-14 h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 shadow-md hover:shadow-lg transition-all"
            title="Previous"
          >
            <ChevronLeft className="w-7 h-7 text-gray-700" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="w-14 h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 shadow-md hover:shadow-lg transition-all"
            title="Next"
          >
            <ChevronRight className="w-7 h-7 text-gray-700" />
          </button>
        </div>
      </div>




      {/* Progress Indicator */}
      {/* No progress indicator */}

    </div>
  );
}

