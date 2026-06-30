"use client";

import React, { useState, useEffect } from 'react';
import { Check, ChevronDown, Pencil, Loader2, X } from "lucide-react";

// Types for the data
interface UserData {
  name: string;
  email: string;
  phone?: string;
  address?: string;
}

interface VirtualMailboxData {
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
}

interface CompanyData {
  name: string;
  status: string;
  type: string;
  state?: string;
  ein?: string;
  formationDate?: string;
  entityId?: string;
  naicsCode?: string;
  naicsSubcode?: string;
  address?: string;
}

interface OrderData {
  id: number;
  company: string;
  type: string;
  status: string;
  state: string;
  date: string;
  amount: number;
  customer: string;
}

interface DirectorsOfficers {
  name: string;
  address: string;
  title: string;
}

interface CompanyDataExtended extends CompanyData {
  date?: string;
}

// Accordion Item Props
interface AccordionItemProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const AccordionItem = ({ title, isOpen, onToggle, children }: AccordionItemProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-[22px] shadow-lg overflow-hidden mb-8 transition-all duration-300">
      <div 
        onClick={onToggle}
        className="flex items-center justify-between px-10 py-10 cursor-pointer hover:bg-gray-50/80 transition-colors"
      >
        <div className="flex items-center gap-5">
          <div className="w-8 h-8 rounded-full bg-[#10B981] flex items-center justify-center shrink-0 shadow-sm">
            <Check className="w-5 h-5 text-white" strokeWidth={4} />
          </div>
          <h3 className="text-[18px] font-bold text-[#111827] tracking-tight">
            {title}
          </h3>
        </div>
        <div className={`w-12 h-12 rounded-full bg-white flex items-center justify-center border border-gray-100 shadow-sm transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <ChevronDown className="w-6 h-6 text-gray-500" />
        </div>
      </div>

      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-12 pb-16 pt-6 border-t border-gray-50">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function CompanyInfo() {
  const [loading, setLoading] = useState(true);
  const [openSection, setOpenSection] = useState<string>("Company Info");
  
// Data states
  const [userData, setUserData] = useState<UserData | null>(null);
  const [companyData, setCompanyData] = useState<CompanyData | null>(null);
  const [orders, setOrders] = useState<OrderData[]>([]);
  const [directors, setDirectors] = useState<DirectorsOfficers[]>([]);
  const [virtualMailbox, setVirtualMailbox] = useState<VirtualMailboxData | null>(null);
  const [registeredAgent, setRegisteredAgent] = useState<{agentName: string; agentEmail: string; agentPhone: string; state: string; status: string} | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // Edit modal states
  const [showEditModal, setShowEditModal] = useState(false);
  const [editForm, setEditForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  // Helper function to get userId
  const getUserId = (): number | null => {
    // Priority 1: From auth context (if available)
    if (typeof window !== 'undefined') {
      const localUserId = localStorage.getItem('userId');
      if (localUserId) {
        return parseInt(localUserId);
      }
      
      // Priority 2: From JWT token
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
          console.error('[CompanyInfo] JWT decode error:', e);
        }
      }
    }
    return null;
  };

  // Fetch all data from server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = getUserId();
        
        if (!userId) {
          setError('Please login to view company info');
          setLoading(false);
          return;
        }

console.log('[CompanyInfo] Fetching data for userId:', userId);

        // Fetch orders first (needed for fallbacks)
        const ordersRes = await fetch(`/api/orders?userId=${userId}`);
        const ordersJson = await ordersRes.json();
        
        let firstCustomer = '';
        if (ordersJson.success && ordersJson.orders && ordersJson.orders.length > 0) {
          setOrders(ordersJson.orders);
          firstCustomer = ordersJson.orders[0].customer;
          
          // Set first order as primary company if available
          setCompanyData({
            name: ordersJson.orders[0].company || 'My Company',
            status: ordersJson.orders[0].status || 'Pending',
            type: ordersJson.orders[0].type || 'Business',
            state: ordersJson.orders[0].state,
          });
          
          // Set directors from orders
          const uniqueDirectors: Record<string, DirectorsOfficers> = {} as Record<string, DirectorsOfficers>;
          ordersJson.orders.forEach((order: OrderData) => {
            if (order.customer && !uniqueDirectors[order.customer]) {
              uniqueDirectors[order.customer] = {
                name: order.customer,
                address: '',
                title: 'Director',
              };
            }
          });
          setDirectors(Object.values(uniqueDirectors).slice(0, 5));
        }

// Get user data from company-data API (has name and email)
        try {
          const compDataRes = await fetch(`/api/company-data?userId=${userId}`);
          if (compDataRes.ok) {
            const compDataJson = await compDataRes.json();
            if (compDataJson.success && compDataJson.user) {
              const user = compDataJson.user;
              setUserData({
                name: user.name || firstCustomer || 'User',
                email: user.email || '',
                address: '',
                phone: ''
              });
              console.log('[CompanyInfo] User from company-data:', user.name, user.email);
            }
          }
        } catch (cdError) {
          console.log('[CompanyInfo] company-data API failed, using order data');
          setUserData({
            name: firstCustomer || 'User',
            email: '',
            address: '',
            phone: ''
          });
        }

// Fetch Virtual Mailbox for company address
        try {
          const vmRes = await fetch(`/api/virtual-mailboxes?userId=${userId}`);
          const vmJson = await vmRes.json();
          
if (vmJson.success && vmJson.virtualMailboxes && vmJson.virtualMailboxes.length > 0) {
            const primaryVm = vmJson.virtualMailboxes[0];
            setVirtualMailbox({
              streetAddress: primaryVm.streetAddress || '',
              city: primaryVm.city || '',
              state: primaryVm.state || '',
              zipCode: primaryVm.zipCode || '',
            });
          }
        } catch (vmError) {
          console.error('[CompanyInfo] Error fetching virtual mailbox:', vmError);
        }

        // Fetch Registered Agent for Agent Info
        try {
          const agentRes = await fetch(`/api/register-agent?userId=${userId}`);
          const agentJson = await agentRes.json();
          
          if (agentJson.success && agentJson.registeredAgents && agentJson.registeredAgents.length > 0) {
            const primaryAgent = agentJson.registeredAgents[0];
            setRegisteredAgent({
              agentName: primaryAgent.agentName || '',
              agentEmail: primaryAgent.agentEmail || '',
              agentPhone: primaryAgent.agentPhone || '',
              state: primaryAgent.state || '',
              status: primaryAgent.status || ''
            });
            console.log('[CompanyInfo] Registered Agent:', primaryAgent.agentName);
          }
        } catch (agentError) {
          console.error('[CompanyInfo] Error fetching registered agent:', agentError);
        }

        setLoading(false);
      } catch (error) {
        console.error('[CompanyInfo] Error fetching data:', error);
        setError('Failed to load company data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggle = (section: string) => setOpenSection(openSection === section ? "" : section);

  // Get status badge color
  const getStatusColor = (status: string) => {
    const s = status?.toLowerCase();
    if (s === 'completed' || s === 'paid' || s === 'active' || s === 'good standing') {
      return 'bg-green-50 text-green-700';
    }
    return 'bg-orange-50 text-orange-700';
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-16 bg-[#F9FAFB] min-h-screen font-sans flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-orange-500 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">Loading company information...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto p-16 bg-[#F9FAFB] min-h-screen font-sans flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-2xl shadow-lg border border-red-200">
          <p className="text-red-600 text-lg font-semibold">{error}</p>
          <p className="text-gray-500 mt-2">Please login to view your company information.</p>
        </div>
      </div>
    );
  }

  const primaryOrder = orders[0];
  const companyName = companyData?.name || primaryOrder?.company || 'My Company';
  const companyStatus = companyData?.status || primaryOrder?.status || 'Pending';
  const companyState = companyData?.state || primaryOrder?.state || 'N/A';

  return (
    <div className="max-w-7xl mx-auto p-16 bg-[#F9FAFB] min-h-screen font-sans">
      
      {/* 1.j Company Info */}
      <AccordionItem title="Company Info" isOpen={openSection === "Company Info"} onToggle={() => toggle("Company Info")}>
        <div className="space-y-10">
          <div className="text-[20px] font-black text-[#111827] mb-8 uppercase tracking-widest">
            {companyName}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-y-7">
<span className="text-[16px] font-bold text-[#111827]">Company Address</span>
            <span className="text-[16px] text-[#4B5563] font-semibold">
{virtualMailbox ? `${virtualMailbox.streetAddress}, ${virtualMailbox.state} ${virtualMailbox.zipCode}` : (userData?.address || 'N/A')}
            </span>
            
            <span className="text-[16px] font-bold text-[#111827]">State Status</span>
            <span className={`text-[16px] text-[#4B5563] font-bold bg-green-50 px-4 py-1.5 rounded-full w-fit ${getStatusColor(companyStatus)}`}>
              {companyStatus}
            </span>
            
            <span className="text-[16px] font-bold text-[#111827]">Naics Code</span>
            <span className="text-[16px] text-[#4B5563] font-semibold">Educational Services (61)</span>

            <span className="text-[16px] font-bold text-[#111827]">Naics Subcode</span>
            <span className="text-[16px] text-[#4B5563] font-semibold">Educational Support Services (611710)</span>

            <span className="text-[16px] font-bold text-[#111827]">Formation State</span>
            <span className="text-[16px] text-[#4B5563] font-semibold">{companyState}</span>

            <span className="text-[16px] font-bold text-[#111827]">Entity Type</span>
            <span className="text-[16px] text-[#4B5563] font-semibold">{primaryOrder?.type || 'LLC'}</span>

            <span className="text-[16px] font-bold text-[#111827]">Formation Date</span>
            <span className="text-[16px] text-[#4B5563] font-semibold">{primaryOrder?.date || 'N/A'}</span>

            <span className="text-[16px] font-bold text-[#111827]">Entity ID</span>
            <span className="text-[16px] text-[#4B5563] font-semibold">{primaryOrder?.id || 'N/A'}</span>

            <span className="text-[16px] font-bold text-[#111827]">EIN (Tax ID Number)</span>
            <span className="text-[16px] text-[#4B5563] font-medium">N/A</span>
          </div>
        </div>
      </AccordionItem>

      {/* 2. Contact Info */}
      <AccordionItem title="Contact Info" isOpen={openSection === "Contact Info"} onToggle={() => toggle("Contact Info")}>
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-y-7 border-b border-gray-50 pb-12">
            <span className="text-[16px] font-bold text-[#111827]">Name</span>
            <span className="text-[16px] text-[#4B5563] font-semibold">{userData?.name || 'N/A'}</span>

<span className="text-[16px] font-bold text-[#111827]">Mailing Address</span>
            <span className="text-[16px] text-[#4B5563] font-semibold">
{virtualMailbox 
                ? `${virtualMailbox.streetAddress}, ${virtualMailbox.state} ${virtualMailbox.zipCode}`
                : (userData?.address || 'N/A')}
            </span>
            
            <span className="text-[16px] font-bold text-[#111827]">Email Address</span>
            <span className="text-[16px] text-[#4B5563] font-semibold">{userData?.email || 'N/A'}</span>
            
            <span className="text-[16px] font-bold text-[#111827]">Mobile Phone</span>
            <span className="text-[16px] text-[#4B5563] font-semibold">{userData?.phone || 'N/A'}</span>
          </div>
<button 
            onClick={() => {
              setEditForm({
                name: userData?.name || '',
                email: userData?.email || '',
                phone: userData?.phone || '',
                address: userData?.address || ''
              });
              setShowEditModal(true);
              setSaveSuccess(false);
              setSaveError(null);
            }}
            className="mt-8 flex items-center gap-4 bg-[#FFF5F2] text-[#FF5722] px-10 py-5 rounded-2xl text-[16px] font-black shadow-md hover:scale-105 transition-all"
          >
            <Pencil className="w-5 h-5" /> Edit Contact Info
          </button>
        </div>
      </AccordionItem>

{/* 3. Agent Info - Now shows Registered Agent */}
      <AccordionItem title="Agent Info" isOpen={openSection === "Agent Info"} onToggle={() => toggle("Agent Info")}>
        <div className="space-y-3">
          <div className="text-[18px] text-[#111827] font-black uppercase">{registeredAgent?.agentName || 'N/A'}</div>
          <div className="text-[16px] text-[#4B5563] font-semibold">
            {registeredAgent ? `${registeredAgent.agentEmail} • ${registeredAgent.state} • ${registeredAgent.status}` : 'No registered agent found'}
          </div>
        </div>
      </AccordionItem>

{/* 4. Director Info - Shows user name and email from user data */}
      <AccordionItem title="Director Info" isOpen={openSection === "Director Info"} onToggle={() => toggle("Director Info")}>
        <div className="space-y-12">
          {/* Always show the logged-in user as director 1 with their email */}
          {userData?.name && (
            <div className="flex items-start gap-8 group">
              <div className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-[18px] font-black shrink-0 text-gray-400 group-hover:border-[#10B981] group-hover:text-[#10B981] transition-colors shadow-sm">
                1
              </div>
              <div className="text-[17px] font-bold">
                <div className="text-[#111827] font-black text-[18px]">{userData.name}</div>
                <div className="text-[#4B5563] mt-2 leading-relaxed">
                  {userData.email || 'N/A'}
                </div>
              </div>
            </div>
          )}
          
          {/* Then show other directors from orders if any */}
          {directors.length > 1 && directors.slice(1).map((director, index) => (
            <div key={index + 1} className="flex items-start gap-8 group">
              <div className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-[18px] font-black shrink-0 text-gray-400 group-hover:border-[#10B981] group-hover:text-[#10B981] transition-colors shadow-sm">
                {index + 2}
              </div>
              <div className="text-[17px] font-bold">
                <div className="text-[#111827] font-black text-[18px]">{director.name}</div>
                <div className="text-[#4B5563] mt-2 leading-relaxed">
                  {director.address || 'N/A'}
                </div>
              </div>
            </div>
          ))}
          
          {!userData?.name && directors.length === 0 && (
            <p className="text-gray-500">No directors found</p>
          )}
        </div>
      </AccordionItem>

{/* 5. Officers Info */}
      <AccordionItem title="Officers Info" isOpen={openSection === "Officers Info"} onToggle={() => toggle("Officers Info")}>
        <div className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-y-8 text-[16px]">
          <span className="font-bold text-[#111827]">President</span>
          <span className="text-[#4B5563] font-semibold">{userData?.name || 'N/A'}</span>
          
          <span className="font-bold text-[#111827]">Secretary</span>
          <span className="text-[#4B5563] font-semibold">{userData?.name || 'N/A'}</span>

          <span className="font-bold text-[#111827]">Treasurer</span>
          <span className="text-[#4B5563] font-semibold">{userData?.name || 'N/A'}</span>
          
          <span className="font-bold text-[#111827]">Vice President</span>
          <span className="text-[#4B5563] font-bold">{directors[1]?.name || 'N/A'}</span>
        </div>
      </AccordionItem>

      {/* Edit Contact Info Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100">
              <h2 className="text-[22px] font-black text-[#111827]">Edit Contact Info</h2>
              <button 
                onClick={() => setShowEditModal(false)}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            {/* Modal Body */}
            <div className="px-8 py-6 space-y-5">
              {saveSuccess && (
                <div className="bg-green-50 text-green-700 px-4 py-3 rounded-xl text-[14px] font-semibold">
                  ✓ Contact info updated successfully!
                </div>
              )}
              
              {saveError && (
                <div className="bg-red-50 text-red-700 px-4 py-3 rounded-xl text-[14px] font-semibold">
                  {saveError}
                </div>
              )}
              
              <div>
                <label className="block text-[14px] font-bold text-[#111827] mb-2">Name</label>
                <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                  className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-[15px] focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-[14px] font-bold text-[#111827] mb-2">Email Address</label>
                <input
                  type="email"
                  value={editForm.email}
                  onChange={(e) => setEditForm({...editForm, email: e.target.value})}
                  className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-[15px] focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-[14px] font-bold text-[#111827] mb-2">Mobile Phone</label>
                <input
                  type="tel"
                  value={editForm.phone}
                  onChange={(e) => setEditForm({...editForm, phone: e.target.value})}
                  className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-[15px] focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              
              <div>
                <label className="block text-[14px] font-bold text-[#111827] mb-2">Mailing Address</label>
                <input
                  type="text"
                  value={editForm.address}
                  onChange={(e) => setEditForm({...editForm, address: e.target.value})}
                  className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-[15px] focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="Your mailing address"
                />
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="flex gap-4 px-8 py-6 border-t border-gray-100">
              <button 
                onClick={() => setShowEditModal(false)}
                className="flex-1 px-6 py-3.5 border-2 border-gray-200 rounded-xl text-[15px] font-bold text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={async () => {
                  const userId = getUserId();
                  if (!userId) {
                    setSaveError('Please login to update');
                    return;
                  }
                  
                  setSaving(true);
                  setSaveError(null);
                  
                  try {
                    const res = await fetch('/api/user-profile', {
                      method: 'PUT',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        userId,
                        name: editForm.name,
                        email: editForm.email,
                        phone: editForm.phone,
                        address: editForm.address
                      })
                    });
                    
                    const data = await res.json();
                    
                    if (data.success) {
                      setSaveSuccess(true);
                      setUserData({
                        name: editForm.name,
                        email: editForm.email,
                        phone: editForm.phone,
                        address: editForm.address
                      });
                      
                      // Close modal after 1.5 seconds
                      setTimeout(() => {
                        setShowEditModal(false);
                        setSaveSuccess(false);
                      }, 1500);
                    } else {
                      setSaveError(data.error || 'Failed to update');
                    }
                  } catch (err) {
                    setSaveError('Something went wrong');
                    console.error(err);
                  } finally {
                    setSaving(false);
                  }
                }}
                disabled={saving}
                className="flex-1 px-6 py-3.5 bg-orange-500 text-white rounded-xl text-[15px] font-bold hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
