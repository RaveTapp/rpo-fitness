import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        if (onSearch) {
            onSearch(query);
        }
    };

    return (
        <div className={styles.searchBar}>
            <input
                type="text"
                // placeholder="Search..."
                value={query}
                onChange={handleInputChange}
                className={styles.searchInput}
            />
            <button onClick={handleSearch} className={styles.searchButton}>
                SEARCH
            </button>
        </div>
    );
};

export default SearchBar;
