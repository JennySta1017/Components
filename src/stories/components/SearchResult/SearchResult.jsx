import React from 'react';
import styles from './SearchResult.module.css';


const SearchResult = ({ results }) => {
  
  return (
    <div>
      <div className={styles.resultContainer}>
        {results.map((result) => (
          <div key={result.id} className={styles.resultItem}>
            <img
              src={result.image}
              alt={result.name}
              className={styles.image}
            />
            <p>{result.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
