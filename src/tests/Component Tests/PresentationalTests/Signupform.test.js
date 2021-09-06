/*eslint-disable*/
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Signform from '../../../Components/Signupform';

const clickHandler1 = () => {};

it('UI is unaltered wrt first snapshot', () => {
  const elem = renderer.create(<BrowserRouter><Signform clickHandler={clickHandler1} /></BrowserRouter>).toJSON();

  expect(elem).toMatchSnapshot();
});
