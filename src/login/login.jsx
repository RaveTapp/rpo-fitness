import styles from "./Login.module.css";

function Login() {
  return (
    <>
      <div className={styles.loginBox}>
        <h1>Welcome back</h1>
        <div className={styles.Email}>
          <label>Email</label>
          <input type="text" placeholder="Enter your email"></input>
        </div>

        <div className={styles.Password}>
          <label>Password</label>
          <input type="text" placeholder="Password"></input>
        </div>
        <div className={styles.SharedDiv}>
          <div className={styles.RememberMe}>Remember me</div>
          <div className={styles.ForgotPassword}>Forgot password</div>
        </div>
        <div className={styles.SigninButton}>Sign in</div>
        <div>Dont have an account? Sign up</div>
      </div>
    </>
  );
}

export default Login;
