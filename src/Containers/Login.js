import { Redirect, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../Components/Navbar';
import LoginForm from '../Components/Loginform';
import { signin } from '../API/apicalls';
import { errors, userdeets } from '../Actions/index';

function Login(props) {
  const history = useHistory();
  const { errordispatch, userdispatch } = props;
  const submitChange = (event) => {
    event.preventDefault();
    const params = { email: event.target.Email1.value, password: event.target.Password1.value };
    signin(params, history, errordispatch, userdispatch);
  };

  return (

    <>

      {sessionStorage.getItem('uid') ? (<Redirect to="/" />) : (
        <>
          {' '}
          <Navbar />
          {' '}
          <LoginForm clickHandler={submitChange} />
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

Login.propTypes = {
  errordispatch: PropTypes.func.isRequired,
  userdispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
