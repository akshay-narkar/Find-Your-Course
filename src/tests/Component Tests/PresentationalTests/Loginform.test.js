/*eslint-disable*/
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Loginform from '../../../Components/Loginform';
import store from '../store';

const error = 'Random error';
const clickHandler1 = () => {};

it('UI is unaltered wrt first snapshot', () => {
  const elem = renderer.create(<BrowserRouter><Provider store={store}><Loginform error={error} clickHandler={clickHandler1} /></Provider></BrowserRouter>).toJSON();

  expect(elem).toMatchSnapshot();
});
