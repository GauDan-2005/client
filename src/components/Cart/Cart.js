import React from "react";
import Card from "../UI/Card/Card";
import CartItem from "./CartItem";

import styles from "./Cart.module.css";
import modalStyle from "./Modal.module.css";

const Cart = (props) => {
  return (
    <div>
      <div className={modalStyle.backdrop} />
      <div className={`${modalStyle.modal} ${styles.inner}`}>
        <Card className={styles["cart-items"]}>
          {props.cartItemList.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              name={cartItem.name}
              price={cartItem.price}
              quantity={cartItem.quantity}
            />
          ))}
          <div className={styles.total}>
            <p>Total Amount</p>
            <p>$bill{null}</p>
          </div>
          <div className={styles.actions}>
            <button>Close</button>
            <button>Order</button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Cart;
