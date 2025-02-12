import { useState } from "react";
import useDebounce from "./useDebounce";

export const usePagination = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [pageCount, setPageCount] = useState(10);
  const [search, setSearch] = useState<string>("");
  const [delay, setDelay] = useState<number>(300);
  const debounceQuery = useDebounce(search, delay);

  return {
    page,
    pageSize,
    pageCount,
    setPage,
    setPageSize,
    setPageCount,
    search,
    setSearch,
    setDelay,
    debounceQuery,
  };
};
