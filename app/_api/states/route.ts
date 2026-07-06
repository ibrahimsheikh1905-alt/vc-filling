import { executeQuery } from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const stateName = req.nextUrl.searchParams.get("stateName");

  if (stateName) {
    try {
      const query = `SELECT * FROM states WHERE state_name = ?`;
      const results = await executeQuery(query, [stateName]);

      if (results.length === 0) {
        return NextResponse.json({ error: "State not found" }, { status: 404 });
      }

      return NextResponse.json(results[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
      return NextResponse.json(
        { error: "Failed to fetch data" },
        { status: 500 }
      );
    }
  } else {
    try {
      const query = `SELECT * FROM states`;
      const results = await executeQuery(query);

      return NextResponse.json(results);
    } catch (error) {
      console.error("Error fetching data:", error);
      return NextResponse.json(
        { error: "Failed to fetch data" },
        { status: 500 }
      );
    }
  }
}
export async function POST(req: NextRequest) { }
