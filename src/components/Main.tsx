import MobImgCarousel from "./MobImgCarousel";

import iconPlus from "../images/icon-plus.svg";
import iconMinus from "../images/icon-minus.svg";
import { useState } from "react";
import { Product } from "../models/product";

interface MainProps {
  product: Product;
}
export default function Main({ product }: MainProps) {
  const [quantity, setQuantity] = useState(0);

  return (
    <main className="">
      <MobImgCarousel />
      <div className="p-6">
        <p className="uppercase font-bold tracking-widest text-xs text-orange mb-3">
          {product.brand}
        </p>
        <h1 className="font-bold text-[1.75rem] leading-8 mb-4 text-veryDarkBlue">
          {product.title}
        </h1>
        <p className="text-darkGrayishBlue text-[0.9375rem] mb-7">
          {product.desc}
        </p>

        <div className="flex items-center justify-between mb-6 font-bold">
          <div className="flex items-center gap-4">
            <h2 className=" text-[1.75rem] tracking-[1px] text-veryDarkBlue">
              ${product.price * (product.discount / 100)}
            </h2>
            <p className="text-orange bg-paleOrange rounded px-1">
              {product.discount}%
            </p>
          </div>
          <p className="line-through text-grayishBlue">${product.price}</p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative">
            <button
              className="absolute top-1/2 -translate-y-1/2 left-6"
              aria-label="minus quantity button"
              onClick={() => {
                if (quantity === 0) return;
                setQuantity((prev) => prev - 1);
              }}
            >
              <img src={iconMinus} alt="" />
            </button>

            <button
              className="absolute top-1/2 -translate-y-1/2 right-6"
              aria-label="plus quantity button"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              <img src={iconPlus} alt="" />
            </button>

            <input
              type="number"
              value={quantity}
              readOnly
              className="w-full bg-lightGrayishBlue rounded-lg py-4 text-center px-10 font-bold text-veryDarkBlue"
            />
          </div>

          <button className="text-white bg-orange flex items-center justify-center gap-2 py-4 rounded-lg font-bold">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="white"
                fillRule="nonzero"
              />
            </svg>{" "}
            Add to cart
          </button>
        </div>
      </div>
    </main>
  );
}
