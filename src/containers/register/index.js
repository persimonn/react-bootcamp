import { connect } from "react-redux";
import Register from "../../components/register/index.js";
import { register } from "../../actions/user.js";

export default connect(
  state => ({ registerReducer: state.registerReducer }),
  { register }
)(Register);
