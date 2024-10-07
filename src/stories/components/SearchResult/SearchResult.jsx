import React from 'react';
import styles from './SearchResult.module.css';


const SearchResult = ({ results }) => {
  if (!results || results.length === 0) {
    return <p>No result found</p>; 
  }
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
