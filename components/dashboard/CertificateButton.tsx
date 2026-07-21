"use client";

import React from "react";

const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";

export default function CertificateButton({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${LOGO_GRADIENT} group relative overflow-hidden rounded-full px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-[1.03] hover:brightness-110 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 ${className}`}
    >
      {/* Top Gloss */}
      <span className="absolute inset-x-0 top-0 h-1/2 rounded-full bg-gradient-to-b from-white/20 to-transparent" />

      {/* Animated Light */}
      <span className="absolute -left-16 top-0 h-full w-10 -skew-x-12 bg-white/20 blur-sm transition-all duration-700 group-hover:left-[120%]" />

      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}

