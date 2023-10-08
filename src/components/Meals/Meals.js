import React from "react";
import Card from "../UI/Card/Card";
import MealItem from "./MealItem";

import styles from "./Meals.module.css";

const Meals = (props) => {
  return (
    <Card className={styles.meals}>
      {props.mealList.map((item) => (
        <div>
          <MealItem
            key={item.id}
            id={item.id}
            name={item.name}
            desc={item.description}
            price={item.price}
          />
        </div>
      ))}
    </Card>
  );
};

export default Meals;
