"use client";

import React, { useState, useEffect } from 'react';
import PaymentMethodsTab from '@/components/dashboard/PaymentMethodsTab';
import { ArrowLeft } from 'lucide-react';

export default function MailDocumentsPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Load saved cards from localStorage (same as subscription cards)
    const savedCards = localStorage.getItem('paymentCards');
    if (savedCards) {
      setCards(JSON.parse(savedCards));
    }
  }, []);

  return (
    <main className="flex-1 p-8 overflow-y-auto bg-[#F9FAFB] font-sans antialiased min-h-screen">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Back Button + Header */}
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={() => window.history.back()}
            className="p-2 hover:bg-gray-100 rounded-xl transition-all"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div>
            <h1 className="text-3xl font-black tracking-tight text-gray-900">
              Mail My Documents
            </h1>
            <p className="text-gray-500 font-medium mt-1">$25 • FedEx Delivery</p>
          </div>
        </div>

        {/* Payment Methods - Reuse existing cards + subscription functionality */}
        <PaymentMethodsTab />
        
        {/* Confirm Button */}
        <div className="pt-8 border-t">
          <button className="w-full bg-[#FF5722] hover:bg-[#F4511E] text-white font-black py-6 px-8 rounded-2xl text-lg uppercase tracking-wider shadow-lg transition-all">
            Confirm & Pay $25
          </button>
        </div>
      </div>
    </main>
  );
}

