import styles from "./AppOffers.module.css";

function AppOffers() {
  return (
    <>
      <div className={styles.AppOffers}>
        <div className={styles.FirstBlock}>
          <div className={styles.LeftSection}>
            <h1>PROGRESS TRACKING</h1>
            <div className={styles.Text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </div>
          </div>
          <img
            src="https://via.placeholder.com/150"
            alt="progress tracking"
          ></img>
        </div>

        <div className={styles.SecondBlock}>
          <img src="https://via.placeholder.com/150"></img>
          <h1>HEALTHY RECIPES</h1>
        </div>
        <div className={styles.ThirdBlock}>
          <h1>PERSONAL PROGRAM</h1>
          <img src="https://via.placeholder.com/150"></img>
        </div>
        <div className={styles.FourthBlock}>
          <h1>COMPETING WITH FRIENDS</h1>
          <img src="https://via.placeholder.com/150"></img>
        </div>
      </div>
    </>
  );
}

export default AppOffers;
