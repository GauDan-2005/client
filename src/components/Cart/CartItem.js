import React from "react";

import styles from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <div className={styles["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={styles.cart_desc}>
          <p className={styles.price}>${props.price}</p>
          <p className={styles.amount}>x{props.quantity}</p>
        </div>
      </div>
      <div className={styles.actions}>
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
};

export default CartItem;
