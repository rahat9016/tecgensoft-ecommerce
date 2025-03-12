"use client";
import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";


const ToggleSwitchInputButton = ({ name }: { name: string }) => {
  const [toggleSwitch, setToggleSwitch] = useState(false);
  const { control } = useFormContext();

  return (
    <div className="flex my-6 justify-between items-center h-11 w-full rounded-md border bg-white px-3 py-1 text-base shadow-sm">
      <label className="flex items-center text-arsenic text-sm font-medium font-poppins">
        Category Active
      </label>
      <div
        onClick={() => setToggleSwitch(!toggleSwitch)}
        className={`relative cursor-pointer w-16 rounded-full h-8 transform-color duration-300 ${
          toggleSwitch ? "bg-[#00d54f]" : "bg-[#eeeeee]"
        } `}
      >
        <div
          onClick={() => setToggleSwitch(!toggleSwitch)}
          className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transform duration-300 transition-all ${
            toggleSwitch && "translate-x-8"
          } `}
        />
      </div>
      <div className="hidden">
        <Controller
          name={name}
          control={control}
          render={({ field, fieldState: { error } }) => {
            return (
              <Input
                {...field}
                value={toggleSwitch ? "1" : "0"}
                error={error?.message}
                showErrorMessage={!!error}
              />
            );
          }}
        />
      </div>
    </div>
  );
};

export default ToggleSwitchInputButton;
