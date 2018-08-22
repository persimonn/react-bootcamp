import React, { Component } from "react";
import "./index.css";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleLogin = () => {
    const { email, password } = this.state;
    this.props.login(email, password).then(() => {
      if (this.props.loginReducer.isLogged === true) {
        this.props.history.push("/");
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
              type="password"
              name="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required
              onChange={this.onChange}
            />
            <div id="remember" className="checkbox">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button
              className="btn btn-lg btn-primary btn-block btn-signin"
              type="submit"
              onClick={this.handleLogin}
            >
              Sign in
            </button>
          </form>
          <a href="#" className="forgot-password">
            Forgot the password?
          </a>
        </div>
      </div>
    );
  }
}

export default Login;
