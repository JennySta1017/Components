import React from 'react';
import styles from './BackButton.module.css'; 

const BackButton = ({ onClick }) => {
    return (
        <button className={styles.backButton} onClick={onClick}>
            Tillbaka
        </button>
    );
}

export default BackButton;
