import React, { Component } from "react";
import Header from "../header/index.js";
import Posts from "../posts/index.js";
import UserList from "../userList/index.js";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <div className="col-8">
            <Posts />
          </div>
          <div className="col-4">
            <UserList />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
