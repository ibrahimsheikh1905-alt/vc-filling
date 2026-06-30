"use client";

import React, { useState, useEffect } from 'react';
import { CreditCard, ChevronDown, Plus, HelpCircle, Save, X, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PaymentMethodsTab = () => {
  // States
  const [showAddForm, setShowAddForm] = useState(false);
  const [cards, setCards] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [newCard, setNewCard] = useState({ number: '', expiry: '', holder: '', cvc: '', setAsPrimary: false });
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [deleting, setDeleting] = useState<number | null>(null);

  // Toggle card expansion
  const toggleCardExpand = (cardId: number) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  // Make card primary
  const handleSetPrimary = async (cardId: number) => {
    const jwtToken = localStorage.getItem('jwtToken');
    if (!jwtToken) return;

    try {
      const res = await fetch('/api/payment-methods', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwtToken}`
        },
        body: JSON.stringify({
          paymentMethodId: cardId,
          isPrimary: true
        })
      });
      const data = await res.json();

      if (data.success) {
        // Refresh cards
        const res = await fetch('/api/payment-methods', {
          headers: { 'Authorization': `Bearer ${jwtToken}` }
        });
        const data = await res.json();
        if (data.success) {
          setCards(data.paymentMethods);
        }
      }
    } catch (error) {
      console.error('Error setting primary:', error);
    }
  };

  // Delete card
  const handleDeleteCard = async (cardId: number) => {
    if (!confirm('Are you sure you want to delete this payment method?')) return;
    
    const jwtToken = localStorage.getItem('jwtToken');
    if (!jwtToken) return;

    setDeleting(cardId);
    try {
      const res = await fetch('/api/payment-methods', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwtToken}`
        },
        body: JSON.stringify({
          paymentMethodId: cardId
        })
      });
      const data = await res.json();

      if (data.success) {
        // Refresh cards
        const res = await fetch('/api/payment-methods', {
          headers: { 'Authorization': `Bearer ${jwtToken}` }
        });
        const data = await res.json();
        if (data.success) {
          setCards(data.paymentMethods);
        }
      }
    } catch (error) {
      console.error('Error deleting card:', error);
    } finally {
      setDeleting(null);
    }
  };

  // Fetch payment methods from API on mount
  useEffect(() => {
    const fetchPaymentMethods = async () => {
      try {
        const jwtToken = localStorage.getItem('jwtToken');
        if (!jwtToken) {
          setLoading(false);
          return;
        }

        const res = await fetch('/api/payment-methods', {
          headers: { 'Authorization': `Bearer ${jwtToken}` }
        });
        const data = await res.json();

        if (data.success && data.paymentMethods) {
          setCards(data.paymentMethods);
        }
      } catch (error) {
        console.error('Error fetching payment methods:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentMethods();
  }, []);

  const handleSave = async () => {
    if (!newCard.number || !newCard.holder) return alert("Please fill details");
    
    const jwtToken = localStorage.getItem('jwtToken');
    if (!jwtToken) {
      alert('Please login first');
      return;
    }

    setSaving(true);
    try {
      const res = await fetch('/api/payment-methods', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwtToken}`
        },
        body: JSON.stringify({
          last4: newCard.number.slice(-4),
          expiry: newCard.expiry || "12/28",
          holder: newCard.holder,
          company: "PERSONAL CARD",
          isPrimary: newCard.setAsPrimary
        })
      });
      const data = await res.json();

      if (data.success) {
        // Re-fetch payment methods
        const res = await fetch('/api/payment-methods', {
          headers: { 'Authorization': `Bearer ${jwtToken}` }
        });
        const data = await res.json();
        if (data.success) {
          setCards(data.paymentMethods);
        }
      } else {
        alert('Failed to add card: ' + data.error);
      }
    } catch (error) {
      console.error('Error saving card:', error);
      alert('Error saving card');
    } finally {
      setSaving(false);
      setShowAddForm(false);
      setNewCard({ number: '', expiry: '', holder: '', cvc: '', setAsPrimary: false });
    }
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
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
            </div>
          ) : cards.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              No payment methods found. Add a new card below.
            </div>
) : cards.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              No payment methods found. Add a new card below.
            </div>
          ) : (
            cards.map((card) => (
              <div key={card.id} className="bg-gray-50/50 p-6 rounded-[20px] border border-gray-100 transition-all hover:shadow-md hover:bg-white">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg flex items-center justify-center text-white shadow-lg">
                    <CreditCard className="w-6 h-6 opacity-80" />
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-lg font-bold text-gray-900 tracking-tight">**** **** **** {card.last4}</span>
                      {card.isPrimary && (
                        <span className="px-2.5 py-1 rounded-full bg-blue-500 text-white text-[10px] font-black uppercase tracking-wider">Primary</span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm font-medium">
                      <p className="text-gray-400">Expires <span className="text-gray-600">{card.expiry}</span></p>
                      <p className="text-gray-400">Cardholder: <span className="text-gray-600 uppercase">{card.holder}</span></p>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-10 w-10 p-0 rounded-xl hover:bg-orange-50"
                    onClick={() => toggleCardExpand(card.id)}
                  >
                    <ChevronDown className={`w-5 h-5 transition-transform ${expandedCard === card.id ? 'rotate-180' : ''}`} />
                  </Button>
                </div>
                
                {/* Expanded Card Details */}
                {expandedCard === card.id && (
                  <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-500 uppercase">Company</p>
                        <p className="text-sm font-medium">{card.company}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase">Card Type</p>
                        <p className="text-sm font-medium capitalize">{card.cardType}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      {!card.isPrimary && (
                        <Button 
                          size="sm" 
                          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white"
                          onClick={() => handleSetPrimary(card.id)}
                        >
                          Set as Primary
                        </Button>
                      )}
                      <Button 
                        size="sm" 
                        variant="destructive"
                        className="flex-1 bg-red-500 hover:bg-red-600 text-white"
                        onClick={() => handleDeleteCard(card.id)}
                        disabled={deleting === card.id}
                      >
                        {deleting === card.id ? 'Deleting...' : 'Delete'}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
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
                <label className="flex items-center gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={newCard.setAsPrimary}
                    onChange={(e) => setNewCard({...newCard, setAsPrimary: e.target.checked})}
                    className="w-5 h-5 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                  />
                  <span className="text-sm font-medium text-gray-700">Set as primary payment method</span>
                </label>
              </div>
              <div className="mt-4 flex gap-4">
                <Button onClick={handleSave} disabled={saving} className="flex-1 bg-gray-900 hover:bg-black text-white font-black py-6 rounded-xl uppercase tracking-widest text-xs">
                  {saving ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Save className="w-4 h-4 mr-2" />
                  )} 
                  {saving ? 'Saving...' : 'Save Card'}
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