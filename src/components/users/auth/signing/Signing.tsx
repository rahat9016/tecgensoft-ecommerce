"use client"
import Image from "next/image";
import React from "react";
import authBg from "../../../../../public/auth.jpg";
import { LucideLock, LucideUser } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Signing() {
  return (
    <div>
      <div className="grid lg:grid-cols-2 w-full h-[80vh] bg-white rounded-xl overflow-hidden">
        <div className="w-full md:w-8/12 lg:w-9/12 mx-auto flex flex-col justify-center gap-5 py-10 px-3 lg:md-0">
          <div>
          <h1 className="font-poppins font-bold text-xl lg:text-3xl text-center uppercase">
            Login
          </h1>
          <p className="text-xs text-center text-[#525252] font-poppins">Very good works are waiting for you Login Now!!!</p>
          </div>
          <div className="flex flex-col gap-3 lg:gap-5">
            <div className="relative ">
              <LucideUser size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Username"
                className="pl-10 h-12 bg-slate-50 focus:ring-2 focus:ring-purple-400 rounded-xl"
              />
            </div>
            <div className="relative">
              <LucideLock size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="password"
                placeholder="Password"
                className="pl-10 h-12 bg-slate-50 focus:ring-2 focus:ring-purple-400 rounded-xl"
              />
            </div>
            <Button className="w-full h-[38px] lg:h-[48px] mx-auto bg-main-primary hover:bg-primary-dark font-poppins font-bold text-sm lg:text-base shadow-md mt-1 lg:mt-3">
              Login
            </Button>
          </div>
          <p className="text-center border-b h-[12px] font-poppins text-sm lg:text-base"><span className="bg-white">Don&apos;t have an account?</span></p>
          <Link href={"/auth/register"} className="w-full h-[38px] lg:h-[48px] border mt-3 bg-transparent hover:bg-main-primary hover:text-white font-poppins font-medium text-sm lg:text-base shadow-none  text-black focus:border-none  flex items-center justify-center rounded-lg">
              Create your Account
            </Link>
        </div>
        <div className="hidden lg:block">
          <Image
            width={1000}
            height={1000}
            src={authBg}
            alt="auth image"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
