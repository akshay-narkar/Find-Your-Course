import { Redirect, useHistory } from 'react-router-dom';
import { signout } from '../API/apicalls';
import Navbar from './Navbar';
import helperauth from '../API/helper_auth';

export default function Signout() {
  const history = useHistory();

  const signout1 = () => {
    let params;
    if (sessionStorage.getItem('uid')) { params = helperauth(); }

    signout(params, history);
  };

  return (
    <>
      {!sessionStorage.getItem('uid') ? (
        <>
          <Redirect to="/login" />
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
