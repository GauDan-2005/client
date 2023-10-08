import React, { useContext, useState, useEffect } from "react";
import MealItemForm from "./MealItemForm";
import styles from "./MealItem.module.css";
import CartContext from "../../context/CartContext";

const MealItem = (props) => {
  const ctx = useContext(CartContext);
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    setInCart(ctx.indexPresent(props.id));
  }, [ctx, ctx.cartList, props.id]);

  function makeItem() {
    const totalPrice = props.price * 1;
    const item = {
      id: props.id,
      name: props.name,
      price: props.price,
      quantity: 1,
      totalPrice: totalPrice,
    };
    ctx.addToList(item);
  }

  return (
    <div className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={styles.description}>{props.desc}</p>
        <p className={styles.price}>${props.price}</p>
      </div>
      <MealItemForm id={props.id} isPresent={inCart} makeItem={makeItem} />
    </div>
  );
};

export default MealItem;
