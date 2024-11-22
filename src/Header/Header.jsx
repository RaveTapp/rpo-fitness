import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.HeaderText}>
      <h1>Lorem ipsum</h1>
      <div className={styles.GetStartedButton}>GET STARTED</div>
    </header>
  );
}

export default Header;
