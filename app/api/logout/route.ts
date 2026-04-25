import { executeQuery } from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    if (request.method !== "POST") {
      return NextResponse.json({
        success: false,
        message: "Method not allowed",
        status: 405,
      });
    }
    const { refreshToken } = await request.json();
    try {
        const query = `DELETE FROM tokens WHERE refresh_token = ?`;
        await executeQuery(query, [refreshToken]);
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("refreshToken");
        return NextResponse.json({
            success: true,
            message: "Logout Successful!",
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Internal server error",
        });
    }
 }