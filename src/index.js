import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { store, persistore } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={'Loading Persist...'} persistor={persistore}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
