import {
  ALLCOURSES, FAVCOURSES, ERROR,
  FAVCOURSEADD,
} from '../../Actions/index';

import coursersreducer from '../../Reducers/coursereducer';
import favsreducer from '../../Reducers/favsreducer';
import errorsreducer from '../../Reducers/errorreducer';

const state = { courses: [] };
const favs = { favs: [] };
const favlist = { favlist: [] };

describe('Courses Reducer', () => {
  describe('INITIAL_DUMMY_STATE', () => {
    test('Pass default state', () => {
      const action = { type: 'dummy_action' };
      const initialState = { courses: 0 };

      expect(coursersreducer(initialState, action)).toEqual(initialState);
      expect(coursersreducer(undefined, action)).not.toEqual(initialState);
    });
  });

  describe('USE THE CORRECT GET COURSES ACTION', () => {
    test('returns the correct state', () => {
      const action = { type: ALLCOURSES, courses: 1 };
      const expectedState = { courses: [1] };
      const unexpectedState = { courses: [2] };
      expect(coursersreducer(state, action)).toEqual(expectedState);
      expect(coursersreducer(state, action)).not.toEqual(unexpectedState);
    });
  });
});

describe('Favs Reducer', () => {
  describe('USE THE ALL FAVS ACTION', () => {
    test('returns the correct state', () => {
      const action = { type: FAVCOURSES, favs: 1 };
      const expectedState = { favs: [1] };
      const unexpectedState = { favs: [2] };
      expect(favsreducer(favs, action)).toEqual(expectedState);
      expect(favsreducer(favs, action)).not.toEqual(unexpectedState);
    });
  });

  describe('USE THE ADD FAV ACTION', () => {
    test('returns the correct state', () => {
      const action = { type: FAVCOURSEADD, fav: 1 };
      const expectedState = { favlist: [1] };
      const unexpectedState = { favlist: [2] };
      expect(favsreducer(favlist, action)).toEqual(expectedState);
      expect(favsreducer(favlist, action)).not.toEqual(unexpectedState);
    });
  });
});

describe('Errors Reducer', () => {
  describe('USE THE CORRECT ERROR ACTION', () => {
    test('returns the correct state', () => {
      const action = { type: ERROR, text: 'Error' };
      const expectedState = { error: 'Error' };
      const unexpectedState = { error: 'Xyz' };
      expect(errorsreducer({ error: 'Error' }, action)).toEqual(expectedState);
      expect(errorsreducer({ error: 'All' }, action)).not.toEqual(unexpectedState);
    });
  });
});
