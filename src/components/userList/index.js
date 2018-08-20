import React, { Component } from "react";
import UserCard from "../userCard/index.js";
import "./index.css";
import avatar1 from "../../media/avatar1.png";
import avatar2 from "../../media/avatar2.png";
import avatar3 from "../../media/avatar3.png";
import avatar4 from "../../media/avatar4.png";

class UserList extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <UserCard avatar={avatar1} userName="Harry Potter" />
          <UserCard avatar={avatar2} userName="Cruella" />
          <UserCard avatar={avatar3} userName="Donald Duck" />
          <UserCard avatar={avatar4} userName="Curt Cobain" />
        </div>
      </div>
    );
  }
}

export default UserList;
