import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signupThunk = createAsyncThunk(
  'users/signup',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('users/signup', user);
      token.set(data.token);
      toast.success('You have successfully registered');
      return data;
    } catch (error) {
      return rejectWithValue(toast.error(`There is an error: ${error}`));
    }
  },
);

export const loginThunk = createAsyncThunk(
  'users/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('users/login', user);
      token.set(data.token);
      toast.success('You have successfully logged in');
      return data;
    } catch (error) {
      return rejectWithValue(toast.error(`There is an error: ${error}`));
    }
  },
);

export const logoutThunk = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('users/logout');
      token.unset();
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const getCurrentUserThunk = createAsyncThunk(
  'users/current',

  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('users/current');
      console.log(data);
      return data;
    } catch (error) {
      console.log('error in GetCurrentUser: ', error);
      return rejectWithValue(error);
    }
  },
);
