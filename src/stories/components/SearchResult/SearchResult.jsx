import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResult.module.css';

const defaultTeaData = [
  {
    id: 1,
    name: "Grönt te",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfamFahLTBWDTLUKhzs6wYtrsZd5HHjmTtA&s",
  },
  {
    id: 2,
    name: "Svart te",
    image: "https://www.healthifyme.com/blog/wp-content/uploads/2020/02/Black-Tea-2-1.jpg",
  },
  {
    id: 3,
    name: "Rött te",
    image: "https://kahlstkh.se/wp-content/uploads/2018/03/te-rooibos.jpg",
  },
  {
    id: 4,
    name: "Vitt te",
    image: "https://sakiproducts.com/cdn/shop/articles/20221107133813-white-tea-recipe-blog_800x800.jpg?v=1667828741",
  },
  {
    id: 5,
    name: "Jasmin silver needle",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmRhyN1GjGMoEycRZfpb9b4ahFBlH_H9Vrg",
  },
];

const SearchResult = ({ results = defaultTeaData }) => {
  if (results.length === 0) {
    return <p>No results found</p>;
  }

  return (
    <div>
      <div className={styles.resultContainer}>
        {results.map((result) => (
          <div key={result.id} className={styles.resultItem}>
            <img src={result.image} alt={result.name} className={styles.image} />
            <p>{result.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

SearchResult.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SearchResult;
