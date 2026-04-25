"use client";

import React, { useState } from 'react';
import { User, ChevronDown, Pencil, UserPlus, Users, Edit3, Save, X, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const CompanyProfileTab: React.FC = () => {
  const [isEditingContact, setIsEditingContact] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const [editingUserId, setEditingUserId] = useState<number | null>(null);
  
  // Full Address State with all fields
  const [contactInfo, setContactInfo] = useState({
    email: "frndzitme@gmail.com",
    phone: "(315) 764-8283",
    address: "312 Sw Greenwich Dr",
    city: "Lees Summit",
    state: "Missouri",
    zip: "64082"
  });

  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "Owner", access: "Full Access", email: "johndoe@gmail.com" }
  ]);

  const [userData, setUserData] = useState({ name: '', email: '', access: 'Full Access' });

  const openModal = (user: any = null) => {
    if (user) {
      setEditingUserId(user.id);
      setUserData({ name: user.name, email: user.email, access: user.access });
    } else {
      setEditingUserId(null);
      setUserData({ name: '', email: '', access: 'Full Access' });
    }
    setShowUserModal(true);
  };

  const handleUserSubmit = () => {
    if (!userData.name || !userData.email) return;
    if (editingUserId) {
      setUsers(users.map(u => u.id === editingUserId ? { ...u, ...userData } : u));
    } else {
      setUsers([...users, { ...userData, id: Date.now(), role: 'Member' }]);
    }
    setShowUserModal(false);
  };

  return (
    <div className="space-y-8 font-sans antialiased animate-in fade-in duration-500 pb-10 max-w-6xl mx-auto">
      
      {/* 1. Contact Info Section - Fixed All Tabs */}
      <Card className="border-gray-100 shadow-sm rounded-[24px] overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between border-b border-gray-50 bg-white p-8">
          <CardTitle className="flex items-center gap-3">
            <div className="bg-orange-50 p-2 rounded-xl">
               <User className="w-5 h-5 text-orange-500" />
            </div>
            <span className="text-[20px] font-black tracking-[-0.02em] text-gray-900 uppercase">Contact Info</span>
          </CardTitle>
          <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100 cursor-pointer">
            <div className="text-sm font-bold text-gray-700">Noraiz Husnain</div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </CardHeader>
        
        <CardContent className="p-8">
          <div className="flex gap-3 mb-8">
            {!isEditingContact ? (
              <Button onClick={() => setIsEditingContact(true)} className="bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold px-6 py-6 rounded-xl uppercase text-xs shadow-md">
                <Pencil className="w-4 h-4 mr-2" /> Edit Contact Address
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button onClick={() => setIsEditingContact(false)} className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-6 rounded-xl uppercase text-xs">
                  <Save className="w-4 h-4 mr-2" /> Save Changes
                </Button>
                <Button onClick={() => setIsEditingContact(false)} variant="outline" className="px-6 py-6 rounded-xl font-bold uppercase text-xs">Cancel</Button>
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="space-y-2">
              <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Contact Email</label>
              <Input 
                disabled={!isEditingContact} 
                value={contactInfo.email} 
                onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                className="h-12 bg-gray-50/50 border-gray-100 rounded-xl disabled:opacity-100 font-bold text-gray-700" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Mobile Phone</label>
              <Input 
                disabled={!isEditingContact} 
                value={contactInfo.phone} 
                onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                className="h-12 bg-gray-50/50 border-gray-100 rounded-xl disabled:opacity-100 font-bold text-gray-700" 
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Contact Address</label>
              <Input 
                disabled={!isEditingContact} 
                value={contactInfo.address} 
                onChange={(e) => setContactInfo({...contactInfo, address: e.target.value})}
                className="h-12 bg-gray-50/50 border-gray-100 rounded-xl disabled:opacity-100 font-bold text-gray-700" 
              />
            </div>
            
            {/* Address Details Grid */}
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">City</label>
                <Input 
                  disabled={!isEditingContact} 
                  value={contactInfo.city} 
                  onChange={(e) => setContactInfo({...contactInfo, city: e.target.value})}
                  className="h-12 bg-gray-50/50 border-gray-100 rounded-xl disabled:opacity-100 font-bold text-gray-700" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">State</label>
                <Input 
                  disabled={!isEditingContact} 
                  value={contactInfo.state} 
                  onChange={(e) => setContactInfo({...contactInfo, state: e.target.value})}
                  className="h-12 bg-gray-50/50 border-gray-100 rounded-xl disabled:opacity-100 font-bold text-gray-700" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Zip Code</label>
                <Input 
                  disabled={!isEditingContact} 
                  value={contactInfo.zip} 
                  onChange={(e) => setContactInfo({...contactInfo, zip: e.target.value})}
                  className="h-12 bg-gray-50/50 border-gray-100 rounded-xl disabled:opacity-100 font-bold text-gray-700" 
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 2. Manage Access Section */}
      <Card className="border-gray-100 shadow-sm rounded-[24px] overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between border-b border-gray-50 bg-white p-8">
          <CardTitle className="flex items-center gap-3">
            <div className="bg-orange-50 p-2 rounded-xl">
               <Users className="w-5 h-5 text-orange-500" />
            </div>
            <span className="text-[20px] font-black tracking-[-0.02em] text-gray-900 uppercase">Manage Access</span>
          </CardTitle>
          <Button onClick={() => openModal()} variant="outline" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-black rounded-xl px-5 h-11">
            <UserPlus className="w-4 h-4 mr-2 stroke-[3px]" /> ADD NEW USER
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-gray-50/50">
              <TableRow>
                <TableHead className="px-8 py-5 text-[11px] font-black text-gray-400 uppercase">Name</TableHead>
                <TableHead className="py-5 text-[11px] font-black text-gray-400 uppercase">Access Level</TableHead>
                <TableHead className="px-8 py-5 text-[11px] font-black text-gray-400 uppercase text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id} className="hover:bg-gray-50/30">
                  <TableCell className="px-8 py-6 font-bold text-gray-900 text-left">{user.name}</TableCell>
                  <TableCell className="py-6 text-left">
                    <span className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider border ${user.access === 'Full Access' ? 'bg-green-50 text-green-600 border-green-100' : 'bg-blue-50 text-blue-600 border-blue-100'}`}>
                      {user.access}
                    </span>
                  </TableCell>
                  <TableCell className="px-8 py-6 text-right">
                    <Button onClick={() => openModal(user)} variant="ghost" className="h-10 w-10 p-0 rounded-xl hover:bg-orange-50 hover:text-orange-500">
                      <Edit3 className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* --- User Modal with White Background --- */}
      {showUserModal && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md rounded-[32px] border border-gray-100 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] animate-in fade-in zoom-in duration-200">
            <CardHeader className="p-8 border-b border-gray-50">
              <div className="flex justify-between items-center">
                <CardTitle className="font-black text-xl uppercase tracking-tight text-gray-900">
                  {editingUserId ? 'Edit User Access' : 'Create New User'}
                </CardTitle>
                <Button variant="ghost" onClick={() => setShowUserModal(false)} className="rounded-full h-10 w-10 p-0 hover:bg-gray-100 transition-colors">
                  <X className="w-5 h-5 text-gray-400" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-8 space-y-5 text-left">
              <div className="space-y-2">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                <Input value={userData.name} onChange={(e) => setUserData({...userData, name: e.target.value})} placeholder="Enter name" className="h-12 rounded-xl font-bold" />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                <Input value={userData.email} onChange={(e) => setUserData({...userData, email: e.target.value})} placeholder="email@example.com" className="h-12 rounded-xl font-bold" />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Access Level</label>
                <select 
                  value={userData.access} 
                  onChange={(e) => setUserData({...userData, access: e.target.value})}
                  className="w-full h-12 bg-white border border-gray-200 rounded-xl px-4 text-sm font-bold text-gray-700 outline-none focus:ring-2 focus:ring-orange-100 transition-all cursor-pointer appearance-none"
                >
                  <option value="Full Access">Full Access (Admin)</option>
                  <option value="Billing Only">Billing & Payments Only</option>
                  <option value="View Only">View Only</option>
                </select>
              </div>
              <div className="bg-orange-50/50 p-4 rounded-2xl flex gap-3 border border-orange-100">
                <ShieldCheck className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <p className="text-[11px] text-orange-700 font-bold leading-relaxed">
                  {userData.access === 'Full Access' ? 'This user can manage company settings.' : 
                   userData.access === 'Billing Only' ? 'User can only manage payments.' : 
                   'User can only view profile.'}
                </p>
              </div>
              <Button onClick={handleUserSubmit} className="w-full bg-[#FF6B35] hover:bg-[#E64A19] text-white font-black py-7 rounded-2xl uppercase tracking-widest text-xs shadow-lg mt-4 transition-transform active:scale-95">
                {editingUserId ? 'Save Changes' : 'Invite User'}
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CompanyProfileTab;