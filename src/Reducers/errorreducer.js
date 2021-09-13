import { ERROR } from '../Actions/index';

const init = {
  error: null,
};

const errorsreducer = (state = init, action) => {
  const statenew = { ...state };
  switch (action.type) {
    case ERROR:
      statenew.error = action.text;
      return statenew;
    default:
      return state;
  }
};

export default errorsreducer;
