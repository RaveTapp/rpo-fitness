import React from 'react';
import styles from './HeaderNutrition.module.css';

function Header() {
    return (
        <header className={styles.headerContainer}>
            <nav>
                <ul className={styles.ul}>
                    <li className={styles.li}>Recipes</li> 
                    <li className={styles.li}>Daily meals</li>
                    <li className={styles.li}>Hydration</li>
                    <li className={styles.li}>Statistics</li>
                    <li className={styles.premium}>premium</li>
                    <li className={styles.profile}>PROFILE</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
