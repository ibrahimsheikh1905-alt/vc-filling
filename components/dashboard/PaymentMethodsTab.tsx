"use client";

import React, { useState } from 'react';
import { CreditCard, ChevronDown, Plus, HelpCircle, Save, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PaymentMethodsTab = () => {
  // States
  const [showAddForm, setShowAddForm] = useState(false);
  const [cards, setCards] = useState([
    { id: 1, last4: "9591", expiry: "08/2032", holder: "John Doe", company: "SOLVEXNEST INC.", primary: true }
  ]);
  const [newCard, setNewCard] = useState({ number: '', expiry: '', holder: '', cvc: '' });

  const handleSave = () => {
    if (!newCard.number || !newCard.holder) return alert("Please fill details");
    
    const cardToAdd = {
      id: Date.now(),
      last4: newCard.number.slice(-4),
      expiry: newCard.expiry || "12/28",
      holder: newCard.holder,
      company: "PERSONAL CARD",
      primary: false
    };

    setCards([...cards, cardToAdd]);
    setShowAddForm(false);
    setNewCard({ number: '', expiry: '', holder: '', cvc: '' });
  };

  return (
    <div className="space-y-8 font-sans antialiased animate-in fade-in duration-500 pb-10 max-w-5xl mx-auto">
      
      {/* 1. Payment Methods Card */}
      <Card className="border-gray-100 shadow-sm rounded-[24px] overflow-hidden">
        <CardHeader className="border-b border-gray-50 bg-white p-8">
          <CardTitle className="flex items-center gap-3">
            <div className="bg-orange-50 p-2 rounded-xl">
               <CreditCard className="w-5 h-5 text-orange-500" />
            </div>
            <span className="text-[20px] font-black tracking-[-0.02em] text-gray-900 uppercase">
              Payment Methods
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 space-y-4">
          {cards.map((card) => (
            <div key={card.id} className="flex items-center gap-6 bg-gray-50/50 p-6 rounded-[20px] border border-gray-100 transition-all hover:shadow-md hover:bg-white">
              <div className="w-16 h-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg flex items-center justify-center text-white shadow-lg">
                <CreditCard className="w-6 h-6 opacity-80" />
              </div>
              <div className="flex-1 min-w-0 text-left">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-lg font-bold text-gray-900 tracking-tight">**** **** **** {card.last4}</span>
                  {card.primary && (
                    <span className="px-2.5 py-1 rounded-full bg-blue-500 text-white text-[10px] font-black uppercase tracking-wider">Primary</span>
                  )}
                </div>
                <div className="flex items-center gap-4 text-sm font-medium">
                  <p className="text-gray-400">Expires <span className="text-gray-600">{card.expiry}</span></p>
                  <p className="text-gray-400">Cardholder: <span className="text-gray-600 uppercase">{card.holder}</span></p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="h-10 w-10 p-0 rounded-xl hover:bg-orange-50">
                <ChevronDown className="w-5 h-5" />
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* 2. Add Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {!showAddForm ? (
          <>
            <Card className="border-gray-100 shadow-sm rounded-[24px] flex flex-col justify-center items-center p-8 bg-gray-50/30 border-dashed border-2">
              <p className="text-[13px] font-bold text-gray-400 uppercase tracking-widest text-center mb-2">Other Methods</p>
              <p className="text-sm font-medium text-gray-500 text-center">No other methods found.</p>
            </Card>

            <Card className="border-orange-100 shadow-sm rounded-[24px] flex flex-col justify-center items-center p-8 bg-orange-50/20 border-dashed border-2 transition-all hover:bg-orange-50/40 group">
              <Button 
                onClick={() => setShowAddForm(true)}
                className="bg-[#FF5722] hover:bg-[#E64A19] text-white font-black px-8 py-6 rounded-xl shadow-lg uppercase tracking-widest text-xs"
              >
                <Plus className="w-5 h-5 mr-2 stroke-[3px]" />
                Add New Card
              </Button>
            </Card>
          </>
        ) : (
          <Card className="border-orange-200 shadow-xl rounded-[24px] p-8 bg-white col-span-full animate-in slide-in-from-bottom-4 duration-300">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-black uppercase text-gray-900">Card Details</h3>
                <Button variant="ghost" onClick={() => setShowAddForm(false)} className="rounded-full w-10 h-10 p-0"><X className="w-5 h-5"/></Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 text-left">
                    <label className="text-[11px] font-bold text-gray-700 uppercase ml-1">Card Number</label>
                    <input 
                        type="text" placeholder="0000 0000 0000 0000" 
                        className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none font-medium"
                        onChange={(e) => setNewCard({...newCard, number: e.target.value})}
                    />
                </div>
                <div className="space-y-2 text-left">
                    <label className="text-[11px] font-bold text-gray-700 uppercase ml-1">Cardholder Name</label>
                    <input 
                        type="text" placeholder="NAME ON CARD" 
                        className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none font-medium uppercase"
                        onChange={(e) => setNewCard({...newCard, holder: e.target.value})}
                    />
                </div>
                <div className="space-y-2 text-left">
                    <label className="text-[11px] font-bold text-gray-700 uppercase ml-1">Expiry Date</label>
                    <input 
                        type="text" placeholder="MM/YY" 
                        className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none font-medium"
                        onChange={(e) => setNewCard({...newCard, expiry: e.target.value})}
                    />
                </div>
                <div className="space-y-2 text-left">
                    <label className="text-[11px] font-bold text-gray-700 uppercase ml-1">CVC</label>
                    <input 
                        type="text" placeholder="***" 
                        className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none font-medium"
                    />
                </div>
            </div>
            <div className="mt-8 flex gap-4">
                <Button onClick={handleSave} className="flex-1 bg-gray-900 hover:bg-black text-white font-black py-6 rounded-xl uppercase tracking-widest text-xs">
                    <Save className="w-4 h-4 mr-2" /> Save Card
                </Button>
                <Button onClick={() => setShowAddForm(false)} variant="outline" className="px-8 py-6 rounded-xl font-bold border-gray-200">Cancel</Button>
            </div>
          </Card>
        )}
      </div>

      {/* 3. FAQ Section */}
      <Card className="border-gray-100 shadow-sm rounded-[24px] overflow-hidden">
        <CardHeader className="border-b border-gray-50 bg-white p-8 text-left">
          <CardTitle className="flex items-center gap-3">
            <div className="bg-gray-50 p-2 rounded-xl">
               <HelpCircle className="w-5 h-5 text-gray-400" />
            </div>
            <span className="text-[20px] font-black tracking-[-0.02em] text-gray-900 uppercase">
              Common Questions
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 space-y-4">
          {[
            {
              q: "What is a Primary payment method?",
              a: "The primary payment method is automatically used for all recurring charges and new orders unless you specify otherwise."
            },
            {
              q: "Company vs Personal Methods?",
              a: "Company Payment Methods are business cards used for company expenses. Other Payment Methods are personal cards for flexible billing."
            },
            {
              q: "How do I change my primary method?",
              a: "Click the manage button next to any payment method and select 'Make Primary' from the options."
            }
          ].map((faq, i) => (
            <details key={i} className="group border border-gray-100 rounded-[18px] p-5 hover:border-orange-100 transition-all hover:bg-gray-50/50 text-left">
              <summary className="font-bold text-[15px] text-gray-700 cursor-pointer flex items-center gap-2 list-none">
                {faq.q}
                <ChevronDown className="w-4 h-4 text-gray-400 ml-auto transition-transform group-open:rotate-180" />
              </summary>
              <p className="text-sm text-gray-500 font-medium mt-3 leading-relaxed pl-1">
                {faq.a}
              </p>
            </details>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentMethodsTab;