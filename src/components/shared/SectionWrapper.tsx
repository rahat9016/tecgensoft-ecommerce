import {cn} from "@/lib/utils";
import React from "react";

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <section className={cn("bg-white p-3 lg:p-5 rounded-lg", className)}>
      {children}
    </section>
  );
};

export default SectionWrapper;
