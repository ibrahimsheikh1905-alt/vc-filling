"use client";

import React from 'react';
import { Printer, Download, X, CheckCircle2 } from 'lucide-react';

interface ReceiptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReceiptModal: React.FC<ReceiptModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const content = document.querySelector('.receipt-content') as HTMLElement;
    if (content) {
      const printWindow = window.open('', '_blank');
      printWindow?.document.write(`
        <html>
          <head><title>Receipt</title>
          <style>
            @media print { body { margin: 0; } }
            body { font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; padding: 20px; }
            .receipt-content { background: white; padding: 30px; border: 1px solid #ddd; }
            .header { text-align: center; margin-bottom: 30px; }
            .details { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0; }
            .total { font-size: 24px; font-weight: bold; text-align: right; margin-top: 20px; }
          </style>
          </head>
          <body onload="window.print(); window.close();">
            <div class="receipt-content">
              <div class="header">
                <h1 style="color: #111827; font-size: 28px; margin: 0;">Receipt #226041533405</h1>
                <p style="color: #6B7280; font-size: 14px;">NONPROFIT FILING (MO) - Apr 15, 2026</p>
              </div>
              <div class="details">
                <div><strong>Company:</strong> SOLVEXNEST INC.</div>
                <div><strong>Order No:</strong> 226041533405</div>
                <div><strong>Amount:</strong> $26.00</div>
                <div><strong>Status:</strong> Hold</div>
              </div>
              <div style="text-align: center; margin-top: 40px;">
                <p style="color: #6B7280; font-size: 12px;">Thank you for your order!</p>
              </div>
            </div>
          </body>
        </html>
      `);
      printWindow?.document.close();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="p-8 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-red-50 rounded-2xl">
              <Receipt className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-gray-900">Receipt #226041533405</h2>
              <p className="text-sm text-gray-500">NONPROFIT FILING (MO)</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-xl transition-all">
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <div className="p-8">
          <div className="receipt-content">
            <div style={{textAlign: 'center', marginBottom: '40px'}}>
              <h1 style={{color: '#111827', fontSize: '32px', margin: '0 0 10px'}}>Receipt #226041533405</h1>
              <p style={{color: '#6B7280', fontSize: '16px'}}>Order Date: Apr 15, 2026</p>
              <p style={{color: '#6B7280', fontSize: '16px'}}>NONPROFIT FILING (MO)</p>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px'}}>
              <div>
                <p style={{fontSize: '14px', color: '#6B7280', marginBottom: '5px'}}>Company Name:</p>
                <p style={{fontSize: '20px', fontWeight: 'bold', color: '#111827'}}>SOLVEXNEST INC.</p>
              </div>
              <div>
                <p style={{fontSize: '14px', color: '#6B7280', marginBottom: '5px'}}>Order Number:</p>
                <p style={{fontSize: '20px', fontWeight: 'bold', color: '#111827'}}>226041533405</p>
              </div>
              <div>
                <p style={{fontSize: '14px', color: '#6B7280', marginBottom: '5px'}}>Status:</p>
                <span style={{background: '#FEF3C7', color: '#92400E', padding: '8px 16px', borderRadius: '20px', fontWeight: 'bold', fontSize: '14px'}}>Hold</span>
              </div>
              <div>
                <p style={{fontSize: '14px', color: '#6B7280', marginBottom: '5px'}}>Amount:</p>
                <p style={{fontSize: '28px', fontWeight: 'bold', color: '#111827'}}>$26.00</p>
              </div>
            </div>

            <div style={{textAlign: 'center', marginTop: '40px'}}>
              <CheckCircle2 style={{width: '60px', height: '60px', color: '#10B981', margin: '0 auto 20px'}} />
              <p style={{fontSize: '16px', color: '#6B7280'}}>Thank you for your order!</p>
              <p style={{fontSize: '14px', color: '#9CA3AF'}}>This receipt was generated on {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-100 bg-gray-50 flex gap-4 justify-end">
          <button onClick={handleDownload} className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition-all">
            <Download className="w-4 h-4" />
            Download PDF
          </button>
          <button onClick={handlePrint} className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-md transition-all">
            <Printer className="w-4 h-4" />
            Print Receipt
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReceiptModal;

