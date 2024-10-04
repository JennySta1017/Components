import React from "react";
import styles from "./Contactinfo.module.css";
import letterImage from "./letter.png";
import telephoneImage from "./telephone.png";

const ContactInfo = () => {

    return (
    <div className={styles.contactbox}>
        <div className={styles.contact}>
        <h2>KONTAKT</h2>
        <p>Har du frågor? Tveka inte att kontakta oss.</p>
        </div>
        <hr className={styles.line} />
        <div className={styles.openhoures}>
            <h2>Öppettider</h2>
            <p>Vardagar: 09:00 - 18:00</p>
            <p>Helger: 10:00 - 16:00</p>
        </div>
        <hr className={styles.line} />
        <div className={styles.contactinfo}>
            <div className={styles.email}>
                <img 
                src={letterImage}
                alt="e-post" 
                className={styles.contactimg}
                />
                <h3>E-post</h3>
                <p>heresthetea@info.se</p>
            </div>
            <div className={styles.phonenr}>
                <img 
                src={telephoneImage} 
                alt="telefon"
                className={styles.contactimg} 
                />
                <h3>Telefon</h3>
                <p>08-123 456 78</p>
            </div>
        </div>
        
    </div>
    )
};

export default ContactInfo;