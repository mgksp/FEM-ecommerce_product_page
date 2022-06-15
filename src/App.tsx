import { useState } from "react";
import { Header, Main } from "./components";

function App() {
  const [showCart, setShowCart] = useState<boolean>(false);
  return (
    <>
      <Header showCart={showCart} setShowCart={setShowCart} />
      <Main />
    </>
  );
}

export default App;
