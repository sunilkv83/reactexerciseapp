
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Login from './components/Login'
import ScreeningList from './components/pages/ScreeningList';
class App extends Component {
  render() {
      return (
          <div className="App">
              <Router>
                  <Switch>
                      <Route exact path='/' component={Login} />
                      <Route path='/home' component={Home} />
                      <Route path='/screening' component={ScreeningList} />
                  </Switch>
              </Router>
          </div>
      );
  }
}
export default App;
