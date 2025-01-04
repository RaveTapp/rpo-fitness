import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; // Import Router components
import Header from "./HeaderNK/Header.jsx";
import Footer from "./FooterNK/Footer.jsx";
import Card from "./CardNK/Card.jsx";
import SectionName from "./SectionNameNK/SectionName.jsx";
import CalcBMI from "./CalcBMINK/CalcBMI.jsx";
import exercisePic from "./assetsNK/exercise.webp";
import nutritionPic from "./assetsNK/hrana1.jpg";
import styles from "./AppNK.module.css";
import LineChart from "./GraphBMINK/LineGraph.jsx";

function AppNK() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showHomePage, setShowHomePage] = useState(false);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 4000);

    const homePageTimer = setTimeout(() => {
      setShowHomePage(true);
    }, 3500);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(homePageTimer);
    };
  }, []);

  return (
    <Router> 
      <div className={styles["app-container"]}>
        {showWelcome && (
          <div className={styles.welcome}>
            <h1 className={styles["welcome-text"]}>Welcome Back, NAME</h1>
          </div>
        )}

        {showHomePage && (
          <>
            <Header /> 
            <SectionName name="WELCOME BACK, NAME" />
            <div className={styles.cards_container}>
              <Card
                imageSrc={exercisePic}
                title="Exercise"
                description="Learn about various exercises to stay fit and healthy!"
                redirectUrl="/exercise" 
              />
              <Card
                imageSrc={nutritionPic}
                title="Nutrition"
                description="Discover healthy eating habits and nutritious meals!"
                redirectUrl="/nutrition"
              />
            </div>
            <SectionName name="PROGRESS" />
            <div className={styles.bmiChartContainer}>
              <div className={styles.bmiContainer}>
                <CalcBMI />
              </div>
              <div className={styles.chartContainer}>
                <LineChart />
              </div>
            </div>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default AppNK;
