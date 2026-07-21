import { executeQuery } from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const userId = params.userId;
    //get all data from ticket table
    const ticket = await executeQuery(
      "SELECT * FROM tickets WHERE user_id = ?",
      [userId]
    );
    if (ticket.length === 0) {
      return NextResponse.json({
        error: "Ticket not found",
        status: 404,
        tickets: 0,
      });
    }
    return NextResponse.json(ticket);
  } catch (error) {
    return NextResponse.json({
      error: "Failed to create chat:" + error,
      status: 500,
    });
  }
}
export async function POST(req: NextRequest, res: NextResponse) {
}