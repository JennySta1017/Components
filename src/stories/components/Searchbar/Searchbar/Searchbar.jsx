import React, {useState, useEffect} from "react";
import SearchButton from "../Button/Button";
import InputField from "../Inputfield/Inputfield";
import SearchResult from "../../SearchResult/SearchResult";

const SearchBar = ({teaData}) => {   
  const [searchInput, setSearchInput] = useState('');
  const [filteredTeas, setFilteredTeas] = useState([]);
  
  const searchHandeler = (e) => {
    setSearchInput(e.target.value);
  }

  // Logga värdet när det faktiskt uppdateras
useEffect(() => {
  console.log({ searchInput });
}, [searchInput]);

  const handleSearchClick = () => {
    if (!searchInput) {   
      alert('Sök på en tesort');   
      return;
    }

    const filtered = teaData.filter((tea) => {
      return tea.name.toLowerCase().includes(searchInput.toLowerCase());
    });

    if (filtered.length === 0) {
      alert('Inga tesorter matchade din sökning');
      return;
    }

    setFilteredTeas(filtered);
    setSearchInput('');
  };


  return (
    <div>
      <InputField searchHandeler={searchHandeler} searchInput={searchInput} />
      <SearchButton handleSearchClick={handleSearchClick} />

      {/* Visa "Sökresultat:" endast om en sökning har gjorts och det finns resultat */}
      {filteredTeas.length > 0 && (
        <div>
          <p className={styles.title}>Sökresultat:</p>
        </div>
      )}

      {/* Visa SearchResult-komponenten */}
      <SearchResult results={filteredTeas} />
    </div>
  );
};

export default SearchBar;
