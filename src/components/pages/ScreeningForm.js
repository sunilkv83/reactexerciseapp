import React, { Component, useState } from "react";
import Header from "../controls/Header";
import Sidebar from "../controls/sidebar";
import Screening from "../pages/Screening";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

export default class ScreeningForm extends Component {
  isOpen = true;

  togglePopup = () => {
      this.isOpen= false;
  };

  render() {
    return (
      <div>
        <Header />
        <div id="wrapper">
          <Sidebar></Sidebar>
          <div id="content-wrapper">
            <br />
            <div className="card mb-3">
              <div className="card-header">COVID - 19 Screening</div>
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    className="table table-bordered"
                    id="dataTable"
                    width="100%"
                    cellSpacing="0"
                  >
                    <thead>
                      <tr>
                        <th>Current Temp</th>
                        <th>Waking Temp</th>
                        <th>Temprature Unit</th>
                        <th>Method</th>
                      </tr>
                    </thead>
                    {/* <tbody>
                        {this.props.list.map((item, index) => {
                            return <tr >
                                <td>{item.currentTemp}</td>
                                <td>{item.wakingTemp}</td>
                                <td>{item.temparatureUnit}</td>
                                <td>{item.tempMethod}</td>
                            </tr>
                        })}
                    </tbody> */}
                  </table>
                  <div className="text-right">
                  <button type="submit" class="btn btn-primary " onClick={this.togglePopup}>Add</button></div>
                </div>
              </div>
            </div>
          </div>
          {this.isOpen && <Screening></Screening>}
        </div>
      </div>
    );
  }
}
