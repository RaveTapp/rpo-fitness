import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [results, setResults] = useState([]);
    const [searchHistory, setSearchHistory] = useState([]);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = async () => {
        if (!query.trim()) return;

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://api.api-ninjas.com/v1/nutrition?query=${query}`, {
                method: "GET",
                headers: {
                    "X-Api-Key": "lCdGiYOeqFaRQ2i4fxyS9g==gtkDNPvfLPFQ6Grd",
                },
            });

            if (!response.ok) {
                throw new Error("Napaka pri klicu API-ja");
            }

            const data = await response.json();
            setResults(data);

            // Shrani podatke o hrani v zgodovino iskanj
            const newHistoryItem = data.map((item) => ({
                name: item.name,
                calories: item.calories,
                protein: item.protein_g,
                fat: item.fat_total_g,
            }));
            setSearchHistory((prevHistory) => [...newHistoryItem, ...prevHistory]);

            // Pošlji rezultate nazaj, če je podana funkcija onSearch
            if (onSearch) {
                onSearch(data);
            }

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }

        // Po iskanju počisti vnosno polje
        setQuery("");
    };

    return (
        <div className={styles.searchBar}>
            {/* Iskalno polje */}
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                className={styles.searchInput}
                placeholder="Search for nutrition info..."
            />
            <button onClick={handleSearch} className={styles.searchButton}>
                SEARCH
            </button>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {results.length > 0 && (
                <div className={styles.recentSearch}>
                    <h3>Results:</h3>
                    <ul>
                        {results.map((item, index) => (
                            <li key={index}>
                                <strong>{item.name}</strong>: {item.calories} kcal, {item.protein_g}g protein, {item.fat_total_g}g fat
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {searchHistory.length > 0 && (
                <div className={styles.searchHistory}>
                    <h3>Search History:</h3>
                    <ul>
                        {searchHistory.map((item, index) => (
                            <li key={index}>
                                <strong>{item.name}</strong>: {item.calories} kcal, {item.protein}g protein, {item.fat}g fat
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchBar;
