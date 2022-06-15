import imageProduct1 from "../images/image-product-1.jpg";
import imageProduct2 from "../images/image-product-2.jpg";
import imageProduct3 from "../images/image-product-3.jpg";
import imageProduct4 from "../images/image-product-4.jpg";

import iconNext from "../images/icon-next.svg";
import iconPrevious from "../images/icon-previous.svg";
import { useState } from "react";
import { directions } from "../utilities/enums";

export default function MobImgCarousel() {
  const [img, setImg] = useState<number>(0);

  const productImages = [
    imageProduct1,
    imageProduct2,
    imageProduct3,
    imageProduct4,
  ];

  const handleImgs = (direction: directions) => {
    if (direction === directions.right) {
      if (img >= productImages.length - 1) {
        setImg(0);
      } else {
        setImg((prev) => prev + 1);
      }
    }
    if (direction === directions.left) {
      if (img <= 0) {
        setImg(3);
      } else {
        setImg((prev) => prev - 1);
      }
    }
  };

  return (
    <div className="relative">
      <div className="h-[18.75rem]">
        <img
          className="h-full w-full object-cover object-center"
          src={productImages[img]}
          alt=""
        />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full px-4 flex items-center justify-between">
        <button
          className="rounded-full bg-white w-10 h-10 grid place-items-center"
          onClick={() => handleImgs(directions.left)}
          aria-label="previous image"
        >
          <img src={iconPrevious} alt="" />
        </button>
        <button
          className="rounded-full bg-white w-10 h-10 grid place-items-center"
          onClick={() => handleImgs(directions.right)}
          aria-label="next image"
        >
          <img src={iconNext} alt="" />
        </button>
      </div>
    </div>
  );
}
