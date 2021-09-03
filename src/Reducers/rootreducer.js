/*eslint-disable*/

import { combineReducers } from 'redux';
import coursersreducer from './coursereducer';
// import favsreducer from './favsreducer';
// import errorreducer from './errorreducer';
// import userreducer from './userreducer';

const rootReducer = combineReducers({
  coursersreducer 
//   teamdeetsReducer, filterReducer, namefilterReducer,
});

export default rootReducer;