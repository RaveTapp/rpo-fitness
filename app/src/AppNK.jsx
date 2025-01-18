import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom"; // Import Router components
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
  // Stanje za prikaz uvodnega zaslona in začetne strani
  const [showWelcome, setShowWelcome] = useState(true);
  const [showHomePage, setShowHomePage] = useState(false);

  useEffect(() => {
    //časovnik za skritje uvodnega zaslona po 4 sekundah
    const fadeOutTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 4000);

    const homePageTimer = setTimeout(() => {
      setShowHomePage(true);
    }, 3500);

    return () => {
      // Počistimo časovnike, da preprečimo uhajanje pomnilnika
      clearTimeout(fadeOutTimer);
      clearTimeout(homePageTimer);
    };
  }, []);

  return (
        <div className={styles["app-container"]}>
          {showWelcome && (
            <div className={styles.welcome}>
              <h1 className={styles["welcome-text"]}>Welcome Back</h1>
            </div>
          )}

          {showHomePage && (
            <>
              <Header /> 
              <SectionName name="WELCOME BACK" />
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
  );
}

export default AppNK;
