import React from "react";

const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";

const HowItWorks = () => {
  const steps = [
    { id: 1, text: "Mail is sent to your Virtual Address", img: "/step1.png" },
    { id: 2, text: "Mail is scanned", img: "/step2.png" },
    { id: 3, text: "Documents are uploaded to your dashboard", img: "/step3.png" },
    { id: 4, text: "You are notified when documents are available", img: "/step4.png" },
  ];

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {/* Left: How it works */}
      <div className="rounded-[32px] border border-slate-100 bg-white p-8 shadow-sm">
        <h2 className="mb-2 text-2xl font-bold text-slate-900">
          Here is how it works.
        </h2>

        <p className="mb-8 text-sm leading-relaxed text-slate-500">
          Your company&apos;s mail will be directed to your virtual address. Once we receive it, we&apos;ll scan it,{" "}
          <b>upload it to your dashboard</b>, and notify you that it is available to view.
        </p>

        <div className="relative space-y-6">
          <div className="absolute bottom-0 left-4 top-0 z-0 border-l-2 border-dotted border-cyan-200" />

          {steps.map((step) => (
            <div key={step.id} className="relative z-10 flex items-start gap-6">
              <div className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${LOGO_GRADIENT} text-xs font-bold text-white shadow-lg shadow-cyan-100`}>
                {step.id}
              </div>

              <div className="flex flex-1 items-center gap-4 rounded-2xl border border-slate-100 bg-white p-3 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-16 w-24 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
                  <div className="h-10 w-10 rounded-lg bg-cyan-100 opacity-70" />
                </div>

                <p className="text-sm font-semibold text-slate-700">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Important Info */}
      <div className="rounded-[32px] border border-slate-100 bg-white p-8 shadow-sm">
        <h2 className="mb-8 text-2xl font-bold leading-tight text-slate-900">
          Important things to know about the Virtual Address service:
        </h2>

        <div className="space-y-8">
          {[
            {
              q: "We do not accept packages.",
              sub: null,
            },
            {
              q: "There is NO in-person support at this address. You can not pick up or drop off mail.",
              sub: (
                <ul className="ml-4 list-disc space-y-1">
                  <li>Any bank checks, credit, or debit cards will be mail forwarded (via USPS) to the contact address on file.</li>
                  <li>Items that can&apos;t be scanned will be returned to the sender.</li>
                </ul>
              ),
            },
            {
              q: "Packages cannot be received at your virtual address.",
              sub: "However, letters and large envelopes containing documents for scanning are acceptable.",
            },
            {
              q: "Your virtual address cannot be used as a registered agent's address.",
              sub: (
                <span>
                  If you require a registered agent, learn more about that separate service{" "}
                  <a href="#" className="font-bold text-cyan-600 hover:underline">
                    here
                  </a>.
                </span>
              ),
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${LOGO_GRADIENT} text-[10px] text-white`}>
                ?
              </div>

              <div>
                <p className="mb-1 text-sm font-bold text-slate-800">{item.q}</p>
                {item.sub && (
                  <div className="text-xs font-medium leading-relaxed text-slate-500">
                    {item.sub}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
