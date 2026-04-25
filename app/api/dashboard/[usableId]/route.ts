import { NextResponse, NextRequest } from "next/server";
import { executeQuery } from "@/lib/dbConnect";

export async function GET(
  req: NextRequest,
  { params }: { params: { usableId: string } }
) {
  const usableId = params.usableId;
  const tableName = usableId.split("-")[0],
    id = usableId.split("-")[1];
  console.log(tableName, id);
  try {
    const results = await executeQuery(
      `SELECT * FROM ${tableName} WHERE id = ?`,
      [id]
    );

    return NextResponse.json(results[0]);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: { usableId: string } }
) {
  const usableId = params.usableId;
  const tableName = usableId.split("-")[0],
    id = usableId.split("-")[1];
  const { status } = await req.json();
  try {
    const results = await executeQuery(
      `UPDATE ${tableName} SET status = ? WHERE id = ?`,
      [status, id]
    );
    return NextResponse.json(results);
  } catch (error) {
    console.error("Error changing status:", error);
    return NextResponse.json(
      { error: "Failed to change status" },
      { status: 500 }
    );
  }
}
