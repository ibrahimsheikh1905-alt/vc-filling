import { executeQuery } from "@/lib/dbConnect";
import getFormattedDate from "@/hooks/useGetDate";

interface User {
  id?: number;
  email: string;
  first_name: string;
  last_name: string;
  mobile_phone: string;
}

async function handleUsers(user: User, formName: string): Promise<void> {
  try {
    let userId = user.id;

    if (!userId) {
      // User doesn't exist, create a new user
      const insertUserQuery = `
        INSERT INTO users (email, first_name, last_name, mobile_phone, created_at)
        VALUES (?, ?, ?, ?, ?);
      `;
      const userValues = [
        user.email,
        user.first_name,
        user.last_name,
        user.mobile_phone,
        getFormattedDate(),
      ];

      const result = await executeQuery(insertUserQuery, userValues);
      userId = result.insertId;
    }

    const insertUserFormQuery = `
      INSERT INTO user_forms (user_id, form_name, created_at)
      VALUES (?, ?, ?);
    `;

    const userFormValues = [userId, formName, getFormattedDate()];

    await executeQuery(insertUserFormQuery, userFormValues);
  } catch (error) {
    console.error("Error in handleUsers:", error);
    throw new Error("Failed to handle user data");
  }
}

export default handleUsers;
