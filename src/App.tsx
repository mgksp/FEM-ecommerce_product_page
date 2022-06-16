import { useState } from "react";
import { Header, Main } from "./components";

import { Products } from "./data/products";

function App() {
  const [showCart, setShowCart] = useState<boolean>(false);
  return (
    <>
      <Header showCart={showCart} setShowCart={setShowCart} />
      <hr className="hidden md:block mb-20" />
      <Main product={Products[0]} />
    </>
  );
}

export default App;
