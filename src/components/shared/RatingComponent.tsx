"use client";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState, useEffect } from "react";

type RatingComponentProps = {
  value?: number;
  isReadOnly?: boolean;
};

const RatingComponent: React.FC<RatingComponentProps> = ({
  value = 0,
  isReadOnly = false,
}) => {
  const [rating, setRating] = useState(value);

  useEffect(() => {
    setRating(value);
  }, [value]);

  return (
    <div className="w-[120px]">
      <Rating
        readOnly={isReadOnly}
        value={rating}
        onChange={!isReadOnly ? setRating : undefined}
      />
    </div>
  );
};

export default RatingComponent;
