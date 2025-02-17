"use client";

import {useEffect, useState} from "react";
import noInternet from "../../../public/noInternet.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), {ssr: false});

const NoInternet: React.FC = () => {
  const [isOnline, setIsOnline] = useState<boolean>(true);

  useEffect(() => {
    const updateOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    return () => {
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
    };
  }, []);

  if (!isOnline) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <Lottie
          className="h-80 w-auto"
          animationData={noInternet}
          loop={true}
        />
        <div className="flex flex-col items-center justify-center">
          <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800">
            YOU ARE OFFLINE !!!
          </p>
          <p className="md:text-lg lg:text-xl text-gray-600 mt-8 items-center">
            Check you network
          </p>
        </div>
      </div>
    );
  }

  return null;
};

export default NoInternet;
