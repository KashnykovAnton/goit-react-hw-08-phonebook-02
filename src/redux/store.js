import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsSlice } from 'redux/contacts/contactsSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import filter from 'redux/contacts/filterSlice';
import auth from './auth/authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const authPersistReducer = persistReducer(authPersistConfig, auth);

export const store = configureStore({
  reducer: {
    [contactsSlice.reducerPath]: contactsSlice.reducer,
    filter,
    // auth,
    auth: authPersistReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsSlice.middleware),
  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);

export const persistore = persistStore(store);
