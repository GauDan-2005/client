import React, { useContext, useEffect, useState } from "react";

import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Constants/CartIcon";
import CartContext from "../../context/CartContext";

const HeaderCartButton = () => {
  const ctx = useContext(CartContext);

  const [isBumping, setIsBumping] = useState(false);

  useEffect(() => {
    setIsBumping(true);
    const bumpTimeout = setTimeout(() => {
      setIsBumping(false);
    }, 300);

    return () => {
      clearTimeout(bumpTimeout);
    };
  }, [ctx.cartList.length]);

  return (
    <div className={isBumping && styles.bump}>
      <button onClick={ctx.CartIsClicked} className={styles.button}>
        <div className={styles.icon}>
          <CartIcon />
        </div>
        Your Cart
        <div className={styles.badge}>{ctx.cartList.length}</div>
      </button>
    </div>
  );
};

export default HeaderCartButton;
