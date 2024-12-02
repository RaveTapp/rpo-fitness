import styles from "./SignUp.module.css";
function SignUp() {
  return (
    <>
      <div className={styles.SignUpBox}>
        <h1>Create new account</h1>
        <div className={styles.Member}>Already A Member? Log in</div>
        <div className={styles.Name}>
          <div className={styles.firstName}>
            <label>First Name</label>
            <input type="text" placeholder="First Name"></input>
          </div>
          <div className={styles.lastName}>
            <label>Last Name</label>
            <input type="text" placeholder="Last Name"></input>
          </div>
        </div>
        <div className={styles.Email}>
          <label>Email</label>
          <input type="email" placeholder="Email"></input>
        </div>
        <div className={styles.Password}>
          <div className={styles.PasswordInput}>
            <label>Password</label>
            <input type="password" placeholder="Password"></input>
          </div>
          <div className={styles.ConfirmPassword}>
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm Password"></input>
          </div>
        </div>
        <div className={styles.CreateButton}>Create account</div>
      </div>
    </>
  );
}

export default SignUp;
