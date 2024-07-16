import React from "react";
import data from "../data.json";
import CardIndividual from "./CardIndividual";
import Container from "./Container";

function Cards() {
  return (
    <Container>
      {data.map((apartment) => (
        <CardIndividual key={apartment.id} apartment={apartment} />
      ))}
    </Container>
  );
}

export default Cards;
