"use client";
import snakeToSentenceCase from "@/hooks/useSnakeToSentenceCase";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

interface FormData {
  usable_id: string;
  first_name: string;
  last_name: string;
  mobile_phone: string;
  entity_type: string;
  company_name: string;
  designator: string;
  created_at: string;
  payment?: {
    payment_status: string;
    transaction_id: string;
    amount_in_usd: string;
  } | null;
}

const DashboardTable = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<FormData[]>([]);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setData([
        {
          usable_id: 'demo-001',
          first_name: 'John',
          last_name: 'Doe',
          mobile_phone: '(555) 123-4567',
          entity_type: 'LLC',
          company_name: 'John Doe LLC',
          designator: 'LLC',
          created_at: new Date().toLocaleDateString(),
          payment: {
            payment_status: 'Paid',
            transaction_id: 'txn_demo123',
            amount_in_usd: '$299.00',
          },
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const columns = [
    {
      name: 'First Name',
      selector: (row: FormData) => row.first_name,
      sortable: true,
    },
    {
      name: 'Last Name',
      selector: (row: FormData) => row.last_name,
      sortable: true,
    },
    {
      name: 'Phone',
      selector: (row: FormData) => row.mobile_phone,
    },
    {
      name: 'Entity Type',
      selector: (row: FormData) => row.entity_type,
    },
    {
      name: 'Company',
      selector: (row: FormData) => row.company_name,
    },
    {
      name: 'Payment Status',
      selector: (row: FormData) => row.payment?.payment_status || 'Pending',
    },
    {
      name: 'Actions',
      cell: (row: FormData) => (
        <div className="flex gap-2">
          <button 
            className="text-blue-500 hover:underline"
            onClick={() => router.push(`/dashboard/${row.usable_id}`)}
          >
            View
          </button>
          <button 
            className="text-green-500 hover:underline"
            onClick={() => alert('Download invoice')}
          >
            Invoice
          </button>
        </div>
      ),
      ignoreRowClick: true,
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader className="w-8 h-8 animate-spin mr-2" />
        Loading your orders...
      </div>
    );
  }

  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      pointerOnHover
      highlightOnHover
    />
  );
};

export default DashboardTable;

