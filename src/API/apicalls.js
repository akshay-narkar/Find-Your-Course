import axios from 'axios';
import { allcourse } from '../Actions/index';

const delay = (time) => new Promise((res) => setTimeout(res, time));

async function getcourses(dispatch1) {
  try {
    const response = await axios.get('http://localhost:3000/api/v1/courses');
    dispatch1(allcourse(response.data.data));
  } catch (error) {
    // console.error(error);
  }
}

async function signup(signUp, history, errordispatch, userdispatch) {
  try {
    const response = await axios.post('http://localhost:3000/api/v1/auth', {
      name: signUp.name,
      email: signUp.email,
      password: signUp.password,
      password_confirmation: signUp.password_confirmation,
    }, {});
    sessionStorage.setItem('uid', JSON.stringify(response.headers));
    const user = { userid: response.data.data.id, username: response.data.data.name };
    userdispatch(user);
    history.push('/');
  } catch (error) {
    const error1 = error.response.data.errors.full_messages[0];
    errordispatch(error1);
    await delay(2000);
    errordispatch(null);
  }
}

async function signin(params, history, errordispatch, userdispatch) {
  try {
    const response = await axios.post('http://localhost:3000/api/v1/auth/sign_in', {}, {
      headers: params,
    });

    const user = { userid: response.data.data.id, username: response.data.data.name };
    userdispatch(user);
    sessionStorage.setItem('uid', JSON.stringify(response.headers));
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
    await axios.delete('http://localhost:3000/api/v1/auth/sign_out', { params: authParams });
    history.push('/login');
  } catch (error) {
    // return error;
  }
}

async function getfavs(userid, dispatch1, authParams, errordispatch) {
  try {
    const response = await axios.get(`http://localhost:3000/api/v1/users/${userid}/favs`, { params: authParams });
    dispatch1((response.data.data));
  } catch (error) {
    const error1 = error.response.data.errors[0];
    errordispatch(error1);
    await delay(2000);
    errordispatch(null);
  }
}

async function addfavapi(userid, dispatch1, authParams, id, errordispatch) {
  try {
    const response = await axios.post(`http://localhost:3000/api/v1/users/${userid}/favs`, { course_id: id }, { headers: authParams });
    dispatch1((response.data.data.course_id));
  } catch (error) {
    const error1 = error.response.data.data.user_id[0];
    errordispatch(error1);
    await delay(2000);
    errordispatch(null);
  }
}

// async function delfav(id) {
//   try {
//     const response = await axios.post(`http://localhost:3000/api/v1/users/${userid}/favs/1`, {params:{course_id:id}});
//     // dispatch1(allcourse(response.data.data));
//   } catch (error) {
//     console.error(error);
//   }
// }

export {
  getcourses, signin, signup, getfavs, addfavapi, signout,
};
