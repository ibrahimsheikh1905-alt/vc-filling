"use client";

import { History } from "lucide-react";
import Link from "next/link";

export default function FilingHistory() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100">
            <History className="h-6 w-6 text-cyan-500" />
          </div>

          <div>
            <p className="text-lg font-bold text-slate-900">
              Filing History
            </p>
            <p className="text-slate-600">
              To see the documents you have already filed, visit your Order History
            </p>
          </div>
        </div>

        <Link
          href="/dashboard/orders"
          className="flex items-center gap-2 whitespace-nowrap rounded-2xl bg-[#06B6D4] px-8 py-3 text-lg font-bold text-white shadow-lg shadow-cyan-100 transition-all hover:bg-[#0891B2] hover:shadow-xl"
        >
          Go to Order History
        </Link>
      </div>
    </div>
  );
}
