import React, { useContext, useState } from "react";
import Card from "../UI/Card/Card";
import CartItem from "./CartItem";
import CartContext from "../../context/CartContext";

import styles from "./Cart.module.css";
import modalStyle from "./Modal.module.css";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  let totalBill = 0;

  return (
    <div>
      <div className={modalStyle.backdrop} />
      <div className={`${modalStyle.modal} ${styles.inner}`}>
        <Card className={styles["cart-items"]}>
          {ctx.cartList.map((cartItem) => {
            console.log(typeof cartItem.totalPrice);
            totalBill += cartItem.totalPrice;
            return (
              cartItem.quantity > 0 && (
                <CartItem
                  key={cartItem.id}
                  id={cartItem.id}
                  name={cartItem.name}
                  price={cartItem.price}
                  totalPrice={cartItem.totalPrice}
                  quantity={cartItem.quantity}
                />
              )
            );
          })}
          <div className={styles.total}>
            <p>Total Amount</p>
            <p>${totalBill.toFixed(2)}</p>
          </div>
          <div className={styles.actions}>
            <button onClick={ctx.CartIsClicked}>Close</button>
            <button onClick={ctx.logOrder}>Order</button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Cart;
