import SectionHeader from "@/components/shared/SectionHeader";
import React from "react";

const DealsOfWeek = () => {
  return (
    <div className="flex flex-col gap-2">
      <SectionHeader title="Deals of the week" />
      <div className="min-h-[200px] bg-amber-300"></div>
    </div>
  );
};

export default DealsOfWeek;
