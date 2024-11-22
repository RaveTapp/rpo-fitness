import Header from "./Header.jsx";
import NavBar from "./NavBar/NavBar.jsx";
import Logo from "./NavBar/Logo.jsx";
import styles from "./LandingPage.module.css";

function LandingPage() {
  return (
    <>
      <div className={styles.first_div}>
        <NavBar />
        <Logo />
        <Header />
      </div>
    </>
  );
}

export default LandingPage;
