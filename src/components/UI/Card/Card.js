import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  let style = `${styles.card} ${props.className}`;
  return <div className={style}>{props.children}</div>;
};

export default Card;
