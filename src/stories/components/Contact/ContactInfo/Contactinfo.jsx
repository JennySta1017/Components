import React from "react";
import styles from "./Contactinfo.module.css";

const ContactInfo = () => {

    return (
    <div className={styles.contacttext}>
        <h2>Kontakta oss</h2>
        <p>Ring, skicka e-post eller besök oss.</p>
        <div className={styles.contactbox}>
        <p>E-post: heresthetea@info.se</p>
        <p>Telefon: 08-123 123 00</p>
        <p>Adress: Tevägen 25, 105 05 Stockholm</p>
        </div>
    </div>
    )
};

export default ContactInfo;