import React, { Component } from "react";
import "./index.css";
import logo from "../../media/logo.png";
import user from "../../media/user.png";
import like from "../../media/like.png";

class Header extends Component {
  render() {
    return (
      <div className="container mt-2">
        <div className="row justify-content-between header-wrapper">
          <div className="col-1">
            <img src={logo} style={{ width: "45px" }} />
          </div>
          <div className="col-1 middle">
            <img src={user} style={{ width: "45px" }} />
          </div>
          <div className="col-1 mt-2">
            <img src={like} style={{ width: "30px" }} />
          </div>
          <div className="col-1">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={this.props.handleOpenModal}
            >
              Create post
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
