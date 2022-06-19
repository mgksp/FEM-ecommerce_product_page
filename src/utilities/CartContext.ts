import { createContext } from "react";
import { Product } from "../models/product";

interface iCartContext {
  cartItems: { product: Product; quantity: number }[];
  setCartItems: React.Dispatch<
    React.SetStateAction<{ product: Product; quantity: number }[]>
  >;
  totalCartItems: number;
  setTotalCartItems: React.Dispatch<React.SetStateAction<number>>;
}
export const cartContext = createContext<iCartContext | null>(null);
