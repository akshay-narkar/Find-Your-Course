import renderer from 'react-test-renderer';
import Error from '../../../Components/Error';

it('UI is unaltered wrt first snapshot', () => {
  const elem = renderer.create(<Error />).toJSON();

  expect(elem).toMatchSnapshot();
});
