/*eslint-disable*/
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Navbarloggedin from '../../../Components/Navbarloggedin';
import store from '../store';

it('UI is unaltered wrt first snapshot', () => {
  const elem = renderer.create(<BrowserRouter><Provider store={store}><Navbarloggedin /></Provider></BrowserRouter>).toJSON();

  expect(elem).toMatchSnapshot();
});
