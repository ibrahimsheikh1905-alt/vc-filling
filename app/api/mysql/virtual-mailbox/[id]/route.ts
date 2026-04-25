import { executeQuery } from "../../../../../lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params.id;
    const query = `SELECT * FROM final_document_attachments WHERE final_document_id = ?`;
    const response = await executeQuery(query, [id]);
    return NextResponse.json({ data: response });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest, { params }: { params: { orderId: string } }) { }
