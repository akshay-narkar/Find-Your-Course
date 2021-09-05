import { USERDEETS } from '../Actions/index';

const init = {
  userid: null,
  username: null,
};

const usersreducer = (state = init, action) => {
  const statenew = { ...state };
  switch (action.type) {
    case USERDEETS:
      statenew.userid = action.user.userid;
      statenew.username = action.user.username;
      return statenew;
    default:
      return state;
  }
};

export default usersreducer;
