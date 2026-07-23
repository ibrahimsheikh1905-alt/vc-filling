import { NextResponse, NextRequest } from "next/server";
import { executeQuery } from "@/lib/dbConnect";
import getFormattedDate from "@/hooks/useGetDate";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    
    // Skip user handling for now - just insert the trademark data directly
    // User handling can be added later if needed

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
      "trademark_type",
      "using_mark",
      "acknowledgement",
      "product_or_service",
      "trademark_name_or_slogan",
      "created_at",
    ];

    // Construct the query dynamically based on the fields
    const query = `
      INSERT INTO trademark (
        ${fields.join(", ")}
      ) VALUES (
        ${fields.map(() => "?").join(", ")}
      );
    `;

    // Helper function to convert any value to SQLite-compatible type
    const toDbValue = (val: any): any => {
      if (val === undefined || val === null) return null;
      if (typeof val === "boolean") return val === true ? "true" : "false";
      if (typeof val === "string") return val;
      if (typeof val === "number") return val;
      return String(val);
    };

    const values = [
      toDbValue(data.entityType),
      toDbValue(data.stateOfFormation),
      toDbValue(data.companyName),
      toDbValue(data.designator),
      toDbValue(data.mobilePhone),
      toDbValue(data.email),
      toDbValue(data.lastName),
      toDbValue(data.firstName),
      toDbValue(data.streetAddress),
      toDbValue(data.addressLine2),
      toDbValue(data.city),
      toDbValue(data.state),
      toDbValue(data.zipCode),
      toDbValue(data.trademarkType),
      toDbValue(data.usingMark),
      toDbValue(data.acknowledgement),
      toDbValue(data.productOrService),
      toDbValue(data.trademarkNameOrSlogan),
      getFormattedDate(),
    ];

    const result = await executeQuery(query, values);
    const insertedId = result.insertId;

    const newQuery = `INSERT INTO all_form_data (entity_type, company_name, designator, first_name, last_name, email, mobile_phone, usable_id, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    await executeQuery(newQuery, [
      toDbValue(data.entityType),
      toDbValue(data.companyName),
      toDbValue(data.designator),
      toDbValue(data.firstName),
      toDbValue(data.lastName),
      toDbValue(data.email),
      toDbValue(data.mobilePhone),
      `trademark-${insertedId}`,
      getFormattedDate(),
    ]);

    // ALSO create an application record in Prisma so it shows up in admin submissions
    try {
      await prisma.application.create({
        data: {
          type: "trademark",
          company: `${data.companyName} ${data.designator}`.trim(),
          state: data.stateOfFormation || data.state,
          status: "submitted",
          details: JSON.stringify({
            entityType: data.entityType,
            companyName: data.companyName,
            designator: data.designator,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            mobilePhone: data.mobilePhone,
            trademarkType: data.trademarkType,
            trademarkNameOrSlogan: data.trademarkNameOrSlogan,
            productOrService: data.productOrService,
            usingMark: data.usingMark,
            streetAddress: data.streetAddress,
            city: data.city,
            zipCode: data.zipCode,
          }),
          submittedAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      });
    } catch (prismaError) {
      console.error("Error creating Prisma application:", prismaError);
      // Continue even if Prisma fails - the main data is already saved
    }

    return NextResponse.json({
      message: "Data inserted successfully.",
      usableId: `trademark-${insertedId}`,
    });
  } catch (error) {
    console.error("Error inserting data:", error);
    return NextResponse.json(
      { error: "Failed to insert data" },
      { status: 500 }
    );
  }
}
