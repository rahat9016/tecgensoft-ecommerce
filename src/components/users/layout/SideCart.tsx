"use client";
import TextHoverDesign from "@/components/shared/TextHoverDesign";
import styles from "@/styles/CustomStyles.module.css";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SideCart = () => {
  return (
    <div className="lg:block hidden">
      <Sheet>
        {/* cart button */}
        <div className="fixed bottom-5 right-5 z-[100]">
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
        <SheetContent className="z-[1000]">
          <div className="flex flex-col gap-14">
            <SheetHeader className="text-xl leading-5 font-semibold">
              <SheetTitle>Your Cart</SheetTitle>
              <SheetDescription className="hidden"></SheetDescription>
            </SheetHeader>
            {/* cart items */}
            <div
              className={`h-[70vh] overflow-y-auto flex flex-col gap-4 ${styles.customScrollbar}`}
            >
              <CartCard />
              <CartCard />
              <CartCard />
              <CartCard />
              <CartCard />
              {/* subtotal part */}
              <div className="w-full flex justify-end">
                <p className="text-lg font-normal text-black-dim text-left">
                  Subtotal: <span className="pl-4">৳25,000</span>
                </p>
              </div>
            </div>
            {/*  */}
            <SheetFooter>
              <SheetClose asChild>
                <div className="flex flex-col gap-4 items-center w-full">
                  <TextHoverDesign text="Go-To Cart" link="#" />
                  {/*  */}
                  <Link
                    href={"#"}
                    className="w-full h-[50px] bg-[#157892] hover:bg-link rounded-5px flex items-center justify-center font-bold text-base text-white"
                  >
                    Continue to Checkout
                  </Link>
                </div>
              </SheetClose>
            </SheetFooter>
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
        <div className="flex justify-between w-full">
          {/*  */}
          <div className="w-[calc(100%-82px)] flex flex-col justify-between flex-shrink-0">
            <div className="flex flex-col">
              <p className="text-base leading-0 text-black font-normal line-clamp-1 text-wrap">
                Travel Backpack mahabub
              </p>
              <p className="text-xs leading-0 text-spanish-gray">
                by <span className="border-b border-b-slate-gray">Mahabub</span>
              </p>
            </div>
            {/*  */}
            <div className="text-base text-black font-semibold">৳25,000</div>
          </div>
          {/* =========== */}
          <div className=" w-[80px] flex-shrink-0 flex flex-col items-end justify-between">
            {/* delete button */}
            <button>
              <Trash2 className="w-5 h-5 text-[#32556E]" />
            </button>
            {/* increment, decrement button */}
            <div className="flex items-center border border-slate-gray rounded-5px h-[26px] w-[80px]">
              <button
                type="button"
                className="border-r border-slate-gray h-full flex items-center justify-center w-[20px] text-black"
              >
                -
              </button>
              <input
                type="string"
                className="px-1 border-r border-slate-gray font-normal h-full flex items-center justify-center w-[40px] outline-none text-center text-sm"
                value="3000"
              />
              <button
                type="button"
                className="border-l border-slate-gray h-full flex items-center justify-center w-[20px] disabled:text-slate-gray disabled:cursor-not-allowed"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* border */}
      <p className="border border-slate-gray"></p>
    </div>
  );
};
