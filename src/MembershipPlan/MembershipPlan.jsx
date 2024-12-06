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
            <p className={styles.headerText}>Free Trail</p>
            <p>30 days only</p>
            <hr className={styles.line}></hr>
            <div className={styles.freeComponents}>
              <p>Limited Generation</p>
              <p>Exercise Library</p>
              <p>Join Challenges</p>
            </div>
            <div className={styles.buttonTryNow}>Try Now</div>
          </div>
          <div className={styles.secondCard}>
            <p className={styles.headerText2}>Premium</p>
            <span>X$ per month</span>
            <span>X$ per year</span>
            <hr className={styles.line2}></hr>
            <div className={styles.premiumComponents}>
              <p>Unlimited Workout Generation</p>
              <p>Workout Progression</p>
              <p>Challenge Creation</p>
              <p>Easy Nutrition Tracking</p>
            </div>
            <div className={styles.buttonJoin}>Join</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MembershipPlan;
