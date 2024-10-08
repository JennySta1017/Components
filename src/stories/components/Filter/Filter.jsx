import React from "react";
import Title from "./Title";
import Image from "./Image";
import Name from "./Name";
import styles from "./Filter.module.css";

const Filter = ({ teaData }) => {
  if (!teaData || teaData.length === 0) {
    return <div>Loading...</div>;
  }

  console.log(teaData);

  return (
    <div className={styles.filter}>
      <Title />
      <div className={styles.container}>
        {teaData.map((item) => (
          <div key={item.id} className={styles.details}>
            <Image image={item.image} name={item.name} />
            <Name name={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
