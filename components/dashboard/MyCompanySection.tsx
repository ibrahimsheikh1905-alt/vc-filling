"use client";

import React from "react";
import { Clock, Eye } from "lucide-react";

const companies = [
  {
    name: "SOLVEXNEST INC.",
    state: "MO",
    orderNo: "#0123456789",
    email: "contact@solvexnest.com",
    status: "Pending"
  }
];

export default function MyCompanySection() {
  return (
    <div className="font-sans antialiased">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-left sm:justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">My Company</h2>
          <p className="text-[15px] text-gray-500 font-medium mt-1">Manage your registered businesses</p>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100">
            <thead className="bg-gray-50/50">
              <tr>
                <th className="px-6 py-4 text-left text-[11px] font-bold text-gray-400 uppercase tracking-widest">Company Name</th>
                <th className="px-6 py-4 text-left text-[11px] font-bold text-gray-400 uppercase tracking-widest hidden sm:table-cell">State</th>
                <th className="px-6 py-4 text-left text-[11px] font-bold text-gray-400 uppercase tracking-widest hidden md:table-cell">Order No.</th>
                <th className="px-6 py-4 text-left text-[11px] font-bold text-gray-400 uppercase tracking-widest hidden lg:table-cell">Email Address</th>
                <th className="px-6 py-4 text-left text-[11px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-right text-[11px] font-bold text-gray-400 uppercase tracking-widest">Action</th>
              </tr>
            </thead>
            
            <tbody className="bg-white divide-y divide-gray-50">
              {companies.map((company, index) => (
                <tr key={index} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-6 py-5 whitespace-nowrap text-sm font-semibold text-gray-900">
                    {company.name}
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-600 font-medium hidden sm:table-cell">
                    {company.state}
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap text-sm font-mono text-gray-500 hidden md:table-cell">
                    {company.orderNo}
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-600 font-medium hidden lg:table-cell">
                    {company.email}
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-700 text-[12px] font-bold px-3 py-1 rounded-full border border-orange-100">
                      <Clock className="w-3.5 h-3.5" />
                      {company.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap text-right text-sm">
                    <button className="inline-flex items-center gap-2 text-gray-700 hover:text-orange-600 bg-white hover:bg-orange-50 px-4 py-2 rounded-xl border border-gray-200 hover:border-orange-200 transition-all font-bold text-[13px] shadow-sm">
                      <Eye className="w-4 h-4 transition-transform group-hover:scale-110" />
                      View Company
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}