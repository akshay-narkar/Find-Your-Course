import helperauth from '../Helpers/helper_auth';

const header = {
  uid: 1,
  client: 2,
  'access-token': 1,
};

const header1 = {
  uid: 23,
  client: 211,
  'access-token': 2421,
};

sessionStorage.setItem('uid', JSON.stringify(header));

describe('Test helper function', () => {
  test('Pass default state', () => {
    expect(helperauth()).toEqual(header);
    expect(helperauth()).not.toEqual(header1);
  });
});
