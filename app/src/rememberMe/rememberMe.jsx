import { useNavigate } from "react-router-dom";
import styles from "./rememberMe.module.css";

function RememberMe() {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.rememberMeDiv}>
        <div className={styles.rememberMeBox}>
          <h1 className={styles.headerText}>Enter your code here:</h1>
          <div className={styles.input}>
            <input type="text" placeholder="Enter your code here"></input>
          </div>
        </div>
      </div>
    </>
  );
}

export default RememberMe;
