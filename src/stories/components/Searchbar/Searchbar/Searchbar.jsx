import SearchButton from "../Button/Button";
import InputField from "../Inputfield/Inputfield";
import {useState} from "react";


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