import React, { Component } from "react";
import PostCard from "../postCards/index.js";
import catImg1 from "../../media/bwcat1.jpg";
import catImg2 from "../../media/bwcat2.jpg";
import catImg3 from "../../media/bwcat3.jpg";
import catImg4 from "../../media/bwcat4.jpg";
import catImg5 from "../../media/bwcat5.jpg";

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    console.log(this.props);
    if (!this.props.postsReducer || !this.props.postsReducer.list) {
      return null;
    }

    return (
      <div className="container">
        <div className="row">
          {this.props.postsReducer.list.map(el => (
            <PostCard key={el._id} image={el.media.path} title={el.title} />
          ))}
        </div>
      </div>
    );
  }
}

export default Posts;
