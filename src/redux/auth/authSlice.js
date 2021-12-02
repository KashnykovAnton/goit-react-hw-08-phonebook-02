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
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  // initialState: {
  //   user: { name: null, email: null },
  //   token: null,
  //   // error: null,
  //   // isLoading: false,0
  //   isAuth: false,
  // },
  // reducers: {},
  extraReducers: {
    // [signupThunk.pending](state, action) {
    //   console.log(action);
    //   state.auth.isLoading = true;
    //   state.auth.error = null;
    // },
    [signupThunk.fulfilled](state, action) {
      console.log(action);

      state.auth.user = action.payload.user;
      state.auth.token = action.payload.token;
      // state.auth.isLoading = false;
      state.auth.isAuth = true;
    },
    // [signupThunk.rejected](state, action) {
    //   console.log(action);

    //   state.auth.isLoading = false;
    //   state.auth.error = action.payload;
    // },
    // [loginThunk.pending](state, action) {
    //   console.log(action);

    //   state.auth.isLoading = true;
    //   state.auth.error = null;
    // },
    [loginThunk.fulfilled](state, action) {
      console.log(action.payload);
      console.log(state.auth);

      state.auth.user = action.payload.user;
      state.auth.token = action.payload.token;
      // state.auth.isLoading = false;
      state.auth.isAuth = true;
    },
    // [loginThunk.rejected](state, action) {
    //   console.log(state);
    //   console.log(action);
    //   console.log(action.error.message);
    //   // state.auth.error = action.error.message;

    //   // state.auth.isLoading = false;
    //   // state.auth.error = action.payload;
    // },
    // [getCurrentUserThunk.pending](state, action) {
    //   console.log(action);

    //   state.auth.isLoading = true;
    //   state.auth.error = null;
    // },
    [getCurrentUserThunk.fulfilled](state, action) {
      console.log(action);

      state.auth.user = action.payload;
      state.auth.isAuth = true;

      // if (action.payload.message) {
      //   return {
      //     ...state,
      //     isLoading: false,
      //     isAuth: false,
      //     error: action.payload,
      //   };
      // }
      // return {
      //   ...state,
      //   user: action.payload,
      //   isLoading: false,
      //   isAuth: true,
      // };
    },
    // [getCurrentUserThunk.rejected](state, action) {
    //   console.log(action);
    //   // state.auth.isLoading = false;
    //   // state.auth.isAuth = false;
    //   // state.auth.error = action.error.message;
    // },
    // [logoutThunk.pending](state, action) {
    //   console.log(action);

    //   state.auth.isLoading = true;
    //   state.auth.error = null;
    // },
    [logoutThunk.fulfilled](state, action) {
      console.log(action);

      state.auth.user = { name: null, email: null };
      state.auth.token = null;
      // state.auth.error = null;
      // state.auth.isLoading = false;
      state.auth.isAuth = false;

      // return {
      //   user: { name: '', email: '' },
      //   token: '',
      //   error: null,
      //   isLoading: false,
      //   isAuth: false,
      // };
    },
    // [logoutThunk.rejected](state, action) {
    //   console.log(action);

    //   state.auth.isLoading = false;
    //   state.auth.isAuth = false;
    //   state.auth.error = action.payload;
    // },
  },
});

export default authSlice.reducer;
