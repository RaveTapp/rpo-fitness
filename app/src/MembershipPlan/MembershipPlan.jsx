import React, { useState, useEffect } from "react";
import styles from "./MembershipPlan.module.css";
import { useNavigate } from "react-router-dom";

function MembershipPlan() {
  const navigate = useNavigate();

  // Začetno stanje nastavljeno na 1 uro
  const [timeLeft, setTimeLeft] = useState({
    hours: 1,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const { hours, minutes, seconds } = prevTime;

        if (hours === 0 && minutes === 0 && seconds === 0) {
          // Ponastavitev na 1 uro
          return { hours: 1, minutes: 0, seconds: 0 };
        }

        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        }

        if (minutes > 0) {
          return { ...prevTime, minutes: minutes - 1, seconds: 59 };
        }

        if (hours > 0) {
          return { ...prevTime, hours: hours - 1, minutes: 59, seconds: 59 };
        }

        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return time.toString().padStart(2, "0");
  };

  return (
    <>
      <div className={styles.MembershipPlan}>
        <div className={styles.Title}>
          <h1>Upgrade To Premium</h1>
          <h2>Special Offer ??$ off</h2>
        </div>
        <div className={styles.CountDown}>
          <div>{formatTime(timeLeft.hours)}</div>:
          <div>{formatTime(timeLeft.minutes)}</div>:
          <div>{formatTime(timeLeft.seconds)}</div>
        </div>

        <div className={styles.cards}>
          <div className={styles.firstCard}>
            <p className={styles.headerText}>Free Trial</p>
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
            <div
              className={styles.buttonJoin}
              onClick={() => {
                navigate("/payment");
              }}
            >
              Join
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MembershipPlan;
