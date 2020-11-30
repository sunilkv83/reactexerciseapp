import React, { Component } from 'react';
import Header from "../controls/Header";
import Sidebar from "../controls/sidebar";
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

export default class Screening extends Component {

    options = 
        {
             items: [
              { value: 'Oral', label: 'Oral', className: 'myOptionClassName' },
              { value: 'Other', label: 'Other' }
            ]
        };

    render() {
        return (
            <div>
                <Header />
                <div id="wrapper">
                    <Sidebar />
                    <div id="content-wrapper">
                        <div className="card mb-3">
                            <br />
                            <div className="card-header">
                                COVID-19 Screening
                                </div>
                        </div>

                        <div className="text-right" style={{ width: " 50rem" }}>
                            <div className="card-body">
                                <form>
                                    <div class="form-group text-left">
                                        <label for="currentTemp">Current Temp</label>
                                        <input type="text" class="form-control" id="currentTemp" />
                                    </div>
                                    <div class="form-group text-left">
                                        <label for="wakingTemp">Waking Temp</label>
                                        <input type="text" class="form-control" id="wakingTemp" />
                                    </div>

                                    <div class="input-group-prepend text-left">
                                        <label >Temperature Unit
</label>
                                        <div>
<br></br>

                                            <input type="radio" id="F" name="temp" /> &nbsp;&nbsp;
                                            <label classname="form-check-label" for="F">F</label> &nbsp;&nbsp;
                                            <input type="radio" id="C" name="temp" /> &nbsp;&nbsp;
                                            <label classname="form-check-label" for="C">C</label>
                                        </div>
                                    </div>

                                    <div class="form-group text-left">
                                        <label for="tempMethod">Temperature Method</label>
                                        <Dropdown  options={this.options} 
                                        value={this.options[0]} placeholder="Select" />

                                    </div>
                                    <div class="form-group text-left">
                                        <label for="tempMethod">CHECK IF YOU HAVE ANY FOLLOWING SYMPTOMS</label>
                                     
                                    </div>
                                    <button type="submit" class="btn btn-primary ">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

