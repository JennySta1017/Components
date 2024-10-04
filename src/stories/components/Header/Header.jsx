import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from './logo.png';


const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerContainer}>
        <header className={styles.header}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <nav className={styles.nav}>
            <Link to="/" className={styles.Home}>Hem</Link>
            <Link to="/" className={styles.Tea}>Alla te</Link>
            
          </nav>
          <Link to="/ContactInfo" className={styles.contactButton}>Kontakt</Link>
        </header>
      </div>
    </div>
  );
};

export default Header;
