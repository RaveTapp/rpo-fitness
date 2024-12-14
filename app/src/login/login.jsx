import styles from "./Login.module.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
        // credentials: "include",
      });

      //const responseData = await response.json();

      if (!response.ok) {
        const responseData = await response.json(); // This will parse the error message sent from the server
        console.log(responseData.message);
      } else {
        const responseData = await response.json(); // This will parse the success message
        console.log(responseData.message);
        navigate("/"); // Redirect on success
      }
    } catch (error) {
      console.log("Error: ", error.message);
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
          Login
        </div>
        <div className={styles.textForRouting}>
          Dont have an account?
          <div
            className={styles.SignupButton}
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign up
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
