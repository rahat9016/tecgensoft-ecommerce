import { useState } from "react";

function useOpen() {
  const [open, setOpen] = useState<boolean>(false);

  return { open, setOpen };
}
export default useOpen;
