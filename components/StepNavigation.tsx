import React from "react";
import Link from "next/link";

interface NavigationProps {
  rightText: string;
  leftText: string;
  rightLink: string;
  leftLink: string;
  rightClassName?: string;
  leftClassName?: string;
  containerClassName?: string;
}

const StepNavigation: React.FC<NavigationProps> = ({
  rightText,
  leftText,
  rightLink,
  leftLink,
  rightClassName = "",
  leftClassName = "",
  containerClassName = "",
}) => {
    const defaultButtonClass =
      "px-8 py-2 bg-primary text-white border border-primary rounded-[30px]";
    const defaultContainerClass = "flex justify-between mt-12";
    
  return (
    <div className={`${containerClassName} ${defaultContainerClass}`}>
      <Link href={leftLink} className={`${leftClassName} ${defaultButtonClass}`}>
        {leftText}
      </Link>
      <Link href={rightLink} className={`${rightClassName} ${defaultButtonClass}`}>
        {rightText}
      </Link>
    </div>
  );
};

export default StepNavigation;
