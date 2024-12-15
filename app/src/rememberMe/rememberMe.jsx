import { useNavigate } from "react-router-dom";
import styles from "./rememberMe.module.css";

function RememberMe() {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.rememberMeDiv}>test</div>
    </>
  );
}

export default RememberMe;
