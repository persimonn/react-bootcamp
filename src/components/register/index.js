import React, { Component } from "react";
import "./index.css";

class Register extends Component {
  render() {
    return (
      <div className="container">
        <div className="card card-container">
          <form className="form-signin">
            <span id="reauth-email" className="reauth-email" />
            <input
              type="text"
              id="inputUserName"
              className="form-control"
              placeholder="Username"
              required
            />
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required
            />
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required
            />
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Re-Enter Password"
              required
            />
            <button
              className="btn btn-lg btn-primary btn-block btn-signin"
              type="submit"
            >
              Register
            </button>
          </form>
          <a href="#" className="sign-up">
            Already registered? Sign in!
          </a>
        </div>
      </div>
    );
  }
}

export default Register;
