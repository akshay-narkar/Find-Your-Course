import { Link } from 'react-router-dom';
// import Signout from '../Containers/Signout';

export default function Navloggedin() {
  return (
    <>
      <li>
        {/* <Signout /> */}
        <Link to={{ pathname: '/users/1/favs' }} className="nav-link active" aria-current="page">Favs</Link>
      </li>
      <li>
        {/* <Signout /> */}
        <Link to={{ pathname: '/logout' }} className="nav-link active" aria-current="page">Logout</Link>
      </li>
      {/* <li className="nav-item">
      <Link to={{ pathname: '/signup' }}
      className="nav-link active" aria-current="page">SignUpGone</Link>
      </li> */}

    </>

  );
}
