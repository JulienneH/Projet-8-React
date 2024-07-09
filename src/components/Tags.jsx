import React from "react";

const Tags = ({ tags }) => {
  return (
    <div className="tags_container">
      {tags.map((tag, index) => (
        <button key={index} className="tag_button">
          {tag}
        </button>
      ))}
    </div>
  );
};
export default Tags;
