import React from "react";
import data from "../data.json";
import { Link } from "react-router-dom";
import Container from "./Container";

const Card = ({ apartment }) => {
  return (
    <div className="card_individual">
      <Link to={`/apartment/${apartment.id}`}>
        <div className="card_title">
          <h1>{apartment.title}</h1>
        </div>{" "}
        <img className="card_img" src={apartment.cover} alt={apartment.title} />{" "}
      </Link>
    </div>
  );
};

function Cards() {
  return (
    <Container>
      {data.map((apartment) => (
        <Card key={apartment.id} apartment={apartment} />
      ))}
    </Container>
  );
}

export default Cards;
