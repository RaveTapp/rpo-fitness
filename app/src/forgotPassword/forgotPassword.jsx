import { useNavigate } from "react-router-dom";
import styles from "./forgotPassword.module.css";

function forgotPassword() {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.forgotPasswordDiv}>
        <div className={styles.forgotPasswordBox}>
          <h1 className={styles.headerText}>Enter your code here:</h1>
          <div className={styles.input}>
            <input type="text" placeholder="Enter your code here"></input>
          </div>
          <div className={styles.buttonSubmit}>Submit</div>
        </div>
      </div>
    </>
  );
}

export default forgotPassword;
