import React from "react";

type SectionWrapperProps = {
  children: React.ReactNode;
};

const SectionWrapper: React.FC<SectionWrapperProps> = ({children}) => {
  return <section className="bg-white p-3 lg:p-5 rounded-lg">{children}</section>;
};

export default SectionWrapper;
