import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Navloggedin(props) {
  const { userid, username } = props;

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

function mapStateToProps(state) {
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
