import React, { RefObject } from "react";
import NotFoundImg from "../../../public/images/product/no-image.jpg";

interface IImageProps {
  src: string | undefined;
  className?: string;
  alt?: string;
  ref?: RefObject<HTMLImageElement>;
  onMouseOver?: () => void;
  onClick?: () => void;
  onKeyDown?: () => void;
}

const Image: React.FC<IImageProps> = (props) => {
  const { src } = props;
  // Image Error Handling Function
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.target as HTMLImageElement;
    img.src = NotFoundImg as unknown as string;
  };
  return (
    <picture>
      <img
        {...props}
        src={!src ? (NotFoundImg as unknown as string) : src}
        onError={handleImageError}
        loading="lazy"
        decoding="async"
        alt={props?.alt ? props?.alt : "Shob"}
      />
    </picture>
  );
};

export default Image;
