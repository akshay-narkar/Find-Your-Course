import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../../Reducers/rootreducer';

const inistate = {
  favs: [],
  courses: [],
  username: '',
  favlist: [],
};

const store = createStore(rootReducer,
  { coursersreducer: inistate, favsreducer: inistate },
  applyMiddleware(thunk));

export default store;
