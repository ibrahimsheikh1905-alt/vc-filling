import { NextResponse, NextRequest } from "next/server";
import { executeQuery } from "@/lib/dbConnect";
import getFormattedDate from "@/hooks/useGetDate";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    
    console.log("=== Annual Report API ===");
    console.log("Received data keys:", Object.keys(data));
    
    // Validate minimum required fields for the form
    if (!data.companyName || !data.entityType) {
      console.error("Missing required form fields - companyName:", data.companyName, "entityType:", data.entityType);
      return NextResponse.json(
        { error: "Missing required form fields", details: { companyName: !!data.companyName, entityType: !!data.entityType } },
        { status: 400 }
      );
    }

    // Define the fields we expect in the same order as the SQL query
    const fields = [
      "agent_type",
      "agent_first_name",
      "agent_last_name",
      "agent_company_name",
      "agent_zip_code",
      "agent_state",
      "agent_city",
      "agent_address_line2",
      "agent_street_address",
      "mobile_phone",
      "email",
      "last_name",
      "first_name",
      "company_name",
      "designator",
      "date_of_formation",
      "entity_type",
      "state_of_formation",
      "street_address",
      "address_line2",
      "city",
      "state",
      "zip_code",
      "member_number",
      "members",
      "same_as_company_address",
      "mail_street_address",
      "mail_address_line2",
      "mail_city",
      "mail_state",
      "mail_zip_code",
      "created_at",
    ];

    console.log("Number of fields:", fields.length);

// Construct the query dynamically based on the fields
    const query = `
      INSERT INTO annual_report (
        ${fields.join(", ")}
      ) VALUES (
        ${fields.map(() => "?").join(", ")}
      )
    `;

    console.log("Query:", query.replace(/\s+/g, ' ').trim().substring(0, 100) + "...");

// Convert boolean values to database-compatible values (SQLite can't handle JavaScript booleans)
    const toDbValue = (val: any) => {
      if (val === true) return "1";
      if (val === false) return "0";
      if (val === null || val === undefined || val === "") return null;
      return val;
    };

    const values = [
      toDbValue(data.agentType),
      toDbValue(data.agentFirstName),
      toDbValue(data.agentLastName),
      toDbValue(data.agentCompanyName),
      toDbValue(data.agentZipCode),
      toDbValue(data.agentState),
      toDbValue(data.agentCity),
      toDbValue(data.agentAddressLine2),
      toDbValue(data.agentStreetAddress),
      toDbValue(data.mobilePhone),
      toDbValue(data.email),
      toDbValue(data.lastName),
      toDbValue(data.firstName),
      toDbValue(data.companyName),
      toDbValue(data.designator),
      toDbValue(data.dateOfFormation),
      toDbValue(data.entityType),
      toDbValue(data.stateOfFormation),
      toDbValue(data.streetAddress),
      toDbValue(data.addressLine2),
      toDbValue(data.city),
      toDbValue(data.state),
      toDbValue(data.zipCode),
      toDbValue(data.memberNumber),
      toDbValue(data.members),
      toDbValue(data.sameAsCompanyAddress),
      toDbValue(data.mailStreetAddress),
      toDbValue(data.mailAddressLine2),
      toDbValue(data.mailCity),
      toDbValue(data.mailState),
      toDbValue(data.mailZipCode),
      getFormattedDate(),
    ];

    console.log("Number of values:", values.length);
    console.log("Values sample:", values.slice(0, 5).map(v => v === null ? "NULL" : String(v).substring(0, 20)));
    
    // Ensure field count matches value count
    if (fields.length !== values.length) {
      console.error("MISMATCH: fields count:", fields.length, "values count:", values.length);
      return NextResponse.json(
        { error: "Internal error: field/value count mismatch" },
        { status: 500 }
      );
    }

    let result;
    let insertedId;
    
    try {
      console.log("Calling executeQuery...");
      result = await executeQuery(query, values);
      console.log("executeQuery result:", result);
      insertedId = result.insertId;
      console.log("Inserted ID:", insertedId);
    } catch (sqlError: any) {
      console.error("SQL Error:", sqlError.message || sqlError);
      return NextResponse.json(
        { error: "Failed to insert annual report data", details: sqlError.message || String(sqlError) },
        { status: 500 }
      );
    }
    
    // Insert into all_form_data
    const newQuery = `INSERT INTO all_form_data (entity_type, company_name, designator, first_name, last_name, email, mobile_phone, usable_id, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    try {
      await executeQuery(newQuery, [
        data.entityType,
        data.companyName,
        data.designator,
        data.firstName,
        data.lastName,
        data.email,
        data.mobilePhone,
        `annual_report-${insertedId}`,
        getFormattedDate(),
      ]);
      console.log("Form data added to all_form_data table");
    } catch (sqlError: any) {
      console.error("SQL Error inserting into all_form_data:", sqlError.message || sqlError);
      // Continue but log the error
    }

// ALSO create application entry for admin submissions page
    // Get userId from localStorage - this is set when user logs in
    const userIdStr = req.headers.get("userId") || localStorage.getItem("userId");
    const userId = userIdStr ? parseInt(userIdStr, 10) : null;
    console.log("User ID for Application:", userId, "userIdStr:", userIdStr);
    
    // Use executeQuery for Prisma-based tables
    const applicationQuery = `INSERT INTO Application (userId, type, company, state, status, details, submittedAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    try {
const detailsJson = JSON.stringify({
        entityType: data.entityType,
        companyName: data.companyName,
        designator: data.designator,
        dateOfFormation: data.dateOfFormation,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        mobilePhone: data.mobilePhone,
        agentType: data.agentType,
        memberNumber: data.memberNumber,
        members: data.members,
        usableId: `annual_report-${insertedId}`,
        // Include amount for display in admin submissions page
        amount: data.amount,
        // Include address fields for display in admin submissions modal
        address: data.streetAddress,  // Used by admin page to display full address
        streetAddress: data.streetAddress,
        addressLine2: data.addressLine2,
        city: data.city,
        state: data.state,
        zipCode: data.zipCode,
        stateOfFormation: data.stateOfFormation,
        // Include mail address fields
        sameAsCompanyAddress: data.sameAsCompanyAddress,
        mailStreetAddress: data.mailStreetAddress,
        mailAddressLine2: data.mailAddressLine2,
        mailCity: data.mailCity,
        mailState: data.mailState,
        mailZipCode: data.mailZipCode,
        // Include agent info
        agentFirstName: data.agentFirstName,
        agentLastName: data.agentLastName,
        agentCompanyName: data.agentCompanyName,
        agentStreetAddress: data.agentStreetAddress,
        agentCity: data.agentCity,
        agentState: data.agentState,
        agentZipCode: data.agentZipCode,
      });
      
      await executeQuery(applicationQuery, [
        userId,
        "annual-report",
        data.companyName || null,
        data.stateOfFormation || data.state || null,
        "submitted",
        detailsJson,
        getFormattedDate(),
        getFormattedDate(),
      ]);
      console.log("Application record created for admin submissions page with userId:", userId);
    } catch (appError: any) {
      console.error("Error creating application record:", appError.message || appError);
      // Continue - data is still saved in annual_report table
    }

    console.log("=== Success ===");
    return NextResponse.json({
      success: true,
      message: "Data inserted successfully.",
      usableId: `annual_report-${insertedId}`,
    });
  } catch (error: any) {
    console.error("Error in annual report API:", error.message || error);
    return NextResponse.json(
      { error: "Failed to process annual report", details: error.message || String(error) },
      { status: 500 }
    );
  }
}
