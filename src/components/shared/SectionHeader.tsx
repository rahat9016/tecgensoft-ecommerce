import { cn } from "@/lib/utils";
import React from "react";
import TextHoverDesign from "./TextHoverDesign";

type SectionHeaderProps = {
  title: string;
  showLink?: boolean;
  seeMoreLink?: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  showLink = true,
  seeMoreLink = "#",
}) => {
  return (
    <div className="w-full flex justify-between items-center">
      <h1 className={cn("text-[#2B2B2B] text-sm lg:text-lg font-medium")}>
        {title}
      </h1>
      {showLink && (
        <TextHoverDesign text="See More" link={seeMoreLink} />
      )}
    </div>
  );
};

export default SectionHeader;
