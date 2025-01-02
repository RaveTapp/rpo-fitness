import React from 'react';
import HeaderNutrition from "./HeaderNutrition/HeaderNutrition.jsx";
import styles from "./Nutrition.module.css";


const Nutrition = () => {
    return (
        <div className={styles["nutrition-container"]}>
            <HeaderNutrition />
        </div>
    );
};

export default Nutrition;