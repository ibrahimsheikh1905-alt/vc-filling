import { NextResponse } from "next/server";

export async function GET() {
  // Mock fallback data so Step-2 dropdown can render even if DB is empty/misconfigured.
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

