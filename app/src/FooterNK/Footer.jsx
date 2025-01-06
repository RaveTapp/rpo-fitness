import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <p>Email</p>
          <p>Phone</p>
          <p>Address</p>
        </div>
        <div className={styles.column}>
          <a href="/careers" className={styles.link}>Careers</a>
          <a href="/contact" className={styles.link}>Contact</a>
          <a href="/privacy" className={styles.link}>Privacy Policy</a>
          <a href="/terms" className={styles.link}>Terms & Conditions</a>
        </div>
        <div className={styles.newsletter}>
          <p>SUBSCRIBE TO OUR NEWSLETTER</p>
          <form className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Your email"
              className={styles.input}
              required
            />
            <button type="submit" className={styles.button}>Submit</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
