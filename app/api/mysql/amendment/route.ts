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
        await handleUsers(userResponse.user, "amendment");
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
      "address_line_2",
      "amend_info",
      "city",
      "company_name",
      "email",
      "designator",
      "entity_type",
      "first_name",
      "last_name",
      "mobile_phone",
      "name_change_option",
      "new_company_name",
      "new_designator",
      "state",
      "state_filling_time",
      "state_of_formation",
      "state_of_service",
      "street_address",
      "zip_code",
      "created_at",
    ];

    // Construct the query dynamically based on the fields
    const query = `
      INSERT INTO amendment (
        ${fields.join(", ")}
      ) VALUES (
        ${fields.map(() => "?").join(", ")}
      );
    `;

    const values = [
      data.addressLine2 ?? null,
      data.amendInfo ?? null,
      data.city ?? null,
      data.companyName ?? null,
      data.email ?? null,
      data.designator ?? null,
      data.entityType ?? null,
      data.firstName ?? null,
      data.lastName ?? null,
      data.mobilePhone ?? null,
      data.nameChangeOption ?? null,
      data.newCompanyName ?? null,
      data.newDesignator ?? null,
      data.state ?? null,
      data.stateFillingTime ?? null,
      data.stateOfFormation ?? null,
      data.stateOfService ?? null,
      data.streetAddress ?? null,
      data.zipCode ?? null,
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
      `amendment-${insertedId}`,
      getFormattedDate(),
    ]);

    return NextResponse.json({
      message: "Data inserted successfully.",
      usableId: `amendment-${insertedId}`,
    });
  } catch (error) {
    console.error("Error inserting data:", error);
    return NextResponse.json(
      { error: "Failed to insert data" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    // const { email } = await req.json();
    // const email = params.email;
    const url = new URL(req.url);
    const email = url.searchParams.get("email");
    // console.log("email>>>>>>>",email);
    const response = await executeQuery(
      "SELECT * FROM amendment WHERE email = ? ORDER BY created_at DESC",
      [email]
    );
    return NextResponse.json({ data: response });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}