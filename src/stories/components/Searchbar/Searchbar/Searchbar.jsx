import SearchButton from "./Button";
import InputField from "./Inputfield";
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