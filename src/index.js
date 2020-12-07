import './assets/vendor/fontawesome-free/css/all.min.css'
import './assets/css/sb-admin.css'
import getMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './components/store';
import { createStore } from "redux";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render( <Provider store={store}> <MuiThemeProvider muiTheme={getMuiTheme()}><App/></MuiThemeProvider></Provider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
