import React from "react";

const ListTe = () => {
    const Tesortiment = //Tillfällig
        {"Svart te":["Earl Grey", "Chai", "Lichi"],
         "Grönt te":["Jasmine", "Matcha", "Yogi", "Longjin"],
         "Rött te":["Roiboos", "Skogsglänta Roiboos"], 
         "Vitt te":["White Cassis","Jasmine silver needle"]
        };

        return (
        <div>
            <h2>Tesortiment</h2>
            {Object.keys(Tesortiment).map((kategori, index) => (
                <div key={index}>
                <h3>{kategori}</h3>
                <ul>
                    {Tesortiment[kategori].map((te, i) => (
                        <li key={i}>{te}</li>
                    ))}
                    </ul>
                </div>
             ))}
       </div>
    );
}


export default ListTe;
