"use client";

import React, { useState, useEffect } from 'react';
import { Package, Check, FileText, Loader2 } from "lucide-react";

const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";
const LOGO_GRADIENT_TEXT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent";

interface Order {
  id: number;
  company: string;
  type: string;
  state: string;
  status: string;
  date: string;
  amount: number;
  createdAt?: string;
}

export default function OrderStatus() {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState<Order[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchOrderData();
  }, []);

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
        console.error('[OrderStatus] JWT decode error:', e);
      }
    }
    const localUserId = localStorage.getItem('userId');
    if (localUserId) {
      return parseInt(localUserId);
    }
    return null;
  };

const fetchOrderData = async () => {
    try {
      setLoading(true);
      let resolvedUserId: number | null = getUserId();
      
      // Try to get from localStorage first
      if (!resolvedUserId) {
        const localUserId = localStorage.getItem('userId');
        if (localUserId) {
          const parsedId = parseInt(localUserId);
          if (!isNaN(parsedId)) {
            resolvedUserId = parsedId;
          }
        }
      }
      
      // If still no userId, try to fetch all orders (fallback - for guest users who submitted forms)
      // This ensures users can see their orders even if not logged in
      let response;
      const apiUrl = resolvedUserId 
        ? `/api/orders?userId=${resolvedUserId}` 
        : `/api/orders`; // No userId filter - will return all orders for the user
      
      console.log('[OrderStatus] Fetching from:', apiUrl, 'with userId:', resolvedUserId);
      
      try {
        response = await fetch(apiUrl, { credentials: 'include' });
      } catch (apiError) {
        console.log('[OrderStatus] Primary API failed, trying admin API...');
        try {
          const extApiUrl = resolvedUserId 
            ? `http://localhost:3001/api/orders?userId=${resolvedUserId}` 
            : `http://localhost:3001/api/orders`;
          response = await fetch(extApiUrl, { credentials: 'include' });
        } catch (extError) {
          console.error('[OrderStatus] Both APIs failed');
          setError('Failed to load order data');
          setLoading(false);
          return;
        }
      }
      
const data = await response.json();

// Sort orders by date to get the most recent one
      if (data.success && data.orders && data.orders.length > 0) {
        const sortedOrders = [...data.orders].sort((a: Order, b: Order) => {
          const dateA = new Date(a.date || a.createdAt || 0).getTime();
          const dateB = new Date(b.date || b.createdAt || 0).getTime();
          return dateB - dateA; // newest first
        });
        setOrders(sortedOrders);
      } else {
        setOrders([]);
      }
    } catch (err) {
      console.error('[OrderStatus] Error fetching order:', err);
      setError('Failed to load order data');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return dateStr || 'N/A';
    }
  };

  const getStatusMessage = (status: string) => {
    const s = status?.toLowerCase();
    if (s === 'pending' || s === 'on hold' || s === 'hold') {
      return { title: 'Hold', message: 'Your order is currently on hold' };
    } else if (s === 'completed' || s === 'paid' || s === 'active') {
      return { title: 'Active', message: 'Your order is complete and active' };
    } else if (s === 'processing') {
      return { title: 'Processing', message: 'Your order is being processed' };
    }
    return { title: status, message: `Your order status: ${status}` };
  };

const getProgressPercentage = (status: string) => {
    const s = status?.toLowerCase();
    // 0% - Not started
    if (s === 'pending' || s === 'on hold' || s === 'hold' || s === 'new' || s === 'awaiting') return 0;
    // 25% - Being processed
    if (s === 'processing' || s === 'in progress' || s === 'reviewing') return 25;
    // 50% - Submitted
    if (s === 'submitted' || s === 'received' || s === 'filed') return 50;
    // 75% - Approved/In progress
    if (s === 'approved' || s === 'in progress' || s === 'under review' || s === 'review') return 75;
    // 100% - Complete
    if (s === 'completed' || s === 'paid' || s === 'active' || s === 'approved') return 100;
    // Default
    return 0;
  };

  const getProgressStep = (status: string) => {
    const s = status?.toLowerCase();
    if (s === 'pending' || s === 'on hold' || s === 'hold' || s === 'new' || s === 'awaiting') return 1;
    if (s === 'processing' || s === 'in progress' || s === 'reviewing') return 2;
    if (s === 'submitted' || s === 'received' || s === 'filed') return 3;
    if (s === 'approved' || s === 'in progress' || s === 'under review' || s === 'review') return 4;
    if (s === 'completed' || s === 'paid' || s === 'active' || s === 'approved') return 5;
    return 1;
  };

  // Render all orders in a list. Header always renders immediately so the
  // page shell doesn't pop in separately from the data below it.
  return (
    <div className="bg-[#F9FAFB] min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="flex items-center gap-3 mb-8 text-left">
          <Package className="w-5 h-5 text-[#2B93C9]" strokeWidth={2.5} />
          <h1 className="text-sm font-bold uppercase tracking-widest text-gray-900">
            ORDER STATUS
          </h1>
        </div>

        {loading ? (
          <div className="bg-white border border-gray-100 rounded-[24px] shadow-sm p-10 flex items-center justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-[#2B93C9]" />
          </div>
        ) : error ? (
          <div className="bg-white border border-gray-100 rounded-[24px] shadow-sm p-10 text-left">
            <p className="text-red-500 font-medium">{error}</p>
          </div>
        ) : orders.length === 0 ? (
          <div className="bg-white border border-gray-100 rounded-[24px] shadow-sm p-10 text-left">
            <p className="text-gray-500 font-medium">No order found.</p>
          </div>
        ) : (
          <>
        {/* Render each order in the list */}
        {orders.map((order, index) => {
          const companyName = order.company || `${order.type || ''} (${order.state || ''})`;
          const packageName = order.type ? `${order.type} (${order.state || ''})` : companyName;
          const dateOrdered = order.date ? formatDate(order.date) : 'N/A';
          const statusInfo = getStatusMessage(order.status);
          const progressPercentage = getProgressPercentage(order.status);
          const progressStep = getProgressStep(order.status);
          
          return (
            <div key={order.id || index} className="bg-white border border-gray-100 rounded-[24px] shadow-sm p-10 mb-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-4 lg:gap-y-2 items-center">
                
                {/* LINE 1: Left mein Title aur Right mein Percentage */}
                <div className="lg:col-span-8 text-left">
                  <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{packageName}</h2>
                </div>
                <div className="lg:col-span-4 text-left lg:text-right">
                  <span className={`text-4xl font-bold tracking-tight ${LOGO_GRADIENT_TEXT}`}>
                    {progressPercentage}%
                  </span>
                </div>

                {/* LINE 2: Left mein Date Ordered aur Right mein actual Progress Bar Timeline */}
                <div className="lg:col-span-6 text-left text-[14px]">
                  <p className="text-gray-400 font-medium">
                    Date Ordered: <span className="text-gray-900 font-bold ml-1">{dateOrdered}</span>
                  </p>
                </div>
                <div className="lg:col-span-6 flex justify-start lg:justify-end w-full my-2 lg:my-0">
                  <div className="flex items-center justify-between relative w-full max-w-md px-1">
                    <div className="absolute top-1/2 left-0 w-full h-[3px] bg-gray-100 -translate-y-1/2 z-0" />
                    <div
                      className={`${LOGO_GRADIENT} absolute top-1/2 left-0 h-[3px] -translate-y-1/2 z-[1] transition-all duration-500`}
                      style={{ width: `${progressPercentage}%` }}
                    />
                    
                    {[1, 2, 3, 4].map((step) => {
                      const isCompleted = step < progressStep;
                      const isCurrent = step === progressStep;
                      return (
                        <div 
                          key={step} 
                          className={`relative z-10 w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isCompleted ? `${LOGO_GRADIENT} border-2 border-transparent` :
                            isCurrent ? 'bg-white border-4 border-[#2B93C9] shadow-sm' :
                            'bg-white border-2 border-gray-200'
                          }`}
                        >
                          {isCompleted && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                      );
                    })}
                    
                    <div className={`relative z-10 w-9 h-9 rounded-full flex items-center justify-center shadow-sm border-2 transition-all duration-300 ${progressStep === 5 ? `${LOGO_GRADIENT} border-transparent` : 'bg-white border-gray-100'}`}>
                      <Check className={`w-4 h-4 ${progressStep === 5 ? 'text-white' : 'text-gray-300'}`} strokeWidth={3.5} />
                    </div>
                  </div>
                </div>

                {/* LINE 3: Left mein State aur Right mein Status Text Message */}
                <div className="lg:col-span-7 text-left text-[14px]">
                  <p className="text-gray-400 font-medium">
                    State: <span className="text-gray-900 font-bold ml-1">{order.state || 'N/A'}</span>
                  </p>
                </div>
                <div className="lg:col-span-5 text-left lg:text-right">
                  <p className="text-[13px] font-medium leading-relaxed">
                    <span className="font-bold text-[#2B93C9]">
                      {statusInfo.title}.
                    </span>{' '}
                    <span className="text-gray-400">{statusInfo.message}</span>
                  </p>
                </div>

                {/* LINE 4: Bottom details main status line layout fix ke liye */}
                <div className="lg:col-span-12 text-left text-[14px] mt-1">
                  <p className="text-gray-400 font-medium">
                    Status: <span className="font-bold ml-1 text-[#2B93C9]">{order.status || 'N/A'}</span>
                  </p>
                </div>

              </div>
            </div>
          );
        })}

        {/* Bottom Callout Actions Module */}
        <div className="bg-white border border-gray-100 rounded-[24px] shadow-sm p-10 mt-6">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
            <div className="flex items-center gap-6 text-left">
              <div className="shrink-0 bg-slate-50 p-4 rounded-2xl">
                <FileText className="w-10 h-10 text-gray-800" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 leading-snug">
                  Need a physical copy of your filed documents?
                </h3>
                <p className="text-[14px] text-gray-400 font-medium mt-1 leading-relaxed">
                  We will deliver a digital version of your documents, but can also send a copy via Fedex if needed
                </p>
              </div>
            </div>
            <div className="shrink-0 w-full md:w-auto">
              <button
                onClick={() => window.location.href = '/dashboard/mail-documents'}
                className={`${LOGO_GRADIENT} group relative w-full md:w-auto overflow-hidden text-white font-bold py-4 px-10 rounded-full transition-all duration-300 hover:scale-[1.03] hover:brightness-110 text-xs tracking-widest shadow-lg shadow-cyan-100 uppercase cursor-pointer`}
              >
                <span className="absolute inset-x-0 top-0 h-1/2 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
                <span className="absolute -left-16 top-0 h-full w-10 -skew-x-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />
                <span className="relative z-10">MAIL MY DOCUMENTS - $25</span>
              </button>
            </div>
          </div>
        </div>
          </>
        )}

      </div>
    </div>
  );
}