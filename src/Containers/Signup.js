import { Redirect } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import SignUpForm from '../Components/Signupform';
import { signup } from '../API/apicalls';

export default function Signup() {
  const submitChange = (event) => {
    event.preventDefault();
    const params = {
      name: event.target.Name.value,
      email: event.target.Email1.value,
      password: event.target.Password1.value,
      password_confirmation: event.target.Passwordconfirm.value,
    };
    signup(params);
    // if (event.target.id === 'exampleselectInput1' && event.target.value !== '') {
    //   setState1((prevstate) => ({ ...prevstate, Category: event.target.value }));
    // }
    // addnewbook(state);
    // setState1(() => ({ Title: '', Category: '' }));
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
