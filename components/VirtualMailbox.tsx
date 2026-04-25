"use client";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useRouter } from "next/navigation";

interface MailboxItem {
  id: number;
  title: string;
  message: string;
  order_id: string;
  created_at: string;
}

const VirtualMailbox = () => {
  const [loading, setLoading] = useState(true);
  const [mailboxData, setMailboxData] = useState<MailboxItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    const demoData: MailboxItem[] = [
      {
        id: 1,
        title: "LLC Approval Notice",
        message: "Your LLC filing has been approved. Documents attached.",
        order_id: "LLC-001",
        created_at: new Date().toLocaleString(),
      },
      {
        id: 2,
        title: "Payment Confirmation",
        message: "Payment of $299 received for LLC filing.",
        order_id: "LLC-001",
        created_at: new Date(Date.now() - 86400000).toLocaleString(),
      },
    ];
    setMailboxData(demoData);
    setLoading(false);
  }, []);

  const columns = [
    {
      name: "Title",
      selector: (row: MailboxItem) => row.title,
      sortable: true,
    },
    {
      name: "Message",
      selector: (row: MailboxItem) => row.message.substring(0, 100) + '...',
    },
    {
      name: "Order ID",
      selector: (row: MailboxItem) => row.order_id,
    },
    {
      name: "Date",
      selector: (row: MailboxItem) => row.created_at,
      sortable: true,
    },
  ];

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Virtual Mailbox</h2>
      <DataTable
        columns={columns}
        data={mailboxData}
        pagination
        pointerOnHover
        highlightOnHover
        keyField="id"
      />
    </div>
  );
};

export default VirtualMailbox;

