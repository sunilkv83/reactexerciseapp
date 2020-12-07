import React, { Component } from 'react';
import Header from "../components/controls/Header";
import Sidebar from "../components/controls/sidebar";

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

