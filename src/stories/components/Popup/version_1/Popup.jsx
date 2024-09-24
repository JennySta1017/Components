import React from "react";
import styles from './Popup.module.css'
import PopupText from "./PopupText/PopupText";
import ExitButton from "./ExitButton/ExitButton";
import TitleImg from "./TitleImg/TitleImg";

const Popup = ({ productsData }) => {

    const { name, image, effect, caffeine, type } = productsData;

    return(
        <div className={styles.container}>
            <ExitButton />
            <TitleImg title={name} img={image} />
            <PopupText 
                type={type}
                caffeine={caffeine}
                effect={effect}
            />
        </div>
    )
}

export default Popup;