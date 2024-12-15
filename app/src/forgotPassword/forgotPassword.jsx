import React, { useState } from "react";
import styles from "./forgotPassword.module.css";
import emailjs from "emailjs-com";

function ForgotPassword() {
  const [userEmail, setUserEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  const generateCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  // Funkcija za pošiljanje e-pošte
  const handleSendCode = async (e) => {
    e.preventDefault();

    const code = generateCode();
    setVerificationCode(code);

    try {
      const result = await emailjs.send(
        "service_bxiwqka", // ID tvoje storitve (EmailJS)
        "template_nnnypwt", // ID predloge
        {
          to_name: "User",
          to_email: "nmori986@gmail.com",
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
