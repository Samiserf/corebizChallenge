import "./App.css";
import React, { useContext } from "react";
import Nav from "./components/nav/nav";
import Header from "./components/header/header";
import FormContact from "./components/formContact/formContact";
import Footer from "./components/footer/footer";
import ProductsBestSold from "./components/productsBestSold/productsBestSold";
import { CartContext } from "./context/cartContext";

function App() {
  //Logic using context for increment cart

  const [, setCart] = useContext(CartContext);

  React.useEffect(() => {
    if (localStorage.getItem("countCart")) {
      localStorage.setItem("countCart", localStorage.getItem("countCart"));
      setCart(localStorage.getItem("countCart"));
    } else {
      localStorage.setItem("countCart", 0);
      setCart(0);
    }
  }, [setCart]);

  //Finish Logic using context for increment cart

  return (
    <div className="App">
      <Nav />
      <Header />
      <ProductsBestSold />
      <FormContact />
      <Footer />
    </div>
  );
}

export default App;
