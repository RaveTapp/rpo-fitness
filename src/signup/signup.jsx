import styles from "./SignUp.module.css";
import React, { useState } from "react";

function SignUp() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  /* shrani podatke iz input polja name */
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
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          lastName: form.lastName,
          email: form.email,
          password: form.password,
        }),
      });

      if (!response.ok) {
        console.log("Napaka pri pošiljanju podatkov na strežnik.");
      } else {
        console.log("Podatki uspešno poslani.");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

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
    </>
  );
}

export default SignUp;
