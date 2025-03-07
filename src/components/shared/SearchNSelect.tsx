"use client";
import { Controller, useFormContext } from "react-hook-form";
import { countryOptions } from "@/docs";
import Select from "react-select";
import { cn } from "@/lib/utils";

interface ControlledInputFieldProps {
  label?:string;
  name: string;
  required?:boolean;
  placeholder?: string;
  className?: string;
}

const SearchNSelect: React.FC<ControlledInputFieldProps> = ({
  label,
  name,
  required,
  placeholder,
  className,
}) => {
  const { control } = useFormContext();
  return (
    <div>
      {label && (
        <p className="text-arsenic text-sm mb-1 font-medium font-poppins">
          {label}{required && <span className="text-red-600">*</span>}
        </p>
      )}
      <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Select
          {...field}
          className={cn(`react-select-container`,className)}
          classNamePrefix="react-select"
          options={countryOptions}
          placeholder={placeholder}
          styles={{
            control: (provided, state) => ({
              ...provided,
              border: state.isFocused ? "1px solid #ccc" : "1px solid #d1d5db",
              outline: "none",
              height: "44px",
              padding: "2px",
              borderRadius: "8px",
              fontSize: "0.875rem",
              boxShadow: "none",
            }),
            input: (provided) => ({
              ...provided,
              color: "#374151",
            }),
            placeholder: (provided) => ({
              ...provided,
              color: "#9CA3AF",
              fontSize: "0.875rem",
            }),
            singleValue: (provided) => ({
              ...provided,
              color: "black",
              fontSize: "0.875rem",
            }),
            menu: (provided) => ({
              ...provided,
              zIndex: 10,
            }),
            dropdownIndicator: (provided) => ({
              ...provided,
              color: "#6B7280",
              "&:hover": {
                color: "#4B5563",
              },
              padding: "8px",
            }),
            indicatorSeparator: (provided) => ({
              ...provided,
              backgroundColor: "#D1D5DB",
              width: "1px", 
              display: "none", // Use "block" to see the vertical line
            }),
          }}
        />
      )}
    />
    </div>
  );
};

export default SearchNSelect;
