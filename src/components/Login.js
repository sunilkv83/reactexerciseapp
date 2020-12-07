import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  state = {
    redirect: false,
    email: "",
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/home" />;
    }
  };
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (event) => {
    localStorage.setItem("User", JSON.stringify(this.state.email));
    // localStorage.setItem('User', JSON.stringify("Sunil"));

    this.setState({ redirect: true });
  };

  render() {
    return (
      <div className="container">
        <div className="card card-login mx-auto mt-5">
          <div className="card-header">Login</div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <div className="form-label-group">
                  <input
                    className={
                      "form-control " +
                      (this.state.authError ? "is-invalid" : "")
                    }
                    id="email"
                    placeholder="Login"
                    type="text"
                    name="email"
                    onChange={this.handleInputChange}
                    autoFocus
                    required
                  />
                  <label htmlFor="email">Login</label>
                </div>
              </div>
              <br />

              <div className="form-group">
                <div className="form-label-group">
                  <input
                    type="password"
                    className={
                      "form-control " +
                      (this.state.authError ? "is-invalid" : "")
                    }
                    id="inputPassword"
                    placeholder="******"
                    name="password"
                    onChange={this.handleInputChange}
                    required
                  />
                  <label htmlFor="inputPassword">Password</label>
                  <div className="invalid-feedback">
                    Please provide a valid Password.
                  </div>
                </div>
              </div>
              <br />
              <div className="form-group">
                <button className="btn btn-primary btn-block" type="submit">
                  Login &nbsp;&nbsp;&nbsp;
                </button>
              </div>
            </form>
            {this.renderRedirect()}
          </div>
        </div>
      </div>
    );
  }
}
