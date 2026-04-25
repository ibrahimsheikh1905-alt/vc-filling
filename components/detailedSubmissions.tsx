"use client";
import camelToSentenceCase from "@/hooks/useCamelToSentence";
import snakeToSentenceCase from "@/hooks/useSnakeToSentenceCase";
import axios from "axios";
import { Loader } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState, FC } from "react";

export interface IndividualFormFormData {
  ticket_id?: string;
  agent_change_option?: string;
  mobile_phone?: string;
  email?: string;
  last_name?: string;
  first_name?: string;
  company_name?: string;
  designator?: string;
  state_of_service?: string;
  entity_type?: string;
  state_of_formation?: string;
  street_address?: string;
  address_line2?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  created_at?: string;
  agent_type?: string;
  agent_first_name?: string;
  agent_last_name?: string;
  agent_company_name?: string;
  agent_zip_code?: string;
  agent_state?: string;
  agent_city?: string;
  agent_address_line2?: string;
  agent_street_address?: string;
  date_of_formation?: string;
  member_number?: string;
  members?: string;
  same_as_company_address?: number;
  mail_street_address?: string;
  mail_address_line2?: string;
  mail_city?: string;
  mail_state?: string;
  mail_zip_code?: string;
  business_purpose?: string;
  business_type?: string;
  ein_first_name?: string;
  ein_last_name?: string;
  is_foreign?: number;
  id_type?: string;
  ein?: string;
  member_count?: string;
  physical_street_address?: string;
  physical_address_line2?: string;
  physical_city?: string;
  physical_state?: string;
  physical_zip_code?: string;
  fake_company_name?: string;
  country?: string;
  address_option?: string;
  agent_option?: string;
  package_type?: string;
  state_name?: string;
  selected_features?: string;
  company_address_option?: string;
  industry_keyword?: string;
  state_filling_time?: string;
  contact_consent?: number;
  company_address?: string;
  premium_service_package?: string;
  president?: string;
  secretary?: string;
  treasurer?: string;
  vice_president?: string;
  agent_info?: string;
  physical_strt_address?: string;
  use_bank?: number;
  tax_consultation_option?: number;
  license_type?: string;
  license_permit_address?: string;
  share_price?: string;
  share_number?: string;
  shareholder_number?: string;
  shareholder_members?: string;
  number_of_shares?: string;
  share_par_value?: string;
  no_par_value?: number;
  notify_state_of_service?: string;
  address_line_2?: string;
  amend_info?: string;
  status?: string;
  //   value: string | number;
}

const values = [
  "first_name",
  "last_name",
  "mobile_phone",
  "email",
  "entity_type",
  "company_name",
  "designator",
  "state_of_service",
  "state_of_formation",
  "street_address",
  "address_line2",
  "city",
  "state",
  "zip_code",
  "created_at",
  "agent_change_option",
  "agent_type",
  "agent_first_name",
  "agent_last_name",
  "agent_company_name",
  "agent_zip_code",
  "agent_state",
  "agent_city",
  "agent_address_line2",
  "agent_street_address",
  "date_of_formation",
  "member_number",
  "members",
  "same_as_company_address",
  "mail_street_address",
  "mail_address_line2",
  "mail_city",
  "mail_state",
  "mail_zip_code",
  "business_purpose",
  "business_type",
  "ein_first_name",
  "ein_last_name",
  "is_foreign",
  "id_type",
  "ein",
  "member_count",
  "physical_street_address",
  "physical_address_line2",
  "physical_city",
  "physical_state",
  "physical_zip_code",
  "fake_company_name",
  "country",
  "address_option",
  "agent_option",
  "package_type",
  "state_name",
  "selected_features",
  "company_address_option",
  "industry_keyword",
  "state_filling_time",
  "contact_consent",
  "company_address",
  "premium_service_package",
  "president",
  "secretary",
  "treasurer",
  "vice_president",
  "agent_info",
  "physical_strt_address",
  "use_bank",
  "tax_consultation_option",
  "license_type",
  "license_permit_address",
  "share_price",
  "share_number",
  "shareholder_number",
  "shareholder_members",
  "number_of_shares",
  "share_par_value",
  "no_par_value",
  "notify_state_of_service",
];

const allStatus = ["Applied", "Pending", "Accepted", "Rejected"];

const DetailedSubmissions = ({ params }: { params: { usableId: string } }) => {
  const [getLoading, setLoading] = useState(false);
  const [individualFormData, setIndividualFormFormData] =
    useState<IndividualFormFormData>();
  const [status, setStatus] = useState<string>("");
  useEffect(() => {
    const fetchIndividualFormFormData = async () => {
      setLoading(true);
      // Demo data - API returns empty
      const data = {
        first_name: 'Demo',
        company_name: 'Demo Company',
        entity_type: 'LLC',
        status: 'Pending',
        street_address: '123 Demo St',
        city: 'Demo City',
        state: 'Demo State',
        zip_code: '12345',
        email: 'demo@example.com'
      };
      setIndividualFormFormData(data);
      setStatus(data.status);
      setLoading(false);
    };
    fetchIndividualFormFormData();
  }, [params.usableId]);

  const infoRowValue = (value: any) => {
    // console.log(">>>>>>>>>>>>>>>>", (individualFormData as any)?.[value]);
    if (typeof (individualFormData as any)?.[value] === "number") {
      return (individualFormData as any)?.[value] === 0
        ? "No"
        : (individualFormData as any)?.[value] === 1 && "Yes";
    }
    try {
      let finalValue = (individualFormData as any)?.[value] as string;
      const parsedValue = JSON.parse(finalValue);
      if (Array.isArray(parsedValue)) {
        finalValue = "";
        parsedValue.map((item, key) => {
          finalValue =
            finalValue +
            `Member Number: ${key + 1}, Member Type: ${item.agentType}, ${item.companyName ? "Company Name: " + item.getCompanyName : "Member Name: " + item.getFirstName + " " + item.getLastName}, Address: ${item.getStreetAddress}, ${item.getAddressLine2}, ${item.getCity}, ${item.getState}, ${item.getZipCode} \n`;
        });
        return finalValue;
      } else if (typeof parsedValue === "object") {
        finalValue = "";
        Object.keys(parsedValue).map((key) => {
          finalValue =
            finalValue + `${camelToSentenceCase(key)}: ${parsedValue[key]}, \n`;
        });
        return finalValue;
      }
    } catch (e) {
      // If parsing fails, keep the original value
    }
    return (individualFormData as any)?.[value];
  };
  return (
    <>
      {getLoading ? (
        <div className="flex min-h-screen w-full items-center justify-center">
          <Loader />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {values.map(
              (value) =>
                (individualFormData as any)?.[value] && (
                  <InfoRow
                    key={value}
                    label={snakeToSentenceCase(value)}
                    value={infoRowValue(value)}
                  />
                )
            )}
          </div>
          
        </>
      )}
    </>
  );
};

export default DetailedSubmissions;

interface InfoRowProps {
  label: string;
  value: string | number | undefined;
}

const InfoRow: FC<InfoRowProps> = ({ label, value }) => {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white2 p-4 shadow-md">
      <span className="font-semibold text-gray-700">{label}:</span>
      <span className="max-w-[30ch] break-words text-gray-600">
        {value || "N/A"}
      </span>
    </div>
  );
};
