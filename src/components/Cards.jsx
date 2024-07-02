import React from "react";
import "../styles/main.scss";
import data from "../data.json";
import { Link } from "react-router-dom";

const CardContainer = ({ children }) => {
  return <div className="card_container">{children}</div>;
};

const Card = ({ apartment }) => {
  return (
    <div className="card_individual">
      <div className="card_title">
        <h1>{apartment.title}</h1>
      </div>{" "}
      <Link to={`/apartment/${apartment.id}`}>
        <img className="card_img" src={apartment.cover} alt={apartment.title} />{" "}
      </Link>
    </div>
  );
};

function Cards() {
  return (
    <CardContainer>
      {data.map((apartment) => (
        <Card key={apartment.id} apartment={apartment} />
      ))}
    </CardContainer>
  );
}

export default Cards;
export { CardContainer, Cards };
