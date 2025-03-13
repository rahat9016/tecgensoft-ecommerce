import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../ui/input";

const ToggleSwitchInputButton = ({
  name,
  labelTitle,
}: {
  name: string;
  labelTitle?: string;
}) => {
  const { control } = useFormContext();
  return (
    <div className="flex justify-between items-center border shadow-sm p-3 rounded-full w-full">
      <label className="flex items-center text-arsenic text-sm font-medium font-poppins mb-1">
        {labelTitle}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange }, fieldState: { error } }) => {
          const toggleSwitch = value === true;
          return (
            <>
              <div
                onClick={() => {
                  const newValue = !toggleSwitch;
                  onChange(newValue);
                  // handleToggle(newValue); 
                }}
                className={`relative cursor-pointer w-[52px] rounded-full h-8 transform-color duration-300 shadow-sm border border-[#52525263] ${
                  toggleSwitch ? "bg-main-primary" : "bg-[#eeeeee]"
                }`}
              >
                <div
                  className={`absolute top-[3px] left-1 w-6 h-6 rounded-full bg-white transform duration-300 transition-all ${
                    toggleSwitch && "translate-x-[17px]"
                  }`}
                />
              </div>
              <div className="hidden">
                <Input
                  value={String(toggleSwitch)}
                  error={error?.message}
                  showErrorMessage={!!error}
                  readOnly
                />
              </div>
            </>
          );
        }}
      />
    </div>
  );
};
export default ToggleSwitchInputButton;
