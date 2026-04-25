"use client";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

interface Ticket {
  id: number;
  subject: string;
  status: string;
  order: string;
}

const AllTickets = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [userId, setUserId] = useState<number>(1);

  useEffect(() => {
    const fetchTickets = async () => {
      setLoading(true);
      // Temp demo data - no API calls
      setTickets([
        {
          id: 1,
          subject: 'LLC Filing Status Inquiry',
          status: 'Pending',
          order: 'LLC-001',
        },
        {
          id: 2,
          subject: 'EIN Application Update',
          status: 'Resolved',
          order: 'EIN-456',
        },
      ]);
      setLoading(false);
    };

    fetchTickets();
  }, []);

  const columns = [
    {
      name: "Subject",
      selector: (row: Ticket) => row.subject,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row: Ticket) => row.status,
      sortable: true,
    },
    {
      name: "Order",
      selector: (row: Ticket) => row.order,
    },
    {
      name: "Actions",
      cell: (row: Ticket) => (
        <button
          className="text-blue-500 hover:underline"
          onClick={() => router.push(`/dashboard/doc-requests/${row.id}`)}
        >
          View
        </button>
      ),
      ignoreRowClick: true,
    },
  ];

  if (loading) {
    return (
      <div className="flex min-h-screen bg-gray-100 items-center justify-center">
        <Loader className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Tickets</h1>
        <p className="text-gray-600">
          Track and manage your support requests.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg">
        {tickets.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 mb-4">No tickets yet.</p>
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90">
              Create New Ticket
            </button>
          </div>
        ) : (
          <DataTable
            columns={columns}
            data={tickets}
            pagination
            pointerOnHover
            highlightOnHover
            keyField="id"
          />
        )}
      </div>
    </div>
  );
};

export default AllTickets;

