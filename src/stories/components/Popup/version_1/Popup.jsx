import React from "react";
import styles from './Popup.module.css'
import PopupText from "./PopupText/PopupText";
import ExitButton from "./ExitButton/ExitButton";
import TitleImg from "./TitleImg/TitleImg";

const Popup = ({ productData, exitBtnHandler }) => {

    if (!productData) {
        console.error('No existing productsData')
    }
    
    const { name, image, effect, caffeine, type } = productData || {};

    return(
        <div className={styles.container}>
            <ExitButton onClick={exitBtnHandler} />
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