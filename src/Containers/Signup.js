import { Redirect, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../Components/Navbar';
import SignUpForm from '../Components/Signupform';
import { signup } from '../API/apicalls';
import { errors, userdeets } from '../Actions/index';

function Signup(props) {
  const history = useHistory();
  const { errordispatch, userdispatch } = props;
  const submitChange = (event) => {
    event.preventDefault();
    const params = {
      name: event.target.Name.value,
      email: event.target.Email1.value,
      password: event.target.Password1.value,
      password_confirmation: event.target.Passwordconfirm.value,
    };
    signup(params, history, errordispatch, userdispatch);
  };

  return (
    <>

      {sessionStorage.getItem('uid') ? <Redirect to="/" /> : (
        <>
          {' '}
          <Navbar />
          {' '}
          <SignUpForm clickHandler={submitChange} />
          {' '}
          {' '}
        </>
      ) }

    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  errordispatch: (text) => dispatch(errors(text)),
  userdispatch: (userinfo) => dispatch(userdeets(userinfo)),
});

Signup.propTypes = {
  errordispatch: PropTypes.func.isRequired,
  userdispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Signup);
