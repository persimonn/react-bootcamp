import { connect } from "react-redux";
import Modal from "../../components/postModal/index.js";
import { submitPost, getPosts } from "../../actions/posts.js";

export default connect(
  state => ({ postsReducer: state.postsReducer }),
  { submitPost, getPosts }
)(Modal);
