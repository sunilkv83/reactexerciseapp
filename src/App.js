
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css'
import Home from './components/pages/Home';
import Login from './components/pages/Login'
import MyLocation from './components/pages/MyLocation';
import Screening from './components/pages/Screening';
class App extends Component {
  render() {
      return (
          <div className="App">
              <Router>
                  <Switch>
                      <Route exact path='/' component={Login} />
                      <Route path='/home' component={Home} />
                      <Route path='/screening' component={Screening} />
                      <Route path='/MyLocation' component={MyLocation} />

                  </Switch>
              </Router>
          </div>
      );
  }
}
export default App;
