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
        await handleUsers(userResponse.user, "virtual_address");
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

    // Construct the query dynamically based on the fields
    const query = `
      INSERT INTO virtual_address (
        ${fields.join(", ")}
      ) VALUES (
        ${fields.map(() => "?").join(", ")}
      );
    `;

    const values = [
      data.entityType ?? null,
      data.stateOfFormation ?? null,
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
      `virtual_address-${insertedId}`,
      getFormattedDate(),
    ]);


    return NextResponse.json({
      message: "Data inserted successfully.",
      usableId: `virtual_address-${insertedId}`,
    });
  } catch (error) {
    console.error("Error inserting data:", error);
    return NextResponse.json(
      { error: "Failed to insert data" },
      { status: 500 }
    );
  }
}
