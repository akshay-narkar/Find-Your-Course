import { combineReducers } from 'redux';
import coursersreducer from './coursereducer';
import favsreducer from './favsreducer';
import errorsreducer from './errorreducer';

const rootReducer = combineReducers({
  coursersreducer, favsreducer, errorsreducer,
});

export default rootReducer;
