"use client";

import React, { useState } from 'react';
import { 
  FileText, 
  Receipt, 
  CheckCircle2, 
  X
} from "lucide-react";

export default function BusinessDashboard() {
  const [showReceipt, setShowReceipt] = useState(false);

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
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-8 py-6 font-bold text-[16px]">SOLVEXNEST INC.</td>
                    <td className="px-6 py-6 text-sm text-gray-500 font-medium">226041533405</td>
                    <td className="px-6 py-6 text-sm text-gray-600 font-medium text-xs">NONPROFIT FILING (MO)</td>
                    <td className="px-6 py-6 font-bold text-[16px]">$26.00</td>
                    <td className="px-6 py-6 text-center">
                      <button 
                        onClick={() => setShowReceipt(true)}
                        className="p-2 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                      >
                        <FileText className="w-5 h-5 text-red-500" />
                      </button>
                    </td>
                    <td className="px-6 py-6 text-sm text-gray-600 font-medium">Apr 15, 2026</td>
                    <td className="px-6 py-6">
                      <span className="text-gray-400 font-bold text-xs uppercase">Hold</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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
                    <p className="font-bold text-gray-900 uppercase">SOLVEXNEST INC.</p>
                    <p className="text-gray-500">312 Sw Greenwich Dr</p>
                    <p className="text-gray-500">Lees Summit MO 64082 US</p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="text-gray-400 font-medium">17350 State Highway 249,</p>
                    <p className="text-gray-400 font-medium">Suite 220, Houston TX, 77064 US</p>
                    <div className="pt-4">
                      <p className="text-gray-900 font-bold"><span className="text-gray-400 font-medium">Invoice Date:</span> 04/15/2026</p>
                      <p className="text-gray-900 font-bold"><span className="text-gray-400 font-medium">Order Number:</span> 226041533405</p>
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
                    <ReceiptRow label="Nonprofit Basic Package" hasCheck />
                    <ReceiptRow label="MO State Filing Fee" price="$26.00" />
                    <ReceiptRow label="Domain Name & Business Email (1st Year FREE)" hasCheck />
                    <ReceiptRow label="Electronic Delivery" hasCheck />
                    <ReceiptRow label="Lifetime company Alerts" hasCheck />
                  </div>
                </div>

                {/* Total & Action */}
                <div className="flex flex-col items-end gap-6 pt-6 border-t border-gray-100">
                  <p className="text-xl font-bold text-gray-900">Total: <span className="text-2xl font-black ml-2">$26</span></p>
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