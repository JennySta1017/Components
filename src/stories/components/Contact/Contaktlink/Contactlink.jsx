import React from "react";
//import { useNavigate } from "react-router-dom";
import styles from "../../Styles/stylebutton.module.css";
import './Contactlink.css';



const ContactLink = () => {

/*const navigate = useNavigate();
 const handleContactLink = () => {
  navigate("/contact")
} */

    return (
           <button 
           id="contactbutton"
           className= {styles.stylebutton}
          //  onClick={handleContactLink}
           >
             Kontakta oss
           </button>      
    
    );
};

export default ContactLink;