import {
  CashIcon,
  DeliveryIcon,
  ReturnIcon,
  WarentyIcon,
} from "@/components/shared/SvgIcons";
import React from "react";

const DeliveryReturnOptions = () => {
  return (
    <div className="flex-shrink-0 md:w-[330px] lg:w-full xl:w-[330px] bg-[#fafafa] text-[#212121] flex flex-col gap-5">
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
    </div>
  );
};

export default DeliveryReturnOptions;
