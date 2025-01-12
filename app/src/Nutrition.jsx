import React from 'react';
import HeaderNutrition from "./HeaderNutrition/HeaderNutrition.jsx";
import SectionName from "./SectionNameNK/SectionName.jsx";
import HeadingTwoCenter from "./HeadingTwoCenter/HeadingTwoCenter.jsx";
import HeadingTwoLeft from './HeadingTwoLeft/HeadingTwoLeft.jsx';
import SearchBar from './SearchBar/SearchBar.jsx';
import MealComponent from './MealComponent/MealComponent.jsx';
import HydrationComponent from './HydrationComponent/HydrationComponent.jsx';
import styles from "./Nutrition.module.css";

const Nutrition = () => {
    return (
        <div className={styles["nutrition-container"]}>
            <HeaderNutrition />
            <SectionName name="NUTRITION" />
            <HeadingTwoCenter name="RECIPES" />
            <div className={styles["search-filter-container"]}>
                <SearchBar />
            </div>
            <HeadingTwoLeft name="DAILY MEALS" />
            <div className={styles["daily-meals-container"]}>

                <div className={styles["meal-row"]}>
                    <MealComponent title={"Breakfast"} />
                    <MealComponent title={"Snack 1"} />
                    <MealComponent title={"Lunch"} />
                </div>

                <div className={styles["meal-row"]}>
                    <MealComponent title={"Snack 2"} />
                    <MealComponent title={"Dinner"} />
                </div>
            </div>
            <HeadingTwoCenter name="HYDRATION" />
            <HydrationComponent />

        </div>
    );
};

export default Nutrition;
