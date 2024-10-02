import React, { useState, useEffect } from "react";
import styles from "./FetchTe-sort.module.css"; 

const FetchTe = ({ sortimentData }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        
        if (sortimentData && sortimentData.length > 0) {
            const allProducts = sortimentData.flatMap(category => category.products);
            setProducts(allProducts);
        }
    }, [sortimentData]); 

    if (!sortimentData || sortimentData.length === 0) {
        return <div>Laddar sortiment...</div>; 
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Alla te sorter</h2>
            <div className={styles.teaGrid}>
                {products.map((te, index) => (
                    <div className={styles.teaItem} key={index}>
                        <img
                            src={te.image}
                            alt={te.name}
                            className={styles.teaImage}
                        />
                        <h4>{te.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FetchTe;
