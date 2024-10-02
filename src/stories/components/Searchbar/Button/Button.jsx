import React from "react";
import styles from '../../Styles/stylebutton.module.css';
import './Button.css';


const SearchButton = ({
    handleSearchClick
}) => {


    return (

        <button 
        id="searchbutton"
        className={styles.stylebutton}
        type="button"
        onClick={handleSearchClick}>
            Sök
        </button>

    )
};

export default SearchButton;
