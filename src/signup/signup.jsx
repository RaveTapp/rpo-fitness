import styles from "./SignUp.module.css";
import React, { useState } from "react";

function SignUp() {
  /*const [form, setForm] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    
    */
  const handleSubmit = () => {
    console.log("test");
  };

  /* shrani podatke iz labelov*/
  /*poglej ce se passworda ujemata*/
  /*poslji podatke na backend -> fetch, JSON.stringify in checkaj ce se je vreo poslalo*/
  return (
    <>
      <div className={styles.SignUpBox}>
        <h1>Create new account</h1>
        <div className={styles.Member}>Already A Member? Log in</div>
        <div className={styles.Name}>
          <div className={styles.firstName}>
            <label>First Name</label>
            <input type="text" placeholder="First Name"></input>
          </div>
          <div className={styles.lastName}>
            <label>Last Name</label>
            <input type="text" placeholder="Last Name"></input>
          </div>
        </div>
        <div className={styles.Email}>
          <label>Email</label>
          <input type="email" placeholder="Email"></input>
        </div>
        <div className={styles.Password}>
          <div className={styles.PasswordInput}>
            <label>Password</label>
            <input type="password" placeholder="Password"></input>
          </div>
          <div className={styles.ConfirmPassword}>
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm Password"></input>
          </div>
        </div>
        <div className={styles.CreateButton} onClick={handleSubmit}>
          Create account
        </div>
      </div>
    </>
  );
}

export default SignUp;
