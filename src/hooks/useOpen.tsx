import { useState } from "react";

function useDebounce() {
  const [open, setOpen] = useState<boolean>(false);

  return { open, setOpen };
}
export default useDebounce;
