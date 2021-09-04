import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Loginform(props) {
  const { clickHandler, error } = props;

  return (
    <>
      <div className="container text-center my-3">
        <h1 className="my-2">Welcome Back!</h1>
        <h3 className="my-4">{error}</h3>
        <form onSubmit={clickHandler}>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email address
              <input type="email" className="form-control" id="Email1" required />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="form-label">
              Password
              <input type="password" className="form-control" id="Password1" required />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <div className="mt-3">
          <p className="mb-0">New User? Sign Up Here</p>
          <Link to={{ pathname: '/signup' }} className="nav-link active mt-1 pt-1">Sign Up</Link>
        </div>
      </div>
    </>
  );
}

Loginform.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  error: PropTypes.string,
};

Loginform.defaultProps = {
  error: PropTypes.string,
};
