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
            <Detail 
                label="Typ:" 
                detail={type}
                // Can add styling individual styling with className
            />
            <Detail 
                label="Koffein:" 
                detail={caffeine}
                // Can add styling individual styling with className
            />
            <Detail 
                label="Effekt:" 
                detail={effect}
                // Can add styling individual styling with className
            />
        </div>
    )
}

export default Details;