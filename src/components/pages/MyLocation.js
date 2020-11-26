import React, { Component } from 'react';
import Header from "../controls/Header";
import Sidebar from "../controls/sidebar";


export default class MyLocation extends Component {

    render() {
        return (
            <div>
                <Header/>
                <div id="wrapper">
                    <Sidebar></Sidebar>
                    <div id="content-wrapper">
                        <br/>
                    <div className="card mb-3">
                                <div className="card-header">
                                   My Locations
                                </div>
                    <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%"
                                               cellSpacing="0">
                                            <thead>
                                            <tr>
                                                <th>Location</th>
                                                <th>In Time</th>
                                                <th>Out Time</th>
                                                <th>Actions</th>
                                            </tr>
                                            </thead>
                                            </table>
                                            </div>
                                            </div>
                </div>
                    </div>
                    </div>
                    </div>
                    );
    }
}