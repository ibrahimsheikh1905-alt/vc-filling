 "use client";

import React from 'react';
import { 
  FileText, 
  Receipt 
} from 'lucide-react';

const OrderHistory = () => {
  return (
    <div className="flex-1 p-8 overflow-y-auto bg-[#F9FAFB] font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Order History Receipts Table */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100">
            </div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">Order History Receipts</h1>
          </div>

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
                  <tr className="hover:bg-gray-50/50 transition-colors group">
                    <td className="px-8 py-8 font-black text-xl text-[#111827]">SOLVEXNEST INC.</td>
                    <td className="px-6 py-8 text-[16px] font-bold text-gray-500">226041533405</td>
                    <td className="px-6 py-8 text-[16px] font-bold text-gray-600">NONPROFIT FILING (MO)</td>
                    <td className="px-6 py-8 text-xl font-black text-[#111827]">$26.00</td>
                    <td className="px-6 py-8 text-center">
                      <a href="/dashboard/226041533405" className="p-3 bg-red-50 rounded-xl hover:bg-red-100 transition-colors inline-block">
                        <FileText className="w-6 h-6 text-red-500" />
                      </a>
                    </td>
                    <td className="px-6 py-8 text-[16px] font-bold text-gray-600">Apr 15, 2026</td>
                    <td className="px-6 py-8">
                      <span className="inline-flex px-5 py-2 rounded-full text-sm font-black bg-gray-100 text-gray-500 uppercase tracking-wide">
                        Hold
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OrderHistory;

