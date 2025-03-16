import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [isSmallDevice, setIsSmallDevice] = useState(window.innerWidth);

  const handleResize = () => {
    setIsSmallDevice(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return { isSmallDevice };
};
