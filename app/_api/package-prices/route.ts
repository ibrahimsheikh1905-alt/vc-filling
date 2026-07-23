import { NextResponse, NextRequest } from "next/server";
import { executeQuery } from "@/lib/dbConnect";

export async function GET(req: NextRequest) {
  try {
    const query = `SELECT * FROM package_prices`;
    const results = await executeQuery(query);

    return NextResponse.json(results, {
      headers: {
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
export async function POST(req: NextRequest, res: NextResponse) {}
