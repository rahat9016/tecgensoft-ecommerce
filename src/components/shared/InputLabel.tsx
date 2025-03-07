import { cn } from "@/lib/utils";

export default function InputLabel({
  label,
  required,
  className,
}: {
  label: string | undefined;
  required?: boolean;
  className?: string;
}) {
  return (
    <div>
      {label && (
        <p
          className={cn(
            `text-arsenic text-sm mb-1 font-medium font-poppins`,
            className
          )}
        >
          {label}
          {required && <span className="text-red-600">*</span>}
        </p>
      )}
    </div>
  );
}