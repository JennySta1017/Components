import React from 'react';
import styles from './Header.module.css';
import logo from './logo.png';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerContainer}>
        <header className={styles.header}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <nav className={styles.nav}>
            <a href="#" className={styles.Home}>Hem</a>
            <a href="#" className={styles.Tea}>Alla te</a>
             <a href="#" className={styles.contactButton}>Kontakt</a>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
