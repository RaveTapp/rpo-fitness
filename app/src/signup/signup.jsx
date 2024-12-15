import styles from "./SignUp.module.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const checkPasswords = (password, checkPassword) => {
    if (password == checkPassword) {
      return true;
    }

    return false;
  };

  const handleSubmit = async () => {
    if (!checkPasswords(form.password, form.confirmPassword)) {
      console.log("Password in confirmPassword nista enaka!");
      return;
    }

    console.log("NAME:", form.name);
    console.log("LAST NAME:", form.lastName);
    console.log("EMAIL:", form.email);
    console.log("PASSWORD:", form.password);
    console.log("CONFIRM PASSWORD:", form.confirmPassword);

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.log(data.error);
      } else {
        console.log(data.message);
        navigate("/");
      }
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };

  return (
    <>
      <div className={styles.signupBody}>
        <div className={styles.SignUpBox}>
          <h1>Create new account</h1>
          <div className={styles.Member}>
            Already A Member?
            <div
              className={styles.LoginButton}
              onClick={() => {
                navigate("/login");
              }}
            >
              Log in
            </div>
          </div>
          <div className={styles.Name}>
            <div className={styles.firstName}>
              <label>First Name</label>
              <input
                type="text"
                placeholder="First Name"
                name="name"
                value={form.name}
                onChange={handleInputChange}
              ></input>
            </div>
            <div className={styles.lastName}>
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={form.lastName}
                onChange={handleInputChange}
              ></input>
            </div>
          </div>
          <div className={styles.Email}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
            ></input>
          </div>
          <div className={styles.Password}>
            <div className={styles.PasswordInput}>
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={form.password}
                onChange={handleInputChange}
              ></input>
            </div>
            <div className={styles.ConfirmPassword}>
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleInputChange}
              ></input>
            </div>
          </div>
          <div className={styles.CreateButton} onClick={handleSubmit}>
            Create account
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
