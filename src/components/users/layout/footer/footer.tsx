"use client";
import { usePathname } from "next/navigation";
import SupportPart from "./SupportPart";
import AboutUsPart from "./AboutUsPart";
import StayConnectedPart from "./StayConnectedPart";
const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="bg-[#1A1A1D] text-white">
      {!pathname.startsWith("/admin") && !pathname.startsWith("/auth") && (
        <div className="flex flex-col gap-10">
          <div className="container mx-auto py-10 lg:grid  lg:grid-cols-12 flex flex-col gap-10 lg:gap-5 w-full">
            {/* support */}
            <SupportPart />
            {/* about us part */}
            <AboutUsPart />
            {/* stay connected part */}
            <StayConnectedPart />
          </div>
          {/*  */}
          <div className="border-t border-t-[#ffffff1a] container mx-auto w-full text-xs text-[#838383] py-4 text-center md:text-left">
            <p>{`© ${new Date().getFullYear()} Tech Gen Ltd | All rights reserved`}</p>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
