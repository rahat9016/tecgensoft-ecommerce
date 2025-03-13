/* eslint-disable jsx-a11y/alt-text */
import { Image } from "lucide-react";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface ControlledImageFieldProps {
  label?: string;
  name: string;
  required?: boolean;
  className?: string;
  isMultiple?: boolean;
}
const ControlledImageField: React.FC<ControlledImageFieldProps> = ({
  label,
  name,
  required,
  isMultiple,
}) => {
  const { control, setError } = useFormContext();
  const [previews, setPreviews] = useState<string[]>([]);
  const maxFileSize = 3 * 1024 * 1024;
  const allowedTypes = ["image/jpeg", "image/png"];
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFiles = event.target.files;
    // setIsTouched(true);

    if (selectedFiles) {
      const newFiles: File[] = Array.from(selectedFiles);
      const validFiles: File[] = [];
      const errorMessages: string[] = [];

      // Validate files
      newFiles.forEach((file) => {
        if (!allowedTypes.includes(file.type)) {
          errorMessages.push(
            `Unsupported file type for ${
              file.type
            }. Please upload ${allowedTypes.join(" or ")} files.`
          );
          return;
        }

        if (file.size > maxFileSize) {
          errorMessages.push(
            `File size of ${file.name} exceeds the limit of ${
              maxFileSize / (1024 * 1024)
            }MB.`
          );
          return;
        }

        validFiles.push(file);
      });

      // If there are validation errors, set them using setError
      if (errorMessages.length > 0) {
        setError(name, {
          type: "manual",
          message: errorMessages.join(" "),
        });
        return;
      }

      setError(name, {
        type: "manual",
        message: "",
      });

      // Handle image uploads
      if (isMultiple) {
        const newPreviews: string[] = [];
        for (const file of validFiles) {
          const formData = new FormData();
          formData.append("image", file);
          // const res = await imgUpload(formData);
          // const img_url = res?.data?.image_url;
          // if (img_url) {
          //     newPreviews.push(img_url);
          // }
        }
        // Update previews state with new images
        setPreviews((prev) => [...prev, ...newPreviews]);
      } else {
        // Handle single image upload (EDIT case)
        if (previews.length > 0) {
          // Remove the old image URLs when in EDIT mode
          for (const imgLink of previews) {
            console.log(imgLink);
            // const res = await imgDelete({ image_url: imgLink });
            // if (res.data) {

            //     setPreviews(prev => prev.filter((link) => link !== imgLink));
            // }
          }
        }

        // Upload the new image
        const formData = new FormData();
        formData.append("image", validFiles[0]);
        // const res = await imgUpload(formData);
        // const img_url = res?.data?.image_url;
        // if (img_url) {
        //     // Set the previews state with the new image
        //     setPreviews([img_url]);
        // }
      }
    }
  };

  return (
    <div className="flex flex-col gap-2 border w-full py-5 md:py-0 rounded-lg shadow-sm items-center justify-center">
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => {
          console.log({ error });
          return (
            <>
              <div className="flex items-center space-x-2">
                <label className="w-16 h-16 flex flex-col items-center justify-center bg-[#32976a4b] text-main-primary-dark rounded-lg cursor-pointer p-2 border border-main-primary">
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    multiple={isMultiple}
                    onChange={(e) => {
                      field.onChange(e);
                      handleFileChange(e);
                    }}
                  />
                  <Image />
                  <span className="text-[10px] leading-none text-center mt-1 font-poppins font-semibold">
                    Upload Image
                  </span>
                </label>
              </div>
              {error && (
                <div className="text-rose-500 text-xs mt-1 pl-2">
                  {error.message}
                </div>
              )}
            </>
          );
        }}
      />
      {label && (
        <p className="text-arsenic text-sm font-medium font-poppins">
          {label}
          {required && <span className="text-red-600">*</span>}
        </p>
      )}
    </div>
  );
};

export default ControlledImageField;
