import React from "react";
import AboutPageImage from "../assets/AboutPage.png";
import AboutCards from "../components/CardsAbout";

const About = () => {
  return (
    <div>
      <img className="home_image" src={AboutPageImage} alt="Image_landscape" />
      <AboutCards />
    </div>
  );
};

export default About;
