import React from "react";
import styles from "./Inputfield.module.css";

const InputField = ({
    searchHandeler,
    searchInput
}) => {

    

    return (
        <div>
            <input
            className={styles.searchinput} 
            type="text" 
            placeholder="Sök"
            value={searchInput}
            onChange={searchHandeler}
             />
        </div>

    )
};

export default InputField;