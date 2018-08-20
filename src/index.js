import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Home from "./components/home/index.js";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Home />, document.getElementById("root"));
registerServiceWorker();
