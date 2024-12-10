import styles from "./NavBar.module.css";
import Logo from "./Logo.jsx";
import Header from "../Header/Header.jsx";

function NavBar() {
  return (
    <>
      <div className={styles.navAndHeader}>
        <div className={styles.navAndLogo}>
          <Logo />
          <nav>
            <div className={styles.navbar}>
              <div className={styles.middleSection}>
                <a>About </a>
                <a>Pricing </a>
                <a>Contact us </a>
              </div>
              <a className={styles.join}>JOIN NOW</a>
            </div>
          </nav>
        </div>
        <Header />
      </div>
    </>
  );
}

export default NavBar;
