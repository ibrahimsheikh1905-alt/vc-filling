"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, Star, Info, User, ChevronDown, ChevronUp } from 'lucide-react';

const EINTAXIDNumber = () => {
  const router = useRouter();
  const [idType, setIdType] = useState<'SSN' | 'ITIN'>('SSN');
  const [useContactName, setUseContactName] = useState(true);
  const [showSSNInfo, setShowSSNInfo] = useState(false); // State for the dropdown text
  
  // Dynamic names
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
    <div className="min-h-screen bg-[#F9FAFB] p-4 md:p-10 font-sans text-left">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Button */}
        <button 
          onClick={() => router.back()}
          className="flex items-center text-[13px] font-bold text-[#FF6B35] mb-6 hover:opacity-80 transition-all group"
        >
          <ChevronLeft className="w-4 h-4 mr-1 transition-transform group-hover:-translate-x-1" /> 
          Back
        </button>

        <div className="mb-10">
          <h1 className="text-xl font-bold text-gray-900 italic">EIN / TAX ID Number</h1>
          <p className="text-[13px] text-gray-500 mt-2 leading-relaxed max-w-3xl italic">
            The IRS is the IRS form required to obtain an EIN (Employer Identification Number, frequently called a Tax ID number).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
          <div className="space-y-6 pb-20">
            
            {/* 1. Company Information Card */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-[16px] font-bold text-gray-800 mb-6 italic">Company Information</h3>
              <div className="border-2 border-[#FF6B35] rounded-lg p-5 bg-white flex items-center gap-4">
                <div className="w-5 h-5 rounded-full border-2 border-[#FF6B35] flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B35]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-[12px] uppercase">NEW COMPANY</h4>
                  <p className="text-gray-400 text-[11px] italic">A company previously incorporated outside of Bizee</p>
                </div>
              </div>
            </div>

            {/* 2. SS4 Questions */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-[16px] font-bold text-gray-800 mb-4 italic tracking-tight">SS4 Questions</h3>
              <p className="text-[11px] text-gray-500 mb-8 leading-relaxed italic">
                Please answer these questions so that we may prepare the SS4 Form to obtain an EIN.
              </p>

              <label className="block text-[12px] font-bold text-gray-700 mb-4 italic tracking-tight uppercase">Name of principal officer or owner</label>
              <div className="border border-gray-200 rounded-lg p-4 mb-8 flex items-center gap-3">
                <input 
                  type="checkbox" 
                  checked={useContactName} 
                  onChange={handleCheckboxChange}
                  className="w-5 h-5 accent-[#FF6B35] cursor-pointer"
                />
                <User className="w-4 h-4 text-gray-600" />
                <span className="text-[13px] font-bold text-gray-800 italic">Use Contact Name</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-[12px] font-bold text-gray-700 mb-2 italic uppercase">First Name</label>
                  <input 
                    type="text" 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)}
                    readOnly={useContactName}
                    className={`w-full border rounded-lg px-4 py-3 text-[14px] italic outline-none transition-all ${useContactName ? 'bg-gray-50 border-gray-100 text-gray-500' : 'bg-white border-gray-200 text-black'}`} 
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-gray-700 mb-2 italic uppercase">Last Name</label>
                  <input 
                    type="text" 
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)}
                    readOnly={useContactName}
                    className={`w-full border rounded-lg px-4 py-3 text-[14px] italic outline-none transition-all ${useContactName ? 'bg-gray-50 border-gray-100 text-gray-500' : 'bg-white border-gray-200 text-black'}`} 
                  />
                </div>
              </div>

              {/* WHY SSN DROPDOWN SECTION */}
              <div className="mb-8 border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  onClick={() => setShowSSNInfo(!showSSNInfo)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[12px] font-bold text-gray-700 italic">Why am I required to provide my Social Security Number?</span>
                  {showSSNInfo ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                </button>
                {showSSNInfo && (
                  <div className="px-4 py-4 bg-white border-t border-gray-100 animate-in slide-in-from-top-1 duration-200">
                    <p className="text-[12px] text-gray-500 leading-relaxed italic">
                      In order to issue an EIN, the IRS requires a Principal (typically one of the members or directors of an entity) to provide their Social Security Number. This creates a formal affiliation with the company/entity. The Social Security Number is strictly used for obtaining the EIN. Once the EIN process is complete, your SSN is permanently deleted from the Bizee database. To further protect your security, all Social Security Numbers are stored on a secure, encrypted server during the EIN process.
                    </p>
                  </div>
                )}
              </div>

              <label className="block text-[12px] font-bold text-gray-700 mb-4 italic tracking-tight uppercase">Identification number</label>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <button onClick={() => setIdType('SSN')} className={`border-2 rounded-lg p-4 flex items-center gap-3 transition-all ${idType === 'SSN' ? 'border-[#FF6B35]' : 'border-gray-200'}`}>
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${idType === 'SSN' ? 'border-[#FF6B35]' : 'border-gray-300'}`}>
                    {idType === 'SSN' && <div className="w-2 h-2 rounded-full bg-[#FF6B35]" />}
                  </div>
                  <span className="text-[13px] font-bold italic">SSN</span>
                </button>
                <button onClick={() => setIdType('ITIN')} className={`border-2 rounded-lg p-4 flex items-center gap-3 transition-all ${idType === 'ITIN' ? 'border-[#FF6B35]' : 'border-gray-200'}`}>
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${idType === 'ITIN' ? 'border-[#FF6B35]' : 'border-gray-300'}`}>
                    {idType === 'ITIN' && <div className="w-2 h-2 rounded-full bg-[#FF6B35]" />}
                  </div>
                  <span className="text-[13px] font-bold italic">ITIN</span>
                </button>
              </div>

              <div>
                <label className="block text-[12px] font-bold text-gray-700 mb-2 italic uppercase">SSN</label>
                <input type="text" placeholder="000-00-0000" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] italic outline-none" />
              </div>
            </div>

            <button onClick={() => router.back()} className="bg-white border border-gray-200 rounded-lg px-12 py-3.5 text-[13px] font-bold shadow-sm hover:bg-gray-50 transition-all">Back</button>
          </div>

          {/* SIDEBAR */}
          <aside className="lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-8">
              <h3 className="text-[17px] font-bold text-gray-900 mb-8 italic tracking-tight">Order Summary</h3>
              <div className="pt-6 border-t border-gray-100 flex justify-between items-end">
                <span className="text-[18px] font-bold text-gray-900 italic">Total</span>
                <span className="text-[30px] font-black text-gray-900 leading-none">$119</span>
              </div>
              <button className="w-full bg-[#FF6B35] hover:bg-[#E85A24] text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-100 transition-all text-[14px] mt-8 uppercase tracking-[2px]">
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