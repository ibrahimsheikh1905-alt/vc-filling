import { executeQuery } from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest
) {
  if (req.method === "POST") {
    const { userId, adminId, title, message, attachmentUrl } = await req.json();
    try {
      // Create a new ticket
      const ticketResult = await executeQuery(
        "INSERT INTO tickets (user_id, admin_id, subject) VALUES (?, ?, ?)",
        [userId, adminId, title]
      );

      const ticketId = ticketResult.insertId;

      // Insert the first message
      await executeQuery(
        "INSERT INTO messages (ticket_id, sender_id, message, attachment_url) VALUES (?, ?, ?, ?)",
        [ticketId, adminId, message, attachmentUrl || null]
      );

      NextResponse.json({ success: true, ticketId, status: 200 });
    } catch (error) {
      NextResponse.json({ error: "Failed to create chat", status: 500 });
    }
  } else {
    NextResponse.json({ error: "Method not allowed", status: 405 });
  }
}
