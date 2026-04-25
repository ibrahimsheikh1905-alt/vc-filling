// import { NextRequest, NextResponse } from "next/server";
// import nodemailer from "nodemailer";
// import { executeQuery } from "@/lib/dbConnect";

// // Function to generate OTP
// function generateOtp() {
//   return Math.floor(100000 + Math.random() * 900000).toString(); // Generates a 6-digit OTP
// }

// // POST request handler for the route
// export async function POST(request: NextRequest) {
//   try {
//     const { email } = await request.json();

//     if (!email) {
//       return NextResponse.json(
//         { success: false, message: "Email is required" },
//         { status: 400 }
//       );
//     }

//     const otp = generateOtp();
//     // Configure Nodemailer transporter
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_FROM, // Your email account
//         pass: process.env.EMAIL_PASS, // Your email password
//       },
//     });

//     // Email options
//     const mailOptions = {
//       from: process.env.EMAIL_FROM, // Sender address
//       to: email, // List of receivers
//       subject: "Your OTP Code", // Subject line
//       text: `Your OTP code is ${otp}`, // Plain text body
//     };

//     // Send email
//     transporter.sendMail(mailOptions, async () => {
//       try {
//         const res = await executeQuery(
//           "INSERT INTO otp (email, otp) VALUES (?, ?)",
//           [email, otp]
//         );
//         if (res) {
//           const insertId = res.insertId;
//           setTimeout(
//             () => {
//               executeQuery("DELETE FROM otp WHERE id = ?", [insertId]);
//             },
//             10 * 60 * 1000
//           );
//           // console.log("ressdsdsd", res);
//           return NextResponse.json(
//             {
//               message: `OTP sent successfully ${process.env.EMAIL_FROM}`,
//               success: true,
//             },
//             { status: 200 }
//           );
//         }
//       } catch (error) {
//         console.log(error);
//         return NextResponse.json({ success: false });
//       }
//     });
//     return NextResponse.json(
//       {
//         message: `OTP sent successfully ${process.env.EMAIL_FROM}`,
//         success: true,
//       },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error sending OTP:", error);
//     return NextResponse.json(
//       { success: false, message: "Something went wrong" },
//       { status: 500 }
//     );
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { executeQuery } from "@/lib/dbConnect";

// Function to generate OTP
function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString(); // Generates a 6-digit OTP
}

// POST request handler for the route
export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    const otp = generateOtp();

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP code is ${otp}`,
    };

    try {
      // First, save OTP to database
      const res = await executeQuery(
        "INSERT INTO otp (email, otp) VALUES (?, ?)",
        [email, otp]
      );

      if (!res) {
        throw new Error("Failed to save OTP to database");
      }

      const insertId = res.insertId;

      // Then send email
      await transporter.sendMail(mailOptions);

      // Set timeout to delete OTP after 10 minutes
      setTimeout(
        async () => {
          try {
            await executeQuery("DELETE FROM otp WHERE id = ?", [insertId]);
          } catch (error) {
            console.error("Error deleting expired OTP:", error);
          }
        },
        10 * 60 * 1000
      );

      return NextResponse.json(
        {
          message: "OTP sent successfully",
          success: true,
        },
        { status: 200 }
      );
    } catch (dbError) {
      console.error("Database or email error:", dbError);
      return NextResponse.json(
        { success: false, message: "Failed to send OTP" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error sending OTP:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
