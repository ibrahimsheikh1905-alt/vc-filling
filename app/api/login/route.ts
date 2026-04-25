import { executeQuery } from "@/lib/dbConnect";
import jwt, { Secret } from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

const SECRET_KEY = process.env.JWT_SECRET_KEY as Secret;

// if (!SECRET_KEY) {
//   throw new Error("JWT_SECRET_KEY is not set in environment variables");
// }

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json({
      success: false,
      message: "Method not allowed",
      status: 405,
    });
  }

  const { email, otp } = await req.json();

  try {
    // Here, you would typically verify the OTP
    // For this example, we'll assume it's always valid

    const payload = {
      email: email,
      name: email, // You might want to fetch the actual name from your database
    };
    // console.log("payload>>>>", payload);
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "30d" });
    let refreshToken = jwt.sign(payload, SECRET_KEY, { expiresIn: "30d" });
    refreshToken = refreshToken.slice(0, 200) + refreshToken.slice(-40);

    const expiry = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
    const query = `INSERT INTO tokens (email, refresh_token, expires_at) VALUES (?, ?, ?)`;
    try {
      await executeQuery(query, [email, refreshToken, expiry]);
    } catch (error) {
      console.error("Error inserting token:", error);
      return NextResponse.json({
        success: false,
        message: "Internal server error",
        status: 500,
      });
    }
    return NextResponse.json({
      success: true,
      token,
      refreshToken,
      name: email,
    });
  } catch (error) {
    console.error("Login error:", error);
    NextResponse.json({
      success: false,
      message: "Internal server error",
      status: 500,
    });
  }
}
