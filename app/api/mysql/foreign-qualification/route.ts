import { NextResponse, NextRequest } from "next/server";
import { executeQuery } from "@/lib/dbConnect";
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
        await handleUsers(userResponse.user, "foreign_qualification");
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
      "country",
      "address_option",
      "agent_type",
      "agent_first_name",
      "agent_last_name",
      "agent_company_name",
      "agent_zip_code",
      "agent_state",
      "agent_city",
      "agent_address_line2",
      "agent_street_address",
      "agent_option",
      "member_number",
      "members",
      "created_at",
    ];

    // Construct the query dynamically based on the fields
    const query = `
      INSERT INTO foreign_qualification (
        ${fields.join(", ")}
      ) VALUES (
        ${fields.map(() => "?").join(", ")}
      );
    `;

    const values = [
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
      data.country ?? null,
      data.addressOption ?? null,
      data.agentType ?? null,
      data.agentFirstName ?? null,
      data.agentLastName ?? null,
      data.agentCompanyName ?? null,
      data.agentZipCode ?? null,
      data.agentState ?? null,
      data.agentCity ?? null,
      data.agentAddressLine2 ?? null,
      data.agentStreetAddress ?? null,
      data.agentOption ?? null,
      data.memberNumber ?? null,
      data.members ?? null,
      getFormattedDate(),
    ];

    const result = await executeQuery(query, values);
    const insertedId = result.insertId;

    const newQuery = `INSERT INTO all_form_data (entity_type, company_name, designator, first_name, last_name, email, mobile_phone, usable_id, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    await executeQuery(newQuery, [
      data.entityType,
      data.companyName,
      data.designator,
      data.firstName,
      data.lastName,
      data.email,
      data.mobilePhone,
      `foreign_qualification-${insertedId}`,
      getFormattedDate(),
    ]);

    return NextResponse.json({
      message: "Data inserted successfully.",
      usableId: `foreign_qualification-${insertedId}`,
    });
  } catch (error) {
    console.error("Error inserting data:", error);
    return NextResponse.json(
      { error: "Failed to insert data" },
      { status: 500 }
    );
  }
}
