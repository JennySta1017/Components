import React from "react";
import styles from './Detail.module.css'

const Detail = ({ label, detail}) => {
    return(
        <div>
            <h2 className={styles.title}>{label}</h2>
            <p className={styles.text}>{detail}</p>
        </div>
    )
}

export default Detail;