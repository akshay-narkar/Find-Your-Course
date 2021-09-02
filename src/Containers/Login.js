/*eslint-disable*/

import { Redirect } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import LoginForm from '../Components/Loginform';
import { signin } from '../API/apicalls';

export default function Login(props) {
  const submitChange = (event) => {
    event.preventDefault();
    const params = { 'email': event.target.Email1.value, password: event.target.Password1.value };
    signin(params);
    // if (event.target.id === 'exampleselectInput1' && event.target.value !== '') {
    //   setState1((prevstate) => ({ ...prevstate, Category: event.target.value }));
    // }
    // addnewbook(state);
    // setState1(() => ({ Title: '', Category: '' }));
  };
  console.log(props.history);
  return (

    <>

      {sessionStorage.getItem('uid') ? (<Redirect to="/" />): (
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
