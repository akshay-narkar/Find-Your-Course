/*eslint-disable*/
import axios from 'axios';

async function getcourses() {
  try {
    const response = await axios.get('http://localhost:3000/api/v1/courses');
    console.log(response);
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

async function signup(params1) {
  console.log(params1);
  try {
    const response = await axios.post('http://localhost:3000/api/v1/auth', {}, { headers: params1 });
    sessionStorage.setItem('uid', JSON.stringify(response.headers));
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

async function signin(params) {
  console.log(params);
  try {
    const response = await axios.post('http://localhost:3000/api/v1/auth/sign_in', {}, {
      headers: params,
    });

    // email: 'abc155120@example.com',
    //     password: 'password1',
    console.log(response.headers);
    sessionStorage.setItem('uid', JSON.stringify(response.headers));
  } catch (error) {
    console.error(error);
  }
}

async function signout(auth_params) {
  console.log(auth_params);
  try {
    sessionStorage.clear();
    const response = await axios.delete('http://localhost:3000/api/v1/auth/sign_out', {headers: auth_params});
    console.log(response);
  } catch (error) {
    console.error(error);
    // return error;
  }
}

async function getfavs() {
  const headers = {
    client: 'K6qck27E3fDtR2cDJpsNJQ',
    uid: 'abc155120@example.com',
    'access-token': 'aRvBYq53Ks7dONma60J9Gw',
  };

  try {
    const response = await axios.get('http://localhost:3000/api/v1/users/2/favs', { headers });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

async function addfav() {
  try {
    const response = await axios.get('http://localhost:3000/api/v1/courses');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

async function delfav() {
  try {
    const response = await axios.get('http://localhost:3000/api/v1/courses');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export {
  getcourses, signin, signup, getcoursesingle, getfavs, addfav, delfav, signout,
};
