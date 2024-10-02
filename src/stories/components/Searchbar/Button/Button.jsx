import React from "react";
import styles from '../../Styles/stylebutton.module.css';
import './Button.css';


const SearchButton = ({getTe}) => {

    return (

        <button 
        id="searchbutton"
        className={styles.stylebutton}
        type="button"
        onClick={getTe}>
            Sök
        </button>

    )
};

export default SearchButton;