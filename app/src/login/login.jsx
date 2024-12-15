import styles from "./Login.module.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleForgotPassword = () => {
    console.log("test");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setData({ ...data, rememberMe: e.target.checked });
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
          rememberMe: data.rememberMe,
        }),
        credentials: "include",
      });

      //const responseData = await response.json();

      if (!response.ok) {
        const responseData = await response.json();
        console.log(responseData.message);
      } else {
        const responseData = await response.json();
        console.log(responseData.message);
        if (responseData.message === "Uspešna prijava") {
          navigate("/");
        }
      }
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };

  return (
    <>
      <div className={styles.loginBody}>
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
            <div className={styles.RememberMe}>
              <input
                type="checkbox"
                className={styles.checkBox}
                checked={data.rememberMe}
                onChange={handleCheckboxChange}
              ></input>
              <div>Remember me</div>
            </div>
            <div
              className={styles.ForgotPassword}
              onClick={handleForgotPassword}
            >
              Forgot password
            </div>
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
      </div>
    </>
  );
}

export default Login;
