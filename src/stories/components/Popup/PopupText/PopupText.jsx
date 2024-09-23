import React from "react";
import styles from './PopupText.module.css'

const PopupText = ({ title, text }) => {
    return(
        <div className={styles.contentWrapper}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default PopupText;