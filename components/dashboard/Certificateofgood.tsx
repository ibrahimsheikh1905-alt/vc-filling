"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Info, Star } from "lucide-react";

const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";
const LOGO_GRADIENT_SOFT =
  "bg-[linear-gradient(90deg,rgba(36,78,182,0.10)_0%,rgba(43,147,201,0.10)_50%,rgba(51,209,204,0.10)_100%)]";

const CertificateOfGoodStandingForm = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-50 p-4 text-left font-sans antialiased md:p-8 lg:p-12">
      <div className="mx-auto max-w-7xl">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-10 flex items-center text-[14px] font-bold text-slate-900 transition-all hover:text-cyan-600"
        >
          <ChevronLeft className="mr-1 h-5 w-5 text-cyan-500" /> Back
        </button>

        {/* Header Data Section */}
        <div className="mb-12 max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900">
            Certificate of Good Standing
          </h1>

          <div className="space-y-4">
            <p className="text-[15px] font-medium leading-relaxed text-slate-600">
              A Certificate of Good Standing is an official document issued by your state's secretary of state office to verify that your business is compliant within the state of incorporation and therefore is in "good standing." Just like having a driver's license or other forms of personal ID, a Certificate of Good Standing proves that your LLC or corporation is officially registered and authorized to operate in your home state.
            </p>

            <p className="text-[15px] font-medium leading-relaxed text-slate-600">
              Also known as a Certificate of Existence, Certificate of Authorization, or a Certificate of Status, the Good Standing Certificate is a one-page document provided by the secretary of state and provides conclusive evidence of the status of your business entity. In many cases it can be valid up to three months.
            </p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="relative grid grid-cols-1 items-start gap-8 md:grid-cols-[1fr_380px] lg:grid-cols-[1fr_420px] lg:gap-16">
          {/* Left Side */}
          <div className="space-y-10 pb-32">
            <div className="rounded-[24px] border border-slate-100 bg-white p-8 shadow-sm md:p-12">
              <h3 className="mb-8 text-[20px] font-bold text-slate-900">
                Company Information
              </h3>

              <div className="flex items-center gap-6 rounded-2xl border-2 border-transparent bg-[linear-gradient(white,white)_padding-box,linear-gradient(90deg,#244EB6,#2B93C9,#33D1CC)_border-box] p-6 md:p-8">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#2B93C9]">
                  <div className={`${LOGO_GRADIENT} h-3 w-3 rounded-full`} />
                </div>

                <div>
                  <h4 className="text-[16px] font-bold uppercase tracking-wide text-slate-900">
                    NEW COMPANY
                  </h4>

                  <p className="text-[14px] text-slate-400">
                    A company previously incorporated outside of Incorp Bay
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[24px] border border-slate-100 bg-white p-8 shadow-sm md:p-12">
              <h3 className="mb-10 border-b border-slate-50 pb-6 text-[20px] font-bold text-slate-900">
                Entity Information
              </h3>

              <div className="space-y-10">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <div className="space-y-4">
                    <label className="block text-[14px] font-bold uppercase tracking-wider text-slate-800">
                      State of Formation
                    </label>

                    <select className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-[16px] outline-none focus:border-cyan-500">
                      <option>Select State</option>
                    </select>
                  </div>

                  <div className="space-y-4">
                    <label className="block text-[14px] font-bold uppercase tracking-wider text-slate-800">
                      State of Service
                    </label>

                    <select className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-[16px] outline-none focus:border-cyan-500">
                      <option>Select State</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[24px] border border-slate-100 bg-white p-8 shadow-sm md:p-12">
              <h3 className="mb-10 border-b border-slate-50 pb-6 text-[20px] font-bold text-slate-900">
                Company Address
              </h3>

              <div className="space-y-8">
                <div className="space-y-4">
                  <label className="block text-[14px] font-bold uppercase tracking-wider text-slate-800">
                    Street Address
                  </label>

                  <input
                    type="text"
                    className="w-full rounded-xl border border-slate-200 px-5 py-4 text-[16px] outline-none focus:border-cyan-500"
                    placeholder="123 Business St"
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  <input
                    type="text"
                    placeholder="City"
                    className="rounded-xl border border-slate-200 px-5 py-4 outline-none focus:border-cyan-500"
                  />

                  <input
                    type="text"
                    placeholder="State"
                    className="rounded-xl border border-slate-200 px-5 py-4 outline-none focus:border-cyan-500"
                  />

                  <input
                    type="text"
                    placeholder="Zip"
                    className="rounded-xl border border-slate-200 px-5 py-4 outline-none focus:border-cyan-500"
                  />
                </div>
              </div>
            </div>

            <div className="h-[400px]" />
          </div>

          {/* Right Side */}
          <aside className="z-20 md:sticky md:top-8">
            <div className="rounded-[32px] border border-slate-100 bg-white p-8 shadow-2xl lg:p-10">
              <h3 className="mb-8 text-[22px] font-bold tracking-tight text-slate-900">
                Order Summary
              </h3>

              <div className="mb-10 space-y-5">
                <div className="flex justify-between text-[14px] font-bold text-slate-500">
                  <span>State Fee</span>
                  <span className="font-bold text-slate-400">TBD</span>
                </div>

                <div className="flex justify-between border-b border-slate-50 pb-6 text-[14px] font-bold text-slate-500">
                  <span>Processing Fee</span>
                  <span className="font-bold text-slate-400">TBD</span>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[20px] font-bold text-slate-900">Total</span>
                  <span className="text-4xl font-bold text-slate-900">$0</span>
                </div>
              </div>

              <div className="mb-8 flex flex-col items-center rounded-2xl bg-slate-50 py-5">
                <div className="mb-2 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-center text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  TRUSTED BY 60,000+ CUSTOMERS
                </p>
              </div>

              <button className={`${LOGO_GRADIENT} group relative mb-8 w-full overflow-hidden rounded-full py-5 text-[16px] font-bold text-white shadow-lg shadow-[#2B93C9]/20 transition-all duration-300 hover:scale-[1.03] hover:brightness-110`}>
                <span className="absolute inset-x-0 top-0 h-1/2 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
                <span className="absolute -left-20 top-0 h-full w-12 -skew-x-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />
                <span className="relative z-10">Submit Order</span>
              </button>

              <div className={`${LOGO_GRADIENT_SOFT} flex gap-4 rounded-xl border border-[#2B93C9]/20 p-5`}>
                <Info className="h-5 w-5 flex-shrink-0 text-[#2B93C9]" />

                <p className="text-left text-[12px] font-semibold leading-relaxed text-cyan-900">
                  Safe and secure checkout.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CertificateOfGoodStandingForm;
