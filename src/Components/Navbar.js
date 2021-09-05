import { Link } from 'react-router-dom';
import Navloggedin from './Navbarloggedin';
import Navloggedout from './Navbarloggedout';

export default function Navbar() {
  return (

    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to={{ pathname: '/' }} className="navbar-brand" aria-current="page">Upskill</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link to={{ pathname: '/' }} className="nav-link active" aria-current="page">Home</Link>
              </li>
              {sessionStorage.getItem('uid') ? <Navloggedin /> : <Navloggedout /> }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
