"use client";

import React, { useEffect, useState } from 'react';
import { UserCircle, UserPlus, User, ArrowRight, HelpCircle, Loader2 } from "lucide-react";

interface RegisteredAgent {
  id: number;
  companyName: string;
  state: string;
  agentName: string;
  agentEmail: string;
  agentPhone?: string;
  agentAddress?: string;
  renewalDate?: string;
  status: string;
}

export default function RegisteredAgentDashboard() {
  const [agents, setAgents] = useState<RegisteredAgent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        // Get userId from localStorage (set by login flow)
        const userId = localStorage.getItem('userId');
        
        if (!userId) {
          setError('Please log in to view your registered agents');
          setLoading(false);
          return;
        }

        // Fetch registered agents for this user
        const res = await fetch(`/api/register-agent?userId=${userId}`, { 
          cache: 'no-store' 
        });
        const data = await res.json();

        if (data.registeredAgents) {
          setAgents(data.registeredAgents);
        }
      } catch (err) {
        console.error('Error fetching agents:', err);
        setError('Failed to load registered agents');
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);

  return (
    <div className="bg-[#F9FAFB] min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Middle Section - Registered Agent Table */}
        <div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <UserCircle className="w-5 h-5 text-gray-800" strokeWidth={2.5} />
              <h2 className="text-lg font-black text-gray-900 leading-tight">
                REGISTERED AGENT
              </h2>
            </div>
            <a href="#" className="text-sm font-bold text-gray-700 hover:text-gray-900 uppercase tracking-wide hover:underline flex items-center gap-1 ml-7">
              What is the role of a <span className="text-[#FF5722] font-bold">Registered Agent ?</span> <HelpCircle className="w-3.5 h-3.5 text-gray-500" />
            </a>
          </div>
          
          <div className="bg-white border border-gray-100 rounded-[24px] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              {loading ? (
                <div className="flex items-center justify-center py-16">
                  <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
                  <span className="ml-3 text-gray-500 font-bold">Loading agents...</span>
                </div>
              ) : error ? (
                <div className="py-12 text-center text-gray-500">
                  <p className="font-bold">{error}</p>
                </div>
              ) : agents.length === 0 ? (
                <div className="py-12 text-center text-gray-500">
                  <p className="font-bold">No registered agents found.</p>
                  <p className="text-sm mt-2">Order a service to get started!</p>
                </div>
              ) : (
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-5 text-left text-[11px] font-black uppercase tracking-widest text-gray-400">State</th>
                      <th className="px-6 py-5 text-left text-[11px] font-black uppercase tracking-widest text-gray-400">Agent Name</th>
                      <th className="px-6 py-5 text-left text-[11px] font-black uppercase tracking-widest text-gray-400">Agent Address</th>
                      <th className="px-6 py-5 text-left text-[11px] font-black uppercase tracking-widest text-gray-400">Renewal Date</th>
                      <th className="px-6 py-5 text-left text-[11px] font-black uppercase tracking-widest text-gray-400">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {agents.map((agent) => (
                      <tr key={agent.id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-6 py-8 font-bold text-gray-900">{agent.state}</td>
                        <td className="px-6 py-8 font-bold text-gray-900">{agent.agentName}</td>
<td className="px-6 py-8">
                          <div className="text-gray-500 font-medium leading-relaxed">
                            {agent.agentAddress || agent.agentEmail}<br />
                            {agent.agentPhone || ''}
                          </div>
                        </td>
                        <td className="px-6 py-8 font-bold text-gray-400">{agent.renewalDate || 'N/A'}</td>
                        <td className="px-6 py-8">
                          <span className={`text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                            agent.status === 'Active' 
                              ? 'bg-emerald-50 text-emerald-600' 
                              : 'bg-gray-100 text-gray-500'
                          }`}>
                            {agent.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Section - Action Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Card 1: New Service */}
          <div className="bg-white border border-gray-100 rounded-[24px] shadow-sm p-8 lg:p-10 transition-all hover:shadow-md">
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center">
                  <UserPlus className="w-7 h-7 text-[#FF5722]" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-black text-gray-900 leading-tight">
                  New Registered Agent Service
                </h3>
              </div>
              <p className="text-sm text-gray-400 font-medium mb-10 flex-1 leading-relaxed">
                Use to set up a new registered agent service for a new state.
              </p>
              <button onClick={() => window.location.href = '/dashboard/Registeragentform'} className="w-full bg-[#FF5722] hover:bg-[#F4511E] text-white font-black py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-orange-100 transition-all uppercase text-xs tracking-widest cursor-pointer">
                ORDER <ArrowRight className="w-4 h-4" strokeWidth={3} />
              </button>
            </div>
          </div>

          {/* Card 2: Change Agent */}
          <div className="bg-white border border-gray-100 rounded-[24px] shadow-sm p-8 lg:p-10 transition-all hover:shadow-md">
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center">
                  <User className="w-7 h-7 text-[#FF5722]" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-black text-gray-900 leading-tight">
                  Change Registered Agent
                </h3>
              </div>
              <p className="text-sm text-gray-400 font-medium mb-10 flex-1 leading-relaxed">
                Use to update the registered agent on file with the state of formation.
              </p>
              <button onClick={() => window.location.href = '/dashboard/ChangeRegister'} className="w-full lg:w-auto self-start bg-[#FF5722] hover:bg-[#F4511E] text-white font-black py-4 px-10 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-orange-100 transition-all uppercase text-xs tracking-widest cursor-pointer">
                ORDER <ArrowRight className="w-4 h-4" strokeWidth={3} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

