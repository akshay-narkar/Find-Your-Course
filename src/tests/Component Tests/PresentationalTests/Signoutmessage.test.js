import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Signoutmessage from '../../../Components/Signoutmessage';

it('UI is unaltered wrt first snapshot', () => {
  const elem = renderer.create(<BrowserRouter><Signoutmessage /></BrowserRouter>).toJSON();

  expect(elem).toMatchSnapshot();
});
