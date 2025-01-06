import styles from "./payment.module.css";

function Payment() {
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
            {/* <div className={styles.subscriptionType}>
              <div>Payment</div>
            </div> */}
            <div className={styles.sharedDiv}>
              <div className={styles.terms}>
                <input type="checkbox" className={styles.checkBox}></input>
                <div>I accept the terms</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
