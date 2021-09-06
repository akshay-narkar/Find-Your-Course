import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Signupform(props) {
  const { clickHandler, error } = props;

  return (
    <>
      <div className="backgroundsign row align-items-center m-0">
        <div className="container text-center">
          <h1 className="my-2">Welcome To UpSkill!</h1>
          <h3 className="my-4">{error}</h3>
          <form onSubmit={clickHandler}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label fw-bold">
                Your First Name
                <input type="text" className="form-control" id="Name" required />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label fw-bold">
                Email Address
                <input type="email" className="form-control fw-bold" id="Email1" required />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="Password" className="form-label fw-bold">
                Password
                <input type="password" className="form-control fw-bold" id="Password1" required />
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="Passwordconfirm" className="form-label fw-bold">
                Confirm Password
                <input type="password" className="form-control fw-bold" id="Passwordconfirm" required />
              </label>
            </div>

            <button type="submit" className="btn signing w-25 shadow fw-bold">Submit</button>
          </form>
          <div className="mt-3">
            <p className="mb-0">Already a User? Login Here</p>
            <Link to={{ pathname: '/login' }} className="nav-link active mt-1 pt-1">Login</Link>
          </div>
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
