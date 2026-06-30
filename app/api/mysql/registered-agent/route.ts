import { NextResponse, NextRequest } from "next/server";
import { executeQuery } from "@/lib/dbConnect";
import { prisma } from "@/lib/prisma";
import getFormattedDate from "@/hooks/useGetDate";
import { createUser, UserData } from "@/lib/createUser";
import handleUsers from "@/lib/handleUsers";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const userData: UserData = {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      mobilePhone: data.mobilePhone,
    };

    // Check if the user exists or create a new user
    try {
      const userResponse = await createUser(userData);
      if (userResponse.user) {
        console.log(userResponse)
        await handleUsers(userResponse.user, "registered_agent");
      }
    } catch (error) {
      console.error("Error processing user:", error);
      return NextResponse.json(
        { error: "Failed to process user data" },
        { status: 500 }
      );
    }

// Define the fields we expect in the same order as the SQL query
    const fields = [
      "user_id",
      "agent_change_option",
      "mobile_phone",
      "email",
      "last_name",
      "first_name",
      "company_name",
      "designator",
      "state_of_service",
      "entity_type",
      "state_of_formation",
      "street_address",
      "address_line2",
      "city",
      "state",
      "zip_code",
      "created_at",
    ];

    // Construct the query dynamically based on the fields
    const query = `
      INSERT INTO registered_agent (
        ${fields.join(", ")}
      ) VALUES (
        ${fields.map(() => "?").join(", ")}
      );
    `;

const values = [
      data.userId ?? null,
      data.agentChangeOption ?? null,
      data.mobilePhone ?? null,
      data.email ?? null,
      data.lastName ?? null,
      data.firstName ?? null,
      data.companyName ?? null,
      data.designator ?? null,
      data.stateOfService ?? null,
      data.entityType ?? null,
      data.stateOfFormation ?? null,
      data.streetAddress ?? null,
      data.addressLine2 ?? null,
      data.city ?? null,
      data.state ?? null,
      data.zipCode ?? null,
      getFormattedDate(),
    ];

    const result = await executeQuery(query, values);
    const insertedId = result.insertId;

const newQuery = `INSERT INTO all_form_data (user_id, entity_type, company_name, designator, first_name, last_name, email, mobile_phone, usable_id, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    await executeQuery(newQuery, [
      data.userId ?? null,
      data.entityType,
      data.companyName,
      data.designator,
      data.firstName,
      data.lastName,
      data.email,
      data.mobilePhone,
      `registered_agent-${insertedId}`,
      getFormattedDate(),
    ]);

// Also save to Prisma for dashboards
    try {
      const parsedUserId = data.userId ? parseInt(data.userId) : null;
      await prisma.registeredAgent.create({
        data: {
          userId: parsedUserId,
          companyName: data.companyName || "",
          agentName: `${data.firstName || ""} ${data.lastName || ""}`.trim(),
          agentEmail: data.email || "",
          agentPhone: data.mobilePhone || null,
          agentAddress: data.streetAddress ? `${data.streetAddress}${data.addressLine2 ? ', ' + data.addressLine2 : ''}, ${data.city}, ${data.state} ${data.zipCode}` : null,
          state: data.stateOfService || "",
          price: 149,
          status: "Active",
          startDate: new Date().toISOString(),
          renewalDate: null,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      });
      console.log("Saved to Prisma successfully");
    } catch (prismaError) {
      console.error("Error saving to Prisma:", prismaError);
      // Continue even if Prisma fails - SQLite save succeeded
    }

    return NextResponse.json({
      message: "Data inserted successfully.",
      usableId: `registered_agent-${insertedId}`,
    });
  } catch (error) {
    console.error("Error inserting data:", error);
    return NextResponse.json(
      { error: "Failed to insert data" },
      { status: 500 }
    );
  }
}
