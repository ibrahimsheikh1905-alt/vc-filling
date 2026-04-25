"use client";

import React from 'react';
import { User, ChevronDown, Pencil, UserPlus, Users, Edit3 } from 'lucide-react';
// shadcn/ui
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const CompanyProfileTab: React.FC = () => {
  return (
    <div className="space-y-8 font-sans antialiased animate-in fade-in duration-500">
      
      {/* Contact Info Section */}
      <Card className="border-gray-100 shadow-sm rounded-[24px] overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between border-b border-gray-50 bg-white p-8">
          <CardTitle className="flex items-center gap-3">
            <div className="bg-orange-50 p-2 rounded-xl">
               <User className="w-5 h-5 text-orange-500" />
            </div>
            <span className="text-[20px] font-black tracking-[-0.02em] text-gray-900 uppercase">
              Contact Info
            </span>
          </CardTitle>
          <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100 transition-all hover:border-gray-200 cursor-pointer">
            <div className="text-sm font-bold text-gray-700 tracking-tight">Noraiz Husnain</div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </CardHeader>
        
        <CardContent className="p-8">
          <Button className="bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold px-6 py-6 rounded-xl mb-8 shadow-md shadow-orange-100 transition-all active:scale-95 uppercase tracking-wider text-xs">
            <Pencil className="w-4 h-4 mr-2 stroke-[3px]" />
            Edit Contact Address
          </Button>
          
          {/* Form Fields - Input Styles Updated */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Contact Email</label>
              <Input 
                value="frndzitme@gmail.com" 
                disabled 
                className="h-12 bg-gray-50/50 border-gray-100 rounded-xl font-medium text-gray-600 focus:border-orange-200"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Mobile Phone</label>
              <Input 
                value="(315) 764-8283" 
                disabled 
                className="h-12 bg-gray-50/50 border-gray-100 rounded-xl font-medium text-gray-600"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Country</label>
              <Select disabled defaultValue="US">
                <SelectTrigger className="h-12 bg-gray-50/50 border-gray-100 rounded-xl font-medium text-gray-600">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Contact Address</label>
              <Input 
                value="312 Sw Greenwich Dr" 
                disabled 
                className="h-12 bg-gray-50/50 border-gray-100 rounded-xl font-medium text-gray-600"
              />
            </div>
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">City</label>
                <Input value="Lees Summit" disabled className="h-12 bg-gray-50/50 border-gray-100 rounded-xl font-medium text-gray-600" />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">State</label>
                <Input value="Missouri" disabled className="h-12 bg-gray-50/50 border-gray-100 rounded-xl font-medium text-gray-600" />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest ml-1">Zip Code</label>
                <Input value="64082" disabled className="h-12 bg-gray-50/50 border-gray-100 rounded-xl font-medium text-gray-600" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Manage Access Section */}
      <Card className="border-gray-100 shadow-sm rounded-[24px] overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between border-b border-gray-50 bg-white p-8">
          <CardTitle className="flex items-center gap-3">
            <div className="bg-orange-50 p-2 rounded-xl">
               <Users className="w-5 h-5 text-orange-500" />
            </div>
            <span className="text-[20px] font-black tracking-[-0.02em] text-gray-900 uppercase">
              Manage Access
            </span>
          </CardTitle>
          <Button variant="outline" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-black rounded-xl tracking-tight px-5 h-11 transition-all">
            <UserPlus className="w-4 h-4 mr-2 stroke-[3px]" />
            ADD NEW USER
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-gray-50/50">
                <TableRow className="border-b border-gray-100">
                  <TableHead className="px-8 py-5 text-[11px] font-black text-gray-400 uppercase tracking-widest">Name</TableHead>
                  <TableHead className="hidden md:table-cell py-5 text-[11px] font-black text-gray-400 uppercase tracking-widest">Role</TableHead>
                  <TableHead className="py-5 text-[11px] font-black text-gray-400 uppercase tracking-widest">Phone</TableHead>
                  <TableHead className="hidden lg:table-cell py-5 text-[11px] font-black text-gray-400 uppercase tracking-widest">Client ID</TableHead>
                  <TableHead className="hidden lg:table-cell py-5 text-[11px] font-black text-gray-400 uppercase tracking-widest">Email</TableHead>
                  <TableHead className="px-8 py-5 text-[11px] font-black text-gray-400 uppercase tracking-widest text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-b border-gray-50 hover:bg-gray-50/30 transition-colors">
                  <TableCell className="px-8 py-6 font-bold text-gray-900 text-[15px]">John Doe</TableCell>
                  <TableCell className="hidden md:table-cell py-6">
                    <span className="px-3 py-1.5 rounded-lg text-[10px] font-black bg-orange-50 text-orange-600 uppercase tracking-wider border border-orange-100">
                      Owner (Primary)
                    </span>
                  </TableCell>
                  <TableCell className="py-6 text-gray-500 font-medium">(321) 123-4567</TableCell>
                  <TableCell className="hidden lg:table-cell py-6 font-mono text-gray-400 text-sm">1477094</TableCell>
                  <TableCell className="hidden lg:table-cell py-6 text-gray-500 font-medium">johndoe@gmail.com</TableCell>
                  <TableCell className="px-8 py-6 text-right">
                    <Button variant="ghost" size="sm" className="h-10 w-10 p-0 rounded-xl hover:bg-orange-50 hover:text-orange-500 transition-all">
                      <Edit3 className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanyProfileTab;