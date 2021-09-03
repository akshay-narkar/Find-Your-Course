const ERROR = 'ERROR';
const ALLCOURSES = 'ALLCOURSES';
// const GETCOURSE = 'GETCOURSES';
const FAVCOURSES = 'FAVCOURSES';
const USERID = 'USERID';

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

const userid = (category) => ({
  type: USERID,
  category,
});

const errors = (text) => ({
  type: ERROR,
  text,
});

export {
  allcourse, allfavs, ALLCOURSES, FAVCOURSES, ERROR,
  USERID, userid, errors,
};
