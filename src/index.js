import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/routes';
import rootReducer from './Reducers/rootreducer';
import { getcourses } from './API/apicalls';

const inistate = {
  favs: [],
  courses: [],
  username: '',
  favlist: [],
};

const store = createStore(rootReducer,
  { coursersreducer: inistate, favsreducer: inistate }, applyMiddleware(thunk));

store.dispatch(getcourses);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
