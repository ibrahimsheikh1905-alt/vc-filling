import { NextResponse, NextRequest } from "next/server";
import { executeQuery } from "@/lib/dbConnect";

function getFormattedDate(): string {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log("Reinstatement data received:", JSON.stringify(data));
    
    // Insert into reinstatement table
    const reinstatementQuery = `
      INSERT INTO reinstatement (
        mobile_phone, email, last_name, first_name, company_name, designator, 
        entity_type, state_of_formation, street_address, address_line2, 
        city, state, zip_code, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    const reinstatementValues = [
      data.mobilePhone || null,
      data.email || null,
      data.lastName || null,
      data.firstName || null,
      data.companyName || null,
      data.designator || null,
      data.entityType || null,
      data.stateOfFormation || data.state || null,
      data.streetAddress || null,
      data.addressLine2 || null,
      data.city || null,
      data.state || null,
      data.zipCode || null,
      getFormattedDate(),
    ];
    
    console.log("Inserting reinstatement with values:", reinstatementValues);
    
    let result;
    try {
      result = await executeQuery(reinstatementQuery, reinstatementValues);
      console.log("Reinstatement insert result:", result);
    } catch (reinstatementError: any) {
      console.error("Error inserting into reinstatement:", reinstatementError);
      return NextResponse.json(
        { error: "Failed to insert reinstatement: " + reinstatementError.message },
        { status: 500 }
      );
    }
    
    const insertedId = result?.insertId || result?.lastInsertRowid || 1;
    console.log("Inserted ID:", insertedId);
    
    // Insert into all_form_data
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
      `reinstatement-${insertedId}`,
      getFormattedDate(),
    ];
    
    console.log("Inserting all_form_data with values:", allFormValues);
    
    try {
      await executeQuery(allFormQuery, allFormValues);
    } catch (allFormError: any) {
      console.error("Error inserting into all_form_data:", allFormError);
    }

    return NextResponse.json({
      message: "Data inserted successfully.",
      usableId: `reinstatement-${insertedId}`,
    });
  } catch (error: any) {
    console.error("Error in reinstatement route:", error);
    return NextResponse.json(
      { error: "Server error: " + error.message },
      { status: 500 }
    );
  }
}
