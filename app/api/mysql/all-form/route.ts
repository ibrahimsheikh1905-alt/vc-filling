import { NextResponse, NextRequest } from "next/server";
import { executeQuery } from "@/lib/dbConnect";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const email = url.searchParams.get("email");

    const query = `SELECT * FROM all_form_data WHERE email = ?`;

    const data = await executeQuery(query, [email]);

    return NextResponse.json({ data: data });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
export async function POST(req: NextRequest, res: NextResponse) {}