import React, { Component } from "react";
import "./index.css";

class Register extends Component {
  state = {
    email: "",
    username: "",
    password: ""
  };

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleRegister = () => {
    const { email, username, password } = this.state;
    this.props.register(email, username, password).then(() => {
      if (this.props.registerReducer.isRegistered === true) {
        this.props.history.push("/login");
      }
    });
  };

  render() {
    return (
      <div className="container">
        <div className="card card-container">
          <form className="form-signin">
            <input
              type="email"
              name="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required
              onChange={this.onChange}
            />
            <input
              type="text"
              name="username"
              id="inputUserName"
              className="form-control"
              placeholder="Username"
              required
              onChange={this.onChange}
            />
            <input
              type="password"
              name="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required
              onChange={this.onChange}
            />
            <button
              className="btn btn-lg btn-primary btn-block btn-signin"
              type="submit"
              onClick={this.handleRegister}
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
