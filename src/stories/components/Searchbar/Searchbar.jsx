import SearchButton from "./Button";
import InputField from "./Inputfield";
import SearchResult from "./Searchresult";
import React, {useState} from "react";


const SearchBar = () => {

    

    return (
        <div>
          <InputField /> 
          <SearchButton /> 
          <SearchResult />
        </div>

    )
};

export default SearchBar;