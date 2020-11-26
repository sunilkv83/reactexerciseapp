import React, { Component } from 'react';
import Header from "../controls/Header";
import Sidebar from "../controls/sidebar";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div id="wrapper">
                    <Sidebar/>
                    <div id="content-wrapper">
                 
                    </div>
                </div>
            </div>
        );
    }
}

