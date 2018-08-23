import { combineReducers } from "redux";
import { loginReducer, registerReducer } from "./user.js";
import { postsReducer } from "./posts.js";

const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
  postsReducer
});

export default rootReducer;
