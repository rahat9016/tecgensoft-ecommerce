import { useState } from "react";

export const usePagination = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [pageCount, setPageCount] = useState(10);
  
  return {page,  pageSize, pageCount, setPage, setPageSize, setPageCount}
};
