import React from "react";
import styles from "./ListTe-sort.module.css"; 

const ListTe = ({ teas = [] }) => { 
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Alla te sorter</h2>
            <div className={styles.teaGrid}>
                {teas.map(category => (
                    category.products.map((te, index) => (
                        <div className={styles.teaItem} key={index}>
                            <h4>{te.name}</h4>
                            <img
                                src={te.image}
                                alt={te.name}
                                className={styles.teaImage}
                            />
                        </div>
                    ))
                ))}
            </div>
        </div>
    );
};

export default ListTe;

