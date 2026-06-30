"use client";

import React, { useState, useEffect } from 'react';
import { Package, Check, FileText, Loader2, X } from "lucide-react";

interface Order {
  id: number;
  company: string;
  type: string;
  state: string;
  status: string;
  date: string;
  amount: number;
}

export default function MailDocumentsPage() {
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState<Order | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    fetchOrderData();
  }, []);

  const getUserId = (): number | null => {
    // Priority 1: From JWT token
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
        console.error('[MailDocs] JWT decode error:', e);
      }
    }
    
    // Priority 2: From localStorage
    const localUserId = localStorage.getItem('userId');
    if (localUserId) {
      return parseInt(localUserId);
    }
    
    return null;
  };

  const fetchOrderData = async () => {
    try {
      setLoading(true);
      const userId = getUserId();
      
      if (!userId) {
        setError('Please login to view your orders.');
        setLoading(false);
        return;
      }

      const response = await fetch(`/api/orders?userId=${userId}`);
      const data = await response.json();

      if (data.success && data.orders && data.orders.length > 0) {
        // Get the most recent order
        const recentOrder = data.orders[0];
        setOrder(recentOrder);
      } else {
        setError('No orders found.');
      }
    } catch (err) {
      console.error('[MailDocs] Error fetching order:', err);
      setError('Failed to load order data.');
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
    if (s === 'pending' || s === 'on hold') {
      return { title: 'Hold', message: 'Your order is currently on hold' };
    } else if (s === 'completed' || s === 'paid') {
      return { title: 'Completed', message: 'Your order has been completed' };
    } else if (s === 'processing') {
      return { title: 'Processing', message: 'Your order is being processed' };
    }
    return { title: status, message: `Your order status: ${status}` };
  };

  const handleMailDocuments = () => {
    // Here you would integrate with payment API
    setShowConfirmation(true);
  };

  if (loading) {
    return (
      <div className="bg-[#F9FAFB] min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="bg-[#F9FAFB] min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white border border-gray-100 rounded-[24px] shadow-sm p-10">
            <p className="text-red-500">{error || 'No order found.'}</p>
          </div>
        </div>
      </div>
    );
  }

  const statusInfo = getStatusMessage(order.status);

  return (
    <div className="bg-[#F9FAFB] min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="flex items-center gap-3 mb-8">
          <Package className="w-5 h-5 text-[#FF5722]" strokeWidth={2.5} />
          <h1 className="text-s font-black uppercase tracking-widest text-gray-900">
            ORDER STATUS
          </h1>
        </div>

        {/* Top Card - Details (Left) & Progress (Right) */}
        <div className="bg-white border border-gray-100 rounded-[24px] shadow-sm p-10 mb-6">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            
            {/* Left Side: Details Section */}
            <div className="w-full lg:flex-1 text-left"> 
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                {order.type} ({order.state})
              </h2>
              <div className="space-y-2 text-[14px]">
                <p className="text-gray-500 font-medium">
                  Order Number: <span className="text-gray-900 font-bold ml-1">{order.id}</span>
                </p>
                <p className="text-gray-500 font-medium">
                  Date Ordered: <span className="text-gray-900 font-bold ml-1">{formatDate(order.date)}</span>
                </p>
              </div>
            </div>

            {/* Right Side: Status Note */}
            <div className="w-full lg:flex-1 flex flex-col items-start lg:items-end">
              <div className="w-full max-w-[350px] lg:max-w-md text-left lg:text-right">
                <p className="text-[13px] text-gray-500 font-medium">
                  <span className="text-gray-900 font-bold">{statusInfo.title}.</span> {statusInfo.message}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Card - Mail Documents Option */}
        <div className="bg-white border border-gray-100 rounded-[24px] shadow-sm p-10 mt-6">
          <div className="flex flex-row items-center justify-between w-full gap-4">
            
            {/* Left Side: Icon + Text Group */}
            <div className="flex items-center gap-6">
              <div className="shrink-0">
                <FileText className="w-10 h-10 text-gray-800" strokeWidth={1.5} />
              </div>
              
              <div className="flex flex-col text-left">
                <h3 className="text-[20px] lg:text-[20px] font-bold text-gray-900 leading-tight">
                  Need a physical copy of your filed documents?
                </h3>
                <p className="text-[14px] lg:text-[15px] text-gray-400 font-medium mt-1">
                  We will deliver a digital version of your documents, but can also send a copy via Fedex if needed
                </p>
              </div>
            </div>

            {/* Right Side: Button */}
            <div className="shrink-0">
              <button 
                onClick={handleMailDocuments}
                className="whitespace-nowrap bg-[#FF5722] hover:bg-[#F4511E] text-white font-black py-4 px-10 rounded-xl transition-all text-xs tracking-widest shadow-lg shadow-orange-100 uppercase cursor-pointer"
              >
                MAIL MY DOCUMENTS - $25
              </button>
            </div>
            
          </div>
        </div>

        {/* Confirmation Modal */}
        {showConfirmation && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowConfirmation(false)} />
            <div className="relative bg-white w-full max-w-md rounded-[32px] p-10 shadow-2xl animate-in zoom-in duration-300">
              <button 
                onClick={() => setShowConfirmation(false)}
                className="absolute right-6 top-6 text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Order Submitted!</h3>
                <p className="text-gray-500 font-medium mb-6">
                  Your physical documents will be mailed to the address on file. You will receive a tracking number via email.
                </p>
                <button 
                  onClick={() => setShowConfirmation(false)}
                  className="bg-[#FF5722] hover:bg-[#F4511E] text-white font-bold py-3 px-8 rounded-xl transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
