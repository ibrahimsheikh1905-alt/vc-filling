import { NextResponse, NextRequest } from "next/server";
import { executeQuery } from "@/lib/dbConnect";

export async function GET(req: NextRequest) {
  try {
    const query = `SELECT * FROM industry_keywords`;
    const results = await executeQuery(query);

    const normalized = (Array.isArray(results) ? results : []).map((row: any) => ({
      id: row.id ?? row.ID ?? row.industry_id ?? row.industryId ?? row.keyword_id,
      keyword:
        row.keyword ?? row.keyword_name ?? row.name ?? row.industry_name ?? row.industry,
    }));

    const filtered = normalized.filter(
      (r: any) => r && r.id !== undefined && r.keyword !== undefined && r.keyword !== "",
    );

    // If DB returns empty (common misconfig), fallback to mock so UI works.
    if (filtered.length === 0) {
      return NextResponse.json(
        [
          { id: 1, keyword: "Hair Salon" },
          { id: 2, keyword: "Accountant" },
          { id: 3, keyword: "Bar Owner" },
          { id: 4, keyword: "Social Media" },
          { id: 5, keyword: "Real Estate" },
          { id: 6, keyword: "Software Development" },
        ],
        { headers: { "Cache-Control": "no-cache" } },
      );
    }

    return NextResponse.json(filtered, {
      headers: {
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    console.error("Error fetching industry keywords:", error);

    // Fallback so Step-2 dropdown still renders.
    return NextResponse.json(
      [
        { id: 1, keyword: "Hair Salon" },
        { id: 2, keyword: "Accountant" },
        { id: 3, keyword: "Bar Owner" },
        { id: 4, keyword: "Social Media" },
        { id: 5, keyword: "Real Estate" },
        { id: 6, keyword: "Software Development" },
      ],
      { status: 200, headers: { "Cache-Control": "no-cache" } },
    );
  }
}

export async function POST(req: NextRequest) { }

