import axios from 'axios';
import { allcourse } from '../Actions/index';
import coursefavid from '../Helpers/coursefavid';

const delay = (time) => new Promise((res) => setTimeout(res, time));
const baseURL = 'https://courses-api-microverse.herokuapp.com';
// const baseURL = 'http://localhost:3000';

const setsess = (response) => {
  sessionStorage.setItem('userdetails', JSON.stringify({ userid: response.data.data.id, username: response.data.data.name }));
};
const setuid = (response) => {
  sessionStorage.setItem('uid', JSON.stringify(response.headers));
};

async function getcourses(dispatch1) {
  try {
    const response = await axios.get(`${baseURL}/api/v1/courses`);
    dispatch1(allcourse(response.data.data));
  } catch (error) {
    //
  }
}

async function signup(signUp, history, errordispatch) {
  try {
    const response = await axios.post(`${baseURL}/api/v1/auth`, {
      name: signUp.name,
      email: signUp.email,
      password: signUp.password,
      password_confirmation: signUp.password_confirmation,
    }, {});
    setuid(response);
    setsess(response);
    history.push('/');
  } catch (error) {
    const error1 = error.response.data.errors.full_messages[0];
    errordispatch(error1);
    await delay(2000);
    errordispatch(null);
  }
}

async function signin(params, history, errordispatch) {
  try {
    const response = await axios.post(`${baseURL}/api/v1/auth/sign_in`, {}, {
      headers: params,
    });
    setuid(response);
    setsess(response);
    history.push('/');
  } catch (error) {
    const error1 = error.response.data.errors[0];
    errordispatch(error1);
    await delay(2000);
    errordispatch(null);
  }
}

async function signout(authParams, history) {
  try {
    sessionStorage.clear();
    await axios.delete(`${baseURL}/api/v1/auth/sign_out`, { params: authParams });
    history.push('/login');
  } catch (error) {
    //
  }
}

async function getfavs(userid, dispatch1, authParams, errordispatch) {
  try {
    const response = await axios.get(`${baseURL}/api/v1/users/${userid}/favs`,
      { params: authParams });
    dispatch1((response.data.data));
  } catch (error) {
    const error1 = error.response.data.errors[0];
    errordispatch(error1);
    await delay(2000);
    errordispatch(null);
  }
}

async function getfavonce(dispatch1, authParams, errordispatch) {
  try {
    const response = await axios.get(`${baseURL}/api/v1/users/1/favs/new`,
      { params: authParams });
    const fdata = coursefavid(response.data.data);
    dispatch1((fdata));
  } catch (error) {
    const error1 = error.response.data.errors[0];
    errordispatch(error1);
    await delay(2000);
    errordispatch(null);
  }
}

async function addfavapi(userid, dispatch1, authParams, id, errordispatch) {
  try {
    const response = await axios.post(`${baseURL}/api/v1/users/${userid}/favs`,
      { course_id: id }, { headers: authParams });
    dispatch1((response.data.data.course_id));
  } catch (error) {
    const error1 = error.response.data.data.user_id[0];
    errordispatch(error1);
    await delay(2000);
    errordispatch(null);
  }
}

export {
  getcourses, signin, signup, getfavs, addfavapi, signout, getfavonce,
};
