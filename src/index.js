import './assets/vendor/fontawesome-free/css/all.min.css'
import './assets/css/sb-admin.css'

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import screeningReducer from "./reducers/screeningreducer";


let initialState = {
    list: JSON.parse(localStorage.getItem('screening'))
}
const store = createStore(screeningReducer, initialState)

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
