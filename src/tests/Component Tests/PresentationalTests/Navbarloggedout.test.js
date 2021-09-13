/*eslint-disable*/
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Navbarloggedout from '../../../Components/Navbarloggedout';

it('UI is unaltered wrt first snapshot', () => {
  const elem = renderer.create(<BrowserRouter><Navbarloggedout /></BrowserRouter>).toJSON();

  expect(elem).toMatchSnapshot();
});
