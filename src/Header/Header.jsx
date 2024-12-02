import React from 'react';
import styles from './Header.module.css';


function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.ul}>
                    <li className={styles.li}>Exercise</li> 
                    <li className={styles.li}>Nutrition</li>
                    <li className={styles.li}>Contact</li>
                    <li className={styles.premium}>premium</li>
                    <li className={styles.profile}>PROFILE</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;