import React from 'react';

const HowItWorks = () => {
  const steps = [
    { id: 1, text: "Mail is sent to your Virtual Address", img: "/step1.png" },
    { id: 2, text: "Mail is scanned", img: "/step2.png" },
    { id: 3, text: "Documents are uploaded to your dashboard", img: "/step3.png" },
    { id: 4, text: "You are notified when documents are available", img: "/step4.png" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left: How it works */}
      <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">Here is how it works.</h2>
        <p className="text-gray-500 mb-8 text-sm leading-relaxed">
          Your company's mail will be directed to your virtual address. Once we receive it, we'll scan it, <b>upload it to your dashboard</b>, and notify you that it is available to view.
        </p>

        <div className="space-y-6 relative">
          <div className="absolute left-4 top-0 bottom-0 border-l-2 border-dotted border-blue-200 z-0"></div>
          
          {steps.map((step) => (
            <div key={step.id} className="flex items-start gap-6 relative z-10">
              <div className="w-8 h-8 rounded-full bg-[#FF5722] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-1 shadow-lg shadow-orange-100">
                {step.id}
              </div>
              <div className="flex-1 flex items-center gap-4 p-3 bg-white border border-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-24 h-16 bg-[#FFF9F5] rounded-xl flex items-center justify-center shrink-0">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg opacity-40"></div>
                </div>
                <p className="text-sm font-semibold text-gray-700">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Important Info */}
      <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
        <h2 className="text-2xl font-bold mb-8 text-gray-900 leading-tight">
          Important things to know about the Virtual Address service:
        </h2>
        
        <div className="space-y-8">
          {[
            { 
              q: "We do not accept packages.", 
              sub: null 
            },
            { 
              q: "There is NO in-person support at this address. You can not pick up or drop off mail.", 
              sub: (
                <ul className="list-disc ml-4 space-y-1">
                  <li>Any bank checks, credit, or debit cards will be mail forwarded (via USPS) to the contact address on file.</li>
                  <li>Items that can't be scanned will be returned to the sender.</li>
                </ul>
              )
            },
            { 
              q: "Packages cannot be received at your virtual address.", 
              sub: "However, letters and large envelopes containing documents for scanning are acceptable." 
            },
            { 
              q: "Your virtual address cannot be used as a registered agent's address.", 
              sub: (
                <span>
                  If you require a registered agent, learn more about that separate service <a href="#" className="text-orange-600 font-bold hover:underline">here</a>.
                </span>
              ) 
            }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-full bg-[#FF5722] text-white flex items-center justify-center text-[10px] shrink-0 mt-1">?</div>
              <div>
                <p className="text-sm font-bold text-gray-800 mb-1">{item.q}</p>
                {item.sub && <div className="text-xs text-gray-500 leading-relaxed font-medium">{item.sub}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;