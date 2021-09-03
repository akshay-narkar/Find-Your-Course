/*eslint-disable*/
import axios from 'axios';
import { allcourse, userid } from '../Actions/index'

async function getcourses(dispatch1) {
  try {
    const response = await axios.get('http://localhost:3000/api/v1/courses');
    // console.log("printing");
    dispatch1(allcourse(response.data.data));
    // console.log(response.data.data);
  } catch (error) {
    console.error(error);
  }
}

async function getcoursesingle(id) {
  try {
    const response = await axios.get(`http://localhost:3000/api/v1/courses/${id}`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

async function signup(params1,history) {
  try {
    const response = await axios.post('http://localhost:3000/api/v1/auth', {}, { params: params1 });
    sessionStorage.setItem('uid', JSON.stringify(response.headers));
    history.push("/")
  } catch (error) {
    console.log(error.response.data.errors.full_messages[0]);
  }
}

async function signin(params,history) {
  console.log(params);
  try {
    const response = await axios.post('http://localhost:3000/api/v1/auth/sign_in', {}, {
      params: params,
    });

    // email: 'abc155120@example.com',
    //     password: 'password1',
    sessionStorage.setItem('uid', JSON.stringify(response.headers));
    history.push("/")
  } catch (error) {
    console.error(error.response.data.errors[0]);
  }
}

async function signout(auth_params, history) {
  console.log(auth_params);
  try {
    sessionStorage.clear();
    await axios.delete('http://localhost:3000/api/v1/auth/sign_out', {params: auth_params});
    history.push("/login")
  } catch (error) {
    console.error(error.response.data.errors[0]);
    // return error;
  }
}

async function getfavs(dispatch) {
  try {
    const response = await axios.post(`http://localhost:3000/api/v1/users/${userid}/favs`, { params: auth_params });
    // dispatch1(allcourse(response.data.data));
  } catch (error) {
    console.error(error);
  }
}

async function addfav() {
  try {
    const response = await axios.post('http://localhost:3000/api/v1/courses');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

async function delfav() {
  try {
    const response = await axios.post('http://localhost:3000/api/v1/courses');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export {
  getcourses, signin, signup, getcoursesingle, getfavs, addfav, delfav, signout,
};
