/*eslint-disable*/
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Signform from '../../../Components/Signupform';
import { Provider } from 'react-redux';
import store from '../store';

const clickHandler1 = () => {};

it('UI is unaltered wrt first snapshot', () => {
  const elem = renderer.create(<BrowserRouter><Provider store={store}><Signform clickHandler={clickHandler1} /></Provider></BrowserRouter>).toJSON();

  expect(elem).toMatchSnapshot();
});
