import { FAVCOURSES, FAVCOURSEADD } from '../Actions/index';

const favsreducer = (state = [], action) => {
  switch (action.type) {
    case FAVCOURSES: {
      const favs = [...state.favs, action.favs];
      return { ...state, favs }; }
    case FAVCOURSEADD: {
      const favlist = [...state.favlist, action.fav];
      return { ...state, favlist }; }
    default:
      return state;
  }
};

export default favsreducer;
