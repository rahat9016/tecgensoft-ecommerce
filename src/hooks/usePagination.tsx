import { useState } from "react";

export const usePagination = () => {
  const [page, setPage] = useState<number>(0);

  return {page, setPage}
};
