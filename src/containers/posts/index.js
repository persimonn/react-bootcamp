import { connect } from "react-redux";
import Posts from "../../components/posts/index.js";
import { getPosts } from "../../actions/posts.js";

export default connect(
  state => ({ postsReducer: state.postsReducer }),
  { getPosts }
)(Posts);
