import React from "react";
import Card from "../UI/Card/Card";

import styles from "./Title.module.css";

const Title = () => {
  return (
    <Card className={styles.title}>
      <h2 className={styles.para}>Delicious Food, Delivered To You</h2>
      <p className={styles.para}>
        Choose your favourite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p className={styles.para}>
        All out meals are cooked with high-qualtity ingredients, just in-time
        and ofcourse by experienced chefs.
      </p>
    </Card>
  );
};

export default Title;
