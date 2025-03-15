"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const CustomBreadCrumb: React.FC = () => {
  const pathname = usePathname(); // Get the current pathname
  const pathnames = pathname.split("/").filter((x) => x); // Split the URL and remove empty strings

  // Function to capitalize the first letter of a string
  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <section className="text-spanish-gray flex items-center flex-wrap lg:mt-4 text-xs font-semibold px-4 lg:px-0">
      <Link href="/" className="leading-none hover:text-primary duration-300">
        Home
      </Link>
      {pathnames.map((path, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`; // Build the URL up to the current segment
        const isLast = index === pathnames.length - 1; // Check if it's the last segment

        return (
          <React.Fragment key={path}>
            <MdOutlineKeyboardArrowRight className="text-lg" />
            {isLast ? (
              <p className="hover:text-primary capitalize duration-300">
                {capitalize(path)}
              </p>
            ) : (
              <Link
                href={routeTo}
                className="capitalize hover:text-primary duration-300"
              >
                {capitalize(path)}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </section>
  );
};

export default CustomBreadCrumb;
