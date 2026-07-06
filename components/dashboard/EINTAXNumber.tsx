"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Star, Info, User, ChevronDown, ChevronUp } from "lucide-react";

const EINTAXIDNumber = () => {
  const router = useRouter();
  const [idType, setIdType] = useState<"SSN" | "ITIN">("SSN");
  const [useContactName, setUseContactName] = useState(true);
  const [showSSNInfo, setShowSSNInfo] = useState(false);

  const [firstName, setFirstName] = useState("Noraiz");
  const [lastName, setLastName] = useState("Husnain");

  const handleCheckboxChange = () => {
    if (!useContactName) {
      setFirstName("Noraiz");
      setLastName("Husnain");
    } else {
      setFirstName("");
      setLastName("");
    }
    setUseContactName(!useContactName);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 text-left font-sans md:p-10">
      <div className="mx-auto max-w-7xl">
        <button
          onClick={() => router.back()}
          className="group mb-6 flex items-center text-[13px] font-bold text-cyan-600 transition-all hover:opacity-80"
        >
          <ChevronLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back
        </button>

        <div className="mb-10">
          <h1 className="text-xl font-bold italic text-slate-900">EIN / TAX ID Number</h1>
          <p className="mt-2 max-w-3xl text-[13px] italic leading-relaxed text-slate-500">
            The IRS is the IRS form required to obtain an EIN (Employer Identification Number, frequently called a Tax ID number).
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_380px]">
          <div className="space-y-6 pb-20">
            <div className="rounded-xl border border-slate-100 bg-white p-8 shadow-sm">
              <h3 className="mb-6 text-[16px] font-bold italic text-slate-800">Company Information</h3>

              <div className="flex items-center gap-4 rounded-lg border-2 border-cyan-500 bg-white p-5">
                <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-cyan-500">
                  <div className="h-2.5 w-2.5 rounded-full bg-cyan-500" />
                </div>

                <div>
                  <h4 className="text-[12px] font-bold uppercase text-slate-900">NEW COMPANY</h4>
                  <p className="text-[11px] italic text-slate-400">A company previously incorporated outside of Incorp Bay</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-100 bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-[16px] font-bold italic tracking-tight text-slate-800">SS4 Questions</h3>
              <p className="mb-8 text-[11px] italic leading-relaxed text-slate-500">
                Please answer these questions so that we may prepare the SS4 Form to obtain an EIN.
              </p>

              <label className="mb-4 block text-[12px] font-bold uppercase italic tracking-tight text-slate-700">
                Name of principal officer or owner
              </label>

              <div className="mb-8 flex items-center gap-3 rounded-lg border border-slate-200 p-4">
                <input
                  type="checkbox"
                  checked={useContactName}
                  onChange={handleCheckboxChange}
                  className="h-5 w-5 cursor-pointer accent-cyan-500"
                />
                <User className="h-4 w-4 text-slate-600" />
                <span className="text-[13px] font-bold italic text-slate-800">Use Contact Name</span>
              </div>

              <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[12px] font-bold uppercase italic text-slate-700">First Name</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    readOnly={useContactName}
                    className={`w-full rounded-lg border px-4 py-3 text-[14px] italic outline-none transition-all ${
                      useContactName
                        ? "border-slate-100 bg-slate-50 text-slate-500"
                        : "border-slate-200 bg-white text-black focus:border-cyan-500"
                    }`}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[12px] font-bold uppercase italic text-slate-700">Last Name</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    readOnly={useContactName}
                    className={`w-full rounded-lg border px-4 py-3 text-[14px] italic outline-none transition-all ${
                      useContactName
                        ? "border-slate-100 bg-slate-50 text-slate-500"
                        : "border-slate-200 bg-white text-black focus:border-cyan-500"
                    }`}
                  />
                </div>
              </div>

              <div className="mb-8 overflow-hidden rounded-lg border border-slate-200">
                <button
                  onClick={() => setShowSSNInfo(!showSSNInfo)}
                  className="flex w-full items-center justify-between bg-white px-4 py-3 transition-colors hover:bg-cyan-50"
                >
                  <span className="text-[12px] font-bold italic text-slate-700">
                    Why am I required to provide my Social Security Number?
                  </span>
                  {showSSNInfo ? (
                    <ChevronUp className="h-4 w-4 text-slate-400" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-slate-400" />
                  )}
                </button>

                {showSSNInfo && (
                  <div className="border-t border-slate-100 bg-white px-4 py-4 animate-in slide-in-from-top-1 duration-200">
                    <p className="text-[12px] italic leading-relaxed text-slate-500">
                      In order to issue an EIN, the IRS requires a Principal (typically one of the members or directors of an entity) to provide their Social Security Number. This creates a formal affiliation with the company/entity. The Social Security Number is strictly used for obtaining the EIN. Once the EIN process is complete, your SSN is permanently deleted from the Incorp Bay database. To further protect your security, all Social Security Numbers are stored on a secure, encrypted server during the EIN process.
                    </p>
                  </div>
                )}
              </div>

              <label className="mb-4 block text-[12px] font-bold uppercase italic tracking-tight text-slate-700">
                Identification number
              </label>

              <div className="mb-8 grid grid-cols-2 gap-4">
                <button
                  onClick={() => setIdType("SSN")}
                  className={`flex items-center gap-3 rounded-lg border-2 p-4 transition-all ${
                    idType === "SSN" ? "border-cyan-500" : "border-slate-200"
                  }`}
                >
                  <div className={`flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                    idType === "SSN" ? "border-cyan-500" : "border-slate-300"
                  }`}>
                    {idType === "SSN" && <div className="h-2 w-2 rounded-full bg-cyan-500" />}
                  </div>
                  <span className="text-[13px] font-bold italic">SSN</span>
                </button>

                <button
                  onClick={() => setIdType("ITIN")}
                  className={`flex items-center gap-3 rounded-lg border-2 p-4 transition-all ${
                    idType === "ITIN" ? "border-cyan-500" : "border-slate-200"
                  }`}
                >
                  <div className={`flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                    idType === "ITIN" ? "border-cyan-500" : "border-slate-300"
                  }`}>
                    {idType === "ITIN" && <div className="h-2 w-2 rounded-full bg-cyan-500" />}
                  </div>
                  <span className="text-[13px] font-bold italic">ITIN</span>
                </button>
              </div>

              <div>
                <label className="mb-2 block text-[12px] font-bold uppercase italic text-slate-700">SSN</label>
                <input
                  type="text"
                  placeholder="000-00-0000"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-[14px] italic outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <button
              onClick={() => router.back()}
              className="rounded-lg border border-slate-200 bg-white px-12 py-3.5 text-[13px] font-bold shadow-sm transition-all hover:bg-cyan-50 hover:text-cyan-600"
            >
              Back
            </button>
          </div>

          <aside className="lg:sticky lg:top-8">
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-xl">
              <h3 className="mb-8 text-[17px] font-bold italic tracking-tight text-slate-900">Order Summary</h3>

              <div className="flex items-end justify-between border-t border-slate-100 pt-6">
                <span className="text-[18px] font-bold italic text-slate-900">Total</span>
                <span className="text-[30px] font-black leading-none text-slate-900">$119</span>
              </div>

              <button className="mt-8 w-full rounded-xl bg-cyan-500 py-4 text-[14px] font-bold uppercase tracking-[2px] text-white shadow-lg shadow-cyan-100 transition-all hover:bg-cyan-600">
                Complete & Pay
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default EINTAXIDNumber;
