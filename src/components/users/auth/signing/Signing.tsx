"use client";
import Image from "next/image";
import React from "react";
import authBg from "../../../../../public/auth.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signing } from "@/app/api/auth";
import { useMutation } from "@tanstack/react-query";
import { FormProvider, useForm } from "react-hook-form";
import ControlledInputField from "@/components/shared/ControlledInputField";
import loginValidationSchema from "./Schema";
import { yupResolver } from "@hookform/resolvers/yup";
import InputLabel from "@/components/shared/InputLabel";
import { toast } from "sonner";
export default function Signing() {
  const { isError, error, isPending, isSuccess, mutateAsync } = useMutation({
    mutationFn: signing,
    onSuccess: () => {},
  });
  console.log(isSuccess);
  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(loginValidationSchema),
    defaultValues: {},
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    mutateAsync(data).then((res) => {
      if (res) {
        toast.success("Login Successful", {
          position: "bottom-left",
          style: {
            backgroundColor: "#4CAF50",
            color: "#fff",
          },
        });
      }
    });
  };
  return (
    <div>
      <div className="grid lg:grid-cols-2 w-full h-[80vh] bg-white rounded-xl overflow-hidden">
        <div className="w-full md:w-8/12 lg:w-9/12 mx-auto flex flex-col justify-center gap-5 py-10 px-3 lg:md-0">
          <div>
            <h1 className="font-poppins font-bold text-xl lg:text-3xl text-center uppercase">
              Login
            </h1>
            <p className="text-xs text-center text-[#525252] font-poppins">
              Very good works are waiting for you Login Now!!!
            </p>
          </div>
          <FormProvider {...methods}>
            <form onSubmit={methods?.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-3 lg:gap-5">
                <div>
                  <InputLabel label="Username" required />
                  <ControlledInputField
                    name="username"
                    type="text"
                    placeholder="Enter your username"
                    className="h-12 bg-white  focus:ring-0 rounded-xl px-3 shadow-none"
                  />
                </div>
                <div className="relative">
                  <InputLabel label="Password" required />
                  <ControlledInputField
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="h-12 bg-white focus:ring-0 rounded-xl px-3 shadow-none"
                  />
                </div>
                {isError && error && (
                  <div className="h-[38px] w-full flex items-center justify-center bg-rose-200 rounded-md text-rose-700 text-sm font-poppins px-2 py-2">
                    <p>{error.message && error.message}</p>
                  </div>
                )}
                <Button
                  disabled={isPending}
                  type="submit"
                  className="w-full h-[38px] lg:h-[48px] mx-auto bg-main-primary hover:bg-main-primary-dark font-poppins font-bold text-sm lg:text-base shadow-md mt-1 lg:mt-3"
                >
                  {isPending ? "Loading" : "Login"}
                </Button>
              </div>
            </form>
          </FormProvider>

          <p className="text-center border-b h-[12px] font-poppins text-sm lg:text-base">
            <span className="bg-white">Don&apos;t have an account?</span>
          </p>
          <Link
            href={"/auth/register"}
            className="w-full h-[38px] lg:h-[48px] border mt-3 bg-transparent hover:bg-main-primary hover:text-white font-poppins font-medium text-sm lg:text-base shadow-none  text-black focus:border-none  flex items-center justify-center rounded-lg"
          >
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
