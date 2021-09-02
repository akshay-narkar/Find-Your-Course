/*eslint-disable*/
import { Link } from 'react-router-dom';
import Navloggedin from './Navbarloggedin';
import Navloggedout from './Navbarloggedout';

export default function Navbar() {
  return (
 
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to = {{pathname: '/'}} className = "navbar-brand" aria-current = "page">Upskill</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
               <Link to = {{pathname: '/'}} className = "nav-link active" aria-current = "page">Home</Link>
              </li>
              {sessionStorage.getItem("uid") ? <Navloggedin /> : <Navloggedout />  }
            {/* <Link to={{ pathname: '/error' }} className="link">
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              </Link> */}
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> */}
    
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
