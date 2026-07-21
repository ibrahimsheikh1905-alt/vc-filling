"use client";

import React, { useState, useEffect } from "react";
import { 
  Activity, Settings, Zap, AlertCircle, Mail, FolderOpen, 
  Tag, Building2, Users, Receipt, Shield, Bolt,
  FileText, LogOut, Loader2, MessageCircle
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/contexts/auth";

// Same brand gradient used across the landing page / NewSidebar
const LOGO_GRADIENT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]";
const LOGO_GRADIENT_TEXT =
  "bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)] bg-clip-text text-transparent";
const LOGO_GRADIENT_SOFT =
  "bg-[linear-gradient(90deg,rgba(36,78,182,0.10)_0%,rgba(43,147,201,0.10)_50%,rgba(51,209,204,0.10)_100%)]";

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { Logout, userId: authUserId } = useAuth();

  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState<{ name: string; email: string; status: string } | null>(null);
  const [companyData, setCompanyData] = useState<{ name: string; status: string; type: string } | null>(null);
  const [orderData, setOrderData] = useState<{ id: number; type: string; company: string; status: string; date: string } | null>(null);
  const [orderCount, setOrderCount] = useState<number>(0);
  const [pendingIssuesCount, setPendingIssuesCount] = useState<number>(0);

  const getUserId = (): number | null => {
    if (authUserId) return authUserId;
    
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      try {
        const parts = jwtToken.split('.');
        if (parts.length >= 2) {
          const base64Url = parts[1];
          const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          const jsonPayload = decodeURIComponent(
            atob(base64)
              .split('')
              .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
              .join('')
          );
          const payload = JSON.parse(jsonPayload);
          return payload.id || payload.userId || null;
        }
      } catch (e) {
        console.error('[Sidebar] JWT decode error:', e);
      }
    }
    
    const localUserId = localStorage.getItem('userId');
    if (localUserId) {
      return parseInt(localUserId);
    }
    
    return null;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = getUserId();
        
        if (!userId) {
          const storedName = localStorage.getItem("vcFillingName") || "User";
          const storedEmail = localStorage.getItem("userEmail") || "";
          setUserData({ name: storedName, email: storedEmail, status: "Active" });
          setLoading(false);
          return;
        }

        const res = await fetch(`/api/company-data?userId=${userId}`);
        const data = await res.json();

        if (data.success) {
          setUserData({
            name: data.user?.name || "User",
            email: data.user?.email || "",
            status: data.user?.status || "Active"
          });
          
          if (data.primaryCompany) {
            setCompanyData({
              name: data.primaryCompany.name,
              status: data.primaryCompany.status,
              type: data.primaryCompany.type
            });
          }
        } else {
          const storedName = localStorage.getItem("vcFillingName") || "User";
          const storedEmail = localStorage.getItem("userEmail") || "";
          setUserData({ name: storedName, email: storedEmail, status: "Active" });
        }
        
        try {
          const ordersRes = await fetch(`/api/orders?userId=${userId}`);
          const ordersData = await ordersRes.json();
          
          if (ordersData.success && ordersData.orders && ordersData.orders.length > 0) {
            setOrderCount(ordersData.orders.length);
            const latestOrder = ordersData.orders[0];
            setOrderData({
              id: latestOrder.id,
              type: latestOrder.type,
              company: latestOrder.company,
              status: latestOrder.status,
              date: latestOrder.date
            });
          }
        } catch (orderError) {
          console.error('[Sidebar] Error fetching orders:', orderError);
        }

        try {
          const issuesRes = await fetch(`/api/issues?userId=${userId}`);
          const issuesData = await issuesRes.json();
          
          if (issuesData.issues && Array.isArray(issuesData.issues)) {
            const pendingCount = issuesData.issues.filter((issue: any) => 
              issue.status === 'rejected'
            ).length;
            setPendingIssuesCount(pendingCount);
          }
        } catch (issuesError) {
          console.error('[Sidebar] Error fetching pending issues:', issuesError);
        }
      } catch (error) {
        console.error('[Sidebar] Error fetching data:', error);
        const storedName = localStorage.getItem("vcFillingName") || "User";
        const storedEmail = localStorage.getItem("userEmail") || "";
        setUserData({ name: storedName, email: storedEmail, status: "Active" });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [authUserId]);

  const userName = userData?.name || (typeof window !== "undefined" ? localStorage.getItem("vcFillingName") || "User" : "User");
  const userEmail = userData?.email || (typeof window !== "undefined" ? localStorage.getItem("userEmail") || "" : "");
  const userStatus = userData?.status || "Active";
  
  const getInitials = (name: string) => {
    if (!name) return "U";
    const words = name.trim().split(" ");
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  const handleLogout = async () => {
    await Logout();
  };

  const getLinkStyle = (path: string): string => {
    const isActive = pathname === path;
    // Keep the link itself visible, and apply the gradient only to the label text.
    // This prevents the whole active item from becoming white/transparent.
    return `flex items-center px-4 py-2.5 rounded-lg transition-all duration-300 group relative ${
      isActive
        ? `${LOGO_GRADIENT_SOFT} text-[#2B93C9] font-semibold shadow-sm
           before:absolute before:left-0 before:top-1/2 before:h-6 before:w-1
           before:-translate-y-1/2 before:rounded-r-full
           before:bg-[linear-gradient(180deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]
           [&_.nav-label]:bg-[linear-gradient(90deg,#244EB6_0%,#2B93C9_50%,#33D1CC_100%)]
           [&_.nav-label]:bg-clip-text [&_.nav-label]:text-transparent`
        : 'text-gray-600 hover:bg-[linear-gradient(90deg,rgba(36,78,182,0.06)_0%,rgba(43,147,201,0.06)_50%,rgba(51,209,204,0.06)_100%)] hover:text-[#2B93C9] font-medium'
    }`;
  };

  const getIconStyle = (path: string): string => {
    const isActive = pathname === path;
    return `w-5 h-5 mr-3 flex-shrink-0 transition-colors duration-300 ${
      isActive ? 'text-[#2B93C9]' : 'text-gray-400 group-hover:text-gray-600'
    }`;
  };

  if (loading) {
    return (
      <aside className="w-64 bg-white border-r border-gray-100 h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#2B93C9]" />
      </aside>
    );
  }

  return (
    <aside className="relative w-64 bg-white border-r border-gray-100 h-screen flex flex-col font-sans antialiased overflow-hidden">
      <div className="p-5 border-b border-gray-50">
        <div className="flex items-center space-x-3">
          <div className={`${LOGO_GRADIENT} w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-[#2B93C9]/25`}>
            {getInitials(userName)}
          </div>
          <div className="min-w-0">
            <h3 className="font-bold text-gray-900 text-[13px] leading-none truncate">{userName}</h3>
            <p className="text-gray-400 text-[11px] truncate mt-1">{userEmail}</p>
          </div>
        </div>
      </div>

      <nav className="scrollbar-hide flex-1 py-6 px-3 space-y-0.5 overflow-y-auto">
        <Link href="/dashboard" className={getLinkStyle('/dashboard')}>
          <Activity className={getIconStyle('/dashboard')} />
          <span className="nav-label text-[13.5px]">Dashboard</span>
        </Link>

        <Link href="/dashboard/settings" className={getLinkStyle('/dashboard/settings')}>
          <Settings className={getIconStyle('/dashboard/settings')} />
          <span className="nav-label text-[13.5px]">Settings</span>
        </Link>

        <div className="px-4 py-3 mt-6 mb-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400/80">ACTIONS</span>
        </div>

        <Link href="/dashboard/tasks" className={getLinkStyle('/dashboard/tasks')}>
          <Bolt className={getIconStyle('/dashboard/tasks')} />
          <span className="nav-label text-[13.5px]">My Tasks</span>
          <span className={`${LOGO_GRADIENT} ml-auto text-white text-[10px] font-bold rounded-md px-1.5 py-0.5 shadow-sm`}>3</span>
        </Link>

        <Link href="/dashboard/issues" className={getLinkStyle('/dashboard/issues')}>
          <AlertCircle className={getIconStyle('/dashboard/issues')} />
          <span className="nav-label text-[13.5px]">Pending Issue</span>
          {pendingIssuesCount > 0 && (
            <span className={`${LOGO_GRADIENT} ml-auto text-white text-[10px] font-bold rounded-md px-1.5 py-0.5 shadow-sm`}>
              {pendingIssuesCount}
            </span>
          )}
        </Link>

        <div className="px-4 py-3 mt-6 mb-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400/80">COMPANY DOCUMENTS</span>
        </div>

        <Link href="/dashboard/virtual-mailbox" className={getLinkStyle('/dashboard/virtual-mailbox')}>
          <Mail className={getIconStyle('/dashboard/virtual-mailbox')} />
          <span className="nav-label text-[13.5px]">Virtual Mailbox</span>
        </Link>

        <Link href="/dashboard/contracts" className={getLinkStyle('/dashboard/contracts')}>
          <FolderOpen className={getIconStyle('/dashboard/contracts')} />
          <span className="nav-label text-[13.5px] truncate">Business Contracts</span>
        </Link>

        <Link href="/dashboard/orders" className={getLinkStyle('/dashboard/orders')}>
          <Tag className={getIconStyle('/dashboard/orders')} />
          <span className="nav-label text-[13.5px]">Order Status</span>
        </Link>

        <Link href="/dashboard/company-info" className={getLinkStyle('/dashboard/company-info')}>
          <Building2 className={getIconStyle('/dashboard/company-info')} />
          <span className="nav-label text-[13.5px]">Company Info</span>
        </Link>

        <Link href="/dashboard/registered-agent" className={getLinkStyle('/dashboard/registered-agent')}>
          <Users className={getIconStyle('/dashboard/registered-agent')} />
          <span className="nav-label text-[13.5px]">Registered Agent</span>
        </Link>

        <Link href="/dashboard/226041533405" className={getLinkStyle('/dashboard/history')}>
          <Receipt className={getIconStyle('/dashboard/history')} />
          <span className="nav-label text-[13.5px]">Order History</span>
        </Link>

        <Link href="/dashboard/compliance" className={getLinkStyle('/dashboard/compliance')}>
          <Shield className={getIconStyle('/dashboard/compliance')} />
          <span className="nav-label text-[13.5px]">Compliance</span>
        </Link>

        <Link href="/dashboard/StateirsFilling" className={getLinkStyle('/dashboard/StateirsFilling')}>
          <FileText className={getIconStyle('/dashboard/StateirsFilling')} />
          <span className="nav-label text-[13.5px]">State & IRS Filing</span>
        </Link>

        <div className="px-4 py-3 mt-6 mb-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400/80">SUPPORT</span>
        </div>

        <Link href="/dashboard/support" className={getLinkStyle('/dashboard/support')}>
          <MessageCircle className={getIconStyle('/dashboard/support')} />
          <span className="nav-label text-[13.5px]">Support</span>
        </Link>

        <button
          onClick={handleLogout}
          className="flex items-center w-full px-4 py-2.5 mt-6 rounded-lg text-red-600 hover:bg-red-50 transition-all group"
        >
          <LogOut className="w-5 h-5 mr-3 flex-shrink-0 text-red-500 group-hover:text-red-600" />
          <span className="text-[13.5px] font-medium">Logout</span>
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
