import React from "react";
import styles from './PopupText.module.css'

const PopupText = () => {
    return(
        <div className={styles.contentWrapper}>
            <h2 className={styles.title}>Title</h2>
            <p className={styles.text}>Placeholder</p>
        </div>
    )
}

export default PopupText;