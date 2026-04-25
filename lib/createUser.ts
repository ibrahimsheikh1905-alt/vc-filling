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
  try {
    // Check if the user already exists in the "users" table
    const userCheckQuery = `SELECT * FROM users WHERE email = ?;`;
    const existingUsers = await executeQuery(userCheckQuery, [email]);
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

      const newUser = await executeQuery(insertUserQuery, userValues);
      // If user does not exists, return a message and the new user
      const userFetchQuery = `SELECT * FROM users WHERE id = ?;`;
      const fetchedUser = await executeQuery(userFetchQuery, [newUser.insertId]);
      return { message: "User created successfully", user: fetchedUser[0] };
    } else {
      // console.log(existingUsers[0]);
      // If user exists, return a message and the existing user
      return { message: "User already exists", user: existingUsers[0] };
    }
  } catch (error) {
    console.error("Error checking user:", error);
    throw new Error("Failed to check user existence");
  }
}
