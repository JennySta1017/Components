import React from "react";
import styles from './Detail.module.css'

const Detail = ({ label, detail, className }) => {

    if((!label && !detail) || !label || !detail){
        console.error("data is missing");
    }

    return(
        <div className={styles.contentContainer}>
            <h2 className={`${styles.title} ${className}`}>{label}</h2>
            <p className={`${styles.text} ${className}`}>{detail}</p>
        </div>
    )
}

export default Detail;