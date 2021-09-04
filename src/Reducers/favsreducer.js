import { FAVCOURSES } from '../Actions/index';

const favsreducer = (state = [], action) => {
  const statenew = { ...state };
  switch (action.type) {
    case FAVCOURSES:
      statenew.favs = [...statenew.favs, action.favs];
      return statenew;
    default:
      return state;
  }
};

export default favsreducer;
