import React, { Component } from "react";
import Header from "../header/index.js";
import Posts from "../posts/index.js";
import UserList from "../userList/index.js";
import Modal from "../postModal/index.js";
import LightBox from "../lightBox/index.js";

class Home extends Component {
  state = {
    isModalOpen: false
  };

  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleClickOutside = event => {
    if (event.target.id === "lightbox") {
      this.setState({ isModalOpen: false });
    }
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <div className="container">
        <div className="row">
          <Header handleOpenModal={this.handleOpenModal} />
        </div>
        <div className="row">
          <div className="col-8">
            <Posts />
          </div>
          <div className="col-4">
            <UserList />
          </div>
        </div>
        {isModalOpen ? (
          <LightBox handleClickOutside={this.handleClickOutside}>
            <Modal handleCloseModal={this.handleCloseModal} />
          </LightBox>
        ) : null}
      </div>
    );
  }
}

export default Home;
