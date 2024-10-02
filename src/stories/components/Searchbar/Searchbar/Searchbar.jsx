import React, {useState} from "react";
import SearchButton from "../Button/Button";
import InputField from "../Inputfield/Inputfield";
import SearchResult from "../../SearchResult/SearchResult";



const SearchBar = () => {   

  const teaData = [
    { id: 1, name: "Grönt te", image: "https://..." },
    { id: 2, name: "Svart te", image: "https://..." },
    { id: 3, name: "Rött te", image: "https://..." },
  ];

  const [searchInput, setSearchInput] = useState('');
  
  const searchHandeler = (e) => {
    setSearchInput(e.target.value);

}

<<<<<<< HEAD
const getTe = () => {

  if (!searchInput.current.value) {   
    alert('Sök efter te')   // om sökfältet är tomt - alert
    return
  }

  

}
=======
// Filtrera te baserat på sökordet
const filteredTeas = teaData.filter((tea) => {
  const searchWords = searchInput.toLowerCase().split(" ");
  const teaWords = tea.name.toLowerCase().split(" ");
  
  return searchWords.some(searchWord => 
    teaWords.some(teaWord => teaWord.includes(searchWord))
    
  );
  
});

>>>>>>> c6c84a98d46d5faf4d7427cd12e37e3d28de8fff

    return (
        <div>
          <div>
      <ul>
        {filteredTeas.map((tea) => (
          <li key={tea.id}>
            <img src={tea.image} alt={tea.name} width="50" />
            <p>{tea.name}</p>
          </li>
        ))}
      </ul>
    </div>
          <InputField searchHandeler={searchHandeler}/> 
          <SearchButton /> 
          <SearchResult />
        </div>

    )
};

export default SearchBar;