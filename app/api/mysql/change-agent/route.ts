import { NextResponse, NextRequest } from "next/server";
import { executeQuery } from "@/lib/dbConnect";
import getFormattedDate from "@/hooks/useGetDate";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    
    // Define the fields matching the change_agent table
    const fields = [
      "user_id",
      "agent_type",
      "agent_first_name",
      "agent_last_name",
      "agent_company_name",
      "agent_street_address",
      "agent_address_line2",
      "agent_city",
      "agent_state",
      "agent_zip_code",
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
      INSERT INTO change_agent (
        ${fields.join(", ")}
      ) VALUES (
        ${fields.map(() => "?").join(", ")}
      )
    `;

    const values = [
      data.userId ?? null,
      data.agentType ?? null,
      data.agentFirstName ?? null,
      data.agentLastName ?? null,
      data.agentCompanyName ?? null,
      data.agentStreetAddress ?? null,
      data.agentAddressLine2 ?? null,
      data.agentCity ?? null,
      data.agentState ?? null,
      data.agentZipCode ?? null,
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

    // Also save to all_form_data for tracking
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
      `change_agent-${insertedId}`,
      getFormattedDate(),
    ]);

    return NextResponse.json({
      message: "Data inserted successfully.",
      usableId: `change_agent-${insertedId}`,
    });
  } catch (error) {
    console.error("Error inserting data:", error);
    return NextResponse.json(
      { error: "Failed to insert data" },
      { status: 500 }
    );
  }
}
