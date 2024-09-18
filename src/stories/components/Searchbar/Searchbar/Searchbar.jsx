import SearchButton from "../Button/Button";
import InputField from "../Inputfield/Inputfield";
import {useState} from "react";


const SearchBar = () => {   

  const [searchInput, setSearchInput] = useState('');

    return (
        <div>
          <InputField /> 
          <SearchButton onInput={setSearchInput}/> 
        </div>

    )
};

export default SearchBar;