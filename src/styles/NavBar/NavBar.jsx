import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav>
      <div className={styles.navbar}>
        <div className={styles.middleSection}>
          <div>About </div>
          <div>Pricing </div>
          <div>Contact us </div>
        </div>
        <div className={styles.join}>JOIN NOW</div>
      </div>
    </nav>
  );
}

export default NavBar;
