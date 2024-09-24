import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './BackButton.module.css';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2>Gå tillbaka</h2>
      <p>Den här knappen tar dig tillbaka till den tidigare sidan du var på.</p>
      <button className={styles.button} onClick={handleBackClick}>
        Tillbaka
      </button>
    </div>
  );
};

export default BackButton;
