import React from "react";
import styles from '../../Styles/stylebutton.module.css';
import './Button.css';


const SearchButton = () => {

    return (

        <button 
        id="searchbutton"
        className={styles.stylebutton}
        type="button">
            Sök
        </button>

    )
};

export default SearchButton;