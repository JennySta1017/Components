import React, {useState} from "react";
import SearchButton from "../Button/Button";
import InputField from "../Inputfield/Inputfield";
import SearchResult from "../../SearchResult/SearchResult";

const SearchBar = () => {   

  const teaData = [
    {
      id: 1,
      name: "Grönt te",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfamFahLTBWDTLUKhzs6wYtrsZd5HHjmTtA&s",
    },
    {
      id: 2,
      name: "Svart te",
      image:
        "https://www.healthifyme.com/blog/wp-content/uploads/2020/02/Black-Tea-2-1.jpg",
    },
    {
      id: 3,
      name: "Rött te",
      image: "https://kahlstkh.se/wp-content/uploads/2018/03/te-rooibos.jpg",
    },
    {
      id: 4,
      name: "Vitt te",
      image:
        "https://sakiproducts.com/cdn/shop/articles/20221107133813-white-tea-recipe-blog_800x800.jpg?v=1667828741",
    },
    {
      id: 5,
      name: "Jasmin silver needle",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmRhyN1GjGMoEycRZfpb9b4ahFBlH_H9Vrg",
    },
  ];

  const [searchInput, setSearchInput] = useState('');
  const [filteredTeas, setFilteredTeas] = useState([]);
  
  const searchHandeler = (e) => {
    setSearchInput(e.target.value);
  }

  const handleSearchClick = () => {
    if (!searchInput) {   
      alert('Sök på en tesort');   
      return;
    }

    const filtered = teaData.filter((tea) => {
      const searchWords = searchInput.toLowerCase().split(" ");
      const teaWords = tea.name.toLowerCase().split(" ");
      return searchWords.some((searchWord) =>
        teaWords.some((teaWord) => teaWord.includes(searchWord))
      );
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
      <InputField searchHandeler={searchHandeler}/> 
      <SearchButton handleSearchClick={handleSearchClick}/> 

      {/* Visa "Sökresultat:" endast om en sökning har gjorts och det finns resultat */}
      {filteredTeas.length > 0 && (
        <div>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: 'normal', marginBottom: '20px' }}>
            Sökresultat:
          </p>
        </div>
      )}

      {/* Visa SearchResult-komponenten */}
      <SearchResult results={filteredTeas.length > 0 ? filteredTeas : teaData} />
    </div>
  )
};

export default SearchBar;
