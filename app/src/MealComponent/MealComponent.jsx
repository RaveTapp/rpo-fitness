import React, { useState } from 'react';
import styles from './MealComponent.module.css';

const MealComponent = ({ title }) => {
    const [Meal, setMeal] = useState('');
    const [HistoryOfMeals, setHistoryOfMeals] = useState([]);

    const handleInputChange = (e) => {
        setMeal(e.target.value);
    };

    const handleSubmit = () => {
        if (Meal.trim() !== '') {
            setHistoryOfMeals([...HistoryOfMeals, Meal]);
            setMeal('');
        }
    };

    return (
        <div className={styles.container}>
            <h2>{title}</h2>
            <input
                type="text"
                value={Meal}
                onChange={handleInputChange}
                className={styles.input}
                placeholder={`Vnesite jedi za ${title.toLowerCase()}...`}
            />
            <button onClick={handleSubmit} className={styles.button}>
                Dodaj Meal
            </button>
            <div className={styles.history}>
                <h3>History of Meals:</h3>
                <ul>
                    {HistoryOfMeals.map((Meal, index) => (
                        <li key={index}>{Meal}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MealComponent;
