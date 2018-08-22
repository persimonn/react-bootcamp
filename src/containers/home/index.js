import { connect } from "react-redux";
import Home from "../../components/home/index.js";
import { validateToken } from "../../actions/user.js";

export default connect(
  state => ({ loginReducer: state.loginReducer }),
  { validateToken }
)(Home);
