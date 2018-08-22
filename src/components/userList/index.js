import React, { Component } from "react";
import UserCard from "../userCard/index.js";
import "./index.css";
import avatar1 from "../../media/avatarbw1.png";
import avatar2 from "../../media/avatarbw2.png";
import avatar4 from "../../media/avatar4.png";

class UserList extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <UserCard avatar={avatar1} userName="User 1" />
          <UserCard avatar={avatar2} userName="User 2" />
          <UserCard avatar={avatar1} userName="User 3" />
          <UserCard avatar={avatar4} userName="User 4" />
        </div>
      </div>
    );
  }
}

export default UserList;
