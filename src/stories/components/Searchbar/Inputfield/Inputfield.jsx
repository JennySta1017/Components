import React from "react";

const InputField = ({
    searchHandeler,
    searchInput
}) => {

    

    return (
        <div>
            <input 
            type="text" 
            placeholder="Sök"
            value={searchInput}
            onChange={searchHandeler}
             />
        </div>

    )
};

export default InputField;