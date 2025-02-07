import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { LucideLock, LucideUser } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import authBg from "../../../../../public/auth.jpg";
export default function Register() {
  return (
    <div>
        <div className="grid grid-cols-2 w-full h-[80vh] bg-white rounded-xl overflow-hidden">
        <div className="w-9/12 mx-auto flex flex-col justify-center gap-5">
          <div>
          <h1 className="font-poppins font-bold text-3xl text-center uppercase">
          Register
          </h1>
          <p className="text-xs text-center text-[#525252] font-poppins">Very good works are waiting for you Register Now!!!</p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="relative ">
              <LucideUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Username"
                className="pl-10 h-12 bg-slate-50 focus:ring-2 focus:ring-purple-400 rounded-xl"
              />
            </div>
            <div className="relative">
              <LucideLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="password"
                placeholder="Password"
                className="pl-10 h-12 bg-slate-50 focus:ring-2 focus:ring-purple-400 rounded-xl"
              />
            </div>
            <Button className="w-full h-[48px] mx-auto bg-main-primary hover:bg-primary-dark font-poppins font-bold text-base shadow-md mt-3">
              Signup
            </Button>
          </div>
          <p className="text-center border-b h-[12px] font-poppins"><span className="bg-white">Don&apos;t have an account?</span></p>
          <Button className="w-full h-[48px] border mt-3 bg-transparent hover:bg-main-primary hover:text-white font-poppins font-medium text-base shadow-none  text-black">
              Create your Account
            </Button>
        </div>
        <div>
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
  )
}
