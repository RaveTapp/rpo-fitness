import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component for routing
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.headerContainer}>
            <nav>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <Link to="/exercise">Exercise</Link>
                    </li>
                    <li className={styles.li}>
                        <Link to="/nutrition">Nutrition</Link> 
                    </li>
                    <li className={styles.li}>Contact</li>
                    <li className={styles.premium}>premium</li>
                    <li className={styles.profile}>PROFILE</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
