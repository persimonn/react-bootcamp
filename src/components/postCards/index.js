import React, { Component } from "react";

class PostCard extends Component {
  render() {
    return (
      <div className="col-12 mt-5">
        <div className="card">
          <img className="card-img" src={this.props.image} />
          <div className="card-body card-margin">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.text}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PostCard;
