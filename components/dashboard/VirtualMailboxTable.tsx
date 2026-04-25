"use client";

import React from 'react';
import { Mail } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const VirtualMailboxTable = () => {
  return (
    // 'w-full' ko hata kar 'w-[650px]' (ya apni pasand ki width) add ki hai
    // 'max-w-full' ensure karega ke mobile par screen se bahar na jaye
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
              {['State', 'Document Type', 'Received Date', 'Status'].map((h) => (
                <TableHead key={h} className="h-8 px-4 font-semibold text-gray-600 text-[10px] uppercase">
                  {h}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              {/* Height mazeed kam ki (h-20) taake box compact lage */}
              <TableCell colSpan={4} className="h-20 text-center">
                <div className="flex flex-col items-center justify-center text-gray-400 scale-90">
                  <Mail className="w-6 h-6 mb-1 opacity-20" />
                  <p className="text-xs font-medium">Your mailbox is empty</p>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default VirtualMailboxTable;