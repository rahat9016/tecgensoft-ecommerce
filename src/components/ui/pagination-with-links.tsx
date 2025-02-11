"use client";



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

/**
 * Navigate with Nextjs links (need to update your own `pagination.tsx` to use Nextjs Link)
 * 
 * @example
 * ```
 * <PaginationWithLinks
    page={1}
    pageSize={20}
    totalCount={500}
  />
 * ```
 */
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem } from "./pagination";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";


import { ChevronLeft, ChevronRight } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

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
                "px-3 py-1 rounded-md transition-all",
                {
                  "bg-white text-black shadow-md": page === i, // Active state
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
            className={cn("px-3 py-1 rounded-md", { "bg-white shadow-md": page === 1 })}
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
                "px-3 py-1 rounded-md transition-all",
                {
                  "bg-white text-black shadow-md": page === i, // Active state
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
            className={cn("px-3 py-1 rounded-md", { "bg-white shadow-md": page === totalPageCount })}
          >
            {totalPageCount}
          </button>
        </PaginationItem>,
      );
    }

    return items;
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-1 lg:gap-3 w-full">
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
                "flex items-center gap-1 px-3 py-1 rounded-md transition-all",
                { "opacity-50 pointer-events-none": page === 1 }
              )}
            >
              <ChevronLeft size={16} /> Previous
            </button>
          </PaginationItem>
          {renderPageNumbers()}
          <PaginationItem>
            <button
              onClick={() => onPageChange(Math.min(page + 1, totalPageCount))}
              disabled={page === totalPageCount}
              className={cn(
                "flex items-center gap-1 px-3 py-1 rounded-md transition-all",
                { "opacity-50 pointer-events-none": page === totalPageCount }
              )}
            >
              Next <ChevronRight size={16} />
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
        <SelectTrigger>
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