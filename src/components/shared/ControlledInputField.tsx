import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../ui/input";

interface ControlledInputFieldProps {
  label?: string;
  name: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  className?: string;
}

const ControlledInputField: React.FC<ControlledInputFieldProps> = ({
  label,
  name,
  required,
  type,
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
        render={({ field, fieldState: { error } }) => {
          return (
            <Input
              type={type}
              {...field}
              value={field.value ?? ""}
              placeholder={placeholder}
              error={error?.message}
              className={className}
              showErrorMessage={!!error}
            />
          );
        }}
      />
    </div>
  );
};

export default ControlledInputField;
