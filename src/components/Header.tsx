import React, { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { cartContext } from "../utilities/CartContext";

import logo from "../images/logo.svg";
import iconMenu from "../images/icon-menu.svg";
import iconClose from "../images/icon-close.svg";

import imageAvatar from "../images/image-avatar.png";
import Cart from "./Cart";

interface HeaderProps {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Header({ showCart, setShowCart }: HeaderProps) {
  const cart = useContext(cartContext);

  const [showMobNav, setShowMobNav] = useState<boolean>(false);

  useEffect(() => {
    let q: number = 0;
    cart?.cartItems.forEach((item) => (q += item.quantity));
    cart?.setTotalCartItems(q);
  }, [cart!.cartItems]);

  return (
    <div className="">
      <header className="px-6 py-5 flex items-center justify-between md:py-0 md:px-0">
        <div className="flex gap-4 items-center md:gap-14">
          <button
            className="md:hidden"
            onClick={() => setShowMobNav(true)}
            aria-label="menu button"
          >
            <img src={iconMenu} alt="" />
          </button>

          <AnimatePresence initial={false} exitBeforeEnter={true}>
            {showMobNav && <MobNav setShowMobNav={setShowMobNav} />}
          </AnimatePresence>

          <div className="w-[8.625rem]">
            <img src={logo} alt="" />
          </div>

          <nav className="hidden md:flex text-darkGrayishBlue text-[0.9375rem] gap-8">
            {["Collections", "Men", "Women", "About", "Contact"].map(
              (navItem) => (
                <div key={navItem} className="relative py-7 ">
                  <a href="/" className="[&+div]:hover:bg-orange">
                    {navItem}
                  </a>
                  <div className="absolute bottom-0 h-[2px] w-full"></div>
                </div>
              )
            )}
          </nav>
        </div>
        <div className="flex items-center gap-5 md:gap-10">
          <div className="relative">
            <div
              className="absolute -right-1/2 -top-1/4 bg-orange rounded-full text-white text-[0.625rem] font-bold w-full min-w-5 text-center cursor-pointer"
              onClick={() => setShowCart(true)}
            >
              {cart!.totalCartItems > 0 ? cart!.totalCartItems : null}
            </div>

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
          </div>
          <div className="rounded-full overflow-hidden cursor-pointer w-6 md:w-12 hover:border-2 border-orange">
            <img src={imageAvatar} alt="" />
          </div>
        </div>
      </header>

      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}
      </AnimatePresence>
    </div>
  );
}

interface MobNavProps {
  setShowMobNav: React.Dispatch<React.SetStateAction<boolean>>;
}
const MobNav = ({ setShowMobNav }: MobNavProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.125 }}
      className="absolute left-0 top-0 z-50 w-full bg-blackOp75 md:hidden"
      style={{ height: document.body.clientHeight }}
    >
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "75%" }}
        exit={{ width: 0 }}
        className="bg-white h-full p-6"
      >
        <button
          className="mb-14"
          aria-label="close button"
          onClick={() => setShowMobNav(false)}
        >
          <img src={iconClose} alt="" />
        </button>

        <nav className="grid gap-6 font-bold text-lg text-veryDarkBlue">
          <a href="/">Collections</a>
          <a href="">Men</a>
          <a href="">Women</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </nav>
      </motion.div>
    </motion.div>
  );
};
