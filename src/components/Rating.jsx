import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rating = ({ rating, totalStars = 5 }) => {
  return (
    <div className="rating">
      {Array(totalStars)
        .fill()
        .map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className={index < rating ? "star filled" : "star"}
          />
        ))}
    </div>
  );
};

export default Rating;
