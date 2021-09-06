/*eslint-disable*/
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Loginform from '../../../Components/Loginform';

const error = 'Random error';
const clickHandler1 = () => {};

it('UI is unaltered wrt first snapshot', () => {
  const elem = renderer.create(<BrowserRouter><Loginform error={error} clickHandler={clickHandler1} /></BrowserRouter>).toJSON();

  expect(elem).toMatchSnapshot();
});
