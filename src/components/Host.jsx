import React from "react";

const Host = ({ name, picture }) => {
  return (
    <>
      <img className="host_img" src={picture} alt={name}></img>
      <span className="host_name">{name}</span>
    </>
  );
};
export default Host;
