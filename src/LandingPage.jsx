import Header from "./Header/Header.jsx";
import NavBar from "./NavBar/NavBar.jsx";
import Logo from "./NavBar/Logo.jsx";
import ChooseUs from "./ChooseUs/ChooseUs.jsx";
import AppOffers from "./AppOffers/AppOffers.jsx";
import MembershipPlan from "./MembershipPlan/MembershipPlan.jsx";
import styles from "./LandingPage.module.css";

function LandingPage() {
  return (
    <>
      <div className={styles.first_div}>
        <NavBar />
        <Logo />
        <Header />
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
    </>
  );
}

export default LandingPage;
