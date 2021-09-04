/*eslint-disable*/

import { Redirect, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../Components/Navbar';
import LoginForm from '../Components/Loginform';
import { signin } from '../API/apicalls';
import { errors, userdeets } from '../Actions/index';

function Login(props) {
  const history = useHistory();
  const { error, errordispatch, userdispatch } = props;
  const submitChange = (event) => {
    event.preventDefault();
    const params = { 'email': event.target.Email1.value, password: event.target.Password1.value };
    signin(params,history, errordispatch, userdispatch);
    // if (event.target.id === 'exampleselectInput1' && event.target.value !== '') {
    //   setState1((prevstate) => ({ ...prevstate, Category: event.target.value }));
    // }
    // addnewbook(state);
    // setState1(() => ({ Title: '', Category: '' }));
  };

  return (

    <>

      {sessionStorage.getItem('uid') ? (<Redirect to="/" />): (
        <>
          {' '}
          <Navbar />
          {' '}
          {console.log(error)}
          <LoginForm clickHandler={submitChange} error={error} />
          {' '}

        </>
      ) }

    </>
  );
}


function mapStateToProps(state) {
  // const { favs } = state.userrreducer;
  const { error } = state.errorsreducer;
  return ({ error });
}

const mapDispatchToProps = (dispatch) => ({
  errordispatch: (text) => dispatch(errors(text)),
  userdispatch: (userinfo) => dispatch(userdeets(userinfo)),

});

Login.propTypes = {
  errordispatch: PropTypes.func.isRequired,
  userdispatch: PropTypes.func.isRequired,
  error: PropTypes.string,
};

Login.defaultProps = {
  error: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
