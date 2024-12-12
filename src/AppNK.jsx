import React, { useState, useEffect } from "react";
import Header from "./HeaderNK/Header.jsx";
import Footer from "./FooterNK/Footer.jsx";
import Card from "./CardNK/Card.jsx";
import SectionName from "./SectionNameNK/SectionName.jsx";
import CalcBMI from "./CalcBMINK/CalcBMI.jsx";
import exercisePic from "./assetsNK/exercise.webp";
import nutritionPic from "./assetsNK/hrana1.jpg";

function AppNK() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showHomePage, setShowHomePage] = useState(false);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setShowWelcome(false); // Trigger fade-out animation
    }, 4000); // Keep the welcome screen for 3 seconds

    const homePageTimer = setTimeout(() => {
      setShowHomePage(true); // Show home page after fade-out
    }, 3500); // Show home page after 1 second of fade-out

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(homePageTimer);
    };
  }, []);

  return (
    <>
      {showWelcome && (
        <div className="welcome">
          <h1 className="welcome-text">Welcome Back, NAME</h1>
        </div>
      )}

      {showHomePage && (
        <>
          <Header />
          <SectionName name="WELCOME BACK, NAME" />
          <div className="cards_container">
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
          <div>
            <CalcBMI />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default AppNK;