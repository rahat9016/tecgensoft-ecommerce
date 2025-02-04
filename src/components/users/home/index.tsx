import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="flex gap-4 pt-4">
          <Skeleton className="min-w-[19.67%] h-[584px] max-h-[584px] bg-white rounded-lg p-2" />
          <div className="min-w-[78.43%] flex flex-col gap-4">
            <Skeleton className="min-w-[78.43%] h-[353px] max-h-[353px] bg-white rounded-lg p-2"/>
            <div className="grid grid-cols-2 gap-4">
              <Skeleton className="w-full bg-white object-contain h-[110px] lg:h-[215px] rounded-lg"/>
              <Skeleton className="w-full bg-white object-contain h-[110px] lg:h-[215px] rounded-lg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
