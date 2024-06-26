import React from "react";
import "../styles/main.scss";
import Card, { CardContainer } from "../components/Cards";
import coverHome from "../assets/coverHome.png";

function Container() {
  return (
    <>
      <div className="home_container">
        <img className="home_image" src={coverHome} alt="Image_landscape" />
        <span className="home_text">Chez vous, partout et ailleurs</span>
      </div>

      <CardContainer>
        <Card title="Card 1" />
        <Card title="Card 2" />
        <Card title="Card 3" />
        <Card title="Card 4" />
        <Card title="Card 5" />
        <Card title="Card 6" />
        <Card title="Card 7" />
        <Card title="Card 8" />
        <Card title="Card 9" />
        <Card title="Card 10" />
        <Card title="Card 11" />
        <Card title="Card 12" />
      </CardContainer>
    </>
  );
}

export default Container;
