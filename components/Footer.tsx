import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="grid md:grid-cols-5 gap-3 bg-[#1c1b18] text-white py-10 px-5">
        <div className="md:col-span-2 md:pl-5">
          <p className="pb-3 font-bold text-3xl uppercase">1 (888) 462-3454</p>
          <p className="pb-5 text-gray-500">
            Phone support is available Monday - Friday from 9 a.m. to 6 p.m. CST
          </p>
          <Image
            src="/logowhite1643425818.webp"
            alt="logo"
            width={"200"}
            height={"100"}
          />
          <p className="py-5 text-xl">Excellent 4.8 out of 5 TrustPilot</p>
          <p>
            VC filing is NOT a law firm and does NOT provide legal advice. Use
            of our products and services is governed by our{" "}
            <span className="text-primary">Terms of Service</span> and{" "}
            <span className="text-primary">Privacy Policy</span>. The
            information you provide to vcfiling is NOT protected by
            attorney-client privilege.
          </p>
        </div>

        <div className="md:col-span-1 gap-5">
          <div>
            <p className="pb-3 font-bold text-xl uppercase pt-6">
              Entity Types
            </p>
            <ul>
              <Link href={"/form-a-llc"}>
                <li className="text-gray-500">LLC</li>
              </Link>
              <Link href={"/form-s-corporation"}>
                <li className="text-gray-500">S Corporation</li>
              </Link>
              <Link href={"/form-c-corporation"}>
                <li className="text-gray-500">C Corporation</li>
              </Link>
              <Link href={"/start-a-nonprofit"}>
                {" "}
                <li className="text-gray-500">Non-Profit</li>
              </Link>
            </ul>
          </div>
          <div>
            <p className="pb-3 font-bold text-xl uppercase pt-6">Resources</p>
            <ul>
              <li className="text-gray-500">How to became an entrepreneur</li>
              <li className="text-gray-500">Business structure</li>
              <li className="text-gray-500">Name generator</li>
              <li className="text-gray-500">Name Search</li>
            </ul>
          </div>
        </div>
        <div className="md:col-span-1 gap-5">
          <div>
            <p className="pb-3 font-bold text-xl uppercase pt-6">Services</p>
            <ul>
              <li className="text-gray-500">Amendment</li>
              <li className="text-gray-500">Registered Agent </li>
              <li className="text-gray-500">Virtual address </li>
              <li className="text-gray-500">Certificate of good standing</li>
            </ul>
          </div>
        </div>
        <div className="md:col-span-1 gap-5">
          <div>
            <p className="pb-3 font-bold text-xl uppercase pt-6">Quick Links</p>
            <ul>
              <Link href={"/"}>
                <li className="text-gray-500">Home</li>
              </Link>
              <li className="text-gray-500">Review Entity Types</li>
              <li className="text-gray-500">Manage Your Company</li>
              <li className="text-gray-500">Check Order Status</li>
            </ul>
          </div>
          <div>
            <p className="pb-3 font-bold text-xl uppercase pt-6">Support</p>
            <ul>
              <li className="text-gray-500">Contact</li>
              <li className="text-gray-500">Affiliates</li>
              <li className="text-gray-500">Sitemap</li>
              <li className="text-gray-500">Cancellation Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
