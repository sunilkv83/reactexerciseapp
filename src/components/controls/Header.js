import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class Header extends Component {

    renderRedirect = () => {
        return <Redirect to="/" />;
    };

    render() {
        return (
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <div className="navbar-brand col-sm-3 col-md-2 mr-0">
                    <center>React Sample Exercise</center>
                </div>
                <div className="navbar-nav px-3">
                    <Link className="nav-item text-nowrap nav-link" to={''} onClick={this.renderRedirect}>Logout</Link>
                </div>
             </nav>
        );
    }
}
