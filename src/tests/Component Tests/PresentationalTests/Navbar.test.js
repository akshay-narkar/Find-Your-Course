import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../../../Components/Navbar';

//   const error = 'Random error'
//   const clickHandler1 = () => {};

it('UI is unaltered wrt first snapshot', () => {
  const elem = renderer.create(<BrowserRouter><Navbar /></BrowserRouter>).toJSON();

  expect(elem).toMatchSnapshot();
});
