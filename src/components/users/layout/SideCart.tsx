"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {ShoppingCart, Trash2} from "lucide-react";
import Image from "next/image";

const SideCart = () => {
  return (
    <div className="lg:block hidden">
      <Sheet>
        {/* cart button */}
        <div className="fixed bottom-5 right-5">
          <SheetTrigger>
            <div className="related w-[60px] h-[60px] cursor-pointer bg-[#081621] rounded flex flex-col justify-center items-center text-white">
              <ShoppingCart className="w-6 h-6" />
              <p className="text-[10px] font-semibold">CART</p>
              {/* item number */}
              <div className="w-5 h-5 rounded-full absolute -top-[10px] -right-[10px] bg-[#ef4a23] overflow-hidden text-[12px] leading-5 text-center font-bold">
                12
              </div>
            </div>
          </SheetTrigger>
        </div>
        <SheetContent>
          <div className="flex flex-col gap-14">
            <SheetHeader className="text-xl leading-5 font-semibold">
              <SheetTitle>Your Cart</SheetTitle>
              <SheetDescription className="hidden"></SheetDescription>
            </SheetHeader>
            {/* cart items */}
            <CartCard />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SideCart;

const CartCard = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="min-h-[73px] mb-4  flex  gap-5">
        {/* product image */}
        <div className="w-[73px] h-[73px] overflow-hidden flex-shrink-0">
          <Image
            src={"/images/home/banner_slider_bg_1.png"}
            alt="item image"
            width={73}
            height={73}
            className="object-cover w-full h-full"
          />
        </div>
        {/* details */}
        <div className="flex justify-between border border-amber-800 w-full">
          {/*  */}
          <div className="w-[calc(100%-78px)] flex flex-col gap-0 flex-shrink-0">
            <p className="text-base leading-0 text-black font-normal line-clamp-1 text-wrap">
            Travel Backpack mahabub
            </p>
            <p className="text-xs leading-0 text-spanish-gray">
              by <span>Mahabub</span>
            </p>
          </div>
          {/*  */}
          <div className="border border-red-600 w-[75px] flex-shrink-0">
            <button>
              <Trash2 />
            </button>
          </div>
          <div></div>
        </div>
      </div>
      {/* border */}
      <p className="border border-slate-gray"></p>
    </div>
  );
};
