import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXing, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSection}>
        <h2>ABOUT</h2>
        <p>På Here's the Tea brinner vi för att dela den <br />rika
         historien, smakerna och fördelarna med<br /> te från
          hela världen. Smaka, njut 
          och upptäck<br /> tillsammans med oss!</p>
      </div>
      
      <div className={styles.footerSectionContact}>
        <h2>CONTACT</h2>
        <p><i className="fas fa-map-marker-alt"></i> Drottninggatan 50, 111 21 Stockholm</p>
        <p><i className="fas fa-phone-alt"></i> 08-123 456 78</p>
        <p><i className="fas fa-envelope"></i> info@heresthetea.se</p>
      </div>
      
      <div className={styles.footerSectionSocial}>
  <h2>SOCIAL</h2>
  <div className={styles.socialIcons}>
    <FontAwesomeIcon icon={faFacebook} />
    <FontAwesomeIcon icon={faInstagram} />
    <FontAwesomeIcon icon={faXing} />
    <FontAwesomeIcon icon={faWhatsapp} />
  </div>
</div>

      <div className={styles.footerBottom}>
        <p>©Here's The Tea 2024</p> {/* Flyttad copyright till vänster */}
        <p>
          <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a> | <a href="#">Affiliate Disclosure</a>
        </p> {/* Flyttad policy till höger */}
      </div>
    </footer>
  );
};

export default Footer;
