import React from "react";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  return (
    <form className={styles.form}>
      <div className={styles.title}>
        <label>Amount</label>
        <input type="number" />
      </div>
      <button onClick={() => props.changeQuantity(props.id)} type="submit">
        +Add
      </button>
    </form>
  );
};

export default MealItemForm;
