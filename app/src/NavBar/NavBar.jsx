import styles from "./NavBar.module.css";
import Logo from "./Logo.jsx";
import Header from "../Header/Header.jsx";

function NavBar() {
  return (
    <>
      <div className={styles.navAndHeader}>
        <div className={styles.navAndLogo}>
          <a href="#top">
            <Logo />
          </a>
          <nav>
            <div className={styles.navbar}>
              <div className={styles.middleSection}>
                <a href="#appOffers">About</a>
                <a href="#membershipPlan">Pricing</a>
                <a>Contact us</a>
              </div>
              <a
                className={styles.join}
                onClick={() => {
                  navigate("/signup");
                }}
              >
                JOIN NOW
              </a>
            </div>
          </nav>
        </div>
        <Header />
      </div>
    </>
  );
}

export default NavBar;
