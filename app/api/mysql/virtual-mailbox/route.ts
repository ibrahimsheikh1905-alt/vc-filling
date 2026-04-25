import { executeQuery } from "@/lib/dbConnect";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
}
export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const userId = searchParams.get('userId');
    const query = `SELECT * FROM final_documents where user_id = ?`;
    const results = await executeQuery(query, [userId]);

    return NextResponse.json(results,
      {headers: {
        "Cache-Control": "no-cache",
      }}
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
