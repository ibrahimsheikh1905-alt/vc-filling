"use client";

import React, { useState, useEffect } from "react";
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
    const jwtToken = localStorage.getItem("jwtToken");

    if (jwtToken) {
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
          return payload.id || payload.userId || null;
        }
      } catch (e) {
        console.error("[MailDocs] JWT decode error:", e);
      }
    }

    const localUserId = localStorage.getItem("userId");
    if (localUserId) return parseInt(localUserId);

    return null;
  };

  const fetchOrderData = async () => {
    try {
      setLoading(true);
      const userId = getUserId();

      if (!userId) {
        setError("Please login to view your orders.");
        setLoading(false);
        return;
      }

      const response = await fetch(`/api/orders?userId=${userId}`);
      const data = await response.json();

      if (data.success && data.orders && data.orders.length > 0) {
        setOrder(data.orders[0]);
      } else {
        setError("No orders found.");
      }
    } catch (err) {
      console.error("[MailDocs] Error fetching order:", err);
      setError("Failed to load order data.");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateStr || "N/A";
    }
  };

  const getStatusMessage = (status: string) => {
    const s = status?.toLowerCase();

    if (s === "pending" || s === "on hold") {
      return { title: "Hold", message: "Your order is currently on hold" };
    }

    if (s === "completed" || s === "paid") {
      return { title: "Completed", message: "Your order has been completed" };
    }

    if (s === "processing") {
      return { title: "Processing", message: "Your order is being processed" };
    }

    return { title: status, message: `Your order status: ${status}` };
  };

  const handleMailDocuments = () => {
    setShowConfirmation(true);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12 font-sans">
        <Loader2 className="h-8 w-8 animate-spin text-cyan-500" />
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="min-h-screen bg-slate-50 px-4 py-12 font-sans sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
            <p className="font-medium text-red-500">{error || "No order found."}</p>
          </div>
        </div>
      </div>
    );
  }

  const statusInfo = getStatusMessage(order.status);

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-12 font-sans sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header Section */}
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100">
            <Package className="h-6 w-6 text-cyan-600" strokeWidth={2.5} />
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-cyan-600">
              Incorp Bay Dashboard
            </p>
            <h1 className="mt-1 text-2xl font-bold uppercase tracking-tight text-slate-900">
              Order Status
            </h1>
          </div>
        </div>

        {/* Top Card */}
        <div className="mb-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row">
            <div className="w-full text-left lg:flex-1">
              <h2 className="mb-6 text-xl font-bold text-slate-900">
                {order.type} ({order.state})
              </h2>

              <div className="space-y-2 text-sm">
                <p className="font-medium text-slate-500">
                  Order Number:
                  <span className="ml-1 font-bold text-slate-900">{order.id}</span>
                </p>
                <p className="font-medium text-slate-500">
                  Date Ordered:
                  <span className="ml-1 font-bold text-slate-900">
                    {formatDate(order.date)}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col items-start lg:flex-1 lg:items-end">
              <div className="w-full max-w-md text-left lg:text-right">
                <p className="text-[13px] font-medium text-slate-500">
                  <span className="font-bold text-slate-900">{statusInfo.title}.</span>{" "}
                  {statusInfo.message}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mail Documents Option */}
        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <div className="flex w-full flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-5 md:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-50">
                <FileText className="h-8 w-8 text-cyan-600" strokeWidth={1.8} />
              </div>

              <div className="text-left">
                <h3 className="text-xl font-bold leading-tight text-slate-900">
                  Need a physical copy of your filed documents?
                </h3>
                <p className="mt-2 text-sm font-medium leading-6 text-slate-400">
                  We will deliver a digital version of your documents, but can also send a
                  copy via FedEx if needed.
                </p>
              </div>
            </div>

            <button
              onClick={handleMailDocuments}
              className="shrink-0 whitespace-nowrap rounded-2xl bg-[#06B6D4] px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-cyan-100 transition-all hover:bg-[#0891B2] active:scale-95"
            >
              Mail My Documents - $25
            </button>
          </div>
        </div>

        {/* Confirmation Modal */}
        {showConfirmation && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setShowConfirmation(false)}
            />

            <div className="relative w-full max-w-md animate-in zoom-in duration-300 rounded-[32px] bg-white p-10 shadow-2xl">
              <button
                onClick={() => setShowConfirmation(false)}
                className="absolute right-6 top-6 text-slate-400 transition hover:text-slate-600"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100">
                  <Check className="h-8 w-8 text-cyan-600" />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  Order Submitted!
                </h3>

                <p className="mb-6 font-medium leading-7 text-slate-500">
                  Your physical documents will be mailed to the address on file. You will
                  receive a tracking number via email.
                </p>

                <button
                  onClick={() => setShowConfirmation(false)}
                  className="rounded-2xl bg-[#06B6D4] px-8 py-3 font-bold text-white transition-all hover:bg-[#0891B2]"
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
