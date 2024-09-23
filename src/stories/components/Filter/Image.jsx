import React from "react";
import styles from "./Image.module.css";

const Image = ({ image, name }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt={name} />
    </div>
  );
};

export default Image;
