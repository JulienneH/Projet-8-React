import React from "react";

const Tags = ({ tags }) => {
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <div key={index} className="tags_button">
          <p className="tags_txt"> {tag}</p>
        </div>
      ))}
    </div>
  );
};
export default Tags;
