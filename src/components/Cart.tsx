import { motion } from "framer-motion";
import React, { useContext } from "react";
import useClickOutsideToClose from "../hooks/useClickOutsideToClose";

import iconDelete from "../images/icon-delete.svg";
import { cartContext } from "../utilities/CartContext";

interface CartProps {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Cart({ showCart, setShowCart }: CartProps) {
  const cart = useContext(cartContext);

  const node = useClickOutsideToClose(showCart, setShowCart);

  const handleRemoveItem = (itemIndex: number) => {
    const filteredItems = cart!.cartItems.filter((_, idx) => idx !== itemIndex);
    cart!.setCartItems(filteredItems);
  };

  return (
    <div className="relative">
      <div className="absolute right-0 top-2 z-50 grid justify-end items-center px-2">
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10, transition: { duration: 0.15 } }}
          ref={node}
          className="bg-white rounded-lg min-h-[16rem] shadow-xl w-[22.5rem]"
        >
          <div className="p-6 font-bold text-veryDarkBlue">Cart</div>
          <hr />
          {cart!.cartItems.length <= 0 ? (
            <div className="p-6 grid w-full place-content-center text-darkGrayishBlue h-[11.75rem] font-bold">
              Your cart is empty.
            </div>
          ) : (
            <div className="grid gap-6 p-6">
              {cart!.cartItems.map((cartItem, idx) => {
                const priceAfterDiscount =
                  (cartItem.product.price * cartItem.product.discount) / 100;

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
                        ${priceAfterDiscount.toFixed(2)} x {cartItem.quantity}{" "}
                        <span className="font-bold text-veryDarkBlue">
                          ${(priceAfterDiscount * cartItem.quantity).toFixed(2)}
                        </span>
                      </p>
                    </div>
                    <button className="" onClick={() => handleRemoveItem(idx)}>
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
        </motion.div>
      </div>
    </div>
  );
}
