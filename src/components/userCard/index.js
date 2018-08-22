import React from "react";
import "./index.css";

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
