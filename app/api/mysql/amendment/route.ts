import { NextResponse, NextRequest } from "next/server";
import { executeQuery } from "@/lib/dbConnect";
import getFormattedDate from "@/hooks/useGetDate";
import { createUser, UserData } from "@/lib/createUser";
import handleUsers from "@/lib/handleUsers";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    console.log("Amendment API received data:", JSON.stringify(data));

    const userData: UserData = {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      mobilePhone: data.mobilePhone,
    };

// Check if the user exists or create a new user
    // Make user processing non-fatal - don't fail the whole submission if it fails
    let processedUserId = data.userId ?? null;
    let userError = null;
    
    try {
      // First, try to use the provided userId from the client ONLY if it's a valid number
      const providedUserId = parseInt(String(data.userId), 10);
      if (providedUserId && !isNaN(providedUserId) && providedUserId > 0) {
        console.log("Using provided userId from client:", providedUserId);
        processedUserId = providedUserId;
      } else if (userData.email) {
        // Try to find existing user by email first
        console.log("Searching for existing user by email:", userData.email);
        try {
          const existingUserQuery = `SELECT id FROM users WHERE email = ? LIMIT 1`;
          const existingUsers = await executeQuery(existingUserQuery, [userData.email]);
          
          if (existingUsers && existingUsers.length > 0) {
            // User exists, use their ID
            processedUserId = Number(existingUsers[0].id);
            console.log("Found existing user with ID:", processedUserId);
          } else {
            // Create new user if not found
            console.log("Creating new user with email:", userData.email);
            const userResponse = await createUser(userData);
            console.log("User response:", JSON.stringify(userResponse));
            
            if (userResponse.user && userResponse.user.id) {
              const createdUserId = userResponse.user.id;
              console.log("User created with ID:", createdUserId, "Type:", typeof createdUserId);
              processedUserId = Number(createdUserId);
              console.log("processedUserId set to:", processedUserId);
            } else {
              // Try to fetch user again after creation
              console.log("User ID not in response, fetching by email...");
              const fetchUserQuery = `SELECT id FROM users WHERE email = ? LIMIT 1`;
              const fetchedUsers = await executeQuery(fetchUserQuery, [userData.email]);
              if (fetchedUsers && fetchedUsers.length > 0) {
                processedUserId = Number(fetchedUsers[0].id);
                console.log("Fetched user ID:", processedUserId);
              }
            }
          }
        } catch (emailError) {
          console.error("Error searching/creating user by email:", emailError);
          // Try direct insert as fallback
          console.log("Trying direct user insert as fallback...");
          const insertQuery = `INSERT INTO users (email, first_name, last_name, mobile_phone, created_at) VALUES (?, ?, ?, ?, ?)`;
          const insertValues = [userData.email, userData.firstName, userData.lastName, userData.mobilePhone, getFormattedDate()];
          const insertResult = await executeQuery(insertQuery, insertValues);
          console.log("Direct insert result:", insertResult);
          
          if (insertResult && insertResult.insertId) {
            processedUserId = Number(insertResult.insertId);
            console.log("Got ID from direct insert:", processedUserId);
          }
        }
        
        // Record this form submission for the user only if we have a valid ID
        if (processedUserId && processedUserId > 0) {
          try {
            await handleUsers({ id: processedUserId, email: userData.email, first_name: userData.firstName, last_name: userData.lastName, mobile_phone: userData.mobilePhone }, "amendment");
            console.log("handleUsers called successfully");
          } catch (handleError) {
            console.error("Error in handleUsers:", handleError);
          }
        } else {
          console.log("Warning: No valid processedUserId, skipping handleUsers");
        }
      } else {
        console.log("No email provided, skipping user creation");
      }
    } catch (error) {
      userError = error;
      console.error("Error processing user (catch all):", error);
    }
    
    console.log("Final processedUserId:", processedUserId, "Type:", typeof processedUserId);
    
    // Log if there was a user error but we're continuing
    if (userError) {
      console.log("Continuing with userError:", userError);
    }

    // Construct the query and values
    console.log("Building amendment insert query...");

// Define the fields we expect in the same order as the SQL query
    const fields = [
      "user_id",
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
      processedUserId,
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
      data.stateFillingTime ?? "standard", // Default to standard if not provided
      data.stateOfFormation ?? null,
      data.stateOfService ?? null,
      data.streetAddress ?? null,
      data.zipCode ?? null,
      getFormattedDate(),
    ];

    // Log the state filling time for debugging
    console.log("State Filling Time received:", data.stateFillingTime);
    console.log("Full values array:", values);
    console.log("Inserting amendment data with fields:", fields.length, "values:", values.length);
    const result = await executeQuery(query, values);
    console.log("Amendment insert result:", result);
    const insertedId = result.insertId;
    console.log("Inserted ID:", insertedId);

    console.log("Inserting into all_form_data...");
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
      userId: processedUserId,
      userEmail: userData.email, // Return the email that was matched/used
    });
  } catch (error) {
    console.error("Error inserting data:", error);
    return NextResponse.json(
      { error: "Failed to insert data", details: String(error) },
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