import { executeQuery } from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json({
      success: false,
      message: "Method not allowed",
      status: 405,
    });
    }
    
    const { email } = await req.json();

    try {
        const query = `SELECT * FROM users WHERE email = ?`;
        const response = await executeQuery(query, [email]);
        if (response.length === 0) {
            return NextResponse.json({ success: false, data: [] });
        }
        return NextResponse.json({ success: true, data: response });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Internal server error",
        });
    }
}