import React from "react";
import styles from "../../Styles/stylebutton.module.css";
import './Contactlink.css';



const ContactLink = () => {



    return (
           <button 
           id="contactbutton"
           className= {styles.stylebutton}>
             Kontakta oss
           </button>      
    
    );
};

export default ContactLink;