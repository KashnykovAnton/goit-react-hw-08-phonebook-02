import { createSlice } from '@reduxjs/toolkit';
import {
  signupThunk,
  loginThunk,
  getCurrentUserThunk,
  logoutThunk,
} from './authThunks';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isAuth: false,
  isLoading: false,
  error: null,
  isFetchingCurrent: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signupThunk.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [signupThunk.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoading = false;
      state.isAuth = true;
    },
    [signupThunk.rejected](state, action) {
      state.isLoading = false;
      state.error = action.error.message;
    },

    [loginThunk.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [loginThunk.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoading = false;
      state.isAuth = true;
    },
    [loginThunk.rejected](state, action) {
      state.isLoading = false;
      state.error = action.error.message;
    },

    [getCurrentUserThunk.pending](state) {
      state.isFetchingCurrent = true;
      state.isLoading = true;
      state.error = null;
    },
    [getCurrentUserThunk.fulfilled](state, action) {
      state.user = action.payload;
      state.isAuth = true;
      state.isLoading = false;
      state.isFetchingCurrent = false;
    },
    [getCurrentUserThunk.rejected](state, action) {
      state.isFetchingCurrent = false;
      state.isLoading = false;
      state.error = action.error.message;
    },

    [logoutThunk.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [logoutThunk.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoading = false;
      state.isAuth = false;
    },
    [logoutThunk.rejected](state, action) {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default authSlice.reducer;
