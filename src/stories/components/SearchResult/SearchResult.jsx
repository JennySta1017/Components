import React from "react";
import styles from "./SearchResult.module.css"; 

// SearchResult-komponent som tar emot en lista med resultat via props
const SearchResult = ({ results = [] }) => {
  return (
    <div className={styles.searchResultContainer}>
      {/* Om inga resultat finns */}
      {results.length === 0 ? (
        <p className={styles.noResults}>Inga sökresultat hittades.</p>
      ) : (
        <ul className={styles.resultList}>
          {/* Loopar igenom resultaten och visar varje objekt */}
          {results.map((result, index) => (
            <li key={index} className={styles.resultItem}>
              <h3>{result.title}</h3>
              <p>{result.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResult;
