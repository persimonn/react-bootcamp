import { connect } from "react-redux";
import Login from "../../components/login/index.js";
import { login } from "../../actions/user.js";

export default connect(
  state => ({ loginReducer: state.loginReducer }),
  { login }
)(Login);
