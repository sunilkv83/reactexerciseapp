import React, { Component } from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import '../pages/css/popup.css'
import { connect } from 'react-redux'
import * as actions from "../../action/screeningAction"
import { bindActionCreators } from "redux";

class Screening extends Component {

    state = {
        ...this.returnStateObject()
    }

    returnStateObject() {
     
            return {
                currentTemp: '',
                wakingTemp: '',
                temparatureUnit: '',
                tempMethod: ''
            }
      
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.insertScreeing(this.state);
    }
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    options = 
        {
             items: [
              { value: 'Oral', label: 'Oral', className: 'myOptionClassName' },
              { value: 'Other', label: 'Other' }
            ]
        };

    
    render() {
        return (
            <div className="popup-box">
            <div className="box">
            <div className="text-right" style={{ width: " 50rem" }}>
            <div className="card mb-3">
              <div className="card-header text-center">Add Screening Data</div>
                            <div className="card-body">
                                <form>
                                    <div class="form-group text-left">
                                        <label for="currentTemp">Current Temp</label>
                                        <input type="text" class="form-control" id="currentTemp" onChange={this.handleInputChange} value={this.state.currentTemp} />
                                    </div>
                                    <div class="form-group text-left">
                                        <label for="wakingTemp">Waking Temp</label>
                                        <input type="text" class="form-control" id="wakingTemp" onChange={this.handleInputChange} value={this.state.wakingTemp} />
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
                                        <label for="tempMethod">Check If You Have Any Following Symptoms</label>
                                        <div className="checkbox">
                                             <input type="checkbox" id="symptom1"  value="Fever" ></input>&nbsp;
                                             <label for="symptom1">  Fever</label><br></br>
                                             <input type="checkbox" id="symptom2" value="SOB ( Shortness Of Breath)"></input>&nbsp;
                                             <label for="symptom2">  SOB ( Shortness Of Breath)</label><br></br>
                                             <input type="checkbox" id="symptom3" value="Bluish Lips/Face"></input>&nbsp;
                                             <label for="symptom3">  Bluish Lips/Face</label><br></br>
                                             <input type="checkbox" id="symptom4" value="Difficulty Breathing"></input>&nbsp;
                                             <label for="symptom4">  Difficulty Breathing</label><br></br>
                                             <input type="checkbox" id="symptom5" value="InAbility to wake or Stay Away"></input>&nbsp;
                                             <label for="symptom5">  InAbility to wake or Stay Away</label><br></br>

                                      </div>
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

   const mapStateToProps = state => {
        return {
            list: state.list
        }
    }
    
    const  mapDispatchToProps = dispatch => {
        return bindActionCreators({
            insertScreeing: actions.insert,
            updateScreening: actions.update
        }, dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Screening)