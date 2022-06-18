import React, { useEffect, useRef } from "react";
import { Product } from "../models/product";

import logo from "../images/logo.svg";
import iconMenu from "../images/icon-menu.svg";
import iconDelete from "../images/icon-delete.svg";

import imageAvatar from "../images/image-avatar.png";

interface HeaderProps {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: { product: Product; quantity: number }[];
  setCartItems: React.Dispatch<
    React.SetStateAction<{ product: Product; quantity: number }[]>
  >;
}
export default function Header({
  showCart,
  setShowCart,
  cartItems,
  setCartItems,
}: HeaderProps) {
  const node = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closeNavMenu(evt: MouseEvent) {
      if (
        showCart &&
        node.current &&
        !node.current.contains(evt.target as Node)
      ) {
        setShowCart!(false);
      }
    }

    document.addEventListener("mousedown", closeNavMenu);

    return () => {
      document.removeEventListener("mousedown", closeNavMenu);
    };
  }, [showCart]);

  const handleRemoveItem = (itemIndex: number) => {
    const filteredItems = cartItems.filter((_, idx) => idx !== itemIndex);
    setCartItems(filteredItems);
  };

  return (
    <div className="">
      <header className="px-6 py-5 flex items-center justify-between md:py-0 md:px-0">
        <div className="flex gap-4 items-center md:gap-14">
          <button className="md:hidden" aria-label="menu button">
            <img src={iconMenu} alt="" />
          </button>
          <div className="w-[8.625rem]">
            <img src={logo} alt="" />
          </div>

          <nav className="hidden md:flex text-darkGrayishBlue text-[0.9375rem] gap-8">
            <div className="relative py-7 ">
              <a href="/" className="[&+div]:hover:bg-orange">
                Collections
              </a>
              <div className="absolute bottom-0 h-[2px] w-full"></div>
            </div>
            <div className="relative py-7 ">
              <a href="/" className="[&+div]:hover:bg-orange">
                Men
              </a>
              <div className="absolute bottom-0 h-[2px] w-full"></div>
            </div>
            <div className="relative py-7 ">
              <a href="/" className="[&+div]:hover:bg-orange">
                Women
              </a>
              <div className="absolute bottom-0 h-[2px] w-full"></div>
            </div>
            <div className="relative py-7 ">
              <a href="/" className="[&+div]:hover:bg-orange">
                About
              </a>
              <div className="absolute bottom-0 h-[2px] w-full"></div>
            </div>
            <div className="relative py-7 ">
              <a href="/" className="[&+div]:hover:bg-orange">
                Contact
              </a>
              <div className="absolute bottom-0 h-[2px] w-full"></div>
            </div>
          </nav>
        </div>
        <div className="flex items-center gap-5 md:gap-10">
          <button
            className=""
            aria-label="cart button"
            onClick={() => setShowCart(true)}
          >
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                className={
                  showCart ? "fill-veryDarkBlue" : "fill-darkGrayishBlue"
                }
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fillRule="nonzero"
              />
            </svg>
          </button>
          <div className="rounded-full overflow-hidden cursor-pointer w-6 md:w-12 hover:border-2 border-orange">
            <img src={imageAvatar} alt="" />
          </div>
        </div>
      </header>

      {showCart && (
        <div className="relative">
          <div className="absolute right-0 top-2 z-50 grid justify-end items-center px-2">
            <div
              ref={node}
              className="bg-white rounded-lg min-h-[16rem] shadow-xl w-[22.5rem]"
            >
              <div className="p-6 font-bold text-veryDarkBlue">Cart</div>
              <hr />
              {cartItems.length <= 0 ? (
                <div className="p-6 grid w-full place-content-center text-darkGrayishBlue h-[11.75rem] font-bold">
                  Your cart is empty.
                </div>
              ) : (
                <div className="grid gap-6 p-6">
                  {cartItems.map((cartItem, idx) => {
                    const priceAfterDiscount =
                      (cartItem.product.price * cartItem.product.discount) /
                      100;

                    return (
                      <div
                        key={idx}
                        className="grid grid-cols-[max-content_minmax(0,_1fr)_max-content] gap-4 text-darkGrayishBlue"
                      >
                        <img
                          className="w-12 rounded"
                          src={cartItem.product.thumbnails[0]}
                          alt=""
                        />
                        <div className="">
                          <p className="overflow-ellipsis whitespace-nowrap overflow-hidden">
                            {cartItem.product.title}
                          </p>
                          <p className="overflow-ellipsis">
                            ${priceAfterDiscount.toFixed(2)} x{" "}
                            {cartItem.quantity}{" "}
                            <span className="font-bold text-veryDarkBlue">
                              $
                              {(priceAfterDiscount * cartItem.quantity).toFixed(
                                2
                              )}
                            </span>
                          </p>
                        </div>
                        <button
                          className=""
                          onClick={() => handleRemoveItem(idx)}
                        >
                          <img
                            className="w-4 h-4"
                            src={iconDelete}
                            alt=""
                            aria-label="delete button"
                          />
                        </button>
                      </div>
                    );
                  })}
                  <button className="bg-orange text-white font-bold py-5 rounded-lg">
                    Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
