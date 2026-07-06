"use client";

import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  HelpCircle, 
  Info, 
  CheckCircle2, 
  Star,
  Plus,
  CreditCard,
  Check,
  MapPin,
  Lock,
  Loader2
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const AnnualReportPage = () => {
  // 1. States for Logic
  const [selectedPlan, setSelectedPlan] = useState<'standard' | 'unlimited'>('unlimited');
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [formationDate, setFormationDate] = useState('');
  const [loading, setLoading] = useState(true);
  
  // Company Data States
  const [companyData, setCompanyData] = useState<{
    companyName: string;
    state: string;
    businessPurpose: string;
  } | null>(null);
  
  // Form States
  const [cardNumber, setCardNumber] = useState('');
  const [isSaved, setIsSaved] = useState(false);
  
  const router = useRouter();

  // Get User ID from JWT or localStorage
  const getUserId = (): number | null => {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      try {
        const parts = jwtToken.split('.');
        if (parts.length >= 2) {
          const base64Url = parts[1];
          const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          const jsonPayload = decodeURIComponent(
            atob(base64)
              .split('')
              .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
              .join('')
          );
          const payload = JSON.parse(jsonPayload);
          return payload.id || payload.userId || null;
        }
      } catch (e) {
        console.error('[AnnualReport] JWT decode error:', e);
      }
    }
    const localUserId = localStorage.getItem('userId');
    if (localUserId) {
      return parseInt(localUserId);
    }
    return null;
  };

  // Fetch Company Data
  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const userId = getUserId();
        if (!userId) {
          setLoading(false);
          return;
        }

        const response = await fetch(`/api/company-data?userId=${userId}`, {
          credentials: 'include'
        });
        
        const data = await response.json();
        
        if (data.success && data.company) {
          setCompanyData({
            companyName: data.company.companyName || data.company.name || 'N/A',
            state: data.company.state || 'N/A',
            businessPurpose: data.company.businessPurpose || data.company.business_type || 'N/A'
          });
        } else if (data.success && data.data) {
          // Fallback for different response structure
          setCompanyData({
            companyName: data.data.companyName || data.data.company_name || 'N/A',
            state: data.data.state || 'N/A',
            businessPurpose: data.data.businessPurpose || data.data.business_purpose || 'N/A'
          });
        }
      } catch (err) {
        console.error('[AnnualReport] Error fetching company data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyData();
  }, []);

  // 2. Pricing Calculations
  const stateFee = 10;
  const processingFee = selectedPlan === 'unlimited' ? 0 : 129;
  const planPrice = selectedPlan === 'unlimited' ? 99 : 0;
  const totalAmount = stateFee + processingFee + planPrice;

  const handleSavePayment = () => {
    if (cardNumber.length > 10) {
      setIsSaved(true);
      setShowPaymentForm(false);
    } else {
      alert("Please fill in the card details correctly.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">
      {/* Top Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-cyan-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-end mb-8">
          <div>
            <span className="inline-flex rounded-full bg-cyan-100 px-4 py-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan-600">
              Incorp Bay Dashboard
            </span>
            <h1 className="mt-4 text-3xl font-black text-slate-900">Annual Report</h1>
          </div>
          <button className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-cyan-500">
            Learn more <HelpCircle className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid lg:grid-cols-[1fr_350px] gap-8 items-start">
          
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            
            {/* 1. Review Information Card */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <h2 className="text-base font-bold mb-4">Review Your Information</h2>
              <div className="bg-cyan-50 border border-cyan-100 rounded-xl p-3 flex items-center gap-3 mb-8">
                <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                <p className="text-[13px] text-slate-600">
                  We've pre-filled all your information from our records. Simply review and confirm.
                </p>
              </div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase mb-1">Company</p>
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin text-cyan-500" />
                      <span className="text-sm text-slate-400">Loading...</span>
                    </div>
                  ) : (
                    <p className="text-sm font-semibold">{companyData?.companyName || 'N/A'}</p>
                  )}
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase mb-1">State of Formation</p>
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin text-cyan-500" />
                      <span className="text-sm text-slate-400">Loading...</span>
                    </div>
                  ) : (
                    <p className="text-sm font-semibold">{companyData?.state || 'N/A'}</p>
                  )}
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase mb-1">Business Purpose</p>
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin text-cyan-500" />
                      <span className="text-sm text-slate-400">Loading...</span>
                    </div>
                  ) : (
                    <p className="text-sm font-semibold">{companyData?.businessPurpose || 'N/A'}</p>
                  )}
                </div>
              </div>
            </div>

            {/* 2. Missing Information */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <h2 className="text-base font-bold mb-2">Missing Information</h2>
              <p className="text-xs text-slate-500 leading-relaxed mb-6 italic">Add the information below so we can submit your report on time.</p>
              <div className="h-[1px] bg-slate-100 w-full mb-8" />
              
              <div className="max-w-xs">
                <p className="text-[11px] font-bold text-slate-400 uppercase mb-2">Date of Formation</p>
                <input 
                  type="date" 
                  value={formationDate}
                  onChange={(e) => setFormationDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 outline-none"
                />
              </div>
            </div>

            {/* 3. Filing Plan Selection */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <h2 className="text-base font-bold mb-8">Choose Your Filing Plan</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div onClick={() => setSelectedPlan('standard')} className={`cursor-pointer rounded-2xl border-2 p-6 transition-all ${selectedPlan === 'standard' ? 'border-cyan-500 bg-white shadow-cyan-500/10 shadow-md' : 'border-slate-100 bg-slate-50'}`}>
                  <div className="flex items-center gap-3 mb-6">
                     <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedPlan === 'standard' ? 'border-cyan-500' : 'border-gray-300'}`}>
                        {selectedPlan === 'standard' && <div className="w-2.5 h-2.5 bg-cyan-500 rounded-full" />}
                     </div>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">One-time fee</p>
                  </div>
                  <h4 className="text-lg font-bold mb-1">Standard Filing</h4>
                  <div className="mt-8 font-black text-2xl">$129</div>
                </div>

                <div onClick={() => setSelectedPlan('unlimited')} className={`relative cursor-pointer rounded-2xl border-2 p-6 transition-all ${selectedPlan === 'unlimited' ? 'border-cyan-500 bg-cyan-50 shadow-cyan-500/10 shadow-md' : 'border-slate-100 bg-slate-50'}`}>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-100 text-cyan-600 text-[9px] font-black px-4 py-1 rounded-full uppercase">Best Deal</div>
                  <div className="flex items-center gap-3 mb-6">
                     <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedPlan === 'unlimited' ? 'border-cyan-500' : 'border-gray-300'}`}>
                        {selectedPlan === 'unlimited' && <div className="w-2.5 h-2.5 bg-cyan-500 rounded-full" />}
                     </div>
                     <p className="text-[10px] font-bold text-cyan-600 uppercase tracking-widest">Annual Plan</p>
                  </div>
                  <h4 className="text-lg font-bold mb-1">Unlimited State Filings</h4>
                  <div className="mt-8 font-black text-2xl">$99<span className="text-[11px] text-slate-400 ml-1">/year</span></div>
                </div>
              </div>
            </div>

            {/* 4. Combined Payment & Billing Information */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
              <h2 className="text-base font-bold mb-6">Payment & Billing</h2>
              
              {/* Primary Card View */}
              <div className="border-2 border-cyan-500 rounded-2xl p-4 flex items-center justify-between bg-white mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 rounded-full border-2 border-cyan-500 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-cyan-500 rounded-full" />
                  </div>
                  <div className="bg-gray-50 p-1 rounded border border-slate-100"><CreditCard className="w-4 h-4 text-blue-800" /></div>
                  <div>
                    <p className="text-[13px] font-bold">{isSaved ? `Visa **** ${cardNumber.slice(-4)}` : 'Visa **** 4754'}</p>
                    <p className="text-[11px] text-slate-400 uppercase tracking-tight">Primary Payment Method</p>
                  </div>
                </div>
                <span className="bg-[#E7F3FF] text-[#007AFF] text-[10px] font-black px-3 py-1 rounded-md uppercase">Primary</span>
              </div>

              {/* Toggle-able Form: Card Details + Billing Address */}
              {showPaymentForm ? (
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-8 animate-in slide-in-from-top-4 duration-300">
                  
                  {/* Card Section */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <CreditCard className="w-4 h-4 text-cyan-500" />
                      <h3 className="text-sm font-bold text-gray-800">New Card Details</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase">Card Number</label>
                        <input 
                          type="text" 
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm mt-1 focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 outline-none transition-all" 
                          placeholder="0000 0000 0000 0000" 
                        />
                      </div>
                      <input type="text" className="bg-white border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 outline-none" placeholder="MM/YY" />
                      <input type="text" className="bg-white border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 outline-none" placeholder="CVV" />
                    </div>
                  </div>

                  {/* Billing Address Section */}
                  <div className="pt-6 border-t border-slate-200">
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="w-4 h-4 text-cyan-500" />
                      <h3 className="text-sm font-bold text-gray-800">Billing Address</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase">Street Address</label>
                        <input type="text" className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm mt-1 focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 outline-none" placeholder="123 Business Way" />
                      </div>
                      <div>
                        <label className="text-[10px] font-black text-slate-400 uppercase">City</label>
                        <input type="text" className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm mt-1 focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 outline-none" placeholder="Jefferson City" />
                      </div>
                      <div>
                        <label className="text-[10px] font-black text-slate-400 uppercase">Zip Code</label>
                        <input type="text" className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm mt-1 focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 outline-none" placeholder="65101" />
                      </div>
                    </div>
                  </div>

                  {/* Done / Cancel Buttons */}
                  <div className="flex gap-3 pt-2">
                    <button 
                      onClick={handleSavePayment} 
                      className="bg-[#06B6D4] text-white text-xs font-bold px-8 py-3 rounded-2xl flex items-center gap-2 hover:bg-[#0891B2] transition-all shadow-md shadow-cyan-200 active:scale-95"
                    >
                      <Check className="w-4 h-4" /> Save Payment Details
                    </button>
                    <button 
                      onClick={() => setShowPaymentForm(false)} 
                      className="text-xs font-bold text-slate-400 hover:text-slate-600 px-4"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <button 
                  onClick={() => setShowPaymentForm(true)}
                  className="w-full border-2 border-dashed border-slate-200 rounded-2xl p-5 text-[13px] font-bold text-slate-500 hover:bg-gray-50 hover:border-cyan-200 flex justify-between items-center transition-all group"
                >
                  <span className="flex items-center gap-2">
                    <Plus className="w-4 h-4 text-cyan-500 group-hover:scale-110 transition-transform" /> 
                    Add a New Payment & Billing Address
                  </span>
                  <span className="text-[10px] text-gray-300 font-bold uppercase tracking-widest italic">Secure Checkout</span>
                </button>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: Order Summary */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h3 className="text-base font-bold text-slate-900 mb-6 tracking-tight italic">Order Summary</h3>
              
              <div className="space-y-5">
                <div className="flex justify-between text-[13px] font-medium text-slate-600">
                  <span>MO State Fee</span>
                  <span className="text-slate-900 font-bold">${stateFee}</span>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[13px] font-medium text-slate-600">
                    <span>Processing Fee</span>
                    <span className="flex items-center gap-2">
                      {selectedPlan === 'unlimited' && <span className="text-gray-300 line-through text-xs font-normal">$129</span>}
                      <span className="text-slate-900 font-bold">${processingFee}</span>
                    </span>
                  </div>
                  {selectedPlan === 'unlimited' && (
                    <p className="text-[10px] text-cyan-500 flex items-center gap-1 font-bold italic">
                      <Info className="w-3 h-3" /> You're saving $129 with Unlimited
                    </p>
                  )}
                </div>

                <div className="flex justify-between text-[13px] font-medium text-slate-600">
                  <span>Basic State Filings</span>
                  <span className="text-slate-900 font-bold">${planPrice}</span>
                </div>

                <div className="h-[1px] bg-slate-100 w-full my-2" />

                <div className="flex justify-between items-end">
                  <span className="text-lg font-bold text-slate-900">Total</span>
                  <span className="text-2xl font-black text-slate-900">${totalAmount}</span>
                </div>

                <button 
                  disabled={!formationDate}
                  className={`w-full py-4 rounded-2xl font-bold text-white transition-all shadow-lg flex items-center justify-center gap-2 
                    ${formationDate 
                      ? 'bg-[#06B6D4] hover:bg-[#0891B2] shadow-cyan-200 active:scale-95' 
                      : 'bg-slate-200 cursor-not-allowed text-slate-400 shadow-none'}`}
                >
                  <Lock className="w-4 h-4" /> Complete & Pay
                </button>

                <div className="flex flex-col items-center gap-3 pt-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-[10px] text-slate-400 font-medium tracking-tight uppercase">4.75 Trust Score • 60k+ Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnualReportPage;