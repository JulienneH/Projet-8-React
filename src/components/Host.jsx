import React from "react";

const Host = ({ name, picture }) => {
  return (
    <div className="host">
      <img className="host_img" src={picture} alt={name}></img>
      <span className="host_name">{name}</span>
    </div>
  );
};
export default Host;
