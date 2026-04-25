import { NextResponse, NextRequest } from "next/server";
import { executeQuery } from "@/lib/dbConnect";
import getFormattedDate from "@/hooks/useGetDate";
import { createUser, UserData } from "@/lib/createUser";
import handleUsers from "@/lib/handleUsers";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const userData: UserData = {
      email: data.clientEmail,
      firstName: data.clientFirstName,
      lastName: data.clientLastName,
      mobilePhone: data.clientPhoneNumber,
    };

    // Check if the user exists or create a new user
    try {
      const userResponse = await createUser(userData);
      if (userResponse.user) {
        console.log(userResponse);
        await handleUsers(userResponse.user, "form_LLC");
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
      "entity_type",
      "package_type",
      "state_name",
      "selected_features",
      "company_name",
      "designator",
      "company_address_option",
      "business_purpose",
      "industry_keyword",
      "state_filling_time",
      "email",
      "first_name",
      "last_name",
      "mobile_phone",
      "contact_consent",
      "company_address",
      "premium_service_package",
      "member_number",
      "members",
      "president",
      "secretary",
      "treasurer",
      "vice_president",
      "agent_option",
      "agent_info",
      "is_foreign",
      "ein_first_name",
      "ein_last_name",
      "id_type",
      "id_type_number",
      "physical_strt_address",
      "use_bank",
      "tax_consultation_option",
      "license_type",
      "license_permit_address",
      "share_price",
      "share_number",
      "shareholder_number",
      "shareholder_members",
      "created_at",
    ];

    // Construct the query dynamically based on the fields
    const query = `
      INSERT INTO form_LLC (
        ${fields.join(", ")}
      ) VALUES (
        ${fields.map(() => "?").join(", ")}
      );
    `;

    const values = [
      data.entityType ?? null,
      data.packageType ?? null,
      data.stateName ?? null,
      data.selectedFeatures ?? null,
      data.companyName ?? null,
      data.designator ?? null,
      data.companyAddressOption ?? null,
      data.businessPurpose ?? null,
      data.industryKeyword ?? null,
      data.stateFillingTime ?? null,
      data.clientEmail ?? null,
      data.clientFirstName ?? null,
      data.clientLastName ?? null,
      data.clientPhoneNumber ?? null,
      data.contactConsent ?? null,
      data.companyAddress ?? null,
      data.premiumServicePackage ?? null,
      data.memberNumber ?? null,
      data.members ?? null,
      data.president ?? null,
      data.secretary ?? null,
      data.treasurer ?? null,
      data.vicePresident ?? null,
      data.agentOption ?? null,
      data.agentInfo ?? null,
      data.isForeign ?? null,
      data.einFirstName ?? null,
      data.einLastName ?? null,
      data.idType ?? null,
      data.idTypeNumber ?? null,
      data.physicalStrtAddress ?? null,
      data.useBank ?? null,
      data.taxConsultationOption ?? null,
      data.licenseType ?? null,
      data.license_permit_address ?? null,
      data.sharePrice ?? 0,
      data.shareNumber ?? 0,
      data.shareholderNumber ?? 0,
      data.shareholderMembers ?? "",
      getFormattedDate(),
    ];

    const result = await executeQuery(query, values);
    const insertedId = result.insertId;

    const newQuery = `INSERT INTO all_form_data (entity_type, company_name, designator, first_name, last_name, email, mobile_phone, usable_id, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    await executeQuery(newQuery, [
      data.entityType,
      data.companyName,
      data.designator,
      data.clientFirstName,
      data.clientLastName,
      data.clientEmail,
      data.clientPhoneNumber,
      `form_LLC-${insertedId}`,
      getFormattedDate(),
    ]);

    return NextResponse.json({
      message: "Data inserted successfully.",
      usableId: `form_LLC-${insertedId}`,
    });
  } catch (error) {
    console.error("Error inserting data:", error);
    return NextResponse.json(
      { error: "Failed to insert data" },
      { status: 500 }
    );
  }
}
