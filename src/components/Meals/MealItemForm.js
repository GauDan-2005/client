import React, { useContext } from "react";
import styles from "./MealItemForm.module.css";
import CartContext from "../../context/CartContext";

const MealItemForm = (props) => {
  const ctx = useContext(CartContext);

  return (
    <form className={styles.form}>
      {props.isPresent ? (
        <div className={styles.inCart}>
          <div className={styles.title}>
            <label>Amount</label>
            <p>{ctx.displayAmount(props.id)}</p>
          </div>
          <div className={styles["cart-item"]}>
            <button
              onClick={() => {
                ctx.dereaseQuantity(props.id);
              }}
              type="button"
            >
              -
            </button>
            <button
              onClick={() => {
                ctx.increaseQuantity(props.id);
              }}
              type="button"
            >
              +
            </button>
          </div>
        </div>
      ) : (
        <button
          className={styles.addCart}
          onClick={props.makeItem}
          type="button"
        >
          Add to cart
        </button>
      )}
    </form>
  );
};

export default MealItemForm;
