import { FAVCOURSES, FAVCOURSEADD } from '../Actions/index';
// import { FAVCOURSEDEL } from '../Actions/index';

const favsreducer = (state = [], action) => {
  const statenew = { ...state };
  switch (action.type) {
    case FAVCOURSES:
      statenew.favs = [action.favs];
      return statenew;
    case FAVCOURSEADD:
      statenew.favlist = [...statenew.favlist, action.fav];
      console.log(statenew);
      return statenew;
    // case FAVCOURSEDEL:
    //   statenew.favs = [...statenew.favs, action.fav];
    //   return statenew;
    default:
      return state;
  }
};

export default favsreducer;
