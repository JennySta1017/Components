import React, { useState, useEffect } from "react";
import Title from "./Title";
import Image from "./Image";
import Name from "./Name";
import styles from "./Filter.module.css";

const Filter = ({ teaData }) => {
  if (!teaData || teaData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.filter}>
      <Title />
      <div className={styles.container}>
        {teaData.map((item) => (
          <a href="#" target="_blank" key={item.id} className={styles.link}>
            <Image image={item.image} />
            <Name name={item.name} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Filter;
