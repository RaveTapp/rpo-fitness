import styles from "./NavBar.module.css";
import logo from "../assets/logo.png";

function Logo() {
  return <img src={logo} alt="site-logo" className={styles.logo}></img>;
}

export default Logo;
