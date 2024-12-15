import { useNavigate } from "react-router-dom";
import styles from "./forgotPassword.module.css";

function forgotPassword() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {};

  return (
    <>
      <div className={styles.forgotPasswordDiv}>
        <div className={styles.forgotPasswordBox}>
          <h1 className={styles.headerText}>Enter your code here:</h1>
          <div className={styles.input}>
            <input type="text" placeholder="Enter your code here"></input>
          </div>
          <div className={styles.buttonSubmit} onClick={handleSubmit}>
            Submit
          </div>
        </div>
      </div>
    </>
  );
}

export default forgotPassword;
