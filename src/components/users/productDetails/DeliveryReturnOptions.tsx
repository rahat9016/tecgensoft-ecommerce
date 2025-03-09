import {
  CashIcon,
  ChatIcon,
  DeliveryIcon,
  ReturnIcon,
  WarentyIcon,
} from "@/components/shared/SvgIcons";
import Link from "next/link";
import React from "react";

const DeliveryReturnOptions = () => {
  return (
    <div className="flex-shrink-0 md:w-[330px] lg:w-full xl:w-[330px] bg-[#fafafa] text-[#212121] flex flex-col">
      {/* //?======= delivery option ======= */}
      <div className="flex flex-col gap-3 p-4">
        <p className="text-xs text-[#757575] font-medium">Delivery Options</p>
        <div className="flex flex-col gap-5 px-2">
          {/* location select */}
          <div>location select</div>

          {/* standard delivery */}
          <div className="flex lg:justify-between items-center gap-20 lg:gap-2">
            <div className="flex items-center gap-2">
              <DeliveryIcon />
              <div className="flex flex-col">
                <p className="text-xs lg:text-sm">Standard Delivery</p>
                <p className="text-xs lg:text-sm text-[#9e9e9e]">
                  Get by (dynamic date here)
                </p>
              </div>
            </div>
            <p className="text-sm font-medium">৳ 100</p>
          </div>

          {/* is cod available */}
          <div className="flex items-center gap-2">
            <CashIcon />
            <p className="text-xs lg:text-sm">Cash on Delivery Available</p>
          </div>
        </div>
      </div>

      {/* //?======= return and warenty option ======= */}
      <div className="flex flex-col gap-3 p-4">
        <p className="text-xs text-[#757575] font-medium">Return & Warenty</p>
        <div className="flex flex-col gap-5 px-2">
          {/* return */}
          <div className="flex items-center gap-2">
            <ReturnIcon />
            <p className="text-xs lg:text-sm">7 days Returns</p>
          </div>
          {/* warenty */}
          <div className="flex items-center gap-2">
            <WarentyIcon />
            <p className="text-xs lg:text-sm">Warenty not available</p>
          </div>
        </div>
      </div>

      {/* //?======= store information ======= */}
      <div className="flex flex-col gap-3 p-4 mt-5">
        {/* <p className="text-xs text-[#757575] font-medium">Return & Warenty</p> */}
        {/* store name */}
        <div className="flex justify-between items-center gap-3 border-y border-y-[#eff0f5] py-2">
          <div className="flex flex-col">
            <p className="text-xs text-[#757575]">Sold by</p>
            <p className="text-base text-[#212121]">Jani na store</p>
          </div>
          {/* chat */}
          <button className="flex items-center gap-1">
            <ChatIcon />
            <p className="text-sm text-[#136cff] font-medium">Chat Now</p>
          </button>
        </div>
        {/* go to store btn */}
        <Link
          href={"#"}
          className="h-[45px] flex items-center justify-center border-b border-b-[#eff0f5] "
        >
          <p className="text-[#136cff] text-base font-semibold hover:underline">
            GO TO STORE
          </p>
        </Link>
      </div>
    </div>
  );
};

export default DeliveryReturnOptions;
