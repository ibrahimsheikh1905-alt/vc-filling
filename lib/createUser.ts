import { executeQuery } from "@/lib/dbConnect";
import getFormattedDate from "@/hooks/useGetDate";

// Define the type for the user data
export interface UserData {
  email: string;
  firstName: string;
  lastName: string;
  mobilePhone: string;
}

/**
 * Check if a user exists by email, and insert a new user if not.
 * @param {UserData} userData - User details (email, firstName, lastName, mobilePhone).
 * @returns {Promise<{message: string, user?: any}>} - Returns a message with optional user data.
 */
export async function createUser(
  userData: UserData
): Promise<{ message: string; user?: any }> {
    
  const { email, firstName, lastName, mobilePhone } = userData;
  
  console.log("createUser called with:", userData);
  
  try {
    // Check if the user already exists in the "users" table
    const userCheckQuery = `SELECT * FROM users WHERE email = ?;`;
    const existingUsers = await executeQuery(userCheckQuery, [email]);
    console.log("Existing users found:", existingUsers.length);
    
    if (existingUsers.length === 0) {
      // Insert new user if not found
      const insertUserQuery = `
        INSERT INTO users (email, first_name, last_name, mobile_phone, created_at) 
        VALUES (?, ?, ?, ?, ?);
      `;
      const userValues = [
        email,
        firstName,
        lastName,
        mobilePhone,
        getFormattedDate(),
      ];

      console.log("Inserting new user with values:", userValues);
      
      const newUser = await executeQuery(insertUserQuery, userValues);
      console.log("User insert result:", newUser);
      
      // Get the inserted ID - handle both insertId and lastInsertRowid
      const insertedId = newUser.insertId || newUser.lastInsertRowid;
      console.log("Inserted user ID:", insertedId, "Type:", typeof insertedId);
      
      if (!insertedId) {
        console.error("Failed to get inserted user ID");
        throw new Error("Failed to get inserted user ID");
      }
      
      // Fetch the newly created user
      const userFetchQuery = `SELECT * FROM users WHERE id = ?;`;
      const fetchedUser = await executeQuery(userFetchQuery, [insertedId]);
      console.log("Fetched user:", fetchedUser);
      
      if (!fetchedUser || fetchedUser.length === 0) {
        console.error("Failed to fetch newly created user");
        throw new Error("Failed to fetch newly created user");
      }
      
      console.log("User created successfully with ID:", fetchedUser[0].id);
      return { message: "User created successfully", user: fetchedUser[0] };
    } else {
      console.log("User already exists with ID:", existingUsers[0].id);
      // If user exists, return a message and the existing user
      return { message: "User already exists", user: existingUsers[0] };
    }
  } catch (error) {
    console.error("Error in createUser:", error);
    throw new Error("Failed to check user existence: " + String(error));
  }
}
