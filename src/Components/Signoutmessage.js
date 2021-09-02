import { Redirect } from 'react-router-dom';
import { signout } from '../API/apicalls';
import Navbar from './Navbar';

export default function Signout() {
  const signout1 = () => {
    const sessh = JSON.parse(sessionStorage.getItem('uid'));

    const params = {
      uid: sessh.uid,
      client: sessh.client,
      'access-token': sessh['access-token'],
    };

    signout(params);
  };

  return (
    <>
      {!sessionStorage.getItem('uid') ? (
        <>
          {console.log('take me to home')}
          <Redirect to="/login" />
        </>
      )
        : (
          <>
            <Navbar />
            {signout1()}
            {/* <Redirect to="/login" /> */}
            {/* {console.log('wokring')} */}

          </>
        )}
    </>
  );
}
