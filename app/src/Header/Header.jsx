import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header className={styles.HeaderText}>
      <h1>Welcome!</h1>
      <div
        className={styles.GetStartedButton}
        onClick={() => {
          navigate("/signup");
        }}
      >
        GET STARTED
      </div>
    </header>
  );
}

export default Header;
