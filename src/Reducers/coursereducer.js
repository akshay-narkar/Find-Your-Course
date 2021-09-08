import { ALLCOURSES } from '../Actions/index';

const coursersreducer = (state = [], action) => {
  const statenew = { ...state };
  switch (action.type) {
    case ALLCOURSES:
      statenew.courses = [action.courses];
      return statenew;
    default:
      return state;
  }
};

export default coursersreducer;
