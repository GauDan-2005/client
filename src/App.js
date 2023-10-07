import React, { useRef, useState } from "react";
import Header from "./components/Static/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Static/footer/Footer";

import styles from "./App.module.css";
import { DUMMY_MEALS } from "./dummy-meals";

function App() {
  // function changeQuantity(id) {}

  return (
    <div className={styles.app}>
      <Header />
      <Meals mealList={DUMMY_MEALS} />
      {/* <Cart cartItemList={DUMMY_MEALS} /> */}
      <Footer />
    </div>
  );
}

export default App;
