"use client";
import { IBreadcrumbsProps } from "@/Types/Types";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Breadcrumb: React.FC<IBreadcrumbsProps> = ({
  breadcrumbs,
  currentLabel,
}) => {
  return (
    <section className="text-spanish-gray flex items-center flex-wrap lg:mt-4 text-xs font-semibold px-4 lg:px-0">
      <Link href="/" className="leading-none hover:text-primary duration-300">
        Home
      </Link>
      {breadcrumbs &&
        breadcrumbs?.map((breadcrumb) => (
          <React.Fragment key={breadcrumb?.url}>
            <MdOutlineKeyboardArrowRight className="text-lg" />
            <Link
              href={breadcrumb?.url || ""}
              className="capitalize hover:text-primary duration-300"
            >
              {breadcrumb.label}
            </Link>
          </React.Fragment>
        ))}
      {currentLabel && (
        <>
          <MdOutlineKeyboardArrowRight className="text-lg mx-1" />{" "}
          <p className="hover:text-primary capitalize duration-300">
            {currentLabel}
          </p>
        </>
      )}
    </section>
  );
};

export default Breadcrumb;
