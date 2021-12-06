import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
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
import filter from 'redux/contacts/filterSlice';
import { authReducer } from 'redux/auth';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const authPersistReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    [contactsSlice.reducerPath]: contactsSlice.reducer,
    filter,
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
