import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome
import { faFacebook, faInstagram, faXing, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Specific icons

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSection}>
        <h2>ABOUT</h2>
        <p>På Here's the Tea brinner vi för att dela den rika historien, smakerna och fördelarna med te från hela världen. Smaka, njut och upptäck tillsammans med oss!</p>
        <p>© Here's The Tea 2024</p>
      </div>
      
      <div className={styles.footerSection}>
        <h2>CONTACT</h2>
        <p><i className="fas fa-map-marker-alt"></i> Drottninggatan 50, 111 21 Stockholm</p>
        <p><i className="fas fa-phone-alt"></i> 08-123 456 78</p>
        <p><i className="fas fa-envelope"></i> info@heresthetea.se</p>
      </div>
      
      <div className={styles.footerSection}>
        <h2>SOCIAL</h2>
        <div className={styles.socialIcons}>
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faXing} />
          <FontAwesomeIcon icon={faWhatsapp} />
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <p>Privacy Policy | Terms & Conditions | Affiliate Disclosure</p>
      </div>
    </footer>
  );
};

export default Footer;