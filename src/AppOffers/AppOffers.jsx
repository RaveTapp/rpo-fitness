import styles from "./AppOffers.module.css";
function AppOffers() {
  return (
    <>
      <div className={styles.AppOffers}>
        <div className={styles.FirstBlock}>
          <h1>PROGRESS TRACKING</h1>
          <img></img>
        </div>
        <div className={styles.SecondBlock}>
          <h1>HEALTHY RECIPES</h1>
          <img></img>
        </div>
        <div className={styles.ThirdBlock}>
          <h1>PERSONAL PROGRAM</h1>
          <img></img>
        </div>
        <div className={styles.FourthBlock}>
          <h1>COMPETING WITH FRIENDS</h1>
          <img></img>
        </div>
      </div>
    </>
  );
}

export default AppOffers;
