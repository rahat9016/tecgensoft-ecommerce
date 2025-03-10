import Image from "next/image";
import noreviewImg from "../../../../../public/images/product/no_review_yet.svg";

const NoReviewYet = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[250px] lg:h-[420px]">
      <Image src={noreviewImg} alt="no review" width={100} height={100} />
      <p className="font-medium text-base mt-6 text-spanish-gray">
        No reviews yet
      </p>
    </div>
  );
};

export default NoReviewYet;
