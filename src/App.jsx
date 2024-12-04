import React from "react";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import Button from "./Button/Button.jsx";
import Card from "./Card/Card.jsx";
import SectionName from "./SectionName/SectionName.jsx";
import CalcBMI from "./CalcBMI/CalcBMI.jsx";
import exercisePic from "./assets/exercise.webp";
import nutritionPic from "./assets/hrana1.jpg";
import graf from "./assets/graf.png"

function App() {

  return (
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
        {/* <img src={graf} alt="graf"></img> */}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );

}

export default App