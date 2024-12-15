import React, { useState } from "react";
import styles from "./forgotPassword.module.css";

function ForgotPassword() {
  const [emailSent, setEmailSent] = useState(false);

  const handleSendCode = () => {
    setEmailSent(true);
  };

  return (
    <>
      <div className={styles.forgotPasswordDiv}>
        <div className={styles.forgotPasswordBox}>
          <h1 className={styles.headerText}>Forgot Password</h1>
          {!emailSent ? (
            <div className={styles.buttonSendCode} onClick={handleSendCode}>
              Send Verification Code
            </div>
          ) : (
            <div>
              <div className={styles.input}>
                <input type="text" placeholder="Enter your code here" />
              </div>
              <div type="submit" className={styles.buttonSubmit}>
                Submit
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
