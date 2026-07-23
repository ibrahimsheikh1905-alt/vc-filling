import { executeQuery } from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { ticketId: string } }
) {
  if (req.method === "GET") {
    try {
      const messages = await executeQuery(
        "SELECT m.id, m.order_id, m.parent_id, m.sender_id, m.message, m.attachment_url, m.created_at FROM messages m WHERE m.parent_id = ? ORDER BY m.created_at ASC",
        [params.ticketId]
      );
      return NextResponse.json(messages);
    } catch (error) {
      return NextResponse.json({
        error: "Failed to fetch messages",
        status: 500,
      });
    }
  } else {
    return NextResponse.json({ error: "Method not allowed", status: 405 });
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
}
