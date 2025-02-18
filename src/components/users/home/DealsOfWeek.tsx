import SectionHeader from "@/components/shared/SectionHeader";
import SectionWrapper from "@/components/shared/SectionWrapper";
import React from "react";

const DealsOfWeek = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-2">
        <SectionHeader title="Deals of the week" />
        <div className="min-h-[200px] bg-amber-300"></div>
      </div>
    </SectionWrapper>
  );
};

export default DealsOfWeek;
