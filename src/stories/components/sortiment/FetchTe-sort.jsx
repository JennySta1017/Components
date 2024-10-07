import React, { useState, useEffect } from "react";
import styles from "./FetchTe-sort.module.css";
import teFallback from "./te-fallback.jpg";

const FetchTe = ({ sortimentData }) => {
    const [products, setProducts] = useState([]);
    const [selectedId, setSelectedId] = useState(null); 

    useEffect(() => {
        if (sortimentData && sortimentData.length > 0) {
            const allProducts = sortimentData.flatMap(category => category.products);
            setProducts(allProducts);
        }
    }, [sortimentData]);

    
    useEffect(() => {
        if (selectedId) {
            console.log(`Selected Product ID: ${selectedId}`);
        }
    }, [selectedId]); 

    const handleClick = (id) => {
        setSelectedId(id); 
    };

    if (!sortimentData || sortimentData.length === 0) {
        return <div>Laddar sortiment...</div>;
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Alla te sorter</h2>
            <div className={styles.teaGrid}>
                {products.map((te, index) => (
                    <div className={styles.teaItem} key={index}>
                        {te.image ? (
                        <img
                            src={te.image || {teFallback}}
                            alt={te.name}
                            className={styles.teaImage}
                            onClick={() => handleClick(te.id)}
                        />
                        ) : (
                            <p>Bild saknas</p>
                        )}
                        <h4 onClick={() => handleClick(te.id)}>{te.name}</h4> 
                    </div>
                ))}
            </div>
            {selectedId && <p>Valt Produkt ID: {selectedId}</p>} 
        </div>
    );
};

export default FetchTe;
