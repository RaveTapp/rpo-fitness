import styles from "./MembershipPlan.module.css";

function MembershipPlan() {
  return (
    <>
      <div className={styles.MembershipPlan}>
        <div className={styles.Title}>
          <h1>Upgrade To Premium</h1>
          <h2>Special Offer ??$ off</h2>
        </div>
        <div className={styles.CountDown}>
          <div>00</div>:<div>00</div>:<div>00</div>
        </div>

        <div className={styles.cards}>
          <div className={styles.firstCard}>
            <h1>Free Trail</h1>
          </div>
          <div className={styles.secondCard}>
            <h1>Premium</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default MembershipPlan;
