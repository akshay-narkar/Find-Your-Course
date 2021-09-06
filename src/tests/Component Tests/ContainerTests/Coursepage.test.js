/*eslint-disable*/
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../store';

import Coursepage from '../../../Containers/Coursepage';

it('UI is unaltered wrt first snapshot', () => {
  const elem = renderer.create(<BrowserRouter><Provider store={store}><Coursepage /></Provider></BrowserRouter>).toJSON();

  expect(elem).toMatchSnapshot();
});
