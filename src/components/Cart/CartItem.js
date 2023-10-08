import React, { useContext } from "react";
import CartContext from "../../context/CartContext";

import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const ctx = useContext(CartContext);
  return (
    <div className={styles["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={styles.cart_desc}>
          <p className={styles.price}>${props.price}</p>
          <p className={styles.amount}>x{props.quantity}</p>
        </div>
      </div>
      <div className={styles.summary}>
        <p>${props.totalPrice.toFixed(2)}</p>
        <div className={styles.actions}>
          <button
            onClick={() => {
              ctx.dereaseQuantity(props.id);
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              ctx.increaseQuantity(props.id);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
