import styles from "./payment2.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment2() {
  return (
    <>
      <div className={styles.paymentBody}>
        <div className={styles.paymentBox}></div>
      </div>
    </>
  );
}

export default Payment2;
