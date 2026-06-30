"use client";

import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Plus, Clock, CheckCircle2, AlertCircle, Loader2, Send, ArrowLeft, X } from 'lucide-react';

interface Ticket {
  id: number;
  userId?: number;
  subject: string;
  description: string;
  status: string;
  priority: string;
  createdAt: string;
}

interface Message {
  id: number;
  ticketId: number;
  message: string;
  sender: string;
  createdAt: string;
  senderName?: string;
}

export default function SupportPage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [userId, setUserId] = useState<number | null>(null);
  
  // Chat states
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    subject: '',
    description: '',
    priority: 'Medium'
  });

useEffect(() => {
    // Get userId from multiple sources
    const getUserId = (): number | null => {
      // Priority 1: From localStorage
      const storedUserId = localStorage.getItem('userId');
      if (storedUserId) return parseInt(storedUserId);
      
      // Priority 2: From JWT token
      const jwtToken = localStorage.getItem('jwtToken');
      if (jwtToken) {
        try {
          const parts = jwtToken.split('.');
          if (parts.length >= 2) {
            const base64Url = parts[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(
              atob(base64).split('').map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join('')
            );
            const payload = JSON.parse(jsonPayload);
            return payload.id || payload.userId || null;
          }
        } catch (e) {
          console.log('[Support] JWT decode error:', e);
        }
      }
      
      // Priority 3: From vcFillingName (fallback for demo)
      const storedName = localStorage.getItem('vcFillingName');
      if (storedName) {
        // Generate consistent ID from name for demo users
        return storedName.length * 1000;
      }
      
      return null;
    };
    
    const userIdFromStorage = getUserId();
    if (userIdFromStorage) {
      setUserId(userIdFromStorage);
    }
    setLoading(false);
  }, []);

useEffect(() => {
    // Always fetch tickets, even without userId
    fetchTickets();
  }, [userId]);

  useEffect(() => {
    if (messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

const fetchTickets = async () => {
    try {
      // Try web tickets API (which uses database)
      const url = '/api/tickets';
      console.log('[Support] Fetching from:', url);
      const res = await fetch(url);
      
      let data;
      try {
        data = await res.json();
      } catch (parseError) {
        console.log('[Support] API returned non-JSON, using localStorage');
        throw new Error('Non-JSON response');
      }
      
      console.log('[Support] Received tickets:', data);
      
      // Use ALL tickets from database without filtering
      if (data.tickets && data.tickets.length > 0) {
        setTickets(data.tickets.map((t: any) => ({
          id: t.id,
          userId: t.userId,
          subject: t.subject,
          description: t.description,
          status: t.status,
          priority: t.priority,
          createdAt: t.createdAt
        })));
      } else {
        // Fallback to localStorage - show ALL tickets
        const stored = localStorage.getItem('vc_support_tickets');
        if (stored) {
          setTickets(JSON.parse(stored));
        }
      }
    } catch (error) {
      console.error('Error fetching tickets:', error);
      // Fallback to localStorage on error
      try {
        const stored = localStorage.getItem('vc_support_tickets');
        if (stored) {
          setTickets(JSON.parse(stored));
        }
      } catch (e) {
        console.error('Error reading localStorage:', e);
      }
    }
  };

const fetchMessages = async (ticketId: number) => {
    setLoadingMessages(true);
    setMessages([]); // Clear old messages first
    try {
      // Fetch from API/database only - clean fresh messages
      const res = await fetch(`/api/support-tickets?ticketId=${ticketId}`);
      const data = await res.json();
      if (data.messages) {
        setMessages(data.messages);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
      setMessages([]);
    } finally {
      setLoadingMessages(false);
    }
  };

const handleSelectTicket = (ticket: Ticket) => {
    // Just use the ticket directly - no API calls
    setSelectedTicket(ticket);
    fetchMessages(ticket.id);
  };

  const handleBackToList = () => {
    setSelectedTicket(null);
    setMessages([]);
  };

const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedTicket || !userId) return;

    setSendingMessage(true);
    try {
      // Send to API (database)
      const res = await fetch('/api/support-tickets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          ticketId: selectedTicket.id,
          message: newMessage,
          sender: 'user'
        })
      });
      
      const data = await res.json();
      if (data.success) {
        setNewMessage('');
        
        // Refresh messages from database
        fetchMessages(selectedTicket.id);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setSendingMessage(false);
    }
  };

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.subject || !formData.description) return;

    setSubmitting(true);
    let createdTicket: Ticket | null = null;
    
    // First try to create via API (database)
    try {
      const res = await fetch('/api/tickets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: userId,
          subject: formData.subject,
          description: formData.description,
          priority: formData.priority
        })
      });
      const data = await res.json();
      if (data.ticket) {
        console.log('[Support] Ticket created in database:', data.ticket);
        createdTicket = {
          id: data.ticket.id,
          userId: data.ticket.userId,
          subject: data.ticket.subject,
          description: data.ticket.description,
          status: data.ticket.status,
          priority: data.ticket.priority,
          createdAt: data.ticket.createdAt
        };
      }
    } catch (apiError) {
      console.log('[Support] API error, using localStorage fallback:', apiError);
    }

    // Fallback to localStorage if API failed or no ticket created
    if (!createdTicket) {
      console.log('[Support] Using localStorage fallback for ticket');
      createdTicket = {
        id: Date.now(),
        userId: userId || undefined,
        subject: formData.subject,
        description: formData.description,
        status: 'Open',
        priority: formData.priority,
        createdAt: new Date().toISOString()
      };
      const stored = localStorage.getItem('vc_support_tickets');
      const existingTickets: Ticket[] = stored ? JSON.parse(stored) : [];
      existingTickets.push(createdTicket);
      localStorage.setItem('vc_support_tickets', JSON.stringify(existingTickets));
    }

    // Update tickets list with the created ticket
    if (createdTicket) {
      setTickets(prev => [createdTicket!, ...prev]);
    }
    
    setShowForm(false);
    setFormData({ subject: '', description: '', priority: 'Medium' });
    setSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'open':
        return 'bg-green-100 text-green-700';
      case 'closed':
        return 'bg-gray-100 text-gray-700';
      case 'in progress':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority?.toLowerCase()) {
      case 'high':
        return 'text-red-600';
      case 'medium':
        return 'text-orange-600';
      case 'low':
        return 'text-gray-600';
      default:
        return 'text-gray-600';
    }
  };

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return dateStr || 'N/A';
    }
  };

  const formatMessageTime = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return '';
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#F9FAFB] p-4 md:p-12 font-sans flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
      </main>
    );
  }

  // Chat view
  if (selectedTicket) {
    return (
      <main className="min-h-screen bg-[#F9FAFB] p-4 md:p-12 font-sans">
        <div className="max-w-4xl mx-auto h-[calc(100vh-8rem)] bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
          
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <button onClick={handleBackToList} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div>
                <h2 className="font-bold text-gray-900">{selectedTicket.subject}</h2>
                <p className="text-xs text-gray-500">Ticket #{selectedTicket.id}</p>
              </div>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-bold ${getStatusColor(selectedTicket.status)}`}>
              {selectedTicket.status}
            </span>
          </div>

{/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {loadingMessages ? (
              <div className="flex items-center justify-center h-full">
                <Loader2 className="w-6 h-6 animate-spin text-orange-500" />
              </div>
            ) : messages.length === 0 ? (
              <div className="text-center py-8">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p className="text-gray-500">No messages yet. Start the conversation!</p>
              </div>
            ) : (
              <>
                {/* Chat messages only - description shown in header instead */}
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`rounded-2xl p-3 max-w-[80%] ${
                      msg.sender === 'user' 
                        ? 'bg-orange-500 text-white rounded-tr-md' 
                        : 'bg-gray-100 text-gray-800 rounded-tl-md'
                    }`}>
                      <p className="text-sm">{msg.message}</p>
                      <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-orange-200' : 'text-gray-400'}`}>
                        {formatMessageTime(msg.createdAt)}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

{/* Message Input - Disabled when ticket is Closed */}
          {selectedTicket.status === 'Closed' ? (
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <div className="flex items-center justify-center py-4 text-gray-400">
                <p className="text-sm font-bold">This ticket is closed - No more messages can be sent</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  disabled={sendingMessage || !newMessage.trim()}
                  className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-xl transition-colors disabled:opacity-50"
                >
                  {sendingMessage ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </div>
            </form>
          )}

        </div>
      </main>
    );
  }

  // Ticket list view
  return (
    <main className="min-h-screen bg-[#F9FAFB] p-4 md:p-12 font-sans text-[#111827]">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MessageCircle className="w-8 h-8 text-gray-800" />
            <h1 className="text-2xl font-bold">Support Tickets</h1>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-colors"
          >
            <Plus className="w-5 h-5" />
            New Ticket
          </button>
        </div>

        {/* New Ticket Form */}
        {showForm && (
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
            <h2 className="text-xl font-bold mb-6">Create New Ticket</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Brief description of your issue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Priority
                </label>
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="Low">Low - General Question</option>
                  <option value="Medium">Medium - Issue Affecting Work</option>
                  <option value="High">High - Urgent/Blocker</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  placeholder="Describe your problem in detail..."
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors disabled:opacity-50"
                >
                  {submitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      Submit Ticket
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-8 rounded-xl transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

{/* Tickets List */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          {tickets.length === 0 ? (
            <div className="p-12 text-center">
              <MessageCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <h3 className="text-lg font-bold text-gray-700 mb-2">No tickets yet</h3>
              <p className="text-gray-500">Create a new ticket if you need help with anything.</p>
              <p className="text-xs text-gray-400 mt-4">Debug: userId={userId}, tickets loaded from API/localStorage</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {tickets.map((ticket) => (
                <div 
                  key={ticket.id} 
                  onClick={() => handleSelectTicket(ticket)}
                  className="p-6 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <h3 className="font-bold text-gray-900">{ticket.subject}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${getStatusColor(ticket.status)}`}>
                        {ticket.status}
                      </span>
                    </div>
                    <span className={`text-xs font-bold ${getPriorityColor(ticket.priority)}`}>
                      {ticket.priority}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{ticket.description}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>Created: {formatDate(ticket.createdAt)}</span>
                    <span className="text-gray-300">|</span>
                    <span>Ticket #{ticket.id}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </main>
  );
}
