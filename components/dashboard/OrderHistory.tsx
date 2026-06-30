"use client";

import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Receipt,
  Loader2
} from 'lucide-react';

interface Order {
  id: number;
  company: string;
  type: string;
  state: string;
  status: string;
  date: string;
  amount: number;
}

const OrderHistory = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get userId from JWT token
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
        console.error('[OrderHistory] JWT decode error:', e);
      }
    }
    const localUserId = localStorage.getItem('userId');
    if (localUserId) {
      return parseInt(localUserId);
    }
    return null;
  };

  // Fetch orders from API
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const userId = getUserId();
        
        if (!userId) {
          setError('Please login to view your orders');
          setLoading(false);
          return;
        }

        // Try web API first
        let response;
        try {
          response = await fetch(`/api/orders?userId=${userId}`, { credentials: 'include' });
        } catch {
          // Fallback to admin API
          response = await fetch(`http://localhost:3001/api/orders?userId=${userId}`, { credentials: 'include' });
        }

        const data = await response.json();

        if (data.success && data.orders) {
          // Sort by date - most recent first
          const sortedOrders = data.orders.sort((a: Order, b: Order) => {
            const dateA = new Date(a.date || 0).getTime();
            const dateB = new Date(b.date || 0).getTime();
            return dateB - dateA; // descending - newest first
          });
          setOrders(sortedOrders);
        } else {
          setOrders([]);
        }
      } catch (err) {
        console.error('[OrderHistory] Error fetching orders:', err);
        setError('Failed to load orders');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // Format date
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

  // Format amount
  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount || 0);
  };

  // Get status color
  const getStatusColor = (status: string) => {
    const s = status?.toLowerCase();
    if (s === 'completed' || s === 'paid' || s === 'active') {
      return 'bg-green-100 text-green-700';
    } else if (s === 'pending' || s === 'on hold' || s === 'hold') {
      return 'bg-gray-100 text-gray-500';
    } else if (s === 'processing') {
      return 'bg-yellow-100 text-yellow-700';
    }
    return 'bg-gray-100 text-gray-500';
  };

  // Get order number
  const getOrderNo = (order: Order) => {
    // Generate a unique order number from id and date
    const dateStr = order.date ? new Date(order.date).toISOString().slice(2, 8).replace(/-/g, '') : '000000';
    const idStr = String(order.id).padStart(6, '0');
    return `${dateStr}${idStr}`;
  };

  if (loading) {
    return (
      <div className="flex-1 p-8 overflow-y-auto bg-[#F9FAFB] font-sans">
        <div className="max-w-7xl mx-auto flex items-center justify-center min-h-[400px]">
          <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-8 overflow-y-auto bg-[#F9FAFB] font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Order History Receipts Table */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100">
              <Receipt className="w-6 h-6 text-orange-500" />
            </div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">Order History Receipts</h1>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-100 rounded-xl p-6 mb-6">
              <p className="text-red-600 font-medium">{error}</p>
            </div>
          )}

          {orders.length === 0 && !error ? (
            <div className="bg-white border border-gray-200 rounded-[28px] shadow-lg overflow-hidden">
              <div className="p-12 text-center">
                <Receipt className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 font-medium">No orders found.</p>
                <p className="text-gray-400 text-sm mt-1">Your order history will appear here once you place an order.</p>
              </div>
            </div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-[28px] shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50/50 border-b border-gray-100">
                      <th className="px-8 py-6 text-sm font-black text-gray-400 uppercase tracking-widest">Company Name</th>
                      <th className="px-6 py-6 text-sm font-black text-gray-400 uppercase tracking-widest">Order No.</th>
                      <th className="px-6 py-6 text-sm font-black text-gray-400 uppercase tracking-widest">Order Type</th>
                      <th className="px-6 py-6 text-sm font-black text-gray-400 uppercase tracking-widest">Amount</th>
                      <th className="px-6 py-6 text-center text-sm font-black text-gray-400 uppercase tracking-widest">Receipt</th>
                      <th className="px-6 py-6 text-sm font-black text-gray-400 uppercase tracking-widest">Order Date</th>
                      <th className="px-6 py-6 text-sm font-black text-gray-400 uppercase tracking-widest">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {orders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50/50 transition-colors group">
                        <td className="px-8 py-8 font-black text-xl text-[#111827]">{order.company || 'N/A'}</td>
                        <td className="px-6 py-8 text-[16px] font-bold text-gray-500">{getOrderNo(order)}</td>
                        <td className="px-6 py-8 text-[16px] font-bold text-gray-600">
                          {order.type} ({order.state})
                        </td>
                        <td className="px-6 py-8 text-xl font-black text-[#111827]">{formatAmount(order.amount)}</td>
                        <td className="px-6 py-8 text-center">
                          <a 
                            href={`/dashboard/${order.id}`} 
                            className="p-3 bg-red-50 rounded-xl hover:bg-red-100 transition-colors inline-block"
                          >
                            <FileText className="w-6 h-6 text-red-500" />
                          </a>
                        </td>
                        <td className="px-6 py-8 text-[16px] font-bold text-gray-600">
                          {formatDate(order.date)}
                        </td>
                        <td className="px-6 py-8">
                          <span className={`inline-flex px-5 py-2 rounded-full text-sm font-black uppercase tracking-wide ${getStatusColor(order.status)}`}>
                            {order.status || 'N/A'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default OrderHistory;

