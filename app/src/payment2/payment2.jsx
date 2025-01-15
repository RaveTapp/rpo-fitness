import styles from "./payment2.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment2() {
  const [fullName, setFullName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const navigate = useNavigate();

  const handleCardNumberChange = (e) => {
    let value = e.target.value
      .split("")
      .filter((char) => char >= "0" && char <= "9")
      .join("");
    let formattedValue = "";
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += " ";
      }
      formattedValue += value[i];
    }
    setCardNumber(formattedValue.substring(0, 19));
  };

  const handleExpiryDateChange = (e) => {
    let value = e.target.value
      .split("")
      .filter((char) => char >= "0" && char <= "9")
      .join("");
    let formattedValue = "";
    for (let i = 0; i < value.length; i++) {
      if (i === 2) {
        formattedValue += "/";
      }
      formattedValue += value[i];
    }
    setExpiryDate(formattedValue.substring(0, 5));
  };

  const handleCvvChange = (e) => {
    let value = e.target.value
      .split("")
      .filter((char) => char >= "0" && char <= "9")
      .join("");
    setCvv(value.substring(0, 3));
  };

  return (
    <>
      <div className={styles.paymentBody}>
        <div className={styles.paymentBox}>
          <div>Full name</div>
          <input
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          ></input>
          <div>Card number</div>
          <input
            type="text"
            placeholder="Enter your card number"
            value={cardNumber}
            onChange={handleCardNumberChange}
          ></input>
          <div className={styles.expirationCvvRow}>
            <div>Expiration date</div>
            <div>CVV</div>
          </div>
          <div className={styles.expirationCvvRow}>
            <input
              className={styles.smallInput}
              type="text"
              placeholder="MM/YY"
              value={expiryDate}
              onChange={handleExpiryDateChange}
            ></input>
            <input
              className={styles.smallInput}
              type="text"
              placeholder="Enter CVV"
              value={cvv}
              onChange={handleCvvChange}
            ></input>
          </div>
          <div
            className={styles.CreateButton}
            onClick={() => {
              navigate("/homepage");
            }}
          >
            Confirm Payment
          </div>
        </div>
        <div className={styles.cardPreview}>
          <div className={styles.cardChip}></div>
          <div className={styles.cardNumber}>
            {cardNumber || "•••• •••• •••• ••••"}
          </div>
          <div className={styles.cardName}>{fullName || "FULL NAME"}</div>
          <div className={styles.cardExpiry}>{expiryDate || "MM/YY"}</div>
          <div className={styles.cardCvv}>{cvv || "CVV"}</div>
        </div>
      </div>
    </>
  );
}

export default Payment2;
