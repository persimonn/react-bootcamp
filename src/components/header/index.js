import React, { Component } from "react";
import logo from "../../media/logo.png";
import user from "../../media/user.png";
import like from "../../media/like.png";

class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-1">
            <img src={logo} style={{ width: "50px" }} />
          </div>
          <div className="col-1 middle">
            <img src={user} style={{ width: "50px" }} />
          </div>
          <div className="col-1">
            <img src={like} style={{ width: "50px" }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
