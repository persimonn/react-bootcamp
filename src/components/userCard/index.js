import React, { Component } from "react";
import "./index.css";

class UserCard extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={this.props.avatar} style={{ width: "60px" }} />
          </div>
          <div className="col">
            <a className="userNameLink" href="#">
              {this.props.userName}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCard;
