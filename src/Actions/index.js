const ERROR = 'ERROR';
const ALLCOURSES = 'ALLCOURSES';
const USERDEETS = 'USERDEETS';
// const GETCOURSE = 'GETCOURSES';
const FAVCOURSES = 'FAVCOURSES';

const allcourse = (courses) => ({
  type: ALLCOURSES,
  courses,
});

// const getcourse = (courses) => ({
//   type: GETCOURSE,
//   courses,
// });

const allfavs = (favs) => ({
  type: FAVCOURSES,
  favs,
});

const errors = (text) => ({
  type: ERROR,
  text,
});

const userdeets = (text) => ({
  type: USERDEETS,
  text,
});

export {
  allcourse, allfavs, ALLCOURSES, FAVCOURSES, ERROR,
  errors, USERDEETS, userdeets,
};
