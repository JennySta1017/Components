import React, {useState} from "react";
import SearchButton from "../Button/Button";
import InputField from "../Inputfield/Inputfield";



const SearchBar = () => {   

  const [searchInput, setSearchInput] = useState('');
  
  const searchHandeler = (e) => {
    setSearchInput(e.target.value);

}

    return (
        <div>
          <InputField searchHandeler={searchHandeler}/> 
          <SearchButton /> 
        </div>

    )
};

export default SearchBar;