/*eslint-disable*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';
import Routes from './Routes/routes';
import rootReducer from './Reducers/rootreducer';
import { BrowserRouter } from 'react-router-dom';
import { getcourses } from './API/apicalls'

const inistate = {
  favs: [],
  courses: [],
  username: ''
}

const store = createStore(rootReducer, {coursersreducer: inistate},  applyMiddleware(thunk) )

store.dispatch(getcourses);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = { store }>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
