import logo from "../images/logo.svg";

import iconMenu from "../images/icon-menu.svg";

import imageAvatar from "../images/image-avatar.png";
import React, { useEffect, useRef } from "react";

interface HeaderProps {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Header({ showCart, setShowCart }: HeaderProps) {
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

  return (
    <div className="">
      <header className="px-6 py-5 flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <button className="" aria-label="menu button">
            <img src={iconMenu} alt="" />
          </button>
          <div className="w-[8.625rem]">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="flex items-center gap-5">
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
          <div className="rounded-full w-6">
            <img src={imageAvatar} alt="" />
          </div>
        </div>
      </header>

      {showCart && (
        <div className="relative">
          <div className="absolute right-0 top-2 z-50 w-full grid place-items-center px-2">
            <div
              ref={node}
              className="bg-white rounded-lg w-full min-h-[16rem] shadow-xl"
            >
              <div className="p-6 font-bold text-veryDarkBlue">Cart</div>
              <hr />
              <div className="p-6 grid w-full place-content-center text-darkGrayishBlue h-[11.75rem] font-bold">
                Your cart is empty.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
