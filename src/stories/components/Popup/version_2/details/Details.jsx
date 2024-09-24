import React from "react";
import styles from './Details.module.css'
import Detail from "./Detail";

const Details = ({ productsData }) => {

    if (!productsData) {
        console.error("productsData is missing")
    }

    const { effect, caffeine, type } = productsData;

    return(
        <div className={styles.contentContainer}>
            <Detail label="Typ:" detail={type}/>
            <Detail label="Koffein:" detail={caffeine}/>
            <Detail label="Effekt:" detail={effect}/>
        </div>
    )
}

export default Details;