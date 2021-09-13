import { FAVCOURSES, FAVCOURSEADD } from '../Actions/index';

const favsreducer = (state = [], action) => {
  const statenew = { ...state };
  switch (action.type) {
    case FAVCOURSES:
      statenew.favs = [action.favs];
      return statenew;
    case FAVCOURSEADD: {
      const favlist = [...state.favlist, action.fav];
      return { ...state, favlist }; }
    default:
      return state;
  }
};

export default favsreducer;
