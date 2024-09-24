import React from "react";
import styles from './ExitButton.module.css';

const ExitButton = () => {
    return(
        <svg className={styles.svg} width="28" height="31" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1.49188" y1="1.66797" x2="26.4919" y2="29.668" stroke="white" strokeWidth="4" />
            <line y1="-2" x2="37.5366" y2="-2" transform="matrix(-0.666016 0.745938 0.745938 0.666016 28 3)" stroke="white" strokeWidth="4" />
        </svg>
    )
}

export default ExitButton;