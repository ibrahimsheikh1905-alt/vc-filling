"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { 
  FileText, 
  Receipt, 
  CheckCircle2, 
  X,
  Loader2
} from "lucide-react";

interface Order {
  id: number;
  company: string;
  customer: string;
  type: string;
  state: string;
  amount: number;
  status: string;
  date: string;
}

export default function BusinessDashboard() {
  const params = useParams();
  const userId = params?.usableId as string;
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showReceipt, setShowReceipt] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

useEffect(() => {
    fetchOrders();
  }, []);

const fetchOrders = async () => {
    try {
      setLoading(true);
      
      // Get userId from localStorage as primary source
      let cleanId = localStorage.getItem('userId');
      
      // Fallback to URL param if not in localStorage
      if (!cleanId) {
        const rawId = params?.usableId as string;
        if (rawId && /^\d+$/.test(rawId)) {
          cleanId = rawId;
        }
      }
      
      // If still no valid userId, show error with debug info
      if (!cleanId || isNaN(Number(cleanId))) {
        const storedUserId = localStorage.getItem('userId');
        const jwtToken = localStorage.getItem('jwtToken');
        console.log('[Dashboard] Debug - storedUserId:', storedUserId, '| jwtToken exists:', !!jwtToken);
        setError('User not logged in or invalid session. Please login again. userId: ' + storedUserId);
        setLoading(false);
        return;
      }
      
      console.log('[Dashboard] Fetching orders for userId:', cleanId);
      const response = await fetch(`/api/orders?userId=${cleanId}`);
      const data = await response.json();
      console.log('[Dashboard] API Response:', data);
      
      if (data.success && data.orders) {
        setOrders(data.orders);
        if (data.orders.length === 0) {
          setError('No orders found for this user (userId: ' + userId + ')');
        }
      } else {
        setError(data.error || 'Failed to fetch orders. Response: ' + JSON.stringify(data));
      }
    } catch (err) {
      setError('Error loading orders: ' + err);
      console.error('Fetch orders error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleViewReceipt = (order: Order) => {
    setSelectedOrder(order);
    setShowReceipt(true);
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

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'completed':
      case 'paid':
        return 'text-green-600';
      case 'pending':
      case 'processing':
        return 'text-orange-600';
      case 'cancelled':
      case 'failed':
        return 'text-red-600';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <main className="min-h-screen bg-[#F9FAFB] p-4 md:p-12 font-sans text-[#111827]">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Order History Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Receipt className="w-6 h-6 text-gray-800" />
            <h1 className="text-2xl font-bold">Order History Receipts</h1>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
              </div>
            ) : error ? (
              <div className="py-12 text-center text-red-500">{error}</div>
            ) : orders.length === 0 ? (
              <div className="py-12 text-center text-gray-400">No orders found</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="text-[12px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                      <th className="px-8 py-5">Company Name</th>
                      <th className="px-6 py-5">Order No.</th>
                      <th className="px-6 py-5">Order Type</th>
                      <th className="px-6 py-5">Amount</th>
                      <th className="px-6 py-5 text-center">Receipt</th>
                      <th className="px-6 py-5">Order Date</th>
                      <th className="px-6 py-5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {orders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-8 py-6 font-bold text-[16px]">{order.company || 'N/A'}</td>
                        <td className="px-6 py-6 text-sm text-gray-500 font-medium">{order.id}</td>
                        <td className="px-6 py-6 text-sm text-gray-600 font-medium text-xs">{order.type} ({order.state})</td>
                        <td className="px-6 py-6 font-bold text-[16px]">${order.amount}</td>
                        <td className="px-6 py-6 text-center">
                          <button 
                            onClick={() => handleViewReceipt(order)}
                            className="p-2 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                          >
                            <FileText className="w-5 h-5 text-red-500" />
                          </button>
                        </td>
                        <td className="px-6 py-6 text-sm text-gray-600 font-medium">{formatDate(order.date)}</td>
                        <td className="px-6 py-6">
                          <span className={`font-bold text-xs uppercase ${getStatusColor(order.status)}`}>{order.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>

        {/* Receipt Modal (Logo Removed) */}
        {showReceipt && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-200">
              <button 
                onClick={() => setShowReceipt(false)}
                className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-400" />
              </button>

              <div className="p-10 space-y-8">
                {/* Receipt Header - Logo Section Deleted */}
                <div className="flex justify-between items-center border-b border-gray-50 pb-6">
                  <h2 className="text-4xl font-bold text-gray-900">Receipt</h2>
                </div>

{/* Address Info */}
                <div className="flex justify-between text-sm leading-relaxed pt-2">
                  <div className="space-y-1">
                    <p className="font-bold text-gray-900 uppercase">{selectedOrder?.company || 'N/A'}</p>
                    <p className="text-gray-500">{selectedOrder?.customer || 'N/A'}</p>
                    <p className="text-gray-500">{selectedOrder?.state || 'N/A'}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="text-gray-400 font-medium">17350 State Highway 249,</p>
                    <p className="text-gray-400 font-medium">Suite 220, Houston TX, 77064 US</p>
                    <div className="pt-4">
                      <p className="text-gray-900 font-bold"><span className="text-gray-400 font-medium">Invoice Date:</span> {selectedOrder ? formatDate(selectedOrder.date) : 'N/A'}</p>
                      <p className="text-gray-900 font-bold"><span className="text-gray-400 font-medium">Order Number:</span> {selectedOrder?.id || 'N/A'}</p>
                    </div>
                  </div>
                </div>

                {/* Package Items */}
                <div className="border-t border-gray-100 pt-6">
                  <div className="flex justify-between mb-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    <span>Package Items</span>
                    <span>Total Price</span>
                  </div>
                  <div className="space-y-4">
                    <ReceiptRow label={selectedOrder?.type || 'Service'} hasCheck />
                    <ReceiptRow label={`${selectedOrder?.state || 'N/A'} State Filing Fee`} price={`$${selectedOrder?.amount || 0}`} />
                    <ReceiptRow label="Domain Name & Business Email (1st Year FREE)" hasCheck />
                    <ReceiptRow label="Electronic Delivery" hasCheck />
                    <ReceiptRow label="Lifetime company Alerts" hasCheck />
                  </div>
                </div>

                {/* Total & Action */}
                <div className="flex flex-col items-end gap-6 pt-6 border-t border-gray-100">
                  <p className="text-xl font-bold text-gray-900">Total: <span className="text-2xl font-black ml-2">${selectedOrder?.amount || 0}</span></p>
                  <button onClick={() => window.print()} className="bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-orange-200 transition-all active:scale-95">
                    Print Receipt
                  </button>

                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

function ReceiptRow({ label, price, hasCheck }: { label: string, price?: string, hasCheck?: boolean }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
      <span className="text-[14px] text-gray-500 font-medium">{label}</span>
      {hasCheck ? (
        <CheckCircle2 className="w-5 h-5 text-orange-500" />
      ) : (
        <span className="text-[14px] font-bold text-gray-400">{price}</span>
      )}
    </div>
  );
}