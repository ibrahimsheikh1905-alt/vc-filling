import { NextResponse, NextRequest } from "next/server";
import { executeQuery } from "@/lib/dbConnect";
import getFormattedDate from "@/hooks/useGetDate";
import { createUser, UserData } from "@/lib/createUser";
import handleUsers from "@/lib/handleUsers";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log("Dissolution data received:", JSON.stringify(data));
    
    // First, create or get the user
    const userData: UserData = {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      mobilePhone: data.mobilePhone,
    };

    let userId: number | null = null;
    try {
      const userResponse = await createUser(userData);
      if (userResponse.user) {
        userId = userResponse.user.id;
        console.log("User ID:", userId);
        await handleUsers(userResponse.user, "dissolution");
      }
    } catch (userError: any) {
      console.error("Error processing user:", userError);
      // Continue without user_id - don't fail the whole request
    }
    
    // Insert into dissolution table
    const dissolutionQuery = `
      INSERT INTO dissolution (
        mobile_phone, email, last_name, first_name, company_name, designator, 
        entity_type, state_of_formation, street_address, address_line2, 
        city, state, zip_code, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    const dissolutionValues = [
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
    
    console.log("Inserting dissolution with values:", dissolutionValues);
    
    let result;
    try {
      result = await executeQuery(dissolutionQuery, dissolutionValues);
      console.log("Dissolution insert result:", result);
    } catch (dissolutionError: any) {
      console.error("Error inserting into dissolution:", dissolutionError);
      return NextResponse.json(
        { error: "Failed to insert dissolution: " + dissolutionError.message },
        { status: 500 }
      );
    }
    
    const insertedId = result?.insertId || result?.lastInsertRowid || 1;
    console.log("Inserted ID:", insertedId);
    
    // Insert into all_form_data with user_id
    const allFormQuery = `
      INSERT INTO all_form_data (
        entity_type, company_name, designator, first_name, last_name, 
        email, mobile_phone, usable_id, created_at, user_id
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    const allFormValues = [
      data.entityType || null,
      data.companyName || null,
      data.designator || null,
      data.firstName || null,
      data.lastName || null,
      data.email || null,
      data.mobilePhone || null,
      `dissolution-${insertedId}`,
      getFormattedDate(),
      userId,
    ];
    
    console.log("Inserting all_form_data with values:", allFormValues);
    
    try {
      await executeQuery(allFormQuery, allFormValues);
    } catch (allFormError: any) {
      console.error("Error inserting into all_form_data:", allFormError);
      // Continue anyway - dissolution was already saved
    }
    
    // Try to create Prisma application (optional - won't fail if this errors)
    try {
      await prisma.application.create({
        data: {
          type: "dissolution",
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
          }),
          submittedAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      });
    } catch (prismaError) {
      console.error("Prisma error (non-fatal):", prismaError);
    }

    return NextResponse.json({
      message: "Data inserted successfully.",
      usableId: `dissolution-${insertedId}`,
      userId: userId,
    });
  } catch (error: any) {
    console.error("Error in dissolution route:", error);
    return NextResponse.json(
      { error: "Server error: " + error.message },
      { status: 500 }
    );
  }
}
