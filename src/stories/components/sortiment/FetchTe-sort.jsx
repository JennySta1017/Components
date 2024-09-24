import React, { useEffect, useState } from "react";
import ListTe from "./ListTe-sort"; 

const FetchTe = () => {
    const [teaData, setTeaData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTeas = async () => {
            try {
                const response = await fetch('/api/product.json'); 
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log("Fetched tea data:", data);
                setTeaData(data);
            } catch (error) {
                console.error("Error fetching tea data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTeas();
    }, []);

    return (
        <>
            {loading ? (
                <p>Laddar te sorter...</p>
            ) : (
                <ListTe teas={teaData} /> 
            )}
        </>
    );
};

export default FetchTe;
