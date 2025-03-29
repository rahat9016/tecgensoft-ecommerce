"use client";
import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";
import loadingAnimatedIcon from "../../../public/icons/loading_Icon.json";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Loader = () => {
  return (
    <div className="w-full min-h-[400px] container mx-auto my-10">
      <Skeleton className=" w-full min-h-[400px] flex justify-center items-center bg-gray-light rounded-lg">
        <div>
          <Lottie
            style={{
              width: "300px",
            }}
            animationData={loadingAnimatedIcon}
            loop={true}
          />
        </div>
      </Skeleton>
    </div>
  );
};

export default Loader;
