/*eslint-disable*/
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Navbarloggedin from '../../../Components/Navbarloggedin';

it('UI is unaltered wrt first snapshot', () => {
  const elem = renderer.create(<BrowserRouter><Navbarloggedin /></BrowserRouter>).toJSON();

  expect(elem).toMatchSnapshot();
});
