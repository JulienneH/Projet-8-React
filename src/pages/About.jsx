import React from "react";
import AboutPageImage from "../assets/AboutPage.png";
import CollapseAbout from "../components/CollapseAbout";

const About = () => {
  return (
    <>
      <img
        className="home_image about_image"
        src={AboutPageImage}
        alt="Image_landscape"
      />
      <div className="about_collapse">
        <CollapseAbout />
      </div>
    </>
  );
};

export default About;
