import React, { Component } from "react";
import Header from "../controls/Header";
import Sidebar from "../controls/sidebar";
import Screening from "../pages/Screening";
import { Values } from "redux-form-website-template";

export default class ScreeningList extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper">
          <div className="card mb-3">
              <div className="card-header text-center">Add Screening Data</div>
                            <div className="card-body">
            <Screening></Screening>
            <Values form="Screening" />
            </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
