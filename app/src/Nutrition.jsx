import React from 'react';
import HeaderNutrition from "./HeaderNutrition/HeaderNutrition.jsx";
import SectionName from "./SectionNameNK/SectionName.jsx";
import HeadingTwoCenter from "./HeadingTwoCenter/HeadingTwoCenter.jsx";
import SearchBar from './SearchBar/SearchBar.jsx';
import FilterButton from './FilterButton/FilterButton.jsx';
import styles from "./Nutrition.module.css";

const Nutrition = () => {
    return (
        <div className={styles["nutrition-container"]}>
            <HeaderNutrition />
            <SectionName name="NUTRITION" />
            <HeadingTwoCenter name1="RECIPES" />
            <div className={styles["search-filter-container"]}>
                <SearchBar />
                <FilterButton text="FILTER" />
            </div>
        </div>
    );
};

export default Nutrition;
