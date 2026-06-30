"use client";
import Sidebar from "@/components/dashboard/Sidebar";
import NavigationWrapper from "@/components/NavigationWrapper";
import { Ticket } from "@/types";
import axios from "axios";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const AllTickets = () => {
  const router = useRouter();
  const [getLoading, setLoading] = useState(false);
  const [tickets, setTickets] = useState<Ticket[]>();
  const [hasTicket, setHasTicket] = useState<boolean>(false);
  const [userId, setUserId] = useState<number>();
  const fetchUserId = async () => {
    const res = await axios.get("/api/mysql/users/", {
      params: {
        email: localStorage.getItem("vcFillingName"),
      },
    });
    const data = await res.data;
    setUserId(data.data[0].id);
  };
  useEffect(() => {
    fetchUserId();
  }, []);
  useEffect(() => {
    const fetchPreviousTickets = async () => {
      setLoading(true);
      const response = await fetch("/api/chat/" + userId);
      const data = await response.json();
      if (data?.tickets === 0) {
        setHasTicket(false);
      }
      if (data?.length > 0) {
        setHasTicket(true);
        setTickets(data);
      }
      setLoading(false);
      // console.log(data);
    };
    fetchPreviousTickets();
  }, [userId]);

  if (getLoading) {
    return (
      <div className="flex min-h-screen bg-gray-100 items-center justify-center">
        <Loader />
      </div>
    );
  }
  return (
    <NavigationWrapper>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar selected="All Tickets" />
        <div className="min-h-full flex-1 p-8 ">
          <h2 className="text-2xl font-bold mb-4">
            Additional Information Required
          </h2>
          <p className="mb-8">
            Please add additional information to support your request.
          </p>

          <div>
            <h3 className="text-lg font-bold mb-3">Previous Requests</h3>
            <DataTable
              columns={[
                {
                  name: "Subject",
                  selector: (row: any) => row.subject,
                },
                {
                  name: "Status",
                  selector: (row: any) => row.status,
                },
                {
                  name: "Order",
                  selector: (row: any) => row.order,
                },
              ]}
              data={tickets!}
              pagination
              fixedHeader
              pointerOnHover
              highlightOnHover
              keyField="usable_id"
              onRowClicked={(row) =>
                router.push(`/dashboard/doc-requests/${row.id}`)
              }
              fixedHeaderScrollHeight="300px"
            />
          </div>
        </div>
      </div>
    </NavigationWrapper>
  );
};

export default AllTickets;
