"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavigationWrapper from "@/components/NavigationWrapper";

const LOGO_GRADIENT =
  "linear-gradient(90deg,#244EB6 0%,#2B93C9 50%,#33D1CC 100%)";

const gradientText = {
  backgroundImage: LOGO_GRADIENT,
  WebkitBackgroundClip: "text" as const,
  backgroundClip: "text" as const,
  WebkitTextFillColor: "transparent",
  color: "transparent",
};

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#2B93C9" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const ChevronDown = ({ open }: { open: boolean }) => (
  <svg
    width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2"
    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
  >
    <path d="M6 9l6 6 6-6"/>
  </svg>
);

const Accordion = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ border: "1px solid #e5e7eb", borderRadius: 10, marginBottom: 10, overflow: "hidden" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "14px 18px", background: "white", border: "none", cursor: "pointer",
          fontSize: 15, fontWeight: 400, color: "#1E293B", textAlign: "left"
        }}
      >
        {title}
        <ChevronDown open={open} />
      </button>
      {open && (
        <div style={{ padding: "0 18px 16px", fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>
          {children}
        </div>
      )}
    </div>
  );
};


const tocItems = [
  { id: "irs-close", title: "Do I Need to Notify the IRS If I Close My Business?" },
  { id: "dissolve-cost", title: "How Much Does It Cost to Dissolve an LLC?" },
  { id: "additional-considerations", title: "Additional Considerations for LLC Dissolution" },
  { id: "dissolution-faq", title: "Frequently Asked Questions About Dissolving an LLC" },
  { id: "dissolution-conclusion", title: "Conclusion: Properly Dissolving an LLC" },
];

const ChevronRightIcon = ({ active }: { active: boolean }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      flexShrink: 0,
      marginTop: 2,
      color: active ? "#2B93C9" : "#CBD5E1",
    }}
  >
    <path
      d="M9 18l6-6-6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TableOfContents = ({
  activeSection,
  onItemClick,
}: {
  activeSection: string;
  onItemClick: (id: string) => void;
}) => (
  <aside style={{ flex: "0 0 260px", position: "sticky", top: 96, alignSelf: "flex-start" }}>
    <div
      style={{
        borderRadius: 24,
        background: "#ffffff",
        padding: 16,
        boxShadow: "0 1px 2px rgba(15, 23, 42, 0.06)",
        border: "1px solid #F1F5F9",
      }}
    >
      <p
        style={{
          margin: "0 0 16px",
          fontSize: 16,
          lineHeight: 1.2,
          fontWeight: 700,
          color: "#1a1a1a",
        }}
      >
        Table of Contents
      </p>

      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 4 }}>
        {tocItems.map((item) => {
          const active = activeSection === item.id;
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onItemClick(item.id)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 8,
                  borderRadius: 12,
                  padding: "12px 12px",
                  border: active ? "1px solid #E2E8F0" : "1px solid transparent",
                  background: "#ffffff",
                  color: active ? "#2B93C9" : "#94A3B8",
                  cursor: "pointer",
                  textAlign: "left",
                  fontSize: 14,
                  fontWeight: active ? 700 : 500,
                  lineHeight: 1.35,
                  boxShadow: active ? "0 1px 2px rgba(15, 23, 42, 0.06)" : "none",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  if (!active) e.currentTarget.style.color = "#475569";
                }}
                onMouseLeave={(e) => {
                  if (!active) e.currentTarget.style.color = "#94A3B8";
                }}
              >
                <ChevronRightIcon active={active} />
                <span style={{ lineHeight: 1.35 }}>{item.title}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  </aside>
);

const PhoneMockup = () => (
  <div style={{ position: "relative", width: 260 }}>
    <Image
      src="/dissolution/Dissolution-page-on-smart-phone.webp"
      alt="Company dissolution status on a smartphone"
      width={1216}
      height={1294}
      className="w-full h-auto"
      priority
    />
  </div>
);

export default function IncorpBayDissolutionPage() {
  const [activeSection, setActiveSection] = useState(tocItems[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) setActiveSection(visibleEntry.target.id);
      },
      { rootMargin: "-120px 0px -55% 0px", threshold: 0.1 }
    );

    tocItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleTocClick = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <NavigationWrapper>
    <main style={{ color: "#1E293B", background: "white" }}>

      {/* Hero Section */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 32px", display: "flex", alignItems: "center", gap: 60, flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 400px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid #e5e7eb",
            borderRadius: 50, padding: "6px 14px", fontSize: 13, fontWeight: 400, marginBottom: 24
          }}>
            Excellent 4.7 out of 5 <StarIcon /> Trustpilot
          </div>
          <h1 style={{ fontSize: 52, fontWeight: 700, lineHeight: 1.1, marginBottom: 20, color: "#1E293B" }}>
            How to Dissolve an LLC
          </h1>
          <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.7, marginBottom: 32, maxWidth: 500 }}>
            Over the course of business operations, there occasionally comes a time when you need to consider closing your LLC. However, many entrepreneurs are unfamiliar with the process. This guide provides comprehensive information on how to dissolve an LLC, including the necessary steps, costs involved, and legal requirements. By following the proper procedures, you can ensure a smooth and compliant dissolution process.
          </p>
<div style={{ display: "flex", gap: 14 }}>
            <Link href="/dissolution/step-1" style={{
              background: LOGO_GRADIENT, color: "white", border: "none", borderRadius: 50,
              padding: "14px 28px", fontSize: 14, fontWeight: 700, cursor: "pointer", letterSpacing: 0.5, textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center"
            }}>ORDER NOW</Link>
            <button style={{
              background: "white", color: "#1E293B", border: "2px solid #e5e7eb", borderRadius: 50,
              padding: "14px 28px", fontSize: 14, fontWeight: 700, cursor: "pointer"
            }}>LEARN MORE</button>
          </div>
        </div>
        <div style={{ flex: "1 1 300px", display: "flex", justifyContent: "center" }}>
          <div style={{
            background: "#f3f4f6", borderRadius: 24, padding: 24, display: "flex", justifyContent: "center",
            alignItems: "center", minHeight: 380
          }}>
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div style={{ borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb", padding: "18px 32px", textAlign: "center", fontSize: 15, color: "#374151" }}>
        <span style={{ color: "#6b7280" }}>●</span>
        &nbsp; Bootstrapped, Founder Led, Independently Owned &nbsp;
        <span style={{ background: "#E0F2FE", color: "#2B93C9", borderRadius: 6, padding: "2px 10px", fontWeight: 700 }}>Since 2004</span>
        &nbsp; with &nbsp;
        <span style={{ background: "#E0F2FE", color: "#2B93C9", borderRadius: 6, padding: "2px 10px", fontWeight: 700 }}>Over 1,000,000 Entrepreneurs</span>
        &nbsp; Served!
        &nbsp; <span style={{ color: "#6b7280" }}>●</span>
      </div>

      {/* Startup Central Banner */}
      <section style={{ maxWidth: 1200, margin: "48px auto", padding: "0 32px" }}>
        <div style={{
          border: "1px solid #e5e7eb", borderRadius: 20, padding: "40px 48px",
          display: "flex", alignItems: "center", gap: 48, flexWrap: "wrap",
          background: "linear-gradient(135deg, #fff 60%, #F0F9FF 100%)"
        }}>
          <div style={{ flex: "1 1 300px" }}>
            <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 14 }}>Incorp Bay's<br />Startup Central</h2>
            <p style={{ color: "#6b7280", fontSize: 15, lineHeight: 1.6, marginBottom: 24 }}>
              The media center. Guts, grit, and a game plan for launching your business.
            </p>
<Link href="/startup-central" style={{
              background: LOGO_GRADIENT, color: "white", border: "none", borderRadius: 50,
              padding: "14px 28px", fontSize: 14, fontWeight: 700, cursor: "pointer", textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center"
            }}>VISIT INCORP BAY STARTUP CENTRAL</Link>
          </div>
          <div style={{ flex: "1 1 300px", display: "flex", justifyContent: "flex-end" }}>
            <div style={{ position: "relative", width: "100%", maxWidth: 360 }}>
              <Image
                src="/dissolution/Startup-central-ideas.webp"
                alt="Incorp Bay Startup Central articles"
                width={1426}
                height={1103}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction to Dissolving */}
      <section style={{ maxWidth: 1200, margin: "64px auto", padding: "0 32px" }}>
        <h2 style={{ fontSize: 44, fontWeight: 700, textAlign: "center", marginBottom: 48 }}>
          Introduction to Dissolving an LLC
        </h2>
        <div style={{ display: "flex", gap: 48, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 340px" }}>
            <div style={{ position: "relative", borderRadius: 20, overflow: "hidden" }}>
              <Image
                src="/dissolution/Dissolution-company-dissolved-two-phones.webp"
                alt="LLC dissolution tracked on a smartphone"
                width={1551}
                height={1014}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div style={{ flex: "1 1 340px", display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              {
                num: 1,
                title: "Hold a meeting with the Board of Directors",
                desc: "You can avoid future liabilities and ensure compliance with state laws by properly dissolving your LLC."
              },
              {
                num: 2,
                title: "Settle Financial Obligations",
                desc: "If you're ready to close your company, it is important to understand how to dissolve an LLC correctly to avoid legal complications and financial issues down the road."
              },
              {
                num: 3,
                title: "Dissolve the Company and Then Cancel Permits",
                desc: "The dissolution process includes first reaching an internal company agreement to pursue dissolution, filing your Articles of Dissolution with the state, and settling all financial obligations and accounting."
              }
            ].map((item) => (
              <div key={item.num} style={{ border: "1px solid #e5e7eb", borderRadius: 14, padding: "20px 22px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <span style={{
                    background: LOGO_GRADIENT, color: "white", width: 28, height: 28, borderRadius: 8,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 14, fontWeight: 700, flexShrink: 0
                  }}>{item.num}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>{item.title}</div>
                    <div style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dissolving vs Terminating */}
      <section style={{ maxWidth: 1200, margin: "64px auto", padding: "0 32px" }}>
        <p style={{ textAlign: "center", fontSize: 14, color: "#6b7280", marginBottom: 12 }}>
          We'll look at these steps in more detail, but first,{" "}
          <strong>let's address the difference between dissolving and terminating an LLC.</strong>
        </p>
        <h2 style={{ fontSize: 44, fontWeight: 700, textAlign: "center", marginBottom: 8 }}>
          Dissolving vs Terminating an LLC
        </h2>
        <p style={{ textAlign: "center", color: "#6b7280", marginBottom: 40 }}>What is the difference between these two actions?</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {[
            {
              title: "Dissolution",
              desc: "Dissolution is the process of formally closing the LLC, which includes winding up its affairs, settling debts, and distributing remaining assets. This step ensures you meet all legal and financial obligations before ending the entity's existence.",
              ui: (
                <div style={{ position: "relative" }}>
                  <Image
                    src="/dissolution/Dissolve-your-company-formally-closing-llc.webp"
                    alt="Closing your LLC progress card"
                    width={1799}
                    height={874}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              )
            },
            {
              title: "Termination",
              desc: "Terminating the company is the final step after dissolution, where the LLC ceases to exist as a legal entity. Termination means the state removes the LLC from its registry and no longer recognizes it as a business.",
              ui: (
                <div style={{ position: "relative" }}>
                  <Image
                    src="/dissolution/Company-termination-notification.webp"
                    alt="Company termination notification on a smartphone"
                    width={1795}
                    height={876}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              )
            }
          ].map((item) => (
            <div key={item.title} style={{ border: "1px solid #e5e7eb", borderRadius: 16, padding: 28 }}>
              <div style={{ marginBottom: 20 }}>{item.ui}</div>
              <h3 style={{ fontWeight: 700, fontSize: 20, marginBottom: 10 }}>{item.title}</h3>
              <p style={{ fontSize: 14, color: "#2B93C9", lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to Dissolve an LLC - Steps */}
      <section style={{ maxWidth: 1200, margin: "64px auto", padding: "0 32px" }}>
        <div style={{
          background: "#F0F9FF", borderRadius: 10, padding: "12px 18px",
          fontSize: 13, color: "#1E293B", marginBottom: 40, border: "1px solid #7DD3FC"
        }}>
          ⚠️ Both dissolution and LLC termination are necessary to end the company's existence and obligations completely. Members could remain liable for the LLC's obligations without proper dissolution and termination.
        </div>
        <h2 style={{ fontSize: 44, fontWeight: 700, textAlign: "center", marginBottom: 8 }}>How to Dissolve an LLC</h2>
        <p style={{ textAlign: "center", color: "#6b7280", marginBottom: 48 }}>Dissolving an LLC involves several key steps.</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
          {/* Step 1 */}
          <div>
            <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", height: 220, marginBottom: 20 }}>
              <Image
                src="/dissolution/pic2.webp"
                alt="Business owner making the decision to dissolve"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
          <div>
            <div style={{ color: "#2B93C9", fontWeight: 700, fontSize: 13, marginBottom: 6 }}>1.</div>
            <h3 style={{ fontWeight: 700, fontSize: 22, marginBottom: 16 }}>Internal Agreement and Decision-Making</h3>
            <Accordion title="Member voting">
              LLC members must vote to dissolve the company. Check your operating agreement for the required voting threshold — typically a majority or unanimous vote is needed.
            </Accordion>
            <Accordion title="Operating agreement provisions">
              Review your operating agreement for any specific dissolution procedures, notice requirements, or conditions that must be met before dissolution can proceed.
            </Accordion>
            <Accordion title="Document the decision">
              Record the dissolution decision in meeting minutes or a written consent form signed by all voting members. This documentation is critical for your records.
            </Accordion>
          </div>

          {/* Step 2 */}
          <div>
            <div style={{ color: "#2B93C9", fontWeight: 700, fontSize: 13, marginBottom: 6 }}>2.</div>
            <h3 style={{ fontWeight: 700, fontSize: 22, marginBottom: 16 }}>Filing the Articles of Dissolution</h3>
            <Accordion title="Prepare the document">
              Obtain the Articles of Dissolution form from your state's Secretary of State website. Fill in the required information including your LLC name, date of dissolution, and reason for dissolving.
            </Accordion>
            <Accordion title="Submit the document to the state">
              File the completed Articles of Dissolution with your state's Secretary of State office, either online or by mail. Include the required filing fee.
            </Accordion>
            <Accordion title="Typical fees">
              State filing fees for Articles of Dissolution typically range from $20 to $200, depending on your state. Additional professional fees may apply if you hire assistance.
            </Accordion>
          </div>
          <div>
            <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", height: 220, marginBottom: 20 }}>
              <Image
                src="/dissolution/pic5.webp"
                alt="Business owner preparing dissolution paperwork"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Step 3 */}
          <div>
            <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", height: 220, marginBottom: 20 }}>
              <Image
                src="/dissolution/pic1.webp"
                alt="Business owner winding up the LLC"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
          <div>
            <div style={{ color: "#2B93C9", fontWeight: 700, fontSize: 13, marginBottom: 6 }}>3.</div>
            <h3 style={{ fontWeight: 700, fontSize: 22, marginBottom: 16 }}>Winding Up the LLC</h3>
            <Accordion title="Settling debts and obligations">
              Pay off all outstanding debts, taxes, and liabilities. Notify creditors and give them time to submit any remaining claims before distributing assets.
            </Accordion>
            <Accordion title="Distributing remaining assets">
              After settling all debts, distribute any remaining assets to LLC members according to their ownership percentages or as specified in the operating agreement.
            </Accordion>
            <Accordion title="Final accounting">
              Prepare final financial statements and ensure all accounts are closed. Keep copies of all financial records for at least 7 years after dissolution.
            </Accordion>
          </div>
        </div>
      </section>

      {/* IRS & Costs Section */}
      <section style={{ maxWidth: 1200, margin: "64px auto", padding: "0 32px", display: "flex", gap: 48, alignItems: "flex-start", flexWrap: "wrap" }}>
        {/* Table of Contents */}
        <TableOfContents activeSection={activeSection} onItemClick={handleTocClick} />

        <div style={{ flex: "1 1 500px" }}>
          <h2 id="irs-close" style={{ scrollMarginTop: 120, fontSize: 32, fontWeight: 700, marginBottom: 16 }}>Do I Need to Notify the IRS If I Close My Business?</h2>
          <p style={{ color: "#374151", lineHeight: 1.7, marginBottom: 32 }}>
            Yes, you must inform the IRS about the dissolution by filing the final tax returns and checking the box indicating that it is the final return. This step ensures that the IRS knows the business is no longer operating. Submit the final income tax return for the LLC and any employment tax returns if you had employees. This includes Forms 1065, 1120, or 1120S, depending on your LLC's tax classification. Your EIN will remain assigned to your business even after it closes; however, the IRS will mark it as closed. This ensures that the EIN cannot be used for future business activities.
          </p>

          <h2 id="dissolve-cost" style={{ scrollMarginTop: 120, fontSize: 32, fontWeight: 700, marginBottom: 12 }}>How Much Does It Cost to Dissolve an LLC?</h2>
          <p style={{ color: "#2B93C9", marginBottom: 12, fontSize: 14 }}>The cost to dissolve an LLC varies.</p>
          <ul style={{ paddingLeft: 20, marginBottom: 20 }}>
            <li style={{ marginBottom: 8, fontSize: 14, color: "#374151", lineHeight: 1.6 }}>
              <strong>Filing fees.</strong> <span style={{ color: "#2B93C9" }}>State filing fees for the Articles of Dissolution typically range from $20 to $200.</span> The exact amount depends on the state where you registered your LLC.
            </li>
            <li style={{ fontSize: 14, color: "#374151", lineHeight: 1.6 }}>
              <strong>Additional costs.</strong> You may need professional assistance to ensure all steps are completed correctly. If so, you could incur additional costs such as legal fees, accounting fees, and costs associated with settling debts and distributing assets.
            </li>
          </ul>
          <div style={{
            background: "#F0F9FF", borderRadius: 10, padding: "14px 18px",
            fontSize: 13, color: "#2B93C9", marginBottom: 32, border: "1px solid #BAE6FD"
          }}>
            💡 Each state has different requirements and fees for dissolving an LLC. It's important to research your specific state's process and fees to budget appropriately.
          </div>

          <h2 id="additional-considerations" style={{ scrollMarginTop: 120, fontSize: 32, fontWeight: 700, marginBottom: 16 }}>Additional Considerations for LLC Dissolution</h2>
          <p style={{ color: "#6b7280", fontSize: 14, marginBottom: 20 }}>Several other factors need to be considered when closing an LLC.</p>

          <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Canceling Licenses and Permits</h3>
          <p style={{ color: "#374151", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
            Be sure to cancel all business licenses and permits to avoid future liabilities. This includes state and local business licenses, sales tax permits, and any industry-specific licenses.
          </p>

          <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Notifying Creditors and Stakeholders</h3>
          <p style={{ color: "#2B93C9", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
            Inform creditors, customers, and other stakeholders about the dissolution. Providing advance notice helps maintain good relationships and ensures a smooth winding-up process.
          </p>

          <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Record-Keeping Requirements</h3>
          <p style={{ color: "#2B93C9", fontSize: 14, lineHeight: 1.7, marginBottom: 32 }}>
            Maintain records of the dissolution process for future reference, including final tax returns and accounting documents. It's recommended to keep these records for several years in case of any future inquiries.
          </p>

          <div style={{
            borderRadius: 16, overflow: "hidden", textAlign: "center",
            border: "1px solid #e5e7eb", marginBottom: 48
          }}>
            <div style={{ position: "relative", width: "100%" }}>
              <Image
                src="/dissolution/Dissolution-company-dissolved-two-phones.webp"
                alt="LLC dissolution tracked on a smartphone"
                width={1551}
                height={1014}
                className="w-full h-auto"
              />
            </div>
            <div style={{ fontSize: 13, color: "#6b7280", padding: 16 }}>You must inform the IRS about the dissolution.</div>
          </div>

          {/* FAQ */}
          <h2 id="dissolution-faq" style={{ scrollMarginTop: 120, fontSize: 32, fontWeight: 700, marginBottom: 24 }}>Frequently Asked Questions About Dissolving an LLC</h2>
          {[
            {
              q: "1. What Is the Difference Between Dissolving and Terminating an LLC?",
              a: "Dissolving involves closing the LLC and settling its affairs while terminating is the final step in which the LLC ceases to exist legally."
            },
            {
              q: "2. How Do You Close an LLC?",
              a: "Closing an LLC involves member agreement, filing Articles of Dissolution, winding up affairs, settling debts, and distributing assets."
            },
            {
              q: "3. Do I Need to Notify the IRS If I Close My Business?",
              a: "Yes, you must notify the IRS by filing your final tax returns and indicating that they are the final returns."
            },
            {
              q: "4. How Much Does It Cost to Dissolve an LLC?",
              a: "The cost varies by state but typically ranges from $20 to $200 in filing fees, plus any additional legal or accounting costs."
            }
          ].map((item) => (
            <div key={item.q} style={{ marginBottom: 20 }}>
              <h3 style={{ fontWeight: 700, fontSize: 16, marginBottom: 6, color: "#2B93C9" }}>{item.q}</h3>
              <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.7 }}>{item.a}</p>
            </div>
          ))}

          {/* Conclusion */}
          <h2 id="dissolution-conclusion" style={{ scrollMarginTop: 120, fontSize: 32, fontWeight: 700, marginBottom: 16 }}>Conclusion: Properly Dissolving an LLC</h2>
          <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.7, marginBottom: 20 }}>
            Dissolving an LLC involves several important steps to ensure compliance with state laws and avoid future liabilities. By understanding the process, including filing requirements, costs, and IRS notifications, you can effectively dissolve your LLC and confidently move forward. Always consult with legal and financial professionals to ensure you handle all aspects of the dissolution correctly.
          </p>
<Link href="/dissolution/step-1" style={{
            background: LOGO_GRADIENT, color: "white", border: "none", borderRadius: 50,
            padding: "14px 28px", fontSize: 14, fontWeight: 700, cursor: "pointer", marginBottom: 32, textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center"
          }}>DISSOLVE YOUR LLC</Link>

          {/* Key Takeaways */}
          <div style={{ border: "1px solid #e5e7eb", borderRadius: 14, padding: 24, marginBottom: 48 }}>
            <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 14 }}>Key Takeaways</h3>
            <ul style={{ paddingLeft: 20 }}>
              {[
                "The necessary steps, costs involved, and legal requirements if you're ready to close your company.",
                "The differences between dissolving and terminating an LLC.",
                "The steps required to dissolve your business—from internal agreement and decision-making to winding up the LLC.",
                "Do you need to notify the IRS if you close your business?",
                "The costs associated with closing your LLC.",
                "Additional considerations for closing your LLC, like canceling licenses and permits, notifying creditors and stakeholders, and record-keeping requirements.",
                "Frequently asked questions about dissolving your LLC."
              ].map((item, i) => (
                <li key={i} style={{ fontSize: 13, color: "#374151", marginBottom: 8, lineHeight: 1.6 }}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        background: "#F0F9FF", borderRadius: 24, maxWidth: 1200, margin: "0 auto 64px",
        padding: "48px 48px", display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap"
      }}>
        <div style={{ flex: "1 1 280px" }}>
          <div style={{ color: "#2B93C9", fontWeight: 700, fontSize: 13, marginBottom: 8 }}>Simplify Your Business Exit</div>
          <h2 style={{ fontSize: 36, fontWeight: 700, marginBottom: 12 }}>Hassle-Free<br />Dissolution<br />With Incorp Bay</h2>
          <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.6, marginBottom: 24 }}>
            Closing your business is simple with Incorp Bay. Let us handle the details for you.
          </p>
<Link href="/dissolution/step-1" style={{
            background: LOGO_GRADIENT, color: "white", border: "none", borderRadius: 50,
            padding: "14px 28px", fontSize: 14, fontWeight: 700, cursor: "pointer", textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center"
          }}>DISSOLVE YOUR LLC</Link>
        </div>
        <div style={{ flex: "1 1 240px", display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative", width: "100%", maxWidth: 240 }}>
            <Image
              src="/dissolution/Phone-with-dissolution-page-company-dissolved.webp"
              alt="Dissolution case resolved on a smartphone"
              width={1222}
              height={1287}
              className="w-full h-auto"
            />
          </div>
        </div>
</section>

    </main>
    </NavigationWrapper>
  );
}
