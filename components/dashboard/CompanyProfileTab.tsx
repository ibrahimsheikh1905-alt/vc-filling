"use client";

import React, { useState, useEffect } from 'react';
import { User, ChevronDown, Pencil, UserPlus, Users, Edit3, Save, X, ShieldCheck, Loader2, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const CompanyProfileTab: React.FC = () => {
  const [isEditingContact, setIsEditingContact] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const [editingUserId, setEditingUserId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [userData, setUserData] = useState<any>(null);
  
  // Fetch user profile data on mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Get user ID from localStorage
        const userId = localStorage.getItem('userId');
        const jwtToken = localStorage.getItem('jwtToken');
        
        if (!userId && !jwtToken) {
          setLoading(false);
          return;
        }
        
// Try to fetch user profile with JWT in Authorization header
        const headers: HeadersInit = {};
        if (jwtToken) {
          headers['Authorization'] = `Bearer ${jwtToken}`;
        }

        let url = '/api/user-profile';
        if (userId && !jwtToken) {
          url += `?userId=${encodeURIComponent(userId)}`;
        }
        
        const res = await fetch(url, { headers });
        const data = await res.json();
        
        if (data.success && data.user) {
          setUserData(data.user);
        } else {
          // Fallback to localStorage data
          const storedName = localStorage.getItem('vcFillingName') || 'User';
          const storedEmail = localStorage.getItem('userEmail') || '';
          setUserData({ name: storedName, email: storedEmail });
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Fallback to localStorage
        const storedName = localStorage.getItem('vcFillingName') || 'User';
        const storedEmail = localStorage.getItem('userEmail') || '';
        setUserData({ name: storedName, email: storedEmail });
      } finally {
        setLoading(false);
      }
    };
    
    fetchUserData();
  }, []);

// Use user data from API or localStorage
  const userName = userData?.name || localStorage.getItem('vcFillingName') || 'User';
  const userEmail = userData?.email || localStorage.getItem('userEmail') || '';
  
  // Full Address State with all fields - now using user email
  const [contactInfo, setContactInfo] = useState({
    email: userEmail || "",
    phone: userData?.phone || "",
    address: userData?.address || "",
    city: userData?.city || "",
    state: userData?.state || "",
    zip: userData?.zip || ""
  });

// Map role to access level
  const mapRoleToAccess = (role: string) => {
    switch (role) {
      case 'admin': return 'Full Access';
      case 'agent': return 'Billing Only';
      default: return 'View Only';
    }
  };

  // Initialize users list
  const [users, setUsers] = useState<any[]>([]);
  const [usersLoading, setUsersLoading] = useState(true);

  // Fetch users from manage-access API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const jwtToken = localStorage.getItem('jwtToken');
        if (!jwtToken) {
          setUsersLoading(false);
          return;
        }

        const res = await fetch('/api/manage-access', {
          headers: { 'Authorization': `Bearer ${jwtToken}` }
        });
        const data = await res.json();

        if (data.success && data.users) {
          const mappedUsers = data.users.map((u: any) => ({
            id: u.id,
            name: u.name,
            email: u.email,
            role: u.role,
            access: mapRoleToAccess(u.role)
          }));
          setUsers(mappedUsers);
        } else {
          // Fallback to current user
          setUsers([{ id: 1, name: userName, role: "Owner", access: "Full Access", email: userEmail }]);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
        setUsers([{ id: 1, name: userName, role: "Owner", access: "Full Access", email: userEmail }]);
      } finally {
        setUsersLoading(false);
      }
    };

    fetchUsers();
  }, [userName, userEmail]);

const [modalUserData, setModalUserData] = useState({ name: '', email: '', access: 'Full Access' });

  const openModal = (user: any = null) => {
    if (user) {
      setEditingUserId(user.id);
      setModalUserData({ name: user.name, email: user.email, access: user.access });
    } else {
      setEditingUserId(null);
      setModalUserData({ name: '', email: '', access: 'Full Access' });
    }
    setShowUserModal(true);
  };

const handleUserSubmit = async () => {
    if (!modalUserData.name || !modalUserData.email) return;
    
    const jwtToken = localStorage.getItem('jwtToken');
    if (!jwtToken) {
      alert('Please login first');
      return;
    }
    
    setSaving(true);
    try {
      if (editingUserId) {
        // Update existing user via API
        const res = await fetch('/api/manage-access', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwtToken}`
          },
          body: JSON.stringify({
            userId: editingUserId,
            name: modalUserData.name,
            email: modalUserData.email,
            access: modalUserData.access
          })
        });
        const data = await res.json();
        
        if (data.success) {
          setUsers(users.map(u => u.id === editingUserId ? { ...u, ...modalUserData } : u));
        } else {
          alert('Failed to update user: ' + data.error);
          setSaving(false);
          return;
        }
      } else {
        // Create new user via API
        const res = await fetch('/api/manage-access', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwtToken}`
          },
          body: JSON.stringify({
            name: modalUserData.name,
            email: modalUserData.email,
            access: modalUserData.access
          })
        });
        const data = await res.json();
        
        if (data.success) {
          setUsers([...users, { 
            id: data.user.id, 
            name: modalUserData.name, 
            email: modalUserData.email, 
            role: modalUserData.access === 'Full Access' ? 'admin' : modalUserData.access === 'Billing Only' ? 'agent' : 'user',
            access: modalUserData.access 
          }]);
        } else {
          alert('Failed to invite user: ' + data.error);
          setSaving(false);
          return;
        }
      }
    } catch (error) {
      console.error('Error submitting user:', error);
      alert('Error saving user');
    } finally {
      setSaving(false);
      setShowUserModal(false);
    }
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
            <div className="text-sm font-bold text-gray-700">{userName}</div>
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
                <Button 
                  onClick={async () => {
                    setSaving(true);
                    try {
                      const userId = localStorage.getItem('userId');
                      if (!userId) {
                        alert('Please login first');
                        setSaving(false);
                        return;
                      }
                      
                      // Call the update API
                      const res = await fetch('/api/update-user', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                          userId,
                          name: userName,
                          email: contactInfo.email,
                          phone: contactInfo.phone,
                          address: contactInfo.address,
                          city: contactInfo.city,
                          state: contactInfo.state,
                          zip: contactInfo.zip
                        })
                      });
                      
                      const data = await res.json();
                      if (data.success) {
                        // Update localStorage with new values
                        localStorage.setItem('vcFillingName', userName);
                        localStorage.setItem('userEmail', contactInfo.email);
                        setSaveSuccess(true);
                        setIsEditingContact(false);
                        setTimeout(() => setSaveSuccess(false), 3000);
                      } else {
                        alert('Failed to save: ' + data.message);
                      }
                    } catch (error) {
                      console.error('Error saving:', error);
                      alert('Error saving changes');
                    } finally {
                      setSaving(false);
                    }
                  }}
                  disabled={saving}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-6 rounded-xl uppercase text-xs"
                >
                  {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : saveSuccess ? <CheckCircle className="w-4 h-4 mr-2" /> : <Save className="w-4 h-4 mr-2" />}
                  {saving ? 'Saving...' : saveSuccess ? 'Saved!' : 'Save Changes'}
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
                <Input value={modalUserData.name} onChange={(e) => setModalUserData({...modalUserData, name: e.target.value})} placeholder="Enter name" className="h-12 rounded-xl font-bold" />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                <Input value={modalUserData.email} onChange={(e) => setModalUserData({...modalUserData, email: e.target.value})} placeholder="email@example.com" className="h-12 rounded-xl font-bold" />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Access Level</label>
                <select 
                  value={modalUserData.access} 
                  onChange={(e) => setModalUserData({...modalUserData, access: e.target.value})}
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
                  {modalUserData.access === 'Full Access' ? 'This user can manage company settings.' : 
                   modalUserData.access === 'Billing Only' ? 'User can only manage payments.' : 
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