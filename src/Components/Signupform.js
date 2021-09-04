import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Signupform(props) {
  const { clickHandler, error } = props;

  return (
    <>

      <div className="container text-center my-3">
        <h1 className="my-2">Welcome To UpSkill!</h1>
        <h3 className="my-4">{error}</h3>
        <form onSubmit={clickHandler}>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">
              Your First Name
              <input type="text" className="form-control" id="Name" required />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email address
              <input type="email" className="form-control" id="Email1" aria-describedby="emailHelp" required />
            </label>
            <div id="emailHelp" className="form-text">We will never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="form-label">
              Password
              <input type="password" className="form-control" id="Password1" required />
            </label>
          </div>

          <div className="mb-3">
            <label htmlFor="Passwordconfirm" className="form-label">
              Confirm Password
              <input type="password" className="form-control" id="Passwordconfirm" required />
            </label>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <div className="mt-3">
          <p className="mb-0">Already a User? Login Here</p>
          <Link to={{ pathname: '/login' }} className="nav-link active mt-1 pt-1">Login</Link>
        </div>
      </div>
    </>
  );
}

Signupform.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  error: PropTypes.string,
};

Signupform.defaultProps = {
  error: PropTypes.string,
};
