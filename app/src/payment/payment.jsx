import styles from "./payment.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className={styles.paymentBody}>
        <div className={styles.paymentBox}>
          <div className={styles.email}>
            <div>Purchasing for Account</div>
            <input type="text" placeholder="Insert your email"></input>
          </div>
          <div className={styles.subscriptionType}>
            <div>Subscription Type</div>
            <select id="types" name="subscription">
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
              <option value="freeTrial">Free Trial</option>
            </select>
            <div className={styles.payment}>
              <div>Payment</div>
              <div className={styles.radioButtons}>
                <label>
                  <input type="radio" name="paymentOption" value="creditCard" />
                  Credit Card
                </label>
                <label>
                  <input type="radio" name="paymentOption" value="paypal" />
                  PayPal
                </label>
                <label>
                  <input type="radio" name="paymentOption" value="bankvv" />
                  Bank Payment
                </label>
              </div>
            </div>
            <div className={styles.sharedDiv}>
              <div className={styles.terms}>
                <input
                  type="checkbox"
                  className={styles.checkBox}
                  onChange={handleCheckboxChange}
                ></input>
                <div className={styles.text}>
                  <div>I accept the terms</div>
                  <div> X$</div>
                </div>
              </div>
            </div>
            <button
              disabled={!isChecked}
              className={styles.subsctiption}
              onClick={() => {
                navigate("/payment2");
              }}
            >
              Submit Payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
