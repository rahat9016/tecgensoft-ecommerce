"use client";
import { ReactNode } from "react";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem } from "./pagination";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
export interface PaginationWithLinksProps {
  pageSizeSelectOptions?: {
    pageSizeSearchParam?: string;
    pageSizeOptions: number[];
  };
  totalCount: number;
  pageSize: number;
  page: number;
  pageSearchParam?: string;
}


export function PaginationWithLinks({
  pageSizeSelectOptions,
  pageSize,
  totalCount,
  page,
  onPageChange,
  onPageSizeChange,
}: {
  pageSizeSelectOptions?: { pageSizeOptions: number[] };
  pageSize: number;
  totalCount: number;
  page: number;
  onPageChange: (newPage: number) => void;
  onPageSizeChange: (newPageSize: number) => void;
}) {
  const totalPageCount = Math.ceil(totalCount / pageSize);

  const renderPageNumbers = () => {
    const items: ReactNode[] = [];
    const maxVisiblePages = 5;

    if (totalPageCount <= maxVisiblePages) {
      for (let i = 1; i <= totalPageCount; i++) {
        items.push(
          <PaginationItem key={i}>
            <button
              onClick={() => onPageChange(i)}
              className={cn(
                "px-3 py-1 rounded-md transition-all bg-main-light-gray w-[40px] h-[40px]",
                {
                  "bg-main-smoky-black text-white": page === i, // Active state
                  "hover:bg-gray-200": page !== i, // Hover effect for inactive items
                }
              )}
            >
              {i}
            </button>
          </PaginationItem>,
        );
      }
    } else {
      items.push(
        <PaginationItem key={1}>
          <button
            onClick={() => onPageChange(1)}
            className={cn("px-3 py-1 rounded-md bg-main-light-gray w-[40px] h-[40px]", { "bg-main-smoky-black text-white": page === 1 })}
          >
            1
          </button>
        </PaginationItem>,
      );

      if (page > 3) {
        items.push(<PaginationItem key="ellipsis-start"><PaginationEllipsis /></PaginationItem>);
      }

      const start = Math.max(2, page - 1);
      const end = Math.min(totalPageCount - 1, page + 1);

      for (let i = start; i <= end; i++) {
        items.push(
          <PaginationItem key={i}>
            <button
              onClick={() => onPageChange(i)}
              className={cn(
                "px-3 py-1 rounded-md transition-all bg-main-light-gray w-[40px] h-[40px]",
                {
                  "bg-main-smoky-black text-white": page === i, // Active state
                  "hover:bg-gray-200": page !== i, // Hover effect for inactive items
                }
              )}
            >
              {i}
            </button>
          </PaginationItem>,
        );
      }

      if (page < totalPageCount - 2) {
        items.push(<PaginationItem key="ellipsis-end"><PaginationEllipsis /></PaginationItem>);
      }

      items.push(
        <PaginationItem key={totalPageCount}>
          <button
            onClick={() => onPageChange(totalPageCount)}
            className={cn("px-2 py-1 rounded-md bg-main-light-gray w-[40px] h-[40px]", { "bg-main-smoky-black text-white": page === totalPageCount })}
          >
            {totalPageCount}
          </button>
        </PaginationItem>,
      );
    }

    return items;
  };

  return (
    <div className="flex items-center gap-3">
      {pageSizeSelectOptions && (
        <div className="flex flex-col gap-4 flex-1">
          <SelectRowsPerPage
            options={pageSizeSelectOptions.pageSizeOptions}
            setPageSize={onPageSizeChange}
            pageSize={pageSize}
          />
        </div>
      )}
      <Pagination className={cn({ "md:justify-end": pageSizeSelectOptions })}>
        <PaginationContent className="max-sm:gap-0">
          <PaginationItem>
            <button
              onClick={() => onPageChange(Math.max(page - 1, 1))}
              disabled={page === 1}
              className={cn(
                "flex items-center gap-1 px-2 py-2 rounded-md transition-all bg-main-light-gray w-[40px] h-[40px]",
                { "opacity-50 pointer-events-none": page === 1 }
              )}
            >
              <ChevronLeft size={22} />
            </button>
          </PaginationItem>
          {renderPageNumbers()}
          <PaginationItem>
            <button
              onClick={() => onPageChange(Math.min(page + 1, totalPageCount))}
              disabled={page === totalPageCount}
              className={cn(
                "flex items-center gap-1 px-2 py-2 rounded-md transition-all bg-main-light-gray w-[40px] h-[40px]",
                { "opacity-50 pointer-events-none": page === totalPageCount }
              )}
            >
              <ChevronRight size={22} />
            </button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

  
  
  
function SelectRowsPerPage({
  options,
  setPageSize,
  pageSize,
}: {
  options: number[];
  setPageSize: (newSize: number) => void;
  pageSize: number;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="whitespace-nowrap text-sm">Rows per page</span>

      <Select value={String(pageSize)} onValueChange={(value) => setPageSize(Number(value))}>
        <SelectTrigger className="bg-main-light-gray ">
          <SelectValue placeholder="Select page size">{String(pageSize)}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={String(option)}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}