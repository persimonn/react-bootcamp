import React, { Component } from "react";
import PostCard from "../postCards/index.js";
import catImg2 from "../../media/cat2.jpg";
import catImg3 from "../../media/cat3.jpg";
import catImg4 from "../../media/cat4.jpg";

class Posts extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <PostCard image={catImg2} text="some text" title="some title" />
          <PostCard image={catImg3} text="other text" title="other title" />
          <PostCard image={catImg4} text="more text" title="more title" />
          <PostCard image={catImg2} text="more else text" title="more else" />
          <PostCard image={catImg3} text="som text" title="som title" />
        </div>
      </div>
    );
  }
}

export default Posts;
