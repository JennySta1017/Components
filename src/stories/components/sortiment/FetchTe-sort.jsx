import React, { useState } from "react";
import styles from "./FetchTe-sort.module.css";
import { Popup } from "../Popup/version_1";

const FetchTe = ({ sortimentData }) => {
  const [selectedTea, setSelectedTea] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  if (!sortimentData || sortimentData.length === 0) {
    return <div>Laddar sortiment...</div>;
  }

  const handleClick = (tea) => {
    setSelectedTea(tea);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    console.log("Closing popup");
    setShowPopup(false);
    setSelectedTea(null);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Alla te sorter</h2>
      <div className={styles.teaGrid}>
        {sortimentData.map((te, index) => (
          <div className={styles.teaItem} key={index}>
            <img
              src={te.image}
              alt={te.name}
              className={styles.teaImage}
              onClick={() => handleClick(te)}
            />
            <h4 onClick={() => handleClick(te)}>{te.name}</h4>
          </div>
        ))}
      </div>
      {showPopup && (
        <Popup productsData={selectedTea} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default FetchTe;