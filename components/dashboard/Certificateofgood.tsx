// "use client";

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { 
//   ChevronLeft, ChevronDown, Info, Star, HelpCircle 
// } from 'lucide-react';

// const CertificateOfGoodStandingForm = () => {
//   const router = useRouter();
//   const [entityType, setEntityType] = useState("");

//   return (
//     <div className="min-h-screen bg-[#F9FAFB] p-4 md:p-10 font-sans antialiased text-left">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Back Button */}
//         <button 
//           onClick={() => router.back()}
//           className="flex items-center text-[14px] font-bold text-gray-900 mb-10 hover:text-orange-600 transition-colors"
//         >
//           <ChevronLeft className="w-5 h-5 text-orange-500 mr-1" /> Back
//         </button>

//         {/* 1. Page Heading & Description (Full Width) */}
//         <div className="mb-12">
//           <h1 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">Certificate of Good Standing</h1>
//           <div className="space-y-4 max-w-5xl">
//             <p className="text-[15px] leading-relaxed text-gray-600 font-medium">
//               A Certificate of Good Standing is an official document issued by your state's secretary of state office to verify that your business is compliant within the state of incorporation and therefore is in "good standing." Just like having a driver's license or other forms of personal ID, a Certificate of Good Standing proves that your LLC or corporation is officially registered and authorized to operate in your home state.
//             </p>
//             <p className="text-[15px] leading-relaxed text-gray-600 font-medium">
//               Also known as a Certificate of Existence, Certificate of Authorization, or a Certificate of Status, the Good Standing Certificate is a one-page document provided by the secretary of state and provides conclusive evidence of the status of your business entity. In many cases it can be valid up to three months.
//             </p>
//           </div>
//         </div>

//         {/* 2. Content Grid: Form (Left) & Summary (Right) are now perfectly aligned at the top */}
//         <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-start">
          
//           {/* --- LEFT SIDE: FORM SECTIONS --- */}
//           <div className="space-y-10 pb-32">
            
//             {/* 1. Company Information (Selection) */}
//             <div className="bg-white rounded-[24px] p-12 border border-gray-100 shadow-sm">
//               <h3 className="text-[20px] font-bold text-gray-900 mb-8">Company Information</h3>
//               <div className="border-2 border-orange-500 rounded-2xl p-8 bg-white flex items-center gap-6">
//                 <div className="w-6 h-6 rounded-full border-2 border-orange-500 flex items-center justify-center">
//                   <div className="w-3 h-3 rounded-full bg-orange-500" />
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-gray-900 text-[16px] tracking-wide uppercase">NEW COMPANY</h4>
//                   <p className="text-gray-400 text-[14px]">A company previously incorporated outside of Bizee</p>
//                 </div>
//               </div>
//             </div>

//             {/* 2. Entity Details */}
//             <div className="bg-white rounded-[24px] p-12 border border-gray-100 shadow-sm">
//               <h3 className="text-[20px] font-bold text-gray-900 mb-10 border-b border-gray-50 pb-6">Company Information Detail</h3>
              
//               <div className="space-y-10">
//                 <div>
//                   <label className="block text-[15px] font-bold text-gray-800 mb-4">Entity Type</label>
//                   <div className="relative">
//                     <select 
//                       value={entityType}
//                       onChange={(e) => setEntityType(e.target.value)}
//                       className="w-full appearance-none border border-gray-200 rounded-2xl px-6 py-5 text-[16px] outline-none focus:border-orange-500 bg-white shadow-sm"
//                     >
//                       <option value="">Select Entity Type</option>
//                       <option value="LLC">LLC</option>
//                       <option value="Corporation">Corporation</option>
//                       <option value="Nonprofit">Nonprofit</option>
//                     </select>
//                     <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 pointer-events-none" />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//                   <div>
//                     <label className="flex items-center gap-2 text-[15px] font-bold text-gray-800 mb-4">
//                       State of Formation <HelpCircle className="w-5 h-5 text-gray-300" />
//                     </label>
//                     <select className="w-full appearance-none border border-gray-200 rounded-2xl px-6 py-5 text-[16px] outline-none focus:border-orange-500 bg-white shadow-sm">
//                       <option>Select State</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-[15px] font-bold text-gray-800 mb-4">State of Service</label>
//                     <select className="w-full appearance-none border border-gray-200 rounded-2xl px-6 py-5 text-[16px] outline-none focus:border-orange-500 bg-white shadow-sm">
//                       <option>Select State</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* 3. Company Address */}
//             <div className="bg-white rounded-[24px] p-12 border border-gray-100 shadow-sm">
//               <h3 className="text-[20px] font-bold text-gray-900 mb-10 border-b border-gray-50 pb-6">Company Address</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//                 <div className="md:col-span-2">
//                   <label className="block text-[15px] font-bold text-gray-800 mb-4">Street Address</label>
//                   <input type="text" className="w-full border border-gray-200 rounded-2xl px-6 py-5 text-[16px] outline-none focus:border-orange-500 shadow-sm" />
//                 </div>
//                 <div className="grid grid-cols-3 md:col-span-2 gap-8">
//                   <div className="col-span-1">
//                     <label className="block text-[15px] font-bold text-gray-800 mb-4">City</label>
//                     <input type="text" className="w-full border border-gray-200 rounded-2xl px-6 py-5 text-[16px] outline-none focus:border-orange-500 shadow-sm" />
//                   </div>
//                   <div className="col-span-1">
//                     <label className="block text-[15px] font-bold text-gray-800 mb-4">State</label>
//                     <input type="text" className="w-full border border-gray-200 rounded-2xl px-6 py-5 text-[16px] outline-none focus:border-orange-500 shadow-sm" />
//                   </div>
//                   <div className="col-span-1">
//                     <label className="block text-[15px] font-bold text-gray-800 mb-4">Zip Code</label>
//                     <input type="text" className="w-full border border-gray-200 rounded-2xl px-6 py-5 text-[16px] outline-none focus:border-orange-500 shadow-sm" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* --- RIGHT SIDE: ORDER SUMMARY (Aligned with Company Info) --- */}
//           <aside className="lg:sticky lg:top-10"> 
//             {/* Yahan se koi extra margin nahi hai, ye perfectly align hoga */}
//             <div className="bg-white rounded-[32px] border border-gray-100 shadow-2xl p-10">
//               <h3 className="text-[24px] font-black text-gray-900 mb-10 tracking-tight">Order Summary</h3>
              
//               <div className="space-y-6 mb-10">
//                 <div className="flex justify-between text-[15px] font-bold text-gray-500">
//                   <span>State Fee</span>
//                   <span className="text-gray-400 font-bold uppercase">Tbd</span>
//                 </div>
//                 <div className="flex justify-between text-[15px] font-bold text-gray-500 border-b border-gray-100 pb-8">
//                   <span>Processing Fee</span>
//                   <span className="text-gray-400 font-bold uppercase">Tbd</span>
//                 </div>
//                 <div className="flex justify-between items-center pt-4">
//                   <span className="text-[22px] font-black text-gray-900">Total</span>
//                   <span className="text-4xl font-black text-gray-900">$0</span>
//                 </div>
//               </div>

//               {/* Trust Section */}
//               <div className="flex flex-col items-center mb-10 py-6 bg-gray-50 rounded-3xl">
//                 <div className="flex gap-1 mb-2">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//                   ))}
//                 </div>
//                 <p className="text-[11px] text-gray-400 font-black uppercase tracking-widest">
//                   60,000+ HAPPY CUSTOMERS
//                 </p>
//               </div>

//               {/* Action Button */}
//               <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-6 rounded-2xl shadow-xl transition-all active:scale-[0.97] text-[17px] mb-6">
//                 Submit Order
//               </button>

//               <div className="bg-[#f0fdfc] border border-teal-100 rounded-2xl p-5 flex gap-4">
//                 <Info className="w-6 h-6 text-teal-600 flex-shrink-0" />
//                 <p className="text-[12px] leading-relaxed text-teal-900 font-semibold">
//                   Secure checkout. Processing may take a few moments.
//                 </p>
//               </div>
//             </div>
//           </aside>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default CertificateOfGoodStandingForm;

"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ChevronLeft, ChevronDown, Info, Star, HelpCircle 
} from 'lucide-react';

const CertificateOfGoodStandingForm = () => {
  const router = useRouter();
  const [entityType, setEntityType] = useState("");

  return (
    <div className="min-h-screen bg-[#F9FAFB] p-4 md:p-8 lg:p-12 font-sans antialiased text-left">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Button */}
        <button 
          onClick={() => router.back()}
          className="flex items-center text-[14px] font-bold text-gray-900 mb-10 hover:text-orange-600 transition-all"
        >
          <ChevronLeft className="w-5 h-5 text-orange-500 mr-1" /> Back
        </button>

        {/* Header Data Section */}
        <div className="mb-12 max-w-4xl">
          <h1 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">Certificate of Good Standing</h1>
          <div className="space-y-4">
            <p className="text-[15px] leading-relaxed text-gray-600 font-medium">
              A Certificate of Good Standing is an official document issued by your state's secretary of state office to verify that your business is compliant within the state of incorporation and therefore is in "good standing." Just like having a driver's license or other forms of personal ID, a Certificate of Good Standing proves that your LLC or corporation is officially registered and authorized to operate in your home state.
            </p>
            <p className="text-[15px] leading-relaxed text-gray-600 font-medium">
              Also known as a Certificate of Existence, Certificate of Authorization, or a Certificate of Status, the Good Standing Certificate is a one-page document provided by the secretary of state and provides conclusive evidence of the status of your business entity. In many cases it can be valid up to three months.
            </p>
          </div>
        </div>

        {/* --- MAIN GRID LAYOUT --- */}
        {/* md:grid-cols-[1fr_380px] ensures it stays side-by-side from tablet size up */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_380px] lg:grid-cols-[1fr_420px] gap-8 lg:gap-16 items-start relative">
          
          {/* LEFT SIDE: FORM (Scrollable) */}
          <div className="space-y-10 pb-32">
            
            <div className="bg-white rounded-[24px] p-8 md:p-12 border border-gray-100 shadow-sm">
              <h3 className="text-[20px] font-bold text-gray-900 mb-8">Company Information</h3>
              <div className="border-2 border-orange-500 rounded-2xl p-6 md:p-8 bg-white flex items-center gap-6">
                <div className="w-6 h-6 rounded-full border-2 border-orange-500 flex items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-orange-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-[16px] tracking-wide uppercase">NEW COMPANY</h4>
                  <p className="text-gray-400 text-[14px]">A company previously incorporated outside of Bizee</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[24px] p-8 md:p-12 border border-gray-100 shadow-sm">
              <h3 className="text-[20px] font-bold text-gray-900 mb-10 border-b border-gray-50 pb-6">Entity Information</h3>
              <div className="space-y-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="block text-[14px] font-bold text-gray-800 uppercase tracking-wider">State of Formation</label>
                    <select className="w-full border border-gray-200 rounded-xl px-5 py-4 text-[16px] bg-white outline-none focus:border-orange-500"><option>Select State</option></select>
                  </div>
                  <div className="space-y-4">
                    <label className="block text-[14px] font-bold text-gray-800 uppercase tracking-wider">State of Service</label>
                    <select className="w-full border border-gray-200 rounded-xl px-5 py-4 text-[16px] bg-white outline-none focus:border-orange-500"><option>Select State</option></select>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[24px] p-8 md:p-12 border border-gray-100 shadow-sm">
              <h3 className="text-[20px] font-bold text-gray-900 mb-10 border-b border-gray-50 pb-6">Company Address</h3>
              <div className="space-y-8">
                <div className="space-y-4">
                  <label className="block text-[14px] font-bold text-gray-800 uppercase tracking-wider">Street Address</label>
                  <input type="text" className="w-full border border-gray-200 rounded-xl px-5 py-4 text-[16px] outline-none focus:border-orange-500" placeholder="123 Business St" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <input type="text" placeholder="City" className="border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-orange-500" />
                  <input type="text" placeholder="State" className="border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-orange-500" />
                  <input type="text" placeholder="Zip" className="border border-gray-200 rounded-xl px-5 py-4 outline-none focus:border-orange-500" />
                </div>
              </div>
            </div>

            {/* Empty space for scroll testing */}
            <div className="h-[400px]"></div>
          </div>

          {/* --- RIGHT SIDE: STICKY ORDER SUMMARY --- */}
          {/* md:sticky ensures it stays side-by-side even on tablets */}
          <aside className="md:sticky md:top-8 z-20">
            <div className="bg-white rounded-[32px] border border-gray-100 shadow-2xl p-8 lg:p-10">
              <h3 className="text-[22px] font-black text-gray-900 mb-8 tracking-tight">Order Summary</h3>
              
              <div className="space-y-5 mb-10">
                <div className="flex justify-between text-[14px] font-bold text-gray-500">
                  <span>State Fee</span>
                  <span className="text-gray-400 font-bold">TBD</span>
                </div>
                <div className="flex justify-between text-[14px] font-bold text-gray-500 border-b border-gray-50 pb-6">
                  <span>Processing Fee</span>
                  <span className="text-gray-400 font-bold">TBD</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-[20px] font-black text-gray-900">Total</span>
                  <span className="text-4xl font-black text-gray-900">$0</span>
                </div>
              </div>

              <div className="flex flex-col items-center mb-8 py-5 bg-gray-50 rounded-2xl">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest text-center">
                  TRUSTED BY 60,000+ CUSTOMERS
                </p>
              </div>

              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-5 rounded-xl shadow-lg transition-all active:scale-[0.98] text-[16px] mb-8">
                Submit Order
              </button>

              <div className="bg-[#f0fdfc] border border-teal-50 rounded-xl p-5 flex gap-4">
                <Info className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <p className="text-[12px] leading-relaxed text-teal-900 font-semibold text-left">
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