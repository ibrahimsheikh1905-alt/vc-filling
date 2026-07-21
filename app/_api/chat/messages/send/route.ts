import { executeQuery } from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    const { ticketId, senderId, message, attachmentUrl } = await req.json();
    try {
      // Insert a new message
      await executeQuery(
        "INSERT INTO messages (parent_id, sender_id, message, attachment_url) VALUES (?, ?, ?, ?)",
        [ticketId, senderId, message, attachmentUrl || null]
      );

      return NextResponse.json({ success: true, status: 200 });
    } catch (error) {
      return NextResponse.json({
        error: "Failed to send message",
        status: 500,
      });
    }
  } else {
    return NextResponse.json({ error: "Method not allowed", status: 405 });
  }
}
