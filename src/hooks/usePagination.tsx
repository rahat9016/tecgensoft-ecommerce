import { useState } from "react";

export const usePagination = () => {
  const [page, setPage] = useState<number>(0);
  const pageSize:number = 10; 
  
  return {page, setPage, pageSize}
};
