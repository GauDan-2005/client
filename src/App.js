import React, { useContext } from "react";
import Header from "./components/Static/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Static/footer/Footer";
import CartContext from "./context/CartContext";

import styles from "./App.module.css";
import { DUMMY_MEALS } from "./dummy-meals";

function App() {
  const ctx = useContext(CartContext);

  return (
    <div className={styles.app}>
      <Header />
      <Meals mealList={DUMMY_MEALS} />
      {ctx.cartButton && <Cart />}
      <Footer />
    </div>
  );
}

export default App;
