import Link from "next/link";
import React from "react";

export default function AboutUsPart() {
  const aboutUs = [
    {
      id: 1,
      children: [
        "Affiliate Program",
        "Online Delivery",
        "Refund and Return policy",
        "Blog",
      ],
    },
    { id: 2, children: ["EMI Terms", "Privacy Policy", "Contact Us"] },
    { id: 3, children: ["About Us", "Terms and Conditions", "Brands"] },
  ];
  return (
    <div className="col-span-6 flex flex-col gap-5 lg:gap-10 items-center lg:items-start">
      <h1 className="text-[11px] tab:text-sm uppercase tracking-[4px] text-[#fff]">
        About us
      </h1>
      {/* big screen */}
      <div className=" hidden lg:grid grid-cols-3 w-full">
        {aboutUs.map((item) => (
          <div key={item?.id} className="flex flex-col gap-2">
            {item?.children.map((child, index) => (
              <Link
                href={"#"}
                key={index + 1}
                className="m-1 text-[#838383] text-sm hover:text-[#ef4a23] hover:underline"
              >
                {child}
              </Link>
            ))}
          </div>
        ))}
      </div>
      {/* small screen */}
      <div className="lg:hidden text-sm flex justify-center w-full flex-wrap gap-3 text-[#838383]">
        {aboutUs.map((item) =>
          item.children.map((child, index) => (
            <div key={index + 1} className="flex items-center gap-2.5">
              <Link
                href={"#"}
                className="m-1 text-[#838383] hover:text-[#ef4a23] hover:underline"
              >
                {child}
              </Link>
              <p className="bg-[#666666] flex-shrink-0 w-[4px] h-[4px] rounded-full"></p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
