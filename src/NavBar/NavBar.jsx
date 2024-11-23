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
                <div>About </div>
                <div>Pricing </div>
                <div>Contact us </div>
              </div>
              <div className={styles.join}>JOIN NOW</div>
            </div>
          </nav>
        </div>
        <Header />
      </div>
    </>
  );
}

export default NavBar;
