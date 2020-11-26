import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

export default class Login extends Component {

    state = {
        redirect: false
    };
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/home'/>
        }
    };
    handleSubmit = event => {
        this.setState({redirect: true});
    }

    render() {
    return(
        <div className="container">
        <div className="card card-login mx-auto mt-5">
        <div className="card-header">Login</div>
        <div className="card-body">
      <form onSubmit={this.handleSubmit}>
      <div className="form-group">
                                <div className="form-label-group">
                                    <input className={"form-control " + (this.state.authError ? 'is-invalid' : '')} id="inputEmail" placeholder="Email address" type="text" name="email" onChange={this.handleEmailChange} autoFocus required/>
                                    <label htmlFor="inputEmail">Email address</label>
                                    <div className="invalid-feedback">
                                        Please provide a valid Email.
                                    </div>
                                </div>
                            </div>
          <br/>

                            <div className="form-group">
                                <div className="form-label-group">
                                    <input type="password" className={"form-control " + (this.state.authError ? 'is-invalid' : '')} id="inputPassword" placeholder="******" name="password" onChange={this.handlePwdChange} required/>
                                    <label htmlFor="inputPassword">Password</label>
                                    <div className="invalid-feedback">
                                        Please provide a valid Password.
                                    </div>
                                </div>
                            </div>
          <br/>
                            <div className="form-group">
                                <button className="btn btn-primary btn-block" type="submit" >Login &nbsp;&nbsp;&nbsp;
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