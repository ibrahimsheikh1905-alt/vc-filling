import { NextResponse, NextRequest } from "next/server";
import { executeQuery } from "@/lib/dbConnect";
import getFormattedDate from "@/hooks/useGetDate";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log("Received form data:", JSON.stringify(data));

    // Define fields matching the virtual_address table schema
    const fields = [
      "entity_type",
      "state_of_formation",
      "company_name",
      "designator",
      "mobile_phone",
      "email",
      "last_name",
      "first_name",
      "street_address",
      "address_line2",
      "city",
      "state",
      "zip_code",
      "state_of_service",
      "date_of_formation",
      "notify_state_of_service",
      "member_number",
      "members",
      "created_at",
    ];

    // Build values array (similar to cert-good-standing route pattern)
    const values = [
      data.entityType ?? null,
      data.stateOfFormation ?? data.state ?? null,
      data.companyName ?? null,
      data.designator ?? null,
      data.mobilePhone ?? null,
      data.email ?? null,
      data.lastName ?? null,
      data.firstName ?? null,
      data.streetAddress ?? null,
      data.addressLine2 ?? null,
      data.city ?? null,
      data.state ?? null,
      data.zipCode ?? null,
      data.stateOfService ?? null,
      data.dateOfFormation ?? null,
      data.notifyStateOfService ?? null,
      data.memberNumber ?? null,
      data.members ?? null,
      getFormattedDate(),
    ];

    // Construct the INSERT query
    const query = `
      INSERT INTO virtual_address (
        ${fields.join(", ")}
      ) VALUES (
        ${fields.map(() => "?").join(", ")}
      )
    `;

    const result = await executeQuery(query, values);
    const insertedId = result.insertId;

    if (!insertedId) {
      throw new Error("Failed to get insert ID");
    }

// Insert into all_form_data - 10 columns (entity_type, company_name, designator, first_name, last_name, email, mobile_phone, usable_id, created_at, user_id)
    const allFormDataQuery = `INSERT INTO all_form_data (entity_type, company_name, designator, first_name, last_name, email, mobile_phone, usable_id, created_at, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    
    await executeQuery(allFormDataQuery, [
      data.entityType ?? null,
      data.companyName ?? null,
      data.designator ?? null,
      data.firstName ?? null,
      data.lastName ?? null,
      data.email ?? null,
      data.mobilePhone ?? null,
      `virtual_address-${insertedId}`,
      getFormattedDate(),
      null, // user_id
    ]);

// Combine companyName and designator for the full company name
    const fullCompanyName = [data.companyName, data.designator].filter(Boolean).join(" ");
    const state = data.stateOfService || data.stateOfFormation || data.state || "";
    
    // Parse userId if provided
    let parsedUserId: number | null = null;
    if (data.userId) {
      const userIdNum = parseInt(data.userId);
      if (!isNaN(userIdNum)) {
        parsedUserId = userIdNum;
      }
    }

// Create Application record for Admin panel Submissions page (NOT VirtualMailbox - that goes to Virtual Mailbox page)
    // Parse members data if provided (from step-2)
    let parsedMembers = "";
    if (data.members) {
      try {
        const membersArray = typeof data.members === 'string' 
          ? JSON.parse(data.members) 
          : data.members;
        if (Array.isArray(membersArray) && membersArray.length > 0) {
          // Format members as readable ownership structure
          parsedMembers = membersArray
            .map((m: any) => {
              if (m.getFirstName && m.getLastName) {
                return `${m.getFirstName} ${m.getLastName}`;
              }
              if (m.getCompanyName) {
                return m.getCompanyName;
              }
              return "";
            })
            .filter(Boolean)
            .join(", ");
        }
      } catch (e) {
        console.log("Error parsing members:", e);
      }
    }

    try {
      await prisma.application.create({
        data: {
          userId: parsedUserId,
          type: "Virtual Address",
          company: fullCompanyName || "N/A",
          state: state,
          status: "Submitted",
          details: JSON.stringify({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            mobilePhone: data.mobilePhone,
            streetAddress: data.streetAddress,
            addressLine2: data.addressLine2,
            city: data.city,
            zipCode: data.zipCode,
            entityType: data.entityType,
            stateOfFormation: data.stateOfFormation,
            stateOfService: data.stateOfService,
            dateOfFormation: data.dateOfFormation,
            memberNumber: data.memberNumber,
            // Include ownership/members data - prioritize step-2 members, fall back to firstName/lastName
            owners: parsedMembers || (data.firstName && data.lastName ? `${data.firstName} ${data.lastName}` : ""),
            members: parsedMembers || (data.firstName && data.lastName ? `${data.firstName} ${data.lastName}` : ""),
            memberDetails: parsedMembers || (data.firstName && data.lastName ? `${data.firstName} ${data.lastName}` : ""),
            // Include payment amount
            amount: data.amount || "",
          }),
          submittedAt: getFormattedDate(),
          updatedAt: getFormattedDate(),
        },
      });
      console.log("Created Prisma Application record for admin panel Submissions");
    } catch (appError) {
      console.error("Error creating Application (non-fatal):", appError);
    }

    return NextResponse.json({
      success: true,
      message: "Data inserted successfully.",
      usableId: `virtual_address-${insertedId}`,
    });
  } catch (error) {
    console.error("Error inserting data:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { error: "Failed to insert data", details: errorMessage },
      { status: 500 }
    );
  }
}
