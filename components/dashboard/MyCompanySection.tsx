"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Clock, Eye, Loader2 } from "lucide-react";

interface Company {
  name: string;
  state: string;
  orderNo: string;
  email: string;
  status: string;
}

export default function MyCompanySection() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const jwtToken = localStorage.getItem('jwtToken');
        
        // STRICT: Only use JWT - never fallback to localStorage userId
        let userId = null;
        if (!jwtToken) {
          console.log('[MyCompany] ✗ No JWT token found');
          setError('Please login to view your companies');
          setLoading(false);
          return;
        }
        
        // Manual JWT decode - works without jwt library
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
            userId = payload.id || payload.userId || null;
            console.log('[MyCompany] ✓ JWT decoded. userId:', userId, 'email:', payload.email);
          }
        } catch (e) {
          console.error('[MyCompany] ✗ JWT decode error:', e);
        }
        
        console.log('[MyCompany] === FINAL userId:', userId);
        
        if (!userId) {
          console.log('[MyCompany] ✗ Could not extract userId from JWT');
          setError('Invalid session. Please login again.');
          setLoading(false);
          return;
        }

        // Build URL with userId - use clean number
        const cleanId = Number(userId);
        const url = `/api/company-data?userId=${cleanId}`;
        console.log('[MyCompany] Fetching:', url);
        
        const res = await fetch(url);
        const data = await res.json();
        
        console.log('[MyCompany] API Response:', JSON.stringify(data).substring(0, 200));

        if (data.success && data.companies && data.companies.length > 0) {
          const transformedCompanies = data.companies.map((company: any, index: number) => ({
            name: company.name,
            state: company.state || 'N/A',
            orderNo: company.id ? `#${company.id.toString().padStart(10, '0')}` : `#${index.toString().padStart(10, '0')}`,
            email: data.user?.email || '',
            status: company.status || 'Pending'
          }));
          setCompanies(transformedCompanies);
        } else {
          setCompanies([]);
        }
      } catch (err) {
        console.error('[MyCompany] Error:', err);
        setError('Failed to load companies');
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  const getStatusColor = (status: string) => {
    const statusLower = status?.toLowerCase();
    if (statusLower === 'active' || statusLower === 'completed' || statusLower === 'paid') {
      return 'bg-green-50 text-green-700 border-green-100';
    }
    return 'bg-orange-50 text-orange-700 border-orange-100';
  };

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
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-6 h-6 animate-spin text-orange-500" />
          </div>
        ) : error ? (
          <div className="py-12 text-center text-red-500">{error}</div>
        ) : companies.length === 0 ? (
          <div className="py-12 text-center text-gray-400">
            No companies found. Start by placing an order to form your company.
          </div>
        ) : (
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
                      <span className={`inline-flex items-center gap-1.5 text-[12px] font-bold px-3 py-1 rounded-full border ${getStatusColor(company.status)}`}>
                        <Clock className="w-3.5 h-3.5" />
                        {company.status}
                      </span>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap text-right text-sm">
                      <button className="inline-flex items-center gap-2 text-gray-700 hover:text-orange-600 bg-white hover:bg-orange-50 px-4 py-2 rounded-xl border border-gray-200 hover:border-orange-200 transition-all font-bold text-[13px] shadow-sm">
                        <Eye className="w-4 h-4 transition-transform group-hover:scale-110" />
                        <Link href="/dashboard/tasks" className="no-underline">
                          View Company
                        </Link>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
