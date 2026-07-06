// import { NextResponse } from "next/server";
// import { executeQuery } from "@/lib/dbConnect";

// async function verifyOtp(email: string, otp: number): Promise<boolean> {
//   // get OTP from database table otp
//   const response = await executeQuery(
//     "SELECT otp FROM otp WHERE email = ? ORDER BY created_at DESC LIMIT 1",
//     [email]
//   );
//   if (response.length === 0) return false;
//   console.log("response>>>", response);
//   const otpFromDb = response[0].otp;
//   console.log("otpFromDb>>>", otpFromDb);

//   return otp == otpFromDb; // Replace with actual logic
// }

// export async function POST(req: Request) {
//   try {
//     const { email, otp } = await req.json(); // Parse the request body

//     // Validate OTP
//     const isValidOtp = async () => {
//       return await verifyOtp(email, otp);
//     };
//     // console.log(await isValidOtp())

//     if ((await isValidOtp()) === true) {
//       await executeQuery("DELETE FROM otp WHERE email = ?", [email]);
//       // console.log("success deleting>>>",otp)
//       return NextResponse.json({ success: true, name: email });
//     } else {
//       return NextResponse.json({ success: false });
//     }
//   } catch (error) {
//     return NextResponse.json(
//       { success: false, error: "Invalid request" },
//       { status: 400 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import { executeQuery } from "@/lib/dbConnect";

async function verifyOtp(email: string, otp: string): Promise<boolean> {
  try {
    // Get latest OTP from database
    const response = await executeQuery(
      "SELECT otp FROM otp WHERE email = ? ORDER BY created_at DESC LIMIT 1",
      [email]
    );

    if (!response || response.length === 0) {
      return false;
    }

    const otpFromDb = response[0].otp;

    // Compare OTPs (both as strings to avoid type coercion issues)
    return String(otp) === String(otpFromDb);
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return false;
  }
}

export async function POST(req: Request) {
  try {
    const { email, otp } = await req.json();

    if (!email || !otp) {
      return NextResponse.json(
        { success: false, error: "Email and OTP are required" },
        { status: 400 }
      );
    }

    // Verify OTP
    const isValid = await verifyOtp(email, otp);

    if (isValid) {
      // Delete used OTP
      await executeQuery("DELETE FROM otp WHERE email = ?", [email]);

      return NextResponse.json({
        success: true,
        name: email,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Invalid or expired OTP",
      });
    }
  } catch (error) {
    console.error("Error in OTP verification:", error);
    return NextResponse.json(
      { success: false, error: "Invalid request" },
      { status: 400 }
    );
  }
}
