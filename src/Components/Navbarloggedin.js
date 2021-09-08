import { Link } from 'react-router-dom';

export default function Navloggedin() {
  const userdeets = JSON.parse((sessionStorage.getItem('userdetails')));
  let userid;
  let username;
  if (sessionStorage.getItem('userdetails')) {
    userid = userdeets.userid;
    username = userdeets.username;
  }

  return (
    <>
      <li>
        <Link to={{ pathname: `/users/${userid}/favs` }} className="nav-link active fw-bold" aria-current="page">
          {username}
          `s Favs
        </Link>
      </li>
      <li>
        <Link to={{ pathname: '/logout' }} className="nav-link active fw-light" aria-current="page">Logout</Link>
      </li>
    </>

  );
}
