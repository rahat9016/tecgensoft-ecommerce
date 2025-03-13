"use client";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FormModal } from "@/components/shared/FormModal";
import { DataTable } from "@/components/shared/Table";
import { Button } from "@/components/ui/button";
import { usePagination } from "@/hooks/usePagination";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import ControlledInputField from "@/components/shared/ControlledInputField";
import ToggleSwitchInputButton from "@/components/shared/ToggleSwitchInputButton";
import { useQuery } from "@tanstack/react-query";
import { CallCreateUpdateApi, getCategory } from "@/app/api/category";
import ControlledImageField from "@/components/shared/ControlledImageField";
import { showToast } from "@/components/shared/showToast";

// const data = [
//   {
//     id: "m5gr84i9",
//     amount: 316,
//     status: "success",
//     email: "ken99@yahoo.com",
//   },
//   {
//     id: "m5gr84i9",
//     amount: 316,
//     status: "success",
//     email: "ken99@yahoo.com",
//   },
// ];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const columns: ColumnDef<any>[] = [
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right">{formatted}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const Category = () => {
  const [open, setOpen] = useState(false);
  const { page, pageSize, pageCount, setPage, setPageSize, setSearch } =
    usePagination();

  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      category: "",
      show_in_ecommerce: false,
      is_active: false,
    },
  });
  const { reset } = methods;
  const { data: category, refetch } = useQuery({
    queryKey: ["category"],
    queryFn: () => getCategory(),
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    console.log("Submitting data:", JSON.stringify(data));
    try {
      const result = await CallCreateUpdateApi({
        url: "/catalog/category/",
        method: "post",
        data,
        reset,
        refetch,
        setOpen,
      });

      if (result.error) {
        console.error("Error:", result.error.message);
        showToast("Failed to create category. Please try again.", "error");
      } else {
        console.log("Success:", result.message);
        showToast("Category created successfully!", "success");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      showToast("An unexpected error occurred. Please try again.", "error");
    }

    // setOpen(false);
  };
  return (
    <div className="px-2">
      <FormProvider {...methods}>
        <FormModal
          isOpen={open}
          onClose={() => setOpen(false)}
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-2">
            <ControlledInputField
              label="Category"
              name="category"
              required
              type="text"
              placeholder="Category Name"
            />
            <div className="flex flex-col md:flex-row justify-between gap-5 w-full">
              <div className="w-full flex flex-col gap-5 justify-between">
                <ToggleSwitchInputButton
                  name="show_in_ecommerce"
                  labelTitle="Show in Ecommerce"
                />
                <ToggleSwitchInputButton
                  name="is_active"
                  labelTitle="Status(Active/Inactive)"
                />
              </div>
              <div className="flex justify-end w-full">
                <ControlledImageField
                  name="icon"
                  label="Upload Category Icon"
                  isMultiple
                />
              </div>
            </div>
          </div>
        </FormModal>
      </FormProvider>
      <DataTable
        data={category || []}
        columns={columns}
        isLoading={false}
        page={page}
        pageSize={pageSize}
        pageCount={pageCount}
        setPage={setPage}
        setPageSize={setPageSize}
        setSearch={setSearch}
        createFn={() => setOpen((prev) => !prev)}
      />
    </div>
  );
};

export default Category;
