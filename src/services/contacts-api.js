import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com/';
const userSignup = 'users/signup';
const userLogin = 'users/login';
const userLogout = 'users/logout';
const userCurrent = 'users/current';

export async function fetchSignup(user) {
  const { data } = await axios.post(`${BASE_URL}${userSignup}`, user);
  return data;
}

export async function fetchLogin(user) {
  const { data } = await axios.post(`${BASE_URL}${userLogin}`, user);
  return data;
}

export async function fetchLogout() {
  const { data } = await axios.post(`${BASE_URL}${userLogout}`);
  return data;
}

export async function fetchCurrent() {
  const { data } = await axios.get(`${BASE_URL}${userCurrent}`);
  return data;
}
