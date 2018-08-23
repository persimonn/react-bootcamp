import React from "react";

export const sum = (a, b) => {
  return a + b;
};

const PostCard = ({ image, title, text }) => {
  return (
    <div className="col-12 mt-5">
      <div className="card">
        <img className="card-img" src={image} />
        <div className="card-body card-margin">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
