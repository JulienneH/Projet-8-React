import React from "react";
import AboutPageImage from "../assets/AboutPage.png";
import CollapseAbout from "../components/CollapseAbout";

const About = () => {
  return (
    <div>
      <img className="home_image" src={AboutPageImage} alt="Image_landscape" />
      <CollapseAbout />
    </div>
  );
};

export default About;
