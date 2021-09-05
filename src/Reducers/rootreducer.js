import { combineReducers } from 'redux';
import coursersreducer from './coursereducer';
import favsreducer from './favsreducer';
import errorsreducer from './errorreducer';
import usersreducer from './userreducer';

const rootReducer = combineReducers({
  coursersreducer, favsreducer, errorsreducer, usersreducer,
});

export default rootReducer;
