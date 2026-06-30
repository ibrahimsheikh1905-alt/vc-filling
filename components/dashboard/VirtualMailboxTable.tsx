"use client";

import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Calendar, FileText, X, Eye, File, Clock } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAuth } from '@/contexts/auth';

// Type for virtual mailbox data
interface VirtualMailbox {
  id: number;
  companyName: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  price: number;
  status: string;
  startDate: string;
  renewalDate: string | null;
}

// Helper to decode JWT and get userId directly from localStorage
const getUserIdFromStorage = (): number | null => {
  try {
    const jwtToken = localStorage.getItem('jwtToken');
    if (!jwtToken) return null;
    
    const parts = jwtToken.split('.');
    if (parts.length < 2) return null;
    
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
  } catch (error) {
    console.error('Error decoding JWT:', error);
    return null;
  }
};

// Type for mail item
interface MailItem {
  id: number;
  type: string;
  sender: string;
  subject: string;
  receivedDate: string;
  status: string;
  details?: string;
}

const VirtualMailboxTable = () => {
  const { userId: authUserId, isAuthenticated } = useAuth();
  const [mailboxes, setMailboxes] = useState<VirtualMailbox[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Modal states
  const [isMailListModalOpen, setIsMailListModalOpen] = useState(false);
  const [selectedMailbox, setSelectedMailbox] = useState<VirtualMailbox | null>(null);
  const [mailItems, setMailItems] = useState<MailItem[]>([]);
  const [mailListLoading, setMailListLoading] = useState(false);
  const [isMailDetailModalOpen, setIsMailDetailModalOpen] = useState(false);
  const [selectedMail, setSelectedMail] = useState<MailItem | null>(null);

  useEffect(() => {
    const fetchMailboxes = async () => {
      // Try to get userId from auth context OR from localStorage directly
      let currentUserId = authUserId;
      
      // If auth context doesn't have userId, try to get from localStorage
      if (!currentUserId) {
        currentUserId = getUserIdFromStorage();
        console.log('VirtualMailboxTable: userId from localStorage:', currentUserId);
      } else {
        console.log('VirtualMailboxTable: userId from auth context:', currentUserId);
      }
      
      if (!currentUserId) {
        console.log('VirtualMailboxTable: No userId found, cannot fetch mailboxes');
        setLoading(false);
        return;
      }

try {
        // Use the Next.js API route (relative path works since both are on same origin)
        // The API is now running on same port as the web app (3000)
        const API_URL = ''; // Empty string = same origin
        console.log('VirtualMailboxTable: Fetching from API:', `/api/virtual-mailboxes?userId=${currentUserId}`);
        
        const response = await fetch(`${API_URL}/api/virtual-mailboxes?userId=${currentUserId}`);
        const data = await response.json();
        
        console.log('VirtualMailboxTable: API response:', data);
        
        if (data.virtualMailboxes && Array.isArray(data.virtualMailboxes)) {
          setMailboxes(data.virtualMailboxes);
        } else if (data.data && Array.isArray(data.data)) {
          // Alternative response format
          setMailboxes(data.data);
        } else {
          setMailboxes([]);
        }
      } catch (err) {
        console.error('Error fetching mailboxes:', err);
        setError('Failed to load mailboxes');
        setMailboxes([]);
      } finally {
        setLoading(false);
      }
    };

    // Wait for auth to be checked if it's still loading
    if (!isAuthenticated && authUserId === null) {
      // Give a small delay to let auth initialize
      const timer = setTimeout(() => {
        fetchMailboxes();
      }, 500);
      return () => clearTimeout(timer);
    } else {
      fetchMailboxes();
    }
  }, [authUserId, isAuthenticated]);

  // Format date for display
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'N/A';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  // Get status badge class
  const getStatusBadge = (status: string) => {
    const statusLower = status?.toLowerCase() || '';
    if (statusLower === 'active') {
      return 'bg-emerald-50 text-emerald-700 border-emerald-100';
    } else if (statusLower === 'expired') {
      return 'bg-rose-50 text-rose-700 border-rose-100';
    }
    return 'bg-gray-50 text-gray-600 border-gray-100';
  };

  if (loading) {
    return (
      <div className="w-full max-w-full bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="flex items-center gap-2 p-3 bg-gray-50/50 border-b">
          <Mail className="w-4 h-4 text-[#FF5722]" />
          <h2 className="text-sm font-black uppercase tracking-tight text-gray-800">Virtual Mailbox</h2>
        </div>
        <div className="flex items-center justify-center h-32">
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-full bg-white rounded-xl shadow-sm border overflow-hidden">
      {/* Header section */}
      <div className="flex items-center gap-2 p-3 bg-gray-50/50 border-b">
        <Mail className="w-4 h-4 text-[#FF5722]" />
        <h2 className="text-sm font-black uppercase tracking-tight text-gray-800">Virtual Mailbox</h2>
      </div>

      <div className="p-0">
        <Table>
<TableHeader>
            <TableRow className="bg-gray-50/30">
              {['State', 'Document Type', 'Received Date', 'View', 'Status'].map((h) => (
                <TableHead key={h} className="h-8 px-4 font-semibold text-gray-600 text-[10px] uppercase">
                  {h}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {mailboxes.length === 0 ? (
              <TableRow>
<TableCell colSpan={5} className="h-20 text-center">
                  <div className="flex flex-col items-center justify-center text-gray-400 scale-90">
                    <Mail className="w-6 h-6 mb-1 opacity-20" />
                    <p className="text-xs font-medium">Your mailbox is empty</p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              mailboxes.map((mailbox) => (
                <TableRow key={mailbox.id} className="hover:bg-gray-50/50">
                  <TableCell className="px-4 py-3">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-gray-300 mt-0.5 shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-800 text-sm">{mailbox.state}</div>
                        <div className="text-xs text-gray-500">{mailbox.companyName}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <FileText className="w-4 h-4 text-gray-400" />
                      <span>Mail Scanning</span>
                    </div>
                  </TableCell>
<TableCell className="px-4 py-3">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>{formatDate(mailbox.startDate)}</span>
                    </div>
                  </TableCell>
<TableCell className="px-4 py-3">
<button 
onClick={async () => {
                        setSelectedMailbox(mailbox);
                        setIsMailListModalOpen(true);
                        setMailListLoading(true);
                        
                        // Get userId from auth context or localStorage
                        let currentUserId = authUserId;
                        if (!currentUserId) {
                          currentUserId = getUserIdFromStorage();
                        }
                        
                        // Fetch inbox messages from API - filter by userId and mailboxId
                        try {
                          const params = new URLSearchParams();
                          if (currentUserId) params.append('userId', String(currentUserId));
                          params.append('mailboxId', String(mailbox.id));
                          
                          const response = await fetch(`/api/inbox?${params.toString()}`);
                          const data = await response.json();
                          
                          console.log('Inbox API response:', data);
                          
                          if (data.messages && data.messages.length > 0) {
                            // Transform inbox messages to mail items format
                            const inboxMessages = data.messages.map((msg: any) => ({
                              id: msg.id,
                              type: 'Mail',
                              sender: msg.sender || 'Admin',
                              subject: msg.subject,
                              receivedDate: msg.receivedAt || new Date().toISOString().split('T')[0],
                              status: msg.status === 'Read' ? 'Read' : 'Unread',
                              details: msg.message
                            }));
                            setMailItems(inboxMessages);
                          } else {
                            setMailItems([]);
                          }
                        } catch (err) {
                          console.error('Error fetching inbox:', err);
                          setMailItems([]);
                        } finally {
                          setMailListLoading(false);
                        }
                      }}
                      className="text-orange-600 hover:text-orange-700 text-xs font-medium underline"
                    >
                      View
                    </button>
                  </TableCell>
                  <TableCell className="px-4 py-3">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-semibold border ${getStatusBadge(mailbox.status)}`}>
                      {mailbox.status || 'Active'}
                    </span>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
</Table>
      </div>

      {/* Mail List Modal */}
      {isMailListModalOpen && selectedMailbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl max-h-[80vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div>
                <h3 className="text-xl font-black text-gray-800 uppercase">Mail List</h3>
                <p className="text-sm text-gray-500">{selectedMailbox.companyName} - {selectedMailbox.state}</p>
              </div>
              <button 
                onClick={() => setIsMailListModalOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Mail Items List */}
            <div className="p-4 overflow-y-auto max-h-[60vh]">
              {mailListLoading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
                </div>
              ) : mailItems.length === 0 ? (
                <div className="text-center py-12 text-gray-400">
                  <Mail className="w-12 h-12 mx-auto mb-2 opacity-30" />
                  <p className="text-sm">No mail received yet</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {mailItems.map((mail) => (
                    <div 
                      key={mail.id}
                      onClick={() => {
                        setSelectedMail(mail);
                        setIsMailDetailModalOpen(true);
                      }}
                      className={`p-4 rounded-xl border cursor-pointer hover:border-orange-300 hover:bg-orange-50 transition-all ${
                        mail.status === 'Unread' ? 'border-blue-200 bg-blue-50' : 'border-gray-200'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                              mail.status === 'Unread' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
                            }`}>
                              {mail.status}
                            </span>
                            <span className="text-xs text-gray-500">{mail.type}</span>
                          </div>
                          <p className="font-semibold text-gray-800 text-sm">{mail.subject}</p>
                          <p className="text-xs text-gray-500">From: {mail.sender}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-400">{formatDate(mail.receivedDate)}</p>
                          <Eye className="w-4 h-4 text-orange-500 mt-1" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mail Detail Modal */}
      {isMailDetailModalOpen && selectedMail && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div>
                <h3 className="text-lg font-black text-gray-800 uppercase">Mail Details</h3>
                <p className="text-sm text-gray-500">{selectedMail.subject}</p>
              </div>
              <button 
                onClick={() => setIsMailDetailModalOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Mail Content */}
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">From:</span>
                  <span className="font-semibold text-gray-800">{selectedMail.sender}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Date:</span>
                  <span className="font-semibold text-gray-800">{formatDate(selectedMail.receivedDate)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Type:</span>
                  <span className="font-semibold text-gray-800">{selectedMail.type}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Status:</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    selectedMail.status === 'Unread' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {selectedMail.status}
                  </span>
                </div>
                
                <div className="border-t border-gray-100 pt-4 mt-4">
                  <h4 className="text-sm text-gray-500 mb-2">Details:</h4>
                  <p className="text-gray-800 bg-gray-50 p-4 rounded-xl">{selectedMail.details}</p>
                </div>
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-100">
              <button 
                onClick={() => setIsMailDetailModalOpen(false)}
                className="w-full py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VirtualMailboxTable;
