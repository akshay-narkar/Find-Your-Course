import { FAVCOURSES, FAVCOURSEADD } from '../Actions/index';

const favsreducer = (state = [], action) => {
  // const statenew = { ...state };
  switch (action.type) {
    case FAVCOURSES: {
      const favs = [...state.favs, action.favs];
      return { ...state, favs }; }
    // return statenew;}
    case FAVCOURSEADD: {
      const favlist = [...state.favlist, action.fav];
      return { ...state, favlist }; }
    default:
      return state;
  }
};

export default favsreducer;
