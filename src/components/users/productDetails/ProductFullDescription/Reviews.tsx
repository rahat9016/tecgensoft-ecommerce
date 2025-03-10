import React from "react";
import { IReview, IVariant } from "../types";
import { getRatingRoundFigure, getTime } from "../productHelper";
import CustomerDRFHeader from "../components/CustomerDRFHeader";
import RatingComponent from "@/components/shared/RatingComponent";
import ProgressBar from "../components/ProgressBar";
import NoReviewYet from "../components/NoReviewYet";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type ReviewsProps = {
  variant: IVariant | undefined;
  productReviews: IReview[];
};

const Reviews: React.FC<ReviewsProps> = ({ variant, productReviews }) => {
  if (!variant) return null;

  const {
    average_rating: averageRating,
    total_rating_count: totalRatingCount,
    rating_one: ratingOne,
    rating_two: ratingTwo,
    rating_three: ratingThree,
    rating_four: ratingFour,
    rating_five: ratingFive,
  } = variant;

  const ratingRoundFigure = getRatingRoundFigure(averageRating);

  function getRatingAverage(totalRating: number, rating: number) {
    if (totalRating <= 0) {
      return 0;
    }
    const avgRating = (100 * rating) / totalRating;
    return avgRating;
  }
  const firstStar = getRatingAverage(totalRatingCount, ratingOne);
  const secondStar = getRatingAverage(totalRatingCount, ratingTwo);
  const threeStar = getRatingAverage(totalRatingCount, ratingThree);
  const fourStar = getRatingAverage(totalRatingCount, ratingFour);
  const fiveStar = getRatingAverage(totalRatingCount, ratingFive);

  const avgRatingFunc = (rating: number) => {
    if (averageRating > 0 && Number.isInteger(averageRating)) {
      return rating;
    }
    if (averageRating > 0 && !Number.isInteger(averageRating)) {
      return rating.toFixed(2);
    }
    return 0;
  };

  return (
    <div className="px-5 py-6 bg-white">
      {/* Review's header */}
      <CustomerDRFHeader header={`Customer Reviews (${totalRatingCount})`} />
      {/* count star */}
      <div className="mt-5 lg:mt-10 flex lg:grid lg:grid-cols-2">
        {/* client review's */}
        <div className="w-5/12">
          <h1 className="font-extrabold text-black-dim text-[40px] lg:text-[57px] mb-3 lg:mb-5 leading-none">
            {avgRatingFunc(averageRating)}
          </h1>
          {/* <Rating
            initialRating={ratingRoundFigure}
            emptySymbol={<FaStar className="text-light mr-2" />}
            fullSymbol={<FaStar className="text-[#F2AE14] mr-2" />}
            readonly
          /> */}
          <RatingComponent isReadOnly={true} value={ratingRoundFigure} />

          <p className="mt-3 lg:mt-5 text-sm font-normal leading-none text-black-dark">
            {totalRatingCount} ratings
          </p>
        </div>
        <div className="w-7/12 flex flex-col gap-3">
          <ProgressBar
            progressValue="5 star"
            percentage={fiveStar}
            rating={ratingFive}
          />
          <ProgressBar
            progressValue="4 star"
            percentage={fourStar}
            rating={ratingFour}
          />
          <ProgressBar
            progressValue="3 star"
            percentage={threeStar}
            rating={ratingThree}
          />
          <ProgressBar
            progressValue="2 star"
            percentage={secondStar}
            rating={ratingTwo}
          />
          <ProgressBar
            progressValue="1 star"
            percentage={firstStar}
            rating={ratingOne}
          />
        </div>
      </div>
      <span className="w-full h-[1px] bg-light block my-6" />
      <div className="mt-16">
        {/* <----------Product review images modal----------> */}
        {/* {open && (
          <Modal ref={reference} closeModal={() => setOpen(false)}>
            <ReviewImagesSlider images={reviewImages} />
          </Modal>
        )} */}
        {/* <----------Product Reviews----------> */}
        {productReviews.length <= 0 ? (
          <NoReviewYet />
        ) : (
          productReviews.map((productReview) => {
            const {
              rating,
              created_by: createdBy,
              review,
              created_at: createdAt,
              images,
            } = productReview;
            return (
              <div
                key={productReview.id}
                className="bg-cultured lg:bg-transparent px-3 lg:px-0 py-6 lg:py-0 rounded-[13px] lg:rounded-none mb-4 lg:mb-0"
              >
                <div>
                  <div className="flex">
                    <div className="w-1/2 flex flex-col-reverse lg:flex-col">
                      <div className="flex items-center gap-1">
                        <RatingComponent isReadOnly={true} value={rating} />
                        <p className="text-silver text-xsm">({rating}/5)</p>
                      </div>
                      <h5 className=" text-xs text-black-dim">
                        {" "}
                        <span className="text-spanish-gray">by </span>
                        {createdBy.first_name}
                      </h5>
                    </div>
                    <div className="w-1/2">
                      <p className="text-right text-spanish-gray text-[10px] mb-2">
                        {getTime(createdAt)}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`flex flex-col lg:flex-row items-start mt-4 ${
                      images?.length > 0 ? "gap-4 lg:gap-14" : ""
                    }`}
                  >
                    {/*//? ======== review image ======  */}
                    <div className="lg:max-w-1/2 flex gap-2">
                      {images && images?.length > 0
                        ? images.slice(0, 4).map((img, index) => {
                            return (
                              <div
                                key={index + 1}
                                className="relative w-[75px] h-[75px]"
                              >
                                <Dialog key={index + 1}>
                                  <DialogTrigger>
                                    <Image
                                      src={img}
                                      alt="Review"
                                      width={100}
                                      height={100}
                                      className="w-[130px] object-cover"
                                    />
                                  </DialogTrigger>
                                  <DialogContent>
                                    <DialogHeader>
                                      <DialogTitle></DialogTitle>
                                      <DialogDescription></DialogDescription>
                                    </DialogHeader>
                                    <Image
                                      src={img}
                                      alt="Review modal"
                                      width={470}
                                      height={345}
                                      className="w-full h-full object-cover"
                                    />
                                  </DialogContent>
                                </Dialog>
                                {images.length > 4 && index === 3 && (
                                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-col items-center justify-center bg-black  bg-opacity-60 ">
                                    <p className="text-white text-[10px]">
                                      {images.length - 4}+
                                    </p>
                                    <p className="text-white text-[10px] ">
                                      view more
                                    </p>
                                  </div>
                                )}
                              </div>
                            );
                          })
                        : null}
                    </div>
                    <div>
                      {review && (
                        <p className="text-xs text-black-dim">{review}</p>
                      )}
                    </div>
                  </div>
                </div>
                <span className="hidden lg:block  w-full h-[1px] bg-light my-6" />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Reviews;
