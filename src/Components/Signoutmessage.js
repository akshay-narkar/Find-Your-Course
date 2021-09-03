import { Redirect, useHistory } from 'react-router-dom';
import { signout } from '../API/apicalls';
import Navbar from './Navbar';

export default function Signout() {
  const history = useHistory();

  const signout1 = () => {
    const sessh = JSON.parse(sessionStorage.getItem('uid'));

    const params = {
      uid: sessh.uid,
      client: sessh.client,
      'access-token': sessh['access-token'],
    };

    signout(params, history);
  };

  return (
    <>
      {!sessionStorage.getItem('uid') ? (
        <>
          <Redirect to="/login" />
          {console.log('take me home')}
        </>
      )
        : (
          <>
            <Navbar />
            {signout1()}

          </>
        )}
    </>
  );
}
