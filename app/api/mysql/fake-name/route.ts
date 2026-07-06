import { NextResponse, NextRequest } from "next/server";
import { executeQuery } from "@/lib/dbConnect";
import getFormattedDate from "@/hooks/useGetDate";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log("=== FAKE NAME FORM SUBMISSION ===");
    console.log("Received data:", JSON.stringify(data));

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
      "fake_company_name",
      "business_purpose",
      "street_address",
      "address_line2",
      "city",
      "state",
      "zip_code",
      "created_at",
    ];

    // Construct the query dynamically based on the fields
    const query = `
      INSERT INTO fake_name (
        ${fields.join(", ")}
      ) VALUES (
        ${fields.map(() => "?").join(", ")}
      );
    `;

    const values = [
      data.mobilePhone || null,
      data.email || null,
      data.lastName || null,
      data.firstName || null,
      data.companyName || null,
      data.designator || null,
      data.stateOfService || null,
      data.entityType || null,
      data.stateOfFormation || null,
      data.fakeCompanyName || null,
      data.businessPurpose || null,
      data.streetAddress || null,
      data.addressLine2 || null,
      data.city || null,
      data.state || null,
      data.zipCode || null,
      getFormattedDate(),
    ];

    console.log("Inserting fake_name with values:", values);
    const result = await executeQuery(query, values);
    console.log("fake_name result:", result);
    
    const insertedId = result.insertId;
    console.log("Inserted ID:", insertedId);

    if (!insertedId) {
      throw new Error("Failed to get insert ID");
    }

    // Also insert into all_form_data
    const allFormQuery = `
      INSERT INTO all_form_data (
        entity_type, company_name, designator, first_name, last_name,
        email, mobile_phone, usable_id, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    const allFormValues = [
      data.entityType || null,
      data.companyName || null,
      data.designator || null,
      data.firstName || null,
      data.lastName || null,
      data.email || null,
      data.mobilePhone || null,
      `fake_name-${insertedId}`,
      getFormattedDate(),
    ];

console.log("Inserting all_form_data...");
    await executeQuery(allFormQuery, allFormValues);
    console.log("all_form_data inserted successfully");

    // Also insert into applications table so it shows in admin submissions
    const applicationsQuery = `
      INSERT INTO applications (
        userId, type, company, state, status, details, submittedAt, createdAt
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    // Get userId from localStorage if available
    let userId = null;
    if (typeof window !== 'undefined') {
      const storedUserId = localStorage.getItem('userId');
      if (storedUserId) {
        userId = parseInt(storedUserId);
      }
    }
    
    const applicationDetails = JSON.stringify({
      entityType: data.entityType,
      companyName: data.companyName,
      designator: data.designator,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      mobilePhone: data.mobilePhone,
      fakeCompanyName: data.fakeCompanyName,
      businessPurpose: data.businessPurpose,
      streetAddress: data.streetAddress,
      addressLine2: data.addressLine2,
      city: data.city,
      state: data.state,
      stateOfFormation: data.stateOfFormation,
      stateOfService: data.stateOfService,
      zipCode: data.zipCode,
      amount: 150
    });
    
    const applicationValues = [
      userId,
      'fake-name',
      data.fakeCompanyName || data.companyName,
      data.stateOfService || data.state,
      'submitted',
      applicationDetails,
      getFormattedDate(),
      getFormattedDate(),
    ];
    
    console.log("Inserting into applications table...");
    await executeQuery(applicationsQuery, applicationValues);
    console.log("applications table updated with fake-name submission");

    console.log("=== SUCCESS ===");
    return NextResponse.json({
      message: "Data inserted successfully.",
      usableId: `fake_name-${insertedId}`,
    });
    
  } catch (error) {
    console.error("=== ERROR ===");
    console.error("Error:", error);
    
    return NextResponse.json(
      { error: "Failed to insert data: " + String(error) },
      { status: 500 }
    );
  }
}
