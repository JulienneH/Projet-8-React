import React from "react";
import Cards from "../components/Cards";
import coverHome from "../assets/coverHome.png";

function Home() {
  return (
    <>
      <div className="home_container">
        <img className="home_image" src={coverHome} alt="Image_landscape" />
        <span className="home_text">Chez vous, partout et ailleurs</span>
      </div>

      <Cards />
    </>
  );
}

export default Home;
