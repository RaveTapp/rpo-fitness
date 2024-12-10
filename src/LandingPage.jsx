import NavBar from "./NavBar/NavBar.jsx";
import ChooseUs from "./ChooseUs/ChooseUs.jsx";
import AppOffers from "./AppOffers/AppOffers.jsx";
import MembershipPlan from "./MembershipPlan/MembershipPlan.jsx";
import styles from "./LandingPage.module.css";

function LandingPage() {
  return (
    <>
      <div>
        <div className={styles.first_div}>
          <NavBar />
        </div>
        <div className={styles.AppOffers}>
          <AppOffers />
        </div>
        <div className={styles.ChooseUs}>
          <ChooseUs />
        </div>
        <div className={styles.MembershipPlan}>
          <MembershipPlan />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
