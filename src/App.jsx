import React from "react";
//import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import Button from "./Button/Button.jsx";
import Card from "./Card/Card.jsx";
import SectionName from "./SectionName/SectionName.jsx";
import CalcBMI from "./CalcBMI/CalcBMI.jsx";
import exercisePic from "./assets/exercise.webp";
import nutritionPic from "./assets/hrana1.jpg";
import graf from "./assets/graf.png"
import Newsletter from "./Newsletter/Newsletter.jsx";

function App() {

  return (
    <>
      <Button name="Exercise" />
      <Button name="Nutrition" />
      <Button name="Contact" />
      <Button name="Profile" />
      <Button name="Premium" />
      <SectionName name="WELCOME BACK, NAME" />
      <div className="cards_container">
        <Card imageSrc={exercisePic} title="Exercise" />
        <Card imageSrc={nutritionPic} title="Nutrition" />
      </div>
      <SectionName name="PROGRESS" />
      <CalcBMI />
      <img src={graf} alt="graf"></img>
      <div>
        <Footer />
        <Newsletter />
      </div>
    </>
  );

}

export default App