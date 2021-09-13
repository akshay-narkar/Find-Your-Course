import configureStore from 'redux-mock-store';
import {
  allcourse, allfavs,
  errors, userdeets, addfav,
} from '../../Actions/index';

const mockStore = configureStore();
const store = mockStore();

describe('Test All actions', () => {
  beforeEach(() => { // Runs before each test in the suite
    store.clearActions();
  });

  describe('Test allcourses', () => {
    test('Dispatches the correct action to all courses with payload', () => {
      const expectedActions = [
        {
          courses: 1,
          type: 'ALLCOURSES',
        },
      ];

      const unexpectedActions = [
        {
          courses: 2,
          type: 'ALLCOURSES',
        },
      ];

      store.dispatch(allcourse(1));
      expect(store.getActions()).toEqual(expectedActions);
      expect(store.getActions()).not.toEqual(unexpectedActions);
    });
  });

  describe('Test All favs', () => {
    test('Dispatches the correct action to favs with payload', () => {
      const expectedActions = [
        {
          favs: 4,
          type: 'FAVCOURSES',
        },
      ];

      const unexpectedActions = [
        {
          favs: 2,
          type: 'FAVCOURSES',
        },
      ];

      store.dispatch(allfavs(4));
      expect(store.getActions()).toEqual(expectedActions);
      expect(store.getActions()).not.toEqual(unexpectedActions);
    });
  });

  describe('Test Add Fav', () => {
    test('Dispatches the correct action which is a add fav payload', () => {
      const expectedActions = [
        {
          fav: 'England',
          type: 'FAVCOURSEADD',
        },
      ];

      const unexpectedActions = [
        {
          fav: 2,
          type: 'FAVCOURSEADD',
        },
      ];

      store.dispatch(addfav('England'));
      expect(store.getActions()).toEqual(expectedActions);
      expect(store.getActions()).not.toEqual(unexpectedActions);
    });
  });

  describe('Test Error', () => {
    test('Dispatches the correct error which is the error caught', () => {
      const expectedActions = [
        {
          text: 'Error',
          type: 'ERROR',
        },
      ];

      const unexpectedActions = [
        {
          text: 2,
          type: 'ERROR',
        },
      ];

      store.dispatch(errors('Error'));
      expect(store.getActions()).toEqual(expectedActions);
      expect(store.getActions()).not.toEqual(unexpectedActions);
    });
  });

  describe('Test User Details', () => {
    test('Dispatches the correct user details', () => {
      const expectedActions = [
        {
          user: 'Randomname',
          type: 'USERDEETS',
        },
      ];

      const unexpectedActions = [
        {
          user: 2,
          type: 'USERDEETS',
        },
      ];

      store.dispatch(userdeets('Randomname'));
      expect(store.getActions()).toEqual(expectedActions);
      expect(store.getActions()).not.toEqual(unexpectedActions);
    });
  });
});
