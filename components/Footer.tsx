import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Phone,
  Mail,
  Clock,
  Heart,
  Lock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  return (
    <div>
      {/* Main Footer */}
      <div className="relative bg-[#f4f6fb] border-t border-gray-200/70 shadow-[0_-4px_20px_rgba(11,63,174,0.05)]">
        {/* Thin accent line on top */}
        <div className="h-1 w-full bg-gradient-to-r from-[#0b3fae] via-[#1155d6] to-[#1fb6c9]" />

        <div className="grid md:grid-cols-6 gap-10 md:gap-8 text-gray-700 py-14 px-5 md:px-16">
          {/* Brand column */}
          <div className="md:col-span-2 md:pr-6 md:border-r md:border-gray-200">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Incorp Bay logo"
                width={180}
                height={45}
              />
            </div>
            <p className="text-gray-500 max-w-xs mb-3 leading-relaxed font-semibold">
              Form Your LLC Online – Fast, Easy & Affordable
            </p>
            <p className="text-gray-400 max-w-xs mb-5 leading-relaxed text-sm">
              We simplify LLC formation with expert filing, ongoing support, and a hassle-free process so you can focus on growing your business.
            </p>

            <div className="mt-6">
              <p className="font-bold text-sm uppercase tracking-wider mb-3 text-gray-900">
                Follow Us
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="bg-white shadow-sm border border-gray-200 hover:bg-[#0b3fae] hover:border-[#0b3fae] hover:text-white text-[#0b3fae] rounded-full p-2.5 cursor-pointer transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="bg-white shadow-sm border border-gray-200 hover:bg-[#0b3fae] hover:border-[#0b3fae] hover:text-white text-[#0b3fae] rounded-full p-2.5 cursor-pointer transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="bg-white shadow-sm border border-gray-200 hover:bg-[#0b3fae] hover:border-[#0b3fae] hover:text-white text-[#0b3fae] rounded-full p-2.5 cursor-pointer transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="bg-white shadow-sm border border-gray-200 hover:bg-[#0b3fae] hover:border-[#0b3fae] hover:text-white text-[#0b3fae] rounded-full p-2.5 cursor-pointer transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Support */}
          <div>
            <p className="font-bold text-sm uppercase tracking-wider mb-5 text-gray-900 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-6 after:h-[3px] after:bg-[#0b3fae] after:rounded-full">
              Support
            </p>
            <ul className="space-y-3 text-gray-500 mt-3">
              <li>
                <Link
                  href="/help-center"
                  className="hover:text-[#0b3fae] transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#0b3fae] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/live-chat"
                  className="hover:text-[#0b3fae] transition-colors"
                >
                  Live Chat
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="hover:text-[#0b3fae] transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/support-hours"
                  className="hover:text-[#0b3fae] transition-colors"
                >
                  Support Hours
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="font-bold text-sm uppercase tracking-wider mb-5 text-gray-900 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-6 after:h-[3px] after:bg-[#0b3fae] after:rounded-full">
              Resources
            </p>
            <ul className="space-y-3 text-gray-500 mt-3">
              <li>
                <Link
                  href="/business-structure"
                  className="hover:text-[#0b3fae] transition-colors"
                >
                  Business Structure
                </Link>
              </li>
              <li>
                <Link
                  href="/name-generator"
                  className="hover:text-[#0b3fae] transition-colors"
                >
                  Name Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/name-search"
                  className="hover:text-[#0b3fae] transition-colors"
                >
                  Name Search
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="hover:text-[#0b3fae] transition-colors"
                >
                  Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/system-status"
                  className="hover:text-[#0b3fae] transition-colors"
                >
                  System Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="font-bold text-sm uppercase tracking-wider mb-5 text-gray-900 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-6 after:h-[3px] after:bg-[#0b3fae] after:rounded-full">
              Company
            </p>
            <ul className="space-y-3 text-gray-500 mt-3">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#0b3fae] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-[#0b3fae] transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="hover:text-[#0b3fae] transition-colors"
                >
                  News & Updates
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-[#0b3fae] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="hover:text-[#0b3fae] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact + Follow */}
          <div className="md:pl-2">
            <p className="font-bold text-sm uppercase tracking-wider mb-5 text-gray-900 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-6 after:h-[3px] after:bg-[#0b3fae] after:rounded-full">
              Contact Us
            </p>
            <ul className="space-y-3 text-gray-500 mt-3 mb-6">
              <li className="flex items-center gap-2">
                <span className="bg-[#0b3fae]/10 rounded-full p-1.5 shrink-0">
                  <Phone className="w-3.5 h-3.5 text-[#0b3fae]" />
                </span>
                <span>1 (888) 462-3454</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-[#0b3fae]/10 rounded-full p-1.5 shrink-0">
                  <Mail className="w-3.5 h-3.5 text-[#0b3fae]" />
                </span>
                <span>support@incorpbay.com</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-[#0b3fae]/10 rounded-full p-1.5 shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-[#0b3fae]" />
                </span>
                <span>
                  Mon – Fri: 9AM – 6PM (CST)
                  <br />
                  Sat – Sun: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="bg-[#e8ecf5] border-t border-gray-200 text-gray-500 text-sm px-5 md:px-16 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
            <p>
              &copy; {new Date().getFullYear()} Incorp Bay. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;