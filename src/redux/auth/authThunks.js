import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { authAPI } from 'services';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// const BASE_USER_URL = 'https://connections-api.herokuapp.com/';
// const userSignup = 'users/signup';
// const userLogin = 'users/login';
// const userLogout = 'users/logout';
// const userCurrent = 'users/current';

// export const signupThunk = createAsyncThunk(
//   'users/signup',
//   async (user, { rejectWithValue }) => {
//     try {
//       const response = await fetch(BASE_USER_URL + userSignup, {
//         method: 'POST',
//         headers: {
//           'Content-type': 'application/json',
//         },
//         body: JSON.stringify(user),
//       });
//       const data = await response.json();
//       return data;
//     } catch (err) {
//       return rejectWithValue({ error: err.name });
//     }
//   },
// );

export const signupThunk = createAsyncThunk(
  'users/signup',
  async (user, { rejectWithValue }) => {
    try {
      const data = await authAPI.fetchSignup(user);
      token.set(data.token);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

// export const loginThunk = createAsyncThunk(
//   'users/login',
//   async (user, { rejectWithValue }) => {
//     console.log(user);
//     try {
//       const response = await fetch(BASE_USER_URL + userLogin, {
//         method: 'POST',
//         headers: {
//           'Content-type': 'application/json',
//         },
//         body: JSON.stringify(user),
//       });
//       const data = await response.json();
//       console.log('data in loginThunk: ', data);
//       return data;
//     } catch (err) {
//       return rejectWithValue({ error: err });
//     }
//   },
// );

export const loginThunk = createAsyncThunk(
  'users/login',
  async (user, { rejectWithValue }) => {
    try {
      const data = await authAPI.fetchLogin(user);
      token.set(data.token);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

// export const logoutThunk = createAsyncThunk(
//   'users/logout',
//   // async (_, { rejectWithValue }) => {
//   async (_, { rejectWithValue, getState }) => {
//     const state = getState();
//     const token = state.auth.token;
//     // if (!token) return;
//     // console.log('state: ', state.auth.token);
//     try {
//       const response = await fetch(BASE_USER_URL + userLogout, {
//         method: 'POST',
//         headers: {
//           'Content-type': 'application/json',
//           // Authorization: `Bearer ${state.auth.token}`,
//           Authorization: `${token}`,
//         },
//       });
//       const data = await response.json();
//       console.log('response in logoutThunk: ', response);
//       console.log('data in logoutThunk: ', data);

//       return data;
//     } catch (err) {
//       console.log('err: ', err);
//       return rejectWithValue(err.message);
//     }
//   },
// );

export const logoutThunk = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await authAPI.fetchLogin();
      token.unset();
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

// export const getCurrentUserThunk = createAsyncThunk(
//   'users/current',
//   async (_, { rejectWithValue, getState }) => {
//     console.log(BASE_USER_URL + userCurrent);
//     const state = getState();
//     const token = state.auth.token;
//     // if (!token) return;
//     // console.log('state: ', state.auth.token);
//     try {
//       const response = await fetch(BASE_USER_URL + userCurrent, {
//         method: 'GET',
//         headers: {
//           'Content-type': 'application/json',
//           // Authorization: `Bearer ${state.auth.token}`,
//           Authorization: `${token}`,
//         },
//       });
//       const data = await response.json();
//       console.log('response in currentThunk: ', response);
//       console.log('data in currentThunk: ', data);

//       return data;
//     } catch (err) {
//       console.log('err: ', err);
//       return rejectWithValue(err.message);
//     }
//   },
// );

export const getCurrentUserThunk = createAsyncThunk(
  'users/current',

  async (_, thunkAPI, { rejectWithValue }) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      console.log('Токена нет, уходим из fetchCurrentUser');
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const data = await authAPI.fetchCurrent();
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
