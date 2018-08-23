import React from "react";
import "./index.css";

export const sum = (a, b) => {
  return a + b;
};

const UserCard = ({ avatar, userName }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img src={avatar} style={{ width: "60px" }} />
        </div>
        <div className="col">
          <a className="userNameLink" href="#">
            {userName}
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
