import React from "react";
import "../styles/main.scss";
import AboutPageImage from "../assets/AboutPage.png";
import AboutCards from "../components/CardsAbout";

function AboutImg() {
  return (
    <>
      <img className="home_image" src={AboutPageImage} alt="Image_landscape" />
    </>
  );
}

const About = () => {
  return (
    <div>
      <AboutImg />
      <AboutCards />
    </div>
  );
};

export default About;
