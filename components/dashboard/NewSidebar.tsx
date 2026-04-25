"use client";

import React from "react";
import { 
  Activity, Settings, Zap, AlertCircle, Mail, FolderOpen, 
  Tag, Building2, Users, Receipt, Shield, Bolt
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NewSidebar: React.FC = () => {
  const pathname = usePathname();

  const isMyTasksActive = pathname === '/dashboard/tasks';

  const getLinkStyle = (path: string): string => {
    let isActive = false;
    if (path === '/dashboard/tasks') {
      isActive = isMyTasksActive;
    } else if (path === '/dashboard/history') {
      isActive = pathname === '/dashboard/226041533405';
    } else {
      isActive = pathname === path;
    }
    
    return `flex items-center px-4 py-2.5 rounded-lg transition-all group relative ${
      isActive 
      ? 'bg-orange-50 text-orange-600 font-semibold' 
      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium'
    }`;
  };

  const getIconStyle = (path: string): string => {
    let isActive = false;
    if (path === '/dashboard/tasks') {
      isActive = isMyTasksActive;
    } else if (path === '/dashboard/history') {
      isActive = pathname === '/dashboard/226041533405';
    } else {
      isActive = pathname === path;
    }
    return `w-5 h-5 mr-3 flex-shrink-0 transition-colors ${
      isActive ? 'text-orange-500' : 'text-gray-400 group-hover:text-gray-600'
    }`;
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-100 h-screen flex flex-col font-sans antialiased">
      {/* Profile Section */}
      <div className="p-5 border-b border-gray-50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-orange-500 rounded-lg flex-shrink-0 flex items-center justify-center text-white font-bold text-sm shadow-sm">
            NH
          </div>
          <div className="min-w-0">
            <h3 className="font-bold text-gray-900 text-[13px] leading-none truncate">Noraiz Husnain</h3>
            <p className="text-gray-400 text-[11px] truncate mt-1">frndzitme@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-3 space-y-0.5 overflow-y-auto">
        <Link href="/dashboard" className={getLinkStyle('/dashboard')}>
          <Activity className={getIconStyle('/dashboard')} />
          <span className="text-[13.5px]">Dashboard</span>
        </Link>

        <Link href="/dashboard/settings" className={getLinkStyle('/dashboard/settings')}>
          <Settings className={getIconStyle('/dashboard/settings')} />
          <span className="text-[13.5px]">Settings</span>
        </Link>

        {/* Section Labels */}
        <div className="px-4 py-3 mt-6 mb-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400/80">ACTIONS</span>
        </div>

        <Link href="/dashboard/tasks" className={getLinkStyle('/dashboard/tasks')}>
          <Bolt className={getIconStyle('/dashboard/tasks')} />
          <span className="text-[13.5px]">My Tasks</span>
          <span className="ml-auto bg-orange-500 text-white text-[10px] font-bold rounded-md px-1.5 py-0.5 shadow-sm">3</span>
        </Link>

        <Link href="/dashboard/issues" className={getLinkStyle('/dashboard/issues')}>
          <AlertCircle className={getIconStyle('/dashboard/issues')} />
          <span className="text-[13.5px]">Pending Issue</span>
          <span className="ml-auto bg-red-500 text-white text-[10px] font-bold rounded-md px-1.5 py-0.5 shadow-sm">1</span>
        </Link>

        <div className="px-4 py-3 mt-6 mb-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400/80">COMPANY DOCUMENTS</span>
        </div>

        <Link href="/dashboard/virtual-mailbox" className={getLinkStyle('/dashboard/virtual-mailbox')}>
          <Mail className={getIconStyle('/dashboard/virtual-mailbox')} />
          <span className="text-[13.5px]">Virtual Mailbox</span>
        </Link>

        <Link href="/dashboard/contracts" className={getLinkStyle('/dashboard/contracts')}>
          <FolderOpen className={getIconStyle('/dashboard/contracts')} />
          <span className="text-[13.5px] truncate">Business Contracts</span>
        </Link>

        <div className="px-4 py-3 mt-6 mb-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400/80">COMPANY DETAILS</span>
        </div>

        <Link href="/dashboard/orders" className={getLinkStyle('/dashboard/orders')}>
          <Tag className={getIconStyle('/dashboard/orders')} />
          <span className="text-[13.5px]">Order Status</span>
        </Link>

        <Link href="/dashboard/company-info" className={getLinkStyle('/dashboard/company-info')}>
          <Building2 className={getIconStyle('/dashboard/company-info')} />
          <span className="text-[13.5px]">Company Info</span>
        </Link>

        <Link href="/dashboard/registered-agent" className={getLinkStyle('/dashboard/registered-agent')}>
          <Users className={getIconStyle('/dashboard/registered-agent')} />
          <span className="text-[13.5px]">Registered Agent</span>
        </Link>

        <Link href="/dashboard/226041533405" className={getLinkStyle('/dashboard/history')}>
          <Receipt className={getIconStyle('/dashboard/history')} />
          <span className="text-[13.5px]">Order History</span>
        </Link>

        <Link href="/dashboard/compliance" className={getLinkStyle('/dashboard/compliance')}>
          <Shield className={getIconStyle('/dashboard/compliance')} />
          <span className="text-[13.5px]">Compliance</span>
        </Link>
      </nav>
    </aside>
  );
};

export default NewSidebar;