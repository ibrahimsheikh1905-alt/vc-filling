"use client";

import { usePathname } from 'next/navigation';
import NewSidebar from "@/components/dashboard/NewSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const showSidebar = !pathname.includes('/certificateofgood') && !pathname.includes('/ForeignQualification') && !pathname.includes('/TradeNameSearch') && !pathname.includes('/LicensePackage') && !pathname.includes('/Registeragentform') && !pathname.includes('/ChangeRegister') && !pathname.includes('/IRSfillingform') && !pathname.includes('/EINTAXIDNumber') && !pathname.includes('/Registrationoffictitious') && !pathname.includes('/Amendment') && !pathname.includes('/Reinstatement') && !pathname.includes('/Dissolution') && !pathname.includes('/VirtualAddress') ;
  
  return (
    <div className={`min-h-screen bg-[#F9FAFB] ${showSidebar ? 'flex' : ''}`}>
      {showSidebar && <NewSidebar />}
      <main className={`flex-1 ${showSidebar ? 'p-8 overflow-y-auto' : 'overflow-hidden'}`}>
        {children}
      </main>
    </div>
  );
}
