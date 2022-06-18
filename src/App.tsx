import { useState } from "react";
import { Header, Main } from "./components";

import { Products } from "./data/products";
import { Product } from "./models/product";

function App() {
  const [cartItems, setCartItems] = useState<
    { product: Product; quantity: number }[]
  >([]);
  const [showCart, setShowCart] = useState<boolean>(false);

  return (
    <>
      <Header
        showCart={showCart}
        setShowCart={setShowCart}
        cartItems={cartItems}
      />
      <hr className="hidden md:block mb-20" />
      <Main product={Products[0]} setCartItems={setCartItems} />
    </>
  );
}

export default App;
