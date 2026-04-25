"use client";

import { History } from 'lucide-react';
import Link from 'next/link';

export default function FilingHistory() {
  return (
    <div className="bg-white shadow-sm rounded-3xl border border-gray-200 p-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
            <History className="w-6 h-6 text-orange-500" />
          </div>
          <div>
            <p className="text-lg font-bold text-gray-900">Filing History</p>
            <p className="text-gray-600">
              To see the documents you have already filed, visit your Order History
            </p>
          </div>
        </div>
        
        <Link
          href="/dashboard/orders"
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 whitespace-nowrap text-lg"
        >
          Go to Order History
        </Link>
      </div>
    </div>
  );
}

