"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Clock, Eye, Loader2 } from "lucide-react";

const LOGO_GRADIENT_TEXT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent";
const LOGO_GRADIENT_SOFT =
  "bg-[linear-gradient(90deg,rgba(36,78,182,0.10)_0%,rgba(43,147,201,0.10)_50%,rgba(51,209,204,0.10)_100%)]";

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
        const jwtToken = localStorage.getItem("jwtToken");

        let userId = null;
        if (!jwtToken) {
          console.log("[MyCompany] ✗ No JWT token found");
          setError("Please login to view your companies");
          setLoading(false);
          return;
        }

        try {
          const parts = jwtToken.split(".");
          if (parts.length >= 2) {
            const base64Url = parts[1];
            const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
            const jsonPayload = decodeURIComponent(
              atob(base64)
                .split("")
                .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
                .join("")
            );
            const payload = JSON.parse(jsonPayload);
            userId = payload.id || payload.userId || null;
            console.log("[MyCompany] ✓ JWT decoded. userId:", userId, "email:", payload.email);
          }
        } catch (e) {
          console.error("[MyCompany] ✗ JWT decode error:", e);
        }

        console.log("[MyCompany] === FINAL userId:", userId);

        if (!userId) {
          console.log("[MyCompany] ✗ Could not extract userId from JWT");
          setError("Invalid session. Please login again.");
          setLoading(false);
          return;
        }

        const cleanId = Number(userId);
        const url = `/api/company-data?userId=${cleanId}`;
        console.log("[MyCompany] Fetching:", url);

        const res = await fetch(url);
        const data = await res.json();

        console.log("[MyCompany] API Response:", JSON.stringify(data).substring(0, 200));

        if (data.success && data.companies && data.companies.length > 0) {
          const transformedCompanies = data.companies.map((company: any, index: number) => ({
            name: company.name,
            state: company.state || "N/A",
            orderNo: company.id
              ? `#${company.id.toString().padStart(10, "0")}`
              : `#${index.toString().padStart(10, "0")}`,
            email: data.user?.email || "",
            status: company.status || "Pending",
          }));
          setCompanies(transformedCompanies);
        } else {
          setCompanies([]);
        }
      } catch (err) {
        console.error("[MyCompany] Error:", err);
        setError("Failed to load companies");
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  const getStatusStyle = (status: string) => {
    const statusLower = status?.toLowerCase();
    if (statusLower === "active" || statusLower === "completed" || statusLower === "paid") {
      return { badge: "bg-green-50 border-green-100", icon: "text-green-700", text: "text-green-700" };
    }
    return { badge: `${LOGO_GRADIENT_SOFT} border-[#2B93C9]/20`, icon: "text-[#2B93C9]", text: LOGO_GRADIENT_TEXT };
  };

  return (
    <div className="font-sans antialiased">
      {/* Header Section */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-left sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            My Company
          </h2>
          <p className="mt-1 text-[15px] font-medium text-slate-500">
            Manage your registered businesses
          </p>
        </div>
      </div>

      {/* Table Card */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-6 w-6 animate-spin text-cyan-500" />
          </div>
        ) : error ? (
          <div className="py-12 text-center text-red-500">{error}</div>
        ) : companies.length === 0 ? (
          <div className="py-12 text-center text-slate-400">
            No companies found. Start by placing an order to form your company.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-100">
              <thead className="bg-slate-50/50">
                <tr>
                  <th className="px-6 py-4 text-left text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    Company Name
                  </th>
                  <th className="hidden px-6 py-4 text-left text-[11px] font-bold uppercase tracking-widest text-slate-400 sm:table-cell">
                    State
                  </th>
                  <th className="hidden px-6 py-4 text-left text-[11px] font-bold uppercase tracking-widest text-slate-400 md:table-cell">
                    Order No.
                  </th>
                  <th className="hidden px-6 py-4 text-left text-[11px] font-bold uppercase tracking-widest text-slate-400 lg:table-cell">
                    Email Address
                  </th>
                  <th className="px-6 py-4 text-left text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    Status
                  </th>
                  <th className="px-6 py-4 text-right text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-50 bg-white">
                {companies.map((company, index) => {
                  const statusStyle = getStatusStyle(company.status);
                  return (
                  <tr key={index} className="group transition-colors hover:bg-cyan-50/50">
                    <td className="whitespace-nowrap px-6 py-5 text-sm font-semibold text-slate-900">
                      {company.name}
                    </td>
                    <td className="hidden whitespace-nowrap px-6 py-5 text-sm font-medium text-slate-600 sm:table-cell">
                      {company.state}
                    </td>
                    <td className="hidden whitespace-nowrap px-6 py-5 font-mono text-sm text-slate-500 md:table-cell">
                      {company.orderNo}
                    </td>
                    <td className="hidden whitespace-nowrap px-6 py-5 text-sm font-medium text-slate-600 lg:table-cell">
                      {company.email}
                    </td>
                    <td className="whitespace-nowrap px-6 py-5">
                      <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[12px] font-bold ${statusStyle.badge}`}>
                        <Clock className={`h-3.5 w-3.5 ${statusStyle.icon}`} />
                        <span className={statusStyle.text}>{company.status}</span>
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-5 text-right text-sm">
                      <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-[13px] font-bold text-slate-700 shadow-sm transition-all hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-600">
                        <Eye className="h-4 w-4 transition-transform group-hover:scale-110" />
                        <Link href="/dashboard/tasks" className="no-underline">
                          View Company
                        </Link>
                      </button>
                    </td>
                  </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
