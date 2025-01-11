import React, { useState } from "react";
import styles from "./forgotPassword.module.css";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

function ForgotPassword() {
  const [userEmail, setUserEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [enteredCode, setEnteredCode] = useState("");
  const [isCodeValid, setIsCodeValid] = useState(null);

  const navigate = useNavigate();

  const generateCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const checkPassword = (e) => {
    e.preventDefault();
    if (enteredCode === verificationCode) {
      setIsCodeValid(true);
      navigate("/homepage");
    } else {
      setIsCodeValid(false);
      alert("Verification code is incorrect. Please try again.");
    }
  };

  const handleSendCode = async (e) => {
    e.preventDefault();

    const code = generateCode();
    setVerificationCode(code);

    try {
      const result = await emailjs.send(
        "service_bxiwqka", // ID storitve (EmailJS)
        "template_nnnypwt", // ID predloge
        {
          to_email: userEmail,
          to_name: "User",
          verification_code: code,
        },
        "PlvE2HRTmAhWBdMul" // javni ključ iz EmailJS
      );
      console.log("Email sent successfully:", result.text);
      setEmailSent(true);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <>
      <div className={styles.forgotPasswordDiv}>
        <div className={styles.forgotPasswordBox}>
          <h1 className={styles.headerText}>Forgot Password</h1>
          {!emailSent ? (
            <form onSubmit={handleSendCode}>
              <div className={styles.inputEmail}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className={styles.buttonSendCode}>
                Send Verification Code
              </button>
            </form>
          ) : (
            <form onSubmit={checkPassword}>
              <div className={styles.input}>
                <input
                  type="text"
                  placeholder="Enter your code here"
                  value={enteredCode}
                  onChange={(e) => setEnteredCode(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className={styles.buttonSubmit}>
                Submit
              </button>
              {isCodeValid === false && (
                <p className={styles.errorText}>Invalid verification code.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
