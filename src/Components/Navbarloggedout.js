import { Link } from 'react-router-dom';

export default function Navloggedout() {
  return (
    <>
      <li>
        <Link to={{ pathname: '/login' }} className="nav-link active fw-light" aria-current="page">Login</Link>
      </li>
      <li className="nav-item">
        <Link to={{ pathname: '/signup' }} className="nav-link active fw-light" aria-current="page">SignUp</Link>
      </li>

    </>

  );
}
