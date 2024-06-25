import React from "react";
import "../styles/main.scss";

const CardContainer = ({ children }) => {
  return <div className="card_container">{children}</div>;
};

const Card = ({ title }) => {
  return (
    <div className="card_individual">
      <div className="card_title">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Card;
export { CardContainer };
