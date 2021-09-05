import { Link } from 'react-router-dom';
// import Signout from '../Containers/Signout';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Navloggedin(props) {
  const { userid, username } = props;

  return (
    <>
      <li>
        {/* <Signout /> */}
        <Link to={{ pathname: `/users/${userid}/favs` }} className="nav-link active" aria-current="page">
          {username}
          `s Favs
        </Link>
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

function mapStateToProps(state) {
  console.log(state);
  const { userid, username } = state.usersreducer;
  return ({ userid, username });
}

Navloggedin.propTypes = {
  userid: PropTypes.number.isRequired,
  username: PropTypes.string,
};

Navloggedin.defaultProps = {
  username: 'NoName',
};

export default connect(mapStateToProps)(Navloggedin);
