"use client";

import { ChevronDown, Calendar, ChevronUp } from "lucide-react";
import { useState } from "react";
import DetailItem from "./DetailItem";

const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";

export default function ActiveTaskCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex cursor-pointer items-center justify-between p-8 transition-colors hover:bg-cyan-50"
      >
        <div className="flex items-center gap-5">
          <div className={`${LOGO_GRADIENT} flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm`}>
            <Calendar className="h-7 w-7 text-white" />
          </div>

          <div>
            <h3 className="text-lg font-bold tracking-tight text-slate-900">
              Missouri: Annual Report
            </h3>

            <p className="mt-1 text-sm font-medium text-slate-500">
              Frequency:
              <span className="ml-1 font-semibold text-slate-700">Annually</span>
            </p>
          </div>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-cyan-100 hover:text-cyan-600">
          {isExpanded ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </div>
      </div>

      {isExpanded && (
        <div className="ml-20 border-t border-slate-100 px-8 pb-10 pt-6">
          <ul className="space-y-4">
            <DetailItem label="Due Date" value="August 31st" />
            <DetailItem label="State Fee" value="$10" />
            <DetailItem label="Filing Fee" value="$99" />
          </ul>
        </div>
      )}
    </div>
  );
}
