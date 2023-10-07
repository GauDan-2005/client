import React from "react";
import Title from "./Title";
import HeaderCartButton from "./HeaderCartButton";

import styles from "./Header.module.css";
import Cover_Image from "../Constants/Image";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Food Order</h2>
        <HeaderCartButton />
      </div>
      <div className={styles["main-image"]}>
        <img src={Cover_Image} alt="Cover_Photo" />
      </div>
      <Title />
    </div>
  );
};

export default Header;
