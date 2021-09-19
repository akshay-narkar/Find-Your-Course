const ERROR = 'ERROR';
const ALLCOURSES = 'ALLCOURSES';
const USERDEETS = 'USERDEETS';
const FAVCOURSES = 'FAVCOURSES';
const FAVCOURSEADD = 'FAVCOURSEADD';
const FAVCOURSEADDONCE = 'FAVCOURSEADDONCE';

// const FAVCOURSEDEL = 'FAVCOURSEDEL';

const allcourse = (courses) => ({
  type: ALLCOURSES,
  courses,
});

const allfavs = (favs) => ({
  type: FAVCOURSES,
  favs,
});

const addfav = (fav) => ({
  type: FAVCOURSEADD,
  fav,
});

const addfavonce = (fav) => ({
  type: FAVCOURSEADDONCE,
  fav,
});

const errors = (text) => ({
  type: ERROR,
  text,
});

const userdeets = (user) => ({
  type: USERDEETS,
  user,
});

export {
  allcourse, allfavs, ALLCOURSES, FAVCOURSES, ERROR,
  errors, USERDEETS, userdeets, addfav, FAVCOURSEADD, FAVCOURSEADDONCE, addfavonce,
};
