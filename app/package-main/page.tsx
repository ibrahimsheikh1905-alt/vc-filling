"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import NavigationWrapper from "@/components/NavigationWrapper";
import { getStateFee } from "@/data/stateFeeData";

const ChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={18} height={18}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

type EntityType = "LLC" | "S-Corporation" | "C-Corporation" | "Nonprofit";
type PackageType = "Basic" | "Standard" | "Premium";

const TYPE = {
  tiny: 12,
  small: 14,
  body: 16,
  bodyLg: 18,
  h1: 40,
  h2: 28,
  h3: 18,
} as const;

const entities: EntityType[] = ["LLC", "S-Corporation", "C-Corporation", "Nonprofit"];

const states = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia",
  "Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts",
  "Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey",
  "New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island",
  "South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming"
];

  // NOTE: pricing/state fee must come from the shared source of truth.
  // OrderSummary uses getStateFee() from web/data/stateFeeData.ts.
  // If we keep a second local map here, it can easily mismatch.
  // Keep this constant ONLY if you have already verified it matches stateFeeData.ts.
  // For now, we remove the local map and use getStateFee below.



const packagePrices: Record<EntityType, Record<PackageType, number>> = {
  LLC: { Basic: 0, Standard: 199, Premium: 299 },
  "S-Corporation": { Basic: 0, Standard: 199, Premium: 299 },
  "C-Corporation": { Basic: 0, Standard: 199, Premium: 299 },
  Nonprofit: { Basic: 0, Standard: 199, Premium: 299 },
};

const packageWeeks: Record<EntityType, Record<PackageType, string>> = {
  LLC: { Basic: "3 weeks", Standard: "3 weeks", Premium: "2 days" },
  "S-Corporation": { Basic: "3 weeks", Standard: "3 weeks", Premium: "1 day" },
  "C-Corporation": { Basic: "3 weeks", Standard: "3 weeks", Premium: "1 day" },
  Nonprofit: { Basic: "4 weeks", Standard: "4 weeks", Premium: "1 day" },
};

const included: Record<EntityType, Record<string, Partial<Record<PackageType, boolean | number | string>>>> = {
  LLC: {
    "LLC Filing & State Registration": { Basic: true, Standard: true, Premium: true },
    "Registered Agent (1st year included)": { Basic: true, Standard: true, Premium: true },
    "Virtual Address (1st month included)": { Basic: true, Standard: true, Premium: true },
    "Expedited Filing": { Basic: "In Premium", Standard: 50, Premium: true },
    "Ready-to-Use Business Contracts": { Basic: "In Premium", Standard: 150, Premium: true },
    "Federal Tax ID (EIN)": { Basic: "In Standard", Standard: true, Premium: true },
    "Operating Agreement": { Basic: "In Standard", Standard: true, Premium: true },
    "Domain Name + Business Email": { Basic: false, Standard: false, Premium: true },
    "FREE 1st Year Business Phone Number": { Basic: false, Standard: false, Premium: true },
    "Lifetime Compliance Alerts": { Basic: false, Standard: true, Premium: true },
    "Unlimited Phone & Email Support": { Basic: false, Standard: true, Premium: true },
    "Online Access Dashboard": { Basic: true, Standard: true, Premium: true },
    "Business Banking Account Offer": { Basic: true, Standard: true, Premium: true },
    "Business Tax Consultation": { Basic: true, Standard: true, Premium: true },
    "S-Corp Election Filing (IRS Form 2553)": { Basic: 50, Standard: true, Premium: true },
  },
  "S-Corporation": {
    "Preparing & Filing the Articles of Organization": { Basic: true, Standard: true, Premium: true },
    "FREE 1st Year Registered Agent Service": { Basic: true, Standard: true, Premium: true },
    "FREE 1st Month of Virtual Address Service": { Basic: true, Standard: true, Premium: true },
    "Expedited Filing": { Basic: 50, Standard: 50, Premium: true },
    "Business Contract Templates": { Basic: 150, Standard: 150, Premium: true },
    "EIN Business Tax Number": { Basic: 70, Standard: true, Premium: true },
    "Corporate Bylaws": { Basic: 30, Standard: true, Premium: true },
    "Domain Name + Business Email": { Basic: false, Standard: false, Premium: true },
    "FREE 1st Year Business Phone Number": { Basic: false, Standard: false, Premium: true },
    "Lifetime Compliance Alerts": { Basic: false, Standard: true, Premium: true },
    "Unlimited Phone & Email Support": { Basic: false, Standard: true, Premium: true },
    "Online Access Dashboard": { Basic: true, Standard: true, Premium: true },
    "Business Banking Account Offer": { Basic: true, Standard: true, Premium: true },
    "Business Tax Consultation": { Basic: true, Standard: true, Premium: true },
    "IRS Form 2553": { Basic: true, Standard: true, Premium: true },
  },
  "C-Corporation": {
    "Preparing & Filing the Articles of Organization": { Basic: true, Standard: true, Premium: true },
    "FREE 1st Year Registered Agent Service": { Basic: true, Standard: true, Premium: true },
    "FREE 1st Month of Virtual Address Service": { Basic: true, Standard: true, Premium: true },
    "Expedited Filing": { Basic: 50, Standard: 50, Premium: true },
    "Business Contract Templates": { Basic: 150, Standard: 150, Premium: true },
    "EIN Business Tax Number": { Basic: 70, Standard: true, Premium: true },
    "Corporate Bylaws": { Basic: 30, Standard: true, Premium: true },
    "Domain Name + Business Email": { Basic: false, Standard: false, Premium: true },
    "FREE 1st Year Business Phone Number": { Basic: false, Standard: false, Premium: true },
    "Lifetime Compliance Alerts": { Basic: false, Standard: true, Premium: true },
    "Unlimited Phone & Email Support": { Basic: false, Standard: true, Premium: true },
    "Online Access Dashboard": { Basic: true, Standard: true, Premium: true },
    "Business Banking Account Offer": { Basic: true, Standard: true, Premium: true },
    "Business Tax Consultation": { Basic: true, Standard: true, Premium: true },
    "IRS Form 2553": { Basic: 25, Standard: true, Premium: true },
  },
  Nonprofit: {
    "Preparing & Filing the Articles of Organization": { Basic: true, Standard: true, Premium: true },
    "FREE 1st Year Registered Agent Service": { Basic: true, Standard: true, Premium: true },
    "FREE 1st Month of Virtual Address Service": { Basic: true, Standard: true, Premium: true },
    "Expedited Filing": { Basic: 50, Standard: 50, Premium: true },
    "Business Contract Templates": { Basic: 150, Standard: 150, Premium: true },
    "EIN Business Tax Number": { Basic: 70, Standard: true, Premium: true },
    "Corporate Bylaws": { Basic: 30, Standard: true, Premium: true },
    "Domain Name + Business Email": { Basic: false, Standard: false, Premium: true },
    "FREE 1st Year Business Phone Number": { Basic: false, Standard: false, Premium: true },
    "Lifetime Compliance Alerts": { Basic: false, Standard: true, Premium: true },
    "Unlimited Phone & Email Support": { Basic: false, Standard: true, Premium: true },
    "Online Access Dashboard": { Basic: true, Standard: true, Premium: true },
    "Business Banking Account Offer": { Basic: true, Standard: true, Premium: true },
    "Business Tax Consultation": { Basic: true, Standard: true, Premium: true },
  },
};

const faqs = [
  "Is the formation fee a one-time charge?",
  "What's the difference between Standard and Premium?",
  "How long will it take to form my LLC?",
  "Can I upgrade or add features later?",
];

export default function FormationPricingPage() {
  const searchParams = useSearchParams();

  const [entity, setEntity] = useState<EntityType | "">("");
  const [state, setState] = useState("");
  const [showErrors, setShowErrors] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<PackageType>("Standard");
  const [selectedAddons, setSelectedAddons] = useState<Record<string, boolean>>({});
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const rawEntity = searchParams.get("entity") ?? "";
    const rawState = searchParams.get("state") ?? "";

    const nextEntity = (entities as string[]).includes(rawEntity) ? (rawEntity as EntityType) : "";
    const nextState = states.includes(rawState) ? rawState : "";

    // Only prefill from query params if both are valid.
    // Otherwise, do NOT override the user's current dropdown selections.
    const shouldPrefill = !!nextEntity && !!nextState;

    if (!shouldPrefill) return;

    setEntity(nextEntity);
    setState(nextState);

    // keep UX consistent: if user arrives with prefill, don't show validation errors
    setShowErrors(false);

    // reset dependent UI when entity changes
    setSelectedAddons({});
    setSelectedPackage("Standard");
  }, [searchParams]);

  const activeEntity: EntityType | null = entities.includes(entity as EntityType) ? (entity as EntityType) : null;
  const stateFee = state ? getStateFee(state) : 0;
  const packagePrice = activeEntity ? packagePrices[activeEntity][selectedPackage] : 0;

  const addonsTotal = useMemo(() => {
    if (!activeEntity) return 0;
    return Object.entries(selectedAddons).reduce((total, [key, value]) => {
      if (!value) return total;
      const featureKey = key as keyof (typeof included)[EntityType];
      const price = (included as any)[activeEntity]?.[featureKey]?.[selectedPackage];
      return total + (typeof price === "number" ? price : 0);
    }, 0);
  }, [selectedAddons, activeEntity, selectedPackage]);

  const total = packagePrice + stateFee + addonsTotal;

  const handleStart = () => {
    if (!entity || !state) {
      setShowErrors(true);
      return;
    }
  };

  const router = useRouter();

  const handleGetStarted = () => {
    if (!entity || !state) {
      setShowErrors(true);
      return;
    }

    // Persist selection so OrderSummary on the next step can render the correct total.
    try {
      localStorage.setItem("serviceType", entity);

      // OrderSummary for C-Corporation:
      // - stateName is taken from step3Data?.stateFromStepOne
      // - packageType is derived from step1Data?.packageType (unless premiumServicePackage exists in step6)
      // Your issue (Standard selecting but Basic showing) happens when OrderSummary
      // can't see the saved packageType for the step keys it reads.

      const nextStateName = state;
      const nextPackageType = selectedPackage; // Basic/Standard/Premium

      // Keys that OrderSummary will try:
      //  - baseFormPath (computed from serviceType) + "/step-1"
      //    i.e. /form-c-corporation/step-1
      //  - baseFormPath (computed from serviceType) + "/step-3"
      //    i.e. /form-c-corporation/step-3
      const step1Key = "/form-c-corporation/step-1";
      const step3Key = "/form-c-corporation/step-3";

      const step1Raw = localStorage.getItem(step1Key);
      const step1Parsed = step1Raw ? JSON.parse(step1Raw) : {};
      localStorage.setItem(
        step1Key,
        JSON.stringify({
          ...step1Parsed,
          stateName: nextStateName,
          packageType: nextPackageType,
          entityType: entity,
        })
      );

      const step3Raw = localStorage.getItem(step3Key);
      const step3Parsed = step3Raw ? JSON.parse(step3Raw) : {};
      localStorage.setItem(
        step3Key,
        JSON.stringify({
          ...step3Parsed,
          stateFromStepOne: nextStateName,
          // also store packageType here as a backup
          packageType: nextPackageType,
          entityType: entity,
        })
      );

      // Additionally store under the plain step keys (OrderSummary's pathname-based fallbacks)
      // so it still works even if baseFormPath mapping differs.
      localStorage.setItem(
        "/step-1",
        JSON.stringify({
          ...JSON.parse(localStorage.getItem("/step-1") || "{}"),
          stateName: nextStateName,
          packageType: nextPackageType,
          entityType: entity,
        })
      );
      localStorage.setItem(
        "/step-3",
        JSON.stringify({
          ...JSON.parse(localStorage.getItem("/step-3") || "{}"),
          stateFromStepOne: nextStateName,
          packageType: nextPackageType,
          entityType: entity,
        })
      );
    } catch {
      // ignore storage errors
    }


    // Route to the correct entity flow start page.
    const rawEntity = searchParams.get("entity") ?? "";
    const fallbackEntity = (entities as string[]).includes(rawEntity) ? rawEntity : "";

    // Ensure query-param based deep links work reliably.
    // If users land here with `?entity=LLC` (and state is empty), route based on query.
    switch (entity || (fallbackEntity as any)) {
      case "C-Corporation":
        router.push("/form-c-corporation/step-2");
        return;

      case "S-Corporation":
        // Ensure OrderSummary can read the selected package for S-Corporation immediately after redirect.
        // Step data keys that OrderSummary tries: /form-s-corporation/step-1 and /form-s-corporation/step-3.
        try {
          const nextPackageType = selectedPackage;
          const nextStateName = state;
          const scStep1Key = "/form-s-corporation/step-1";
          const scStep3Key = "/form-s-corporation/step-3";

          const scStep1Raw = localStorage.getItem(scStep1Key);
          const scStep1Parsed = scStep1Raw ? JSON.parse(scStep1Raw) : {};
          localStorage.setItem(
            scStep1Key,
            JSON.stringify({
              ...scStep1Parsed,
              stateName: nextStateName,
              packageType: nextPackageType,
              entityType: entity,
            })
          );

          const scStep3Raw = localStorage.getItem(scStep3Key);
          const scStep3Parsed = scStep3Raw ? JSON.parse(scStep3Raw) : {};
          localStorage.setItem(
            scStep3Key,
            JSON.stringify({
              ...scStep3Parsed,
              stateFromStepOne: nextStateName,
              stateName: nextStateName,
              packageType: nextPackageType,
              entityType: entity,
            })
          );

          // Also store under the plain step keys so pathname-based fallbacks work.
          localStorage.setItem(
            "/step-1",
            JSON.stringify({
              ...JSON.parse(localStorage.getItem("/step-1") || "{}"),
              stateName: nextStateName,
              packageType: nextPackageType,
              entityType: entity,
            })
          );
          localStorage.setItem(
            "/step-3",
            JSON.stringify({
              ...JSON.parse(localStorage.getItem("/step-3") || "{}"),
              stateFromStepOne: nextStateName,
              stateName: nextStateName,
              packageType: nextPackageType,
              entityType: entity,
            })
          );
        } catch {
          // ignore storage errors
        }

        router.push("/form-s-corporation/step-2");
        return;

      case "LLC":
        // Persist keys for OrderSummary/Step screens.
        // Step 2 reads from localStorage.getItem("/form-a-llc/step-1").
        try {
          const nextStateName = state;
          const nextPackageType = selectedPackage;
          const llcStep1Key = "/form-a-llc/step-1";
          const llcStep1Raw = localStorage.getItem(llcStep1Key);
          const llcStep1Parsed = llcStep1Raw ? JSON.parse(llcStep1Raw) : {};
          localStorage.setItem(
            llcStep1Key,
            JSON.stringify({
              ...llcStep1Parsed,
              stateName: nextStateName,
              packageType: nextPackageType,
              entityType: entity,
            })
          );
        } catch {
          // ignore storage errors
        }

        router.push("/form-a-llc/step-2");
        return;
      case "Nonprofit":
        // For nonprofit flow, go to step-1 first (state selection/pricing page is /package-main)
        router.push("/start-a-nonprofit/step-2");
        return;

      default:
        return;
    }
  };

  const toggleAddon = (feature: string) => {
    setSelectedAddons((prev) => ({ ...prev, [feature]: !prev[feature] }));
  };

  // Clicking a package column (row header cell) selects that package and clears addons.
  const handleColumnSelect = (pkg: PackageType) => {
    setSelectedPackage(pkg);
    setSelectedAddons({});
  };

  const renderCell = (feature: string, pkg: PackageType) => {
    if (!activeEntity) return null;

    const value = (included as any)[activeEntity]?.[feature]?.[pkg] as
      | boolean
      | string
      | number
      | undefined;

    if (value === true) return <span style={{ color: "#06B6D4", fontSize: TYPE.h3, fontWeight: 900 }}>✓</span>;
    if (value === false || value === undefined) return <span style={{ color: "#94a3b8", fontSize: TYPE.body }}>−</span>;
    if (typeof value === "string") return <span style={{ color: "#94a3b8", fontSize: TYPE.tiny }}>{value}</span>;

    const active = selectedPackage === pkg && !!selectedAddons[feature];

    return (
      <button
        onClick={(e) => {
          // Stop propagation so the parent cell's onClick (which resets addons)
          // doesn't fire right after this and wipe out the toggle we just made.
          e.stopPropagation();
          setSelectedPackage(pkg);
          toggleAddon(feature);
        }}
        style={{
          border: "1px solid #06B6D4",
          color: active ? "#fff" : "#0f172a",
          background: active ? "#06B6D4" : "#fff",
          borderRadius: 6,
          padding: "7px 14px",
          fontSize: TYPE.tiny,
          fontWeight: 800,
          cursor: "pointer",
        }}
      >
        {active ? "✓" : "+"} ${value}
      </button>
    );
  };

  return (
    <NavigationWrapper>
      <main style={{ fontFamily: "inherit", background: "#fff", color: "#0f172a" }}>
        <section style={{ maxWidth: 1180, margin: "0 auto", padding: "48px 24px" }}>
          <div
            style={{
              border: "1.5px solid #dbe3ea",
              borderRadius: 28,
              minHeight: 360,
              padding: "56px 34px",
              position: "relative",
              overflow: "hidden",
              textAlign: "center",
            }}
          >
            <div style={{ position: "absolute", inset: 0, opacity: 0.45, pointerEvents: "none" }}>
              <svg viewBox="0 0 1100 360" width="100%" height="100%" preserveAspectRatio="none">
                <path d="M0 120 C90 230 60 260 110 360" fill="none" stroke="#dbe3ea" />
                <path d="M1100 120 C1010 230 1040 260 990 360" fill="none" stroke="#dbe3ea" />
                <path d="M0 230 C90 310 80 330 120 360" fill="none" stroke="#dbe3ea" />
                <path d="M1100 230 C1010 310 1020 330 980 360" fill="none" stroke="#dbe3ea" />
              </svg>
            </div>

            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 22px", borderRadius: 999, boxShadow: "0 4px 14px rgba(15,23,42,.12)", marginBottom: 40, fontSize: TYPE.small, background: "#fff" }}>
                Excellent 4.7 out of 5 <span style={{ color: "#00B67A", fontSize: TYPE.h3 }}>★</span> <b>Trustpilot</b>
              </div>

              <h1 style={{ margin: 0, fontSize: TYPE.h1, lineHeight: 1.1, fontWeight: 900, letterSpacing: -1, color: "#0f172a", textTransform: "uppercase" }}>
                You Bring The Idea.
                <br />
                We'll <span style={{ color: "#06B6D4" }}>Make It Official.</span>
              </h1>

              <p style={{ margin: "24px auto 36px", fontSize: TYPE.bodyLg, lineHeight: 1.5, maxWidth: 620, color: "#334155" }}>
                Over 1,000,000 businesses formed. Choose your entity type and state to get started.
              </p>

              <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
                <div style={{ textAlign: "left" }}>
                  <div style={{ position: "relative", width: 280, height: 68, border: showErrors && !entity ? "2px solid #ef4444" : "2px solid #06B6D4", borderRadius: 14, display: "flex", background: "#fff", boxShadow: "0 10px 20px rgba(6,182,212,.16)" }}>
                    <div style={{ width: 44, background: "#06B6D4", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: TYPE.h3, borderRadius: "12px 0 0 12px" }}>1</div>
                    <select value={entity} onChange={(e) => { setEntity(e.target.value as EntityType); setShowErrors(false); setSelectedAddons({}); }} style={{ flex: 1, border: 0, outline: 0, appearance: "none", fontSize: TYPE.h3, padding: "0 48px 0 16px", background: "transparent", cursor: "pointer" }}>
                      <option value="">Entity Type</option>
                      {entities.map((e) => <option key={e}>{e}</option>)}
                    </select>
                    <span style={{ position: "absolute", right: 18, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}><ChevronDown /></span>
                  </div>
                  {showErrors && !entity && <div style={{ color: "#ef4444", fontSize: TYPE.small, marginTop: 8 }}>Please select entity type.</div>}
                </div>

                <div style={{ textAlign: "left" }}>
                  <div style={{ position: "relative", width: 280, height: 68, border: showErrors && !state ? "2px solid #ef4444" : "2px solid #06B6D4", borderRadius: 14, display: "flex", background: "#fff", boxShadow: "0 10px 20px rgba(6,182,212,.16)" }}>
                    <div style={{ width: 44, background: "#06B6D4", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: TYPE.h3, borderRadius: "12px 0 0 12px" }}>2</div>
                    <select value={state} onChange={(e) => { setState(e.target.value); setShowErrors(false); }} style={{ flex: 1, border: 0, outline: 0, appearance: "none", fontSize: TYPE.h3, padding: "0 48px 0 16px", background: "transparent", cursor: "pointer" }}>
                      <option value="">State</option>
                      {states.map((s) => <option key={s}>{s}</option>)}
                    </select>
                    <span style={{ position: "absolute", right: 18, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}><ChevronDown /></span>
                  </div>
                  {showErrors && !state && <div style={{ color: "#ef4444", fontSize: TYPE.small, marginTop: 8 }}>Please select state of formation.</div>}
                </div>
              </div>

              {!entity || !state ? (
                <div style={{ marginTop: 20, fontSize: TYPE.small, color: "#64748b" }}>
                  <span style={{ color: "#06B6D4", fontSize: TYPE.h3 }}>↖</span> State-specific pricing will display below once your selection has been made.
                </div>
              ) : null}

              <button onClick={handleStart} style={{ marginTop: 22, background: "#06B6D4", color: "#fff", border: "none", borderRadius: 999, padding: "15px 36px", fontWeight: 800, fontSize: TYPE.body, cursor: "pointer", boxShadow: "0 12px 25px rgba(6,182,212,.25)" }}>
                Get Pricing
              </button>
            </div>
          </div>
        </section>

        {entity && state && (
          <section style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px 80px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 240px", gap: 20, alignItems: "start" }}>
              <div style={{ border: "1px solid #dbe3ea", borderRadius: 12, overflow: "visible", background: "#fff" }}>
                <div style={{ display: "grid", gridTemplateColumns: "260px repeat(3,1fr)", alignItems: "stretch", borderBottom: "1px solid #e5e7eb" }}>
                  <div style={{ padding: "34px 22px", fontSize: TYPE.body, fontWeight: 800, display: "flex", alignItems: "center" }}>
                    Business Formation Packages
                  </div>

                {(["Basic", "Standard", "Premium"] as PackageType[]).map((pkg) => {
                    const selected = selectedPackage === pkg;
                    return (
                      <div
                        key={pkg}
                        onClick={() => handleColumnSelect(pkg)}
                        style={{
                          position: "relative",
                          padding: "28px 12px 20px",
                          textAlign: "center",
                          borderLeft: selected ? "2px solid #06B6D4" : "1px solid transparent",
                          borderRight: selected ? "2px solid #06B6D4" : "1px solid transparent",
                          borderTop: selected ? "2px solid #06B6D4" : "none",
                          borderRadius: selected ? "12px 12px 0 0" : 0,
                          cursor: "pointer",
                          background: selected ? "#ecfeff" : "#fff",
                          minHeight: "100%",
                        }}
                      >
                        {pkg === "Standard" && selectedPackage === "Standard" && (
                          <div style={{ position: "absolute", top: -28, left: "50%", transform: "translateX(-50%)", background: "#06B6D4", color: "#fff", fontSize: TYPE.tiny, fontWeight: 900, padding: "7px 32px", borderRadius: "8px 8px 0 0", whiteSpace: "nowrap" }}>
                            Recommended
                          </div>
                        )}
                        <div style={{ display: "inline-block", border: "1px solid #06B6D4", borderRadius: 4, padding: "7px 22px", fontSize: TYPE.tiny, fontWeight: 800, background: "#fff" }}>{pkg}</div>
                        <div style={{ marginTop: 16, fontSize: 26, fontWeight: 900 }}>${activeEntity ? packagePrices[activeEntity][pkg] : 0}</div>
                        <div style={{ fontSize: TYPE.tiny, color: "#64748b" }}>+ ${stateFee} state fee</div>
                        <div style={{ marginTop: 8, color: "#06B6D4", fontSize: TYPE.tiny, fontWeight: 600 }}>◷ {activeEntity ? packageWeeks[activeEntity][pkg] : ""}</div>
                      </div>
                    );
                  })}
                </div>

                {activeEntity &&
                  Object.keys(included[activeEntity]).map((feature) => (
                    <div
                      key={feature}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "260px repeat(3,1fr)",
                        minHeight: 56,
                        borderBottom: "1px solid #e5e7eb",
                      }}
                    >
                      <div
                        style={{
                          padding: "14px 16px",
                          fontSize: TYPE.small,
                          fontWeight: 700,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <span>
                          {feature} <span style={{ color: "#cbd5e1" }}>ⓘ</span>
                        </span>
                        {feature.includes("Expedited") && (
                          <div style={{ color: "#06B6D4", fontSize: TYPE.tiny, fontWeight: 600, marginTop: 4 }}>
                            ⚡ 1 business day
                          </div>
                        )}
                        {feature.includes("Phone Number") && (
                          <div style={{ color: "#64748b", fontSize: TYPE.tiny, fontWeight: 500, marginTop: 4 }}>
                            *Offer valid only for US-based clients.
                          </div>
                        )}
                      </div>

                      {(["Basic", "Standard", "Premium"] as PackageType[]).map((pkg) => (
                        <div
                          key={pkg}
                          onClick={() => handleColumnSelect(pkg)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderLeft: selectedPackage === pkg ? "2px solid #06B6D4" : "1px solid transparent",
                            borderRight: selectedPackage === pkg ? "2px solid #06B6D4" : "1px solid transparent",
                            background: selectedPackage === pkg ? "#ecfeff" : "#fff",
                            cursor: "pointer",
                          }}
                        >
                          {renderCell(feature, pkg)}
                        </div>
                      ))}
                    </div>
                  ))}
              </div>

              <aside style={{ border: "1px solid #dbe3ea", borderRadius: 12, padding: 20, position: "sticky", top: 24 }}>
                <h3 style={{ margin: "0 0 18px", fontSize: TYPE.h3, fontWeight: 800 }}>Order Summary</h3>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: TYPE.small, color: "#64748b", marginBottom: 10 }}>
                  <span>{selectedPackage} Package:</span>
                  <span>${packagePrice}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: TYPE.small, color: "#64748b", marginBottom: 10 }}>
                  <span>{state} State Fee:</span>
                  <span>${stateFee}</span>
                </div>
                {addonsTotal > 0 && (
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: TYPE.small, color: "#64748b", marginBottom: 10 }}>
                    <span>Add-ons:</span>
                    <span>${addonsTotal}</span>
                  </div>
                )}
                <div style={{ borderTop: "1px solid #e5e7eb", margin: "14px 0", paddingTop: 14, display: "flex", justifyContent: "space-between", fontSize: TYPE.h3, fontWeight: 900 }}>
                  <span>Total:</span>
                  <span>${total}</span>
                </div>

                <button
                  onClick={handleGetStarted}
                  style={{ width: "100%", background: "#06B6D4", color: "#fff", border: "none", borderRadius: 8, padding: "14px 0", fontWeight: 800, fontSize: TYPE.body, cursor: "pointer", marginBottom: 16 }}
                >
                  Get Started
                </button>

                <div style={{ textAlign: "center", color: "#06B6D4", fontSize: TYPE.small, fontWeight: 800 }}>⚙ One-time fee</div>
                <p style={{ textAlign: "center", color: "#64748b", fontSize: TYPE.tiny, lineHeight: 1.5, margin: "6px 0 0" }}>
                  Unlike companies that charge annual fees, our formation fees are one-time.
                </p>
              </aside>
            </div>
          </section>
        )}

        {entity && state && (
          <section style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px 80px" }}>
            <h2 style={{ fontSize: TYPE.h2, fontWeight: 800, marginBottom: 28 }}>Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
              <div key={faq} style={{ borderBottom: "1px solid #dbe3ea" }}>
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} style={{ width: "100%", padding: "20px 0", border: 0, background: "transparent", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", textAlign: "left", gap: 16 }}>
                  <span style={{ fontSize: TYPE.body, fontWeight: 600 }}><span style={{ color: "#06B6D4", marginRight: 18, fontWeight: 800 }}>{String(index + 1).padStart(2, "0")}</span>{faq}</span>
                  <span style={{ flexShrink: 0, color: "#94a3b8" }}>⌄</span>
                </button>
                {openFaq === index && <p style={{ color: "#64748b", fontSize: TYPE.small, lineHeight: 1.7, margin: "0 0 20px" }}>Yes. You can select your entity, state, and package above. Pricing updates automatically based on your choices.</p>}
              </div>
            ))}
          </section>
        )}
      </main>
    </NavigationWrapper>
  );
}