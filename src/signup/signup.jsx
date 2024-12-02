import styles from "./SignUp.module.css";
function SignUp() {
  return (
    <>
      <div className={styles.SignUpBox}>
        <h1>Create new account</h1>
        <div className={styles.Member}>Already A Member? Log in</div>
        <div className={styles.Name}>
          <div className={styles.firstName}>
            <label>First name</label>
            <input type="text"></input>
          </div>
          <div className={styles.lastName}>
            <label>Last name</label>
            <input type="text"></input>
          </div>
        </div>
        <div className="email">
          <label>Email</label>
          <input type="text"></input>
        </div>
        <div className="password">
          <label>Password</label>
          <input type="text"></input>
          <label>Confirm Password</label>
          <input type="text"></input>
        </div>
        <div className="button">Create account</div>
      </div>
    </>
  );
}

export default SignUp;
