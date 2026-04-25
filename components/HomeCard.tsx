import Link from "next/link";
import React from "react";

interface HomeCardProps {
    imageUrl: string;
    title: string;
    description: string;
    linkUrl: string;
    linkText: string;
}

const HomeCard = ({
  imageUrl,
  title,
  description,
  linkUrl,
  linkText,
}: HomeCardProps) => {
  return (
    <div className="border-[6px] border-[#f1f1f1] rounded-3xl text-center">
      <div
        className="bg-center bg-cover bg-no-repeat rounded-t-3xl"
        style={{
          backgroundImage: `url(${imageUrl})`,
          paddingTop: "66.67%", // Maintain aspect ratio of 2:3
        }}
      ></div>
      <div className="p-4">
        <p className="py-4 text-2xl font-bold">{title}</p>
        <p className="py-4 text-xl font-medium">{description}</p>
        <Link
          href={linkUrl}
          className="inline-block mt-4 px-8 py-4 bg-primary text-white border border-primary rounded-[30px]"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
};


export default HomeCard;
