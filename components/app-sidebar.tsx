"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

// Services Links
const navItems = [
  { name: "Form a C Corporation", href: "/form-c-corporation" },
  { name: "Form an LLC", href: "/form-a-llc" },
  { name: "Form an S Corporation", href: "/form-s-corporation" },
  { name: "Form a Nonprofit", href: "/start-a-nonprofit" },
  { name: "Amendment", href: "/amendment" },
  { name: "Registered Agent", href: "/registered-agent" },
  { name: "Virtual Address", href: "/virtual-address" },
  { name: "Certificate of Good Standing", href: "/cert-good-standing" },
  { name: "Fictitious Business Name", href: "/fictitious-business-name" },
  { name: "Foreign Qualification", href: "/foreign-qualification" },
  { name: "Change Agent", href: "/change-agent" },
  { name: "Business License", href: "/business-license" },
  { name: "Annual Report", href: "/annual-report" },
  { name: "Tax Consultation", href: "/tax-consultation" },
  { name: "Trademark", href: "/trademark" },
  { name: "Kit Info", href: "/kit-info" },
  { name: "Dissolution", href: "/dissolution" },
  { name: "Reinstatement", href: "/reinstatement" },
  { name: "EIN Form", href: "/ein-form" },
];

// Resources Centre Links
const navTwo = [
  { name: "How to Become an Entrepreneur", href: "/testing" },
  { name: "business structure", href: "/business-structure" },
  { name: "name generator", href: "/name-generator" },
  { name: "name search", href: "/name-search" },
  {
    name: "corporation state information",
    href: "/corporation-state-information",
  },
  { name: "state info", href: "/state-info" },
  { name: "form 2553", href: "/form-2553" },
  { name: "what makes us different", href: "/makes-dif" },
  { name: "bookkeeping consultation", href: "/book-consult" },
  { name: "article", href: "/article" },
  { name: "BOI report", href: "/boi-repo" },
];

export default function AppSidebar() {
  const { isOpen, closeSidebar } = useSidebar();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
    setResourcesOpen(false);
  };

  const toggleResources = () => {
    setResourcesOpen(!resourcesOpen);
    setServicesOpen(false);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={clsx(
          "fixed inset-0 z-40 bg-black/40 transition-opacity lg:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <aside
        className={clsx(
          "fixed right-0 top-0 z-50 h-full w-64 transform transition-transform duration-300 shadow-lg bg-white",
          isOpen ? "translate-x-0" : "translate-x-full",
          "lg:hidden"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-white">
          <Link href="/" className="block sm:hidden">
            <Image
              src="/logo.png"
              width={120}
              height={30}
              alt="VC Filling Logo"
              className="object-contain"
            />
          </Link>
          <button onClick={closeSidebar} className="text-black">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="overflow-y-auto h-[calc(100vh-64px)] p-4 space-y-1 pb-24 bg-white">
          {/* Services */}
          <button
            onClick={toggleServices}
            className="flex justify-between items-center w-full px-4 py-3 rounded text-black border-b border-gray-200 hover:bg-gray-100 transition"
          >
            <span>Services</span>
            {servicesOpen ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {servicesOpen && (
            <>
              <div className="pl-6">
                {navItems.slice(0, 4).map((item, index) => (
                  <Link
                    key={`form-${index}`}
                    href={item.href}
                    onClick={closeSidebar}
                    className="block px-3 py-2 text-sm text-gray-700 rounded hover:bg-gray-100 transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="my-2 pl-6">
                <hr className="border-gray-300" />
              </div>
              <div className="pl-6">
                {navItems.slice(4).map((item, index) => (
                  <Link
                    key={`other-${index}`}
                    href={item.href}
                    onClick={closeSidebar}
                    className="block px-3 py-2 text-sm text-gray-700 rounded hover:bg-gray-100 transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </>
          )}

          {/* Resources Centre */}
          <button
            onClick={toggleResources}
            className="flex justify-between items-center w-full px-4 py-3 rounded text-black border-b border-gray-200 hover:bg-gray-100 transition"
          >
            <span>Resources Centre</span>
            {resourcesOpen ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {resourcesOpen && (
            <div className="pl-6">
              {navTwo.map((item, index) => (
                <Link
                  key={`resource-${index}`}
                  href={item.href}
                  onClick={closeSidebar}
                  className="block px-3 py-2 text-sm text-gray-700 rounded hover:bg-gray-100 transition"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}

          {/* How it Works */}
          <Link
            href="/makes-dif"
            onClick={closeSidebar}
            className="block w-full px-4 py-3 text-black border-b border-gray-200 hover:bg-gray-100 transition"
          >
            How it Works
          </Link>
          <Link
            href="/about-us"
            onClick={closeSidebar}
            className="block w-full px-4 py-3 text-black border-b border-gray-200 hover:bg-gray-100 transition"
          >
            About Us
          </Link>
        </nav>
      </aside>
    </>
  );
}
