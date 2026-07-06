import { executeQuery } from "@/lib/dbConnect";
import {  randomInt } from "crypto";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

    //generate order_number based on body.orderId with 
    // const orderNumber = randomInt(999999999)
    // const paymentId = randomInt(999999999);
    // const transactionId = randomInt(999999999)

  const query =
    "INSERT INTO payments (name, email, amount_in_usd, transaction_id, order_id, payment_status, payment_method, usable_id) VALUES (?,?,?,?,?,?,?,?)";
  const values = [
    body.name,
    body.email,
    body.amount,
    body.transactionId,
    body.orderId,
    body.paymentStatus,
    body.paymentMethod,
    body.usableId
  ];

  await executeQuery(query, values);

  return NextResponse.json({
      success: true,
      status: 200,
  });
}

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const usableId = searchParams.get('usable_id');

    if (!usableId) {
      return NextResponse.json(
        { error: "usable_id is required" },
        { status: 400 }
      );
    }

    const query = `SELECT * FROM payments where usable_id = ?`;
    const results = await executeQuery(query, [usableId]);

    return NextResponse.json(results, {
      headers: {
        "Cache-Control": "no-cache",
      }
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}

