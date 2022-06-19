import React, { useContext, useState } from "react";

import MobImgCarousel from "./MobImgCarousel";
import DesktopImgGallery from "./DesktopImgGallery";

import { cartContext } from "../utilities/CartContext";
import { Product } from "../models/product";

import iconPlus from "../images/icon-plus.svg";
import iconMinus from "../images/icon-minus.svg";

interface MainProps {
  product: Product;
}
export default function Main({ product }: MainProps) {
  const cart = useContext(cartContext);

  const [quantity, setQuantity] = useState(0);

  const handleAddItemToCart = () => {
    if (quantity > 0) {
      cart!.setCartItems((prev) => [...prev, { product, quantity }]);
      setQuantity(0);
    }
    return;
  };

  return (
    <main className="md:grid grid-cols-2 place-items-center gap-32 md:px-12">
      <MobImgCarousel />
      <DesktopImgGallery />

      <div className="">
        <div className="p-6 md:p-0">
          <p className="uppercase font-bold tracking-widest text-xs text-orange mb-3 md:text-[0.8125rem] md:mb-5">
            {product.brand}
          </p>
          <h1 className="font-bold text-[1.75rem] leading-8 mb-4 text-veryDarkBlue md:text-[2.75rem] md:leading-[3rem]">
            {product.title}
          </h1>
          <p className="text-darkGrayishBlue text-[0.9375rem] mb-7 md:text-base md:leading-[1.625rem]">
            {product.desc}
          </p>

          <div className="flex items-center justify-between mb-6 font-bold md:flex-col md:items-start md:mb-8">
            <div className="flex items-center gap-4">
              <h2 className=" text-[1.75rem] tracking-[1px] text-veryDarkBlue">
                ${(product.price * (product.discount / 100)).toFixed(2)}
              </h2>
              <p className="text-orange bg-paleOrange rounded px-1">
                {product.discount}%
              </p>
            </div>
            <p className="line-through text-grayishBlue">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex bg-lightGrayishBlue rounded-lg px-3 md:flex-[2]">
              <button
                className="w-10 grid place-items-center"
                aria-label="minus quantity button"
                onClick={() => {
                  if (quantity === 0) return;
                  setQuantity((prev) => prev - 1);
                }}
              >
                <img className="w-3" src={iconMinus} alt="" />
              </button>

              <input
                type="number"
                value={quantity}
                readOnly
                className="w-full bg-lightGrayishBlue py-4 text-center px-10 font-bold text-veryDarkBlue"
              />

              <button
                className="w-10 grid place-items-center"
                aria-label="plus quantity button"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                <img className="w-3" src={iconPlus} alt="" />
              </button>
            </div>

            <button
              className="text-white bg-orange flex items-center justify-center gap-2 py-4 rounded-lg font-bold md:flex-[3] btn-shadow"
              onClick={() => {
                handleAddItemToCart();
              }}
            >
              <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="white"
                  fillRule="nonzero"
                />
              </svg>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
