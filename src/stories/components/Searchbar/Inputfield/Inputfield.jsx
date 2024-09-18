import React from "react";

const InputField = () => {
    const searchHandeler = (e) => {
        onInput(e.target.value);

    }

    return (
        <div>
            <input 
            type="text" 
            placeholder="Sök"
            onChange={searchHandeler}
             />
        </div>

    )
};

export default InputField;