import styles from "./Login.module.css";
import React, { useState } from "react";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const checkEmail = (databaseEmail, email) => {
    if (databaseEmail === email) {
      return true;
    }
    return false;
  };

  const checkPassword = (databasePassword, password) => {
    if (databasePassword === password) {
      return true;
    }
    return false;
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");
      if (!response.ok) {
        throw new Error("Napaka pri fetchanju");
      }

      const users = await response.json();

      const userFound = users.some(function (user) {
        return (
          checkEmail(user.email, data.email) &&
          checkPassword(user.password, data.password)
        );
      });

      if (userFound) {
        console.log("Uporabnik je bil najden!");
      } else {
        console.log("Uporabnik ni bil najden!");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <>
      <div className={styles.loginBox}>
        <h1>Welcome back</h1>
        <div className={styles.Email}>
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            value={data.email}
            onChange={handleInputChange}
          ></input>
        </div>

        <div className={styles.Password}>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={data.password}
            onChange={handleInputChange}
          ></input>
        </div>
        <div className={styles.SharedDiv}>
          <div className={styles.RememberMe}>Remember me</div>
          <div className={styles.ForgotPassword}>Forgot password</div>
        </div>
        <div className={styles.SigninButton} onClick={handleSubmit}>
          Sign in
        </div>
        <div>Dont have an account? Sign up</div>
      </div>
    </>
  );
}

export default Login;
