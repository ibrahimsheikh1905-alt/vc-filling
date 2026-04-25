import React from 'react';
import { Globe, Bell, Mail, FileText, UserX, ShieldCheck } from 'lucide-react';

const TipsGrid = () => {
  const tips = [
    { icon: <Globe />, text: "This is truly a virtual address. Please do not show up in person for any reason." },
    { icon: <Bell />, text: "You will receive a notification when mail is uploaded to your dashboard." },
    { icon: <Mail />, text: "Packages cannot be sent to or received at your virtual address. Bank cards will be forwarded via USPS." },
    { icon: <FileText />, text: "You are required to verify your Identity and sign Form 1583 in order for us to be able to open and scan your mail." },
    { icon: <UserX />, text: "You cannot show up in person to pick up mail. There is no in-person support, so please do not show up at this address." },
    { icon: <ShieldCheck />, text: "Your Virtual Address cannot be used as a registered agent's address. Learn more about separate service here." },
  ];

  return (
    <div className="p-6 md:p-10 bg-transparent">
      {/* Title section with proper weight and spacing */}
      <h2 className="text-xl md:text-2xl font-bold mb-8 text-gray-900 leading-snug">
        Please take a moment to read these important tips on how to best use your virtual address:
      </h2>
      
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {tips.map((tip, idx) => (
          <div 
            key={idx} 
            className="flex gap-5 p-6 md:p-8 bg-white rounded-[28px] border border-gray-100 shadow-sm hover:border-orange-200 hover:shadow-md transition-all duration-300 items-start"
          >
            {/* Icon Wrapper with Brand Colors */}
            <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0 text-[#FF5722]">
              {React.cloneElement(tip.icon, { size: 24, strokeWidth: 2 })}
            </div>
            
            {/* Text styling for readability */}
            <p className="text-[14px] text-gray-600 leading-relaxed font-medium pt-1">
              {tip.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TipsGrid;