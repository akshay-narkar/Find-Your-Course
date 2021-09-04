/*eslint-disable*/
import axios from 'axios';
import { allcourse } from '../Actions/index'

const delay = time => new Promise(res => setTimeout(res, time));

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

async function signup(sign_up,history, errordispatch, userdispatch) {
  try {
    const response = await axios.post('http://localhost:3000/api/v1/auth', {name: sign_up.name, email: sign_up.email, password: sign_up.password, password_confirmation: sign_up.password_confirmation },{});
    sessionStorage.setItem('uid', JSON.stringify(response.headers));
    const user = {userid: response.data.data.id, username: response.data.data.name }  
    userdispatch(user);
    history.push("/")
  } catch (error) {
    console.log(error);
    const error1 =  error.response.data.errors.full_messages[0];
    errordispatch(error1);
    await delay(2000);
    errordispatch(null);
  }
}

async function signin(params,history, errordispatch, userdispatch) {
  try {
    const response = await axios.post('http://localhost:3000/api/v1/auth/sign_in', {}, {
      headers: params,
    });

    // email: 'abc155120@example.com',
    //     password: 'password1',
    const user = {userid: response.data.data.id, username: response.data.data.name }  
    userdispatch(user);
    sessionStorage.setItem('uid', JSON.stringify(response.headers));
    history.push("/")
  } catch (error) {
    // console.log(error.response.data.errors[0]);
    const error1 =  error.response.data.errors[0];
    errordispatch(error1);
    await delay(2000);
    errordispatch(null);
  }
}

async function signout(auth_params, history) {
  try {
    sessionStorage.clear();
    await axios.delete('http://localhost:3000/api/v1/auth/sign_out', {params: auth_params});
    history.push("/login")
  } catch (error) {
    console.error(error.response.data.errors[0]);
    // return error;
  }
}

async function getfavs( userid, dispatch1, auth_params) {
  console.log(userid);
  try {
    const response = await axios.get(`http://localhost:3000/api/v1/users/14/favs`,{ params: auth_params });
    console.log(response)
    dispatch1((response.data.data));
  } catch (error) {
    console.error(error);
  }
}

async function addfav(userid, dispatch1, auth_params, id) {
  try {
    const response = await axios.post(`http://localhost:3000/api/v1/users/${userid}/favs/${id}`,{course_id: id},{params: auth_params});
    // dispatch1(allcourse(response.data.data));
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

async function delfav(id) {
  try {
    const response = await axios.post(`http://localhost:3000/api/v1/users/${userid}/favs/1`, {params:{course_id:id}});
    // dispatch1(allcourse(response.data.data));
  } catch (error) {
    console.error(error);
  }
}

export {
  getcourses, signin, signup, getcoursesingle, getfavs, addfav, delfav, signout,
};
