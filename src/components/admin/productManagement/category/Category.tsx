"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import useOpen from "@/hooks/useOpen";
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

// import InputLabel from "@/components/shared/InputLabel";
import { useQuery } from "@tanstack/react-query";
import { getCategory } from "@/app/api/category";

import ToggleSwitchInputButton from "@/components/shared/ToggleSwitchInputButton";
import ControlledImageField from "@/components/shared/ControlledImageField";

export default function Category() {
  const { open, setOpen } = useOpen();
  const { page, setPage, pageSize, setPageSize, pageCount, setSearch } =
    usePagination();
  const { data } = useQuery({
    queryKey: ["category"],
    queryFn: () => getCategory(),
  });
  console.log(data);
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
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("email")}</div>
      ),
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

  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      is_active:false,
      category: ""
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data));
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
            <ToggleSwitchInputButton name="is_active" />
            <ControlledImageField name="image" isMultiple/>
          </div>
        </FormModal>
      </FormProvider>
      <DataTable
        data={[]}
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
}
