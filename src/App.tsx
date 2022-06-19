import { useState } from "react";
import { Header, Main } from "./components";

import { Products } from "./data/products";
import { Product } from "./models/product";
import { cartContext } from "./utilities/CartContext";

function App() {
  const [cartItems, setCartItems] = useState<
    { product: Product; quantity: number }[]
  >([]);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [totalCartItems, setTotalCartItems] = useState<number>(0);

  return (
    <cartContext.Provider
      value={{ cartItems, setCartItems, totalCartItems, setTotalCartItems }}
    >
      <>
        <Header showCart={showCart} setShowCart={setShowCart} />
        <hr className="hidden md:block mb-20" />
        <Main product={Products[0]} />
      </>
    </cartContext.Provider>
  );
}

export default App;
