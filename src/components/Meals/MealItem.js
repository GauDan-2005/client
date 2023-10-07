import React from "react";
import MealItemForm from "./MealItemForm";
import styles from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <div className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={styles.description}>{props.desc}</p>
        <p className={styles.price}>${props.price}</p>
      </div>
      <MealItemForm changeQuantity={null} />
    </div>
  );
};

export default MealItem;
